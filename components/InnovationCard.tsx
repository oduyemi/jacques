"use client";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  textColor: string;
}

export function InnovationCard({
  title,
  description,
  icon: Icon,
  color,
  textColor,
}: Props) {
  return (
    <motion.div
      whileHover={{
        scale: 1.03,
      }}
    >
      <Card className="border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <div className="flex items-center gap-4">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r ${color}`}
          >
            <Icon className="h-6 w-6 text-white" />
          </div>

          <div>
            <h3
              className={`text-xl font-bold ${textColor}`}
            >
              {title}
            </h3>

            <p className="text-muted-foreground">
              {description}
            </p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}