
import React from 'react';
import { CLIENT_LOGOS, REFINED_CREDIBILITY_ELEMENTS, ONBOARDING_SUCCESS_CALENDLY_LINK } from '../constants'; // STATS_SHOWCASE_ITEMS removed, REFINED_CREDIBILITY_ELEMENTS added
import Button from './Button'; // Import Button component

const CREDIBILITY_KEYWORDS = ["Expertise", "Innovation", "Impact"]; // Updated keywords

const SocialProofBand: React.FC = () => {
  return (
    <section id="social-proof" className="py-16 md:py-24 bg-gray-50"> {/* Increased padding, added id */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-inter font-semibold tracking-tight text-[#1a1a1a] mb-3">You Need Marketing That Actually Works. <span className="accent-gradient-text">We Deliver.</span></h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-inter mb-8">Trusted by brands that demand excellence.</p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4 mb-12 md:mb-16">
          {CLIENT_LOGOS.map((logo, index) => (
            <div 
              key={index} 
              className="text-lg font-inter font-semibold text-[#1a1a1a] bg-white border border-gray-300 rounded-lg px-6 py-3 shadow-md hover:shadow-lg transition-shadow cursor-default"
            >
              {logo}
            </div>
          ))}
        </div>

        {/* Merged content from AboutCredibilitySection */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <div className="text-lg text-gray-700 space-y-6 leading-relaxed font-inter">
            <p>
              Our team has experience with big brands, but our passion is helping local service businesses like yours succeed. We know you're busy running your company, so we make marketing simple and effective.
            </p>
            <p>
              We use smart AI technology to create high-quality marketing that would typically cost a fortune, but at a price that makes sense for your business. This means you get top-tier results without breaking the bank.
            </p>
            <p className="font-inter font-semibold text-xl text-gray-800">
              The bottom line? We help you get more calls, book more jobs, and build a stronger business.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {REFINED_CREDIBILITY_ELEMENTS.map((item, index) => (
              <div key={index} className="p-6 bg-slate-50 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center border border-gray-200"> {/* Added border for definition */}
                 <p className="text-3xl font-inter font-bold accent-gradient-text mb-2">{CREDIBILITY_KEYWORDS[index]}</p>
                <p className="font-inter font-medium text-gray-700 text-sm">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Button
              variant="accent"
              size="lg"
              className="font-inter font-semibold"
              href={ONBOARDING_SUCCESS_CALENDLY_LINK}
            >
              Book a Free Strategy Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofBand;