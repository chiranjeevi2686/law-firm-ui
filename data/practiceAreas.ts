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
    title: "Corporate, Banking & DRT Litigation",
    icon: "📊",
    description: "Representation for corporates, banks, NBFCs and financial institutions in high-value dispute resolution and compliance",
    services: [
      "DRT tribunal cases and debt recovery actions",
      "SARFAESI, RDDBFI and enforcement proceedings",
      "IBC / CIRP and insolvency-linked disputes",
      "Corporate fraud and financial irregularity litigation",
    ],
    details: "Focused on court and tribunal practice in Indian jurisdictions, including DRT, NCLT and High Courts, this practice supports lenders, borrowers and corporates in complex recovery, insolvency and compliance litigation. We combine strategic advocacy with documentation and regulatory discipline to protect commercial interests.",
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
    title: "Civil & Property Litigation",
    icon: "🏠",
    description: "Strong representation in civil suits, property disputes and rights enforcement",
    services: [
      "Title verification and due diligence support",
      "Injunctions, partition and declaratory suits",
      "Lease disputes and eviction proceedings",
      "Civil appeals and writ-linked property matters",
    ],
    details: "From trial court suits to appellate remedies, we handle civil litigation with a focus on property rights, possession disputes, contractual breaches and interim relief. Our approach emphasizes strong pleadings, evidence strategy and timely case movement.",
  },
  {
    slug: "criminal-law",
    title: "Criminal Defence, ACB & CBI Matters",
    icon: "⚖️",
    description: "Focused criminal defence before District Courts and High Courts, including serious and statutory offences",
    services: [
      "Bail, anticipatory bail and trial defence",
      "POCSO, NDPS and statutory prosecution matters",
      "Corporate fraud and financial irregularity offences",
      "ACB and CBI investigation-linked proceedings",
    ],
    details: "Led by Advocate Pilla Neelakanta Chakravarthy, this practice addresses serious offences, constitutional criminal issues and white-collar disputes. We build defence strategy from FIR stage through trial and appellate stages while maintaining rights-protective, evidence-driven advocacy.",
  },
  {
    slug: "consumer-commercial-law",
    title: "Consumer & Commercial Court Litigation",
    icon: "💼",
    description: "Practical representation in consumer commissions, arbitration and commercial court disputes",
    services: [
      "Consumer commission complaints and appeals",
      "Commercial court suits and contractual claims",
      "Arbitration and interim relief petitions",
      "Business risk and dispute-avoidance advisory",
    ],
    details: "This practice handles commercial disagreements, supply and services disputes, and consumer rights litigation with a solution-focused strategy. We also represent clients in arbitration-linked proceedings and urgent injunction matters where business continuity is at stake.",
  },
  {
    slug: "pro-bono-legal-reform",
    title: "Pro Bono & Legal Reform",
    icon: "🤝",
    description: "Regular contribution to pro bono legal work and initiatives that support systemic legal reform",
    services: [
      "Pro bono case evaluation and representation",
      "Access-to-justice support for deserving matters",
      "Policy and legal reform participation",
      "Community legal awareness initiatives",
    ],
    details: "Alongside private practice, our office contributes to meaningful pro bono matters and legal reform engagement where legal intervention can create broader public impact. This reflects our commitment to justice beyond case outcomes.",
  },
];
