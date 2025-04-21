"use client";

import React from 'react';
import Link from 'next/link';

const HeroClock: React.FC = () => {
  // You could add a simplified version of the clock logic here if needed
  // For now, using the iframe approach for consistency

  return (
    <Link href="/clock" className="group bg-white/10 border border-white/20 backdrop-blur-sm rounded-lg px-4 py-2 hover:bg-white/20 transition-colors flex flex-col items-center">
      <div className="text-xs text-white/80 mb-1">Time Since Last Major AI Incident</div>
      <iframe
        src="/clock/embed/index.html"
        style={{ border: 'none', width: 200, height: 40, overflow: 'hidden' }}
        loading="lazy"
        title="AI Safety Clock"
      />
      <div className="text-xs text-white/70 mt-1 group-hover:underline">View details</div>
    </Link>
  );
};

export default HeroClock;