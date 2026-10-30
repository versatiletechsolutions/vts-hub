import Image from "next/image";
import Link from "next/link";

const navigation = [
  { label: "Products", href: "/products" },
  { label: "Solutions", href: "/solutions" },
  { label: "About", href: "/company/about" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/8 bg-background/80 backdrop-blur-xl">
      <div className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-x-5 gap-y-2 px-5 py-3 sm:px-8 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-x-8 lg:px-12">
        <Link href="/" aria-label="Versatile Tech Solutions home" className="flex min-w-0 items-center gap-3 justify-self-start rounded-md">
          <Image src="/logo.svg" alt="" width={30} height={40} className="h-7 w-auto shrink-0" />
          <span className="text-base leading-tight font-normal tracking-[-0.035em] text-zinc-100 sm:text-xl">Versatile Tech Solutions</span>
        </Link>

        <nav aria-label="Main navigation" className="col-span-2 row-start-2 justify-self-center lg:col-span-1 lg:col-start-2 lg:row-start-1">
          <ul className="flex items-center gap-7 sm:gap-9">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="header-tab text-base font-normal text-zinc-300 hover:text-white sm:text-[17px]">{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link href="/company/contact" className="col-start-2 row-start-1 inline-flex min-h-10 items-center justify-center justify-self-end rounded-lg border border-white/10 px-4 py-2 text-[15px] font-normal text-zinc-200 transition-colors duration-200 hover:bg-white/6 hover:text-white lg:col-start-3">Contact</Link>
      </div>
    </header>
  );
}
