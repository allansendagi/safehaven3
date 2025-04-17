// src/app/admin/page.tsx

import React from 'react';
import Link from 'next/link';

export default function AdminDashboard() {
  return (
    <div className="py-8">
      <div className="container-wide">
        <h1 className="text-3xl font-bold text-[var(--primary)] mb-6">
          Admin Dashboard
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link 
            href="/admin/analytics-dashboard" 
            className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow"
          >
            <h2 className="text-xl font-semibold text-[var(--primary)] mb-2">
              Analytics Dashboard
            </h2>
            <p className="text-gray-600">
              View detailed analytics about user interactions, downloads, and page views.
            </p>
          </Link>
          
          {/* Add more admin sections here as needed */}
        </div>
      </div>
    </div>
  );
}