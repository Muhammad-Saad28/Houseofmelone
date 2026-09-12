"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function Newsletter() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section ref={ref} className="w-full bg-[#2a1d17] text-cream pt-20 pb-16 lg:pt-24 lg:pb-20">
      <div className="container-site">
        <div className="max-w-[620px] mx-auto text-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="space-y-4 mb-8"
          >
            <div className="inline-flex items-center gap-3 justify-center">
              <span className="w-6 h-[1px] bg-cream/30" />
              <span className="text-[0.625rem] uppercase tracking-[0.18em] text-cream/50 font-medium">
                Stay in the Know
              </span>
              <span className="w-6 h-[1px] bg-cream/30" />
            </div>
            <h2 className="font-serif text-[1.75rem] md:text-[2.25rem] lg:text-[2.625rem] tracking-[-0.02em] uppercase leading-tight">
              Join the House
            </h2>
            <p className="text-[0.9rem] text-cream/50 max-w-[440px] mx-auto leading-relaxed">
              Discover new collections, seasonal releases, and stories from
              House of Melone.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          >
            {submitted ? (
              <div className="py-6 px-8 border border-cream/15 inline-block">
                <p className="text-[0.9rem] text-cream/70">
                  Welcome to House of Melone. You&apos;ll hear from us soon.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row items-stretch max-w-[480px] mx-auto gap-2"
              >
                <input
                  type="email"
                  placeholder="Your email address"
                  required
                  className="flex-1 bg-cream/10 border border-cream/15 px-5 py-3.5 text-cream placeholder:text-cream/35 text-[0.875rem] focus:outline-none focus:border-cream/30 transition-colors"
                />
                <button
                  type="submit"
                  className="px-7 py-3.5 bg-cream text-walnut text-[0.6875rem] uppercase tracking-[0.16em] font-semibold hover:bg-cream-dim transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            )}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-5 text-[0.5625rem] uppercase tracking-[0.14em] text-cream/25"
          >
            Complimentary shipping on your first order &bull; Unsubscribe anytime
          </motion.p>

        </div>
      </div>
    </section>
  );
}
