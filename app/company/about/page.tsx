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
    <section className="page-enter site-shell py-20 sm:py-28">
      <p className="text-[11px] font-medium tracking-[0.14em] text-cyan-300/80 uppercase">Company · About VTS</p>
      <h1 className="type-display mt-5 max-w-2xl text-balance text-white">Technology that helps people do more.</h1>
      <p className="type-body mt-6 max-w-2xl text-zinc-400">Versatile Tech Solutions creates practical tools and digital products to make challenging tasks easier and useful capabilities more accessible.</p>
      <div className="mt-14 grid gap-8 border-t border-white/10 pt-10 lg:grid-cols-[0.5fr_1fr] lg:gap-16">
        <h2 className="type-subtitle text-white">Our mission</h2>
        <div className="max-w-2xl type-body space-y-5 text-zinc-400">
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
