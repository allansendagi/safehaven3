"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { trackEvent, EventTypes } from '@/utils/analytics';

interface BookPageProps {
  book: {
    id: string;
    title: string;
    subtitle?: string;
    description: string;
    coverImage: string;
    author: string;
    authorImage?: string;
    price: number;
    formats: {
      type: string; // e.g., "hardcover", "paperback", "ebook", "audiobook"
      price: number;
      available: boolean;
      description?: string;
    }[];
    overview: string[];
    highlights: string[];
    authorBio: string;
    authorSocial?: {
      linkedin?: string;
      twitter?: string;
      website?: string;
    };
  };
}

const BookPage: React.FC<BookPageProps> = ({ book }) => {
  const router = useRouter();
  const [selectedFormat, setSelectedFormat] = useState(book.formats[0]?.type || '');
  const [quantity, setQuantity] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [purchaseStatus, setPurchaseStatus] = useState<{
    success?: boolean;
    message?: string;
    orderId?: string;
  }>({});
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
  });

  const handleFormatChange = (format: string) => {
    setSelectedFormat(format);
    trackEvent(EventTypes.BUTTON_CLICK, { action: 'format_selection', format });
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQuantity(parseInt(e.target.value));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const calculateTotal = () => {
    const formatObj = book.formats.find(f => f.type === selectedFormat);
    return formatObj ? formatObj.price * quantity : 0;
  };

  const handlePurchase = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setPurchaseStatus({});

    try {
      // Mock payment intent for now - in reality, you'd integrate with Stripe or another payment provider
      const paymentIntentId = `pi_${Math.random().toString(36).substr(2, 9)}`;
      const totalAmount = calculateTotal();

      // Submit purchase data to API
      const response = await fetch('/api/book-purchase', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          bookId: book.id,
          quantity,
          format: selectedFormat,
          paymentIntentId,
          totalAmount
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setPurchaseStatus({
          success: true,
          message: data.message,
          orderId: data.orderId
        });
        
        // Track successful purchase
        trackEvent(EventTypes.FORM_SUBMIT, { 
          action: 'book_purchase',
          bookId: book.id,
          format: selectedFormat,
          quantity,
          totalAmount
        });
        
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          address: '',
          city: '',
          state: '',
          postalCode: '',
          country: '',
        });
      } else {
        setPurchaseStatus({
          success: false,
          message: data.error || 'An error occurred during the purchase process. Please try again.'
        });
      }
    } catch (error) {
      setPurchaseStatus({
        success: false,
        message: 'Failed to process your purchase. Please try again later.'
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">{book.title}</h1>
              {book.subtitle && <h2 className="text-xl md:text-2xl font-semibold mb-6">{book.subtitle}</h2>}
              <p className="text-lg mb-8">{book.description}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#purchase" className="btn-primary text-center">Buy Now</a>
                <a href="#overview" className="btn-secondary text-center">Learn More</a>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative w-64 h-96 md:w-80 md:h-[30rem] shadow-2xl">
                <Image
                  src={book.coverImage}
                  alt={`${book.title} Book Cover`}
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
              {book.overview.map((paragraph, idx) => (
                <p key={idx} className={idx === 0 ? "text-lg" : ""}>
                  {paragraph}
                </p>
              ))}
              
              <h3 className="text-xl font-bold mt-8 mb-4">Book Highlights:</h3>
              <ul className="list-disc pl-6 space-y-2">
                {book.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
            </div>
            
            <div className="md:sticky md:top-24">
              <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
                <div className="relative w-full h-64 mb-4">
                  <Image
                    src={book.authorImage || "/images/author-placeholder.jpg"}
                    alt={book.author}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                
                <h3 className="text-xl font-bold">About the Author</h3>
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold">{book.author}</h4>
                  {book.authorSocial?.linkedin && (
                    <a href={book.authorSocial.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                      </svg>
                    </a>
                  )}
                </div>
                <p className="italic">
                  {book.authorBio}
                </p>
                
                <div className="pt-4 border-t border-gray-200 mt-4">
                  <a href="#purchase" className="btn-primary w-full text-center">Buy the Book</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Purchase Form Section */}
      <section id="purchase" className="py-16 md:py-24 bg-blue-50">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Buy the Book</h2>
          <p className="text-lg text-center mb-12">
            Get your copy of "{book.title}" today.
          </p>
          
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            {purchaseStatus.success ? (
              <div className="text-center py-8">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-green-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <h3 className="text-2xl font-bold mb-4">Thank You for Your Purchase!</h3>
                <p className="text-lg mb-2">{purchaseStatus.message}</p>
                {purchaseStatus.orderId && (
                  <p className="text-sm text-gray-600 mb-6">Order ID: {purchaseStatus.orderId}</p>
                )}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={() => setPurchaseStatus({})} 
                    className="btn-secondary"
                  >
                    Purchase Another Copy
                  </button>
                  <button 
                    onClick={() => router.push('/books')} 
                    className="btn-outline"
                  >
                    See All Books
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handlePurchase} className="space-y-6">
                {/* Format Selection */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4">Select Format:</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {book.formats.map((format) => (
                      <div key={format.type} className="relative">
                        <input
                          type="radio"
                          id={format.type}
                          name="format"
                          value={format.type}
                          checked={selectedFormat === format.type}
                          onChange={() => handleFormatChange(format.type)}
                          className="peer absolute opacity-0"
                          disabled={!format.available}
                        />
                        <label
                          htmlFor={format.type}
                          className={`
                            block p-4 rounded-lg border-2 transition-all cursor-pointer
                            ${selectedFormat === format.type ? 'border-blue-600 bg-blue-50' : 'border-gray-300'}
                            ${!format.available ? 'opacity-50 cursor-not-allowed' : ''}
                            peer-hover:border-blue-300
                          `}
                        >
                          <div className="font-medium text-gray-900 capitalize">{format.type}</div>
                          <div className="mt-1 font-bold text-lg">${format.price.toFixed(2)}</div>
                          {format.description && <div className="mt-1 text-sm text-gray-600">{format.description}</div>}
                          {!format.available && <div className="mt-1 text-sm text-red-600">Currently unavailable</div>}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Quantity Selection */}
                <div className="mb-6">
                  <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                    Quantity:
                  </label>
                  <select
                    id="quantity"
                    name="quantity"
                    value={quantity}
                    onChange={handleQuantityChange}
                    className="w-24 px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                </div>
                
                {/* Customer Information */}
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-lg font-semibold mb-4">Your Information:</h3>
                  
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
                        onChange={handleInputChange}
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
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  
                  {/* Shipping Address (only if physical format is selected) */}
                  {selectedFormat !== 'ebook' && selectedFormat !== 'audiobook' && (
                    <div className="mt-6 space-y-6">
                      <h3 className="text-lg font-semibold">Shipping Address:</h3>
                      
                      <div>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                          Street Address *
                        </label>
                        <input
                          type="text"
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                            City *
                          </label>
                          <input
                            type="text"
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                            State/Province *
                          </label>
                          <input
                            type="text"
                            id="state"
                            name="state"
                            value={formData.state}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-1">
                            Postal/ZIP Code *
                          </label>
                          <input
                            type="text"
                            id="postalCode"
                            name="postalCode"
                            value={formData.postalCode}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                            Country *
                          </label>
                          <input
                            type="text"
                            id="country"
                            name="country"
                            value={formData.country}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Order Summary */}
                <div className="mt-8 border-t border-gray-200 pt-6">
                  <h3 className="text-lg font-semibold mb-4">Order Summary:</h3>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between mb-2">
                      <span>{book.title} ({selectedFormat})</span>
                      <span>${(book.formats.find(f => f.type === selectedFormat)?.price || 0).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span>Quantity</span>
                      <span>{quantity}</span>
                    </div>
                    <div className="border-t border-gray-300 my-2 pt-2 flex justify-between font-bold">
                      <span>Total</span>
                      <span>${calculateTotal().toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                
                {purchaseStatus.message && !purchaseStatus.success && (
                  <div className="p-4 bg-red-50 text-red-700 rounded-md">
                    {purchaseStatus.message}
                  </div>
                )}
                
                <div>
                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full btn-primary"
                  >
                    {isProcessing ? 'Processing...' : `Complete Purchase • $${calculateTotal().toFixed(2)}`}
                  </button>
                </div>
                
                <p className="text-sm text-gray-600 text-center">
                  By completing this purchase, you agree to our terms of service and privacy policy.
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