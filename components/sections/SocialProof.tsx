"use client";

import { motion } from "framer-motion";
import { partnerLogos } from "@/lib/data";

export function SocialProof() {
  const track = [...partnerLogos, ...partnerLogos];

  return (
    <section className="border-y border-white/10 bg-black py-10">
      <p className="mb-6 text-center text-xs uppercase tracking-widest text-muted-foreground">
        Trusted by teams at
      </p>
      <div className="relative overflow-hidden">
        <motion.div
          className="flex w-max gap-16 px-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        >
          {track.map((logo, i) => (
            <span
              key={`${logo}-${i}`}
              className="text-xl font-semibold whitespace-nowrap text-muted-foreground grayscale select-none"
            >
              {logo}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
