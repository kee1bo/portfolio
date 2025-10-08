import { useState, useEffect, useRef, useMemo } from 'react';

const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  const defaultOptions = useMemo(() => ({
    threshold: 0.1,
    rootMargin: '0px',
    triggerOnce: true,
    ...options,
  }), [options]);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const { threshold, rootMargin, triggerOnce } = defaultOptions;

    const observer = new IntersectionObserver(([entry]) => {
      const isIntersecting = entry.isIntersecting;

      if (isIntersecting) {
        setIsVisible(true);
        if (triggerOnce && !hasAnimated) {
          setHasAnimated(true);
        }
      } else if (!triggerOnce) {
        setIsVisible(false);
      }
    }, { threshold, rootMargin });

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [defaultOptions, hasAnimated]);

  return {
    elementRef,
    isVisible: defaultOptions.triggerOnce ? hasAnimated || isVisible : isVisible,
  };
};

export default useIntersectionObserver;
