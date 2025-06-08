
import React from 'react';
import { PROCESS_STEPS } from '../constants';
import GlassCard from './GlassCard';

const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-inter font-semibold tracking-tight text-[#1a1a1a] mb-3">Your Media Team—<span className="accent-gradient-text">Without the Overhead</span></h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-inter">Three steps to transform your business presence</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Optional: connecting lines for larger screens */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 -translate-y-1/2">
                <div className="flex justify-around items-center h-full">
                    <div className="w-1/4 h-px bg-gray-300"></div>
                    <div className="w-1/4 h-px bg-gray-300"></div>
                </div>
            </div>
          {PROCESS_STEPS.map((step, index) => (
            <GlassCard key={step.id} className="text-center transition-transform transform hover:scale-105 hover:shadow-2xl z-10">
              <div className="mb-6"> {/* Increased margin */}
                <span className="inline-block accent-gradient-bg text-white text-2xl font-inter font-bold rounded-full h-16 w-16 flex items-center justify-center mx-auto shadow-lg"> {/* Larger circle */}
                  0{step.number}
                </span>
              </div>
              <h3 className="text-xl font-inter font-semibold tracking-tight text-[#1a1a1a] mb-3">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed font-inter">{step.description}</p>
            </GlassCard>
          ))}
        </div>

        {/* <div className="mt-12 md:mt-16 max-w-3xl mx-auto">
          <img 
            src="/growth-arrows.jpeg" 
            alt="Abstract colorful glass arrows indicating upward growth trends on a light background" 
            className="w-full h-auto rounded-xl shadow-lg object-cover aspect-[16/9]" 
          />
        </div> */}
      </div>
    </section>
  );
};

export default ProcessSection;