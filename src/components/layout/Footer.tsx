
import React from 'react';
import { cn } from '@/lib/utils';
import { Twitter, Github, MessagesSquare, Send } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-white/10 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="#" className="font-bold text-xl tracking-tight mb-4 block">
              <span className="text-gradient-primary">Git</span><span className="text-white">Gains</span>
            </a>
            <p className="text-neutral-500 text-sm mt-2">
              Revolutionizing open-source with blockchain & AI. Earn rewards for your contributions.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-white mb-3">🔗 Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'How It Works', 'Features', 'Open Bounties', 'Contact Us'].map((link, i) => (
                <li key={i}>
                  <a 
                    href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="text-neutral-500 hover:text-white text-sm transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter and Social */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-white mb-3">📩 Stay Updated</h3>
            <p className="text-neutral-500 text-sm mb-4">Subscribe to our newsletter for the latest updates.</p>
            
            <div className="flex mb-6">
              <input
                type="email"
                placeholder="Your email"
                className="bg-white/5 border border-white/10 rounded-l-md px-4 py-2 text-sm flex-1 focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button className="bg-primary rounded-r-md px-4 py-2 text-white text-sm flex items-center">
                <Send className="h-4 w-4" />
              </button>
            </div>
            
            <h3 className="font-semibold text-white mb-3">🔗 Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="h-10 w-10 flex items-center justify-center rounded-full glass hover:bg-white/10 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 flex items-center justify-center rounded-full glass hover:bg-white/10 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 flex items-center justify-center rounded-full glass hover:bg-white/10 transition-colors"
                aria-label="Discord"
              >
                <MessagesSquare className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-neutral-500 text-sm">
          <p>© {currentYear} GitGains. All Rights Reserved.</p>
          
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
