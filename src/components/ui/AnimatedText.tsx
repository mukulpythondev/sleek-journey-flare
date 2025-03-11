
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  animationName?: 'fade-in' | 'fade-in-right' | 'fade-in-left' | 'slide-up';
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  gradient?: boolean;
  splitBy?: 'letter' | 'word';
  staggerDelay?: number;
}

const AnimatedText = ({
  text,
  className,
  once = true,
  animationName = 'fade-in',
  tag: Tag = 'div',
  gradient = false,
  splitBy = 'word',
  staggerDelay = 0.05,
}: AnimatedTextProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (containerRef.current) {
              const elements = containerRef.current.querySelectorAll('[data-animation]');
              elements.forEach((el, index) => {
                setTimeout(() => {
                  el.classList.add(`animate-${animationName}`);
                }, index * (staggerDelay * 1000));
              });
            }
            if (once) observer.disconnect();
          } else if (!once) {
            if (containerRef.current) {
              const elements = containerRef.current.querySelectorAll('[data-animation]');
              elements.forEach((el) => {
                el.classList.remove(`animate-${animationName}`);
              });
            }
          }
        });
      },
      { threshold: 0.2 }
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => observer.disconnect();
  }, [animationName, once, staggerDelay]);
  
  const renderAnimatedText = () => {
    if (splitBy === 'letter') {
      return text.split('').map((letter, index) => (
        <span 
          key={index} 
          data-animation="true"
          className={cn(
            "opacity-0 inline-block",
            gradient && "text-gradient-primary"
          )}
          style={{ animationDelay: `${index * staggerDelay}s` }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </span>
      ));
    } else {
      return text.split(' ').map((word, index) => (
        <span key={index} className="inline-block">
          <span 
            data-animation="true"
            className={cn(
              "opacity-0 inline-block",
              gradient && "text-gradient-primary"
            )}
            style={{ animationDelay: `${index * staggerDelay}s` }}
          >
            {word}
          </span>
          {index !== text.split(' ').length - 1 && "\u00A0"}
        </span>
      ));
    }
  };
  
  return (
    <Tag className={cn("overflow-hidden", className)} ref={containerRef}>
      {renderAnimatedText()}
    </Tag>
  );
};

export default AnimatedText;
