'use client';

import { useState } from 'react';

export default function FloatingCTA() {
  const [isOpen, setIsOpen] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);

  const openCalendly = () => {
    setShowCalendly(true);
    setIsOpen(false);
  };

  const closeCalendly = () => {
    setShowCalendly(false);
  };

  return (
    <>
      {/* Mobile: Sticky Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg p-3">
        <div className="flex gap-2">
          <button
            onClick={openCalendly}
            className="flex-1 btn-primary text-sm py-3 flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Book Call
          </button>
          <a
            href="mailto:hello@dataminds.au"
            className="flex-1 btn-secondary text-sm py-3 flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email
          </a>
        </div>
      </div>

      {/* Desktop: Floating Action Button */}
      <div className="hidden md:block fixed bottom-6 right-6 z-50">
        <div className="flex flex-col items-end gap-3">
          {/* Expanded Options */}
          <div
            className={`transition-all duration-300 ease-out ${
              isOpen
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-10 scale-95 pointer-events-none'
            }`}
          >
            <div className="flex flex-col gap-2 mb-2">
              <button
                onClick={openCalendly}
                className="bg-white hover:bg-azure-50 text-navy-800 font-semibold px-6 py-3 rounded-full shadow-lg flex items-center gap-3 transition-all hover:scale-105 border-2 border-transparent hover:border-azure-500"
              >
                <svg className="w-5 h-5 text-azure-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Book a Call</span>
              </button>
              <a
                href="mailto:hello@dataminds.au"
                className="bg-white hover:bg-azure-50 text-navy-800 font-semibold px-6 py-3 rounded-full shadow-lg flex items-center gap-3 transition-all hover:scale-105 border-2 border-transparent hover:border-azure-500"
              >
                <svg className="w-5 h-5 text-azure-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Email Us</span>
              </a>
            </div>
          </div>

          {/* Main Trigger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-azure-500 hover:bg-azure-600 text-white p-4 rounded-full shadow-xl transition-all hover:scale-110 focus:outline-none focus:ring-4 focus:ring-azure-300"
            aria-label="Contact options"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            )}
          </button>

          {/* Tooltip */}
          {!isOpen && (
            <div className="absolute right-20 bottom-4 bg-navy-800 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity pointer-events-none">
              Let's Talk
              <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-4 border-transparent border-l-navy-800"></div>
            </div>
          )}
        </div>
      </div>

      {/* Calendly Modal */}
      {showCalendly && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={closeCalendly}
        >
          <div
            className="bg-white rounded-xl shadow-2xl w-full max-w-4xl h-[80vh] relative m-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeCalendly}
              className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Calendly Iframe */}
            <iframe
              src="https://calendly.com/dataminds/discovery"
              className="w-full h-full rounded-xl"
              frameBorder="0"
              title="Schedule a discovery call"
            />
          </div>
        </div>
      )}
    </>
  );
}
