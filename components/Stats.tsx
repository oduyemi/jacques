"use client";
import CountUp from "react-countup";
import { motion } from "framer-motion";


const stats = [
  {
    value: 100,
    suffix: "+",
    label: "AI Models",
    color: "text-cyan-400",
  },
  {
    value: 50,
    suffix: "+",
    label: "VR Projects",
    color: "text-purple-400",
  },
  {
    value: 200,
    suffix: "+",
    label: "Clients",
    color: "text-pink-400",
  },
  {
    value: 99,
    suffix: "%",
    label: "Success Rate",
    color: "text-green-400",
  },
];

export const Stats = () => {
  return (
    <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.1,
          }}
          viewport={{ once: true }}
          whileHover={{
            y: -10,
          }}
          className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
        >
          <div className={`mb-2 text-3xl font-bold ${stat.color}`}>
            <CountUp
              end={stat.value}
              duration={2}
            />
            {stat.suffix}
          </div>

          <p className="text-sm text-muted-foreground">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}