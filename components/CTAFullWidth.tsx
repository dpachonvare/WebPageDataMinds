import Link from 'next/link';

interface CTAFullWidthProps {
  title: string;
  subtitle?: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
}

export default function CTAFullWidth({ title, subtitle, primaryCTA, secondaryCTA }: CTAFullWidthProps) {
  return (
    <section className="bg-gradient-to-r from-navy-800 to-navy-900 text-white py-16">
      <div className="section-container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={primaryCTA.href} className="btn-primary bg-azure-500 hover:bg-azure-600">
            {primaryCTA.text}
          </Link>
          {secondaryCTA && (
            <Link href={secondaryCTA.href} className="btn-secondary border-white text-white hover:bg-white hover:text-navy-900">
              {secondaryCTA.text}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
