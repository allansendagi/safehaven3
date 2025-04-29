"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { trackEvent, EventTypes } from '@/utils/analytics';
import { books } from '@/app/data/books';

export default function BooksPage() {
  const handleBookClick = (bookId: string) => {
    trackEvent(EventTypes.LINK_CLICK, {
      action: 'book_selection',
      bookId,
    });
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Books by Allan Sendagi</h1>
          <p className="text-lg md:text-xl">
            Explore my works on AI governance, societal readiness, and the Intelligence Age.
          </p>
        </div>
      </section>

      {/* Book List Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {books.map((book) => (
  
              <Link
                href={`/books/${book.id}`}
                key={book.id}
                onClick={() => handleBookClick(book.id)}
                className="block bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-150"
              >
                <div className="relative w-full h-72">
                  <Image
                    src={book.coverImage}
                    alt={book.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-t-lg"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">{book.title}</h2>
                  <p className="text-gray-600 mb-4">{book.subtitle}</p>
                  <span
                    className={`inline-block px-3 py-1 text-sm rounded-full ${
                      book.status === 'pre-order'
                        ? 'bg-yellow-200 text-yellow-800'
                        : 'bg-green-200 text-green-800'
                    }`}
                  >
                    {book.status === 'pre-order' ? 'Pre-order' : 'Available'}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
