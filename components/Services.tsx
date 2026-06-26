"use client";
import {
  Brain,
  Blocks,
  Cpu,
  Radio,
  Atom,
  Globe,
} from "lucide-react";
import { ServiceCard } from "./ServiceCard";

const services = [
  {
    title: "Artificial Intelligence",
    icon: <Brain size={56} />,
    color: "#22d3ee",
    progress: 95,
    description:
      "Machine Learning, Deep Learning, NLP and Computer Vision.",
    technologies: [
      "TensorFlow",
      "PyTorch",
      "GPT",
    ],
  },

  {
    title: "VR/AR Development",
    icon: <Blocks size={56} />,
    color: "#a855f7",
    progress: 90,
    description:
      "Virtual and Augmented Reality experiences.",
    technologies: [
      "Unity",
      "Unreal",
      "ARKit",
    ],
  },

  {
    title: "Blockchain & Web3",
    icon: <Cpu size={56} />,
    color: "#10b981",
    progress: 85,
    description:
      "Smart contracts, DApps and DeFi solutions.",
    technologies: [
      "Ethereum",
      "Solidity",
      "DeFi",
    ],
  },

  {
    title: "IoT & Edge Computing",
    icon: <Radio size={56} />,
    color: "#f59e0b",
    progress: 80,
    description:
      "Smart city and edge computing solutions.",
    technologies: [
      "Arduino",
      "Raspberry Pi",
      "5G",
    ],
  },

  {
    title: "Quantum Computing",
    icon: <Atom size={56} />,
    color: "#6366f1",
    progress: 60,
    description:
      "Quantum algorithms and machine learning research.",
    technologies: [
      "Qiskit",
      "Cirq",
      "Q#",
    ],
  },

  {
    title: "Metaverse Development",
    icon: <Globe size={56} />,
    color: "#ec4899",
    progress: 75,
    description:
      "Digital twins and immersive virtual worlds.",
    technologies: [
      "Unreal",
      "Omniverse",
      "WebXR",
    ],
  },
];

export const Services = () => {
    return (
      <section
        id="services"
        className="py-24"
      >
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-5xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Serivisi za Future
              </span>
            </h2>
  
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Dukoresha tekenoloji za kijyambere
              zitarafata ku isi
            </p>
          </div>
  
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                {...service}
              />
            ))}
          </div>
        </div>
      </section>
    );
}