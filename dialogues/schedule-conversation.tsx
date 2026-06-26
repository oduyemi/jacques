"use client";
import { ReactNode } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";



interface ScheduleConversationDialogProps {
  children: ReactNode;
}



export const ScheduleConversationDialog = ({children}: ScheduleConversationDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent
        className="
          max-w-3xl
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
            Schedule a Conversation
          </DialogTitle>

          <DialogDescription className="text-zinc-400">
            Let's discuss your goals, market opportunities, and
            expansion strategy.
          </DialogDescription>
        </DialogHeader>

        <form className="space-y-6 pt-6">
          {/* Name & Company */}
          <div className="grid gap-4 md:grid-cols-2">
            <Input
              placeholder="Full Name"
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
              placeholder="Company Name"
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

          {/* Position & Email */}
          <div className="grid gap-4 md:grid-cols-2">
            <Input
              placeholder="Position / Title"
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
          </div>

          {/* Phone */}
          <Input
            placeholder="Phone Number"
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

          {/* Website */}
          <Input
            placeholder="Company Website"
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

          {/* Market & Business Type */}
          <div className="grid gap-4 md:grid-cols-2">
            <Select>
              <SelectTrigger
                className="
                  h-12
                  border-white/10
                  bg-zinc-900/80
                  text-white
                  hover:border-amber-500/30
                  focus:ring-amber-500/20
                "
              >
                <SelectValue placeholder="Current Market" />
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
                <SelectItem
                  value="france"
                  className="
                    text-white
                    data-[highlighted]:bg-amber-500/20
                    data-[highlighted]:text-white
                  "
                >
                  France
                </SelectItem>

                <SelectItem
                  value="europe"
                  className="
                    text-white
                    data-[highlighted]:bg-amber-500/20
                    data-[highlighted]:text-white
                  "
                >
                  Europe
                </SelectItem>

                <SelectItem
                  value="usa"
                  className="
                    text-white
                    data-[highlighted]:bg-amber-500/20
                    data-[highlighted]:text-white
                  "
                >
                  United States
                </SelectItem>

                <SelectItem
                  value="canada"
                  className="
                    text-white
                    data-[highlighted]:bg-amber-500/20
                    data-[highlighted]:text-white
                  "
                >
                  Canada
                </SelectItem>

                <SelectItem
                  value="international"
                  className="
                    text-white
                    data-[highlighted]:bg-amber-500/20
                    data-[highlighted]:text-white
                  "
                >
                  International
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
                  focus:ring-amber-500/20
                "
              >
                <SelectValue placeholder="Business Type" />
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
                <SelectItem
                  value="producer"
                  className="
                    text-white
                    data-[highlighted]:bg-amber-500/20
                    data-[highlighted]:text-white
                  "
                >
                  Food Producer
                </SelectItem>

                <SelectItem
                  value="beverage"
                  className="
                    text-white
                    data-[highlighted]:bg-amber-500/20
                    data-[highlighted]:text-white
                  "
                >
                  Beverage Producer
                </SelectItem>

                <SelectItem
                  value="exporter"
                  className="
                    text-white
                    data-[highlighted]:bg-amber-500/20
                    data-[highlighted]:text-white
                  "
                >
                  Exporter
                </SelectItem>

                <SelectItem
                  value="distributor"
                  className="
                    text-white
                    data-[highlighted]:bg-amber-500/20
                    data-[highlighted]:text-white
                  "
                >
                  Distributor
                </SelectItem>

                <SelectItem
                  value="retail"
                  className="
                    text-white
                    data-[highlighted]:bg-amber-500/20
                    data-[highlighted]:text-white
                  "
                >
                  Retail Brand
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Discussion */}
          <Textarea
            rows={6}
            placeholder="What would you like to discuss?"
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

          {/* Timeline */}
          <Select>
            <SelectTrigger
              className="
                h-12
                border-white/10
                bg-zinc-900/80
                text-white
                hover:border-amber-500/30
                focus:ring-amber-500/20
              "
            >
              <SelectValue placeholder="Timeline" />
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
              <SelectItem
                value="immediate"
                className="
                  text-white
                  data-[highlighted]:bg-amber-500/20
                  data-[highlighted]:text-white
                "
              >
                Immediate
              </SelectItem>

              <SelectItem
                value="3months"
                className="
                  text-white
                  data-[highlighted]:bg-amber-500/20
                  data-[highlighted]:text-white
                "
              >
                Within 3 Months
              </SelectItem>

              <SelectItem
                value="6months"
                className="
                  text-white
                  data-[highlighted]:bg-amber-500/20
                  data-[highlighted]:text-white
                "
              >
                Within 6 Months
              </SelectItem>

              <SelectItem
                value="exploring"
                className="
                  text-white
                  data-[highlighted]:bg-amber-500/20
                  data-[highlighted]:text-white
                "
              >
                Exploring Options
              </SelectItem>
            </SelectContent>
          </Select>

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
            Request Consultation
          </Button>

          <p className="text-center text-xs leading-relaxed text-zinc-500">
            Your information will remain strictly confidential and
            will be reviewed directly.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};