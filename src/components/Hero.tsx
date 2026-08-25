import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a365d] to-[#2c4c7c] opacity-90"></div>

      {/* Content container */}
      <div className="container-wide relative z-10 text-white text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
          Preparing Civilization for the Age of AI
        </h1>

        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-4 animate-fade-in">
          AI advances exponentially. Human systems adapt linearly. SafeHaven builds the infrastructure that helps civilization close the gap.
        </p>

        <p className="text-base md:text-lg font-semibold text-[var(--accent)] mb-10 tracking-wide animate-fade-in">
          Dialogue. Measurement. Action. Computable Authority.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
          <a href="#system" className="bg-white text-[var(--primary)] font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
            Explore SafeHaven
          </a>
          <Link href="/readiness" className="bg-[var(--accent)] text-[var(--primary)] font-semibold px-6 py-3 rounded-lg hover:bg-[#e6b84d] transition-colors">
            Assess Your Readiness
          </Link>
        </div>

        {/* Video */}
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-2xl">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/DfFzAlDSeUY"
              title="Preparing Civilisation for the Advent of AI and Superintelligence"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
