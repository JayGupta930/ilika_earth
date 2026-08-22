import { COMPANY_INFO } from "@/lib/constants";

const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const siteUrl = rawSiteUrl ? rawSiteUrl.replace(/\/$/, "") : null;

export const siteConfig = {
  name: COMPANY_INFO.name,
  legalName: "ilika Greentech Pvt. Ltd.",
  description:
    "Ilika Earth provides AI- and IoT-enabled ESG intelligence, machinery management, and sustainability reporting solutions.",
  locale: "en_IN",
  language: "en",
  email: COMPANY_INFO.email,
  logo: "/home/ilika.png",
  socialImage: "/home/ilika.png",
};

export function absoluteUrl(path = "/") {
  if (!siteUrl) return undefined;
  return new URL(path, `${siteUrl}/`).toString();
}

export function createPageMetadata({ title, description, path, robots }) {
  const canonical = absoluteUrl(path);
  const image = absoluteUrl(siteConfig.socialImage);

  return {
    title,
    description,
    ...(robots && { robots }),
    ...(canonical && {
      alternates: { canonical },
      openGraph: {
        title,
        description,
        url: canonical,
        siteName: siteConfig.name,
        locale: siteConfig.locale,
        type: "website",
        ...(image && { images: [{ url: image, alt: `${siteConfig.name} logo` }] }),
      },
      twitter: {
        card: "summary",
        title,
        description,
        ...(image && { images: [image] }),
      },
    }),
  };
}

export function requireSiteUrl() {
  if (!siteUrl) {
    throw new Error(
      "NEXT_PUBLIC_SITE_URL is required to generate sitemap.xml and robots.txt. Set it to the canonical production URL.",
    );
  }
  return siteUrl;
}
