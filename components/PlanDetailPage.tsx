
import React, { useEffect, useRef } from 'react';
import { ServiceTier } from '../types';
import ServiceTierCard from './ServiceTierCard';
import Button from './Button';
import Logo from './Logo'; // Re-added Logo import

interface PlanDetailPageProps {
  allPlans: ServiceTier[];
  initiallySelectedPlanId: string;
  onProceedToOnboarding: (plan: ServiceTier) => void;
  onBack: () => void;
  onLogoClick: () => void; // Added prop for logo click
}

const PlanDetailPage: React.FC<PlanDetailPageProps> = ({
  allPlans,
  initiallySelectedPlanId,
  onProceedToOnboarding,
  onBack,
  onLogoClick, // Destructure new prop
}) => {
  const selectedPlanRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0,0); 
    if (selectedPlanRef.current) {
      setTimeout(() => {
        selectedPlanRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }
  }, [initiallySelectedPlanId]);

  const groupedServices = allPlans.reduce((acc, service) => {
    (acc[service.tierGroup] = acc[service.tierGroup] || []).push(service);
    return acc;
  }, {} as Record<string, ServiceTier[]>);

  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      <header className="py-5 bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center"> {/* Changed to justify-between */}
          <Logo onClick={onLogoClick} /> {/* Logo re-added on the left, changed prop name */}
          <Button variant="outline" size="sm" onClick={onBack}>
            &larr; Back to All Services
          </Button>
        </div>
      </header>

      <main className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#1a1a1a] mb-3">
              Review Your Plan or Explore Other Growth Options
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              You're one step closer to more jobs and less marketing hassle. Confirm your selected plan (highlighted) or see other ways we can help your business grow.
            </p>
          </div>

          {Object.entries(groupedServices).map(([groupName, tiers]) => (
            <div key={groupName} className="mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-purple-700 mb-3 text-center">
                {groupName}
              </h2>
               <p className="text-md text-gray-500 mb-8 text-center max-w-xl mx-auto">
                {groupName === "VISIBILITY ENGINE" && "Get seen everywhere by local homeowners actively looking for your services."}
                {groupName === "LEAD ENGINE" && "Turn website visitors and social media attention into a steady stream of qualified leads."}
                {groupName === "GROWTH SUITE" && "Automate your operations, scale your team, and manage more jobs with less stress."}
                {groupName === "CUSTOM SOLUTIONS" && "Bespoke software and AI systems for established businesses with unique operational needs."}
              </p>
              <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${Math.min(tiers.length, 3)} gap-8`}>
                {tiers.map(tier => {
                  const isInitiallySelected = tier.id === initiallySelectedPlanId;
                  return (
                    <div key={tier.id} ref={isInitiallySelected ? selectedPlanRef : null}>
                      <ServiceTierCard
                        tier={tier}
                        actionButtonLabel="Proceed with this Plan" 
                        onActionButtonClick={() => onProceedToOnboarding(tier)}
                        className={isInitiallySelected ? 'ring-4 ring-offset-2 ring-purple-500 shadow-2xl scale-105' : 'hover:scale-105'}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
           <div className="text-center mt-12">
            <Button variant="secondary" size="lg" onClick={onBack}>
                Need Help Choosing? Go Back
            </Button>
           </div>
        </div>
      </main>
       <footer className="py-8 bg-gray-100 border-t">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Lenticular AI. All rights reserved. Questions? <a href={`mailto:${"lenticularproject@gmail.com"}`} className="text-purple-600 hover:underline">Contact Us</a>.
        </div>
      </footer>
    </div>
  );
};

export default PlanDetailPage;