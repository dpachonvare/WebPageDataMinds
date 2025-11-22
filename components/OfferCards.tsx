import Link from 'next/link';

interface Offer {
  title: string;
  description: string;
  price: string;
  duration: string;
  bestFor?: string;
  deliverables: string[];
  featured?: boolean;
}

interface OfferCardsProps {
  offers: Offer[];
}

export default function OfferCards({ offers }: OfferCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {offers.map((offer, index) => (
        <div
          key={index}
          className={`card ${
            offer.featured
              ? 'border-2 border-azure-500 shadow-lg scale-105'
              : ''
          }`}
        >
          {offer.featured && (
            <span className="inline-block bg-azure-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
              POPULAR
            </span>
          )}
          <h3 className="text-2xl font-bold text-navy-800 mb-2">
            {offer.title}
          </h3>
          {offer.bestFor && (
            <div className="mb-3 p-3 bg-azure-50 border-l-4 border-azure-500 rounded">
              <p className="text-sm font-semibold text-azure-900">
                <span className="text-azure-600">Best For:</span> {offer.bestFor}
              </p>
            </div>
          )}
          <p className="text-gray-600 mb-4">{offer.description}</p>
          <div className="mb-4">
            <span className="text-3xl font-bold text-navy-800">{offer.price}</span>
            <span className="text-gray-500 ml-2">• {offer.duration}</span>
          </div>
          <div className="border-t border-gray-200 pt-4 mb-6">
            <p className="text-sm font-semibold text-gray-700 mb-3">Deliverables:</p>
            <ul className="space-y-2">
              {offer.deliverables.map((deliverable, i) => (
                <li key={i} className="flex items-start text-sm text-gray-600">
                  <svg className="w-5 h-5 text-azure-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {deliverable}
                </li>
              ))}
            </ul>
          </div>
          <Link href="/contact" className="btn-primary w-full text-center block">
            Get Started
          </Link>
        </div>
      ))}
    </div>
  );
}
