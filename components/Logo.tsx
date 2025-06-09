
import React from 'react';

interface LogoProps {
  className?: string;
  isDarkBg?: boolean; // To adjust text color if on a dark background
  onClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => void;
}

const Logo: React.FC<LogoProps> = ({ className, isDarkBg, onClick }) => {
  const commonClasses = `text-2xl font-inter font-bold ${isDarkBg ? 'text-white' : 'text-[#1a1a1a]'} ${className || ''} cursor-pointer`;
  const content = <>Lenticular<span className="accent-gradient-text">AI</span></>;

  if (onClick) {
    // Render as a button for SPA navigation to prevent default anchor issues
    return (
      <button
        onClick={onClick}
        className={`${commonClasses} bg-transparent border-none p-0 focus:outline-none appearance-none`} // Basic button reset + appearance
        aria-label="Navigate to homepage"
        type="button" // Explicitly set type for button
      >
        {content}
      </button>
    );
  }

  // Fallback to anchor if no onClick is provided (though in this app, onClick is always used for headers)
  return (
    <a
      href="/" 
      className={commonClasses}
    >
      {content}
    </a>
  );
};

export default Logo;