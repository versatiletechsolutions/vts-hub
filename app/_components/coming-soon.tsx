import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import { company } from "@/lib/site-content";

export function ComingSoon({ section, description }: { section: string; description: string }) {
  return (
    <section className="page-enter relative isolate flex flex-1 items-center overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute -top-24 right-0 -z-10 size-[30rem] rounded-full bg-cyan-400/5 blur-3xl" />
      <div className="mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <p className="text-[11px] font-medium tracking-[0.14em] text-cyan-300/80 uppercase">{section}</p>
        <h1 className="type-display mt-5 text-white">Coming soon.</h1>
        <p className="type-body mt-5 max-w-xl text-zinc-400">{description}</p>
        <div className="mt-12 flex max-w-2xl flex-col gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] leading-6 text-zinc-400">Have a question or a problem you&apos;d like to discuss?</p>
          <a href={`mailto:${company.email}`} className="button-motion inline-flex shrink-0 items-center gap-2 self-start rounded-lg bg-cyan-300 min-h-10 px-4 py-2.5 text-[13px] font-normal text-zinc-950 hover:bg-cyan-200 sm:self-auto">
            Get in touch <ArrowRightIcon className="size-4" aria-hidden="true" />
          </a>
        </div>
        <Link href="/#whats-coming" className="mt-8 inline-block rounded-md py-1 text-[13px] text-zinc-400 transition-colors hover:text-white">Back to what&apos;s next</Link>
      </div>
    </section>
  );
}
