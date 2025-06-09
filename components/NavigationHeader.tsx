
import React, { useState, useEffect } from 'react';
import Logo from './Logo'; // Re-added Logo import
import Button from './Button';
import { NAV_LINKS } from '../constants';

interface NavigationHeaderProps {
  openContactModal: () => void;
  onLogoClick: () => void; // Added prop for logo click
}

const NavigationHeader: React.FC<NavigationHeaderProps> = ({ openContactModal, onLogoClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavLinkClick = (href: string, label: string) => {
    if (label === 'Contact') {
      openContactModal();
      setIsMobileMenuOpen(false); 
    } else {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMobileMenuOpen(false); 
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-xl shadow-md py-3' : 'py-5 bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Logo onClick={onLogoClick} /> {/* Logo re-added on the left, changed prop name */}
          
          {/* Group for navigation links and mobile menu trigger */}
          <div className="flex items-center">
            <nav className="hidden md:flex space-x-8 items-center">
              {NAV_LINKS.map(link => (
                link.label === 'Contact' ? (
                  <button
                    key={link.label}
                    onClick={() => handleNavLinkClick(link.href, link.label)}
                    className="text-gray-700 hover:text-[#1a1a1a] transition-colors font-inter font-medium text-[15px] cursor-pointer"
                  >
                    {link.label}
                  </button>
                ) : (
                  <a 
                    key={link.label} 
                    href={link.href} 
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavLinkClick(link.href, link.label);
                    }}
                    className="text-gray-700 hover:text-[#1a1a1a] transition-colors font-inter font-medium text-[15px]"
                  >
                    {link.label}
                  </a>
                )
              ))}
              <Button variant="accent" size="sm" className="font-inter font-medium" onClick={() => document.getElementById('lead-magnet')?.scrollIntoView({ behavior: 'smooth' })}>Start Free</Button>
            </nav>
            <div className="md:hidden ml-4"> {/* Added margin-left for spacing if nav links are hidden */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-[#1a1a1a] focus:outline-none p-2" 
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /> 
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 bg-white/95 backdrop-blur-lg rounded-xl shadow-xl p-4">
            <nav className="flex flex-col space-y-3">
              {NAV_LINKS.map(link => (
                 link.label === 'Contact' ? (
                  <button
                    key={link.label}
                    onClick={() => handleNavLinkClick(link.href, link.label)}
                    className="text-gray-700 hover:text-[#1a1a1a] transition-colors font-inter font-medium py-2.5 text-center text-base w-full"
                  >
                    {link.label}
                  </button>
                ) : (
                  <a 
                    key={link.label} 
                    href={link.href} 
                    className="text-gray-700 hover:text-[#1a1a1a] transition-colors font-inter font-medium py-2.5 text-center text-base"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavLinkClick(link.href, link.label);
                    }}
                  >
                    {link.label}
                  </a>
                )
              ))}
              <Button variant="accent" size="md" className="w-full mt-3 font-inter font-medium" onClick={() => {
                document.getElementById('lead-magnet')?.scrollIntoView({ behavior: 'smooth' });
                setIsMobileMenuOpen(false);
              }}>Start Free</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavigationHeader;