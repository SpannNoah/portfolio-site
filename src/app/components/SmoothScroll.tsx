'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    // Check if there's a hash in the URL when component mounts
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const id = hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }, 100);
    }
  }, [pathname]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="/#"]');
      
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href && href.startsWith('/#')) {
          const id = href.substring(2);
          
          // Only prevent default if we're on the home page
          if (pathname === '/') {
            e.preventDefault();
            const element = document.getElementById(id);
            
            if (element) {
              element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              });
              
              // Update URL without triggering navigation
              window.history.pushState(null, '', href);
            }
          }
          // If not on home page, let the link navigate naturally
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [pathname]);

  return null;
}
