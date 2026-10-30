"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!element || preference.matches || !("IntersectionObserver" in window)) return;

    let animation: Animation | undefined;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      element.removeAttribute("data-reveal-pending");
      animation = element.animate(
        [{ opacity: 0, transform: "translateY(18px)" }, { opacity: 1, transform: "translateY(0)" }],
        { duration: 600, delay, easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "backwards" },
      );
      observer.unobserve(element);
    }, { threshold: 0.1 });

    // Server-rendered content stays visible when JavaScript is unavailable.
    element.setAttribute("data-reveal-pending", "");
    observer.observe(element);

    const stopMotion = () => {
      if (!preference.matches) return;
      observer.disconnect();
      element.removeAttribute("data-reveal-pending");
      animation?.cancel();
    };
    preference.addEventListener("change", stopMotion);

    return () => {
      observer.disconnect();
      element.removeAttribute("data-reveal-pending");
      animation?.cancel();
      preference.removeEventListener("change", stopMotion);
    };
  }, [delay]);

  return <div ref={ref} className={className}>{children}</div>;
}
