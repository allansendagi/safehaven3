// src/app/admin/analytics-dashboard/debug.tsx
'use client';

import React, { useState } from 'react';

export default function DebugEnvVars() {
  const [showVars, setShowVars] = useState(false);
  const [testResult, setTestResult] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const testConnection = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/init-db');
      const data = await res.json();
      setTestResult(data);
    } catch (err) {
      setTestResult({
        error: err instanceof Error ? err.message : String(err),
        status: 'error'
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="p-6 bg-white rounded-lg shadow mb-6">
      <h2 className="text-xl font-semibold mb-4">Environment Variables & Database Debug</h2>
      <div className="flex flex-wrap gap-2 mb-4">
        <button 
          onClick={() => setShowVars(!showVars)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {showVars ? 'Hide Details' : 'Show Details'}
        </button>
        
        <button 
          onClick={testConnection}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 flex items-center"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Testing...
            </>
          ) : 'Test Database Connection'}
        </button>
      </div>
      
      {showVars && (
        <div className="mt-4">
          <p className="text-red-600 mb-4">
            Note: For security, environment variables are not directly accessible in client components.
            This debugging is done via server API calls.
          </p>
          
          {testResult && (
            <div className={`mt-4 p-4 rounded ${testResult.error ? 'bg-red-50 border border-red-200' : 'bg-green-50 border border-green-200'}`}>
              <h3 className="font-semibold mb-2">{testResult.error ? 'Connection Error' : 'Connection Successful'}</h3>
              <pre className="whitespace-pre-wrap overflow-auto bg-gray-50 p-2 rounded text-sm">
                {JSON.stringify(testResult, null, 2)}
              </pre>
              
              {testResult.error && (
                <div className="mt-4">
                  <h4 className="font-semibold">Troubleshooting Tips:</h4>
                  <ul className="list-disc list-inside mt-2 text-sm">
                    <li>Check that your database URL is correctly formatted</li>
                    <li>Verify that the database server is running and accessible</li>
                    <li>Ensure your IP address is allowed in database firewall rules</li>
                    <li>Add POSTGRES_URL to your environment variables</li>
                    <li>Try initializing the database again using the button above</li>
                    <li>Check the server logs for more detailed error information</li>
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}