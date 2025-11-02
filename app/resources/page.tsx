import type { Metadata } from 'next';
import Link from 'next/link';
import CTAFullWidth from '@/components/CTAFullWidth';

export const metadata: Metadata = {
  title: 'Resources | Data Minds - BI Insights & Downloads',
  description: 'Free resources, guides, and insights on Microsoft Fabric, Power BI, and analytics best practices.',
};

export default function ResourcesPage() {
  const downloads = [
    {
      title: 'Fabric QuickStart Checklist',
      description: 'A step-by-step guide to launching your first Fabric Lakehouse in 4-6 weeks.',
      type: 'PDF Guide',
      downloadUrl: '#',
    },
    {
      title: 'CFO Pack Metrics Catalog',
      description: 'Complete list of P&L, Cashflow, and AR aging metrics with DAX formulas.',
      type: 'PDF Catalog',
      downloadUrl: '#',
    },
    {
      title: 'AI Governance Framework',
      description: 'Best practices for implementing LLM agents with safety guardrails.',
      type: 'PDF Framework',
      downloadUrl: '#',
    },
    {
      title: 'Data Maturity Assessment Template',
      description: 'Self-assessment tool to evaluate your organization\'s BI readiness.',
      type: 'Excel Template',
      downloadUrl: '#',
    },
  ];

  const blogPosts = [
    {
      title: 'From Raw Events to Board-Ready Narratives: The Fabric Approach',
      excerpt: 'How to design your Fabric Lakehouse with executive storytelling in mind.',
      date: '2024-12-15',
      readTime: '8 min read',
      tags: ['Fabric', 'Strategy'],
    },
    {
      title: 'KPI Storytelling: Why Your Dashboards Aren\'t Being Used',
      excerpt: 'Common mistakes in BI design and how to create dashboards executives actually love.',
      date: '2024-11-28',
      readTime: '6 min read',
      tags: ['Power BI', 'UX'],
    },
    {
      title: 'AI Agents Over Your Data: Governance Without the Guardrails',
      excerpt: 'Implementing LLM chat interfaces with proper security and validation.',
      date: '2024-11-10',
      readTime: '10 min read',
      tags: ['AI', 'Governance'],
    },
    {
      title: 'Migrating from SAP BW to Fabric: Lessons Learned',
      excerpt: 'Real-world insights from enterprise SAP to Fabric migrations.',
      date: '2024-10-22',
      readTime: '12 min read',
      tags: ['SAP', 'Migration'],
    },
    {
      title: 'The CFO Pack: 3 Dashboards Every Finance Team Needs',
      excerpt: 'P&L, Cashflow, and AR aging — what to include and how to design them.',
      date: '2024-10-05',
      readTime: '7 min read',
      tags: ['Finance', 'Power BI'],
    },
  ];

  const webinars = [
    {
      title: 'AI Over Your Metrics in 45 Minutes',
      description: 'Live demo of building a natural language Q&A interface with Azure OpenAI.',
      date: 'On-demand',
      duration: '45 min',
    },
    {
      title: 'Fabric QuickStart Deep Dive',
      description: 'Step-by-step walkthrough of our proven 4-6 week implementation methodology.',
      date: 'On-demand',
      duration: '60 min',
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white py-20">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Resources
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
            Free guides, templates, and insights on Fabric, Power BI, and analytics best practices.
          </p>
        </div>
      </section>

      {/* Downloads */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-12 text-center">
            Free Downloads
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {downloads.map((download, index) => (
              <div key={index} className="card">
                <span className="inline-block bg-azure-100 text-azure-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  {download.type}
                </span>
                <h3 className="text-xl font-bold text-navy-800 mb-3">
                  {download.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {download.description}
                </p>
                <Link
                  href={download.downloadUrl}
                  className="btn-primary inline-block"
                >
                  Download Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-12 text-center">
            Latest Articles
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {blogPosts.map((post, index) => (
              <div key={index} className="card hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-xl font-bold text-navy-800 mb-2 md:mb-0">
                    {post.title}
                  </h3>
                  <span className="text-sm text-gray-500">
                    {post.readTime}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="inline-block bg-gray-200 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <Link href="#" className="text-azure-500 font-semibold hover:text-azure-600">
                    Read more →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Webinars */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-12 text-center">
            Webinars
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {webinars.map((webinar, index) => (
              <div key={index} className="card">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-4xl">🎥</span>
                  <div>
                    <span className="block text-sm font-semibold text-azure-700">
                      {webinar.date}
                    </span>
                    <span className="block text-sm text-gray-500">
                      {webinar.duration}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-navy-800 mb-3">
                  {webinar.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {webinar.description}
                </p>
                <Link href="#" className="btn-primary inline-block">
                  Watch Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTAFullWidth
        title="Get the Fabric QuickStart Pack"
        subtitle="Download our comprehensive checklist and templates to kickstart your Fabric journey."
        primaryCTA={{
          text: 'Download Now',
          href: '#',
        }}
        secondaryCTA={{
          text: 'Book a Consultation',
          href: '/contact',
        }}
      />
    </>
  );
}
