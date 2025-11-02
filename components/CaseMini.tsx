import Link from 'next/link';

interface CaseStudy {
  title: string;
  challenge: string;
  solution: string;
  impact: string;
  industry: string;
}

interface CaseMiniProps {
  cases: CaseStudy[];
}

export default function CaseMini({ cases }: CaseMiniProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {cases.map((caseStudy, index) => (
        <div key={index} className="card">
          <span className="inline-block bg-azure-100 text-azure-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            {caseStudy.industry}
          </span>
          <h3 className="text-xl font-bold text-navy-800 mb-4">
            {caseStudy.title}
          </h3>

          <div className="space-y-3 mb-6">
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Challenge</p>
              <p className="text-sm text-gray-700">{caseStudy.challenge}</p>
            </div>

            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Solution</p>
              <p className="text-sm text-gray-700">{caseStudy.solution}</p>
            </div>

            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Impact</p>
              <p className="text-sm font-semibold text-azure-700">{caseStudy.impact}</p>
            </div>
          </div>

          <Link href="/case-studies" className="text-azure-500 font-semibold text-sm inline-flex items-center hover:text-azure-600">
            Read full case study
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      ))}
    </div>
  );
}
