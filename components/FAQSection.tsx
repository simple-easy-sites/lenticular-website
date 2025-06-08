
import React from 'react';
import { FAQ_DATA } from '../constants';
import FAQItem from './FAQItem';

const FAQSection: React.FC = () => {
  return (
    <section id="faq" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-inter font-semibold tracking-tight text-[#1a1a1a]">Everything You <span className="accent-gradient-text">Want to Know</span></h2>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 md:gap-12 lg:gap-16 items-start">
          {/* <div className="md:col-span-1 mb-10 md:mb-0">
            <img 
              src="/woman-desk.jpeg" 
              alt="Professional woman smiling confidently at her modern office desk, looking at camera" 
              className="w-full h-auto rounded-xl shadow-xl object-cover aspect-[4/3]" 
            />
          </div> */}
          <div className="md:col-span-2"> {/* Changed to col-span-2 to take full width when image is removed */}
            {FAQ_DATA.map((item) => (
              <FAQItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;