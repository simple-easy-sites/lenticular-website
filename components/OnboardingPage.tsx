
import React, { useState, useEffect } from 'react';
import { ServiceTier, OnboardingFormData } from '../types';
import Button from './Button';
import Logo from './Logo'; // Re-added Logo import
import { ONBOARDING_QUESTIONS_PLACEHOLDERS } from '../constants'; 


interface OnboardingPageProps {
  selectedPlan: ServiceTier;
  onBack: () => void;
  onSuccess: () => void; 
  onLogoClick: () => void; // Added prop for logo click
}

const OnboardingPage: React.FC<OnboardingPageProps> = ({ selectedPlan, onBack, onSuccess, onLogoClick }) => {
  const initialFormData: OnboardingFormData = {
    companyName: '',
    contactName: '',
    title: '', 
    email: '',
    phone: '', 
    website: '',
    goals: '',
    currentChallenges: '',
    additionalInfo: '',
  };

  const [formData, setFormData] = useState<OnboardingFormData>(initialFormData);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const response = await fetch('/api/submit-onboarding', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          ...formData, 
          planName: selectedPlan.name, 
          planPrice: selectedPlan.price,
          planSetupFee: selectedPlan.setupFee || 'N/A' 
        }),
      });
      const result = await response.json();

      if (response.ok) {
        setIsLoading(false); 
        onSuccess(); 
      } else {
        throw new Error(result.message || 'An unknown error occurred during submission.');
      }
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : 'Failed to submit onboarding details. Please try again.');
      setIsLoading(false); 
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      <header className="py-5 bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center"> {/* Changed to justify-between */}
          <Logo onClick={onLogoClick} /> {/* Logo re-added on the left, changed prop name */}
          <Button variant="outline" size="sm" onClick={onBack} disabled={isLoading}>
            &larr; Back to Plan Selection
          </Button>
        </div>
      </header>

      <main className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto bg-white p-8 md:p-10 rounded-xl shadow-xl">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-semibold tracking-tight text-[#1a1a1a] mb-2">
                Onboarding for: <span className="accent-gradient-text">{selectedPlan.name}</span>
              </h1>
              <p className="text-lg text-gray-600">
                {selectedPlan.price}
                {selectedPlan.setupFee && <span className="text-gray-500 text-base"> + {selectedPlan.setupFee} Setup & Onboarding</span>}
              </p>
              <p className="text-gray-500 text-sm mt-1">{selectedPlan.description}</p>
              <p className="mt-4 text-sm text-gray-500">
                Please provide some details so we can tailor our service to your needs.
              </p>
            </div>

            {errorMessage && (
              <div className="mb-6 p-4 bg-red-100 text-red-700 border border-red-300 rounded-md text-sm" role="alert">
                <p className="font-semibold">Error Submitting Onboarding</p>
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1.5">Company Name*</label>
                <input type="text" name="companyName" id="companyName" value={formData.companyName} onChange={handleChange} required className="w-full px-4 py-3 rounded-md bg-gray-50 border-gray-300 focus:ring-2 focus:ring-purple-500" placeholder={ONBOARDING_QUESTIONS_PLACEHOLDERS.companyName} disabled={isLoading} />
              </div>
              <div>
                <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-1.5">Your Name*</label>
                <input type="text" name="contactName" id="contactName" value={formData.contactName} onChange={handleChange} required className="w-full px-4 py-3 rounded-md bg-gray-50 border-gray-300 focus:ring-2 focus:ring-purple-500" placeholder={ONBOARDING_QUESTIONS_PLACEHOLDERS.contactName} disabled={isLoading} />
              </div>
               <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1.5">Your Title*</label>
                <input type="text" name="title" id="title" value={formData.title} onChange={handleChange} required className="w-full px-4 py-3 rounded-md bg-gray-50 border-gray-300 focus:ring-2 focus:ring-purple-500" placeholder={ONBOARDING_QUESTIONS_PLACEHOLDERS.title} disabled={isLoading} />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">Email Address*</label>
                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-md bg-gray-50 border-gray-300 focus:ring-2 focus:ring-purple-500" placeholder={ONBOARDING_QUESTIONS_PLACEHOLDERS.email} disabled={isLoading} />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number*</label>
                <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} required className="w-full px-4 py-3 rounded-md bg-gray-50 border-gray-300 focus:ring-2 focus:ring-purple-500" placeholder={ONBOARDING_QUESTIONS_PLACEHOLDERS.phone} disabled={isLoading} />
              </div>
              <div>
                <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1.5">Company Website <span className="text-xs text-gray-400">(Optional)</span></label>
                <input type="url" name="website" id="website" value={formData.website} onChange={handleChange} className="w-full px-4 py-3 rounded-md bg-gray-50 border-gray-300 focus:ring-2 focus:ring-purple-500" placeholder="https://yourcompany.com (Optional)" disabled={isLoading} />
              </div>
              <div>
                <label htmlFor="goals" className="block text-sm font-medium text-gray-700 mb-1.5">What are your main goals with this service?*</label>
                <textarea name="goals" id="goals" value={formData.goals} onChange={handleChange} rows={3} required className="w-full px-4 py-3 rounded-md bg-gray-50 border-gray-300 focus:ring-2 focus:ring-purple-500" placeholder={ONBOARDING_QUESTIONS_PLACEHOLDERS.goals} disabled={isLoading}></textarea>
              </div>
              <div>
                <label htmlFor="currentChallenges" className="block text-sm font-medium text-gray-700 mb-1.5">What are your current biggest challenges related to this service?*</label>
                <textarea name="currentChallenges" id="currentChallenges" value={formData.currentChallenges} onChange={handleChange} rows={3} required className="w-full px-4 py-3 rounded-md bg-gray-50 border-gray-300 focus:ring-2 focus:ring-purple-500" placeholder={ONBOARDING_QUESTIONS_PLACEHOLDERS.currentChallenges} disabled={isLoading}></textarea>
              </div>
               <div>
                <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-1.5">Anything else we should know? <span className="text-xs text-gray-400">(Optional)</span></label>
                <textarea name="additionalInfo" id="additionalInfo" value={formData.additionalInfo} onChange={handleChange} rows={3} className="w-full px-4 py-3 rounded-md bg-gray-50 border-gray-300 focus:ring-2 focus:ring-purple-500" placeholder={ONBOARDING_QUESTIONS_PLACEHOLDERS.additionalInfo} disabled={isLoading}></textarea>
              </div>
              <Button type="submit" variant="accent" size="lg" className="w-full font-semibold mt-2" disabled={isLoading}>
                {isLoading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    'Submit & Proceed to Booking'
                  )}
              </Button>
            </form>
          </div>
        </div>
      </main>
      <footer className="py-8 bg-gray-100 border-t">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Lenticular AI. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default OnboardingPage;