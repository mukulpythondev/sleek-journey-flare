
import React, { useEffect, useRef } from 'react';
import AnimatedText from '@/components/ui/AnimatedText';
import GlowButton from '@/components/ui/GlowButton';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax effect for background
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      const elements = containerRef.current.querySelectorAll('[data-parallax]');
      elements.forEach((el) => {
        const depth = parseFloat(el.getAttribute('data-parallax-depth') || '0');
        const moveX = (x - 0.5) * depth;
        const moveY = (y - 0.5) * depth;
        
        el.setAttribute(
          'style',
          `transform: translate(${moveX}px, ${moveY}px);`
        );
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <section 
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        {/* Gradient circle */}
        <div 
          data-parallax="true"
          data-parallax-depth="60"
          className="absolute top-1/4 right-1/4 w-[30rem] h-[30rem] rounded-full bg-primary/20 filter blur-[100px] opacity-50"
        />
        
        {/* Darker circle */}
        <div 
          data-parallax="true"
          data-parallax-depth="40"
          className="absolute bottom-1/4 left-1/3 w-[25rem] h-[25rem] rounded-full bg-secondary filter blur-[100px] opacity-30"
        />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,transparent_49.9%,rgba(255,255,255,0.05)_50%,transparent_50.1%,transparent_100%),linear-gradient(to_bottom,transparent_0%,transparent_49.9%,rgba(255,255,255,0.05)_50%,transparent_50.1%,transparent_100%)] bg-[size:50px_50px]" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block animate-fade-in text-primary border border-primary/30 bg-primary/10 rounded-full py-1 px-3 text-sm font-medium mb-6">
            Stunning, Minimalist, Apple-inspired Design
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6">
            <AnimatedText 
              text="Crafted with" 
              tag="span"
              className="block"
              animationName="fade-in"
              splitBy="word"
              staggerDelay={0.1}
            />
            <AnimatedText 
              text="Precision & Elegance" 
              tag="span"
              className="block text-shimmer animate-text-shimmer mt-1"
              animationName="fade-in"
              splitBy="word"
              staggerDelay={0.1}
            />
          </h1>
          
          <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-0 animate-fade-in animate-delay-700">
            A meticulously designed interface where every pixel serves a purpose. 
            Experience the perfect balance of form and function.
          </p>
          
          <div className="space-x-4 opacity-0 animate-fade-in animate-delay-1000">
            <GlowButton 
              size="lg"
              className="group"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </GlowButton>
            
            <GlowButton 
              variant="outline"
              size="lg"
              glow={false}
            >
              Learn More
            </GlowButton>
          </div>
        </div>
      </div>
      
      {/* Bottom arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#journey" className="block text-white/50 hover:text-white transition-colors">
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
