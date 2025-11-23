import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Data Minds Consulting',
  description: 'Terms of service for Data Minds Consulting services.',
};

export default function TermsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white py-20">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl font-bold">
            Terms of Service
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

            <h2 className="text-2xl font-bold text-navy-800 mt-8 mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-700">
              By accessing or using the Data Minds Consulting website or services, you agree to be bound by these
              Terms of Service and all applicable laws and regulations.
            </p>

            <h2 className="text-2xl font-bold text-navy-800 mt-8 mb-4">2. Services</h2>
            <p className="text-gray-700">
              Data Minds Consulting provides consulting, implementation, and managed services for Microsoft Fabric,
              Power BI, and Azure analytics solutions. Specific services are defined in individual
              Statements of Work (SOW) or service agreements.
            </p>

            <h2 className="text-2xl font-bold text-navy-800 mt-8 mb-4">3. Intellectual Property</h2>
            <p className="text-gray-700">
              The content, design, and materials on this website are owned by Data Minds Consulting and protected
              by intellectual property laws. You may not reproduce, distribute, or create derivative
              works without our written permission.
            </p>
            <p className="text-gray-700 mt-4">
              For consulting engagements:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Client retains ownership of their data</li>
              <li>Deliverables are owned by client upon full payment</li>
              <li>Data Minds Consulting retains IP for reusable frameworks and methodologies</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy-800 mt-8 mb-4">4. Payment Terms</h2>
            <p className="text-gray-700">
              Payment terms for services are specified in individual agreements. Typical terms include:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Fixed-price packages paid 50% upfront, 50% on delivery</li>
              <li>Monthly retainers billed in advance</li>
              <li>Time & materials billed monthly in arrears</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy-800 mt-8 mb-4">5. Confidentiality</h2>
            <p className="text-gray-700">
              Both parties agree to maintain confidentiality of sensitive information shared during
              the engagement. Client data is never shared with third parties without explicit consent.
            </p>

            <h2 className="text-2xl font-bold text-navy-800 mt-8 mb-4">6. Warranties and Disclaimers</h2>
            <p className="text-gray-700">
              We warrant that services will be performed in a professional manner consistent with
              industry standards. However:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Services are provided "as is" without warranties beyond those specified in agreements</li>
              <li>We do not guarantee specific business outcomes or ROI</li>
              <li>Client is responsible for data accuracy and business decisions</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy-800 mt-8 mb-4">7. Limitation of Liability</h2>
            <p className="text-gray-700">
              To the maximum extent permitted by law, Data Minds Consulting shall not be liable for indirect,
              incidental, or consequential damages arising from use of our services. Total liability
              is limited to fees paid for the specific service.
            </p>

            <h2 className="text-2xl font-bold text-navy-800 mt-8 mb-4">8. Termination</h2>
            <p className="text-gray-700">
              Either party may terminate an engagement with written notice as specified in the agreement.
              Client remains responsible for payment for work completed up to termination date.
            </p>

            <h2 className="text-2xl font-bold text-navy-800 mt-8 mb-4">9. Governing Law</h2>
            <p className="text-gray-700">
              These Terms are governed by the laws of Queensland, Australia. Disputes will be resolved
              through negotiation or, if necessary, arbitration in Brisbane.
            </p>

            <h2 className="text-2xl font-bold text-navy-800 mt-8 mb-4">10. Changes to Terms</h2>
            <p className="text-gray-700">
              We reserve the right to modify these Terms at any time. Changes will be effective upon
              posting to this page.
            </p>

            <h2 className="text-2xl font-bold text-navy-800 mt-8 mb-4">11. Contact</h2>
            <p className="text-gray-700">
              For questions about these Terms, please contact us at:
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
