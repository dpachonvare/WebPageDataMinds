import Link from 'next/link';

interface HeroSplitProps {
  headline: string;
  subheadline: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
}

export default function HeroSplit({ headline, subheadline, primaryCTA, secondaryCTA }: HeroSplitProps) {
  return (
    <section id="hero" className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white py-20 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.jpg"
          alt="Data analytics background"
          className="w-full h-full object-cover opacity-30"
          onError={(e) => {
            // Fallback if image doesn't exist
            e.currentTarget.style.display = 'none';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900/80 via-navy-800/80 to-navy-900/80"></div>
      </div>

      {/* Content */}
      <div className="section-container relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {headline}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            {subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href={primaryCTA.href} className="btn-primary bg-azure-500 hover:bg-azure-600 text-center">
              {primaryCTA.text}
            </Link>
            {secondaryCTA && (
              <Link href={secondaryCTA.href} className="btn-secondary border-white text-white hover:bg-white hover:text-navy-900 text-center">
                {secondaryCTA.text}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
