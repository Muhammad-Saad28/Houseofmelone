"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem, fadeUp, editorialEase } from "@/lib/animations";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="w-full bg-cream py-20 md:py-32 lg:py-44 border-b border-sand/30">
          <motion.div 
            variants={staggerContainer(0.15)}
            initial="hidden"
            animate="visible"
            className="max-w-[700px] mx-auto px-5 md:px-8 text-center space-y-6 md:space-y-8"
          >
            <motion.span variants={staggerItem} className="block text-[0.625rem] uppercase tracking-[0.14em] font-semibold text-olive">
              Our Story
            </motion.span>
            <motion.h1 variants={staggerItem} className="font-serif text-[2rem] md:text-[2.75rem] lg:text-[3.25rem] leading-[1.1] tracking-[-0.02em] uppercase text-walnut">
              Statement Redefined.
            </motion.h1>
            <motion.p variants={staggerItem} className="text-[0.9375rem] lg:text-[1.0625rem] leading-[1.85] text-deep/60 max-w-lg mx-auto">
              House of Melone was founded on a singular conviction: that
              traditional Pakistani silhouettes possess an innate, sculptural
              elegance that deserves to sit seamlessly alongside the finest
              international tailoring.
            </motion.p>
          </motion.div>
        </section>

        {/* Content */}
        <section className="w-full bg-cream py-20 md:py-32 lg:py-44">
          <div className="container-site">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
                variants={staggerContainer(0.15)}
                className="space-y-12 md:space-y-16"
              >
                <motion.div variants={staggerItem} className="space-y-5">
                  <h2 className="font-serif text-[1.375rem] md:text-[1.75rem] tracking-[-0.02em] uppercase text-walnut">
                    Timeless Fashion
                  </h2>
                  <p className="text-[0.875rem] leading-[1.85] text-deep/60">
                    We believe clothing should outlast trends. Every piece in our
                    collection is designed with classic silhouettes, refined
                    details, and an understated sophistication that transcends
                    seasonal fashion.
                  </p>
                </motion.div>

                <motion.div variants={staggerItem} className="space-y-5">
                  <h2 className="font-serif text-[1.375rem] md:text-[1.75rem] tracking-[-0.02em] uppercase text-walnut">
                    Natural Fabrics
                  </h2>
                  <p className="text-[0.875rem] leading-[1.85] text-deep/60">
                    From Italian Wash &amp; Wear to premium Irish linen, we
                    source fabrics that breathe, age beautifully, and feel
                    exceptional against the skin. Natural materials are at the
                    heart of everything we create.
                  </p>
                </motion.div>

                <motion.div variants={staggerItem} className="space-y-5">
                  <h2 className="font-serif text-[1.375rem] md:text-[1.75rem] tracking-[-0.02em] uppercase text-walnut">
                    Heritage Craftsmanship
                  </h2>
                  <p className="text-[0.875rem] leading-[1.85] text-deep/60">
                    Our Charsadda Chappals are handcrafted by master cobblers in
                    Khyber Pakhtunkhwa, carrying forward four generations of
                    leather-working tradition. Each pair is shaped individually,
                    honoring the artisanal integrity of the original craft.
                  </p>
                </motion.div>
              </motion.div>

              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
                variants={staggerContainer(0.15)}
                className="space-y-8 md:space-y-12"
              >
                <motion.div variants={fadeUp} className="aspect-[4/5] overflow-hidden">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB82Icm3J5lAWE4e3GFJgwaJ0G8v2VBP9nW6PjrTruo1pPcJ8rJTEtPHuFQRIVq78PM5nTbdBFliPzywhmhN4QJLcdaPyEKqxYtfC3kxmaFv8uIY27W9yinHSvaHmiGZMaVxb1vwg9zbvH_KSiyzWb2rzVJiHj_JxCzzZ3D10sJlocdL_eQ1Ebtjv-GPZCEznHTMviOZO0neWgt-nPXcRrWrIt7RSI6C_WPLY0iNozbsvvIQvEtatvM"
                    alt="House of Melone — Editorial"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                <motion.div variants={fadeUp} className="bg-walnut text-cream p-8 md:p-12">
                  <blockquote className="font-serif text-[1.25rem] italic leading-snug">
                    &ldquo;We discard excess ornamentation in favor of obsessive
                    pattern drafting and premium natural fabrics.&rdquo;
                  </blockquote>
                  <span className="text-[0.625rem] uppercase tracking-[0.2em] text-cream/45 mt-6 block">
                    House of Melone
                  </span>
                </motion.div>

                <motion.div variants={staggerContainer(0.1)} className="grid grid-cols-3 gap-6 pt-4">
                  <motion.div variants={staggerItem}>
                    <span className="font-serif text-[1.375rem] md:text-[1.75rem] font-medium text-walnut block mb-2">
                      4+
                    </span>
                    <span className="text-[0.55rem] md:text-[0.625rem] uppercase tracking-[0.14em] text-olive leading-[1.6] block">
                      Generations of Craft
                    </span>
                  </motion.div>
                  <motion.div variants={staggerItem}>
                    <span className="font-serif text-[1.375rem] md:text-[1.75rem] font-medium text-walnut block mb-2">
                      100%
                    </span>
                    <span className="text-[0.55rem] md:text-[0.625rem] uppercase tracking-[0.14em] text-olive leading-[1.6] block">
                      Natural Fabrics
                    </span>
                  </motion.div>
                  <motion.div variants={staggerItem}>
                    <span className="font-serif text-[1.375rem] md:text-[1.75rem] font-medium text-walnut block mb-2">
                      Karachi
                    </span>
                    <span className="text-[0.55rem] md:text-[0.625rem] uppercase tracking-[0.14em] text-olive leading-[1.6] block">
                      Based in Pakistan
                    </span>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
