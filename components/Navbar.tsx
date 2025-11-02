'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="section-container">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-navy-800">Data Minds</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-navy-700 transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-navy-700 transition-colors">
              Services
            </Link>
            <Link href="/solutions" className="text-gray-700 hover:text-navy-700 transition-colors">
              Solutions
            </Link>
            <Link href="/case-studies" className="text-gray-700 hover:text-navy-700 transition-colors">
              Case Studies
            </Link>
            <Link href="/resources" className="text-gray-700 hover:text-navy-700 transition-colors">
              Resources
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-navy-700 transition-colors">
              About
            </Link>
            <Link href="/contact" className="btn-primary">
              Book a Call
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link href="/" className="block text-gray-700 hover:text-navy-700 transition-colors">
              Home
            </Link>
            <Link href="/services" className="block text-gray-700 hover:text-navy-700 transition-colors">
              Services
            </Link>
            <Link href="/solutions" className="block text-gray-700 hover:text-navy-700 transition-colors">
              Solutions
            </Link>
            <Link href="/case-studies" className="block text-gray-700 hover:text-navy-700 transition-colors">
              Case Studies
            </Link>
            <Link href="/resources" className="block text-gray-700 hover:text-navy-700 transition-colors">
              Resources
            </Link>
            <Link href="/about" className="block text-gray-700 hover:text-navy-700 transition-colors">
              About
            </Link>
            <Link href="/contact" className="btn-primary inline-block">
              Book a Call
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
