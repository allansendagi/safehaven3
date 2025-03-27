import React from 'react';
import Link from 'next/link';

export default function ProductRoadmapPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-[#1a365d] to-[#2c4c7c] text-white">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Product Roadmap
            </h1>
            <p className="text-xl mb-8 animate-fade-in">
              Our strategic vision for scaling societal readiness through innovative products and services
            </p>
          </div>
        </div>
      </section>

      {/* SRI Evolution */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <h2 className="section-title mb-12 text-center">Integrating the Societal Readiness Index (SRI)</h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-12 text-center">
            The SRI is our core product and competitive moat. Here's how we're phasing it into our roadmap:
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-[var(--primary)]">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[var(--primary)] rounded-full flex items-center justify-center text-white font-bold mr-4">
                  1
                </div>
                <h3 className="text-xl font-bold">SRI as a Diagnostic Tool</h3>
              </div>
              <div className="text-sm text-gray-500 mb-4">Months 0–6</div>
              
              <p className="text-gray-700 mb-4">
                <span className="font-semibold">Purpose:</span> Anchor the free audit.
              </p>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-2">Features:</h4>
                <ul className="space-y-2 pl-5 list-disc">
                  <li>Basic score (0–100) with 2–3 qualitative insights (e.g., "Low citizen trust in AI")</li>
                  <li>Free Tier: Public-facing dashboard for cities (e.g., "Stockholm: SRI 72")</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Monetization:</h4>
                <ul className="space-y-2 pl-5 list-disc">
                  <li>Upsell detailed reports</li>
                  <li>Data Licensing: Sell SRI benchmarks to think tanks</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-[var(--secondary)]">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[var(--secondary)] rounded-full flex items-center justify-center text-white font-bold mr-4">
                  2
                </div>
                <h3 className="text-xl font-bold">SRI as a Predictive Platform</h3>
              </div>
              <div className="text-sm text-gray-500 mb-4">Months 6–12</div>
              
              <p className="text-gray-700 mb-4">
                <span className="font-semibold">Purpose:</span> Transition from diagnosis to foresight.
              </p>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-2">Features:</h4>
                <ul className="space-y-2 pl-5 list-disc">
                  <li>Predictive analytics (e.g., "SRI will drop 15 points by 2025 unless X")</li>
                  <li>Policy impact simulations (e.g., "How would universal AI literacy boost your SRI?")</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Monetization:</h4>
                <ul className="space-y-2 pl-5 list-disc">
                  <li>SaaS Model: Charge governments for predictive dashboards</li>
                  <li>Consulting: Offer "SRI Optimization" packages</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-[var(--accent)]">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[var(--accent)] rounded-full flex items-center justify-center text-[var(--primary)] font-bold mr-4">
                  3
                </div>
                <h3 className="text-xl font-bold">SRI as a Global Standard</h3>
              </div>
              <div className="text-sm text-gray-500 mb-4">Year 2+</div>
              
              <p className="text-gray-700 mb-4">
                <span className="font-semibold">Purpose:</span> Become the "credit rating" for AI readiness.
              </p>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-2">Features:</h4>
                <ul className="space-y-2 pl-5 list-disc">
                  <li>Real-time SRI scores for 100+ nations</li>
                  <li>Certifications (e.g., "SRI-Gold Standard" for companies)</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Monetization:</h4>
                <ul className="space-y-2 pl-5 list-disc">
                  <li>Certification Fees for companies</li>
                  <li>Subscription API Access for enterprises</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Portfolio */}
      <section className="py-16 bg-gray-50">
        <div className="container-wide">
          <h2 className="section-title mb-12 text-center">Product Portfolio Expansion</h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-12 text-center">
            Beyond the AI Townsquare, here are scalable products/services that align with our pillars and mission:
          </p>
          
          <div className="space-y-16">
            <div>
              <h3 className="text-2xl font-bold text-[var(--primary)] mb-6 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                For Governments & Cities
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h4 className="text-xl font-semibold mb-4">Societal Readiness Audits</h4>
                  <p className="text-gray-700 mb-4">
                    A diagnostic tool (like a credit rating) scoring cities/nations on agility, literacy, and ethics.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <div className="bg-[var(--primary)] rounded-full p-1 mr-2 text-white mt-1 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="text-sm">
                        <span className="font-semibold">Core Audit:</span> Comprehensive assessment of societal readiness
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-[var(--primary)] rounded-full p-1 mr-2 text-white mt-1 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="text-sm">
                        <span className="font-semibold">Upsell:</span> Custom "Readiness Roadmaps" with policy recommendations
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h4 className="text-xl font-semibold mb-4">AI Policy Simulator</h4>
                  <p className="text-gray-700 mb-4">
                    A SaaS platform where governments stress-test AI laws against synthetic scenarios (e.g., mass unemployment from robotics).
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <div className="bg-[var(--primary)] rounded-full p-1 mr-2 text-white mt-1 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="text-sm">
                        <span className="font-semibold">Scenario Library:</span> Pre-built scenarios for common AI challenges
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-[var(--primary)] rounded-full p-1 mr-2 text-white mt-1 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="text-sm">
                        <span className="font-semibold">Custom Simulations:</span> Tailored to specific regional concerns
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-[var(--primary)] mb-6 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                For Corporations
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h4 className="text-xl font-semibold mb-4">Adaptability Certifications</h4>
                  <p className="text-gray-700 mb-4">
                    Certify companies as "Societally Ready" (e.g., fair AI hiring practices, reskilling programs).
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <div className="bg-[var(--primary)] rounded-full p-1 mr-2 text-white mt-1 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="text-sm">
                        <span className="font-semibold">Certification Process:</span> Assessment, recommendations, and verification
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-[var(--primary)] rounded-full p-1 mr-2 text-white mt-1 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="text-sm">
                        <span className="font-semibold">Branding Rights:</span> Use of certification in marketing materials
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h4 className="text-xl font-semibold mb-4">Crisis-Readiness Workshops</h4>
                  <p className="text-gray-700 mb-4">
                    Train executives to navigate AI-induced disruptions (e.g., deepfake scandals, regulatory shifts).
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <div className="bg-[var(--primary)] rounded-full p-1 mr-2 text-white mt-1 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="text-sm">
                        <span className="font-semibold">Scenario Planning:</span> Hands-on exercises with realistic AI crisis scenarios
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-[var(--primary)] rounded-full p-1 mr-2 text-white mt-1 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="text-sm">
                        <span className="font-semibold">Response Playbooks:</span> Customized action plans for different AI disruptions
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-[var(--primary)] mb-6 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                For Citizens
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h4 className="text-xl font-semibold mb-4">AI Citizen Passport</h4>
                  <p className="text-gray-700 mb-4">
                    A digital credential proving mastery of AI literacy modules.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <div className="bg-[var(--primary)] rounded-full p-1 mr-2 text-white mt-1 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="text-sm">
                        <span className="font-semibold">Free Base Tier:</span> Essential AI literacy credentials
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-[var(--primary)] rounded-full p-1 mr-2 text-white mt-1 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="text-sm">
                        <span className="font-semibold">Premium Tiers:</span> Advanced modules with career coaching
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h4 className="text-xl font-semibold mb-4">Readiness Crowdsourcing</h4>
                  <p className="text-gray-700 mb-4">
                    A paid microtask platform where citizens label AI risks (e.g., "Flag biased algorithms in this app") for researchers.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <div className="bg-[var(--primary)] rounded-full p-1 mr-2 text-white mt-1 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="text-sm">
                        <span className="font-semibold">Microtasks:</span> Short, accessible tasks that build AI literacy
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-[var(--primary)] rounded-full p-1 mr-2 text-white mt-1 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="text-sm">
                        <span className="font-semibold">Compensation:</span> Earn while learning about AI systems
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-[var(--primary)] mb-6 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                For Researchers
              </h3>
              
              <div className="bg-white rounded-lg shadow-sm p-6 max-w-2xl mx-auto">
                <h4 className="text-xl font-semibold mb-4">Readiness Data Marketplace</h4>
                <p className="text-gray-700 mb-4">
                  Sell curated datasets (e.g., global trust-in-AI trends, policy agility benchmarks) to universities/think tanks.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <div className="bg-[var(--primary)] rounded-full p-1 mr-2 text-white mt-1 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="text-sm">
                      <span className="font-semibold">Data Products:</span> Standardized datasets on AI readiness metrics
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-[var(--primary)] rounded-full p-1 mr-2 text-white mt-1 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="text-sm">
                      <span className="font-semibold">Custom Research:</span> Tailored data collection for specific research questions
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[var(--primary)] bg-opacity-5">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[var(--primary)] mb-4">Partner With Us</h2>
            <p className="text-lg text-gray-700 mb-8">
              Join us in building a future where society is ready for AI's transformative potential. We're looking for partners, early adopters, and collaborators.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Contact Us
              </Link>
              <Link href="/ai-townsquare" className="btn-outline">
                Explore AI TownSquare
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
