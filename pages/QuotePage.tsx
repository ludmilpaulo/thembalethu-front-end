"use client ";
import { useState } from 'react';
import { useRouter } from 'next/router';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ServicesSection from '../components/ServicesSection';

const QuotePage = () => {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add logic to handle the quote request here
    // You can send form data to your server or handle it as needed
    // For this example, we'll simply redirect back to the home page
    router.push('/');
  };

  return (
    <>
    <NavBar />
    <ServicesSection/>
    <div className="min-h-screen flex items-center justify-center">

      <div className="max-w-md p-8 bg-white rounded shadow-lg">
        <h1 className="text-2xl font-semibold mb-4">Request a Quote</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Your Name:
            </label>
            <input type="text" id="name" name="name" required className="mt-1 p-2 w-full border rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Your Email:
            </label>
            <input type="email" id="email" name="email" required className="mt-1 p-2 w-full border rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message:
            </label>
            <textarea id="message" name="message" rows={4} required className="mt-1 p-2 w-full border rounded" />
          </div>
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Submit
          </button>
        </form>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default QuotePage;
