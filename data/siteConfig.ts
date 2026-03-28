export const siteConfig = {
  name: "Premier Law Firm",
  description: "Experienced legal solutions for your business and personal needs",
  url: "https://premierlaw.com",
  ogImage: "https://premierlaw.com/og-image.png",
  
  // Navigation
  nav: [
    { label: "Home", href: "/" },
    { label: "Practice Areas", href: "/practice-areas" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],

  // Firm info
  firm: {
    name: "Premier Law Firm",
    tagline: "Expert Legal Solutions",
    phone: "+1 (555) 123-4567",
    email: "hello@premierlaw.com",
    address: "123 Legal Street, Suite 100\nLos Angeles, CA 90001",
  },

  // Contact form (Netlify Forms)
  contactForm: {
    name: "contact",
    method: "POST",
  },

  // SEO defaults
  seo: {
    titleTemplate: "%s | Premier Law Firm",
    defaultTitle: "Premier Law Firm - Expert Legal Solutions",
    defaultDescription: "Premier Law Firm provides comprehensive legal services including corporate law, family law, real estate, criminal defense, and employment law.",
  },
};
