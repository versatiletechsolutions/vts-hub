import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import { Footer } from "@/app/_components/footer";
import { Navbar } from "@/app/_components/navbar";
import { FlowingBackground } from "@/app/_components/flowing-background";
import { company } from "@/lib/site-content";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

const description = "Versatile Tech Solutions (VTS) develops practical tools and digital products to simplify complexity, expand capability, and help people do more. Explore what's coming.";

export const metadata: Metadata = {
  title: {
    default: "Versatile Tech Solutions (VTS) — Expanding what's possible",
    template: "%s | Versatile Tech Solutions",
  },
  description,
  applicationName: company.name,
  icons: { icon: "/VTS_Logo_Precision_Vector.svg" },
  openGraph: {
    type: "website",
    siteName: company.name,
    title: "Versatile Tech Solutions — Technology that helps you do more",
    description,
    locale: "en_US",
  },
  twitter: { card: "summary", title: company.name, description },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full bg-background text-foreground">
        <FlowingBackground />
        <a href="#main-content" className="sr-only fixed top-3 left-3 z-50 rounded-lg bg-cyan-200 px-4 py-3 text-sm font-semibold text-zinc-950 focus:not-sr-only">Skip to content</a>
        <div className="relative z-10 flex min-h-screen flex-col">
          <Navbar />
          <main id="main-content" tabIndex={-1} className="flex flex-1 flex-col">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
