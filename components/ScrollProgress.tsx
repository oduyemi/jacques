"use client";
import { motion, useScroll } from "framer-motion";


export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed left-0 top-0 z-[9999] h-1 w-full origin-left bg-gradient-to-r from-purple-500 to-pink-500"
    />
  );
}