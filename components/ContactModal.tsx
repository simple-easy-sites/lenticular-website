
import React, { useState, useEffect } from 'react';
import Button from './Button';
import { ContactFormData } from '../types';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const initialFormData: ContactFormData = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  };
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      // Reset form state when modal opens
      setFormData(initialFormData);
      setIsSubmitted(false);
      setErrorMessage(null);
      setIsLoading(false); // Ensure loading is reset

      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          onClose();
        }
      };
      document.addEventListener('keydown', handleKeyDown);
      // Focus trapping logic could be added here if needed
      const firstFocusableElement = document.querySelector('#contact-modal-title') as HTMLElement; // Example, could be first input
      if(firstFocusableElement) firstFocusableElement.focus();

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen, onClose]);


  if (!isOpen) {
    return null;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
         console.log('Contact form submitted successfully:', result.message);
         setIsSubmitted(true);
         // Do not reset form here, success message shows then modal closes
      } else {
        throw new Error(result.message || 'An unknown error occurred while sending the message.');
      }

    } catch (error) {
      console.error('Submission failed:', error);
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message. Please check your connection and try again.');
      setIsSubmitted(false); 
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-[999]"
      onClick={onClose} // Close if overlay is clicked
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div 
        className="bg-white text-[#1a1a1a] shadow-2xl rounded-2xl p-6 md:p-8 w-full max-w-lg relative max-h-[90vh] overflow-y-auto flex flex-col"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors p-1"
            aria-label="Close contact form"
        >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
        </button>

        {isSubmitted ? (
          <div className="text-center py-10 flex-grow flex flex-col justify-center items-center">
            <svg className="w-16 h-16 text-green-500 mb-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
            <h3 id="contact-modal-title" className="text-2xl font-inter font-semibold tracking-tight mb-3 text-[#1a1a1a]">Message Sent!</h3>
            <p className="text-lg text-gray-700 font-inter">Thank you for reaching out. We'll get back to you shortly.</p>
            <Button variant="primary" size="md" onClick={onClose} className="mt-8">Close</Button>
          </div>
        ) : (
          <>
            <h3 id="contact-modal-title" className="text-2xl font-inter font-semibold tracking-tight text-center mb-6 text-[#1a1a1a]">Get in Touch</h3>
            {errorMessage && (
              <div className="mb-5 p-3 bg-red-100 text-red-700 border border-red-300 rounded-md text-sm font-inter" role="alert">
                <p className="font-semibold">Message Error</p>
                {errorMessage}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-inter font-medium text-gray-700 mb-1">Your Name*</label>
                <input type="text" name="name" id="contact-name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2.5 rounded-md bg-gray-50 border border-gray-300 text-[#1a1a1a] focus:ring-2 focus:ring-purple-500 focus:border-purple-500 placeholder-gray-400 shadow-sm font-inter" placeholder="Jane Doe" disabled={isLoading}/>
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm font-inter font-medium text-gray-700 mb-1">Email Address*</label>
                <input type="email" name="email" id="contact-email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2.5 rounded-md bg-gray-50 border border-gray-300 text-[#1a1a1a] focus:ring-2 focus:ring-purple-500 focus:border-purple-500 placeholder-gray-400 shadow-sm font-inter" placeholder="you@example.com" disabled={isLoading}/>
              </div>
              <div>
                <label htmlFor="contact-phone" className="block text-sm font-inter font-medium text-gray-700 mb-1">Phone Number <span className="text-gray-400 text-xs">(Optional)</span></label>
                <input type="tel" name="phone" id="contact-phone" value={formData.phone || ''} onChange={handleChange} className="w-full px-4 py-2.5 rounded-md bg-gray-50 border border-gray-300 text-[#1a1a1a] focus:ring-2 focus:ring-purple-500 focus:border-purple-500 placeholder-gray-400 shadow-sm font-inter" placeholder="(555) 123-4567" disabled={isLoading}/>
              </div>
              <div>
                <label htmlFor="contact-subject" className="block text-sm font-inter font-medium text-gray-700 mb-1">Subject <span className="text-gray-400 text-xs">(Optional)</span></label>
                <input type="text" name="subject" id="contact-subject" value={formData.subject || ''} onChange={handleChange} className="w-full px-4 py-2.5 rounded-md bg-gray-50 border border-gray-300 text-[#1a1a1a] focus:ring-2 focus:ring-purple-500 focus:border-purple-500 placeholder-gray-400 shadow-sm font-inter" placeholder="Inquiry about services" disabled={isLoading}/>
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-sm font-inter font-medium text-gray-700 mb-1">Message*</label>
                <textarea name="message" id="contact-message" value={formData.message} onChange={handleChange} rows={4} required className="w-full px-4 py-2.5 rounded-md bg-gray-50 border border-gray-300 text-[#1a1a1a] focus:ring-2 focus:ring-purple-500 focus:border-purple-500 placeholder-gray-400 shadow-sm font-inter" placeholder="How can we help you?" disabled={isLoading}></textarea>
              </div>
              <Button type="submit" variant="accent" size="lg" className="w-full font-inter font-semibold mt-1" disabled={isLoading}>
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </Button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactModal;
