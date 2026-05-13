import { siteConfig } from "@/data/siteConfig";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Firm Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">{siteConfig.firm.name}</h3>
            <p className="text-sm mb-4">{siteConfig.firm.tagline}</p>
            <div className="space-y-2 text-sm">
              <p>📞 {siteConfig.firm.phone}</p>
              <p>✉️ {siteConfig.firm.email}</p>
              {siteConfig.firm.linkedin && (
                <p className="flex items-center gap-2">
                  <span>LinkedIn</span>
                  <a
                    href={siteConfig.firm.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="PNC Law Associates LinkedIn profile"
                    className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-[#0A66C2] text-white transition hover:bg-[#004182]"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
                      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.62 0 4.29 2.38 4.29 5.48v6.26ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V9h3.56v11.45Z" />
                    </svg>
                  </a>
                </p>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-white transition">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-4">Address</h4>
            <p className="text-sm whitespace-pre-line">{siteConfig.firm.address}</p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-sm space-y-2">
          <p>&copy; {new Date().getFullYear()} {siteConfig.firm.name}. All rights reserved.</p>
          <div className="flex items-center justify-center gap-4">
            <a href="/privacy-policy" className="hover:text-white transition underline">
              Privacy Policy
            </a>
            <span className="text-gray-600">|</span>
            <a href="/disclaimer" className="hover:text-white transition underline">
              Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
