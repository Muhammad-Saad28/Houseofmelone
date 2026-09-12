"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface HeroProps {
  animate?: boolean;
}

export default function Hero({ animate = false }: HeroProps) {
  return (
    <section className="relative w-full bg-[#f4eee4] overflow-hidden border-b border-sand/30">
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-sand/10 rounded-full blur-[100px] pointer-events-none translate-x-1/4 -translate-y-1/4" />

      <div className="container-site py-10 md:py-16 lg:py-24 relative z-10">
        <div className="flex w-full items-stretch min-h-[400px] lg:min-h-[580px] gap-2 md:gap-6 lg:gap-10">
          {/* LEFT: TEXT */}
          <div className="w-[55%] flex justify-end">
            <div className="flex flex-col justify-center w-full max-w-[460px] pr-2 md:pr-6">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={animate ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
                className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6"
              >
                <span className="w-6 md:w-10 h-[1px] bg-walnut" />
                <span className="text-[0.55rem] md:text-[0.6875rem] uppercase tracking-[0.2em] font-semibold text-walnut/70 leading-tight">
                  Modern Heritage
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 28 }}
                animate={animate ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
                className="font-serif text-[1.625rem] sm:text-[2.25rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[4.75rem] leading-[1.02] tracking-[-0.03em] text-walnut uppercase mb-5 md:mb-8"
              >
                Timeless
                <br />
                <span className="italic font-light text-walnut/90">
                  Refined.
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={animate ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
                className="text-[0.65rem] sm:text-[0.75rem] md:text-[0.9375rem] leading-[1.7] md:leading-[1.8] text-deep/65 mb-6 md:mb-7 max-w-[400px]"
              >
                Premium Pakistani menswear crafted from natural fabrics. Italian
                Wash &amp; Wear shalwar kameez, Irish linen, and Charsadda
                chappal.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={animate ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.65 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 md:gap-3.5"
              >
                <Link
                  href="/shop"
                  className="group/btn inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#241914] text-[#fff8f3] text-[0.6875rem] uppercase tracking-[0.14em] font-semibold transition-colors duration-200 hover:bg-[#2d1600] shadow-sm"
                >
                  <span>Shop New Arrivals</span>
                  <span className="inline-block transition-transform duration-200 ease-out group-hover/btn:translate-x-0.5">
                    &rarr;
                  </span>
                </Link>
                <Link
                  href="/about"
                  className="group/btn2 inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#fcebd8] text-[#221a0e] text-[0.6875rem] uppercase tracking-[0.14em] font-semibold transition-colors duration-200 hover:bg-[#f0e0cd]"
                >
                  <span>Explore Collections</span>
                </Link>
              </motion.div>
            </div>
          </div>

          {/* RIGHT: IMAGE — enters from LEFT inside clipped container */}
          <div className="w-[45%] flex justify-start items-center pl-2 md:pl-4">
            <motion.div
              initial={{ x: "-100%", opacity: 0, scale: 1.03 }}
              animate={
                animate
                  ? { x: 0, opacity: 1, scale: 1 }
                  : { x: "-100%", opacity: 0, scale: 1.03 }
              }
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full h-auto aspect-[3/4] max-w-[360px] overflow-hidden bg-cream-dim shadow-2xl shadow-walnut/10"
            >
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnFi_WgJS4z8BeWkO8yj5UEiwDpD-VBCdqg4pRUyiDn7Uozqov_YPmWrKJJpCWTbsN2nMRoqdKw67aGp1LgcFcSLM9JwBaByk9I2-JlUsFlvdrVtCIlncNgJfjbvbkDp0F5QsSH9jc2T6Sk5kOHUHnOpQaYWshdw6HlLMGrojmyqekvj2emRexsjyC1IXoYwV2MTKfyqYD-a-jpeMAta9EUMvIe7_IOGAoREAsatJYbTp76K7gDKJu"
                alt="House of Melone — Irish Linen Editorial"
                className="w-full h-full object-cover"
                style={{ objectPosition: "center top" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-walnut/50 via-walnut/10 to-transparent" />

              <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6 flex flex-col justify-end text-cream">
                <p className="text-[0.5rem] md:text-[0.625rem] uppercase tracking-[0.2em] text-cream/80 mb-1.5 md:mb-2 font-medium">
                  SS25 Editorial
                </p>
                <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-2">
                  <h3 className="font-serif text-[0.9rem] md:text-[1.25rem] tracking-tight leading-none text-cream">
                    Relaxed Linen
                  </h3>
                  <span className="text-[0.6rem] md:text-[0.75rem] font-semibold tracking-[0.1em] text-cream">
                    Rs. 10,000
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
