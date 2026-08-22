import "./globals.css";
import Footer from "../components/Footer";
import { NavbarDemo } from "@/components/Main/NavbarDemo";
import { Inter } from "next/font/google";
import { absoluteUrl, siteConfig, siteUrl } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  ...(siteUrl && { metadataBase: new URL(siteUrl) }),
  title: { default: "Ilika Earth | AI & IoT Sustainability Solutions", template: "%s | Ilika Earth" },
  description: siteConfig.description,
  keywords: ["ESG intelligence", "sustainability reporting", "IoT machinery management", "GHG emissions", "AI sustainability solutions"],
  authors: [{ name: siteConfig.legalName }],
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  ...(siteUrl && {
    alternates: { canonical: absoluteUrl("/") },
    openGraph: {
      title: "Ilika Earth | AI & IoT Sustainability Solutions",
      description: siteConfig.description,
      url: absoluteUrl("/"),
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [{ url: absoluteUrl(siteConfig.socialImage), alt: "Ilika Earth logo" }],
    },
    twitter: {
      card: "summary",
      title: "Ilika Earth | AI & IoT Sustainability Solutions",
      description: siteConfig.description,
      images: [absoluteUrl(siteConfig.socialImage)],
    },
  }),
  icons: {
    icon: [{ url: "/home/ilika.png", type: "image/png", sizes: "32x32" }],
    shortcut: [{ url: "/home/ilika.png", type: "image/png" }],
    apple: [{ url: "/home/ilika.png", type: "image/png", sizes: "180x180" }],
  },
};

export default function RootLayout({ children }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    email: siteConfig.email,
    logo: absoluteUrl(siteConfig.logo),
    sameAs: ["https://www.linkedin.com/company/ilika-earth/"],
    ...(siteUrl && { url: siteUrl }),
  };
  const websiteSchema = siteUrl
    ? { "@context": "https://schema.org", "@type": "WebSite", name: siteConfig.name, url: siteUrl, inLanguage: siteConfig.language }
    : null;

  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        {websiteSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />}
      </head>
      <body className={`${inter.variable} antialiased`}>
        <NavbarDemo />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
