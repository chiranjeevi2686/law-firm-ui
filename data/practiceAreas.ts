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
    title: "Corporate & Banking Litigation",
    icon: "📊",
    description: "Representation for corporates, banks, NBFCs, and financial institutions in dispute resolution and compliance",
    services: [
      "DRT & SARFAESI proceedings",
      "IBC / CIRP and recovery litigation",
      "Corporate governance & insolvency advice",
      "Banking contract enforcement",
    ],
    details: "Focused on court and tribunal practice in Indian jurisdictions, including DRT, NCLT, and High Courts. We represent lenders and borrowers in structured recovery strategies, insolvency resolution and pre-litigative settlement.",
  },
  {
    slug: "family-law",
    title: "Family Law",
    icon: "👨‍👩‍👧‍👦",
    description: "Sensitive and practical guidance for family disputes and matrimonial issues in Indian courts",
    services: [
      "Divorce & Judicial Separation",
      "Child Custody & Support",
      "Maintenance & Domestic Violence",
      "Hindu Marriage & Special Marriage Act petitions",
    ],
    details: "We provide empathetic representation in family court matters, balancing client interests with effective courtroom strategy across Andhra Pradesh and national forums.",
  },
  {
    slug: "real-estate-law",
    title: "Real Estate & Property Disputes",
    icon: "🏠",
    description: "Expert legal support for property title, registration, and dispute resolution",
    services: [
      "Title verification & due diligence",
      "Sale/purchase agreement drafting",
      "Lease disputes & eviction matters",
      "Civil court litigation for encumbrances",
    ],
    details: "Handling residential and commercial property disputes in City Civil Court, subordinate courts and High Court writ matters, we secure lawful rights for buyers, sellers and developers.",
  },
  {
    slug: "criminal-law",
    title: "Criminal Litigation",
    icon: "⚖️",
    description: "Practical defense and prosecution support in criminal cases, white-collar and economic offences",
    services: [
      "Economic offence defense (bank fraud, cheating)",
      "Securities-related criminal petitions",
      "Failure of repayment / criminal breach of trust",
      "Arrest bail and anticipatory bail", 
    ],
    details: "Strong track record in criminal courts, including cases with banking default, financial fraud, and consumer dispute cross-overs. We frame legal strategy with both defense and remediation path options.",
  },
  {
    slug: "employment-law",
    title: "Consumer & Employment Disputes",
    icon: "👔",
    description: "Resolution and enforcement in employment and consumer claims under RDDBFI/Consumer Protection Act",
    services: [
      "RDDBFI Act recovery proceedings",
      "Consumer court claims & appeals",
      "Employer/employee contractual disputes",
      "Regulatory compliance in labour matters",
    ],
    details: "We advise on workplace compliance and represent clients in consumer and labour tribunals for fast, enforceable outcomes. This area also supports corporate clients managing employee exits and liability risk.",
  },
];
