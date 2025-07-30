"use client";

import { useEffect } from 'react';

const PerformanceOptimizer = () => {
  useEffect(() => {
    // Minimal performance optimization - let Next.js handle most optimizations

    // Lazy load non-critical resources
    const lazyLoadResources = () => {
      // Intersection Observer for lazy loading
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              imageObserver.unobserve(img);
            }
          }
        });
      });

      // Observe all images with data-src attribute
      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
      });
    };

    // Performance monitoring (only in development)
    const monitorPerformance = () => {
      if (process.env.NODE_ENV === 'development' && 'performance' in window) {
        const observer = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            if (entry.entryType === 'largest-contentful-paint') {
              console.log('LCP:', entry.startTime);
            }
            if (entry.entryType === 'first-input') {
              const fidEntry = entry as PerformanceEventTiming;
              console.log('FID:', fidEntry.processingStart - fidEntry.startTime);
            }
          });
        });

        observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input'] });
      }
    };

    // Only run performance monitoring and lazy loading
    const timeoutId = setTimeout(() => {
      lazyLoadResources();
      monitorPerformance();
    }, 1000); // Delay to avoid interfering with initial load

    return () => {
      clearTimeout(timeoutId);
    };

  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceOptimizer;