"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/Main/resizable-navbar";
import React, { useState } from "react";
import Link from "next/link";

export function NavbarDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="relative inline-flex items-center justify-center group">
            <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-green-500 to-green-800 group-hover:shadow-lg group-hover:shadow-green-500/50"></div>
            <Link
              href="/contact"
              className="relative inline-flex items-center justify-center w-full px-6 py-2 text-base font-normal text-black bg-[#FAFAFA] border border-transparent rounded-full"
            >
             Get In Touch
            </Link>
          </div>
        </NavBody>
        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>
          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <Link
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-black dark:text-black py-2 px-2 w-full block hover:bg-gray-50 rounded-lg transition-colors"
              >
                <span className="block text-base font-medium">{item.name}</span>
              </Link>
            ))}
            <div className="w-full border-t border-gray-200 pt-4 mt-2">
              <div className="flex w-full flex-col gap-3">
                <NavbarButton
                  onClick={() => setIsMobileMenuOpen(false)}
                  variant="primary"
                  className="w-full text-center"
                  as="button"
                >
                  Login
                </NavbarButton>
                <NavbarButton
                  onClick={() => setIsMobileMenuOpen(false)}
                  variant="primary"
                  className="w-full text-center bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 border-0 shadow-lg"
                  as="button"
                >
                  Book a call
                </NavbarButton>
              </div>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      {/* <DummyCxontent /> */}
      {/* Navbar */}
    </div>
  );
}