"use client";

import React from 'react';

interface RegionData {
  name: string;
  score: number;
  rank: number;
  color: string;
  countries: { name: string; score: number; rank: number }[];
}

const RegionalReadinessCards = () => {
  // Data from GlobalReadinessVisualization.tsx
  const regions: RegionData[] = [
    { name: 'North America', score: 82.60, rank: 1, color: '#10B981', 
      countries: [
        { name: 'United States', score: 87.03, rank: 1 },
        { name: 'Canada', score: 78.18, rank: 6 }
      ]
    },
    { name: 'Western Europe', score: 70.50, rank: 2, color: '#3B82F6',
      countries: [
        { name: 'United Kingdom', score: 81.12, rank: 2 },
        { name: 'France', score: 79.36, rank: 4 }
      ]
    },
    { name: 'East Asia', score: 65.30, rank: 3, color: '#6366F1',
      countries: [
        { name: 'Singapore', score: 80.20, rank: 3 },
        { name: 'South Korea', score: 79.80, rank: 5 }
      ]
    },
    { name: 'Oceania', score: 60.40, rank: 4, color: '#8B5CF6',
      countries: [
        { name: 'Australia', score: 75.60, rank: 8 },
        { name: 'New Zealand', score: 72.10, rank: 12 }
      ]
    },
    { name: 'Middle East', score: 55.20, rank: 5, color: '#EC4899',
      countries: [
        { name: 'UAE', score: 74.30, rank: 9 },
        { name: 'Israel', score: 73.50, rank: 10 }
      ]
    },
    { name: 'Latin America', score: 45.80, rank: 6, color: '#F59E0B',
      countries: [
        { name: 'Chile', score: 65.40, rank: 20 },
        { name: 'Brazil', score: 62.30, rank: 25 }
      ]
    },
    { name: 'Africa', score: 35.60, rank: 7, color: '#EF4444',
      countries: [
        { name: 'South Africa', score: 55.20, rank: 40 },
        { name: 'Kenya', score: 48.70, rank: 52 }
      ]
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
      {regions.slice(0, 4).map((region) => (
        <div 
          key={region.name} 
          className="bg-white rounded-lg shadow-md p-6 border-l-4"
          style={{ borderColor: region.color }}
        >
          <h3 className="text-xl font-bold mb-4" style={{ color: region.color }}>{region.name}</h3>
          
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-700">Regional Score:</span>
              <span className="text-xl font-bold">{region.score.toFixed(1)}</span>
            </div>
            
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-700">Global Rank:</span>
              <span className="text-xl font-bold">#{region.rank}</span>
            </div>
          </div>
          
          <div>
            <div className="font-semibold text-gray-700 mb-2">Top Countries:</div>
            {region.countries.map((country) => (
              <div key={country.name} className="flex justify-between items-center mb-2">
                <span className="text-gray-800">{country.name}</span>
                <div className="flex items-center">
                  <span className="font-bold text-lg mr-2">{country.score.toFixed(1)}</span>
                  <span className="text-xs text-gray-500">(#{country.rank})</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4 gap-6 mt-6">
        {regions.slice(4).map((region) => (
          <div 
            key={region.name} 
            className="bg-white rounded-lg shadow-md p-6 border-l-4"
            style={{ borderColor: region.color }}
          >
            <h3 className="text-xl font-bold mb-4" style={{ color: region.color }}>{region.name}</h3>
            
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-700">Regional Score:</span>
                <span className="text-xl font-bold">{region.score.toFixed(1)}</span>
              </div>
              
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-700">Global Rank:</span>
                <span className="text-xl font-bold">#{region.rank}</span>
              </div>
            </div>
            
            <div>
              <div className="font-semibold text-gray-700 mb-2">Top Countries:</div>
              {region.countries.map((country) => (
                <div key={country.name} className="flex justify-between items-center mb-2">
                  <span className="text-gray-800">{country.name}</span>
                  <div className="flex items-center">
                    <span className="font-bold text-lg mr-2">{country.score.toFixed(1)}</span>
                    <span className="text-xs text-gray-500">(#{country.rank})</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RegionalReadinessCards;
