"use client";
import { motion } from "framer-motion";

const orbs = [
  {
    size: "w-96 h-96",
    color: "from-purple-500 to-pink-500",
    position: "-left-48 top-10",
  },
  {
    size: "w-80 h-80",
    color: "from-blue-500 to-cyan-500",
    position: "-right-40 top-96",
  },
  {
    size: "w-64 h-64",
    color: "from-green-500 to-blue-500",
    position: "bottom-20 left-1/2",
  },
];

export const FloatingOrbs = () => {
  return (
    <>
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          animate={{
            x: [0, 30, -20, -30, 0],
            y: [0, -30, 20, -10, 0],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 2,
          }}
          className={`absolute ${orb.position} ${orb.size}
            rounded-full bg-gradient-to-r ${orb.color}
            opacity-20 blur-3xl`}
        />
      ))}
    </>
  );
}