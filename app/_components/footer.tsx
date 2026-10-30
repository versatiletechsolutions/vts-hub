import Image from "next/image";
import Link from "next/link";

import { company } from "@/lib/site-content";

const footerLinks = [
  { label: "About", href: "/company/about" },
  { label: "Contact", href: "/company/contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/8">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-12 text-[13px] sm:grid-cols-2 sm:px-8 lg:grid-cols-[1.3fr_0.6fr_1fr]">
        <div>
          <Link href="/" aria-label="VTS home" className="inline-flex items-center gap-3 rounded-md">
            <Image src="/logo.svg" alt="" width={27} height={36} className="h-9 w-auto" />
            <span className="text-xl font-normal tracking-[-0.04em] text-zinc-100">VTS</span>
          </Link>
          <p className="mt-4 text-zinc-300">{company.name}</p>
          <p className="mt-2 text-zinc-500">{company.tagline}</p>
        </div>
        <nav aria-label="Company navigation">
          <p className="mb-4 text-[11px] font-medium tracking-[0.1em] text-zinc-500 uppercase">Company</p>
          <ul className="space-y-3">
            {footerLinks.map((link) => (
              <li key={link.href}><Link href={link.href} className="rounded-sm text-zinc-400 transition-colors hover:text-white">{link.label}</Link></li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="mb-4 text-[11px] font-medium tracking-[0.1em] text-zinc-500 uppercase">Get in touch</p>
          <a href={`mailto:${company.email}`} className="rounded-sm leading-7 break-all text-zinc-300 transition-colors hover:text-cyan-200">{company.email}</a>
        </div>
      </div>
      <div className="mx-auto w-full max-w-7xl border-t border-white/8 px-5 py-5 text-xs leading-6 text-zinc-500 sm:px-8">
        © {new Date().getFullYear()} {company.name}. All rights reserved.
      </div>
    </footer>
  );
}
