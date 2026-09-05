import type { Transition, Variants } from "motion/react";

export const easeOutStandard: [number, number, number, number] = [0.2, 0, 0, 1];

export const duration = {
  fast: 0.22,
  base: 0.28,
} as const;

export const transitionBase: Transition = {
  duration: duration.base,
  ease: easeOutStandard,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: transitionBase },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: transitionBase },
};

export const staggerChildren: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.04,
    },
  },
};

export const hoverLift = {
  y: -3,
  boxShadow:
    "0 1px 2px rgba(26, 22, 18, 0.04), 0 12px 32px rgba(196, 92, 38, 0.12)",
  transition: { duration: duration.fast, ease: easeOutStandard },
};

export const tapPress = {
  scale: 0.97,
  transition: { duration: duration.fast, ease: easeOutStandard },
};
