
import React from 'react';
import Logo from './Logo';
import { FOOTER_LINKS } from '../constants';
import Button from './Button';

interface FooterProps {
  openContactModal: () => void;
}

const Footer: React.FC<FooterProps> = ({ openContactModal }) => {
  // Social icons are no longer used
  // const socialIcons: { [key: string]: React.ReactNode } = { ... };

  const handleCompanyLinkClick = (href: string, label: string) => {
    if (label === 'Contact') {
      openContactModal();
    } else {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };


  return (
    <footer className="bg-[#18181B] text-gray-400 py-16 md:py-20 font-inter"> {/* Slightly lighter dark */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-12 md:mb-16">
          <div className="md:col-span-2 lg:col-span-1"> {/* Logo takes less space */}
            <Logo className="text-white mb-5" isDarkBg={true} />
            <p className="text-sm leading-relaxed">AI-powered creative partner for established SMBs. Transform your social presence into your best sales channel.</p>
            <div className="mt-5">
              <p className="font-semibold text-gray-300">Contact:</p>
              <a href={`mailto:${FOOTER_LINKS.contact.email}`} className="block hover:text-purple-400 transition-colors text-sm">{FOOTER_LINKS.contact.email}</a>
              <a href={`tel:${FOOTER_LINKS.contact.phone.replace(/[^\d+]/g, '')}`} className="block hover:text-purple-400 transition-colors text-sm">{FOOTER_LINKS.contact.phone}</a>
            </div>
          </div>
          
          <div>
            <h5 className="font-semibold text-gray-200 mb-4">Services</h5>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.services.map(link => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    onClick={(e) => {
                       e.preventDefault();
                       const element = document.getElementById(link.href.substring(1));
                       if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="hover:text-purple-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-gray-200 mb-4">Company</h5>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.company.map(link => (
                <li key={link.label}>
                  {link.label === 'Contact' ? (
                    <button
                      onClick={() => handleCompanyLinkClick(link.href, link.label)}
                      className="hover:text-purple-400 transition-colors text-sm text-left w-full"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <a 
                      href={link.href} 
                      onClick={(e) => {
                        e.preventDefault();
                        handleCompanyLinkClick(link.href, link.label);
                      }}
                      className="hover:text-purple-400 transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h5 className="font-semibold text-gray-200 mb-4">Legal</h5>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.legal.map(link => (
                <li key={link.label}><a href={link.href} className="hover:text-purple-400 transition-colors text-sm">{link.label}</a></li>
              ))}
            </ul>
            {/* "Follow Us" section removed */}
          </div>
        </div>

        <div className="border-t border-gray-700/50 pt-10 text-center">
          <Button 
            variant="accent" 
            size="md" 
            className="mb-8 font-semibold" // Increased margin bottom
            onClick={() => document.getElementById('lead-magnet')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start Your Growth Journey Today
          </Button>
          <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} Lenticular AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;