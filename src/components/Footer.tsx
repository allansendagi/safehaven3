import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[var(--primary)] text-white">
      <div className="container-wide py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Column 1: About */}
          <div className="sm:col-span-2 lg:col-span-2">
            <h3 className="text-xl font-semibold mb-2">SafeHaven</h3>
            <p className="text-white/90 font-medium mb-3 text-sm">
              Building the Civic Operating System for the Intelligence Age.
            </p>
            <p className="text-white/80 mb-4 text-sm leading-relaxed">
              We build the systems that help people, institutions, and societies understand AI, measure readiness, adapt to change, and govern increasingly intelligent machines.
            </p>
            <p className="text-[var(--accent)] font-semibold text-sm">
              Dialogue. Measurement. Action. Computable Authority.
            </p>
          </div>

          {/* Column 2: Explore */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/ai-townsquare" className="text-white/80 hover:text-white transition-colors">AI TownSquare</Link></li>
              <li><Link href="/nomos-protocol" className="text-white/80 hover:text-white transition-colors">NOMOS Protocol</Link></li>
              <li><Link href="/readiness" className="text-white/80 hover:text-white transition-colors">Societal Readiness Index</Link></li>
              <li><Link href="/readiness-institute" className="text-white/80 hover:text-white transition-colors">Readiness Institute</Link></li>
              <li><Link href="/book" className="text-white/80 hover:text-white transition-colors">The Book</Link></li>
            </ul>
          </div>

          {/* Column 3: Research & Initiatives */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Research &amp; Initiatives</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="https://aitownsquare.org" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">AI TownSquare Global</a></li>
              <li><a href="https://www.nomosprotocol.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">NOMOS Protocol</a></li>
              <li><Link href="/readiness/white-paper" className="text-white/80 hover:text-white transition-colors">SRI White Paper</Link></li>
              {/* No dedicated research page exists yet — left unlinked rather than pointed at a placeholder. */}
              <li><span className="text-white/50">SafeHaven Research</span></li>
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <p className="font-medium text-white mb-1 text-sm">
              <Link href="/join" className="hover:text-[var(--accent)] transition-colors">Get Involved</Link>
            </p>
            <p className="text-white/80 text-sm leading-relaxed mb-4">
              Work with us to build the systems needed for the Intelligence Age.
            </p>
            <ul className="space-y-2 text-sm mb-4">
              <li>
                <a href="mailto:allan@safehavenai.world" className="text-white/80 hover:text-white transition-colors break-all">
                  allan@safehavenai.world
                </a>
              </li>
              <li className="text-white/80">+974 5017 6561</li>
            </ul>
            <div className="flex flex-wrap gap-x-2 gap-y-1 text-sm">
              <a href="https://linkedin.com/company/safehavenai" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">LinkedIn</a>
              <span className="text-white/40">·</span>
              <a href="https://x.com/AITownSquare" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">X</a>
              <span className="text-white/40">·</span>
              <a href="https://aitownsquare.org" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">AI TownSquare</a>
            </div>
          </div>
        </div>

        {/* Global entities */}
        <div className="mt-10 pt-8 border-t border-white/20">
          <h3 className="text-lg font-semibold mb-4">Global</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
            <div>
              <span className="font-medium text-white">Qatar</span>
              <br /><span className="text-white/80">SafeHaven AI LLC</span>
            </div>
            <div>
              <span className="font-medium text-white">United Arab Emirates</span>
              <br /><span className="text-white/80">SafeHaven AI Ltd.</span>
            </div>
            <div>
              <span className="font-medium text-white">United States</span>
              <br /><span className="text-white/80">SafeHaven AI Corp.</span>
            </div>
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
