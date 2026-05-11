import { siteConfig } from "@/data/siteConfig";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | PNC Law Associates",
  description: "Privacy policy of PNC Law Associates — how we handle your personal information and data when you use our website.",
};

export default function PrivacyPolicyPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-100">
            How we collect, use and protect your personal information
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Intro */}
          <p className="text-lg text-gray-700 leading-relaxed mb-12">
            {siteConfig.firm.name} is committed to protecting your privacy. This Privacy Policy explains how
            we handle personal information collected through our website. We encourage you to read it carefully and
            to take every precaution to protect your personal data when you are on the Internet — including
            changing your passwords regularly and using a combination of letters, numbers and symbols.
          </p>

          {/* Section 1 */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
              Information We Collect
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We may collect information you voluntarily provide when you contact us through the website,
              such as your name, email address and the nature of your enquiry. We do not collect sensitive
              personal data unless you explicitly provide it as part of a legal matter enquiry.
            </p>
          </div>

          {/* Section 2 */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
              How We Use Your Information
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Information collected through this website is used solely to respond to your enquiries and
              provide you with relevant information about our legal services. We do not sell, trade or
              otherwise transfer your personal information to outside parties without your consent, except
              as required by law.
            </p>
          </div>

          {/* Section 3 */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
              Links to Third-Party Sites
            </h2>
            <p className="text-gray-700 leading-relaxed">
              This website may contain links to external websites. {siteConfig.firm.name} does not share
              your personal information with those websites and is not responsible for their privacy
              practices. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>
          </div>

          {/* Section 4 */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
              Data Security
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We implement appropriate technical and organisational measures to protect your personal
              information against unauthorised access, alteration, disclosure or destruction. However, no
              method of transmission over the Internet is completely secure and we cannot guarantee absolute
              security.
            </p>
          </div>

          {/* Section 5 */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
              Changes to This Privacy Policy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {siteConfig.firm.name} reserves the right to change, modify or update this policy at any
              time without prior notice. Any substantial changes in the way we use your personal information
              will be posted on this page. We recommend reviewing this policy periodically.
            </p>
          </div>

          {/* Contact */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Questions or Concerns?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions or concerns about this Privacy Policy or how your personal
              information is handled, please contact us:
            </p>
            <ul className="text-gray-700 space-y-2">
              <li>
                <span className="font-medium">Email: </span>
                <a
                  href={`mailto:${siteConfig.firm.email}`}
                  className="text-amber-700 hover:text-amber-800 underline"
                >
                  {siteConfig.firm.email}
                </a>
              </li>
              <li>
                <span className="font-medium">Phone: </span>
                <a
                  href={`tel:${siteConfig.firm.phone.replace(/\s/g, "")}`}
                  className="text-amber-700 hover:text-amber-800 underline"
                >
                  {siteConfig.firm.phone}
                </a>
              </li>
              <li>
                <span className="font-medium">Address: </span>
                {siteConfig.firm.address.replace("\n", ", ")}
              </li>
            </ul>
          </div>

          {/* Last updated */}
          <p className="text-sm text-gray-400 mt-10 text-right">
            Last updated: May 2026
          </p>
        </div>
      </section>
    </div>
  );
}
