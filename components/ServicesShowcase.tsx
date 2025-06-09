
import React from 'react';
import { SERVICE_TIERS_DATA, ADDITIONAL_SERVICES_DATA } from '../constants';
import ServiceTierCard from './ServiceTierCard';
import AdditionalServiceCard from './AdditionalServiceCard'; // New import
import { ServiceTier } from '../types';

interface ServicesShowcaseProps {
  onPlanSelect: (planId: string) => void;
}

const ServicesShowcase: React.FC<ServicesShowcaseProps> = ({ onPlanSelect }) => {
  // Get only the VISIBILITY ENGINE tier group for card display
  const visibilityEngineTiers = SERVICE_TIERS_DATA.filter(
    service => service.tierGroup === "VISIBILITY ENGINE"
  );

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-inter font-semibold tracking-tight text-[#1a1a1a] mb-4">Stop Losing Jobs to Competitors. <span className="accent-gradient-text">Start Dominating Online.</span></h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-inter">Choose the services you need to get more calls, book more jobs, and grow your business predictably.</p>
        </div>

        {/* VISIBILITY ENGINE Section */}
        {visibilityEngineTiers.length > 0 && (
          <div className="mb-16 md:mb-20">
            <h3 className="text-2xl sm:text-3xl font-inter font-semibold tracking-tight text-purple-700 mb-3 text-center">VISIBILITY ENGINE</h3>
            <p className="text-md text-gray-500 mb-8 md:mb-10 text-center max-w-xl mx-auto font-inter">
              Get consistently found by local homeowners searching for your services.
            </p>
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${Math.min(visibilityEngineTiers.length, 3)} gap-8`}>
              {visibilityEngineTiers.map(tier => (
                <ServiceTierCard 
                  key={tier.id} 
                  tier={tier} 
                  actionButtonLabel="Choose Plan"
                  onActionButtonClick={() => onPlanSelect(tier.id)}
                />
              ))}
            </div>
          </div>
        )}

        {/* ADDITIONAL SERVICES Section */}
        <div className="mt-16 md:mt-20 text-center">
          <h3 className="text-2xl sm:text-3xl font-inter font-semibold tracking-tight text-purple-700 mb-2">ADVANCED GROWTH SYSTEMS</h3>
          <p className="text-md text-gray-500 mb-8 md:mb-10 max-w-xl mx-auto font-inter">For established businesses ready to scale operations and maximize profitability. (Pricing available on consultation)</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {ADDITIONAL_SERVICES_DATA.map(service => (
              <AdditionalServiceCard 
                key={service.id}
                iconText={service.iconText}
                title={service.title}
                description={service.description}
                features={service.features || []} // Pass features
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesShowcase;