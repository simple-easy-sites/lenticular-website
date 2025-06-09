
import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className, onClick }) => {
  return (
    <div 
      className={`bg-white/60 backdrop-blur-lg border border-gray-200/70 shadow-lg hover:shadow-xl rounded-2xl p-6 transition-all duration-300 ease-in-out ${className || ''}`}
      // PRD Spec: rgba(255,255,255,0.15) with backdrop-blur and Soft, elevated shadows using rgba(0,0,0,0.08)
      // For a more direct PRD match:
      // className={`bg-white/[.15] backdrop-blur-xl border border-white/20 shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] rounded-2xl p-6 transition-all duration-300 ${className || ''}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default GlassCard;