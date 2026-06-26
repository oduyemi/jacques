"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, FileWarning, Stamp, Ship } from "lucide-react";
import { Button } from "@/components/ui/button";





export default function NotFound() {
  return ( 
    <main className="relative h-screen overflow-hidden bg-black">
    <div className="absolute inset-0"> <div className="absolute left-20 top-20 h-[400px] w-[400px] rounded-full bg-amber-500/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-zinc-700/20 blur-[180px]" />
        <div
          className="
          absolute inset-0
          bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),
          linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
          bg-[size:90px_90px]
        "
        />
      </div>

      {/* Giant watermark */}
      <div
        className="
        pointer-events-none
        absolute
        inset-0
        flex
        items-center
        justify-center
        text-[18rem]
        font-black
        tracking-tight
        text-white/[0.03]
        select-none
      "
      >
        404
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-4xl flex-col items-center justify-center px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="
          mb-3
          inline-flex
          items-center
          gap-2
          rounded-full
          border
          border-amber-500/20
          bg-amber-500/10
          px-6
          py-2
        "
        >
          <Stamp className="h-4 w-4 text-amber-400" />
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-amber-300">
            Customs Inspection Notice
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="
          text-4xl md:text-5xl lg:text-6xl
          font-bold
          leading-tight
          tracking-tight
          text-white
        "
        >
          This Page Was
          <span className="block text-amber-400">
            Rejected By Customs
          </span>
        </motion.h1>

        {/* Copy */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="
          mx-auto
          mt-2
          max-w-2xl
          text-sm
          leading-relaxed
          text-zinc-400
        "
        >
          We attempted to export this page successfully.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="
          mx-auto
          mt-2
          max-w-2xl
          text-sm
          leading-relaxed
          text-zinc-400
        "
        >
          Unfortunately, customs requested additional
          documentation, three signatures, a revised
          certificate of origin, and a meeting that
          could have been an email.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-amber-400"
        >
          The shipment is currently delayed.
        </motion.p>

        {/* Customs report */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="
          mx-auto
          mt-6
          max-w-2xl
          overflow-hidden
          rounded-3xl
          border
          border-white/10
          bg-white/[0.03]
          backdrop-blur-xl
        "
        >
          <div
            className="
            flex
            items-center
            gap-3
            border-b
            border-white/10
            px-6
            py-2
          "
          >
            <FileWarning className="h-5 w-5 text-amber-400" />

            <span className="font-medium text-white">
              CUSTOMS INSPECTION REPORT
            </span>
          </div>

          <div className="space-y-4 p-6 text-left text-sm">
            <Row
              label="Shipment"
              value="Requested Web Page"
            />

            <Row
              label="Origin"
              value="jacquesepangue.com"
            />

            <Row
              label="Destination"
              value="Your Browser"
            />

            <Row
              label="Declared Value"
              value="Extremely Important"
            />

            <Row
              label="Inspection Status"
              value="REJECTED"
              valueClass="text-red-400"
            />

            <Row
              label="Reason"
              value="Missing Form 404-B"
              valueClass="text-amber-400"
            />

            <Row
              label="Officer's Notes"
              value='"Nobody seems to know where this page went."'
            />

            <Row
              label="Estimated Clearance"
              value="Pending Further Investigation"
            />
          </div>
        </motion.div>

        {/* Humor section */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-10 text-zinc-500 text-sm"
        >
          <p>We contacted the exporter.</p>
          <p>We contacted the importer.</p>
          <p>We contacted the distributor.</p>

          <p className="mt-4 text-zinc-400">
            Everyone insists the page existed
            yesterday.
          </p>
        </motion.div> */}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-2 flex flex-wrap justify-center gap-4"
        >
          <Button
            asChild
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
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Return To The Safety
            </Link>
          </Button>
        </motion.div>

        {/* Footer joke */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="
          mt-2
          justify-center
          gap-2
          text-sm
          italic
          text-zinc-600
        "
        >
          {/* <Ship className="h-4 w-4" /> */}

          <span>
            A task force has been assembled.
            No further progress has been made.
          </span>
        </motion.div>
      </div>
    </main>
  );
}

    function Row({
    label,
    value,
    valueClass,
    }: {
    label: string;
    value: string;
    valueClass?: string;
    }) {
    return ( <div className="flex items-start justify-between gap-6"> <span className="text-zinc-500">{label}</span>

      <span
        className={`max-w-[60%] text-right text-white ${valueClass ?? ""}`}
      >
        {value}
      </span>
    </div>
    

    );
  }
