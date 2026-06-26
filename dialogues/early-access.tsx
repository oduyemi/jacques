"use client";
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight } from "lucide-react";


export const EarlyAccessDialog = () => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          size="lg"
          className="
          h-14
          rounded-full
          bg-amber-500
          px-8
          text-black
          hover:bg-amber-400
        "
        >
          Request Early Access
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-2xl border-white/10 bg-black text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl">
            Request Early Access
          </DialogTitle>

          <DialogDescription className="text-zinc-400">
            Be among the first to receive updates,
            insights and launch announcements.
          </DialogDescription>
        </DialogHeader>

        <form className="space-y-5 pt-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Input placeholder="First Name" />

            <Input placeholder="Last Name" />
          </div>

          <Input placeholder="Company" />

          <Input placeholder="Role / Position" />

          <Input
            type="email"
            placeholder="Business Email"
          />

          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Market of Interest" />
            </SelectTrigger>

            <SelectContent>
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
            <SelectTrigger>
              <SelectValue placeholder="Primary Interest" />
            </SelectTrigger>

            <SelectContent>
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

          <Textarea
            rows={4}
            placeholder="Message (Optional)"
          />

          <Button
            className="
            w-full
            bg-amber-500
            text-black
            hover:bg-amber-400
          "
          >
            Request Access
          </Button>

          <p className="text-xs text-zinc-500">
            All inquiries are reviewed personally
            and treated with complete confidentiality.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}