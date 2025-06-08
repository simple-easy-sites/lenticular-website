import React from 'react';
import { ServiceTier } from '../types';
import GlassCard from './GlassCard';
import Button from './Button';

interface ServiceTierCardProps {
  tier: ServiceTier;
}

const ServiceTierCard: React.FC<ServiceTierCardProps> = ({ tier }) => {
  const isFeatured = tier.id === 'full-presence-pro';

  return (
    <GlassCard 
      className={`flex flex-col h-full ${isFeatured ? 'border-2 border-purple-400 relative ring-2 ring-purple-200 shadow-purple-500/10' : 'border-gray-200/70'}`}
    >
      {isFeatured && tier.highlight && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="accent-gradient-bg text-white text-xs font-inter font-semibold px-3 py-1.5 rounded-full shadow-lg">
            {tier.highlight}
          </span>
        </div>
      )}
      <div className="flex-grow p-2 pt-4"> {/* Added pt-4 for highlight space */}
        <h3 className="text-2xl font-inter font-semibold tracking-tight text-[#1a1a1a] mb-2">{tier.name}</h3>
        <p className={`text-3xl font-inter font-bold mb-3 ${isFeatured ? 'accent-gradient-text' : 'text-purple-600'}`}>{tier.price}</p>
        <p className="text-gray-600 text-sm leading-relaxed min-h-[3rem] font-inter">{tier.description}</p> {/* Min height for description */}
      </div>
      <div className="mt-auto p-2 pt-6"> {/* Ensure button is at bottom */}
        <Button 
          variant={isFeatured ? 'accent' : 'outline'} 
          size="md" 
          className="w-full font-inter font-medium"
          onClick={() => document.getElementById('lead-magnet')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Choose Plan
        </Button>
      </div>
    </GlassCard>
  );
};

export default ServiceTierCard;