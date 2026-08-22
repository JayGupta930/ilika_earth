import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "About Ilika Greentech",
  description: "Learn how Ilika Greentech uses AI and IoT to help organizations manage ESG data, machinery performance, and sustainable operations.",
  path: "/about",
});

export default function AboutLayout({ children }) { return children; }
