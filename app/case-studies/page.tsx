import type { Metadata } from 'next';
import CTAFullWidth from '@/components/CTAFullWidth';

export const metadata: Metadata = {
  title: 'Case Studies | Data Minds - Real Results',
  description: 'See how we\'ve helped Australian businesses transform their analytics with Microsoft Fabric & Power BI.',
};

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      client: 'Mid-Market Retailer',
      industry: 'Retail',
      context: 'National retailer with 50+ stores struggling with manual reporting, inconsistent P&L views, and delayed decision-making.',
      challenge: [
        'Finance team spent 3+ days each week compiling reports from multiple systems',
        'Low trust in numbers due to data inconsistencies',
        'No visibility into cohort performance or promo ROI',
        'Delayed decisions on markdown and inventory management',
      ],
      approach: [
        'Implemented Fabric Lakehouse connecting POS, inventory, and finance systems',
        'Built unified semantic model with governed metrics',
        'Deployed CFO Pack dashboards (P&L, Cashflow, AR aging)',
        'Established refresh pipeline with data quality monitoring',
        'Trained finance and ops teams on self-service analytics',
      ],
      impact: {
        metrics: [
          '70% reduction in reporting time (3 days → <1 day)',
          '+1.5 percentage point improvement in gross margin decisions',
          '20% reduction in inventory waste',
          'Real-time visibility into store performance',
        ],
        quote: '"We finally have one version of the truth. The CFO Pack has transformed how we make decisions — from gut feel to data-driven insights."',
        author: 'CFO',
      },
      stack: ['Microsoft Fabric', 'Power BI', 'Azure SQL', 'Python'],
    },
    {
      client: 'Regional Utility Provider',
      industry: 'Utilities',
      context: 'Regional electricity distributor needing to improve outage response and meet regulatory SLAs for SAIDI/SAIFI reporting.',
      challenge: [
        'Fragmented data across field ops, network management, and customer systems',
        'Manual compilation of outage reports taking days',
        'No real-time visibility into network health',
        'Difficulty meeting regulatory reporting deadlines',
      ],
      approach: [
        'Built real-time pipeline from SCADA, GIS, and field systems into Fabric',
        'Implemented automated SAIDI/SAIFI calculation & monitoring',
        'Created executive dashboards with network reliability KPIs',
        'Set up alerting for critical incidents',
        'Integrated predictive maintenance signals from Azure ML',
      ],
      impact: {
        metrics: [
          '50% faster incident response (4 hours → 2 hours average)',
          '25% reduction in network downtime',
          'Automated regulatory reporting (days → minutes)',
          'Early warning system for potential failures',
        ],
        quote: '"The real-time dashboards have completely changed how we manage our network. We can now predict and prevent issues before they become outages."',
        author: 'Head of Network Operations',
      },
      stack: ['Microsoft Fabric', 'Power BI', 'Azure ML', 'IoT Hub'],
    },
    {
      client: 'Manufacturing Company',
      industry: 'Asset Management',
      context: 'Industrial manufacturer with aging asset base and high maintenance costs due to reactive approach.',
      challenge: [
        'Reactive maintenance driving high MTTR (Mean Time To Repair)',
        'Poor visibility into asset health and performance',
        'Manual work order tracking with large backlogs',
        'No standardized KPIs across maintenance teams',
      ],
      approach: [
        'Implemented work order tracking and management in Fabric',
        'Built MTBF/MTTR dashboards with SLA monitoring',
        'Deployed Azure ML predictive maintenance models',
        'Automated backlog prioritization based on criticality',
        'Established governed KPIs across all maintenance teams',
      ],
      impact: {
        metrics: [
          '30% reduction in MTTR',
          '15% increase in asset uptime',
          '25% shift from reactive to proactive maintenance',
          'Lower total cost of ownership',
        ],
        quote: '"The predictive insights have been game-changing. We\'re fixing problems before they cause downtime."',
        author: 'VP of Operations',
      },
      stack: ['Microsoft Fabric', 'Power BI', 'Azure ML', 'Python'],
    },
    {
      client: 'D365 Enterprise',
      industry: 'Microsoft D365',
      context: 'Enterprise using D365 Finance & Supply Chain with limited visibility into operational performance.',
      challenge: [
        'D365 data locked in operational silos',
        'Slow month-end financial close process',
        'Limited self-service analytics for business users',
        'Difficult to combine D365 with external data sources',
      ],
      approach: [
        'Connected Fabric to D365 Finance & Supply Chain',
        'Built unified semantic models across all business units',
        'Implemented executive dashboards for finance and operations',
        'Established row-level security for multi-tenant access',
        'Trained business users on self-service analytics',
      ],
      impact: {
        metrics: [
          'Single source of truth across enterprise',
          '40% faster month-end close',
          'Self-service analytics adoption by 100+ users',
          'Better forecasting accuracy',
        ],
        quote: '"Having all our D365 data in one place with Power BI has unlocked insights we never knew we were missing."',
        author: 'CIO',
      },
      stack: ['Microsoft Fabric', 'Power BI', 'D365 Connectors', 'Azure'],
    },
    {
      client: 'SAP Enterprise',
      industry: 'SAP',
      context: 'Large enterprise running SAP ERP with complex BW reports that were slow and difficult to maintain.',
      challenge: [
        'SAP BW complexity slowing report development',
        'High cost of maintaining legacy BI infrastructure',
        'Limited self-service capabilities for users',
        'Long turnaround time for new analytics requests',
      ],
      approach: [
        'Extracted operational layer from SAP into Fabric',
        'Transformed data using medallion architecture',
        'Built semantic models replacing complex BW queries',
        'Migrated key reports to Power BI with enhanced UX',
        'Enabled self-service analytics with governance',
      ],
      impact: {
        metrics: [
          '60% reduction in report development time',
          'Lower TCO compared to SAP BW maintenance',
          'Self-service analytics for 200+ business users',
          'Faster insights driving business decisions',
        ],
        quote: '"Moving from SAP BW to Fabric and Power BI has been transformational. Our users love the new interface and we\'re delivering insights much faster."',
        author: 'Head of BI',
      },
      stack: ['Microsoft Fabric', 'Power BI', 'SAP Connectors', 'Azure'],
    },
    {
      client: 'Professional Services Firm',
      industry: 'AI & ML',
      context: 'Professional services firm wanting to enable natural language queries over their complex financial data.',
      challenge: [
        'Analysts spending hours answering ad-hoc data questions',
        'Complex metric definitions hard for business users to understand',
        'No self-service way to explore data',
        'Need for governance over AI-generated insights',
      ],
      approach: [
        'Built AI Insight Agent using Azure OpenAI',
        'Integrated LLM with Fabric semantic models',
        'Implemented natural language Q&A interface',
        'Added governance guardrails and safety controls',
        'Trained users on effective prompting techniques',
      ],
      impact: {
        metrics: [
          '80% reduction in ad-hoc analyst requests',
          'Business users can self-serve complex queries',
          'Faster insights with natural language interface',
          'Governed AI preventing hallucinations',
        ],
        quote: '"The AI agent has democratized our data. Anyone can now ask questions and get accurate answers in seconds."',
        author: 'Chief Data Officer',
      },
      stack: ['Azure OpenAI', 'Microsoft Fabric', 'Power BI', 'Python'],
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white py-20">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Case Studies
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
            Real outcomes for real businesses — from utilities to retail, D365 to SAP.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={index} className="border-b border-gray-200 pb-16 last:border-b-0">
                {/* Header */}
                <div className="mb-8">
                  <span className="inline-block bg-azure-100 text-azure-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
                    {study.industry}
                  </span>
                  <h2 className="text-3xl font-bold text-navy-800 mb-4">
                    {study.client}
                  </h2>
                  <p className="text-lg text-gray-600">
                    {study.context}
                  </p>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  {/* Challenge */}
                  <div className="card">
                    <h3 className="text-xl font-semibold text-navy-800 mb-4">
                      Challenge
                    </h3>
                    <ul className="space-y-3">
                      {study.challenge.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <svg
                            className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                            />
                          </svg>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Approach */}
                  <div className="card">
                    <h3 className="text-xl font-semibold text-navy-800 mb-4">
                      Approach
                    </h3>
                    <ul className="space-y-3">
                      {study.approach.map((item, i) => (
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
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Impact */}
                <div className="card bg-gradient-to-br from-azure-50 to-navy-50 border-2 border-azure-200">
                  <h3 className="text-2xl font-bold text-navy-800 mb-6">
                    Impact
                  </h3>

                  {/* Metrics */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {study.impact.metrics.map((metric, i) => (
                      <div key={i} className="flex items-start">
                        <svg
                          className="w-6 h-6 text-azure-600 mr-3 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                          />
                        </svg>
                        <span className="font-semibold text-navy-800">
                          {metric}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="border-l-4 border-azure-500 pl-6 py-4 bg-white/50 rounded-r">
                    <p className="text-gray-700 italic mb-3">
                      {study.impact.quote}
                    </p>
                    <p className="text-sm font-semibold text-navy-800">
                      — {study.impact.author}
                    </p>
                  </div>
                </div>

                {/* Stack */}
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="text-sm font-semibold text-gray-600">Stack:</span>
                  {study.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="inline-block bg-gray-200 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTAFullWidth
        title="Want similar results for your business?"
        subtitle="Ask for a tailored blueprint based on these case studies."
        primaryCTA={{
          text: 'Book a Discovery Call',
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
