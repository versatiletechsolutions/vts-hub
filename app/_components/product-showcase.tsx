import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon, ArrowRightIcon } from "lucide-react";

import { products } from "@/lib/site-content";

export function ProductShowcase() {
  if (products.length === 0) {
    return (
      <div className="mt-10 flex flex-col gap-6 border-y border-white/10 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-2xl">
          <p className="mb-3 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.1em] text-cyan-200 uppercase">
            <span className="size-1.5 rounded-full bg-cyan-300" aria-hidden="true" />
            In development
          </p>
          <p className="type-body text-zinc-300">
            Our first solutions are in development. As they become available,
            you&apos;ll be able to explore them here.
          </p>
        </div>
        <Link href="/products" className="inline-flex shrink-0 items-center gap-2 self-start rounded-lg px-1 py-2 text-[13px] font-normal text-cyan-200 transition-colors hover:text-white sm:self-auto">
          What&apos;s coming <ArrowRightIcon className="size-4" aria-hidden="true" />
        </Link>
      </div>
    );
  }

  return (
    <div className="mt-10 grid gap-6 md:grid-cols-2">
      {products.map((product) => (
        <article key={product.id} className="flex flex-col rounded-2xl border border-white/10 bg-white/3 p-7 sm:p-8">
          <div className="flex items-center justify-between gap-4">
            <div className="flex size-14 items-center justify-center rounded-xl border border-white/10 bg-cyan-300/8 text-base font-medium text-cyan-200">
              {product.identity.logoSrc ? (
                <Image src={product.identity.logoSrc} alt={`${product.name} logo`} width={40} height={40} className="size-10 object-contain" />
              ) : product.identity.initials}
            </div>
            <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-300">{product.status}</span>
          </div>
          <h3 className="type-subtitle mt-6 text-white">{product.name}</h3>
          <p className="mt-3 text-base font-normal text-cyan-100">{product.benefit}</p>
          <p className="type-body mt-4 text-zinc-400">{product.problem}</p>
          <p className="type-body mt-3 text-zinc-400">{product.howItWorks}</p>
          <Link href={product.cta.href} className="mt-auto inline-flex items-center gap-2 self-start rounded-md pt-7 pb-1 text-[13px] font-normal text-cyan-200 hover:text-white">
            {product.cta.label} <ArrowUpRightIcon className="size-4" aria-hidden="true" />
          </Link>
        </article>
      ))}
    </div>
  );
}
