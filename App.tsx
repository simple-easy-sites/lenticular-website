
import React, { useState, useEffect } from 'react';
import NavigationHeader from './components/NavigationHeader';
import HeroSection from './components/HeroSection';
import SocialProofBand from './components/SocialProofBand';
import ServicesShowcase from './components/ServicesShowcase';
import ProcessSection from './components/ProcessSection';
import YouTubeGrowthSection from './components/YouTubeGrowthSection';
import ProblemSolutionDeepDive from './components/ProblemSolutionDeepDive';
import TestimonialsResults from './components/TestimonialsResults';
import LeadMagnetSection from './components/LeadMagnetSection';
import FAQSection from './components/FAQSection';
import FinalConversionSection from './components/FinalConversionSection';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import PlanDetailPage from './components/PlanDetailPage'; // New
import OnboardingPage from './components/OnboardingPage'; // New
import { ServiceTier, CurrentPage } from './types';
import { SERVICE_TIERS_DATA, ONBOARDING_SUCCESS_CALENDLY_LINK } from './constants';


const App: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<CurrentPage>('landing');
  const [selectedPlan, setSelectedPlan] = useState<ServiceTier | null>(null);
  const [initialPlanIdForDetailPage, setInitialPlanIdForDetailPage] = useState<string | null>(null);


  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on page change
  }, [currentPage]);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  const navigateToPlanDetail = (planId: string) => {
    const plan = SERVICE_TIERS_DATA.find(p => p.id === planId);
    if (plan) {
      setInitialPlanIdForDetailPage(planId);
      setCurrentPage('planDetail');
    } else {
      console.error("Plan not found for ID:", planId);
      setCurrentPage('landing'); // Fallback
    }
  };

  const navigateToOnboarding = (plan: ServiceTier) => {
    setSelectedPlan(plan);
    setCurrentPage('onboarding');
  };
  
  const handleOnboardingSuccess = () => {
    console.log("Onboarding successful, redirecting to Calendly or showing success message.");
     window.open(ONBOARDING_SUCCESS_CALENDLY_LINK, '_blank');
     setCurrentPage('landing'); 
     setSelectedPlan(null);
     setInitialPlanIdForDetailPage(null);
  };

  const navigateToLanding = () => {
    setCurrentPage('landing');
    setSelectedPlan(null);
    setInitialPlanIdForDetailPage(null);
  };

  if (currentPage === 'planDetail' && initialPlanIdForDetailPage) {
    return (
      <PlanDetailPage
        allPlans={SERVICE_TIERS_DATA}
        initiallySelectedPlanId={initialPlanIdForDetailPage}
        onProceedToOnboarding={navigateToOnboarding}
        onBack={navigateToLanding}
        onLogoClick={navigateToLanding} // Pass navigateToLanding for the logo
      />
    );
  }

  if (currentPage === 'onboarding' && selectedPlan) {
    return (
      <OnboardingPage
        selectedPlan={selectedPlan}
        onBack={() => navigateToPlanDetail(selectedPlan.id)} 
        onSuccess={handleOnboardingSuccess}
        onLogoClick={navigateToLanding} // Pass navigateToLanding for the logo
      />
    );
  }

  return (
    <div className="bg-white text-[#1a1a1a] antialiased overflow-x-hidden font-inter">
      {currentPage === 'landing' && <NavigationHeader openContactModal={openContactModal} onLogoClick={navigateToLanding} />}
      <main>
        {currentPage === 'landing' && (
          <>
            <HeroSection />
            <SocialProofBand />
            <ServicesShowcase onPlanSelect={navigateToPlanDetail} />
            <ProcessSection />
            <YouTubeGrowthSection />
            <ProblemSolutionDeepDive />
            <TestimonialsResults />
            <LeadMagnetSection />
            <FAQSection />
            <FinalConversionSection />
          </>
        )}
      </main>
      {currentPage === 'landing' && <Footer openContactModal={openContactModal} />}
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </div>
  );
};

export default App;