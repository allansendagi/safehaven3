"use client";

import React, { useState } from 'react';

const HomeNewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setError('Please enter your email address');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      // Submit to newsletter API
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Failed to subscribe');
      }

      // Also redirect to Substack signup
      window.open('https://readinessinstitute.substack.com/subscribe', '_blank');

      setIsSuccess(true);
      setEmail('');
    } catch (err) {
      setError('An error occurred. Please try again later.');
      console.error('Newsletter signup error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8">
        <div className="text-center">
          <p className="text-lg font-medium text-white">Thank you for subscribing!</p>
          <p className="text-sm text-white/80 mt-2">Check your email to confirm your subscription.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          className="flex-grow px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 text-base"
          disabled={isSubmitting}
          required
        />
        <button
          type="submit"
          className="btn-accent py-3 px-6 whitespace-nowrap"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
      {error && (
        <p className="mt-2 text-red-300 text-sm text-center">{error}</p>
      )}
    </div>
  );
};

export default HomeNewsletterSignup;
