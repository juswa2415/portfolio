"use client";

import { motion, useReducedMotion } from "framer-motion";

export function SectionReveal({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reducedMotion ? false : { opacity: 0, y: 32 }}
      whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: [0.21, 1, 0.35, 1] }}
    >
      {children}
    </motion.div>
  );
}
