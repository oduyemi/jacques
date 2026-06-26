"use client";
import {Mail, Phone, MapPin} from "lucide-react";
import {FaTwitter, FaLinkedinIn, FaInstagram, FaGithub} from "react-icons/fa";
import { ContactForm } from "./ContactForm";
import { ContactInfoCard } from "./InfoCard";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24"
    >
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-5xl font-bold">
            <span className="bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent">
              Twandikire
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Reka dukore hamwe ikintu gishya
            cy'ejo hazaza
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <ContactForm />
          </div>

          <div className="space-y-6">
            <ContactInfoCard
              title="Email"
              value="jacquesepangue@gmail.com"
              icon={Mail}
              color="from-cyan-500 to-blue-500"
            />

            <ContactInfoCard
              title="Phone"
              value="+250 788 123 456"
              icon={Phone}
              color="from-purple-500 to-pink-500"
            />

            <ContactInfoCard
              title="Aho duba"
              value={
                <>
                  Kigali, Rwanda
                  <br />
                  KG 123 St, Nyarugenge
                </>
              }
              icon={MapPin}
              color="from-green-500 to-emerald-500"
            />

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <h3 className="mb-4 font-semibold text-yellow-400">
                Dukurikire
              </h3>

              <div className="flex gap-4">
                {[FaTwitter, FaLinkedinIn, FaInstagram, FaGithub].map(
                  (Icon, i) => (
                    <button
                      key={i}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:scale-110"
                    >
                      <Icon className="h-4 w-4" />
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}