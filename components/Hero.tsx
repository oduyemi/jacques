"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EarlyAccessDialog } from "@/dialogues/early-access";
import { ScheduleConversationDialog } from "@/dialogues/schedule-conversation";



export const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute right-0 top-0 h-[700px] w-[700px] rounded-full bg-amber-500/10 blur-[180px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-zinc-700/20 blur-[140px]" />
        <div
          className="
          absolute inset-0
          bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),
          linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
          bg-[size:90px_90px]
        "
        />
      </div>

      {/* Watermark */}
      <div
        className="
        pointer-events-none
        absolute
        left-0
        top-24
        hidden
        select-none
        text-[12rem]
        font-black
        tracking-tight
        text-white/[0.03]
        xl:block
      "
      >
        JACQUES
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-20 pt-8">
        <div className="grid w-full gap-16 lg:grid-cols-2">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            {/* Badge */}
            <div
              className="
              mb-8
              inline-flex
              w-fit
              items-center
              gap-2
              rounded-full
              border
              border-amber-500/20
              bg-amber-500/10
              px-4
              py-2
            "
            >
              <span className="h-2 w-2 rounded-full bg-amber-400" />
              <span className="text-sm font-medium tracking-widest text-amber-300">
                COMING SOON
              </span>
            </div>
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-zinc-500">
              Jacques Epangue
            </p>
            <h1
              className="
              text-4xl md:text-5xl lg:text-6xl
              font-bold
              leading-[0.95]
              tracking-tight
              text-white"
            >
              Transforming
              <span className="block text-amber-400">
                French Food Excellence
              </span>
              Into North American
              <span className="block">Market Success</span>
            </h1>
            <p
              className="
              mt-4
              max-w-2xl
              text-md
              leading-relaxed
              text-zinc-400
            "
            >
              Jacques Epangue helps French food producers,
              exporters, and emerging culinary brands enter
              and thrive in North American markets through
              strategic trade development, B2B partnerships,
              and commercial growth initiatives.
            </p>

            {/* Expertise */}
            <div
              className="
              mt-4
              border-l-2
              border-amber-400
              pl-6
            "
            >
              <div className="space-y-2 text-zinc-300">
                <p>International Trade Strategy</p>
                <p>B2B Market Development</p>
                <p>Food & Beverage Expansion</p>
                <p>Cross-Border Commercial Growth</p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-2 flex flex-wrap gap-4 mt-3">
                <EarlyAccessDialog>
                    <Button
                        size="lg"
                        className="h-14 rounded-full bg-amber-500 px-8 text-black hover:bg-amber-400"
                    >
                        Request Early Access
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    </EarlyAccessDialog>

                    <ScheduleConversationDialog>
                    <Button
                        variant="outline"
                        size="lg"
                        className="h-14 rounded-full border-white/15 bg-white/[0.03] text-white"
                    >
                        Schedule a Conversation
                    </Button>
                    </ScheduleConversationDialog>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Trade Route */}
            <TradeRoute />

            {/* Portrait */}
            <div
              className="
              relative
              mx-auto
              h-[700px]
              overflow-hidden
              rounded-[40px]
              border
              border-white/10
            "
            >
              <Image
                src="/images/jacques.jpg"
                alt="Jacques Epangue"
                fill
                priority
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              {/* Credentials Card */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="
                absolute
                bottom-8
                left-8
                max-w-sm
                rounded-3xl
                border
                border-white/10
                bg-black/50
                p-6
                backdrop-blur-xl
              "
              >
                <p className="text-lg font-semibold text-white">
                  Jacques Epangue
                </p>

                <p className="mt-2 text-zinc-300">
                    International Trade Strategist
                </p>

                <p className="text-zinc-400">
                    Food & Beverage Market Expansion
                </p>

                <p className="mt-3 text-sm text-amber-400">
                  Consulting for Culinary Excellence
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="mt-10 flex flex-wrap gap-4">
        <EarlyAccessDialog />
        <ScheduleConversationDialog />
    </div>
    </section>
  );
}


function TradeRoute() {
  return (
    <div
      className="
      pointer-events-none
      absolute
      -left-24
      top-20
      z-10
      hidden
      lg:block
    "
    >
      <svg width="500" height="300">
        <motion.circle
          cx="80"
          cy="150"
          r="8"
          fill="#f59e0b"
        />

        <motion.circle
          cx="420"
          cy="120"
          r="8"
          fill="#f59e0b"
        />

        <motion.path
          d="M80 150 C180 40, 320 40, 420 120"
          fill="transparent"
          stroke="#f59e0b"
          strokeWidth="2"
          strokeDasharray="8 8"
          initial={{
            pathLength: 0,
          }}
          animate={{
            pathLength: 1,
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
          }}
        />

        <text
          x="40"
          y="180"
          fill="#f59e0b"
          fontSize="14"
        >
          France
        </text>

        <text
          x="380"
          y="100"
          fill="#f59e0b"
          fontSize="14"
        >
          North America
        </text>
      </svg>
    </div>
  );
}