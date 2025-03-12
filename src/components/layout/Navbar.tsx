
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Link, useNavigate } from 'react-router-dom';
import { Github } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleGitHubLogin = async () => {
    try {
      // In a real implementation, this would redirect to GitHub OAuth
      const clientId = 'your-github-client-id'; // Would be stored in env variables
      const redirectUri = `${window.location.origin}/auth/callback`;
      const scope = 'user:email,read:user';
      
      const authUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`;
      
      // For now, just show a toast and navigate to a placeholder page
      toast({
        title: "GitHub Auth Demo",
        description: "In a real implementation, this would redirect to GitHub OAuth.",
      });
      
      // Uncomment this to enable actual GitHub OAuth redirect:
      // window.location.href = authUrl;
      
      // For demo purposes, navigate to the leaderboard
      navigate('/leaderboard');
    } catch (error) {
      console.error('GitHub auth error:', error);
      toast({
        title: "Authentication Error",
        description: "Failed to authenticate with GitHub. Please try again.",
        variant: "destructive",
      });
    }
  };
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'How It Works', path: '/#how-it-works' },
    { name: 'Features', path: '/#features' },
    { name: 'Open Bounties', path: '/#open-bounties' },
    { name: 'Leaderboard', path: '/leaderboard' }
  ];
  
  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ease-in-out',
        scrolled ? 'glass py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link 
          to="/" 
          className="font-bold text-xl tracking-tight opacity-90 hover:opacity-100 transition-opacity flex items-center"
        >
          <span className="text-gradient-primary">🚀 Git</span><span className="text-white">Gains</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-sm font-medium text-neutral-300 hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-primary after:origin-right after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        
        <button 
          onClick={handleGitHubLogin}
          className="inline-flex h-10 items-center justify-center rounded-md bg-[#24292e] hover:bg-[#24292e]/90 px-4 py-2 text-sm font-medium text-white shadow transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2 focus:ring-offset-background gap-2"
        >
          <Github size={18} />
          Login with GitHub
        </button>
      </div>
    </header>
  );
};

export default Navbar;
