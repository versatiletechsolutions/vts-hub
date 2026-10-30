import type { Metadata } from "next";

import { ComingSoon } from "@/app/_components/coming-soon";

export const metadata: Metadata = {
  title: "Products — Coming soon",
  description: "Explore what's coming from VTS: software, AI and automation, and learning tools designed to help people do more. Our first products are in development.",
};

export default function ProductsPage() {
  return <ComingSoon section="Products" description="We're developing practical tools across software, AI & automation, and learning. Our first products are in development. We'll share what they do and how to use them here as they become available." />;
}
