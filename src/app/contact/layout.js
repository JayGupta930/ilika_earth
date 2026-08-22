import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Contact Ilika Earth",
  description: "Talk to the Ilika Earth team about ESG intelligence, sustainability reporting, AI, and IoT solutions for your organization.",
  path: "/contact",
});

export default function ContactLayout({ children }) { return children; }
