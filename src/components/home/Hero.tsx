"use client";

import { motion } from "framer-motion";
import {
  heroImageEnter,
  heroTextReveal,
  heroLinePrimary,
  heroLineSecondary,
  editorialEase,
} from "@/lib/animations";

interface HeroProps {
  animate?: boolean;
}

export default function Hero({ animate = false }: HeroProps) {
  const state = animate ? "visible" : "hidden";

  return (
    <section
      className="relative w-full overflow-hidden -mt-20 lg:-mt-[84px]"
      style={{ height: "100svh", minHeight: "560px", maxHeight: "1000px" }}
    >
      {/* ── Background image — enters from left ── */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 will-change-transform"
          variants={heroImageEnter}
          initial="hidden"
          animate={state}
        >
          {/*
            Ken Burns drift starts at 1400ms and runs for 9s (see globals.css .animate-hero-drift).
            The class is applied only after the entrance animation completes.
          */}
          <img
            src="/hero-bg.jpg"
            alt="House of Melone — Heritage Menswear"
            className={`absolute inset-0 w-full h-full object-cover${animate ? " animate-hero-drift" : ""}`}
            style={{ objectPosition: "60% center" }}
            draggable={false}
          />
        </motion.div>

        {/* ── Left overlay: keeps text readable ── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, rgba(20,12,8,0.65) 0%, rgba(20,12,8,0.35) 45%, transparent 72%)",
          }}
        />

        {/* ── Bottom fade into next section ── */}
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
          <div className="max-w-[560px]">

            {/* Brand label — 850ms */}
            <motion.p
              variants={heroTextReveal}
              initial="hidden"
              animate={state}
              transition={{ duration: 0.6, ease: editorialEase, delay: 0.85 }}
              className="text-[0.875rem] sm:text-[1rem] uppercase tracking-[0.3em] text-white/90 mb-6 md:mb-8 font-semibold"
            >
              HOUSE OF MELONE
            </motion.p>

            {/* Tagline — split into two lines for staggered reveal */}
            <h1
              className="font-serif font-light text-white leading-[1.06] tracking-[0.03em] overflow-hidden"
              style={{ fontSize: "clamp(2.6rem, 5.5vw, 5.5rem)" }}
            >
              {/* "Sartorially" — 1000ms */}
              <motion.span
                className="block"
                variants={heroLinePrimary}
                initial="hidden"
                animate={state}
              >
                Sartorially
              </motion.span>

              {/* "considered." — 1150ms */}
              <motion.span
                className="block"
                variants={heroLineSecondary}
                initial="hidden"
                animate={state}
              >
                considered.
              </motion.span>
            </h1>

            {/* Divider — draws left→right at 1300ms */}
            <motion.span
              initial={{ scaleX: 0, opacity: 0 }}
              animate={
                animate
                  ? { scaleX: 1, opacity: 1 }
                  : { scaleX: 0, opacity: 0 }
              }
              transition={{ duration: 0.7, ease: editorialEase, delay: 1.3 }}
              className="block mt-8 md:mt-10 h-[1px] bg-white/30 origin-left"
              style={{ width: "70px" }}
            />

          </div>
        </div>
      </div>
    </section>
  );
}
