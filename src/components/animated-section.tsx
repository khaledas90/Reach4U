"use client";

import type { ReactNode } from "react";
import { useEffect, useRef } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-in" | "slide-up" | "scale-in";
}

export function AnimatedSection({
  children,
  className = "",
  animation = "fade-in",
}: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(`animate-${animation}`);
            // Optionally unobserve after animation triggers to improve performance
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = sectionRef.current;
    if (section) {
      observer.observe(section);
    }

    // Cleanup observer on component unmount
    return () => {
      if (section) {
        observer.unobserve(section);
      }
      observer.disconnect();
    };
  }, [animation]);

  return (
    <div
      ref={sectionRef}
      className={`opacity-0 ${className} ${`animate-${animation}`}`}
    >
      {children}
    </div>
  );
}
