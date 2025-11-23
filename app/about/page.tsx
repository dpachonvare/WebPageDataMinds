import type { Metadata } from 'next';
import CTAFullWidth from '@/components/CTAFullWidth';

export const metadata: Metadata = {
  title: 'About Us | Data Minds Consulting - Microsoft Fabric & Power BI Experts',
  description: 'Brisbane-based team with hybrid delivery model. We design stories first, then models.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white py-20">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Data Minds Consulting
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
            We design stories first, then models.
          </p>
        </div>
      </section>

      {/* Why Data Minds */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-8 text-center">
              Why Data Minds Consulting?
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Most BI projects start with technology. We start with the story you need to tell.
              </p>
              <p>
                Data Minds Consulting is a boutique consulting firm specializing in Microsoft Fabric and Power BI
                for Australian businesses. We don't just build dashboards — we create analytics solutions
                that executives actually use to make better decisions.
              </p>
              <p>
                Our approach is simple: understand your business outcomes first, then design the data
                architecture to support them. No zombie dashboards, no technical jargon — just clear
                insights that drive action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team & Model */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Team */}
            <div className="card">
              <h2 className="text-2xl font-bold text-navy-800 mb-6">
                Our Team
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  <span className="font-semibold">Brisbane-based leadership:</span> 2 senior consultants
                  with deep expertise in Microsoft Fabric, Power BI, Azure, and data architecture, supported by a knowledgeable team based in Latin America with DP-600 and DP-700 certifications, available 24/7.
                </p>
                <p>
                  <span className="font-semibold">Australian Strategy, Global Efficiency:</span> Our Brisbane-based principals handle the strategy and stakeholder management, ensuring nothing gets lost in translation. Our specialized Fabric delivery center handles the heavy engineering. Result: Enterprise-grade architecture at mid-market speed and cost.
                </p>
                <p>
                  <span className="font-semibold">Industry expertise:</span> Utilities, asset management,
                  retail, manufacturing, D365, and SAP.
                </p>
                <p>
                  <span className="font-semibold">Microsoft Partner:</span> Aligned with Microsoft's
                  roadmap and best practices (partnership in progress).
                </p>
              </div>
            </div>

            {/* Method */}
            <div className="card">
              <h2 className="text-2xl font-bold text-navy-800 mb-6">
                Our Method
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-navy-700 mb-2">1. Discover</h3>
                  <p className="text-gray-700">
                    Understand your business, data landscape, and desired outcomes.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-navy-700 mb-2">2. Define</h3>
                  <p className="text-gray-700">
                    Co-create the executive stories and KPIs that matter most.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-navy-700 mb-2">3. Build</h3>
                  <p className="text-gray-700">
                    Implement Fabric pipelines, semantic models, and Power BI dashboards.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-navy-700 mb-2">4. Train</h3>
                  <p className="text-gray-700">
                    Enable your teams to use and maintain the solution.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-navy-700 mb-2">5. Operate</h3>
                  <p className="text-gray-700">
                    Monitor, optimize, and continuously improve with SLA-backed support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Security */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-8 text-center">
              Compliance & Security
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="font-semibold text-navy-800 mb-2">Data Sovereignty</h3>
                <p className="text-gray-700">
                  Your data stays in your Azure tenant (Australian regions).
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🔑</div>
                <h3 className="font-semibold text-navy-800 mb-2">Least Privilege</h3>
                <p className="text-gray-700">
                  We access with minimum necessary permissions and audit trails.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="font-semibold text-navy-800 mb-2">Best Practices</h3>
                <p className="text-gray-700">
                  Following Microsoft security and governance standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-8">
            Certifications & Expertise
          </h2>
          <div className="flex flex-wrap justify-center gap-6 text-lg text-gray-700">
            <span className="bg-azure-100 border-2 border-azure-500 text-azure-900 px-6 py-3 rounded-lg shadow-sm font-semibold">
              DP-600 Fabric Analytics Engineer Associate
            </span>
            <span className="bg-azure-100 border-2 border-azure-500 text-azure-900 px-6 py-3 rounded-lg shadow-sm font-semibold">
              DP-700 Fabric Data Engineer Associate
            </span>
            <span className="bg-white px-6 py-3 rounded-lg shadow-sm">Microsoft Fabric</span>
            <span className="bg-white px-6 py-3 rounded-lg shadow-sm">Power BI</span>
            <span className="bg-white px-6 py-3 rounded-lg shadow-sm">Azure ML</span>
            <span className="bg-white px-6 py-3 rounded-lg shadow-sm">Azure Data Engineering</span>
            <span className="bg-white px-6 py-3 rounded-lg shadow-sm">Python</span>
            <span className="bg-white px-6 py-3 rounded-lg shadow-sm">SQL Server</span>
            <span className="bg-white px-6 py-3 rounded-lg shadow-sm">Microsoft Partner (in progress)</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTAFullWidth
        title="Meet the team"
        subtitle="Book a discovery call to discuss how we can help your business."
        primaryCTA={{
          text: 'Book a Call',
          href: '/contact',
        }}
        secondaryCTA={{
          text: 'View Case Studies',
          href: '/case-studies',
        }}
      />
    </>
  );
}
