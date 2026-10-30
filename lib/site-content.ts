export const company = {
  name: "Versatile Tech Solutions",
  abbreviation: "VTS",
  tagline: "Expanding what's possible.",
  promise: "Technology that helps people do more.",
  email: "versatiletechsolutions1@gmail.com",
  mission:
    "To expand human capability through technology that solves meaningful problems, simplifies complexity, and unlocks new opportunities.",
};

export type Product = {
  id: string;
  name: string;
  identity: { initials: string; logoSrc?: string };
  problem: string;
  benefit: string;
  howItWorks: string;
  status: "In development" | "Early access" | "Available";
  cta: { label: string; href: string };
};

// Add only real products approved for public display. An empty list shows
// the development message instead of sample products or an empty grid.
export const products: Product[] = [];
