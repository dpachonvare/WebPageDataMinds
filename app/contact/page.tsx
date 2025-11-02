'use client';

import type { Metadata } from 'next';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    industry: '',
    problem: '',
    preferredTime: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (integrate with your backend/CRM)
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white py-20">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Talk
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
            Ready to transform your analytics? Book a 30-minute discovery call.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-navy-800 mb-6">
                Send us a message
              </h2>

              {submitted ? (
                <div className="card bg-azure-50 border-2 border-azure-200">
                  <h3 className="text-xl font-bold text-navy-800 mb-3">
                    Thank you for reaching out!
                  </h3>
                  <p className="text-gray-700">
                    We've received your message and will get back to you within 1 business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-azure-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-azure-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                      Company *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-azure-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="role" className="block text-sm font-semibold text-gray-700 mb-2">
                      Role *
                    </label>
                    <input
                      type="text"
                      id="role"
                      name="role"
                      required
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-azure-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="industry" className="block text-sm font-semibold text-gray-700 mb-2">
                      Industry *
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      required
                      value={formData.industry}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-azure-500 focus:border-transparent"
                    >
                      <option value="">Select industry</option>
                      <option value="utilities">Utilities</option>
                      <option value="asset-management">Asset Management</option>
                      <option value="retail">Retail</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="d365">Microsoft D365</option>
                      <option value="sap">SAP</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="problem" className="block text-sm font-semibold text-gray-700 mb-2">
                      What problem are we solving? *
                    </label>
                    <textarea
                      id="problem"
                      name="problem"
                      required
                      rows={5}
                      value={formData.problem}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-azure-500 focus:border-transparent"
                      placeholder="Tell us about your analytics challenges..."
                    />
                  </div>

                  <div>
                    <label htmlFor="preferredTime" className="block text-sm font-semibold text-gray-700 mb-2">
                      Preferred time for a call
                    </label>
                    <input
                      type="text"
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-azure-500 focus:border-transparent"
                      placeholder="e.g., Weekday mornings, Friday afternoons"
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full">
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-navy-800 mb-6">
                Or book a call directly
              </h2>

              <div className="space-y-6">
                {/* Calendly Button */}
                <div className="card">
                  <h3 className="text-lg font-semibold text-navy-800 mb-3">
                    📅 Book a 30-min discovery call
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Choose a time that works for you and let's discuss your analytics needs.
                  </p>
                  <a
                    href="https://calendly.com/dataminds/discovery"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-block"
                  >
                    Schedule Now
                  </a>
                </div>

                {/* Email */}
                <div className="card">
                  <h3 className="text-lg font-semibold text-navy-800 mb-3">
                    ✉️ Email us
                  </h3>
                  <p className="text-gray-600">
                    <a
                      href="mailto:hello@dataminds.au"
                      className="text-azure-500 hover:text-azure-600 font-semibold"
                    >
                      hello@dataminds.au
                    </a>
                  </p>
                </div>

                {/* Phone Contacts */}
                <div className="card">
                  <h3 className="text-lg font-semibold text-navy-800 mb-3">
                    📞 Call us
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-semibold text-gray-700">Dan Burke</p>
                      <a
                        href="tel:0490452626"
                        className="text-azure-500 hover:text-azure-600 font-semibold"
                      >
                        0490 452 626
                      </a>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-700">Diego Pachon</p>
                      <a
                        href="tel:0492825611"
                        className="text-azure-500 hover:text-azure-600 font-semibold"
                      >
                        0492 825 611
                      </a>
                    </div>
                  </div>
                </div>

                {/* iMessage */}
                <div className="card">
                  <h3 className="text-lg font-semibold text-navy-800 mb-3">
                    💬 iMessage
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Message us directly from your iPhone or Mac
                  </p>
                  <div className="flex gap-3">
                    <a
                      href="sms:0490452626"
                      className="btn-secondary text-sm inline-flex items-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
                      </svg>
                      Dan
                    </a>
                    <a
                      href="sms:0492825611"
                      className="btn-secondary text-sm inline-flex items-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
                      </svg>
                      Diego
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="card">
                  <h3 className="text-lg font-semibold text-navy-800 mb-3">
                    📍 Location
                  </h3>
                  <p className="text-gray-600">
                    43 Hercules St, Hamilton<br />
                    Brisbane, Queensland<br />
                    Australia
                  </p>
                </div>

                {/* Trust Line */}
                <div className="card bg-azure-50 border-2 border-azure-200">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">Data stays in your tenant.</span>
                    <br />
                    We use least-privilege access and follow Microsoft security best practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
