import React from 'react';
import { PROBLEM_SOLUTIONS } from '../constants';

const ProblemSolutionDeepDive: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-inter font-semibold tracking-tight text-[#1a1a1a]">Overwhelmed by Online Marketing? <span className="accent-gradient-text">We Simplify Your Content Creation.</span></h2>
        </div>

        <div className="space-y-10 max-w-3xl mx-auto">
          {PROBLEM_SOLUTIONS.map((item) => (
            <div key={item.id} className="p-8 rounded-xl shadow-xl bg-slate-50 hover:shadow-2xl transition-shadow duration-300 ease-in-out"> {/* Softer bg, more padding, larger shadow */}
              <h3 className="text-xl font-inter font-semibold tracking-tight text-purple-600 mb-3">PROBLEM: "{item.problem}"</h3>
              <p className="text-gray-700 leading-relaxed text-base font-inter"><span className="font-inter font-semibold text-emerald-600">OUR SOLUTION:</span> {item.solution}</p>
            </div>
          ))}
        </div>

        {/* <div className="mt-12 md:mt-16 max-w-4xl mx-auto">
          <img 
            src="/desk-setup.jpeg" 
            alt="Modern and organized creative workspace with a laptop displaying a design, camera, and notebook" 
            className="w-full h-auto rounded-xl shadow-lg object-cover aspect-[16/9]" 
          />
        </div> */}
      </div>
    </section>
  );
};

export default ProblemSolutionDeepDive;