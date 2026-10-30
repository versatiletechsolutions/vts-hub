import type { Metadata } from "next";

import { ContactForm } from "@/app/_components/contact-form";
import { company } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Contact VTS",
  description: "Connect with Versatile Tech Solutions. Ask about upcoming products or share a meaningful problem you'd like technology to help solve.",
};

export default function ContactPage() {
  return (
    <section className="page-enter mx-auto grid w-full max-w-7xl flex-1 gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16">
      <div>
        <p className="text-[11px] font-medium tracking-[0.14em] text-cyan-300/80 uppercase">Contact</p>
        <h1 className="type-display mt-5 text-balance text-white">Let&apos;s connect.</h1>
        <p className="type-body mt-5 max-w-xl text-zinc-400">Have a question about what we&apos;re building, or a problem you&apos;d like technology to help solve? We&apos;d like to hear from you.</p>
        <div className="mt-9 border-t border-white/10 pt-6">
          <p className="text-[11px] font-medium tracking-[0.1em] text-zinc-500 uppercase">Email VTS</p>
          <a href={`mailto:${company.email}`} className="mt-3 inline-block max-w-full rounded-md text-sm leading-7 break-all text-cyan-200 transition-colors hover:text-white">{company.email}</a>
        </div>
      </div>
      <ContactForm />
    </section>
  );
}
