"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-wide py-4">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo/SafeHaven_Logo_Black.png"
              alt="Safehaven Logo"
              width={100}
              height={40}
              className="w-18 md:w-30 h-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <Link href="/ai-townsquare" className="text-gray-700 hover:text-[var(--primary)] font-semibold">AI TownSquare</Link>
            <Link href="/readiness" className="text-gray-700 hover:text-[var(--primary)] font-semibold">Readiness Index</Link>
            <Link href="/readiness-institute" className="text-gray-700 hover:text-[var(--primary)] font-semibold">Readiness Institute</Link>
            <Link href="/book" className="text-gray-700 hover:text-[var(--primary)] font-semibold">The Book</Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/join" className="btn-primary">Get Involved</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link href="/ai-townsquare" className="text-gray-700 hover:text-[var(--primary)] font-semibold">AI TownSquare</Link>
              <Link href="/readiness" className="text-gray-700 hover:text-[var(--primary)] font-semibold">Readiness Index</Link>
              <Link href="/readiness-institute" className="text-gray-700 hover:text-[var(--primary)] font-semibold">Readiness Institute</Link>
              <Link href="/book" className="text-gray-700 hover:text-[var(--primary)] font-semibold">The Book</Link>
              <Link href="/join" className="btn-primary inline-block text-center">Get Involved</Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
