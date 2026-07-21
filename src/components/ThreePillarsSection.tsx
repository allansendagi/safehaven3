import React from 'react';
import Link from 'next/link';

const ThreePillarsSection = () => {
  const pillars = [
    {
      title: 'AI TownSquare',
      tagline: 'Dialogue & Participatory Governance',
      description: 'A global platform bridging AI advancement and societal readiness through education, dialogue, and collaborative decision-making.',
      link: '/ai-townsquare',
      externalLink: 'https://aitownsquare.org',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'Nomos Protocol',
      tagline: 'AI Governance Infrastructure',
      description: 'Cryptographically sealed governance artifacts that let regulated organizations prove their AI systems make decisions consistently, accountably, and in line with policy.',
      link: '/nomos-protocol',
      externalLink: 'https://www.nomosprotocol.com',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
    {
      title: 'Societal Readiness Index',
      tagline: "Measuring Society's AI Preparedness",
      description: 'A comprehensive framework to assess and track how prepared nations, organizations, and communities are for AI integration.',
      link: '/readiness',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: 'Readiness Institute',
      tagline: 'From Theory to Practice',
      description: 'Translating research and frameworks into actionable programs, training, and implementation support for organizations worldwide.',
      link: '/readiness-institute',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container-wide px-4 md:px-6">
        {/* Section header with civic OS messaging */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[var(--accent)] font-semibold text-sm md:text-base uppercase tracking-wide mb-3">
            The Civic Operating System for the Intelligence Age
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--primary)] mb-4">
            SafeHaven&apos;s Ventures &amp; Pillars
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            SafeHaven operates through interconnected ventures and initiatives designed to prepare humanity for the age of AI — at scale.
          </p>
        </div>

        {/* Pillar cards */}
        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
          {pillars.map((pillar, index) => (
            <Link
              key={index}
              href={pillar.link}
              className="group bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[var(--primary)] hover:-translate-y-1"
            >
              <div className="h-14 w-14 md:h-16 md:w-16 bg-[var(--primary)] bg-opacity-10 rounded-xl flex items-center justify-center mb-5 md:mb-6 text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white transition-all duration-300">
                {pillar.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[var(--primary)] mb-2">
                {pillar.title}
              </h3>
              <p className="text-[var(--accent)] font-semibold text-sm mb-3 md:mb-4">
                {pillar.tagline}
              </p>
              <p className="text-gray-600 text-sm md:text-base mb-5 md:mb-6 leading-relaxed">
                {pillar.description}
              </p>
              <span className="inline-flex items-center text-[var(--primary)] font-semibold text-sm md:text-base group-hover:underline">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>

        {/* External links to venture sites */}
        <div className="mt-10 md:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center">
          <a
            href="https://aitownsquare.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-[var(--primary)] hover:text-[var(--accent)] font-medium transition-colors"
          >
            <span>Visit AI TownSquare Global</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <a
            href="https://www.nomosprotocol.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-[var(--primary)] hover:text-[var(--accent)] font-medium transition-colors"
          >
            <span>Visit Nomos Protocol</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ThreePillarsSection;
