import React from 'react';
import { useFadeIn } from '../hooks/useFadeIn';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}

const Section: React.FC<SectionProps> = ({ children, className = '', id, delay = 0 }) => {
  const { ref, isVisible } = useFadeIn(0.1);

  return (
    <div
      id={id}
      ref={ref}
      className={`transition-all duration-[1400ms] ease-luxury transform will-change-transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default Section;