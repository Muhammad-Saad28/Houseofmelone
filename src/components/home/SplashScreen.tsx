"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Respect reduced motion — skip splash entirely
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setVisible(false);
      onComplete();
      return;
    }

    // Check if splash already shown this session
    const alreadyShown = sessionStorage.getItem("hom-splash-done");
    if (alreadyShown) {
      setVisible(false);
      onComplete();
      return;
    }

    // Sequence: fade in (500ms) → hold (~4000ms) → fade out (400ms) → done
    const exitTimer = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("hom-splash-done", "1");
      // Give exit animation time to finish before revealing hero
      setTimeout(onComplete, 450);
    }, 4500);

    return () => clearTimeout(exitTimer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-[#F2EBDD]"
        >
          {/* Subtle warm glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-sand/8 rounded-full blur-[80px] pointer-events-none" />

          {/* Brand mark */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="relative z-10 flex flex-col items-center"
          >
            {/* Thin line above */}
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="block w-8 h-[1px] bg-walnut/30 mb-6 origin-center"
            />

            {/* Logo text */}
            <h1 className="font-serif text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] font-medium uppercase tracking-[0.28em] text-walnut leading-none">
              House of Melone
            </h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-4 text-[0.55rem] md:text-[0.625rem] uppercase tracking-[0.3em] text-walnut/40 font-medium"
            >
              Statement Redefined
            </motion.p>

            {/* Thin line below */}
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className="block w-8 h-[1px] bg-walnut/30 mt-6 origin-center"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
