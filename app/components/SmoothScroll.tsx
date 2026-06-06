"use client";

import { ReactLenis } from "lenis/react";
import { MotionConfig, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

export function SmoothScroll({ children }: { children: ReactNode }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <MotionConfig
      reducedMotion="user"
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <ReactLenis
        root
        options={{
          anchors: true,
          duration: 1.15,
          lerp: 0.08,
          smoothWheel: !prefersReducedMotion,
        }}
      >
        {children}
      </ReactLenis>
    </MotionConfig>
  );
}
