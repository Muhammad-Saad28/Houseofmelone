"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function BrandStory() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="w-full bg-cream-dim section-py">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-center">

          {/* ── Text ── */}
          <div className="lg:col-span-5 space-y-7">

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className="space-y-3"
            >
              <div className="flex items-center gap-3">
                <span className="divider-line" />
                <span className="text-[0.625rem] uppercase tracking-[0.16em] font-semibold text-olive">
                  The House Philosophy
                </span>
              </div>
              <h2 className="font-serif text-[1.75rem] md:text-[2.125rem] lg:text-[2.5rem] leading-[1.08] tracking-[-0.02em] uppercase text-walnut">
                Fashion Should<br />Outlast Trends.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className="space-y-4 text-[0.9rem] leading-[1.8] text-deep/55"
            >
              <p>
                House of Melone was founded on a singular conviction: that
                traditional Pakistani silhouettes possess an innate, sculptural
                elegance that deserves to sit seamlessly alongside the finest
                international tailoring.
              </p>
              <p>
                We discard excess ornamentation in favor of obsessive pattern
                drafting, premium natural fabrics, and understated construction
                details that reveal themselves slowly.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="pt-2 grid grid-cols-3 gap-6 border-t border-sand/50"
            >
              {[
                { value: "4+", label: "Generations of Craft" },
                { value: "100%", label: "Natural Fabrics" },
                { value: "Karachi", label: "Based in Pakistan" },
              ].map((stat) => (
                <div key={stat.label} className="pt-5">
                  <span className="font-serif text-[1.375rem] font-medium text-walnut block">
                    {stat.value}
                  </span>
                  <p className="text-[0.5625rem] uppercase tracking-[0.12em] text-olive/80 mt-1 leading-tight">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Image grid ── */}
          <motion.div
            initial={{ opacity: 0, scale: 1.02 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="lg:col-span-7"
          >
            <div className="grid grid-cols-12 gap-3">
              {/* Tall left image */}
              <div className="col-span-7 aspect-[3/4] overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB82Icm3J5lAWE4e3GFJgwaJ0G8v2VBP9nW6PjrTruo1pPcJ8rJTEtPHuFQRIVq78PM5nTbdBFliPzywhmhN4QJLcdaPyEKqxYtfC3kxmaFv8uIY27W9yinHSvaHmiGZMaVxb1vwg9zbvH_KSiyzWb2rzVJiHj_JxCzzZ3D10sJlocdL_eQ1Ebtjv-GPZCEznHTMviOZO0neWgt-nPXcRrWrIt7RSI6C_WPLY0iNozbsvvIQvEtatvM"
                  alt="House of Melone — Editorial detail"
                  className="w-full h-full object-cover hover:scale-[1.04] transition-transform duration-700 ease-out"
                />
              </div>

              {/* Right column */}
              <div className="col-span-5 flex flex-col gap-3">
                {/* Square image */}
                <div className="aspect-square overflow-hidden">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSKY2x0fjCD_NaAitUPMKbvcg7CsmcfYQBZrMT0Hdsn4lPGNpFKQOvBES2vZjLF30AI-3IUhBRUa-emLw8zhPZIGW4xToRd3qbNt0Eo5er2JxiAKrRAoR5J7G3ry3m7kk4mCcNws2Jt6YZNKV1R2HWnSXvdu2iA8TvGp0aK3US4DCdG-ep7pQpB4lHsMlo3r9a3_iJh5LivOLEdgyoKna1YZch4nsXI72hlKgMJhHqB_6Y1brLt3U4"
                    alt="Charsadda Chappal detail"
                    className="w-full h-full object-cover hover:scale-[1.04] transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Quote block */}
                <div className="flex-1 bg-walnut text-cream p-5 lg:p-6 flex flex-col justify-center">
                  <blockquote className="font-serif text-[1.0625rem] lg:text-[1.1875rem] italic leading-snug">
                    &ldquo;Discipline is the purest expression of
                    luxury.&rdquo;
                  </blockquote>
                  <span className="text-[0.5625rem] uppercase tracking-[0.18em] text-cream/45 mt-3 block">
                    House of Melone
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
