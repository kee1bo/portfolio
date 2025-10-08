import { useState, useEffect } from 'react';

const useScrollAnimation = (threshold = 0.1) => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('up');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine scroll direction
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up');
      }

      // Check if scrolled past threshold
      setIsScrolled(currentScrollY > threshold * window.innerHeight);

      setScrollY(currentScrollY);
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return {
    scrollY,
    scrollDirection,
    isScrolled,
  };
};

export default useScrollAnimation;
