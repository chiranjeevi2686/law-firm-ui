"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="font-bold text-2xl text-gray-800">
          {siteConfig.firm.name}
        </Link>
        
        <div className="hidden md:flex gap-8 items-center">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-700 hover:text-yellow-600 font-medium transition"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-yellow-600 text-white px-6 py-2 rounded-lg hover:bg-yellow-700 transition font-medium"
          >
            Get Consultation
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 rounded p-1"
          aria-label="Toggle navigation"
          aria-expanded={mobileMenuOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      <div
        className={`md:hidden bg-white border-t border-gray-200 shadow-sm overflow-hidden transition-all duration-300 ease-out ${mobileMenuOpen ? "max-h-screen opacity-100 pointer-events-auto" : "max-h-0 opacity-0 pointer-events-none"}`}
      >
        <div className={`px-4 py-4 space-y-3 transition-opacity duration-300 ${mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block text-gray-700 hover:text-yellow-600 font-medium transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block text-blue-900 font-semibold bg-blue-100 px-4 py-2 rounded-lg text-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get Consultation
          </Link>
        </div>
      </div>
    </header>
  );
}
