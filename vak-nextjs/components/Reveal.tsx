'use client';

import { useEffect } from 'react';

export default function Reveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    const nodes = document.querySelectorAll('.reveal');
    nodes.forEach((n) => observer.observe(n));

    return () => observer.disconnect();
  }, []);

  return null;
}
