
import React, { useEffect, useRef } from 'react';
import GlowButton from '@/components/ui/GlowButton';
import { ArrowRight, Sparkles } from 'lucide-react';

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
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.15)_0,transparent_70%)] z-0"></div>
      
      <div 
        ref={containerRef}
        className="container mx-auto px-4 md:px-6 relative z-10 perspective"
      >
        <div 
          data-card
          className="max-w-4xl mx-auto glass rounded-2xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] preserve-3d transition-all duration-200 ease-out"
        >
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-2xl">
            <div className="absolute -top-32 -left-32 w-64 h-64 bg-primary/30 rounded-full filter blur-[80px] opacity-50"></div>
            <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-accent/20 rounded-full filter blur-[80px] opacity-50"></div>
          </div>
          
          <div className="relative z-10 text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              Start Contributing & Earning Today!
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Join thousands of developers who are already monetizing their open-source contributions with GitGains. 
              Transparent, secure, and instant rewards await!
            </p>
          </div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            <GlowButton size="lg" className="w-full md:w-auto group">
              <Sparkles className="mr-2 h-5 w-5" />
              Join GitGains
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </GlowButton>
            
            <GlowButton variant="outline" size="lg" className="w-full md:w-auto">
              View Open Bounties
            </GlowButton>
          </div>
          
          <div className="relative z-10 mt-6 text-center text-sm text-neutral-500">
            Start earning rewards for the open-source work you already do!
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
