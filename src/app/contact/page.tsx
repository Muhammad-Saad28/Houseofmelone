"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import { editorialEase } from "@/lib/animations";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Header />
      <div id="page-content">
        <main className="flex-1">
          {/* Header */}
          <section className="w-full bg-cream pt-20 md:pt-24 lg:pt-28 pb-10 md:pb-14 lg:pb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: editorialEase }}
              className="container-site"
            >
              <p className="font-sans text-[0.625rem] md:text-[0.6875rem] uppercase tracking-[0.2em] text-olive font-medium mb-3 md:mb-4">
                Get in Touch
              </p>
              <h1 className="font-serif font-light text-[2.375rem] md:text-[3rem] lg:text-[3.75rem] tracking-[-0.02em] text-walnut leading-[1.05]">
                Contact Us
              </h1>
            </motion.div>
          </section>

          {/* Divider */}
          <div className="container-site">
            <div className="h-[2px] bg-sand/60" />
          </div>

          {/* Content */}
          <section className="w-full bg-cream pb-24 md:pb-40 lg:pb-56 pt-12 md:pt-16 lg:pt-20">
            <div className="container-site">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                {/* Form */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: editorialEase, delay: 0.1 }}
                >
                  <h2 className="font-serif font-light text-[1.5rem] md:text-[1.75rem] text-walnut mb-2">
                    Send us a message
                  </h2>
                  <p className="font-sans text-[0.875rem] text-deep/50 font-medium mb-10">
                    We typically respond within 24 hours.
                  </p>

                  {submitted ? (
                    <div className="py-12 text-center">
                      <p className="font-serif font-light text-[1.25rem] text-walnut mb-2">
                        Thank you.
                      </p>
                      <p className="font-sans text-[0.875rem] text-deep/50 font-medium">
                        We&apos;ll be in touch shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="space-y-6">
                        <div>
                          <label className="font-sans text-[0.625rem] uppercase tracking-[0.2em] text-olive font-medium block mb-3">
                            Name
                          </label>
                          <input
                            type="text"
                            required
                            className="w-full bg-transparent border-b border-sand/60 py-3 font-sans text-[0.9375rem] text-deep placeholder:text-deep/30 focus:outline-none focus:border-walnut transition-colors duration-300 font-medium"
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <label className="font-sans text-[0.625rem] uppercase tracking-[0.2em] text-olive font-medium block mb-3">
                            Email
                          </label>
                          <input
                            type="email"
                            required
                            className="w-full bg-transparent border-b border-sand/60 py-3 font-sans text-[0.9375rem] text-deep placeholder:text-deep/30 focus:outline-none focus:border-walnut transition-colors duration-300 font-medium"
                            placeholder="your@email.com"
                          />
                        </div>
                        <div>
                          <label className="font-sans text-[0.625rem] uppercase tracking-[0.2em] text-olive font-medium block mb-3">
                            Message
                          </label>
                          <textarea
                            required
                            rows={5}
                            className="w-full bg-transparent border-b border-sand/60 py-3 font-sans text-[0.9375rem] text-deep placeholder:text-deep/30 focus:outline-none focus:border-walnut transition-colors duration-300 resize-none font-medium"
                            placeholder="How can we help?"
                          />
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="px-10 py-4 bg-walnut text-cream font-sans text-[0.6875rem] uppercase tracking-[0.2em] font-semibold hover:bg-deep transition-colors duration-300"
                      >
                        Send Message
                      </button>
                    </form>
                  )}
                </motion.div>

                {/* Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: editorialEase, delay: 0.2 }}
                  className="space-y-12"
                >
                  <div>
                    <h3 className="font-sans text-[0.625rem] uppercase tracking-[0.2em] text-olive font-medium mb-4">
                      Visit Us
                    </h3>
                    <p className="font-sans text-[0.9375rem] text-deep leading-[1.8] font-medium">
                      House of Melone<br />
                      Karachi, Pakistan
                    </p>
                  </div>

                  <div>
                    <h3 className="font-sans text-[0.625rem] uppercase tracking-[0.2em] text-olive font-medium mb-4">
                      Email
                    </h3>
                    <a
                      href="mailto:houseofmelone@gmail.com"
                      className="font-sans text-[0.9375rem] text-deep hover:text-walnut transition-colors duration-300 font-medium"
                    >
                      houseofmelone@gmail.com
                    </a>
                  </div>

                  <div>
                    <h3 className="font-sans text-[0.625rem] uppercase tracking-[0.2em] text-olive font-medium mb-4">
                      Phone
                    </h3>
                    <a
                      href="tel:+923372388118"
                      className="font-sans text-[0.9375rem] text-deep hover:text-walnut transition-colors duration-300 font-medium"
                    >
                      +92 337 2388118
                    </a>
                  </div>

                  <div>
                    <h3 className="font-sans text-[0.625rem] uppercase tracking-[0.2em] text-olive font-medium mb-4">
                      Hours
                    </h3>
                    <p className="font-sans text-[0.9375rem] text-deep leading-[1.8] font-medium">
                      Monday — Friday<br />
                      11 AM — 6 PM (PKT)
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
