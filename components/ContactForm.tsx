"use client";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import { Send } from "lucide-react";




export function ContactForm() {
  return (
    <form className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <Input placeholder="John Doe" />
        <Input
          type="email"
          placeholder="johndoe@example.com"
        />
      </div>

      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Hitamo serivisi" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="ai">
            Artificial Intelligence
          </SelectItem>

          <SelectItem value="vr">
            VR/AR Development
          </SelectItem>

          <SelectItem value="blockchain">
            Blockchain & Web3
          </SelectItem>

          <SelectItem value="iot">
            IoT & Edge Computing
          </SelectItem>

          <SelectItem value="quantum">
            Quantum Computing
          </SelectItem>

          <SelectItem value="metaverse">
            Metaverse Development
          </SelectItem>
        </SelectContent>
      </Select>

      <Textarea
        rows={6}
        placeholder="Your message here..."
      />

      <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 mt-24">
        Ohereza Ubutumwa
        <Send className="ml-2 h-4 w-4" />
      </Button>
    </form>
  );
}