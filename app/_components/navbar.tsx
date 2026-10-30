import Image from "next/image";
import Link from "next/link";

const navigation = [
  { label: "Products", href: "/products" },
  { label: "Solutions", href: "/solutions" },
  { label: "About", href: "/company/about" },
];

export function Navbar() {
  return (
    <header className="site-header sticky top-0 z-40 bg-black">
      <div className="site-shell grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-5 gap-y-3 py-5 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-x-8 lg:py-6">
        <Link href="/" aria-label="Versatile Tech Solutions home" className="flex min-w-0 items-center gap-2.5 justify-self-start rounded-md sm:gap-3">
          <Image src="/VTS_Logo_Precision_Vector.svg" unoptimized alt="" width={1254} height={1254} sizes="(min-width: 640px) 48px, 40px" className="size-10 shrink-0 rounded-lg object-contain sm:size-12" />
          <span className="text-[17px] leading-tight font-normal tracking-[-0.035em] text-zinc-100 sm:text-[22px]">Versatile Tech Solutions</span>
        </Link>

        <nav aria-label="Main navigation" className="col-span-2 row-start-2 justify-self-center lg:col-span-1 lg:col-start-2 lg:row-start-1">
          <ul className="flex items-center gap-7 sm:gap-9">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="header-tab text-[17px] font-normal text-zinc-300 hover:text-white sm:text-xl">{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link href="/company/contact" className="contact-button col-start-2 row-start-1 justify-self-end lg:col-start-3">Contact</Link>
      </div>
    </header>
  );
}
