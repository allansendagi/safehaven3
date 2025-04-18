// src/app/admin/analytics-dashboard/debug.tsx
'use client';

import React, { useState } from 'react';

export default function DebugEnvVars() {
  const [showVars, setShowVars] = useState(false);
  
  return (
    <div className="p-6 bg-white rounded-lg shadow mb-6">
      <h2 className="text-xl font-semibold mb-4">Environment Variables Debug</h2>
      <button 
        onClick={() => setShowVars(!showVars)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        {showVars ? 'Hide Details' : 'Show Details'}
      </button>
      
      {showVars && (
        <div className="mt-4">
          <p className="text-red-600 mb-4">
            Note: For security, environment variables are not directly accessible in client components.
            This debugging is done via server API calls.
          </p>
          <div className="mt-4">
            <button 
              onClick={async () => {
                try {
                  const res = await fetch('/api/init-db');
                  const data = await res.json();
                  alert(JSON.stringify(data, null, 2));
                } catch (err) {
                  alert(`Error testing connection: ${err}`);
                }
              }}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Test Database Connection
            </button>
          </div>
        </div>
      )}
    </div>
  );
}