
import React from 'react';
import GlassCard from './GlassCard';

interface AdditionalServiceCardProps {
  iconText: string;
  title: string;
  description: string;
  features?: string[];
  className?: string;
}

const AdditionalServiceCard: React.FC<AdditionalServiceCardProps> = ({
  iconText,
  title,
  description,
  features,
  className = '',
}) => {
  return (
    <GlassCard className={`flex flex-col min-h-full p-5 text-center transition-transform transform hover:scale-105 hover:shadow-2xl ${className}`}>
      <div className="mb-3"> 
        <span className="inline-block accent-gradient-bg text-white text-lg font-inter font-bold rounded-full h-16 w-16 flex items-center justify-center mx-auto shadow-md">
          {iconText}
        </span>
      </div>
      <h4 className="text-xl font-inter font-semibold tracking-tight text-[#1a1a1a] mb-2">{title}</h4>
      <p className="text-gray-600 text-sm leading-relaxed font-inter mb-3">{description}</p>
      {features && features.length > 0 && (
        <ul className="mt-4 space-y-1 text-xs text-gray-500 list-disc list-inside text-left">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      )}
    </GlassCard>
  );
};

export default AdditionalServiceCard;