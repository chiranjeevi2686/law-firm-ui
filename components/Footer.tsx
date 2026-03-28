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

        <div className="border-t border-gray-700 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} {siteConfig.firm.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
