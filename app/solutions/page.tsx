import type { Metadata } from "next";

import { ComingSoon } from "@/app/_components/coming-soon";

export const metadata: Metadata = {
  title: "Solutions — Coming soon",
  description: "VTS is developing practical AI solutions for people and organizations. Discover our approach to simplifying complexity and expanding capability.",
};

export default function SolutionsPage() {
  return <ComingSoon description="We're exploring how AI can make complex work easier for people and organizations. Our first solutions are in development. As they become available, we'll explain who they're for, the problems they address, and how they work." />;
}
