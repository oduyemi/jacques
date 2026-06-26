"use client";
import { Button } from "@/components/ui/button";
import {MessageCircle} from "lucide-react";


export function AIAssistantCard() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
      <div className="mb-6 flex items-center gap-3">
        <div className="h-8 w-8 animate-pulse rounded-full bg-gradient-to-r from-cyan-400 to-blue-400" />

        <div>
          <div className="font-semibold text-cyan-400">
            AI Assistant
          </div>

          <div className="text-xs text-muted-foreground">
            Online
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 p-4">
          <p className="text-sm text-gray-300">
            Muraho! Ndi AI Assistant
            wacu wa kijyambere.
          </p>
        </div>

        <div className="rounded-lg bg-white/5 p-4 text-sm text-gray-300">
          <ul className="space-y-2">
            <li>
              • Machine Learning model
              development
            </li>
            <li>
              • VR/AR application design
            </li>
            <li>
              • Blockchain smart contracts
            </li>
            <li>
              • IoT architecture
            </li>
          </ul>
        </div>
      </div>

      <Button
        className="mt-6 w-full bg-gradient-to-r from-cyan-500 to-purple-500"
      >
        Ganira na AI
        <MessageCircle className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
}