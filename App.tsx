
import React, { useState } from 'react';
import NavigationHeader from './components/NavigationHeader';
import HeroSection from './components/HeroSection';
import SocialProofBand from './components/SocialProofBand';
import ServicesShowcase from './components/ServicesShowcase';
// import OptionalAddOnsSection from './components/OptionalAddOnsSection'; // Import new section
import ProcessSection from './components/ProcessSection';
import YouTubeGrowthSection from './components/YouTubeGrowthSection';
import ProblemSolutionDeepDive from './components/ProblemSolutionDeepDive';
import TestimonialsResults from './components/TestimonialsResults';
import LeadMagnetSection from './components/LeadMagnetSection';
// import AboutCredibilitySection from './components/AboutCredibilitySection'; // Removed
import FAQSection from './components/FAQSection';
import FinalConversionSection from './components/FinalConversionSection';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal'; // Import ContactModal

const App: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  return (
    <div className="bg-white text-[#1a1a1a] antialiased overflow-x-hidden font-inter">
      <NavigationHeader openContactModal={openContactModal} />
      <main>
        <HeroSection />
        <SocialProofBand />
        <ServicesShowcase />
        {/* <OptionalAddOnsSection /> */} {/* Removed new section here */}
        <ProcessSection />
        <YouTubeGrowthSection />
        <ProblemSolutionDeepDive />
        <TestimonialsResults />
        <LeadMagnetSection />
        {/* <AboutCredibilitySection /> */} {/* Removed */}
        <FAQSection />
        <FinalConversionSection />
      </main>
      <Footer openContactModal={openContactModal} />
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </div>
  );
};

export default App;