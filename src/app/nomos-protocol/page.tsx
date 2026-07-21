import React from 'react';
import Link from 'next/link';
import NewsletterSignup from '@/components/NewsletterSignup';

export default function NomosProtocolPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-[#1a365d] to-[#2c4c7c] text-white">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[var(--accent)] font-semibold text-sm uppercase tracking-wide mb-4 animate-fade-in">
              A SafeHaven Venture
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Nomos Protocol
            </h1>
            <p className="text-xl mb-4 animate-fade-in">
              AI governance infrastructure for teams shipping at scale.
            </p>
            <p className="text-white/80 max-w-2xl mx-auto mb-8 animate-fade-in">
              Seal decision logic, detect contradictions, and verify agent behavior — a governance artifact, not a chatbot.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Link href="https://www.nomosprotocol.com" className="btn-accent" target="_blank" rel="noopener noreferrer">
                Visit Nomos Protocol
              </Link>
              <Link href="https://www.nomosprotocol.com/whitepaper" className="btn-outline border-white text-white hover:bg-white hover:text-[#1a365d]" target="_blank" rel="noopener noreferrer">
                Read the Whitepaper
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is Nomos Protocol */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-subtitle mb-4">What is Nomos Protocol?</h2>
              <p className="text-gray-700 mb-4">
                Every organization runs on a vast, invisible decision layer — written policy, tacit judgment calls, and the exceptions loan officers, underwriters, and clinicians make every day. When AI systems start making those decisions, that layer needs to become machine-readable, auditable, and provable.
              </p>
              <p className="text-gray-700 mb-4">
                Nomos Protocol operates at that decision layer. Its runtime, NOMOS Studio, reads policy documents, extracts the rules with their conditions and actions, and cryptographically seals them into a <strong>governance artifact</strong> — a tamper-evident, machine-readable record of the rules, constraints, and ownership structure governing an AI system&apos;s decisions at a specific point in time.
              </p>
              <p className="text-gray-700">
                From there, Nomos triangulates written policy against observed AI behavior to detect contradictions, score risk, and monitor drift over time — so a sealed artifact isn&apos;t just a compliance checkbox, but a governance promise that can&apos;t be quietly revised.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[var(--primary)] rounded-full p-2 mr-4 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Cryptographic Sealing</h3>
                    <p className="text-gray-600">SHA-256 hashed, immutable governance artifacts — every rule independently auditable against its source policy</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[var(--primary)] rounded-full p-2 mr-4 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Contradiction Detection</h3>
                    <p className="text-gray-600">Triangulates policy documents, sealed rules, and real decision logs to surface where written policy and AI behavior diverge</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[var(--primary)] rounded-full p-2 mr-4 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">ARI Risk Scoring</h3>
                    <p className="text-gray-600">A composite AI Risk Index across Logic Integrity, Data Reliability, Risk Exposure, and Governance Maturity</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[var(--primary)] rounded-full p-2 mr-4 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Behavioral Drift Monitoring</h3>
                    <p className="text-gray-600">Ongoing re-scoring flags the moment a model&apos;s real-world behavior drifts from its sealed governance artifact</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 bg-gray-50">
        <div className="container-wide">
          <h2 className="section-title mb-4 text-center">How Nomos Studio Works</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto text-center mb-12">
            Extract, seal, and verify — the full cycle from policy document to a provable governance record takes under a minute.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <div className="bg-[var(--primary)] text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                STEP 1 · EXTRACT
              </div>
              <h3 className="text-xl font-semibold mb-2">Read the policy once</h3>
              <p className="text-gray-600">
                Upload a policy document to Studio. NOMOS reads it and converts its obligations into structured, executable rules — no manual encoding required.
              </p>
            </div>
            <div className="card">
              <div className="bg-[var(--primary)] text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                STEP 2 · SEAL
              </div>
              <h3 className="text-xl font-semibold mb-2">Seal a governance artifact</h3>
              <p className="text-gray-600">
                Every extracted rule, condition, and action is hashed and sealed into an immutable, uniquely identified governance artifact.
              </p>
            </div>
            <div className="card">
              <div className="bg-[var(--primary)] text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                STEP 3 · VERIFY
              </div>
              <h3 className="text-xl font-semibold mb-2">Triangulate and monitor</h3>
              <p className="text-gray-600">
                Compare the sealed artifact against real decision logs to detect contradictions, score risk, and track drift over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Built for regulated industries */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <h2 className="section-title mb-4 text-center">Built for Regulated Industries</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto text-center mb-12">
            Nomos governance artifacts are already documenting AI decision logic for banks, insurers, healthcare systems, and government bodies — with particular depth in UAE and DIFC compliance frameworks.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Banking & Fintech',
              'Islamic Finance',
              'Healthcare',
              'Insurance',
              'Government & Public Sector',
              'Compliance & RegTech',
            ].map((industry) => (
              <div key={industry} className="bg-gray-50 rounded-lg p-6 text-center font-semibold text-[var(--primary)]">
                {industry}
              </div>
            ))}
          </div>
          <div className="mt-10 max-w-3xl mx-auto bg-gray-50 rounded-lg p-8 text-center">
            <p className="text-gray-700">
              For banks, healthcare systems, and government bodies, Nomos offers on-premise deployment, custom SLAs, regulatory reporting, and a dedicated implementation engineer.
            </p>
          </div>
        </div>
      </section>

      {/* Get Started */}
      <section className="py-16 bg-gray-50">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="section-title">Start Free. Ship to Production.</h2>
            <p className="text-lg text-gray-700">
              Nomos is offered as Free, Professional, and Enterprise tiers. Seal your first governance artifact free — no credit card required — and scale into regulated deployment when you&apos;re ready.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 text-center shadow-sm">
              <div className="h-16 w-16 bg-[var(--primary)] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">NOMOS Studio</h3>
              <p className="text-gray-600 mb-6">
                Seal your first governance artifact free, browse the artifact library, or upload your own policy documents.
              </p>
              <Link href="https://www.nomosprotocol.com/studio" target="_blank" rel="noopener noreferrer" className="btn-outline">
                Try Studio
              </Link>
            </div>

            <div className="bg-white rounded-lg p-8 text-center shadow-sm">
              <div className="h-16 w-16 bg-[var(--primary)] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Technical Docs & Spec</h3>
              <p className="text-gray-600 mb-6">
                Read the NOMOS protocol specification, the technical whitepaper, and integration guides for developers.
              </p>
              <Link href="https://www.nomosprotocol.com/docs" target="_blank" rel="noopener noreferrer" className="btn-outline">
                Browse Docs
              </Link>
            </div>

            <div className="bg-white rounded-lg p-8 text-center shadow-sm">
              <div className="h-16 w-16 bg-[var(--primary)] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Enterprise Governance</h3>
              <p className="text-gray-600 mb-6">
                Talk to the team about on-premise deployment, custom SLAs, and regulatory reporting for banks, insurers, and government bodies.
              </p>
              <Link href="https://www.nomosprotocol.com/contact" target="_blank" rel="noopener noreferrer" className="btn-outline">
                Request a Briefing
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="https://www.nomosprotocol.com" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Visit Nomos Protocol
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-[var(--primary)] bg-opacity-5">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <NewsletterSignup />
          </div>
        </div>
      </section>
    </div>
  );
}
