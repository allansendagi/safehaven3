import React from 'react';

const ERAS = [
  { era: 'For the industrial age,', built: 'we built infrastructure for physical power.' },
  { era: 'For the information age,', built: 'we built infrastructure for information.' },
  { era: 'For the Intelligence Age,', built: 'we need infrastructure for collective intelligence, societal adaptation, and institutional authority.' },
];

const VisionSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#1a365d] to-[#0f2544] text-white">
      <div className="container-wide px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <p className="text-[var(--accent)] font-semibold text-sm md:text-base uppercase tracking-wide mb-3">
            Our Vision
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            A civilization capable of keeping pace with its own intelligence.
          </h2>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed">
            We believe humanity&apos;s greatest challenge is not simply creating more intelligent machines. It is developing the capacity of our institutions and societies to adapt alongside them.
          </p>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 md:mb-10">
            The Intelligence Age changes the question.
          </h3>
          <div className="space-y-4 md:space-y-5 mb-8 md:mb-10">
            {ERAS.map((row) => (
              <p key={row.era} className="text-base md:text-lg text-white/80">
                <span className="text-white font-semibold">{row.era}</span> {row.built}
              </p>
            ))}
          </div>
          <p className="text-xl md:text-2xl font-bold text-[var(--accent)]">
            SafeHaven is building it.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
