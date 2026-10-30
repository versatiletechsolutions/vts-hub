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
      <div className="site-shell grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-5 gap-y-3 py-5 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-x-8">
        <Link href="/" aria-label="Versatile Tech Solutions home" className="flex">
          <Image src="/vtslogorectangle.png" alt="VTS Logo" width={600} height={400} className="rounded-md object-contain lg:w-70 w-50" />
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
