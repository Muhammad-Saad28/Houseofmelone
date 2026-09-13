"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { revealText, editorialEase } from "@/lib/animations";

export default function Newsletter() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section ref={ref} className="w-full bg-[#EAE0D5] border-t border-walnut/10">
      <div className="container-site py-24 md:py-32 lg:py-40 flex flex-col items-center justify-center text-center">
        <br></br>
        <div className="max-w-[720px] w-full flex flex-col items-center">
          {/* Label */}
          <motion.div
            variants={revealText}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex items-center gap-3 mb-8 md:mb-10"
          >
            <span className="w-6 md:w-12 h-[1px] bg-walnut/25" />
            <span className="font-sans text-[0.55rem] md:text-[0.6875rem] uppercase tracking-[0.25em] text-olive font-medium">
              Stay in the Know
            </span>
            <span className="w-6 md:w-12 h-[1px] bg-walnut/25" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, ease: editorialEase, delay: 0.08 }}
            className="font-serif font-light text-[2rem] sm:text-[2.75rem] md:text-[3.5rem] leading-[1.05] tracking-[-0.01em] uppercase text-walnut mb-8 md:mb-10"
          >
            Join the House
          </motion.h2>

          {/* Supporting text */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.6, ease: editorialEase, delay: 0.16 }}
            className="font-sans text-[0.8rem] md:text-[0.95rem] leading-[1.8] text-deep/60 mb-12 md:mb-16 max-w-[500px] font-medium"
          >
            New collections, seasonal releases and stories from House of Melone delivered quietly to your inbox.
          </motion.p>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.6, ease: editorialEase, delay: 0.24 }}
            className="w-full max-w-[440px]"
          >
            {submitted ? (
              <p className="font-sans text-[0.9rem] text-walnut/90 py-4 border-b border-walnut/20 font-medium">
                Welcome to House of Melone. You&apos;ll hear from us soon.
              </p>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row items-center gap-4 w-full"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full sm:flex-1 bg-cream-dim/50 border border-walnut/20 px-5 py-3.5 font-sans text-[0.875rem] text-walnut placeholder:text-deep/40 focus:outline-none focus:border-walnut/50 transition-colors duration-300 text-center sm:text-left font-medium"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-walnut text-cream px-8 py-3.5 font-sans text-[0.625rem] uppercase tracking-[0.2em] font-medium hover:bg-deep transition-colors duration-300"
                >
                  Subscribe
                </button>
              </form>
            )}

            <br></br>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
