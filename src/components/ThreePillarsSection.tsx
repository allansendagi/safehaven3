import React from 'react';
import Link from 'next/link';

const FLOW_STEPS = [
  { label: 'DIALOGUE', name: 'AI TownSquare', line: 'Understand together.' },
  { label: 'MEASUREMENT', name: 'Societal Readiness Index', line: 'Know where we stand.' },
  { label: 'ACTION', name: 'Readiness Institute', line: 'Close the gaps.' },
  { label: 'AUTHORITY', name: 'NOMOS Protocol', line: 'Make institutional authority executable.' },
];

const pillars = [
  {
    title: 'AI TownSquare',
    tagline: 'Dialogue',
    lead: 'Give society a place to think together.',
    description:
      'AI TownSquare creates structured spaces where citizens, experts, institutions, and communities can examine the implications of AI, exchange perspectives, and turn dialogue into collective intelligence.',
    link: '/ai-townsquare',
    cta: 'Explore AI TownSquare',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Societal Readiness Index',
    tagline: 'Measurement',
    lead: 'Know where you stand.',
    description:
      'The Societal Readiness Index measures the conditions that determine whether a society, institution, or community is prepared to adapt to AI—and identifies where the greatest gaps remain.',
    link: '/readiness',
    cta: 'Explore the Index',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Readiness Institute',
    tagline: 'Action',
    lead: 'Turn readiness gaps into progress.',
    description:
      'The Readiness Institute works with institutions and communities to translate evidence into practical interventions, programs, research, and new models for adapting to AI.',
    link: '/readiness-institute',
    cta: 'Explore the Institute',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: 'NOMOS Protocol',
    tagline: 'Computable Authority',
    lead: 'Make institutional authority executable.',
    description:
      'AI systems can act faster than institutions can explain their authority. NOMOS turns policies, regulations, procedures, and other institutional rules into machine-executable, independently verifiable authority—so AI systems can act within clearly defined boundaries.',
    link: '/nomos-protocol',
    cta: 'Explore NOMOS',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
];

const ThreePillarsSection = () => {
  return (
    <section id="system" className="py-16 md:py-24 bg-gray-50 scroll-mt-20">
      <div className="container-wide px-4 md:px-6">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[var(--accent)] font-semibold text-sm md:text-base uppercase tracking-wide mb-3">
            The SafeHaven System
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--primary)] mb-4">
            Building the Civic Operating System for the Intelligence Age
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            SafeHaven is building a connected set of systems that help people, institutions, and societies understand AI, adapt to it, govern it, and act with it.
          </p>
        </div>

        {/* Flow diagram */}
        <div className="max-w-5xl mx-auto mb-10 md:mb-14">
          <p className="text-center text-sm md:text-base font-semibold text-gray-500 uppercase tracking-wide mb-6 md:mb-8">
            From readiness to action
          </p>
          <div className="flex flex-col md:flex-row items-stretch gap-3 md:gap-2">
            {FLOW_STEPS.map((step, index) => (
              <React.Fragment key={step.label}>
                <div className="flex-1 bg-white rounded-xl border border-gray-100 shadow-sm px-4 py-5 text-center">
                  <p className="text-[var(--accent)] text-xs md:text-sm font-bold tracking-wide mb-1">
                    {step.label}
                  </p>
                  <p className="text-[var(--primary)] font-bold text-base md:text-lg mb-1">
                    {step.name}
                  </p>
                  <p className="text-gray-500 text-xs md:text-sm">{step.line}</p>
                </div>
                {index < FLOW_STEPS.length - 1 && (
                  <div className="flex items-center justify-center text-gray-300 md:px-1">
                    <svg
                      className="w-6 h-6 rotate-90 md:rotate-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
          <p className="text-center text-base md:text-lg text-gray-700 font-medium mt-8 md:mt-10">
            Together, they form the foundation of a civic operating system for the Intelligence Age.
          </p>
        </div>

        <p className="text-center text-[var(--primary)] font-bold text-lg md:text-xl mb-8 md:mb-10">
          Four systems. One mission.
        </p>

        {/* Pillar cards */}
        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
          {pillars.map((pillar) => (
            <Link
              key={pillar.title}
              href={pillar.link}
              className="group bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:-translate-y-1"
            >
              <div className="h-1 w-10 bg-[var(--accent)] rounded-full mb-6" />
              <div className="text-[var(--primary)] mb-5 md:mb-6">
                {pillar.icon}
              </div>
              <p className="text-[var(--accent)] font-bold text-xs md:text-sm uppercase tracking-wide mb-2">
                {pillar.tagline}
              </p>
              <h3 className="text-xl md:text-2xl font-bold text-[var(--primary)] mb-2">
                {pillar.title}
              </h3>
              <p className="text-gray-800 font-semibold text-sm md:text-base mb-3 md:mb-4">
                {pillar.lead}
              </p>
              <p className="text-gray-600 text-sm md:text-base mb-5 md:mb-6 leading-relaxed">
                {pillar.description}
              </p>
              <span className="inline-flex items-center text-[var(--primary)] font-semibold text-sm md:text-base group-hover:underline">
                {pillar.cta}
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
