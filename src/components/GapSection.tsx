import React from 'react';
import GlobalReadinessVisualization from './GlobalReadinessVisualization';

const GapSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-wide px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--primary)] mb-6">
            The AI Readiness Gap
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            AI capability is accelerating faster than the institutions, policies, and skills meant to keep pace with it.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-gray-50 rounded-2xl border border-gray-100 p-6 md:p-10">
          <h3 className="text-lg md:text-xl font-semibold text-[var(--primary)] text-center mb-6 md:mb-8">
            Global AI readiness remains uneven across regions.
          </h3>
          <GlobalReadinessVisualization />
        </div>
      </div>
    </section>
  );
};

export default GapSection;
