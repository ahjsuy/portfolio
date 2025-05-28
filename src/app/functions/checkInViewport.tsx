import { useState, useEffect, RefObject } from "react";

export function useCheckInViewport(
  ref: RefObject<HTMLElement | null>,
  threshold: number = 0.5
) {
  const [inViewport, setInViewport] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInViewport(entry.isIntersecting);
      },
      { threshold: threshold }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [ref, threshold]);

  return inViewport;
}
