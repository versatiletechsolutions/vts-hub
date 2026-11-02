import Image from "next/image";
import Link from "next/link";

import { company } from "@/lib/site-content";

const footerLinks = [
  { label: "About", href: "/company/about" },
  { label: "Contact", href: "/company/contact" },
];

export function Footer() {
  return (
    <footer className="site-footer relative bg-black">
      <div className="site-shell grid grid-cols-2 gap-x-6 gap-y-7 py-6 text-sm md:grid-cols-[minmax(7rem,0.55fr)_minmax(12rem,1fr)_minmax(15.5rem,1.5fr)] md:gap-x-8 md:py-8">
        <nav aria-label="Company navigation">
          <p className="mb-2 text-[11px] font-medium tracking-[0.1em] text-zinc-400 uppercase">Company</p>
          <ul className="space-y-2">
            {footerLinks.map((link) => (
              <li key={link.href}><Link href={link.href} className="rounded-sm text-zinc-300 transition-colors hover:text-cyan-200">{link.label}</Link></li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="mb-2 text-[11px] font-medium tracking-[0.1em] text-zinc-400 uppercase">Get in touch</p>
          <a href={`mailto:${company.email}`} className="rounded-sm leading-6 break-all text-zinc-300 transition-colors hover:text-cyan-200">{company.email}</a>
        </div>
        <div className="col-span-2 justify-self-end text-right md:col-span-1">
          <Link href="/" aria-label="Versatile Tech Solutions home" className="inline-flex">
            <Image src="/vtslogorectangle.png" unoptimized alt="" width={1672} height={941} sizes="248px" className="h-24 w-62 rounded-lg object-cover" />
          </Link>
          <p className="mt-1 text-zinc-400">{company.tagline}</p>
        </div>
      </div>
      <div className="site-shell border-t border-white/10 py-3 text-xs leading-5 text-zinc-400">
        © {new Date().getFullYear()} {company.name}. All rights reserved.
      </div>
    </footer>
  );
}
