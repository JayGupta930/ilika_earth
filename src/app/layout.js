import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import Navbar from "../components/Navbar";

import Footer from "../components/Footer";
import { NavbarDemo } from "@/components/Main/NavbarDemo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ilika Earth - Basifying a Greener Tomorrow",
  description: "Sustainable solutions for a greener future",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <Navbar /> */}
        <NavbarDemo />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
