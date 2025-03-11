
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ease-in-out',
        scrolled ? 'glass py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a 
          href="#" 
          className="font-bold text-xl tracking-tight opacity-90 hover:opacity-100 transition-opacity flex items-center"
        >
          <span className="text-gradient-primary">🚀 Git</span><span className="text-white">Gains</span>
        </a>
        
        <nav className="hidden md:flex items-center space-x-6">
          {['Home', 'How It Works', 'Features', 'Open Bounties', 'Dashboard'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-sm font-medium text-neutral-300 hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-primary after:origin-right after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              {item}
            </a>
          ))}
        </nav>
        
        <a 
          href="#contact" 
          className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2 focus:ring-offset-background"
        >
          Login/Sign Up
        </a>
      </div>
    </header>
  );
};

export default Navbar;
