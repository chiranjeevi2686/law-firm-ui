import Link from "next/link";
import { practiceAreas } from "@/data/practiceAreas";

export function PracticeAreasGrid() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Practice Areas</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive legal expertise across multiple disciplines
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area) => (
            <Link
              key={area.slug}
              href={`/practice-areas/${area.slug}`}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition group cursor-pointer"
            >
              <div className="text-5xl mb-4">{area.icon}</div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900 group-hover:text-blue-900 transition">
                {area.title}
              </h3>
              <p className="text-gray-600 mb-6">{area.description}</p>
              <ul className="space-y-2 mb-6">
                {area.services.slice(0, 3).map((service) => (
                  <li key={service} className="text-sm text-gray-700 flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    {service}
                  </li>
                ))}
              </ul>
              <span className="text-blue-600 font-medium group-hover:text-blue-900 transition">
                Learn More →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
