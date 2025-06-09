
import React from 'react';
import Button from './Button';
// import { HERO_PAIN_POINTS } from '../constants'; // No longer used

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-bg-subtle pt-28 pb-12 md:pt-36 md:pb-20"> {/* Increased top padding */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative inline-block mb-6">
          <div
            className="absolute inset-0 -z-10 opacity-20 blur-3xl"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(120, 120, 200, 0.3) 0%, transparent 65%)',
            }}
          ></div>
          <h1 className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-inter font-bold tracking-tighter text-[#1a1a1a] leading-tight">
            Your Business is Built to Last.<br className="hidden md:inline" />
            <span className="accent-gradient-text">Your Content Should Be Too.</span>
          </h1>
        </div>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto font-inter">
          Lenticular turns your social presence into a real growth channel powered by AI, shaped by story.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
          <Button variant="accent" size="lg" className="font-inter font-semibold" onClick={() => document.getElementById('lead-magnet')?.scrollIntoView({ behavior: 'smooth' })}>Get 5 Free Posts to Start</Button>
          {/* "See What Lenticular Can Do for You" button removed */}
        </div>

        {/* <div className="mt-12 max-w-5xl mx-auto">
           <img 
             src="/meeting.jpeg" 
             alt="Team collaborating on a project with laptops and charts in a modern office" 
             className="w-full h-auto rounded-xl shadow-2xl object-cover aspect-[16/9]" 
           />
         </div> */}
      </div>
    </section>
  );
};

export default HeroSection;