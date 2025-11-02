import Link from 'next/link';

interface ServiceTile {
  title: string;
  description: string;
  link: string;
  icon: string;
}

interface ServiceTilesProps {
  services: ServiceTile[];
}

export default function ServiceTiles({ services }: ServiceTilesProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, index) => (
        <Link
          key={index}
          href={service.link}
          className="card hover:border-azure-500 border-2 border-transparent transition-all duration-200 group"
        >
          <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">
            {service.icon}
          </div>
          <h3 className="text-xl font-semibold text-navy-800 mb-3">
            {service.title}
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            {service.description}
          </p>
          <span className="text-azure-500 font-semibold inline-flex items-center">
            Learn more
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </Link>
      ))}
    </div>
  );
}
