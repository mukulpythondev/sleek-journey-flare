
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'right';
  className?: string;
  maxWidth?: string;
}

const SectionTitle = ({
  title,
  subtitle,
  alignment = 'center',
  className,
  maxWidth = 'max-w-4xl',
}: SectionTitleProps) => {
  return (
    <div 
      className={cn(
        'mb-12 w-full',
        alignment === 'center' && 'text-center mx-auto',
        alignment === 'left' && 'text-left mr-auto',
        alignment === 'right' && 'text-right ml-auto',
        maxWidth,
        className
      )}
    >
      <div className="inline-block">
        <span 
          className="text-xs font-medium uppercase tracking-widest text-primary mb-2 block opacity-90"
          style={{ letterSpacing: '0.2em' }}
        >
          {subtitle || ''}
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gradient break-words sm:break-normal">
          {title}
        </h2>
        <div className={cn(
          'mt-3 h-1 bg-primary rounded-full',
          alignment === 'center' && 'mx-auto w-16',
          alignment === 'left' && 'ml-0 mr-auto w-16',
          alignment === 'right' && 'ml-auto mr-0 w-16'
        )} />
      </div>
    </div>
  );
};

export default SectionTitle;
