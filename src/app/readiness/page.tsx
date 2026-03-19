"use client";

import React from 'react';
import Link from 'next/link';
import GlobalReadinessVisualization from '@/components/GlobalReadinessVisualization';
import RegionalReadinessCards from '@/components/RegionalReadinessCards';
import { trackEvent, EventTypes } from '@/utils/analytics';
import { useRouter } from 'next/navigation';

export default function ReadinessPage() {
  const router = useRouter();

  const handleClick = async () => {
    await trackEvent(EventTypes.BUTTON_CLICK, {
      buttonId: 'start-assessment',
      location: 'readiness-page'
    });

    router.push('/readiness-assessment');
  };

  const pillars = [
    { name: 'Governance Readiness', score: 45, color: '#3B82F6' },
    { name: 'Technical Literacy', score: 60, color: '#10B981' },
    { name: 'Ethical Frameworks', score: 35, color: '#8B5CF6' },
    { name: 'Infrastructure', score: 70, color: '#F59E0B' },
    { name: 'Social Adaptation', score: 30, color: '#EC4899' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--primary)] to-[#2c4c7c] text-white py-16 md:py-24">
        <div className="container-wide px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-white/70 font-semibold text-sm uppercase tracking-wide mb-4">
              Measuring Society's AI Preparedness
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Societal Readiness Index
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              The SRI provides a comprehensive framework for measuring and enhancing society's preparedness for AI integration.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
              <Link href="/readiness/white-paper" className="btn-accent">
                Read the Manifesto
              </Link>
              <a href="/documents/Towards Societal Readiness-Manifesto.pdf" download className="btn-outline border-white text-white hover:bg-white hover:text-[var(--primary)]">
                Download PDF
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Global Readiness Visualization */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container-wide px-4 md:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary)] mb-4">
              Global AI Readiness Assessment
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Regional comparison of AI readiness scores based on Oxford Insights Government AI Readiness Index, 2024
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 mb-8">
            <GlobalReadinessVisualization />
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-bold text-[var(--primary)] mb-6 text-center">
              Regional Breakdown
            </h3>
            <RegionalReadinessCards />
          </div>
        </div>
      </section>

      {/* Five Pillars Section */}
      <section className="py-12 md:py-16">
        <div className="container-wide px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Five Pillars Card */}
            <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-gray-100">
              <h2 className="text-xl md:text-2xl font-bold text-[var(--primary)] mb-6">
                The Five Pillars of Societal Readiness
              </h2>

              <div className="space-y-5">
                {pillars.map((pillar) => (
                  <div key={pillar.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-800 text-sm md:text-base">{pillar.name}</span>
                      <span className="text-sm font-semibold" style={{ color: pillar.color }}>
                        {pillar.score}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${pillar.score}%`, backgroundColor: pillar.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-sm text-gray-500">
                Global average readiness scores across key dimensions (2025 data)
              </p>
            </div>

            {/* Why It Matters Card */}
            <div className="bg-gradient-to-br from-[var(--primary)] to-[#2c4c7c] rounded-2xl p-6 md:p-8 text-white">
              <h2 className="text-xl md:text-2xl font-bold mb-6">
                Why Societal Readiness Matters
              </h2>

              <div className="space-y-4 text-white/90">
                <p>
                  As AI capabilities advance at an exponential rate, societies worldwide face unprecedented challenges in adaptation and governance.
                </p>
                <p>
                  The gap between technological development and societal readiness threatens to create instability, inequality, and potential risks.
                </p>
                <p>
                  The SRI provides a quantifiable framework for measuring and enhancing society's preparedness across five key dimensions, enabling targeted interventions where they are most needed.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/20">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-bold">48%</div>
                  <div className="text-sm text-white/70">
                    Global average AI readiness score — significant room for improvement
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container-wide px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary)] mb-4">
              Take the Readiness Assessment
            </h2>
            <p className="text-gray-600 mb-8">
              Evaluate your organization's AI readiness and receive personalized recommendations for improvement.
            </p>
            <button onClick={handleClick} className="btn-primary text-lg px-8 py-4">
              Start Assessment
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
