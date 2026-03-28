"use client";

import { useState, FormEvent } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form will be handled by Netlify automatically
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <form
      name="contact"
      method="POST"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      {/* Honeypot field for spam protection */}
      <input type="hidden" name="bot-field" />

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          Full Name *
        </label>
        <input
          id="name"
          type="text"
          name="name"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email *
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
          Phone Number
        </label>
        <input
          id="phone"
          type="tel"
          name="phone"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
          Service *
        </label>
        <select
          id="service"
          name="service"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Select a service</option>
          <option value="corporate-law">Corporate Law</option>
          <option value="family-law">Family Law</option>
          <option value="real-estate">Real Estate Law</option>
          <option value="criminal-law">Criminal Law</option>
          <option value="employment-law">Employment Law</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition"
      >
        Send Message
      </button>

      {submitted && (
        <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
          Thank you! We'll get back to you soon.
        </div>
      )}
    </form>
  );
}
