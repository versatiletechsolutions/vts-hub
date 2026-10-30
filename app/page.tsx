import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, LayersIcon, MoveUpRightIcon, SparklesIcon } from "lucide-react";

import { ProductShowcase } from "@/app/_components/product-showcase";
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
        <div aria-hidden="true" className="pointer-events-none absolute top-0 left-0 -z-10 h-full w-full bg-[radial-gradient(ellipse_at_75%_45%,rgba(34,211,238,0.06),transparent_55%)]" />
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[1.5fr_0.8fr] lg:items-center">
          <div className="hero-copy">
            <p className="mb-6 text-[11px] font-medium tracking-[0.14em] text-cyan-300/80 uppercase">Expanding what&apos;s possible</p>
            <h1 id="hero-heading" className="type-display max-w-xl text-balance text-white">
              Technology that helps you <span className="text-cyan-200">do more.</span>
            </h1>
            <p className="type-body mt-5 max-w-lg text-zinc-400">
              We develop practical tools and digital products designed to simplify complex challenges, make powerful capabilities more accessible, and help people achieve more.
            </p>
            <Link href="#whats-coming" className="button-motion mt-7 inline-flex min-h-10 items-center gap-2 rounded-lg bg-cyan-300 px-4 py-2.5 text-[13px] font-normal text-zinc-950 hover:bg-cyan-200">
              Explore What&apos;s Coming <ArrowRightIcon className="size-4" aria-hidden="true" />
            </Link>
          </div>
          <div aria-hidden="true" className="relative mx-auto hidden aspect-square w-full max-w-sm items-center justify-center lg:flex">
            <div className="absolute inset-0 rounded-full border border-cyan-200/8" />
            <div className="hero-orbit absolute inset-8 rounded-full border border-dashed border-cyan-200/12" />
            <div className="absolute inset-16 rounded-full border border-cyan-200/18 bg-cyan-200/3 shadow-[0_0_90px_rgba(34,211,238,0.05)]" />
            <div className="absolute top-8 left-[48%] size-2 rounded-full bg-cyan-200/70" />
            <div className="absolute right-16 bottom-[20%] size-1.5 rounded-full bg-indigo-300/70" />
            <Image src="/logo.svg" alt="" width={90} height={120} className="hero-logo h-28 w-auto" priority />
          </div>
        </div>
      </section>

      <section aria-labelledby="value-heading" className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <Reveal>
          <p className="text-[11px] font-medium tracking-[0.14em] text-zinc-500 uppercase">Our design priorities</p>
          <h2 id="value-heading" className="type-title mt-4 text-white">Built to make a difference.</h2>
          <p className="type-body mt-4 max-w-2xl text-zinc-400">These priorities guide what we build, from the problems we choose to the way our tools take shape.</p>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-3 md:gap-6">
          {priorities.map(({ number, title, description, icon: Icon }, index) => (
            <Reveal key={number} delay={index * 80} className="h-full">
              <article className="priority-card h-full rounded-2xl border border-white/10 bg-white/3 p-7 sm:p-8">
                <div className="flex items-center justify-between">
                  <Icon className="priority-icon size-6 text-cyan-200" strokeWidth={1.5} aria-hidden="true" />
                  <span className="font-mono text-xs text-zinc-600" aria-hidden="true">{number}</span>
                </div>
                <h3 className="type-subtitle mt-5 text-zinc-100">{title}</h3>
                <p className="type-body mt-3 max-w-sm text-zinc-400">{description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section aria-labelledby="mission-heading" className="border-y border-white/8 bg-white/2">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <Reveal>
            <p className="text-[11px] font-medium tracking-[0.14em] text-cyan-300/80 uppercase">Why we build</p>
            <h2 id="mission-heading" className="type-title mt-5 max-w-xl text-white">Technology should expand what people can accomplish.</h2>
          </Reveal>
          <Reveal delay={100} className="type-body space-y-5 text-zinc-400 lg:pt-8">
            <p>At Versatile Tech Solutions, we start with meaningful problems: tasks that take too much effort, capabilities that are hard to access, and ideas that need better tools.</p>
            <p>Our mission is to expand human capability through technology that solves meaningful problems, simplifies complexity, and unlocks new opportunities. We focus on usefulness, accessibility, and real-world outcomes, rather than innovation for its own sake.</p>
            <Link href="/company/about" className="inline-flex items-center gap-2 rounded-md py-1 text-[13px] font-normal text-cyan-200 transition-colors hover:text-white">About VTS <ArrowRightIcon className="size-4" aria-hidden="true" /></Link>
          </Reveal>
        </div>
      </section>

      <section id="whats-coming" aria-labelledby="products-heading" className="mx-auto w-full max-w-7xl scroll-mt-28 px-5 py-20 sm:px-8 sm:py-24">
        <Reveal>
          <p className="text-[11px] font-medium tracking-[0.14em] text-zinc-500 uppercase">Products & services</p>
          <h2 id="products-heading" className="type-title mt-4 text-white">Discover what&apos;s next.</h2>
          <ProductShowcase />
          <div className="mt-7 flex flex-col gap-3 text-[13px] sm:flex-row sm:items-center sm:gap-6">
            <p className="text-zinc-400">Interested in what we&apos;re building?</p>
            <Link href="/company/contact" className="inline-flex items-center gap-2 self-start rounded-md py-1 font-normal text-cyan-200 transition-colors hover:text-white">Connect with VTS <ArrowRightIcon className="size-4" aria-hidden="true" /></Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
