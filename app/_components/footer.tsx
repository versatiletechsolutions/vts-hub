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
      <div className="site-shell grid gap-10 py-12 text-sm sm:grid-cols-2 lg:grid-cols-[1.3fr_0.6fr_1fr]">
        <div>
          <Link href="/" aria-label="Versatile Tech Solutions home" className="inline-flex">
            <Image src="/vtslogorectangle.png" unoptimized alt="" width={1254} height={1000} sizes="64px" className="relative top-0 size-62 rounded-lg object-contain" />
          </Link>
          <p className="mt-3 text-zinc-500">{company.tagline}</p>
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
      <div className="site-shell border-t border-white/8 py-5 text-xs leading-6 text-zinc-500">
        © {new Date().getFullYear()} {company.name}. All rights reserved.
      </div>
    </footer>
  );
}
