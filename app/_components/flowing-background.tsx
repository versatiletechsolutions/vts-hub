"use client";

import { useEffect, useRef } from "react";

// A bounded image size keeps the GPU texture small, even on wide displays.
const textureSource = "/_next/image?url=%2Fbackgrounds%2Fvts-blue-flow.jpg&w=1920&q=75";

function createFlow(canvas: HTMLCanvasElement, root: HTMLDivElement) {
  const gl = canvas.getContext("webgl", { alpha: false, antialias: false, depth: false, powerPreference: "low-power" });
  if (!gl) return null;

  const compile = (type: number, source: string) => {
    const shader = gl.createShader(type);
    if (!shader) return null;
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (gl.getShaderParameter(shader, gl.COMPILE_STATUS)) return shader;
    gl.deleteShader(shader);
    return null;
  };

  const vertex = compile(gl.VERTEX_SHADER, `
    attribute vec2 a_position;
    varying vec2 v_uv;
    void main() {
      v_uv = a_position * 0.5 + 0.5;
      gl_Position = vec4(a_position, 0.0, 1.0);
    }
  `);
  const fragment = compile(gl.FRAGMENT_SHADER, `
    precision mediump float;
    uniform sampler2D u_image;
    uniform vec2 u_resolution;
    uniform float u_time;
    varying vec2 v_uv;

    void main() {
      vec2 flow = vec2(
        sin(v_uv.y * 5.0 + u_time) * 0.012,
        cos(v_uv.x * 4.0 - u_time) * 0.009
      );
      vec2 uv = v_uv + flow;

      // Match CSS background-size: cover for the supplied 2:1 artwork.
      float screenAspect = u_resolution.x / u_resolution.y;
      vec2 cover = vec2(min(1.0, screenAspect / 2.0), min(1.0, 2.0 / screenAspect));
      uv = (uv - 0.5) * cover + 0.5;
      gl_FragColor = texture2D(u_image, clamp(uv, 0.001, 0.999));
    }
  `);
  if (!vertex || !fragment) {
    if (vertex) gl.deleteShader(vertex);
    if (fragment) gl.deleteShader(fragment);
    return null;
  }

  const program = gl.createProgram();
  if (!program) {
    gl.deleteShader(vertex);
    gl.deleteShader(fragment);
    return null;
  }
  gl.attachShader(program, vertex);
  gl.attachShader(program, fragment);
  gl.linkProgram(program);
  gl.deleteShader(vertex);
  gl.deleteShader(fragment);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    gl.deleteProgram(program);
    return null;
  }

  const buffer = gl.createBuffer();
  const texture = gl.createTexture();
  if (!buffer || !texture) {
    if (buffer) gl.deleteBuffer(buffer);
    if (texture) gl.deleteTexture(texture);
    gl.deleteProgram(program);
    return null;
  }
  gl.useProgram(program);
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);
  const position = gl.getAttribLocation(program, "a_position");
  gl.enableVertexAttribArray(position);
  gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
  gl.activeTexture(gl.TEXTURE0);
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.uniform1i(gl.getUniformLocation(program, "u_image"), 0);

  const resolution = gl.getUniformLocation(program, "u_resolution");
  const time = gl.getUniformLocation(program, "u_time");
  let ready = false;
  let disposed = false;
  const image = new window.Image();

  const resize = () => {
    const width = Math.max(1, window.innerWidth);
    const height = Math.max(1, window.innerHeight);
    const ratio = Math.min(window.devicePixelRatio || 1, 1.25, Math.sqrt(2_000_000 / (width * height)));
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.uniform2f(resolution, width, height);
  };

  const draw = (elapsed: number) => {
    if (!ready || disposed || gl.isContextLost()) return;
    gl.uniform1f(time, ((elapsed / 1000) * 0.16) % (Math.PI * 2));
    gl.drawArrays(gl.TRIANGLES, 0, 6);
  };

  image.onload = () => {
    if (disposed || gl.isContextLost()) return;
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
    ready = true;
    resize();
    draw(0);
    root.dataset.flowReady = "true";
  };
  image.src = textureSource;

  const lost = () => {
    ready = false;
    delete root.dataset.flowReady;
  };
  canvas.addEventListener("webglcontextlost", lost);

  return {
    draw,
    resize,
    dispose() {
      disposed = true;
      image.onload = null;
      canvas.removeEventListener("webglcontextlost", lost);
      delete root.dataset.flowReady;
      gl.deleteTexture(texture);
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
    },
  };
}

export function FlowingBackground() {
  const rootRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const canvas = canvasRef.current;
    if (!root || !canvas) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktop = window.matchMedia("(min-width: 768px)");
    let stop = () => {};

    const configure = () => {
      stop();
      stop = () => {};
      if (reduceMotion.matches || !desktop.matches) return;

      const flow = createFlow(canvas, root);
      if (!flow) return;
      let frame = 0;
      let lastTimestamp = 0;
      let lastPaint = 0;
      let elapsed = 0;

      const animate = (timestamp: number) => {
        frame = 0;
        if (document.hidden) return;
        if (lastTimestamp) elapsed += Math.min(timestamp - lastTimestamp, 100);
        lastTimestamp = timestamp;
        // The gentle loop is independent of input and capped at 30 draws/second.
        if (timestamp - lastPaint >= 1000 / 30) {
          flow.draw(elapsed);
          lastPaint = timestamp;
        }
        frame = window.requestAnimationFrame(animate);
      };
      const schedule = () => {
        if (!frame && !document.hidden) frame = window.requestAnimationFrame(animate);
      };
      const resize = () => {
        flow.resize();
        flow.draw(elapsed);
      };
      const visibility = () => {
        window.cancelAnimationFrame(frame);
        frame = 0;
        lastTimestamp = 0;
        lastPaint = 0;
        if (!document.hidden) schedule();
      };

      window.addEventListener("resize", resize, { passive: true });
      document.addEventListener("visibilitychange", visibility);
      schedule();

      stop = () => {
        window.cancelAnimationFrame(frame);
        window.removeEventListener("resize", resize);
        document.removeEventListener("visibilitychange", visibility);
        flow.dispose();
      };
    };

    configure();
    reduceMotion.addEventListener("change", configure);
    desktop.addEventListener("change", configure);
    return () => {
      stop();
      reduceMotion.removeEventListener("change", configure);
      desktop.removeEventListener("change", configure);
    };
  }, []);

  return (
    <div ref={rootRef} className="site-background" aria-hidden="true">
      <div className="background-artwork">
        <div className="background-image" />
        <canvas ref={canvasRef} className="background-flow" />
      </div>
      <div className="background-shade" />
    </div>
  );
}
