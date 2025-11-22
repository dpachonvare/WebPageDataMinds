import type { Metadata } from 'next';
import Link from 'next/link';
import CTAFullWidth from '@/components/CTAFullWidth';

export const metadata: Metadata = {
  title: 'Solutions | Data Minds - Industry-Specific Analytics',
  description: 'Tailored Microsoft Fabric & Power BI solutions for Utilities, Asset Management, Retail, D365, and SAP.',
};

export default function SolutionsPage() {
  const solutions = [
    {
      id: 'utilities',
      title: 'Utilities',
      icon: '⚡',
      pain: 'Fragmented data across field operations, network management, and customer systems — making it hard to track outages, predict failures, and meet regulatory SLAs.',
      solution: 'Fabric-powered real-time pipeline aggregating network events, field tickets, and asset health into unified dashboards.',
      metrics: [
        'SAIDI/SAIFI (outage duration & frequency)',
        'Network reliability & uptime',
        'Field response times',
        'Asset health scores',
        'Regulatory compliance tracking',
      ],
      outcomes: [
        'Lead time for incident response ↓ 50%',
        'Network reliability ↑ 25%',
        'Faster regulatory reporting',
        'Predictive maintenance alerts',
      ],
    },
    {
      id: 'asset-management',
      title: 'Asset Management & Maintenance',
      icon: '🏭',
      pain: 'Reactive maintenance driven by manual tracking, poor visibility into asset performance, and high mean time to repair (MTTR).',
      solution: 'Work order management with MTBF/MTTR tracking, backlog prioritization, and SLA monitoring in Power BI + Azure ML for predictive maintenance.',
      metrics: [
        'MTBF & MTTR',
        'Planned vs. reactive maintenance ratio',
        'Work order backlog & aging',
        'SLA compliance',
        'Asset utilization & lifecycle costs',
      ],
      outcomes: [
        'MTTR reduction ↓ 30%',
        'Asset uptime ↑ 15%',
        'Proactive maintenance increase',
        'Lower total cost of ownership',
      ],
    },
    {
      id: 'retail',
      title: 'Retail',
      icon: '🛒',
      pain: 'Disconnected P&L views, slow cohort analysis, inventory waste, and limited visibility into promo ROI.',
      solution: 'Unified semantic model connecting POS, inventory, and finance systems with executive CFO Pack for P&L, cashflow, and AR aging.',
      metrics: [
        'P&L by category, store, region',
        'Cohort sales & customer lifetime value',
        'Inventory turns & stockout rates',
        'Promo ROI & markdown effectiveness',
        'AR aging & DSO',
      ],
      outcomes: [
        'Reporting time ↓ 70%',
        'GM decision improvement +1.5 pt',
        'Inventory waste ↓ 20%',
        'Faster promo optimization',
      ],
    },
    {
      id: 'd365',
      title: 'Microsoft D365',
      icon: '💼',
      pain: 'D365 operational data locked in silos, hard to combine with external sources or visualize for executives.',
      solution: 'Fabric connectors to D365 Finance, Supply Chain, Sales — transformed into semantic models with governance and Power BI storytelling.',
      metrics: [
        'Sales pipeline & conversion',
        'Inventory & supply chain KPIs',
        'Financial consolidation',
        'Customer 360° view',
        'Operational efficiency metrics',
      ],
      outcomes: [
        'Single source of truth',
        'Executive visibility ↑',
        'Faster month-end close',
        'Better forecasting accuracy',
      ],
    },
    {
      id: 'sap',
      title: 'SAP',
      icon: '📊',
      pain: 'SAP BW/HANA complexity, slow report development, limited self-service for business users.',
      solution: 'Extract operational layer from SAP → transform in Fabric → semantic models → executive-ready Power BI stories.',
      metrics: [
        'Financial consolidation (P&L, balance sheet)',
        'Procurement & spend analytics',
        'Production & quality metrics',
        'Sales & distribution KPIs',
        'Supply chain visibility',
      ],
      outcomes: [
        'Report development time ↓ 60%',
        'Self-service analytics enabled',
        'Lower TCO vs. SAP BW',
        'Faster business insights',
      ],
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white py-20">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Industry Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
            Tailored analytics for your sector — from utilities to retail, D365 to SAP.
          </p>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="space-y-20">
            {solutions.map((solution) => (
              <div key={solution.id} id={solution.id} className="scroll-mt-20">
                {/* Header */}
                <div className="text-center mb-8">
                  <div className="text-6xl mb-4">{solution.icon}</div>
                  <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
                    {solution.title}
                  </h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto italic">
                    {solution.pain}
                  </p>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Solution */}
                  <div className="card">
                    <h3 className="text-xl font-semibold text-navy-800 mb-3">
                      Solution
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {solution.solution}
                    </p>
                  </div>

                  {/* Key Metrics */}
                  <div className="card">
                    <h3 className="text-xl font-semibold text-navy-800 mb-3">
                      Key Metrics
                    </h3>
                    <ul className="space-y-2">
                      {solution.metrics.map((metric, i) => (
                        <li key={i} className="flex items-start text-sm">
                          <svg
                            className="w-4 h-4 text-azure-500 mr-2 flex-shrink-0 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                            />
                          </svg>
                          <span className="text-gray-700">{metric}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Outcomes */}
                  <div className="card bg-azure-50 border-2 border-azure-200">
                    <h3 className="text-xl font-semibold text-navy-800 mb-3">
                      Outcomes
                    </h3>
                    <ul className="space-y-2">
                      {solution.outcomes.map((outcome, i) => (
                        <li key={i} className="flex items-start text-sm">
                          <svg
                            className="w-4 h-4 text-azure-600 mr-2 flex-shrink-0 mt-0.5"
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
                          <span className="font-semibold text-azure-900">
                            {outcome}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="text-center mt-8">
                  <Link
                    href={`/contact?solution=${solution.id}`}
                    className="btn-primary inline-block"
                  >
                    See a demo tailored to {solution.title}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTAFullWidth
        title="Ready to transform your industry analytics?"
        subtitle="Book a discovery call to discuss your specific challenges."
        primaryCTA={{
          text: 'Book a Call',
          href: '/contact',
        }}
        secondaryCTA={{
          text: 'View Services',
          href: '/services',
        }}
      />
    </>
  );
}
