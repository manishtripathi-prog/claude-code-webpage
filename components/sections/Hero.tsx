"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-32 pb-20 md:px-20 md:pt-44 md:pb-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            <span className="block text-lg font-semibold tracking-widest text-blue-400 uppercase sm:text-xl">
              Manish Tripathi
            </span>
            Turn AI hype into{" "}
            <span className="text-blue-400">shipped product</span>.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            I help founders and product teams cut through the noise and ship
            AI-powered features that customers actually use &mdash; with a
            hands-on strategy, build, and advisory process built for speed.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button
              asChild
              size="lg"
              className="h-12 px-8 text-base shadow-[0_0_0_0_rgba(59,130,246,0.6)] transition-shadow hover:shadow-[0_0_30px_4px_rgba(59,130,246,0.45)]"
            >
              <a href="#contact">{siteConfig.ctaPrimary}</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base">
              <a href="#services">{siteConfig.ctaSecondary}</a>
            </Button>
          </div>
        </div>

        <motion.div
          className="relative mx-auto aspect-[4/5] w-full max-w-md"
          animate={{ y: [0, -16, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/manish-hero.svg"
            alt={`Portrait of ${siteConfig.name}`}
            fill
            priority
            className="rounded-3xl object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
