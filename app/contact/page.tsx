import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/data/siteConfig";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | PNC Law Associates",
  description: "Get in touch with PNC Law Associates for a free consultation",
};

export default function ContactPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-100">
            Get in touch for a free consultation with our experienced attorneys
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-900">Get In Touch</h2>

              {/* Phone */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600">
                  <a href={`tel:${siteConfig.firm.phone.replace(/\D/g, '')}`} className="hover:text-yellow-600">
                    {siteConfig.firm.phone}
                  </a>
                </p>
              </div>

              {/* Email */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">
                  <a href={`mailto:${siteConfig.firm.email}`} className="hover:text-yellow-600">
                    {siteConfig.firm.email}
                  </a>
                </p>
              </div>

              {/* Address */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Office Address</h3>
                <p className="text-gray-600 whitespace-pre-line">{siteConfig.firm.address}</p>
              </div>

              {/* Hours */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Business Hours</h3>
                <p className="text-gray-600">
                  Monday – Friday: 9:00 AM – 6:00 PM<br />
                  Saturday: 10:00 AM – 4:00 PM<br />
                  Sunday: Closed
                </p>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-lg overflow-hidden h-64">
                <iframe
                  width="100%"
                  height="100%"
                  frameBorder={0}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806!2d83.26!3d17.74!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395d4d26812443:0x3b29302df15947d8!2sPILLA+NEELAKANTA+CHAKRAVARTHY!5e0!3m2!1sen!2sin!4v"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h2 className="text-3xl font-bold mb-8 text-gray-900">Send us a Message</h2>
                <ContactForm />
                <p className="text-sm text-gray-600 mt-6">
                  We typically respond to inquiries within 24 business hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Contact Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
            What to Expect When You Contact Us
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">📞</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Initial Contact</h3>
              <p className="text-gray-600">
                Call or email us to schedule your free consultation with one of our attorneys.
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">💬</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Consultation</h3>
              <p className="text-gray-600">
                We listen to your situation and discuss potential legal strategies.
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Next Steps</h3>
              <p className="text-gray-600">
                We'll outline the best course of action and our fees transparently.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
