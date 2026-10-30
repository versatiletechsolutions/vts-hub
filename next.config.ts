import type { NextConfig } from "next";

const retiredProductPaths = [
  "/products/revuelto",
  "/products/kazi",
  "/products/workflows",
  "/products/agents",
  "/products/templates",
  "/products/dashboards",
  "/learning/tutorial",
  "/learning/courses",
];

const retiredSolutionPaths = [
  "/solutions/ai-powered-analytics-and-insights",
  "/solutions/independent",
  "/solutions/smbs",
  "/solutions/enterprise",
  "/solutions/automation",
  "/solutions/data",
  "/solutions/media-entertainment",
  "/solutions/finance",
  "/solutions/sports",
  "/solutions/retail",
];

const nextConfig: NextConfig = {
  redirects() {
    return [
      ...retiredProductPaths.map((source) => ({ source, destination: "/products", permanent: true })),
      ...retiredSolutionPaths.map((source) => ({ source, destination: "/solutions", permanent: true })),
    ];
  },
};

export default nextConfig;
