
import React from 'react';
import { cn } from '@/lib/utils';

interface GlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'default' | 'secondary' | 'outline';
  size?: 'default' | 'sm' | 'lg';
  glow?: boolean;
  as?: React.ElementType;
  href?: string;
}

const GlowButton = ({
  children,
  className,
  variant = 'default',
  size = 'default',
  glow = true,
  as: Component = 'button',
  href,
  ...props
}: GlowButtonProps) => {
  return (
    <Component
      href={href}
      className={cn(
        'relative inline-flex items-center justify-center rounded-md font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
        // Base styles by variant
        variant === 'default' && 'bg-primary text-primary-foreground hover:bg-primary/90',
        variant === 'secondary' && 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        variant === 'outline' && 'border border-primary hover:bg-primary/10 text-primary',
        // Size styles
        size === 'default' && 'h-11 px-6 py-2 text-sm',
        size === 'sm' && 'h-9 px-4 py-1 text-xs',
        size === 'lg' && 'h-14 px-8 py-3 text-base',
        // Glow effect
        glow && variant === 'default' && 'hover:animate-glow-pulse shadow-[0_0_15px_rgba(99,102,241,0.2)]',
        // Custom class
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export default GlowButton;
