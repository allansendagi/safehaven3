"use client";

import React from 'react';

interface Region {
  name: string;
  score: number;
  color: string;
}

interface GlobalReadinessVisualizationProps {
  darkMode?: boolean;
}

const GlobalReadinessVisualization = ({ darkMode = false }: GlobalReadinessVisualizationProps) => {
  const regions: Region[] = [
    { name: 'North America', score: 82.6, color: '#10B981' },
    { name: 'Western Europe', score: 70.5, color: '#3B82F6' },
    { name: 'East Asia', score: 65.3, color: '#6366F1' },
    { name: 'Oceania', score: 60.4, color: '#8B5CF6' },
    { name: 'Middle East', score: 55.2, color: '#EC4899' },
    { name: 'Latin America', score: 45.8, color: '#F59E0B' },
    { name: 'Africa', score: 35.6, color: '#EF4444' },
  ];

  const maxScore = 100;

  // Style classes based on mode
  const textColor = darkMode ? 'text-white' : 'text-gray-800';
  const textMuted = darkMode ? 'text-white/60' : 'text-gray-500';
  const barBg = darkMode ? 'bg-white/10' : 'bg-gray-100';
  const scaleText = darkMode ? 'text-white/40' : 'text-gray-400';

  return (
    <div className="w-full">
      {/* Data source */}
      <p className={`${textMuted} text-xs md:text-sm text-center mb-6`}>
        Data source: Oxford Insights Government AI Readiness Index, 2024
      </p>

      {/* Chart */}
      <div className="space-y-3 md:space-y-4">
        {regions.map((region, index) => (
          <div key={index} className="flex items-center gap-2 md:gap-4">
            {/* Region name */}
            <div className="w-28 sm:w-32 md:w-40 text-right flex-shrink-0">
              <span className={`${textColor} text-xs sm:text-sm md:text-base font-medium`}>
                {region.name}
              </span>
            </div>

            {/* Bar container */}
            <div className={`flex-1 h-6 md:h-8 ${barBg} rounded-full overflow-hidden`}>
              <div
                className="h-full rounded-full transition-all duration-1000 ease-out flex items-center justify-end pr-2 md:pr-3"
                style={{
                  width: `${(region.score / maxScore) * 100}%`,
                  backgroundColor: region.color,
                }}
              >
                <span className="text-white text-xs md:text-sm font-bold drop-shadow-sm">
                  {region.score}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Scale indicator */}
      <div className="flex justify-between mt-4 ml-28 sm:ml-32 md:ml-40 pl-2 md:pl-4">
        <span className={`${scaleText} text-[10px] md:text-xs`}>0</span>
        <span className={`${scaleText} text-[10px] md:text-xs`}>25</span>
        <span className={`${scaleText} text-[10px] md:text-xs`}>50</span>
        <span className={`${scaleText} text-[10px] md:text-xs`}>75</span>
        <span className={`${scaleText} text-[10px] md:text-xs`}>100</span>
      </div>
    </div>
  );
};

export default GlobalReadinessVisualization;
