import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BookSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-wide px-4 md:px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 md:gap-12 items-center">
          <div className="flex justify-center md:col-span-1">
            <div className="relative w-48 h-72 md:w-56 md:h-[21rem] shadow-2xl">
              <Image
                src="/images/book_image.jpg"
                alt="The Self-Correcting Future Book Cover"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="md:col-span-2 text-center md:text-left">
            <p className="text-[var(--accent)] font-semibold text-sm md:text-base uppercase tracking-wide mb-3">
              The Ideas Behind SafeHaven
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-3">
              The Self-Correcting Future
            </h2>
            <p className="text-lg md:text-xl text-gray-700 font-medium mb-4">
              Building the World&apos;s AI TownSquare
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6 md:mb-8">
              Reframing the biggest challenge of our time from man versus machine to exponential growth versus linear adaptation.
            </p>
            <Link href="/book" className="btn-primary">
              Learn more about the book
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookSection;
