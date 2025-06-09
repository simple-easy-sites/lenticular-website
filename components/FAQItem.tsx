
import React, { useState } from 'react';
import { FAQItem as FAQItemType } from '../types';

interface FAQItemProps {
  item: FAQItemType;
}

const FAQItem: React.FC<FAQItemProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200/80 py-6"> {/* Increased padding */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left focus:outline-none group"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${item.id}`}
      >
        <h3 className="text-lg md:text-xl font-inter font-semibold tracking-tight text-[#1a1a1a] group-hover:text-purple-600 transition-colors">{item.question}</h3>
        <span className={`transform transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          <svg className={`w-5 h-5 ${isOpen ? 'text-purple-600' : 'text-gray-400'} group-hover:text-purple-500 transition-colors`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </span>
      </button>
      {isOpen && (
        <div id={`faq-answer-${item.id}`} className="mt-4 text-gray-600 leading-relaxed animate-fadeIn text-base pr-6 font-inter"> {/* Added padding right for space from icon */}
          {item.answer}
        </div>
      )}
    </div>
  );
};

export default FAQItem;