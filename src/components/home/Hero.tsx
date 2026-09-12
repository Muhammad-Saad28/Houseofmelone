"use client";

import { motion } from "framer-motion";
import { heroImageRise, heroTextReveal, heroDescriptionReveal, editorialEase } from "@/lib/animations";

interface HeroProps {
  animate?: boolean;
}

export default function Hero({ animate = false }: HeroProps) {
  const state = animate ? "visible" : "hidden";

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "100svh", minHeight: "560px", maxHeight: "1000px" }}
    >
      {/* ── Background image — rises from bottom ── */}
      {/*
        Outer wrapper: clips the rising image so it doesn't bleed outside
        the section during its travel. overflow-hidden is on this div, NOT
        on the section (the section needs to be a normal block element so
        the next section follows naturally without a gap).
      */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 will-change-transform"
          variants={heroImageRise}
          initial="hidden"
          animate={state}
        >
          {/* Slight scale-up so no blank stripe is visible at start of rise */}
          <img
            src="/hero-bg.jpg"
            alt="House of Melone — Heritage Menswear"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              objectPosition: "60% center",
            }}
            draggable={false}
          />
        </motion.div>

        {/* ── Left overlay: keeps text readable without darkening photo ── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, rgba(20,12,8,0.62) 0%, rgba(20,12,8,0.32) 45%, transparent 72%)",
          }}
        />

        {/* ── Bottom fade into next section background colour ── */}
        <div
          className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, transparent, rgba(242,235,221,0.35))",
          }}
        />
      </div>

      {/* ── Text — left-aligned, vertically centred ── */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container-site w-full">
          <div className="max-w-[520px]">

            {/* Brand label */}
            <motion.p
              variants={heroTextReveal}
              initial="hidden"
              animate={state}
              transition={{ duration: 0.7, ease: editorialEase, delay: 0.55 }}
              className="text-[0.6rem] sm:text-[0.6875rem] uppercase tracking-[0.32em] text-white/65 mb-6 md:mb-8 font-medium"
            >
              House of Melone
            </motion.p>

            {/* Tagline — the hero's single headline */}
            <motion.h1
              variants={heroTextReveal}
              initial="hidden"
              animate={state}
              transition={{ duration: 0.85, ease: editorialEase, delay: 0.72 }}
              className="font-serif font-light text-white leading-[1.08] tracking-[0.04em]"
              style={{
                fontSize: "clamp(2.6rem, 5.5vw, 5.5rem)",
              }}
            >
              Sartorially
              <br />
              <span className="italic">considered.</span>
            </motion.h1>

            {/* Thin accent line */}
            <motion.span
              initial={{ scaleX: 0, opacity: 0 }}
              animate={animate ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
              transition={{ duration: 0.9, ease: editorialEase, delay: 1.05 }}
              className="block mt-8 md:mt-10 w-10 md:w-14 h-[1px] bg-white/35 origin-left"
            />

          </div>
        </div>
      </div>
    </section>
  );
}
