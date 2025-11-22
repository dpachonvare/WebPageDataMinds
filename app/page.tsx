import HeroSplit from '@/components/HeroSplit';
import ProblemSolutionSlider from '@/components/ProblemSolutionSlider';
import LogoMarquee from '@/components/LogoMarquee';
import CardGrid from '@/components/CardGrid';
import ServiceTiles from '@/components/ServiceTiles';
import OfferCards from '@/components/OfferCards';
import ProcessSteps from '@/components/ProcessSteps';
import CaseMini from '@/components/CaseMini';
import FAQAccordion from '@/components/FAQAccordion';
import CTAFullWidth from '@/components/CTAFullWidth';
import EngineeringStandard from '@/components/EngineeringStandard';

export default function Home() {
  const valueProps = [
    {
      title: 'Outcomes, not dashboards',
      description: 'We align C-level KPIs and tell the right story.',
    },
    {
      title: 'Fabric-first architecture',
      description: 'Lakehouse, SQL, Python & automated pipelines.',
    },
    {
      title: 'Faster, leaner delivery',
      description: 'Onshore strategy + nearshore build, enterprise quality.',
    },
    {
      title: 'Run & improve',
      description: 'SLAs, refresh reliability, continuous enhancements.',
    },
  ];

  const services = [
    {
      title: 'Audit & BI Strategy',
      description: 'Data readiness, governance, roadmap.',
      link: '/services#consulting',
      icon: '🔍',
    },
    {
      title: 'Implementation',
      description: 'Fabric Lakehouse, models, Power BI, pipelines.',
      link: '/services#implementation',
      icon: '⚙️',
    },
    {
      title: 'AI & ML',
      description: 'Azure ML, LLM agents, chat over metrics & tables.',
      link: '/services#ai-ml',
      icon: '🤖',
    },
    {
      title: 'Managed Services',
      description: 'Refresh, fixes, performance, new asks.',
      link: '/services#managed',
      icon: '🛠️',
    },
    {
      title: 'Training',
      description: 'Execs, analysts, data teams.',
      link: '/services#training',
      icon: '📚',
    },
    {
      title: 'Migrations',
      description: 'From legacy DW/SSIS/Tableau/Qlik to Fabric/Power BI.',
      link: '/services#migrations',
      icon: '🔄',
    },
  ];

  const industries = [
    {
      title: 'Utilities',
      description: 'Network reliability, field ops, asset health.',
    },
    {
      title: 'Asset Maintenance',
      description: 'IW29-style flows, MTBF/MTTR, backlog & SLA.',
    },
    {
      title: 'Retail',
      description: 'P&L, cohort sales, inventory turns, promo ROI.',
    },
    {
      title: 'D365 & SAP',
      description: 'Operational layer → semantic model → exec story.',
    },
  ];

  const offers = [
    {
      title: 'Fabric QuickStart',
      description: 'Lakehouse baseline, 2 subject areas, 4 KPIs, refresh, access model.',
      price: 'from $35k',
      duration: '4–6 weeks',
      bestFor: 'CTOs who need a modern data foundation in weeks, not months.',
      deliverables: [
        'Lakehouse baseline setup',
        '2 subject areas configured',
        '4 executive KPIs',
        'Automated refresh pipeline',
        'Access & security model',
      ],
      featured: false,
    },
    {
      title: 'Power BI CFO Pack',
      description: 'P&L, Cashflow, AR ageing + governed refresh pipeline.',
      price: 'from $20k',
      duration: '3–4 weeks',
      bestFor: 'CFOs tired of manual Excel consolidation.',
      deliverables: [
        'P&L dashboard',
        'Cashflow analysis',
        'AR ageing reports',
        'Governed data pipeline',
        'Executive training',
      ],
      featured: true,
    },
    {
      title: 'AI Insight Agent',
      description: 'Chat over your model (LLMs), Q&A on metrics, governance & safety.',
      price: 'from $25k',
      duration: '3–4 weeks',
      bestFor: 'Leaders who want natural language access to their data.',
      deliverables: [
        'LLM integration with your data',
        'Natural language Q&A',
        'Metrics chat interface',
        'Governance & safety guardrails',
        'User training & docs',
      ],
      featured: false,
    },
  ];

  const processSteps = [
    {
      number: 1,
      title: 'Discover',
      description: 'Understand your business, data landscape, and goals.',
    },
    {
      number: 2,
      title: 'Define',
      description: 'Co-create stories and metrics that matter.',
    },
    {
      number: 3,
      title: 'Build',
      description: 'Implement models, pipelines, and dashboards.',
    },
    {
      number: 4,
      title: 'Train',
      description: 'Enable your teams to use and maintain the solution.',
    },
    {
      number: 5,
      title: 'Operate',
      description: 'Monitor, optimize, and continuously improve.',
    },
  ];

  const caseStudies = [
    {
      title: 'Retail Analytics Transformation',
      challenge: 'Manual reports, low trust in numbers, delayed decisions.',
      solution: 'Fabric lakehouse + semantic model + CFO Pack dashboards.',
      impact: '−70% reporting time, +1.5 pt improvement in GM decisions.',
      industry: 'Retail',
    },
    {
      title: 'Utilities Network Monitoring',
      challenge: 'Fragmented data sources, poor visibility on outages.',
      solution: 'Real-time pipeline with SAIDI/SAIFI metrics in Power BI.',
      impact: '50% faster incident response, 25% reduction in downtime.',
      industry: 'Utilities',
    },
    {
      title: 'Asset Maintenance Optimization',
      challenge: 'Reactive maintenance, high MTTR, manual tracking.',
      solution: 'Predictive ML model + automated work order flows.',
      impact: '30% reduction in MTTR, 15% increase in asset uptime.',
      industry: 'Asset Management',
    },
  ];

  const faqs = [
    {
      question: 'How long does a QuickStart typically take?',
      answer: 'Our Fabric QuickStart typically takes 4–6 weeks from kickoff to go-live, depending on data complexity and stakeholder availability.',
    },
    {
      question: 'On-premise vs cloud — what do you support?',
      answer: 'We focus on cloud Azure deployments (Australian regions) with RBAC and enterprise security. We can integrate on-prem sources via secure gateways.',
    },
    {
      question: 'How do you handle data security?',
      answer: 'Your data stays in your Azure tenant. We access with least-privilege permissions, audit trails, and follow Microsoft\'s security best practices.',
    },
    {
      question: 'What does Managed Services include?',
      answer: 'Our Managed Services cover refresh reliability monitoring, performance tuning, bug fixes, new feature requests, and monthly continuous improvements under SLA.',
    },
    {
      question: 'How does pricing work?',
      answer: 'We offer fixed-price packages for defined scopes (like QuickStart) plus optional monthly retainers for ongoing support and enhancements.',
    },
  ];

  return (
    <>
      <HeroSplit
        headline="BI on Microsoft Fabric & Power BI that leaders actually use."
        subheadline="We design, build and run end-to-end analytics — audits to AI agents — for Australian businesses across utilities, asset management, retail, D365 and SAP."
        primaryCTA={{
          text: 'Book a 30-min discovery call',
          href: '/contact',
        }}
        secondaryCTA={{
          text: 'Get the Fabric QuickStart pack',
          href: '/resources',
        }}
      />

      <ProblemSolutionSlider />

      <LogoMarquee />

      {/* Value Props */}
      <section id="value-props" className="py-16 bg-white">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-800 mb-12">
            Why Data Minds
          </h2>
          <CardGrid cards={valueProps} columns={4} />
        </div>
      </section>

      {/* What We Do */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-800 mb-4">
            What We Do
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            From audit to AI agents — one Fabric-first stack.
          </p>
          <ServiceTiles services={services} />
        </div>
      </section>

      {/* Industry Use Cases */}
      <section id="industries" className="py-16 bg-white">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-800 mb-4">
            Industry Solutions
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Tailored analytics for your sector.
          </p>
          <CardGrid cards={industries} columns={4} />
        </div>
      </section>

      {/* Productized Offers */}
      <section id="offers" className="py-16 bg-gray-50">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-800 mb-4">
            Productized Offers
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Fast-track your analytics journey with our proven packages.
          </p>
          <OfferCards offers={offers} />
        </div>
      </section>

      {/* How We Work */}
      <section id="process" className="py-16 bg-white">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-800 mb-4">
            How We Work
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            We co-create the stories first, then the models. No zombie dashboards.
          </p>
          <ProcessSteps steps={processSteps} />
        </div>
      </section>

      {/* Mini Case Studies */}
      <section id="cases" className="py-16 bg-gray-50">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-800 mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Real outcomes for real businesses.
          </p>
          <CaseMini cases={caseStudies} />
        </div>
      </section>

      {/* Engineering Standard */}
      <EngineeringStandard />

      {/* Tech & Certs */}
      <section id="tech" className="py-16 bg-gray-50">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-6">
            Technology Stack
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Microsoft Fabric • Power BI • Azure ML • Python • SQL • Microsoft Partner
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 bg-gray-50">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-800 mb-12">
            Frequently Asked Questions
          </h2>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* Final CTA */}
      <CTAFullWidth
        title="Ready to see your story in Fabric?"
        subtitle="Book a 30-minute discovery call to discuss your analytics needs."
        primaryCTA={{
          text: 'Book a Call',
          href: '/contact',
        }}
        secondaryCTA={{
          text: 'Download QuickStart Pack',
          href: '/resources',
        }}
      />
    </>
  );
}
