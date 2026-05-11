import { siteConfig } from "@/data/siteConfig";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer | PNC Law Associates",
  description:
    "Legal disclaimer for the PNC Law Associates website. This website does not constitute specific legal advice and no attorney-client relationship is created by its use.",
};

const sections = [
  {
    heading: "No Legal Advice",
    body: `This website is made available solely to provide general information and a broad understanding of relevant Indian law. The information published here does not constitute specific legal advice. By using this website you understand and acknowledge that there is no relationship of any nature — including implied, legal or fiduciary — between you and ${siteConfig.firm.name}. This website should not be used as a substitute for specific legal advice from a qualified advocate.`,
  },
  {
    heading: "Intellectual Property",
    body: `Except as expressly and unambiguously provided herein, ${siteConfig.firm.name} does not grant you any express or implied rights to the information or content provided on this website under any copyrights, trademarks, trade secret or other intellectual or industrial property rights. All content on this website remains the exclusive property of ${siteConfig.firm.name}.`,
  },
  {
    heading: "Views & Opinions",
    body: `The views and opinions expressed on this website are those of the author(s) alone and do not necessarily reflect an official legal position or constitute legal advice. Assumptions made in any analysis are not reflective of the position of any entity other than the author(s), and these views are subject to change, revision and rethinking at any time.`,
  },
  {
    heading: "Third-Party Links",
    body: `This website may contain links to external websites provided solely as a convenience to visitors. ${siteConfig.firm.name} has no control over such linked sites, or the materials, information, goods or services available on those sites. ${siteConfig.firm.name} is not responsible for and does not endorse or warrant in any way any materials, information, goods or services available through such linked sites or any privacy or other practices of such sites. If you decide to access any linked site, you do so entirely at your own risk. ${siteConfig.firm.name} reserves the right to terminate any link at any time.`,
  },
  {
    heading: "No Attorney-Client Relationship",
    body: `Use of this website, or sending an enquiry through it, does not create an attorney-client relationship between you and ${siteConfig.firm.name}. An attorney-client relationship is only established upon a formal written engagement agreed to by both parties.`,
  },
];

export default function DisclaimerPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Disclaimer</h1>
          <p className="text-xl text-gray-100">
            Please read this disclaimer carefully before using our website
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-700 leading-relaxed mb-12">
            The information on this website is published by{" "}
            <strong>{siteConfig.firm.name}</strong> for general informational
            purposes only. It is not intended to be, and must not be taken as,
            legal advice. Please review the sections below before relying on
            anything contained in this website.
          </p>

          {sections.map((section) => (
            <div key={section.heading} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                {section.heading}
              </h2>
              <p className="text-gray-700 leading-relaxed">{section.body}</p>
            </div>
          ))}

          {/* Contact */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Need Specific Legal Advice?
            </h2>
            <p className="text-gray-700 mb-4">
              If you require specific legal advice, please contact us directly and
              we will be happy to assist.
            </p>
            <div className="space-y-1 text-gray-700 text-sm">
              <p>
                <span className="font-medium">Email: </span>
                <a
                  href={`mailto:${siteConfig.firm.email}`}
                  className="text-amber-700 hover:text-amber-800 underline"
                >
                  {siteConfig.firm.email}
                </a>
              </p>
              <p>
                <span className="font-medium">Phone: </span>
                <a
                  href={`tel:${siteConfig.firm.phone.replace(/\s/g, "")}`}
                  className="text-amber-700 hover:text-amber-800 underline"
                >
                  {siteConfig.firm.phone}
                </a>
              </p>
            </div>
          </div>

          <p className="text-sm text-gray-400 mt-10 text-right">
            Last updated: May 2026
          </p>
        </div>
      </section>
    </div>
  );
}
