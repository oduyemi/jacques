import { Contact } from "@/components/Contact";
import { FloatingOrbs } from "@/components/FloatingOrbs";
import { Hero } from "@/components/Hero";
import { Innovation } from "@/components/Innovation";
import { Navbar } from "@/components/Navbar";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Services } from "@/components/Services";
import { Stats } from "@/components/Stats";


export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-black text-white">
      <ScrollProgress />
        <Hero />      
    </main>
  );
}