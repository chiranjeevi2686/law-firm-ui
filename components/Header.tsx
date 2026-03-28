import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="font-bold text-2xl text-blue-900">
          {siteConfig.firm.name}
        </Link>
        
        <div className="hidden md:flex gap-8 items-center">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-700 hover:text-blue-900 font-medium transition"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-medium"
          >
            Get Consultation
          </Link>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-gray-700">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  );
}
