
import React from 'react';
import SectionTitle from '@/components/ui/SectionTitle';
import FeatureCard from '@/components/ui/FeatureCard';
import { 
  Zap, 
  Code, 
  Layers, 
  LineChart, 
  Lock, 
  Smartphone 
} from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Lightning Fast",
      description: "Optimized for speed, ensuring a smooth and responsive user experience."
    },
    {
      icon: <Code className="h-6 w-6 text-primary" />,
      title: "Clean Code",
      description: "Meticulously crafted code following best practices for maintainability."
    },
    {
      icon: <Layers className="h-6 w-6 text-primary" />,
      title: "Modular Design",
      description: "Built with reusable components that seamlessly work together."
    },
    {
      icon: <LineChart className="h-6 w-6 text-primary" />,
      title: "SEO Optimized",
      description: "Engineered to perform excellently in search engine rankings."
    },
    {
      icon: <Lock className="h-6 w-6 text-primary" />,
      title: "Secure & Reliable",
      description: "Implemented with security best practices for peace of mind."
    },
    {
      icon: <Smartphone className="h-6 w-6 text-primary" />,
      title: "Fully Responsive",
      description: "Adapts perfectly to any screen size for a consistent experience."
    }
  ];
  
  return (
    <section id="features" className="py-24 relative">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute right-0 top-1/4 w-96 h-96 rounded-full bg-primary/10 filter blur-[100px] opacity-30" />
        <div className="absolute left-0 bottom-1/4 w-96 h-96 rounded-full bg-accent/20 filter blur-[100px] opacity-20" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionTitle
          subtitle="Why Choose Us"
          title="Powerful Features"
          className="opacity-0 animate-fade-in"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              className={`animate-delay-${index * 100}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
