import Link from "next/link";
import { ArrowRightIcon, LayersIcon, MoveUpRightIcon, SparklesIcon } from "lucide-react";

import { Reveal } from "@/app/_components/reveal";

const priorities = [
  {
    number: "01",
    title: "Simplify Complexity",
    description: "Make challenging tasks and complicated processes easier to navigate and accomplish.",
    icon: LayersIcon,
  },
  {
    number: "02",
    title: "Expand Capability",
    description: "Put useful tools and technology within reach, helping people accomplish more.",
    icon: SparklesIcon,
  },
  {
    number: "03",
    title: "Create Opportunity",
    description: "Develop solutions that open new possibilities for learning, working, creating, and solving problems.",
    icon: MoveUpRightIcon,
  },
];

export default function Home() {
  return (
    <>
      <section aria-labelledby="hero-heading" className="relative isolate overflow-hidden border-b border-white/8">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_45%,rgba(34,211,238,0.07),transparent_65%)]" />
        <div className="site-shell flex min-h-[62svh] items-center justify-center py-24 sm:py-28">
          <div className="hero-copy w-full max-w-4xl text-center">
            <h1 id="hero-heading" className="type-display mx-auto text-7xl text-white">
              Technology that helps you <span className="headline-gradient whitespace-nowrap">do more.</span>
            </h1>
            <p className="type-body mx-auto mt-7 max-w-2xl tracking-tight text-zinc-300">
              We develop products designed to help you acheive more.
            </p>
            <div className="mt-10 inline-flex">
              <Link href="/products" className="explore-button breathing-button">
                <span className="cta-text-gradient">Explore What&apos;s Coming</span>
                <ArrowRightIcon className="size-[18px] shrink-0" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="value-heading" className="site-shell py-20 sm:py-24">
        <Reveal>
          <p className="text-xs font-medium tracking-[0.14em] text-zinc-400 uppercase">Our design priorities</p>
          <h2 id="value-heading" className="type-title mt-4 text-white">Built to make a difference.</h2>
          <p className="type-body mt-4 max-w-2xl text-zinc-400">These priorities guide what we build, from the problems we choose to the way our tools take shape.</p>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-3 md:gap-6">
          {priorities.map(({ number, title, description, icon: Icon }, index) => (
            <Reveal key={number} delay={index * 80} className="h-full">
              <article className="priority-card h-full rounded-3xl border border-white/12 bg-white/3 p-7 sm:p-9">
                <div className="flex items-center justify-between">
                  <div className="flex size-12 items-center justify-center rounded-2xl border border-cyan-200/15 bg-cyan-200/5">
                    <Icon className="priority-icon size-6 text-cyan-200" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <span className="font-mono text-xs text-zinc-500" aria-hidden="true">{number}</span>
                </div>
                <h3 className="type-subtitle mt-7 text-zinc-100">{title}</h3>
                <p className="type-body mt-3 max-w-sm text-zinc-400">{description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section aria-labelledby="mission-heading" className="border-y border-white/8 bg-white/2">
        <div className="site-shell grid gap-8 py-20 sm:py-24 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <Reveal>
            <p className="text-xs font-medium tracking-[0.14em] text-cyan-300/80 uppercase">Why we build</p>
            <h2 id="mission-heading" className="type-title mt-5 max-w-xl text-white">Technology should expand what people can accomplish.</h2>
          </Reveal>
          <Reveal delay={100} className="type-body space-y-5 text-zinc-400 lg:pt-8">
            <p>At Versatile Tech Solutions, we start with meaningful problems: tasks that take too much effort, capabilities that are hard to access, and ideas that need better tools.</p>
            <p>Our mission is to expand human capability through technology that solves meaningful problems, simplifies complexity, and unlocks new opportunities. We focus on usefulness, accessibility, and real-world outcomes, rather than innovation for its own sake.</p>
            <Link href="/company/about" className="inline-flex items-center gap-2 rounded-md py-1 text-base font-medium text-cyan-200 transition-colors hover:text-white">About VTS <ArrowRightIcon className="size-4" aria-hidden="true" /></Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
