
import React from 'react';
import { ServiceTier } from '../types';
import GlassCard from './GlassCard';
import Button from './Button';

interface ServiceTierCardProps {
  tier: ServiceTier;
  actionButtonLabel?: string;
  onActionButtonClick?: (tierId: string) => void;
  className?: string; // Allow passing additional class names
}

const ServiceTierCard: React.FC<ServiceTierCardProps> = ({ 
  tier, 
  actionButtonLabel = "Choose Plan", 
  onActionButtonClick,
  className = ''
}) => {
  const isFeatured = tier.id === 'full-presence-pro'; // This could be dynamic based on tier.highlight later

  const handleButtonClick = () => {
    if (onActionButtonClick) {
      onActionButtonClick(tier.id);
    } else {
      // Fallback or default behavior if needed, e.g., scroll to lead magnet
      document.getElementById('lead-magnet')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <GlassCard 
      className={`flex flex-col h-full ${isFeatured && tier.highlight ? 'border-2 border-purple-400 relative ring-2 ring-purple-200 shadow-purple-500/10' : 'border-gray-200/70'} ${className}`}
    >
      {isFeatured && tier.highlight && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
          <span className="accent-gradient-bg text-white text-xs font-inter font-semibold px-3 py-1.5 rounded-full shadow-lg">
            {tier.highlight}
          </span>
        </div>
      )}
      <div className="flex-grow p-2 pt-6"> {/* Increased pt for highlight space if present */}
        <h3 className="text-2xl font-inter font-semibold tracking-tight text-[#1a1a1a] mb-2">{tier.name}</h3>
        <p className={`text-3xl font-inter font-bold mb-1 ${isFeatured && tier.highlight ? 'accent-gradient-text' : 'text-purple-600'}`}>{tier.price}</p>
        {tier.setupFee && (
          <p className="text-sm text-gray-500 mb-3 font-inter">
            + {tier.setupFee} Setup & Onboarding
          </p>
        )}
        {/* Use dangerouslySetInnerHTML for descriptions that contain HTML (like <strong> for VISIBILITY ENGINE) */}
        <p 
          className="text-gray-600 text-sm leading-relaxed min-h-[4.5rem] font-inter" 
          dangerouslySetInnerHTML={{ __html: tier.description }}
        ></p>
         {tier.features && tier.features.length > 0 && (
          <ul className="mt-3 space-y-1.5 text-sm text-gray-500 list-disc list-inside"> {/* Changed text-xs to text-sm */}
            {tier.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        )}
      </div>
      <div className="mt-auto p-2 pt-6"> {/* Ensure button is at bottom */}
        <Button 
          variant={isFeatured && tier.highlight ? 'accent' : 'outline'} 
          size="md" 
          className="w-full font-inter font-medium"
          onClick={handleButtonClick}
        >
          {actionButtonLabel}
        </Button>
      </div>
    </GlassCard>
  );
};

export default ServiceTierCard;