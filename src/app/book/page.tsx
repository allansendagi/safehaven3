"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BookPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    organization: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({});

    try {
      const response = await fetch('/api/book-preorder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: data.message || 'Thank you for your pre-order interest! We will notify you when the book is available.',
        });
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          organization: '',
        });
      } else {
        setSubmitStatus({
          success: false,
          message: data.error || 'An error occurred. Please try again.',
        });
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'An error occurred. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">The Self-Correcting Future</h1>
              <h2 className="text-xl md:text-2xl font-semibold mb-6">Building the World's AI TownSquare</h2>
              <p className="text-lg mb-8">
                Reframing the biggest challenge of our time from man versus machine to exponential growth versus linear adaptation
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#preorder" className="btn-primary text-center">Pre-order Now</a>
                <a href="#overview" className="btn-secondary text-center">Learn More</a>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative w-64 h-96 md:w-80 md:h-[30rem] shadow-2xl">
                <Image
                  src="/images/book_image.jpg"
                  alt="The Self-Correcting Future Book Cover"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Overview Section */}
      <section id="overview" className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Book Overview</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            <div className="md:col-span-2 space-y-6">
              <p className="text-lg">
                I wrote this book after a realization that the real conflict of the Intelligence Age isn't "man versus machine," but the growing gap between exponential AI growth and linear societal adaptation.
              </p>
              
              <p>
                I take you on my journey from cofounding a small AI agency to envisioning the world's AI TownSquare. In these pages, I share a vision shaped not by dominant ideological movements often associated with advanced technology, but by my upbringing in Uganda and my unconventional education.
              </p>
              
              <p>
                I argue that it's this growing chasm that poses an existential threat—undermining trust, exacerbating inequality, and destabilizing the very foundations of our civilization—rather than AI technology alone.
              </p>
              
              <p>
                In a world torn between reckless acceleration and fearful stagnation, I propose a middle path of prepared acceleration, balancing innovation with responsibility. I paint the picture of a delicate balancing act: while unchecked progress can be destabilizing, stagnation is not an option. Our civilization must advance to fulfill its inherent, long-standing quest for progress.
              </p>
              
              <p>
                Far more than a theoretical treatise, this book offers a practical, citizen-driven framework—the AI TownSquare—to align AI progress with societal readiness. It's not a policy checklist or a technological quick fix; it's a self-correcting mechanism designed to multiply our collective wisdom at the same pace that AI multiplies computational power.
              </p>
              
              <p>
                I carefully build the case that only through inclusive, citizen-driven mechanisms—where everyone has a stake in shaping AI's direction—can we ensure that technology amplifies our highest aspirations rather than undermining them.
              </p>
              
              <p>
                In the opening chapters, I immerse you in the broader arc of civilization's progress, illustrated by Kardashev's scale and the sobering reality that we remain a Type 0 civilization.
              </p>
              
              <p>
                I then quantify the AI-society gap, measuring its impact across industries and governance, before introducing the AI TownSquare framework—drawing on ancient agoras, digital democracy, and cybernetic systems—to show how theory becomes practice in healthcare, finance, education, and governance.
              </p>
              
              <p>
                I introduce "Societal Readiness" as a discipline to bridge gaps between siloed domains (technology, policy, economics, psychology), culminating in a "manifesto" chapter that defines this approach.
              </p>
              
              <p>
                Using Doha as a launchpad for its geopolitical neutrality and connectivity, I outline a global strategy for creating localized hubs that coalesce into a planetary network.
              </p>
              
              <p>
                Finally, I project into the future, asking whether we can proactively steer civilization toward a Type 1 future or remain trapped in fragmented chaos, vulnerable to existential threats.
              </p>
              
              <h3 className="text-xl font-bold mt-8 mb-4">This book provides:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>A clear articulation of the AI readiness gap and its consequences</li>
                <li>An ethical framework for responsible AI development and deployment</li>
                <li>A practical blueprint for building the AI TownSquare, with real-world examples and case studies</li>
                <li>A roadmap for transforming industries, governance structures, and educational systems to meet the challenges of the Intelligence Age</li>
              </ul>
              
              <p className="mt-6">
                The Self-Correcting Future is a call to action for policymakers, technologists, business leaders, and concerned citizens to embrace a more proactive, participatory approach to AI governance.
              </p>
              
              <p>
                It presents a new civic framework for building a future where technology amplifies our wisdom and elevates our shared humanity.
              </p>
              
              <p>
                Ultimately, my goal is to reclaim progress as a shared human endeavor, not a technocratic project that leaves entire populations behind.
              </p>
            </div>
            
            <div className="md:sticky md:top-24">
              <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
                <div className="relative w-full h-64 mb-4">
                  <Image
                    src="/images/AllanSendagi_mentor.jpg"
                    alt="Allan Sendagi"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                
                <h3 className="text-xl font-bold">About the Author</h3>
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold">Allan Sendagi</h4>
                  <a href="https://www.linkedin.com/in/allansendagi/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                    </svg>
                  </a>
                </div>
                <p className="italic">
                  "I founded SafeHaven to prepare civilisation for the advent of Artificial Intelligence and Superintelligence"
                </p>
                
                <div className="pt-4 border-t border-gray-200 mt-4">
                  <a href="#preorder" className="btn-primary w-full text-center">Pre-order the Book</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-order Form Section */}
      <section id="preorder" className="py-16 md:py-24 bg-blue-50">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Pre-order the Book</h2>
          <p className="text-lg text-center mb-12">
            Be among the first to receive "The Self-Correcting Future" when it's released. 
            Fill out the form below to express your interest in pre-ordering.
          </p>
          
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            {submitStatus.success ? (
              <div className="text-center py-8">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-green-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
                <p className="text-lg mb-6">{submitStatus.message}</p>
                <button 
                  onClick={() => setSubmitStatus({})} 
                  className="btn-secondary"
                >
                  Pre-order Another Copy
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">
                    Organization (Optional)
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                {submitStatus.message && !submitStatus.success && (
                  <div className="p-4 bg-red-50 text-red-700 rounded-md">
                    {submitStatus.message}
                  </div>
                )}
                
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary"
                  >
                    {isSubmitting ? 'Submitting...' : 'Express Pre-order Interest'}
                  </button>
                </div>
                
                <p className="text-sm text-gray-600 text-center">
                  By submitting this form, you'll be notified when the book is available for purchase. 
                  No payment is required at this time.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default BookPage;
