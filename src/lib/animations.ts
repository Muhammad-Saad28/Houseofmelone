import type { Variants, Transition } from "framer-motion";

// ─── Core easing ─────────────────────────────────────────────
// Premium editorial ease — used across all animations
export const editorialEase = [0.22, 1, 0.36, 1] as const;

// ─── Shared transitions ──────────────────────────────────────
export const fadeTransition: Transition = {
  duration: 0.7,
  ease: editorialEase,
};

export const slowFadeTransition: Transition = {
  duration: 0.9,
  ease: editorialEase,
};

export const imageRevealTransition: Transition = {
  duration: 0.8,
  ease: editorialEase,
};

// ─── Scroll-triggered variants ──────────────────────────────
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: editorialEase,
    },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: editorialEase,
    },
  },
};

export const scaleReveal: Variants = {
  hidden: { opacity: 0, scale: 1.04 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: editorialEase,
    },
  },
};

// ─── Scroll-reveal variants (unified system for all sections) ───
// Text: opacity 0→1, y 20→0
export const revealText: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: editorialEase },
  },
};

// Image: opacity 0→1, scale 1.04→1, y 15→0 — starts 200ms after text
export const revealImage: Variants = {
  hidden: { opacity: 0, scale: 1.04, y: 15 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.9, ease: editorialEase, delay: 0.2 },
  },
};

// ─── Product section variants (aliases for backward compat) ────
export const productTextVariants: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: editorialEase,
    },
  },
};

export const productImageVariants: Variants = {
  hidden: { opacity: 0, scale: 1.05, y: 15 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: editorialEase,
    },
  },
};


// ─── Hero entrance variants ─────────────────────────────────
// Image enters from LEFT inside its clipped container
export const heroImageVariants: Variants = {
  hidden: {
    x: "-100%",
    opacity: 0,
    scale: 1.03,
  },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// Hero full-background image — rises from bottom, settles at ~1000ms
export const heroImageEnter: Variants = {
  hidden: { y: "25%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 1.0,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/** @deprecated kept for backward compat — use heroImageEnter */
export const heroImageRise = heroImageEnter;


export const heroTextReveal: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: editorialEase,
    },
  },
};

// Individual hero tagline lines — used for the split "Sartorially" / "considered." reveal
export const heroLinePrimary: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: editorialEase, delay: 1.0 },
  },
};

export const heroLineSecondary: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: editorialEase, delay: 1.15 },
  },
};

export const heroDescriptionReveal: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: editorialEase,
    },
  },
};

export const heroCtaReveal: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: editorialEase,
    },
  },
};

// ─── Stagger container ──────────────────────────────────────
export const staggerContainer = (staggerChildren = 0.06): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren,
    },
  },
});

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: editorialEase,
    },
  },
};

// ─── Mobile menu variants ───────────────────────────────────
export const mobileMenuOverlay: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.25 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

export const mobileMenuPanel: Variants = {
  hidden: { x: "-100%" },
  visible: {
    x: 0,
    transition: {
      duration: 0.38,
      ease: editorialEase,
    },
  },
  exit: {
    x: "-100%",
    transition: {
      duration: 0.3,
      ease: editorialEase,
    },
  },
};

// ─── Cart drawer variants ───────────────────────────────────
export const cartOverlay: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.25 },
  },
};

export const cartPanel: Variants = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: {
      duration: 0.4,
      ease: editorialEase,
    },
  },
  exit: {
    x: "100%",
    transition: {
      duration: 0.35,
      ease: editorialEase,
    },
  },
};

// ─── Header variants ────────────────────────────────────────
export const headerLoad: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: editorialEase,
      delay: 0.1,
    },
  },
};

// ─── Footer variants ────────────────────────────────────────
export const footerReveal: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: editorialEase,
    },
  },
};
