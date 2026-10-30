"use client";

const fieldClassName = "mt-2 w-full rounded-lg border border-white/12 bg-white/3 px-4 py-3 text-sm text-zinc-100 outline-none transition-colors placeholder:text-zinc-600 focus:border-cyan-300/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300/40";

export function ContactForm() {
  return (
    <form aria-label="Contact VTS" onSubmit={(event) => event.preventDefault()} className="grid gap-6 rounded-2xl border border-white/10 bg-white/2 p-6 sm:p-8">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="text-[13px] text-zinc-300">Name</label>
          <input id="contact-name" name="name" type="text" autoComplete="name" placeholder="Your name" className={fieldClassName} />
        </div>
        <div>
          <label htmlFor="contact-email" className="text-[13px] text-zinc-300">Email</label>
          <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" className={fieldClassName} />
        </div>
      </div>
      <div>
        <label htmlFor="contact-message" className="text-[13px] text-zinc-300">Message</label>
        <textarea id="contact-message" name="message" rows={6} placeholder="How can we help?" className={`${fieldClassName} min-h-36 resize-y`} />
      </div>
      <button type="button" className="button-motion inline-flex min-h-10 items-center justify-center justify-self-start rounded-lg bg-cyan-300 px-5 py-2.5 text-sm font-normal text-zinc-950 hover:bg-cyan-200">Send message</button>
    </form>
  );
}
