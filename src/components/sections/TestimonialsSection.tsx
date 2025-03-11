
import React, { useState, useEffect, useRef } from 'react';
import SectionTitle from '@/components/ui/SectionTitle';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  position: string;
  avatar: string;
}

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  
  const testimonials: Testimonial[] = [
    {
      quote: "Finally, a platform where my open-source work gets real value! GitGains has transformed how I contribute.",
      author: "Alex Johnson",
      position: "Senior Developer",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      quote: "Instant payouts? AI code review? Blockchain security? It's a dream for devs like me who rely on open-source income.",
      author: "Sarah Chen",
      position: "Full-Stack Engineer",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      quote: "No more waiting for payments. GitGains makes contributing seamless and rewarding in the most literal sense.",
      author: "Miguel Rodriguez",
      position: "Blockchain Developer",
      avatar: "https://randomuser.me/api/portraits/men/67.jpg"
    }
  ];
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Observe for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.3 }
    );
    
    if (testimonialsRef.current) {
      observer.observe(testimonialsRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <section id="testimonials" className="py-24 relative">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background z-0" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionTitle
          subtitle="Success Stories"
          title="Developers Love GitGains!"
          className="opacity-0 animate-fade-in"
        />
        
        <div 
          ref={testimonialsRef}
          className="max-w-4xl mx-auto mt-16 opacity-0"
        >
          <div className="relative">
            {/* Testimonial cards */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index}
                    className="min-w-full px-4"
                  >
                    <div className="glass rounded-2xl p-8 text-center">
                      <div className="relative mb-6 inline-block">
                        <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-primary">
                          <img 
                            src={testimonial.avatar} 
                            alt={testimonial.author}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                          ⭐⭐⭐⭐⭐
                        </div>
                      </div>
                      
                      <blockquote className="text-xl md:text-2xl italic text-white mb-6">
                        "{testimonial.quote}"
                      </blockquote>
                      
                      <div>
                        <h4 className="font-bold text-white">{testimonial.author}</h4>
                        <p className="text-neutral-400 text-sm">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation buttons */}
            <button 
              onClick={prevTestimonial}
              className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 text-white transition-colors focus:outline-none"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 text-white transition-colors focus:outline-none"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
          
          {/* Indicator dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-colors",
                  index === activeIndex ? "bg-primary" : "bg-white/20 hover:bg-white/40"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
