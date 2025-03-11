
import React from 'react';
import SectionTitle from '@/components/ui/SectionTitle';
import FeatureCard from '@/components/ui/FeatureCard';
import { 
  Brain, 
  Link, 
  FileCode, 
  Zap, 
  Users, 
  Search 
} from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Brain className="h-6 w-6 text-primary" />,
      title: "AI-Powered Code Review",
      description: "Automate PR validation & get insightful feedback from our advanced AI system."
    },
    {
      icon: <Link className="h-6 w-6 text-primary" />,
      title: "Aptos Blockchain Integration",
      description: "Secure, trustless payouts using the fast and efficient Aptos Blockchain."
    },
    {
      icon: <FileCode className="h-6 w-6 text-primary" />,
      title: "Smart Contracts for Rewards",
      description: "No manual approvals needed. Smart contracts automate the reward process."
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Instant Payouts in APT",
      description: "Get paid instantly after your PR is approved without any delays."
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Decentralized Contribution",
      description: "Open-source, community-driven platform that rewards real value creation."
    },
    {
      icon: <Search className="h-6 w-6 text-primary" />,
      title: "Transparent & Trustless",
      description: "Verified transactions & complete reward history available on the blockchain."
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
          subtitle="Why Choose GitGains"
          title="Revolutionizing Open-Source with Blockchain & AI"
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
