
import React from 'react';
import Button from './Button';

const FinalConversionSection: React.FC = () => {
  // Updated Calendly link
  const calendlyLink = "https://calendly.com/lenticularproject/15min"; 

  return (
    // Kept dark theme for contrast, but with softer black
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-r from-gray-900 via-[#111111] to-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-inter font-semibold tracking-tight mb-6">
          Ready to Stop Guessing and <span className="accent-gradient-text">Start Growing Your Service Business?</span>
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-inter">
          Let's talk about how we can get you more qualified leads and booked jobs, consistently.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Button 
            variant="accent" 
            size="lg" 
            className="font-inter font-semibold"
            href={calendlyLink} // Use href for linking
          >
            Book Your Free Strategy Call
          </Button>
          {/* "Get 5 Free Posts to Start" button removed from this section */}
        </div>
        <p className="mt-10 text-sm text-gray-400 font-inter">
          No pressure, just a clear plan to help your business thrive.
        </p>
      </div>
    </section>
  );
};

export default FinalConversionSection;