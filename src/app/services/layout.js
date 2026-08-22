import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "ESG, AI & IoT Sustainability Solutions",
  description: "Explore Ilika Earth's ESG intelligence, analytics, compliance, and sustainability technology solutions for responsible operations.",
  path: "/services",
});

export default function ServicesLayout({ children }) { return children; }
