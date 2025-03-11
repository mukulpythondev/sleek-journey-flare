
import React, { useEffect, useRef } from 'react';
import AnimatedText from '@/components/ui/AnimatedText';
import GlowButton from '@/components/ui/GlowButton';
import { ArrowRight, ChevronDown } from 'lucide-react';

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
        {/* Git branch network visualization - animated background */}
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path 
              d="M0,50 Q25,30 50,50 T100,50" 
              stroke="rgba(99,102,241,0.6)" 
              fill="none" 
              strokeWidth="0.5" 
              className="animate-pulse"
            />
            <path 
              d="M0,60 Q35,40 70,60 T100,60" 
              stroke="rgba(99,102,241,0.4)" 
              fill="none" 
              strokeWidth="0.5" 
              className="animate-pulse animate-delay-200"
            />
            <path 
              d="M0,40 Q45,20 80,40 T100,40" 
              stroke="rgba(99,102,241,0.3)" 
              fill="none" 
              strokeWidth="0.5" 
              className="animate-pulse animate-delay-400"
            />
          </svg>
        </div>
        
        {/* Gradient circles */}
        <div 
          data-parallax="true"
          data-parallax-depth="60"
          className="absolute top-1/4 right-1/4 w-[30rem] h-[30rem] rounded-full bg-primary/20 filter blur-[100px] opacity-50"
        />
        
        <div 
          data-parallax="true"
          data-parallax-depth="40"
          className="absolute bottom-1/4 left-1/3 w-[25rem] h-[25rem] rounded-full bg-secondary filter blur-[100px] opacity-30"
        />
        
        {/* Blockchain particles visualization */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15)_0,transparent_70%)]"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,transparent_49.9%,rgba(255,255,255,0.05)_50%,transparent_50.1%,transparent_100%),linear-gradient(to_bottom,transparent_0%,transparent_49.9%,rgba(255,255,255,0.05)_50%,transparent_50.1%,transparent_100%)] bg-[size:50px_50px]" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block animate-fade-in text-primary border border-primary/30 bg-primary/10 rounded-full py-1 px-3 text-sm font-medium mb-6">
            Open Source + Blockchain + AI
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6">
            <AnimatedText 
              text="Earn While You Contribute –" 
              tag="span"
              className="block"
              animationName="fade-in"
              splitBy="word"
              staggerDelay={0.1}
            />
            <AnimatedText 
              text="The Future of Open Source is Here!" 
              tag="span"
              className="block text-shimmer animate-text-shimmer mt-1"
              animationName="fade-in"
              splitBy="word"
              staggerDelay={0.1}
            />
          </h1>
          
          <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-0 animate-fade-in animate-delay-700">
            GitGains rewards your open-source contributions with secure, instant payouts 
            on the Aptos Blockchain. Build, contribute, and get paid effortlessly!
          </p>
          
          <div className="space-x-4 opacity-0 animate-fade-in animate-delay-1000">
            <GlowButton 
              size="lg"
              className="group"
            >
              Start Earning
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </GlowButton>
            
            <GlowButton 
              variant="outline"
              size="lg"
              glow={false}
              as="a"
              href="#features"
            >
              Explore GitGains
            </GlowButton>
          </div>
        </div>
      </div>
      
      {/* Bottom arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#journey" className="block text-white/50 hover:text-white transition-colors">
          <ChevronDown className="h-6 w-6" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
