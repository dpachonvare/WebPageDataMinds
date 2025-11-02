import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Data Minds',
  description: 'Privacy policy for Data Minds consulting services.',
};

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white py-20">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl font-bold">
            Privacy Policy
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-gray-600">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <h2 className="text-2xl font-bold text-navy-800 mt-8 mb-4">1. Introduction</h2>
            <p className="text-gray-700">
              Data Minds ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your information when you visit our website
              or use our services.
            </p>

            <h2 className="text-2xl font-bold text-navy-800 mt-8 mb-4">2. Information We Collect</h2>
            <p className="text-gray-700">
              We may collect information about you in a variety of ways, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Personal Data:</strong> Name, email address, company, role, and other contact information you provide.</li>
              <li><strong>Usage Data:</strong> Information about how you access and use our website.</li>
              <li><strong>Client Data:</strong> Data you provide to us during consulting engagements (governed by separate agreements).</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy-800 mt-8 mb-4">3. Use of Your Information</h2>
            <p className="text-gray-700">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Respond to your inquiries and provide customer service</li>
              <li>Deliver consulting services and support</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy-800 mt-8 mb-4">4. Data Security</h2>
            <p className="text-gray-700">
              We implement appropriate technical and organizational security measures to protect your information.
              For consulting engagements:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Your data remains in your Azure tenant (Australian regions)</li>
              <li>We access data with least-privilege permissions</li>
              <li>All access is logged and auditable</li>
              <li>We follow Microsoft security best practices</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy-800 mt-8 mb-4">5. Data Retention</h2>
            <p className="text-gray-700">
              We retain your personal information only as long as necessary to fulfill the purposes outlined
              in this Privacy Policy, unless a longer retention period is required by law.
            </p>

            <h2 className="text-2xl font-bold text-navy-800 mt-8 mb-4">6. Your Rights</h2>
            <p className="text-gray-700">
              Under Australian privacy law, you have the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy-800 mt-8 mb-4">7. Third-Party Services</h2>
            <p className="text-gray-700">
              We may use third-party service providers (e.g., analytics, hosting) who may have access to
              your information. These providers are contractually obligated to protect your data.
            </p>

            <h2 className="text-2xl font-bold text-navy-800 mt-8 mb-4">8. Changes to This Policy</h2>
            <p className="text-gray-700">
              We may update this Privacy Policy from time to time. We will notify you of any changes by
              posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>

            <h2 className="text-2xl font-bold text-navy-800 mt-8 mb-4">9. Contact Us</h2>
            <p className="text-gray-700">
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-gray-700">
              Email: <a href="mailto:hello@dataminds.au" className="text-azure-500 hover:text-azure-600">hello@dataminds.au</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
