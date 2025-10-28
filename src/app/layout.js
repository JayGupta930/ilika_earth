import "./globals.css";
import Footer from "../components/Footer";
import { NavbarDemo } from "@/components/Main/NavbarDemo";
import { Inter } from "next/font/google";   // 👈 Google font import

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Ilika Earth - Basifying a Greener Tomorrow",
  description: "Sustainable solutions for a greener future",
  icons: {
    icon: [{ url: "/home/ilika.png", type: "image/png", sizes: "32x32" }],
    shortcut: "/home/ilika.png",
    apple: "/home/ilika.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <NavbarDemo />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
