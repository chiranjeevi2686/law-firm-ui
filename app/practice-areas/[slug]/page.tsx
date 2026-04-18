import Link from "next/link";
import { practiceAreas } from "@/data/practiceAreas";
import { ContactForm } from "@/components/ContactForm";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = await params;
  const area = practiceAreas.find((a) => a.slug === p.slug);

  if (!area) {
    return {
      title: "Not Found",
    };
  }

  return {
    title: `${area.title} | PNC Law Associates`,
    description: area.description,
    openGraph: {
      title: `${area.title} | PNC Law Associates`,
      description: area.description,
    },
  };
}

export async function generateStaticParams() {
  return practiceAreas.map((area) => ({
    slug: area.slug,
  }));
}

export default async function PracticeAreaPage({ params }: Props) {
  const p = await params;
  const area = practiceAreas.find((a) => a.slug === p.slug);

  if (!area) {
    notFound();
  }

  return (
    <div>
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-gray-600">
            <Link href="/" className="hover:text-yellow-600">
              Home
            </Link>
            {" / "}
            <Link href="/practice-areas" className="hover:text-yellow-600">
              Practice Areas
            </Link>
            {" / "}
            <span className="text-gray-900 font-semibold">{area.title}</span>
          </div>
        </div>
      </div>

      {/* Page Header */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-6">
            <div className="text-6xl">{area.icon}</div>
            <div>
              <h1 className="text-5xl font-bold mb-4">{area.title}</h1>
              <p className="text-xl text-gray-100">{area.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Content */}
            <div className="md:col-span-2">
              <div className="prose max-w-none mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">About {area.title}</h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  {area.details}
                </p>
              </div>

              {/* Services */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Our Services</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {area.services.map((service) => (
                    <div key={service} className="flex gap-4">
                      <div className="text-yellow-600 text-2xl flex-shrink-0">✓</div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">{service}</h4>
                        <p className="text-gray-600">
                          Expert guidance and representation in {service.toLowerCase()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Why Choose Us for {area.title}?</h3>
                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <span className="text-yellow-600 font-bold flex-shrink-0">1.</span>
                    <span className="text-gray-700">Experienced attorneys with years of specialized practice</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-yellow-600 font-bold flex-shrink-0">2.</span>
                    <span className="text-gray-700">Proven track record of successful outcomes</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-yellow-600 font-bold flex-shrink-0">3.</span>
                    <span className="text-gray-700">Personalized attention to your unique situation</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-yellow-600 font-bold flex-shrink-0">4.</span>
                    <span className="text-gray-700">Transparent communication and fair billing</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sidebar Form */}
            <div className="md:col-span-1">
              <div className="bg-gray-50 p-8 rounded-lg sticky top-24">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Get Started</h3>
                <p className="text-gray-600 mb-6">
                  Ready to discuss your {area.title.toLowerCase()} needs? Contact us today.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-gray-900">Related Practice Areas</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {practiceAreas
              .filter((a) => a.slug !== area.slug)
              .slice(0, 3)
              .map((relatedArea) => (
                <Link
                  key={relatedArea.slug}
                  href={`/practice-areas/${relatedArea.slug}`}
                  className="group bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
                >
                  <div className="text-5xl mb-3 group-hover:scale-110 transition">{relatedArea.icon}</div>
                  <h4 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-yellow-600 transition">
                    {relatedArea.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{relatedArea.description}</p>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
