"use client";
import Link from "next/link";
import { Menu, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";


const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Innovation", href: "#innovation" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-white/5 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2"
        >
          <Rocket className="h-6 w-6 text-purple-400" />

          <Link
            href="#home"
            className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-2xl font-bold text-transparent"
          >
            Ibyiza byacu
          </Link>
        </motion.div>

        <div className="hidden items-center gap-3 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
        >
          <Menu />
        </Button>
      </div>
    </nav>
  );
}