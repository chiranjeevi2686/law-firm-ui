import { siteConfig } from "@/data/siteConfig";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | PNC Law Associates",
  description: "Learn about PNC Law Associates's history, mission, and experienced team of attorneys",
};

export default function AboutPage() {
  const team = [
    {
      name: "Pilla Neelakanta Chakravarthy",
      title: "Advocate / Legal Officer",
      specialty: "Corporate, Banking, DRT, Consumer, Civil & Criminal Litigation",
      bio: "4+ years of experience in corporate law, litigation, regulatory compliance, and debt recovery. Represented leading banks and NBFCs in DRT, SARFAESI, IBC and civil cases.",
      image: "/images/pnc.jpg",
      core: [
        "DRT & Banking Litigation",
        "SARFAESI & RDDBFI Act",
        "IBC/CIRP/Corporate Insolvency",
        "Consumer & Civil courts",
        "Legal drafting and opinion",
      ],
    },
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">About {siteConfig.firm.name}</h1>
          <p className="text-xl text-gray-100">
            A Legacy of Excellence in Legal Representation
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Story</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {siteConfig.firm.name} was formed to deliver focused legal support to financial institutions,
              corporations, and individuals. Led by Advocate Pilla Neelakanta Chakravarthy, our practice blends
              strategic litigation, regulatory compliance, and practical transaction advisory across corporate,
              banking, insolvency, and civil practice areas.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              With a commitment to delivering fast, clear, and high-quality counsel, we represent lenders and
              borrowers in DRT, SARFAESI, RDDBFI, IBC, consumer disputes and criminal cases. We use extensive
              court experience to secure recovery, enforce rights, and resolve disputes efficiently.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our client-first approach hinges on rigorous research, candid advice, and a track record of
              successful outcomes. We strive to be trusted legal partners for all stakeholders confronting
              legal complexities in modern commerce.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To provide practical, outcomes-oriented legal services built on deep knowledge of banking law,
                debt recovery, and corporate restructuring. We are committed to achieving results that protect
                client interests while ensuring regulatory compliance and process efficiency.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Core Values</h2>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-yellow-600 text-2xl flex-shrink-0">✓</span>
                  <span className="text-gray-700"><strong>Integrity</strong> - We uphold the highest ethical standards</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-yellow-600 text-2xl flex-shrink-0">✓</span>
                  <span className="text-gray-700"><strong>Excellence</strong> - We deliver superior legal work</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-yellow-600 text-2xl flex-shrink-0">✓</span>
                  <span className="text-gray-700"><strong>Dedication</strong> - We are committed to your success</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-yellow-600 text-2xl flex-shrink-0">✓</span>
                  <span className="text-gray-700"><strong>Accessibility</strong> - We communicate clearly and promptly</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-gray-900">Our Team</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-gray-50 p-8 rounded-lg">
                <div className="text-center mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-yellow-600"
                  />
                  <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-yellow-600 font-semibold">{member.title}</p>
                </div>
                <p className="text-sm text-gray-600 mb-3 font-semibold">Specialty: {member.specialty}</p>
                <p className="text-gray-700">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-gray-900">Why Clients Choose Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="text-3xl">⭐</div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Proven Track Record</h3>
                <p className="text-gray-700">
                  Decades of successful outcomes across all practice areas
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="text-3xl">👥</div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Team</h3>
                <p className="text-gray-700">
                  Experienced attorneys specializing in their respective areas
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="text-3xl">💬</div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Clear Communication</h3>
                <p className="text-gray-700">
                  We explain legal matters in plain, understandable language
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="text-3xl">💰</div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Transparent Fees</h3>
                <p className="text-gray-700">
                  No hidden charges - upfront, honest pricing
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 text-gray-100">
            Contact us today to discuss how we can help with your legal needs.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-gray-800 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
          >
            Schedule a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
