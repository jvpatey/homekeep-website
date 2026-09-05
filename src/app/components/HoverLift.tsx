"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { hoverLift, tapPress } from "../lib/motion";

interface HoverLiftProps {
  children: ReactNode;
  className?: string;
  emphasized?: boolean;
  press?: boolean;
}

export default function HoverLift({
  children,
  className,
  emphasized = false,
  press = true,
}: HoverLiftProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      whileHover={
        reduce
          ? undefined
          : {
              ...hoverLift,
              ...(emphasized ? { scale: 1.015 } : {}),
            }
      }
      whileTap={reduce || !press ? undefined : tapPress}
    >
      {children}
    </motion.div>
  );
}
