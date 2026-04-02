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
    tagline: "Advocate Pilla Neelakanta Chakravarthy — Corporate, Banking, DRT & Insolvency Specialist",
    phone: "+91 73820 41516",
    email: "pillaneelakantachakravarthy@gmail.com",
    address: "DNO:39-11-62, SECTOR-11, MURALINAGAR, VISAKHAPATNAM, 530007",
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
