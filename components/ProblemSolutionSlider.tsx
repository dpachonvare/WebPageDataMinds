'use client';

import { useState, useEffect } from 'react';

interface ProblemSolution {
  pain: string;
  solution: string;
}

const problems: ProblemSolution[] = [
  {
    pain: "Drowning in spreadsheets but starving for insights?",
    solution: "Automated P&L and Cashflow dashboards in Power BI."
  },
  {
    pain: "Don't trust the numbers in the board meeting?",
    solution: "Certified Gold Layer datasets using Fabric Architecture."
  },
  {
    pain: "IT builds dashboards nobody uses?",
    solution: "User-centric design focused on decision workflows."
  }
];

export default function ProblemSolutionSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % problems.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 bg-gradient-to-r from-navy-50 to-azure-50 border-y border-gray-200">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Tabs */}
          <div className="flex justify-center gap-2 mb-8">
            {problems.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'w-12 bg-azure-500'
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Content */}
          <div className="relative min-h-[200px]">
            {problems.map((problem, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-500 ${
                  index === activeIndex
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-4 pointer-events-none'
                }`}
              >
                <div className="text-center space-y-6">
                  {/* Pain Point */}
                  <div className="flex items-start justify-center gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                      {problem.pain}
                    </h3>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-center">
                    <svg className="w-8 h-8 text-azure-500 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>

                  {/* Solution */}
                  <div className="flex items-start justify-center gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-xl md:text-2xl text-navy-700 font-semibold">
                      {problem.solution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => setActiveIndex((current) => (current - 1 + problems.length) % problems.length)}
              className="p-2 rounded-full bg-white border border-gray-300 hover:border-azure-500 hover:bg-azure-50 transition-colors"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6 text-navy-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setActiveIndex((current) => (current + 1) % problems.length)}
              className="p-2 rounded-full bg-white border border-gray-300 hover:border-azure-500 hover:bg-azure-50 transition-colors"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6 text-navy-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
