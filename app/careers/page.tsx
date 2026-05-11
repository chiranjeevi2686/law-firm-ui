import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Careers & Internships | PNC Law Associates",
  description:
    "Explore careers and internship opportunities at PNC Law Associates for advocates, legal associates and law students.",
};

export default function CareersPage() {
  return (
    <div>
      <section className="bg-gradient-to-r from-gray-800 to-gray-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Careers & Internships</h1>
          <p className="text-xl text-gray-100 max-w-3xl">
            Join our litigation-focused practice and build real courtroom and
            advisory experience.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <article className="bg-gray-50 rounded-xl border border-gray-200 p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Careers</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We welcome applications from advocates and legal professionals
                with strong research, drafting and courtroom support skills.
              </p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Preferred Profiles
              </h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-6">
                <li>Junior and mid-level associates</li>
                <li>Litigation drafting and briefing experience</li>
                <li>Exposure to civil, criminal or commercial disputes</li>
                <li>Strong communication and client-handling ability</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Share your profile and a short cover note at{" "}
                <a
                  href={`mailto:${siteConfig.firm.email}?subject=Career%20Application`}
                  className="text-amber-700 hover:text-amber-800 underline"
                >
                  {siteConfig.firm.email}
                </a>
                .
              </p>
            </article>

            <article className="bg-gray-50 rounded-xl border border-gray-200 p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Internships</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our internship program is designed for law students looking for
                practical exposure to legal research, drafting and litigation
                workflow.
              </p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What You Can Expect
              </h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-6">
                <li>Case law and statutory research assignments</li>
                <li>Drafting support for pleadings and applications</li>
                <li>Court procedure and filing workflow exposure</li>
                <li>Mentorship and feedback from practicing advocates</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Send your CV, university details and preferred internship period
                to{" "}
                <a
                  href={`mailto:${siteConfig.firm.email}?subject=Internship%20Application`}
                  className="text-amber-700 hover:text-amber-800 underline"
                >
                  {siteConfig.firm.email}
                </a>
                .
              </p>
            </article>
          </div>

          <div className="mt-10 bg-amber-50 border border-amber-200 rounded-lg p-6">
            <p className="text-gray-800">
              <span className="font-semibold">Note:</span> Selection is based
              on current requirements, profile fit and interview performance.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
