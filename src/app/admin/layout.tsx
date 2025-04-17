// src/app/admin/layout.tsx

import React from 'react';
import Link from 'next/link';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-[var(--primary)] text-white shadow-md">
        <div className="container-wide py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold">
                Safehaven
              </Link>
              <span className="mx-2">|</span>
              <span className="text-sm font-medium">Admin</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/admin" className="hover:underline">
                Dashboard
              </Link>
              <Link href="/admin/analytics-dashboard" className="hover:underline">
                Analytics
              </Link>
              <Link href="/" className="hover:underline">
                Back to Site
              </Link>
            </div>
          </div>
        </div>
      </nav>
      
      {children}
    </div>
  );
}