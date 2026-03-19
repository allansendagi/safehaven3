import React from 'react';
import Link from 'next/link';

const ThreePillarsSection = () => {
  const pillars = [
    {
      title: 'AI TownSquare',
      tagline: 'Dialogue & Participatory Governance',
      description: 'A global platform bridging AI advancement and societal readiness through education, dialogue, and collaborative decision-making.',
      link: '/ai-townsquare',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
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
    <section className="py-20 bg-gray-50">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4">
            Three Pillars of Societal Readiness
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            SafeHaven operates through three interconnected initiatives designed to prepare humanity for the age of AI.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <Link
              key={index}
              href={pillar.link}
              className="group bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[var(--primary)]"
            >
              <div className="h-16 w-16 bg-[var(--primary)] bg-opacity-10 rounded-full flex items-center justify-center mb-6 text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white transition-all duration-300">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-2">
                {pillar.title}
              </h3>
              <p className="text-[var(--accent)] font-semibold text-sm mb-4">
                {pillar.tagline}
              </p>
              <p className="text-gray-600 mb-6">
                {pillar.description}
              </p>
              <span className="inline-flex items-center text-[var(--primary)] font-semibold group-hover:underline">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreePillarsSection;
