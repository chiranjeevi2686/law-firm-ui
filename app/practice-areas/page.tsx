import Link from "next/link";
import { practiceAreas } from "@/data/practiceAreas";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Practice Areas | PNC Law Associates",
  description: "Our comprehensive legal services across multiple practice areas",
};

export default function PracticeAreasPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Practice Areas</h1>
          <p className="text-xl text-gray-100">
            Comprehensive legal expertise across multiple disciplines
          </p>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {practiceAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/practice-areas/${area.slug}`}
                className="group"
              >
                <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition h-full">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition">{area.icon}</div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-yellow-600 transition">
                    {area.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{area.description}</p>

                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Services:</h4>
                    <ul className="space-y-2">
                      {area.services.map((service) => (
                        <li key={service} className="text-gray-700 flex items-start">
                          <span className="text-yellow-600 mr-3">✓</span>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <span className="text-yellow-600 font-medium group-hover:text-yellow-700 transition inline-block">
                    Learn More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Need Legal Help?</h2>
          <p className="text-xl mb-8 text-gray-100">
            Contact us for a free consultation with one of our experienced attorneys.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-yellow-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-yellow-700 transition"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
