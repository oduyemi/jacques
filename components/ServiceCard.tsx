"use client";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { CircularProgress } from "./CircularProgress";


interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  technologies: string[];
  progress: number;
}

export const ServiceCard = ({
  title,
  description,
  icon,
  color,
  technologies,
  progress,
}: ServiceCardProps) => {
  return (
    <motion.div
      whileHover={{
        y: -12,
        rotateX: 3,
        rotateY: 3,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
      }}
    >
      <Card className="group h-full border-white/10 bg-white/5 p-8 backdrop-blur-xl">
        <div className="mb-6 text-5xl transition-transform duration-300 group-hover:scale-110">
          {icon}
        </div>

        <h3
          className="mb-4 text-2xl font-bold"
          style={{ color }}
        >
          {title}
        </h3>

        <p className="mb-6 text-muted-foreground">
          {description}
        </p>

        <div className="mb-6 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <CircularProgress
          value={progress}
          color={color}
        />
      </Card>
    </motion.div>
  );
}