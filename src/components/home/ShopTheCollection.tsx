"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { products, formatPrice } from "@/data/products";
import { editorialEase } from "@/lib/animations";

const COLLECTION_IDS = ["1", "3", "6", "8"];

export default function ShopTheCollection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const collectionProducts = COLLECTION_IDS
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean) as typeof products;

  return (
    <section ref={ref} className="w-full bg-cream">
      <div className="container-site py-20 md:py-32 lg:py-44">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.65, ease: editorialEase }}
          className="mb-12 md:mb-18 lg:mb-20"
        >
          <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-5">
            <span className="w-5 md:w-10 h-[1px] bg-walnut/30" />
            <span className="text-[0.5rem] md:text-[0.625rem] uppercase tracking-[0.2em] text-olive font-medium">
              The Edit
            </span>
          </div>
          <h2 className="font-serif text-[1.5rem] sm:text-[1.875rem] md:text-[2.25rem] lg:text-[2.75rem] leading-[1.05] tracking-[-0.02em] uppercase text-walnut mb-5 md:mb-7">

            Shop The Collection
          </h2>
          <p className="text-[0.65rem] sm:text-[0.75rem] md:text-[0.875rem] leading-[1.7] text-deep/50 max-w-[380px]">
            Explore selected House of Melone essentials.
          </p>
        </motion.div>

        {/* Product grid — 4 desktop, 2 mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {collectionProducts.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.55,
                ease: editorialEase,
                delay: 0.15 + i * 0.08,
              }}
            >
              <Link href={`/products/${product.slug}`} className="group/block block">
                {/* Image */}
                <div className="relative w-full overflow-hidden bg-cream-dim mb-3 md:mb-4" style={{ aspectRatio: "3/4" }}>
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover/block:scale-[1.03]"
                  />
                  {/* Category tag */}
                  <div className="absolute top-2.5 left-2.5 md:top-3.5 md:left-3.5 bg-walnut/85 backdrop-blur-sm text-cream px-2 py-0.5 md:px-2.5 md:py-1 text-[0.4rem] md:text-[0.5rem] uppercase tracking-[0.16em] font-medium">
                    {product.categoryLabel}
                  </div>
                </div>

                {/* Info */}
                <div className="px-0.5">
                  <h3 className="font-serif text-[0.8rem] sm:text-[0.9rem] md:text-[1rem] lg:text-[1.1rem] leading-[1.15] text-walnut uppercase tracking-[-0.01em] mb-1 md:mb-1.5 transition-colors duration-300 group-hover/block:text-deep">
                    {product.name}
                  </h3>
                  <p className="text-[0.6rem] md:text-[0.7rem] text-deep/45 font-medium">
                    {formatPrice(product.price)}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All link */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.5, ease: editorialEase, delay: 0.5 }}
          className="mt-10 md:mt-14 text-center"
        >
          <Link
            href="/shop"
            className="group/view inline-flex items-center gap-2.5 text-[0.6rem] md:text-[0.6875rem] uppercase tracking-[0.18em] text-walnut/70 hover:text-walnut font-medium transition-colors duration-300"
          >
            <span>View All Products</span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="transition-transform duration-300 group-hover/view:translate-x-0.5"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
