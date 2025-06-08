
import React from 'react';
import { CLIENT_LOGOS, REFINED_CREDIBILITY_ELEMENTS } from '../constants'; // STATS_SHOWCASE_ITEMS removed, REFINED_CREDIBILITY_ELEMENTS added

const CREDIBILITY_KEYWORDS = ["Expertise", "Innovation", "Impact"]; // Copied from AboutCredibilitySection

const SocialProofBand: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50"> {/* Increased padding */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-inter font-semibold tracking-tight text-[#1a1a1a] mb-3">Trusted by Brands That <span className="accent-gradient-text">Demand Excellence</span></h2>
          {/* Original subtitle for this section - can be kept or adjusted */}
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-inter mb-8">From Fortune 500 to local legends—we architect momentum for businesses built to last.</p>
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
          {/* Optional: A sub-heading if needed, e.g., "Enterprise Creativity for Growing Businesses" or integrate into main text */}
          <div className="text-lg text-gray-700 space-y-6 leading-relaxed font-inter">
            <p>
              Our team has shaped campaigns for Adidas, Nike, and W Hotels. Now we're bringing that same strategic thinking and creative excellence to ambitious local businesses.
            </p>
            <p>
              We believe every business deserves marketing that matches their ambition. That's why we've built an advanced system, integrating proprietary AI technology, that delivers Fortune 500 quality at a price that makes sense for growing companies.
            </p>
            <p className="font-inter font-semibold text-xl text-gray-800">
              The result? Content that converts, systems that scale, and growth that lasts.
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
        </div>
        {/* STATS_SHOWCASE_ITEMS section removed */}
      </div>
    </section>
  );
};

export default SocialProofBand;
