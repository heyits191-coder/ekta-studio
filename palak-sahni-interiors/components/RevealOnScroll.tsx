import React, { useEffect, useRef, useState } from 'react';

interface RevealOnScrollProps {
  children: React.ReactNode;
  delay?: number; // delay in seconds
  className?: string;
  variant?: 'up' | 'blur';
}

export const RevealOnScroll: React.FC<RevealOnScrollProps> = ({ 
  children, 
  delay = 0, 
  className = "", 
  variant = 'up' 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, {
      threshold: 0.1, // Trigger when 10% visible
      rootMargin: '0px 0px -50px 0px' // Offset slightly so it doesn't trigger at the very bottom edge
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.disconnect();
      }
    };
  }, []);

  const animationClass = variant === 'blur' ? 'animate-reveal-blur' : 'animate-reveal-up';

  return (
    <div ref={ref} className={`${className} ${isVisible ? animationClass : 'opacity-0'}`} style={{ animationDelay: `${delay}s` }}>
      {children}
    </div>
  );
};