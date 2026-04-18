export const siteConfig = {
  name: "PNC Law Associates",
  description: "Legal services by Advocate Pilla Neelakanta Chakravarthy in Andhra Pradesh",
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
    tagline: "Advocate Pilla Neelakanta Chakravarthy — Criminal, Corporate, DRT & Civil Litigation",
    phone: "+91 73820 41516",
    email: "pillaneelakantachakravarthy@gmail.com",
    address: "D.No: 39-11-62, Murali Nagar, Sector -11, Birla Junction, Visakhapatnam, Andhra Pradesh.\nPin code: 530007",
  },

  // Contact form (Netlify Forms)
  contactForm: {
    name: "contact",
    method: "POST",
  },

  // SEO defaults
  seo: {
    titleTemplate: "%s | PNC Law Associates",
    defaultTitle: "PNC Law Associates - Criminal & Corporate Litigation in Andhra Pradesh",
    defaultDescription: "PNC Law Associates, led by Advocate Pilla Neelakanta Chakravarthy, provides criminal defence, corporate litigation, DRT tribunal representation, and civil-commercial legal services across Andhra Pradesh.",
  },
};
