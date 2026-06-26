"use client";
import {
  Brain,
  Cuboid,
  Leaf,
} from "lucide-react";

import { InnovationCard } from "./InnovationCard";
import { AIAssistantCard } from "./AssistantCard";

const innovations = [
  {
    title: "Neural Networks",
    description:
      "Advanced AI ubwenge bw'ibyapa",
    icon: Brain,
    color:
      "from-cyan-500 to-blue-500",
    textColor: "text-cyan-400",
  },
  {
    title: "Digital Twins",
    description:
      "Virtual representations of real-world systems",
    icon: Cuboid,
    color:
      "from-purple-500 to-pink-500",
    textColor: "text-purple-400",
  },
  {
    title: "Green Computing",
    description:
      "Sustainable technology solutions",
    icon: Leaf,
    color:
      "from-green-500 to-emerald-500",
    textColor: "text-green-400",
  },
];

export const Innovation = () => {
  return (
    <section
      id="innovation"
      className="py-24"
    >
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-5xl font-bold">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Innovation Lab
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Twereka ibintu bifatika
            by'ejo hazaza
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            {innovations.map((item) => (
              <InnovationCard
                key={item.title}
                {...item}
              />
            ))}
          </div>

          <AIAssistantCard />
        </div>
      </div>
    </section>
  );
}