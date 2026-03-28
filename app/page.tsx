import { Hero, PracticeAreasGrid, WhyChooseUs, Testimonials } from "@/components";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <PracticeAreasGrid />
      <WhyChooseUs />
      <Testimonials />

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Legal Help?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Schedule a free consultation with one of our experienced attorneys today.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition"
          >
            Schedule Your Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
