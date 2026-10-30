export function ComingSoon({ description }: { description: string }) {
  return (
    <section className="site-shell flex min-h-[60svh] flex-1 items-center justify-center py-20 text-center sm:py-28">
      <div className="hero-copy w-full max-w-2xl">
        <h1 className="type-display text-white">Coming soon.</h1>
        <p className="type-body mx-auto mt-6 max-w-xl text-zinc-400">{description}</p>
      </div>
    </section>
  );
}
