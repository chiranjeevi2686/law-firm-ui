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
      name: "Name One",
      title: "Senior Founding Partner",
      specialty: "Corporate Law",
      bio: "25+ years of experience in corporate law and business transactions",
    },
    {
      name: "Name Two",
      title: "Partner",
      specialty: "Family Law",
      bio: "20+ years specializing in family law and mediation services",
    },
    {
      name: "Name Three",
      title: "Partner",
      specialty: "Real Estate Law",
      bio: "18+ years in residential and commercial real estate law",
    },
    {
      name: "Name Four",
      title: "Counsel",
      specialty: "Criminal Law",
      bio: "15+ years of criminal defense and prosecution experience",
    },
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">About {siteConfig.firm.name}</h1>
          <p className="text-xl text-blue-100">
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
              {siteConfig.firm.name} was founded in 2020 with a simple mission: to provide exceptional legal
              representation to businesses and individuals in need. Over the past years, we've grown from a
              small practice to a respected firm serving thousands of satisfied clients.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our success is built on a foundation of integrity, dedication, and a genuine commitment to
              achieving the best outcomes for our clients. We take pride in our work and maintain the highest
              ethical standards in all our legal practice.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you're navigating a complex business transaction, dealing with a family matter, or facing
              a legal challenge, our experienced team is here to guide you every step of the way.
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
                To provide outstanding legal services with integrity, expertise, and unwavering commitment to
                our clients' success. We strive to make complex legal matters understandable and to guide our
                clients toward the best possible outcomes.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Core Values</h2>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-blue-600 text-2xl flex-shrink-0">✓</span>
                  <span className="text-gray-700"><strong>Integrity</strong> - We uphold the highest ethical standards</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 text-2xl flex-shrink-0">✓</span>
                  <span className="text-gray-700"><strong>Excellence</strong> - We deliver superior legal work</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 text-2xl flex-shrink-0">✓</span>
                  <span className="text-gray-700"><strong>Dedication</strong> - We are committed to your success</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 text-2xl flex-shrink-0">✓</span>
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
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{member.title}</p>
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
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact us today to discuss how we can help with your legal needs.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition"
          >
            Schedule a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
