
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface JourneyStepProps {
  step: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  isLast?: boolean;
  isActive?: boolean;
  className?: string;
}

const JourneyStep = ({ 
  step, 
  title, 
  description, 
  icon, 
  isLast = false, 
  isActive = false,
  className 
}: JourneyStepProps) => {
  const stepRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-scale-in');
            if (lineRef.current && !isLast) {
              lineRef.current.classList.add('animate-line-grow');
            }
          }
        });
      },
      { threshold: 0.3 }
    );
    
    if (stepRef.current) {
      observer.observe(stepRef.current);
    }
    
    return () => observer.disconnect();
  }, [isLast]);
  
  return (
    <div className={cn("relative flex flex-col items-center w-full", className)} ref={stepRef}>
      {/* Center line */}
      {!isLast && (
        <div 
          ref={lineRef}
          className="absolute top-16 h-[calc(100%_-_4rem)] w-px bg-primary/30 origin-top" 
        />
      )}
      
      {/* Step circle */}
      <div 
        className={cn(
          "z-10 flex items-center justify-center w-12 h-12 rounded-full text-white border-2 transition-all duration-300",
          isActive 
            ? "bg-primary border-primary shadow-[0_0_15px_rgba(99,102,241,0.4)]" 
            : "bg-secondary border-primary/50"
        )}
      >
        <span className="text-sm font-semibold">{step}</span>
      </div>
      
      {/* Icon */}
      <div className="mt-4 mb-3 flex items-center justify-center h-20 w-20 glass rounded-2xl">
        {icon}
      </div>
      
      {/* Content */}
      <div className="text-center px-4 w-full max-w-sm">
        <h3 className="font-bold text-lg text-white mb-2">{title}</h3>
        <p className="text-sm text-neutral-400">{description}</p>
      </div>
    </div>
  );
};

export default JourneyStep;
