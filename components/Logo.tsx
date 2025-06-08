import React from 'react';

interface LogoProps {
  className?: string;
  isDarkBg?: boolean; // To adjust text color if on a dark background
}

const Logo: React.FC<LogoProps> = ({ className, isDarkBg }) => {
  return (
    <a href="/" className={`text-2xl font-inter font-bold ${isDarkBg ? 'text-white' : 'text-[#1a1a1a]'} ${className || ''}`}>
      Lenticular<span className="accent-gradient-text">AI</span>
    </a>
  );
};

export default Logo;