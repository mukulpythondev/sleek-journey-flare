
import React, { useEffect, useRef } from 'react';
import GlowButton from '@/components/ui/GlowButton';
import { ArrowRight } from 'lucide-react';

const CtaSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax effect for CTA section
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const moveX = (x - centerX) / 25;
      const moveY = (y - centerY) / 25;
      
      const card = containerRef.current.querySelector('[data-card]');
      if (card) {
        card.setAttribute(
          'style',
          `transform: translate(${moveX}px, ${moveY}px) rotateX(${-moveY / 5}deg) rotateY(${moveX / 5}deg);`
        );
      }
    };
    
    const handleMouseLeave = () => {
      const card = containerRef.current?.querySelector('[data-card]');
      if (card) {
        card.setAttribute(
          'style',
          'transform: translate(0, 0) rotateX(0) rotateY(0);'
        );
      }
    };
    
    if (containerRef.current) {
      containerRef.current.addEventListener('mousemove', handleMouseMove);
      containerRef.current.addEventListener('mouseleave', handleMouseLeave);
    }
    
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener('mousemove', handleMouseMove);
        containerRef.current.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);
  
  return (
    <section id="contact" className="py-24 relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-background to-background/90 z-0" />
      
      <div 
        ref={containerRef}
        className="container mx-auto px-4 md:px-6 relative z-10 perspective"
      >
        <div 
          data-card
          className="max-w-4xl mx-auto glass rounded-2xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] preserve-3d transition-all duration-200 ease-out"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              Ready to Get Started?
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Join thousands of users who have already transformed their digital experience with our innovative solution. Start your journey today.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full md:w-auto flex-1 h-12 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
            <GlowButton size="lg" className="w-full md:w-auto">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </GlowButton>
          </div>
          
          <div className="mt-6 text-center text-sm text-neutral-500">
            By signing up, you agree to our Terms of Service and Privacy Policy.
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
