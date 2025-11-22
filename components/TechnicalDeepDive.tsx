'use client';

import { useState } from 'react';
import Image from 'next/image';

interface TechnicalSlide {
  id: number;
  title: string;
  description: string;
  imagePath: string;
  category: string;
}

const technicalSlides: TechnicalSlide[] = [
  {
    id: 1,
    title: 'Medallion Architecture',
    description: 'Our foundation: Bronze (raw), Silver (cleansed), Gold (business-ready). Each layer builds trust and governance into your data.',
    imagePath: '/images/Medallion Architecture in Microsoft Fabric.png',
    category: 'Architecture'
  },
  {
    id: 2,
    title: 'OneLake: Single Source of Truth',
    description: 'No data silos. One unified data estate for your entire organization, eliminating redundant copies and ensuring consistency.',
    imagePath: '/images/Onelake.png',
    category: 'Platform'
  },
  {
    id: 3,
    title: 'Bronze Layer: Raw Data Ingestion',
    description: 'Capture everything as-is. Historical record, full auditability, foundation for all downstream transformations.',
    imagePath: '/images/Bronze Layer.png',
    category: 'Data Layers'
  },
  {
    id: 4,
    title: 'Silver Layer: Cleansed & Conformed',
    description: 'Quality-checked, deduplicated, and standardized. Ready for analytics but not yet business-specific.',
    imagePath: '/images/Silver Layer.png',
    category: 'Data Layers'
  },
  {
    id: 5,
    title: 'Gold Layer: Business Ready',
    description: 'Aggregated metrics, KPIs, and executive-ready datasets. Optimized for Power BI consumption.',
    imagePath: '/images/Gold Layer.png',
    category: 'Data Layers'
  },
  {
    id: 6,
    title: 'Warehouse vs Lakehouse',
    description: 'Choose the right engine: SQL Warehouse for strict reporting, Lakehouse for AI and unstructured data.',
    imagePath: '/images/Warehouse vs Lakehouse 2.png',
    category: 'Decision Guide'
  },
  {
    id: 7,
    title: 'Star Schema: Semantic Modeling',
    description: 'Dimensional modeling for blazing-fast queries. Facts and dimensions optimized for executive dashboards.',
    imagePath: '/images/Star Schema.png',
    category: 'Modeling'
  },
  {
    id: 8,
    title: 'Data Movement Across Layers',
    description: 'Automated pipelines move data through Bronze → Silver → Gold with validation, logging, and error handling.',
    imagePath: '/images/Moving Data Across Layers in Fabric 2.png',
    category: 'Orchestration'
  }
];

export default function TechnicalDeepDive() {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % technicalSlides.length);
  };

  const prevSlide = () => {
    setActiveSlide((current) => (current - 1 + technicalSlides.length) % technicalSlides.length);
  };

  const currentSlide = technicalSlides[activeSlide];

  return (
    <section className="py-16 bg-gradient-to-br from-navy-900 to-navy-800 text-white">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical Deep Dive
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The engineering standards behind enterprise-grade analytics
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Category Badge */}
          <div className="text-center mb-6">
            <span className="inline-block bg-azure-500 text-white text-sm font-semibold px-4 py-2 rounded-full">
              {currentSlide.category}
            </span>
          </div>

          {/* Slide Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative bg-white rounded-xl p-6 shadow-2xl">
                <Image
                  src={currentSlide.imagePath}
                  alt={currentSlide.title}
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain rounded-lg"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </div>

            {/* Description */}
            <div className="order-1 lg:order-2 space-y-6">
              <h3 className="text-3xl font-bold">
                {currentSlide.title}
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                {currentSlide.description}
              </p>

              {/* Slide Counter */}
              <div className="flex items-center gap-4 text-gray-400">
                <div className="h-px flex-grow bg-gray-600"></div>
                <span className="text-sm font-mono">
                  {activeSlide + 1} / {technicalSlides.length}
                </span>
                <div className="h-px flex-grow bg-gray-600"></div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors border border-white/30"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {technicalSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === activeSlide
                      ? 'w-8 bg-azure-500'
                      : 'w-2 bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors border border-white/30"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Auto-advance hint */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-400">
              Use arrow keys or click to navigate • {technicalSlides.length} slides
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
