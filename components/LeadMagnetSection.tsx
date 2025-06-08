
import React, { useState } from 'react';
import Button from './Button';
import { LeadMagnetFormData } from '../types';
import { INDUSTRY_OPTIONS_ARRAY, CHALLENGE_OPTIONS_ARRAY, TRUST_SIGNALS } from '../constants';


const LeadMagnetSection: React.FC = () => {
  const initialFormData: LeadMagnetFormData = {
    businessName: '',
    yourName: '',
    email: '',
    phoneNumber: '',
    industry: INDUSTRY_OPTIONS_ARRAY[0],
    biggestChallenge: CHALLENGE_OPTIONS_ARRAY[0],
  };
  const [formData, setFormData] = useState<LeadMagnetFormData>(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const response = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
         console.log('Form submitted successfully:', result.message);
         setIsSubmitted(true);
         setFormData(initialFormData); // Reset form on success
      } else {
        throw new Error(result.message || 'An unknown error occurred during submission.');
      }

    } catch (error) {
      console.error('Submission failed:', error);
      setErrorMessage(error instanceof Error ? error.message : 'Failed to submit form. Please check your connection and try again.');
      setIsSubmitted(false); 
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="lead-magnet" className="py-16 md:py-24 accent-gradient-bg text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-inter font-semibold tracking-tight mb-3 text-shadow-sm">See What Lenticular <span className="text-white font-semibold">Can Do for You</span></h2>
          <p className="text-lg sm:text-xl opacity-90 max-w-2xl mx-auto text-shadow-sm font-inter">Get 5 custom posts created for your business—free. No commitment, just results.</p>
        </div>

        <div className="max-w-2xl mx-auto bg-white text-[#1a1a1a] shadow-2xl rounded-2xl p-8 md:p-10">
          {isSubmitted ? (
            <div className="text-center py-12">
              <h3 className="text-2xl font-inter font-semibold tracking-tight mb-4 text-[#1a1a1a]">Thank You!</h3>
              <p className="text-lg text-gray-700 font-inter">We've received your request and will be in touch within 48 hours.</p>
               <Button variant="secondary" size="md" onClick={() => setIsSubmitted(false)} className="mt-6">Submit Another Request</Button>
            </div>
          ) : (
            <>
              <h3 className="text-2xl font-inter font-semibold tracking-tight text-center mb-8 text-[#1a1a1a]">Claim Your Free Content</h3>
              {errorMessage && (
                <div className="mb-6 p-4 bg-red-100 text-red-700 border border-red-300 rounded-md text-sm font-inter" role="alert">
                  <p className="font-semibold">Submission Error</p>
                  {errorMessage}
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="businessName" className="block text-sm font-inter font-medium text-gray-700 mb-1.5">Business Name*</label>
                  <input type="text" name="businessName" id="businessName" value={formData.businessName} onChange={handleChange} required className="w-full px-4 py-3 rounded-md bg-gray-50 border border-gray-300 text-[#1a1a1a] focus:ring-2 focus:ring-purple-500 focus:border-purple-500 placeholder-gray-400 shadow-sm font-inter" placeholder="Your Company LLC" disabled={isLoading}/>
                </div>
                <div>
                  <label htmlFor="yourName" className="block text-sm font-inter font-medium text-gray-700 mb-1.5">Your Name*</label>
                  <input type="text" name="yourName" id="yourName" value={formData.yourName} onChange={handleChange} required className="w-full px-4 py-3 rounded-md bg-gray-50 border border-gray-300 text-[#1a1a1a] focus:ring-2 focus:ring-purple-500 focus:border-purple-500 placeholder-gray-400 shadow-sm font-inter" placeholder="Jane Doe" disabled={isLoading}/>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-inter font-medium text-gray-700 mb-1.5">Email Address*</label>
                  <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-md bg-gray-50 border border-gray-300 text-[#1a1a1a] focus:ring-2 focus:ring-purple-500 focus:border-purple-500 placeholder-gray-400 shadow-sm font-inter" placeholder="you@example.com" disabled={isLoading}/>
                </div>
                <div>
                  <label htmlFor="phoneNumber" className="block text-sm font-inter font-medium text-gray-700 mb-1.5">Phone Number</label>
                  <input type="tel" name="phoneNumber" id="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="w-full px-4 py-3 rounded-md bg-gray-50 border border-gray-300 text-[#1a1a1a] focus:ring-2 focus:ring-purple-500 focus:border-purple-500 placeholder-gray-400 shadow-sm font-inter" placeholder="(555) 123-4567" disabled={isLoading}/>
                </div>
                <div>
                  <label htmlFor="industry" className="block text-sm font-inter font-medium text-gray-700 mb-1.5">Industry</label>
                  <select name="industry" id="industry" value={formData.industry} onChange={handleChange} className="w-full px-4 py-3 rounded-md bg-gray-50 border border-gray-300 text-[#1a1a1a] focus:ring-2 focus:ring-purple-500 focus:border-purple-500 custom-select appearance-none shadow-sm font-inter" disabled={isLoading}>
                    {INDUSTRY_OPTIONS_ARRAY.map(opt => <option key={opt} value={opt} className="text-[#1a1a1a] bg-white font-inter">{opt}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="biggestChallenge" className="block text-sm font-inter font-medium text-gray-700 mb-1.5">Biggest Challenge</label>
                  <select name="biggestChallenge" id="biggestChallenge" value={formData.biggestChallenge} onChange={handleChange} className="w-full px-4 py-3 rounded-md bg-gray-50 border border-gray-300 text-[#1a1a1a] focus:ring-2 focus:ring-purple-500 focus:border-purple-500 custom-select appearance-none shadow-sm font-inter" disabled={isLoading}>
                    {CHALLENGE_OPTIONS_ARRAY.map(opt => <option key={opt} value={opt} className="text-[#1a1a1a] bg-white font-inter">{opt}</option>)}
                  </select>
                </div>
                <Button type="submit" variant="accent" size="lg" className="w-full font-inter font-semibold mt-2" disabled={isLoading}>
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    'Create My Free Posts'
                  )}
                </Button>
              </form>
              <div className="mt-8 flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-600 font-inter">
                {TRUST_SIGNALS.map((signal, index) => (
                  <span key={index} className="flex items-center">
                    <svg className="w-4 h-4 mr-1.5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                    {signal}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default LeadMagnetSection;
