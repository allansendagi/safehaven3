import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[var(--primary)] text-white">
      <div className="container-wide py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-semibold mb-4">SafeHaven</h3>
            <p className="text-white/80 mb-4 text-sm leading-relaxed">
              Building the civic operating system for the Intelligence Age — preparing civilization for AI through dialogue, measurement, and implementation.
            </p>
            <div className="flex space-x-4">
              <a href="https://x.com/AITownSquare" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[var(--accent)] transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="https://linkedin.com/company/safehavenai" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[var(--accent)] transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="https://aitownsquare.org" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[var(--accent)] transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/ai-townsquare" className="text-white/80 hover:text-white transition-colors">AI TownSquare</Link></li>
              <li><Link href="/readiness" className="text-white/80 hover:text-white transition-colors">Readiness Index</Link></li>
              <li><Link href="/readiness-institute" className="text-white/80 hover:text-white transition-colors">Readiness Institute</Link></li>
              <li><Link href="/book" className="text-white/80 hover:text-white transition-colors">The Book</Link></li>
              <li><Link href="/join" className="text-white/80 hover:text-white transition-colors">Get Involved</Link></li>
            </ul>
          </div>

          {/* Column 3: Initiatives */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Initiatives</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="https://aitownsquare.org" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">AI TownSquare Global</a></li>
              <li><Link href="/readiness/white-paper" className="text-white/80 hover:text-white transition-colors">SRI White Paper</Link></li>
              <li><Link href="/challenge" className="text-white/80 hover:text-white transition-colors">The Challenge</Link></li>
              <li><Link href="/approach" className="text-white/80 hover:text-white transition-colors">Our Approach</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <svg className="h-5 w-5 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:allan@safehavenai.world" className="text-white/80 hover:text-white transition-colors break-all">
                  allan@safehavenai.world
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="h-5 w-5 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-white/80">+974 5017 6561</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="h-5 w-5 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="text-white/80">
                  <div className="mb-3">
                    <span className="font-medium text-white">United States</span>
                    <br />701 Tillery Street, Unit 12
                    <br />Austin, TX 78702
                  </div>
                  <div>
                    <span className="font-medium text-white">Qatar</span>
                    <br />Office No. 8, Floor 1
                    <br />QFC Tower 1, Doha
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm text-center sm:text-left">
              &copy; {new Date().getFullYear()} SafeHaven. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <Link href="/privacy" className="text-white/60 hover:text-white text-sm transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-white/60 hover:text-white text-sm transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
