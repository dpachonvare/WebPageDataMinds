import type { Metadata } from 'next';
import CTAFullWidth from '@/components/CTAFullWidth';

export const metadata: Metadata = {
  title: 'Services | Data Minds - Microsoft Fabric & Power BI Consulting',
  description: 'From audit to AI agents — consulting, implementation, managed services, training, and migrations on Microsoft Fabric & Power BI.',
};

export default function ServicesPage() {
  const services = [
    {
      id: 'consulting',
      title: 'Consulting & Audit',
      icon: '🔍',
      description: 'Strategic guidance to maximize your BI investment.',
      deliverables: [
        'Data maturity assessment',
        'Governance framework design',
        'KPI mapping & executive alignment',
        'Architecture options (Fabric, Synapse, Databricks)',
        'TCO analysis & ROI modeling',
        'Roadmap & implementation plan',
      ],
    },
    {
      id: 'implementation',
      title: 'Implementation (Fabric/Power BI/Azure)',
      icon: '⚙️',
      description: 'End-to-end build of your analytics platform.',
      deliverables: [
        'Fabric Lakehouse setup (medallion architecture)',
        'Delta Lake & OneLake configuration',
        'Semantic models & DAX optimization',
        'Power BI reports & dashboards',
        'Row-level security (RLS) & data governance',
        'CI/CD pipelines (Azure DevOps, GitHub Actions)',
        'Performance tuning & query optimization',
      ],
    },
    {
      id: 'ai-ml',
      title: 'AI & ML',
      icon: '🤖',
      description: 'Intelligent insights with Azure ML and LLMs.',
      deliverables: [
        'Azure ML model development (forecasting, classification, anomaly detection)',
        'LLM integration for chat over your data',
        'Natural language Q&A on metrics & tables',
        'AI agents with governance & safety guardrails',
        'Model monitoring & retraining pipelines',
        'Responsible AI implementation',
      ],
    },
    {
      id: 'managed',
      title: 'Managed Services',
      icon: '🛠️',
      description: 'SLA-backed support to keep your BI running smoothly.',
      deliverables: [
        'Refresh reliability monitoring & alerts',
        'Performance tuning & optimization',
        'Bug fixes & incident response',
        'New feature development & enhancements',
        'Monthly reporting & continuous improvements',
        'User support & troubleshooting',
        'Capacity planning & scaling',
      ],
    },
    {
      id: 'training',
      title: 'Training',
      icon: '📚',
      description: 'Empower your teams to own their analytics.',
      deliverables: [
        'Executive storytelling workshops',
        'Power BI analyst training (DAX, data modeling)',
        'Fabric data engineering bootcamp',
        'Governance & security best practices',
        'Self-service BI enablement',
        'Custom workshops tailored to your needs',
      ],
    },
    {
      id: 'migrations',
      title: 'Migrations',
      icon: '🔄',
      description: 'Seamless transition from legacy systems to modern BI.',
      deliverables: [
        'Legacy assessment (SSIS, DW, Tableau, Qlik, SAP BW)',
        'Migration strategy & roadmap',
        'Data pipeline conversion to Fabric',
        'Report & dashboard migration to Power BI',
        'Testing & validation',
        'Change management & user adoption',
        'Parallel run & cutover support',
      ],
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white py-20">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
            From audit to AI agents — one Fabric-first stack.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`flex flex-col lg:flex-row gap-8 items-start ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Icon & Title */}
                <div className="lg:w-1/3">
                  <div className="text-6xl mb-4">{service.icon}</div>
                  <h2 className="text-3xl font-bold text-navy-800 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-600">
                    {service.description}
                  </p>
                </div>

                {/* Deliverables */}
                <div className="lg:w-2/3">
                  <div className="card">
                    <h3 className="text-xl font-semibold text-navy-800 mb-4">
                      Deliverables
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.deliverables.map((deliverable, i) => (
                        <li key={i} className="flex items-start">
                          <svg
                            className="w-5 h-5 text-azure-500 mr-3 flex-shrink-0 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-gray-700">{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Line */}
      <section className="py-8 bg-gray-50">
        <div className="section-container text-center">
          <p className="text-lg text-gray-700">
            <span className="font-semibold">Data stays in your tenant.</span> We use least-privilege access.
          </p>
        </div>
      </section>

      {/* CTA */}
      <CTAFullWidth
        title="Get a scoped quote"
        subtitle="Tell us about your project and we'll provide a detailed proposal."
        primaryCTA={{
          text: 'Contact Us',
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
