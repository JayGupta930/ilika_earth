import { requireSiteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap() {
  const baseUrl = requireSiteUrl();
  const lastModified = new Date();
  const routes = [
    { path: "/", priority: 1 },
    { path: "/about", priority: 0.8 },
    { path: "/services", priority: 0.9 },
    { path: "/contact", priority: 0.7 },
    { path: "/privacy", priority: 0.3 },
    { path: "/terms", priority: 0.3 },
  ];

  return routes.map(({ path, priority }) => ({
    url: new URL(path, `${baseUrl}/`).toString(),
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}
