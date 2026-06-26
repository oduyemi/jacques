"use client";
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";




export const ScheduleConversationDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="lg"
          className="
          h-14
          rounded-full
          border-white/15
          bg-white/[0.03]
          text-white
        "
        >
          Schedule A Conversation
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-3xl border-white/10 bg-black text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl">
            Schedule a Conversation
          </DialogTitle>

          <DialogDescription className="text-zinc-400">
            Let's discuss your goals, market
            opportunities and expansion strategy.
          </DialogDescription>
        </DialogHeader>

        <form className="space-y-5 pt-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Input placeholder="Full Name" />

            <Input placeholder="Company Name" />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Input placeholder="Position / Title" />

            <Input
              type="email"
              placeholder="Business Email"
            />
          </div>

          <Input placeholder="Phone Number" />

          <Input placeholder="Company Website" />

          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Current Market" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="france">
                France
              </SelectItem>

              <SelectItem value="europe">
                Europe
              </SelectItem>

              <SelectItem value="usa">
                United States
              </SelectItem>

              <SelectItem value="canada">
                Canada
              </SelectItem>

              <SelectItem value="international">
                International
              </SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Business Type" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="producer" className="text-white">
                Food Producer
              </SelectItem>

              <SelectItem value="beverage">
                Beverage Producer
              </SelectItem>

              <SelectItem value="exporter">
                Exporter
              </SelectItem>

              <SelectItem value="distributor">
                Distributor
              </SelectItem>

              <SelectItem value="retail">
                Retail Brand
              </SelectItem>
            </SelectContent>
          </Select>

          <Textarea
            rows={5}
            placeholder="What would you like to discuss?"
          />

          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Timeline" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="immediate">
                Immediate
              </SelectItem>

              <SelectItem value="3months">
                Within 3 Months
              </SelectItem>

              <SelectItem value="6months">
                Within 6 Months
              </SelectItem>

              <SelectItem value="exploring">
                Exploring Options
              </SelectItem>
            </SelectContent>
          </Select>

          <Button
            className="
            w-full
            bg-amber-500
            text-black
            hover:bg-amber-400
          "
          >
            Request Consultation
          </Button>

          <p className="text-xs text-zinc-500">
            Your information will remain strictly
            confidential and will be reviewed directly.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}