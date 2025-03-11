
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard = ({ icon, title, description, className }: FeatureCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-scale-in');
          }
        });
      },
      { threshold: 0.2 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <div 
      ref={cardRef}
      className={cn(
        "glass opacity-0 rounded-xl p-6 transition-all duration-300 hover:shadow-[0_0_25px_rgba(99,102,241,0.15)] hover:scale-105 hover:bg-white/10",
        className
      )}
    >
      <div className="mb-4 p-3 rounded-lg bg-primary/20 w-12 h-12 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-neutral-400 text-sm">{description}</p>
    </div>
  );
};

export default FeatureCard;
