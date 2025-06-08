import React from 'react';
import { Testimonial } from '../types';
import GlassCard from './GlassCard';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <GlassCard className="flex flex-col h-full p-8"> {/* Increased padding */}
      <div className="flex-grow relative">
        <span className="absolute -top-4 -left-3 text-7xl text-gray-200/80 font-serif select-none z-0 opacity-50" aria-hidden="true">
          “
        </span>
        <p className="text-gray-700 italic text-lg mb-6 leading-relaxed relative z-10 font-inter">"{testimonial.quote}"</p>
      </div>
      <div className="mt-auto border-t border-gray-200/70 pt-4"> {/* Added separator */}
        {testimonial.author && <p className="font-inter font-semibold text-[#1a1a1a] text-base">{testimonial.author}</p>}
        <p className={`text-sm text-purple-600 font-inter ${testimonial.author ? '' : 'mt-0'}`}>{testimonial.company} <span className="text-gray-500 font-inter">({testimonial.category})</span></p>
      </div>
    </GlassCard>
  );
};

export default TestimonialCard;