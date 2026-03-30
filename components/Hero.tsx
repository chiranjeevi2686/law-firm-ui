import Link from "next/link";

export function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Expert Legal Solutions
          </h1>
          <p className="text-xl sm:text-2xl mb-3 text-blue-100 max-w-3xl mx-auto">
            Advocate Pilla Neelakanta Chakravarthy — PNC Law Associates
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/practice-areas"
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition inline-block"
            >
              Explore Our Services
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-900 transition inline-block"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
