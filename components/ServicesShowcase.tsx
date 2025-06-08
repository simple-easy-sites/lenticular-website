
import React from 'react';
import { SERVICE_TIERS_DATA } from '../constants';
import ServiceTierCard from './ServiceTierCard';
import { ServiceTier } from '../types';

const ServicesShowcase: React.FC = () => {
  // Group services by tierGroup
  const groupedServices = SERVICE_TIERS_DATA.reduce((acc, service) => {
    (acc[service.tierGroup] = acc[service.tierGroup] || []).push(service);
    return acc;
  }, {} as Record<string, ServiceTier[]>);

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-inter font-semibold tracking-tight text-[#1a1a1a] mb-4">Not Just Content. We <span className="accent-gradient-text">Architect Momentum.</span></h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-inter">Choose your growth trajectory. Scale at your pace.</p>
        </div>

        {/* <div className="mb-12 md:mb-16 max-w-4xl mx-auto">
           <img 
             src="/data-wave.jpeg" 
             alt="Abstract digital wave of interconnected data points, content snippets, and UI elements" 
             className="w-full h-auto rounded-xl shadow-lg object-cover aspect-[16/7]" 
           />
        </div> */}

        {Object.entries(groupedServices).map(([groupName, tiers]) => (
          <div key={groupName} className="mb-16 md:mb-20">
            <h3 className="text-2xl sm:text-3xl font-inter font-semibold tracking-tight text-purple-700 mb-3 text-center">{groupName}</h3>
            <p className="text-md text-gray-500 mb-8 md:mb-10 text-center max-w-xl mx-auto font-inter">
              {groupName === "VISIBILITY ENGINE" && "For businesses ready to show up consistently"}
              {groupName === "LEAD ENGINE" && "For businesses ready to convert traffic into customers"}
              {groupName === "GROWTH SUITE" && "For businesses scaling operations and team"}
              {groupName === "CUSTOM SOLUTIONS" && "For established businesses requiring bespoke tools"}
            </p>
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${Math.min(tiers.length, 3)} gap-8`}>
              {tiers.map(tier => (
                <ServiceTierCard key={tier.id} tier={tier} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesShowcase;