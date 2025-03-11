
import React from 'react';
import { cn } from '@/lib/utils';
import { Twitter, Github, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-white/10 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="#" className="font-bold text-xl tracking-tight mb-4 block">
              <span className="text-gradient-primary">Sleek</span><span className="text-white">Journey</span>
            </a>
            <p className="text-neutral-500 text-sm mt-2">
              Elevating digital experiences through minimalist design and powerful functionality.
            </p>
          </div>
          
          {/* Links */}
          <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Product',
                links: ['Features', 'Integrations', 'Pricing', 'Updates']
              },
              {
                title: 'Resources',
                links: ['Documentation', 'Guides', 'Support', 'API']
              },
              {
                title: 'Company',
                links: ['About', 'Blog', 'Careers', 'Contact']
              }
            ].map((group, index) => (
              <div key={index}>
                <h3 className="font-semibold text-white mb-3">{group.title}</h3>
                <ul className="space-y-2">
                  {group.links.map((link, i) => (
                    <li key={i}>
                      <a 
                        href="#" 
                        className="text-neutral-500 hover:text-white text-sm transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          {/* Social */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-white mb-3">Connect</h3>
            <div className="flex space-x-4 mt-4">
              {[
                { icon: <Twitter className="h-5 w-5" />, label: 'Twitter' },
                { icon: <Github className="h-5 w-5" />, label: 'GitHub' },
                { icon: <Linkedin className="h-5 w-5" />, label: 'LinkedIn' },
                { icon: <Instagram className="h-5 w-5" />, label: 'Instagram' }
              ].map((social, i) => (
                <a
                  key={i}
                  href="#"
                  className="h-10 w-10 flex items-center justify-center rounded-full glass hover:bg-white/10 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-neutral-500 text-sm">
          <p>© {currentYear} SleekJourney. All rights reserved.</p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
