import { useEffect, useRef, useState } from "react";

/**
 * Counts from 0 to `target` once the element scrolls into view.
 * Uses requestAnimationFrame (no library) and respects reduced-motion.
 */
export function useCountUp(target: number, enabled = true, duration = 1200) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [display, setDisplay] = useState(enabled ? 0 : target);

  useEffect(() => {
    const node = ref.current;
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!enabled || !node || prefersReduced || typeof IntersectionObserver === "undefined") {
      setDisplay(target);
      return;
    }

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          // ease-out for a natural finish
          setDisplay(Math.round(target * (1 - Math.pow(1 - progress, 3))));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.3 },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [target, enabled, duration]);

  return { ref, display };
}
