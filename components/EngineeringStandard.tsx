'use client';

import { useState } from 'react';
import Image from 'next/image';

interface TabContent {
  id: string;
  title: string;
  description: string;
  imagePath: string;
  imageAlt: string;
}

const tabs: TabContent[] = [
  {
    id: 'architecture',
    title: 'The Architecture',
    description: "We don't just dump data. We curate it through Bronze/Silver/Gold layers (Medallion Architecture) to ensure accuracy, governance, and performance.",
    imagePath: '/images/Medallion Architecture in Microsoft Fabric.png',
    imageAlt: 'Medallion Architecture in Microsoft Fabric'
  },
  {
    id: 'engine',
    title: 'The Engine',
    description: 'We choose the right engine for your cost and performance needs—whether it\'s SQL for strict reporting or Spark for AI workloads.',
    imagePath: '/images/Warehouse vs Lakehouse 2.png',
    imageAlt: 'Warehouse vs Lakehouse Comparison'
  },
  {
    id: 'onelake',
    title: 'The Single Source',
    description: 'No data silos. One unified estate (OneLake) for your entire organization, eliminating redundant copies and ensuring everyone works from the same truth.',
    imagePath: '/images/OneLake.png',
    imageAlt: 'Microsoft Fabric OneLake Architecture'
  }
];

export default function EngineeringStandard() {
  const [activeTab, setActiveTab] = useState('architecture');

  const activeContent = tabs.find(tab => tab.id === activeTab) || tabs[0];

  return (
    <section className="py-16 bg-white">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
            Our Engineering Standard
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enterprise-grade architecture, delivered with boutique precision.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === tab.id
                  ? 'bg-navy-800 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Description */}
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-bold text-navy-800 mb-4">
                {activeContent.title}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {activeContent.description}
              </p>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2">
              <div className="relative w-full bg-gray-50 rounded-xl border-2 border-gray-200 p-4 shadow-xl hover:shadow-2xl transition-shadow">
                <Image
                  src={activeContent.imagePath}
                  alt={activeContent.imageAlt}
                  width={800}
                  height={600}
                  className="object-contain w-full h-auto rounded-lg"
                  onError={(e) => {
                    // Fallback for missing images
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <p className="text-sm text-center text-gray-500 mt-3 font-medium">
                  {activeContent.imageAlt}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Line */}
        <div className="text-center mt-12">
          <p className="text-gray-600 italic">
            "Our Golden Standard for Data Integrity"
          </p>
        </div>
      </div>
    </section>
  );
}
