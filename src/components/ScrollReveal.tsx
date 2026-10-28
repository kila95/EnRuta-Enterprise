import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delayMs = 0,
  direction = 'up'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, we can unobserve to keep GPU performance optimal
          if (elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  const getDirectionClasses = () => {
    switch (direction) {
      case 'up':
        return 'translate-y-6';
      case 'down':
        return '-translate-y-6';
      case 'left':
        return 'translate-x-6';
      case 'right':
        return '-translate-x-6';
      case 'none':
        return '';
      default:
        return 'translate-y-6';
    }
  };

  return (
    <div
      ref={elementRef}
      style={{ transitionDelay: `${delayMs}ms` }}
      className={`transition-all duration-700 ease-out transform ${
        isVisible
          ? 'opacity-100 translate-y-0 translate-x-0'
          : `opacity-0 ${getDirectionClasses()}`
      } ${className}`}
    >
      {children}
    </div>
  );
};
