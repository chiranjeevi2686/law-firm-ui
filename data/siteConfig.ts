export const siteConfig = {
  name: "PNC Law Associates",
  description: "Legal services by Advocate Pilla Neelakanta Chakravarthy",
  url: "https://pnc-law-associates.example",
  ogImage: "https://pnc-law-associates.example/og-image.png",
  
  // Navigation
  nav: [
    { label: "Home", href: "/" },
    { label: "Practice Areas", href: "/practice-areas" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],

  // Firm info
  firm: {
    name: "PNC LAW ASSOCIATES",
    tagline: "PILLA NEELAKANTA CHAKRAVARTHY — Legal Advocate",
    phone: "+91 73820 41516",
    email: "contact@pnc-law-associates.example",
    address: "39-11-62, Industrial Estate, Sector -11, Muralinagar, Birla junction, Visakhapatnam, Andhra Pradesh 530007, India",
  },

  // Contact form (Netlify Forms)
  contactForm: {
    name: "contact",
    method: "POST",
  },

  // SEO defaults
  seo: {
    titleTemplate: "%s | PNC Law Associates",
    defaultTitle: "PNC Law Associates - Expert Legal Solutions",
    defaultDescription: "PNC Law Associates provides comprehensive legal services including corporate law, family law, real estate, criminal defense, and employment law.",
  },
};
