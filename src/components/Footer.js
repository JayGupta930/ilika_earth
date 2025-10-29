"use client";

import Image from "next/image";
import Link from "next/link";
import { COMPANY_INFO, NAVIGATION_LINKS, SOCIAL_LINKS } from "../lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/home/ilika.png"
                alt="Ilika Logo"
                width={40}
                height={40}
                className="hover:scale-105 transition-transform duration-200"
              />
              <span className="font-bold text-xl text-white">{COMPANY_INFO.name}</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              {COMPANY_INFO.tagline} - Leading sustainable solutions for a greener future through innovative environmental technologies and practices.
            </p>
            <div className="text-gray-400 text-sm space-y-1">
              <p>{COMPANY_INFO.address.street}</p>
              <p>{COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} {COMPANY_INFO.address.zip}</p>
              <p className="mt-2">
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-green-400 transition-colors duration-200">
                  {COMPANY_INFO.email}
                </a>
              </p>
              <p>
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-green-400 transition-colors duration-200">
                  {COMPANY_INFO.phone}
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-green-400 transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links & Additional Info */}
          <div>
            <h3 className="font-semibold text-white mb-4">Follow Us</h3>
            <div className="space-y-2 mb-6">
              <a 
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-green-400 transition-colors duration-200 text-sm"
              >
                LinkedIn
              </a>
            </div>
            
            <div className="space-y-2">
              <Link 
                href="/privacy"
                className="block text-gray-400 hover:text-green-400 transition-colors duration-200 text-sm"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms"
                className="block text-gray-400 hover:text-green-400 transition-colors duration-200 text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} {COMPANY_INFO.name}. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">
            Building a sustainable future, one innovation at a time.
          </p>
        </div>
      </div>
    </footer>
  );
}
