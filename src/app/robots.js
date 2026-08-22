import { requireSiteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function robots() {
  const baseUrl = requireSiteUrl();
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/", "/dashboard/", "/login/", "/signup/"],
    },
    sitemap: new URL("/sitemap.xml", `${baseUrl}/`).toString(),
  };
}
