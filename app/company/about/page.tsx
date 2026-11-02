import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import { company } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "About VTS",
  description: "Learn about Versatile Tech Solutions and our mission to expand human capability through useful, accessible technology that solves meaningful problems.",
};

export default function AboutPage() {
  return (
    <section className="page-enter site-shell py-10">
      <h1 className="type-display mt-5 max-w-5xl text-balance text-white">Technology that helps people do more.</h1>
      <div className="mt-14 flex flex-col items-center gap-8 border-t border-white/10 pt-10 px-16 lg:px-30 pb-10">
        <h2 className="type-subtitle text-white items-start text-4xl">Our mission</h2>
        <div className="max-w-3xl type-body space-y-5 text-zinc-400 flex flex-col items-center">
          <p className="text-lg leading-8 font-normal tracking-[-0.02em] text-zinc-200">{company.mission}</p>
          <p>We start with what people need to accomplish. A product should address a meaningful problem, be clear to use, and offer practical value in everyday life or work.</p>
          <p>Our work can span different industries and technologies. The common thread is usefulness: helping people learn, work, create, and solve problems with less friction and more possibility.</p>
          <p>Our first solutions are in development. As they become available, we&apos;ll share who they&apos;re for, how they work, and the problems they help address.</p>
          <Link href="/products" className="inline-flex items-center gap-2 rounded-md py-1 text-[13px] font-normal text-cyan-200 transition-colors hover:text-white">Explore What&apos;s Coming <ArrowRightIcon className="size-4" aria-hidden="true" /></Link>
        </div>
      </div>
    </section>
  );
}
