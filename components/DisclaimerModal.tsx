"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "pnc_disclaimer_accepted";

export function DisclaimerModal() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="disclaimer-title"
      className="fixed inset-0 z-[70] flex items-center justify-center p-4"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal */}
      <div className="relative bg-white rounded-xl shadow-2xl max-w-xl w-full p-8 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <span className="text-2xl" aria-hidden="true">⚖️</span>
          <h2
            id="disclaimer-title"
            className="text-xl font-bold text-gray-900"
          >
            Legal Disclaimer
          </h2>
        </div>

        {/* Body */}
        <div className="text-sm text-gray-700 space-y-4 leading-relaxed">
          <p>
            This website is published by{" "}
            <strong>PNC Law Associates</strong> for general informational
            purposes only. The information here does not constitute specific
            legal advice and must not be relied upon as such.
          </p>
          <p>
            By continuing to use this website you acknowledge that no
            attorney-client relationship is created between you and PNC Law
            Associates by your visit or any enquiry submitted through this
            website.
          </p>
          <p>
            This website should not be used as a substitute for specific legal
            advice from a qualified advocate. For specific advice, please{" "}
            <Link
              href="/contact"
              className="text-amber-700 underline hover:text-amber-800"
              onClick={accept}
            >
              contact us directly
            </Link>
            .
          </p>
          <p>
            <Link
              href="/disclaimer"
              className="text-amber-700 underline hover:text-amber-800"
              onClick={accept}
            >
              Read full disclaimer →
            </Link>
          </p>
        </div>

        {/* Action */}
        <button
          onClick={accept}
          className="mt-8 w-full bg-gray-900 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          I Understand — Continue to Website
        </button>
      </div>
    </div>
  );
}
