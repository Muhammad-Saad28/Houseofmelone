"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import { staggerContainer, staggerItem, editorialEase } from "@/lib/animations";

const collections = [
  {
    name: "Shalwar Kameez",
    slug: "shalwar-kameez",
    description: "Refined traditional Pakistani menswear.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB82Icm3J5lAWE4e3GFJgwaJ0G8v2VBP9nW6PjrTruo1pPcJ8rJTEtPHuFQRIVq78PM5nTbdBFliPzywhmhN4QJLcdaPyEKqxYtfC3kxmaFv8uIY27W9yinHSvaHmiGZMaVxb1vwg9zbvH_KSiyzWb2rzVJiHj_JxCzzZ3D10sJlocdL_eQ1Ebtjv-GPZCEznHTMviOZO0neWgt-nPXcRrWrIt7RSI6C_WPLY0iNozbsvvIQvEtatvM",
  },
  {
    name: "Irish Linen",
    slug: "shirts",
    description: "Premium linen shirts for effortless tailoring.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSKY2x0fjCD_NaAitUPMKbvcg7CsmcfYQBZrMT0Hdsn4lPGNpFKQOvBES2vZjLF30AI-3IUhBRUa-emLw8zhPZIGW4xToRd3qbNt0Eo5er2JxiAKrRAoR5J7G3ry3m7kk4mCcNws2Jt6YZNKV1R2HWnSXvdu2iA8TvGp0aK3US4DCdG-ep7pQpB4lHsMlo3r9a3_iJh5LivOLEdgyoKna1YZch4nsXI72hlKgMJhHqB_6Y1brLt3U4",
  },
  {
    name: "Tailored Pants",
    slug: "pants",
    description: "Contemporary tailored trousers.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB82Icm3J5lAWE4e3GFJgwaJ0G8v2VBP9nW6PjrTruo1pPcJ8rJTEtPHuFQRIVq78PM5nTbdBFliPzywhmhN4QJLcdaPyEKqxYtfC3kxmaFv8uIY27W9yinHSvaHmiGZMaVxb1vwg9zbvH_KSiyzWb2rzVJiHj_JxCzzZ3D10sJlocdL_eQ1Ebtjv-GPZCEznHTMviOZO0neWgt-nPXcRrWrIt7RSI6C_WPLY0iNozbsvvIQvEtatvM",
  },
  {
    name: "Matching Sets",
    slug: "matching-sets",
    description: "Coordinated menswear sets.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSKY2x0fjCD_NaAitUPMKbvcg7CsmcfYQBZrMT0Hdsn4lPGNpFKQOvBES2vZjLF30AI-3IUhBRUa-emLw8zhPZIGW4xToRd3qbNt0Eo5er2JxiAKrRAoR5J7G3ry3m7kk4mCcNws2Jt6YZNKV1R2HWnSXvdu2iA8TvGp0aK3US4DCdG-ep7pQpB4lHsMlo3r9a3_iJh5LivOLEdgyoKna1YZch4nsXI72hlKgMJhHqB_6Y1brLt3U4",
  },
  {
    name: "Charsadda Chappal",
    slug: "chappal",
    description: "Traditional handcrafted footwear.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSKY2x0fjCD_NaAitUPMKbvcg7CsmcfYQBZrMT0Hdsn4lPGNpFKQOvBES2vZjLF30AI-3IUhBRUa-emLw8zhPZIGW4xToRd3qbNt0Eo5er2JxiAKrRAoR5J7G3ry3m7kk4mCcNws2Jt6YZNKV1R2HWnSXvdu2iA8TvGp0aK3US4DCdG-ep7pQpB4lHsMlo3r9a3_iJh5LivOLEdgyoKna1YZch4nsXI72hlKgMJhHqB_6Y1brLt3U4",
  },
  {
    name: "Trucker Caps",
    slug: "caps",
    description: "Premium trucker caps.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB82Icm3J5lAWE4e3GFJgwaJ0G8v2VBP9nW6PjrTruo1pPcJ8rJTEtPHuFQRIVq78PM5nTbdBFliPzywhmhN4QJLcdaPyEKqxYtfC3kxmaFv8uIY27W9yinHSvaHmiGZMaVxb1vwg9zbvH_KSiyzWb2rzVJiHj_JxCzzZ3D10sJlocdL_eQ1Ebtjv-GPZCEznHTMviOZO0neWgt-nPXcRrWrIt7RSI6C_WPLY0iNozbsvvIQvEtatvM",
  },
];

export default function CollectionsPage() {
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
                Browse By
              </p>
              <h1 className="font-serif font-light text-[2.375rem] md:text-[3rem] lg:text-[3.75rem] tracking-[-0.02em] text-walnut leading-[1.05]">
                Collections
              </h1>
            </motion.div>
          </section>

          {/* Divider */}
          <div className="container-site">
            <div className="h-[2px] bg-sand/60" />
          </div>

          {/* Collections Grid */}
          <section className="w-full bg-cream pb-24 md:pb-40 lg:pb-56 pt-12 md:pt-16 lg:pt-20">
            <div className="container-site">
              <motion.div
                variants={staggerContainer(0.08)}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-16"
              >
                {collections.map((collection) => (
                  <motion.div key={collection.slug} variants={staggerItem}>
                    <Link
                      href={`/shop?category=${collection.slug}`}
                      className="group block"
                    >
                      <div className="relative aspect-[4/5] overflow-hidden bg-cream-dim mb-5">
                        <img
                          src={collection.image}
                          alt={collection.name}
                          className="w-full h-full object-cover transition-transform duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                        />
                        <div className="absolute inset-x-0 bottom-0 flex justify-center pb-6 opacity-0 group-hover:opacity-100 transition-all duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] translate-y-2 group-hover:translate-y-0 pointer-events-none">
                          <span className="text-[0.5625rem] uppercase tracking-[0.16em] text-walnut bg-cream/90 backdrop-blur-sm px-5 py-2 border border-walnut/10">
                            View Collection →
                          </span>
                        </div>
                      </div>
                      <div>
                        <h2 className="font-serif font-light text-[1.25rem] md:text-[1.375rem] text-deep group-hover:text-walnut transition-colors duration-300 mb-1.5">
                          {collection.name}
                        </h2>
                        <p className="font-sans text-[0.8125rem] text-walnut/60 font-medium">
                          {collection.description}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
