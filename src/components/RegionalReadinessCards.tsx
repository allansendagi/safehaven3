"use client";

import React from 'react';

interface RegionData {
  name: string;
  score: number;
  rank: number;
  color: string;
  gradient: string;
  countries: { name: string; score: number; rank: number }[];
}

const RegionalReadinessCards = () => {
  const regions: RegionData[] = [
    {
      name: 'North America',
      score: 82.60,
      rank: 1,
      color: '#10B981',
      gradient: 'from-emerald-500 to-emerald-600',
      countries: [
        { name: 'United States', score: 87.03, rank: 1 },
        { name: 'Canada', score: 78.18, rank: 6 }
      ]
    },
    {
      name: 'Western Europe',
      score: 70.50,
      rank: 2,
      color: '#3B82F6',
      gradient: 'from-blue-500 to-blue-600',
      countries: [
        { name: 'United Kingdom', score: 81.12, rank: 2 },
        { name: 'France', score: 79.36, rank: 4 }
      ]
    },
    {
      name: 'East Asia',
      score: 65.30,
      rank: 3,
      color: '#6366F1',
      gradient: 'from-indigo-500 to-indigo-600',
      countries: [
        { name: 'Singapore', score: 80.20, rank: 3 },
        { name: 'South Korea', score: 79.80, rank: 5 }
      ]
    },
    {
      name: 'Oceania',
      score: 60.40,
      rank: 4,
      color: '#8B5CF6',
      gradient: 'from-violet-500 to-violet-600',
      countries: [
        { name: 'Australia', score: 75.60, rank: 8 },
        { name: 'New Zealand', score: 72.10, rank: 12 }
      ]
    },
    {
      name: 'Middle East',
      score: 55.20,
      rank: 5,
      color: '#EC4899',
      gradient: 'from-pink-500 to-pink-600',
      countries: [
        { name: 'UAE', score: 74.30, rank: 9 },
        { name: 'Israel', score: 73.50, rank: 10 }
      ]
    },
    {
      name: 'Latin America',
      score: 45.80,
      rank: 6,
      color: '#F59E0B',
      gradient: 'from-amber-500 to-amber-600',
      countries: [
        { name: 'Chile', score: 65.40, rank: 20 },
        { name: 'Brazil', score: 62.30, rank: 25 }
      ]
    },
    {
      name: 'Africa',
      score: 35.60,
      rank: 7,
      color: '#EF4444',
      gradient: 'from-red-500 to-red-600',
      countries: [
        { name: 'South Africa', score: 55.20, rank: 40 },
        { name: 'Kenya', score: 48.70, rank: 52 }
      ]
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
      {regions.map((region) => (
        <div
          key={region.name}
          className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
        >
          {/* Header with gradient */}
          <div
            className={`bg-gradient-to-r ${region.gradient} p-4 text-white`}
          >
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-bold leading-tight">{region.name}</h3>
              <span className="bg-white/20 px-2 py-1 rounded-full text-xs font-semibold">
                #{region.rank}
              </span>
            </div>
            <div className="mt-2">
              <span className="text-3xl font-bold">{region.score.toFixed(1)}</span>
              <span className="text-white/80 text-sm ml-1">/ 100</span>
            </div>
          </div>

          {/* Countries list */}
          <div className="p-4">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
              Top Countries
            </div>
            <div className="space-y-3">
              {region.countries.map((country) => (
                <div key={country.name} className="flex items-center justify-between">
                  <span className="text-gray-700 text-sm font-medium">{country.name}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{
                          width: `${country.score}%`,
                          backgroundColor: region.color
                        }}
                      />
                    </div>
                    <span className="text-sm font-semibold text-gray-900 w-10 text-right">
                      {country.score.toFixed(1)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RegionalReadinessCards;
