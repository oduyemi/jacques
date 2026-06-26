"use client";
import { useState, ReactNode } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight } from "lucide-react";


interface EarlyAccessDialogProps {
  children: ReactNode;
}



export const EarlyAccessDialog = ({children}: EarlyAccessDialogProps) => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent
        className="
          max-w-2xl
          border
          border-white/10
          bg-black/95
          text-white
          backdrop-blur-xl
          shadow-[0_0_80px_rgba(245,158,11,0.08)]
        "
      >
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold">
            Request Early Access
          </DialogTitle>

          <DialogDescription className="text-zinc-400">
            Be among the first to receive updates, insights,
            strategic content, and launch announcements.
          </DialogDescription>
        </DialogHeader>

        <form className="space-y-6 pt-6">
          <div className="grid gap-4 md:grid-cols-2">
            <Input
              placeholder="First Name"
              className="
                h-12
                border-white/10
                bg-zinc-900/80
                text-white
                placeholder:text-zinc-500
                focus-visible:border-amber-500/50
                focus-visible:ring-amber-500/20
              "
            />

            <Input
              placeholder="Last Name"
              className="
                h-12
                border-white/10
                bg-zinc-900/80
                text-white
                placeholder:text-zinc-500
                focus-visible:border-amber-500/50
                focus-visible:ring-amber-500/20
              "
            />
          </div>

          <Input
            placeholder="Company"
            className="
              h-12
              border-white/10
              bg-zinc-900/80
              text-white
              placeholder:text-zinc-500
              focus-visible:border-amber-500/50
              focus-visible:ring-amber-500/20
            "
          />

          <Input
            placeholder="Role / Position"
            className="
              h-12
              border-white/10
              bg-zinc-900/80
              text-white
              placeholder:text-zinc-500
              focus-visible:border-amber-500/50
              focus-visible:ring-amber-500/20
            "
          />

          <Input
            type="email"
            placeholder="Business Email"
            className="
              h-12
              border-white/10
              bg-zinc-900/80
              text-white
              placeholder:text-zinc-500
              focus-visible:border-amber-500/50
              focus-visible:ring-amber-500/20
            "
          />

          <div className="grid gap-4 md:grid-cols-2">
            <Select>
              <SelectTrigger
                className="
                  h-12
                  border-white/10
                  bg-zinc-900/80
                  text-white
                  hover:border-amber-500/30
                "
              >
                <SelectValue placeholder="Market of Interest" />
              </SelectTrigger>

              <SelectContent
                position="popper"
                sideOffset={8}
                className="
                  z-[100]
                  max-h-60
                  overflow-y-auto
                  border-white/10
                  bg-zinc-950
                  text-white
                "
              >
                <SelectItem value="usa">
                  United States
                </SelectItem>

                <SelectItem value="canada">
                  Canada
                </SelectItem>

                <SelectItem value="north-america">
                  North America
                </SelectItem>

                <SelectItem value="europe">
                  Europe
                </SelectItem>

                <SelectItem value="other">
                  Other
                </SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger
                className="
                  h-12
                  border-white/10
                  bg-zinc-900/80
                  text-white
                  hover:border-amber-500/30
                "
              >
                <SelectValue placeholder="Primary Interest" />
              </SelectTrigger>

              <SelectContent
                position="popper"
                sideOffset={8}
                className="
                  z-[100]
                  max-h-60
                  overflow-y-auto
                  border-white/10
                  bg-zinc-950
                  text-white
                "
              >
                <SelectItem value="market-entry">
                  Market Entry Strategy
                </SelectItem>

                <SelectItem value="b2b">
                  B2B Development
                </SelectItem>

                <SelectItem value="trade">
                  Trade Partnerships
                </SelectItem>

                <SelectItem value="expansion">
                  Brand Expansion
                </SelectItem>

                <SelectItem value="distribution">
                  Distribution Networks
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Textarea
            rows={5}
            placeholder="Message (Optional)"
            className="
              min-h-[140px]
              border-white/10
              bg-zinc-900/80
              text-white
              placeholder:text-zinc-500
              focus-visible:border-amber-500/50
              focus-visible:ring-amber-500/20
            "
          />

          <Button
            className="
              h-12
              w-full
              bg-amber-500
              font-medium
              text-black
              transition-all
              hover:bg-amber-400
            "
          >
            Request Access
          </Button>

          <p className="text-center text-xs leading-relaxed text-zinc-500">
            All inquiries are reviewed personally and treated with
            complete confidentiality.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};