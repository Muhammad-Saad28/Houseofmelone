"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { editorialEase } from "@/lib/animations";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface HeroProps {
  animate?: boolean;
}

/* ── Cinematic easing ───────────────────────────────────── */
const EASE_CINEMATIC: [number, number, number, number] = [0.16, 1, 0.3, 1];

/* ── Background entrance — rises from below ─────────────── */
const bgVariants = {
  hidden:  { y: "100%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 1.2, ease: EASE_CINEMATIC, delay: 0 },
  },
  reduced: { y: "0%", opacity: 1, transition: { duration: 0 } },
} as const;

/* ── Text fade-up variants ──────────────────────────────── */
const textVariant = (delay: number) => ({
  hidden:  { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: editorialEase, delay },
  },
  reduced: { opacity: 1, y: 0, transition: { duration: 0 } },
});

const dividerVariant = (delay: number) => ({
  hidden:  { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.7, ease: editorialEase, delay },
  },
  reduced: { scaleX: 1, opacity: 1, transition: { duration: 0 } },
});

export default function Hero({ animate = false }: HeroProps) {
  const prefersReduced = useReducedMotion();



  /* ── Animation state ────────────────────────────────────── */
  const state: "hidden" | "visible" | "reduced" = !animate
    ? "hidden"
    : prefersReduced
    ? "reduced"
    : "visible";

  /* ── Parallax tracking (Mouse + Gyro) ─────────────────── */
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  useEffect(() => {
    // Desktop mouse movement
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2; // -1 to 1
      const y = (e.clientY / window.innerHeight - 0.5) * 2; // -1 to 1
      rawX.set(x);
      rawY.set(y);
    };

    // Mobile device orientation (gyroscope)
    const onOrientation = (e: DeviceOrientationEvent) => {
      if (e.gamma === null || e.beta === null) return;
      const maxTilt = 45;
      const gamma = Math.max(-maxTilt, Math.min(maxTilt, e.gamma));
      let beta = e.beta - 45; // Offset for typical holding angle
      beta = Math.max(-maxTilt, Math.min(maxTilt, beta));
      
      rawX.set(gamma / maxTilt);
      rawY.set(beta / maxTilt);
    };

    // We wait for the entrance animation to finish (~1.2s) before enabling
    let active = false;
    const timer = setTimeout(() => {
      active = true;
      window.addEventListener("mousemove", onMove, { passive: true });
      window.addEventListener("deviceorientation", onOrientation, { passive: true });
    }, 1200);

    return () => {
      clearTimeout(timer);
      if (active) {
        window.removeEventListener("mousemove", onMove);
        window.removeEventListener("deviceorientation", onOrientation);
      }
    };
  }, [rawX, rawY]);

  /* ── Spring config for subtle model movement ──────────── */
  const springCfg = { stiffness: 60, damping: 20, mass: 0.5 };
  const modelX = useSpring(useTransform(rawX, [-1, 1], [-15, 15]), springCfg);
  const modelY = useSpring(useTransform(rawY, [-1, 1], [-15, 15]), springCfg);

  /* ── Text delays — start after background settles (~1.1s) ── */
  const td = (base: number) => (prefersReduced ? 0 : base);

  return (
    <section
      className="relative w-full overflow-hidden -mt-20 lg:-mt-[84px]"
      style={{ height: "100svh", minHeight: "560px", maxHeight: "1000px" }}
    >
      {/* ── Background image ── */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 will-change-transform"
          variants={bgVariants}
          initial="hidden"
          animate={state}
        >
          <img
            src="/background1.png"
            alt=""
            aria-hidden
            draggable={false}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </motion.div>

        {/* ── Model Image — Subtle parallax ── */}
        <motion.div
          className="absolute inset-0 z-10 pointer-events-none overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0, ease: EASE_CINEMATIC, delay: 0.5 }}
          style={{ x: modelX, y: modelY }}
        >
          <img
            src="/model1.png"
            alt=""
            draggable={false}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-auto h-[65%] md:h-[70%] max-w-none object-contain object-bottom"
          />
        </motion.div>

        {/* Gradient overlay — text legibility */}
        <div
          className="absolute inset-0 pointer-events-none z-20"
          style={{
            background:
              "linear-gradient(to right, rgba(20,12,8,0.7) 0%, rgba(20,12,8,0.3) 50%, transparent 80%)",
          }}
        />
      </div>

      {/* ── Hero text ── */}
      <div className="relative z-30 h-full flex items-center">
        <div className="container-site w-full">
          <div className="max-w-[560px]">

            {/* Brand label — 1.3s */}
            <motion.p
              variants={textVariant(td(1.3))}
              initial="hidden"
              animate={state}
              className="text-[0.875rem] sm:text-[1rem] uppercase tracking-[0.3em] text-white/90 mb-6 md:mb-8 font-semibold"
            >
              HOUSE OF MELONE
            </motion.p>

            {/* Heading */}
            <h1
              className="font-serif font-light text-white leading-[1.06] tracking-[0.03em] overflow-hidden"
              style={{ fontSize: "clamp(2.6rem, 5.5vw, 5.5rem)" }}
            >
              {/* Line 1 — 1.55s */}
              <motion.span
                className="block"
                variants={textVariant(td(1.55))}
                initial="hidden"
                animate={state}
              >
                Sartorially
              </motion.span>

              {/* Line 2 — 1.75s */}
              <motion.span
                className="block"
                variants={textVariant(td(1.75))}
                initial="hidden"
                animate={state}
              >
                considered.
              </motion.span>
            </h1>

            {/* Divider — 2.0s */}
            <motion.span
              variants={dividerVariant(td(2.0))}
              initial="hidden"
              animate={state}
              className="block mt-8 md:mt-10 h-[1px] bg-white/30 origin-left"
              style={{ width: "70px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
