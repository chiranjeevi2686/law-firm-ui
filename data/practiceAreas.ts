export interface PracticeArea {
  slug: string;
  title: string;
  description: string;
  icon: string;
  services: string[];
  details: string;
}

export const practiceAreas: PracticeArea[] = [
  {
    slug: "corporate-law",
    title: "Corporate Law",
    icon: "📊",
    description: "Comprehensive legal solutions for business formation, contracts, and governance",
    services: [
      "Business Formation & Structuring",
      "Contract Drafting & Negotiation",
      "Corporate Governance",
      "Mergers & Acquisitions",
    ],
    details: "We provide comprehensive legal guidance for companies of all sizes, from startups to established corporations. Our corporate law team specializes in business formation, contract negotiation, and corporate governance matters.",
  },
  {
    slug: "family-law",
    title: "Family Law",
    icon: "👨‍👩‍👧‍👦",
    description: "Sensitive and practical guidance for all your family law matters",
    services: [
      "Divorce & Separation",
      "Child Custody & Support",
      "Property Division",
      "Prenuptial Agreements",
    ],
    details: "Our experienced family law attorneys understand the emotional complexity of family matters. We provide compassionate yet practical guidance to protect your rights and interests.",
  },
  {
    slug: "real-estate-law",
    title: "Real Estate Law",
    icon: "🏠",
    description: "Expert guidance on property transactions and real estate matters",
    services: [
      "Residential Property Sales",
      "Commercial Real Estate",
      "Lease Agreements",
      "Property Disputes",
    ],
    details: "From residential home purchases to complex commercial real estate transactions, our team ensures smooth closings and protects your investment.",
  },
  {
    slug: "criminal-law",
    title: "Criminal Law",
    icon: "⚖️",
    description: "Vigorous defense and legal representation for criminal matters",
    services: [
      "Criminal Defense",
      "DUI/DWI Defense",
      "White Collar Crimes",
      "Felony & Misdemeanor Cases",
    ],
    details: "Our skilled criminal defense attorneys provide aggressive representation to protect your rights throughout the legal process.",
  },
  {
    slug: "employment-law",
    title: "Employment Law",
    icon: "👔",
    description: "Legal guidance for employment disputes and workplace issues",
    services: [
      "Wrongful Termination",
      "Discrimination Claims",
      "Wage & Hour Disputes",
      "Workplace Harassment",
    ],
    details: "We represent both employees and employers in all employment-related matters, from negotiations to litigation.",
  },
];
