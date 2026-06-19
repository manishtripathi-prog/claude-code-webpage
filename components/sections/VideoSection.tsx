"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function VideoSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  const width = useTransform(scrollYProgress, [0, 1], ["80%", "100%"]);
  const radius = useTransform(scrollYProgress, [0, 1], [32, 0]);

  return (
    <section
      id="results"
      ref={containerRef}
      className="flex flex-col items-center justify-center bg-black py-24"
    >
      <div className="mx-auto mb-10 max-w-2xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          See the process in motion
        </h2>
        <p className="mt-4 text-muted-foreground">
          A quick look at how strategy turns into a shipped AI product.
        </p>
      </div>

      <motion.div
        style={{ width, borderRadius: radius }}
        className="relative aspect-video overflow-hidden bg-card"
        data-testid="vision-video-container"
      >
        <video
          className="h-full w-full object-cover"
          src="/brand-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          data-testid="vision-video"
        />
      </motion.div>
    </section>
  );
}
