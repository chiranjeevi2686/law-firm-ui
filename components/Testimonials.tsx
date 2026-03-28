import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">What Our Clients Say</h2>
          <p className="text-xl text-gray-600">
            Trusted by businesses and individuals across the region
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-gray-50 p-6 rounded-lg">
              <div className="flex mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
              <div>
                <p className="font-bold text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
