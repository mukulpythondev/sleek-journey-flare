
import React, { useState, useEffect } from 'react';
import SectionTitle from '@/components/ui/SectionTitle';
import JourneyStep from '@/components/ui/JourneyStep';
import { GitPullRequest, CheckSquare, CreditCard } from 'lucide-react';

const JourneySection = () => {
  const [activeStep, setActiveStep] = useState(1);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const step = parseInt(entry.target.getAttribute('data-step') || '1');
            setActiveStep(step);
          }
        });
      },
      { threshold: 0.5 }
    );
    
    const stepElements = document.querySelectorAll('[data-step]');
    stepElements.forEach((el) => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);
  
  // Step content
  const steps = [
    {
      title: "Raise a PR",
      description: "Submit contributions on supported repositories and start your journey.",
      icon: <GitPullRequest className="h-10 w-10 text-primary" />
    },
    {
      title: "Submit Your PR",
      description: "AI reviews and validates your code for quality and compatibility.",
      icon: <CheckSquare className="h-10 w-10 text-primary" />
    },
    {
      title: "Get Paid Instantly",
      description: "Receive secure payouts via Aptos Blockchain as soon as your PR is approved.",
      icon: <CreditCard className="h-10 w-10 text-primary" />
    }
  ];
  
  return (
    <section id="journey" className="py-24 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80 z-0" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionTitle
          subtitle="How It Works"
          title="Your Journey to Rewards"
          className="opacity-0 animate-fade-in"
        />
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} data-step={index + 1}>
              <JourneyStep
                step={index + 1}
                title={step.title}
                description={step.description}
                icon={step.icon}
                isLast={index === steps.length - 1}
                isActive={activeStep >= index + 1}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
