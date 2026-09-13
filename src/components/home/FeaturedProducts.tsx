"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Product } from "@/types";
import { formatPrice } from "@/lib/utils";

interface FeaturedProductsProps {
  products: Product[];
}

export default function FeaturedProducts({ products }: FeaturedProductsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="w-full bg-cream section-py">
      <div className="container-site">

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="mb-10 lg:mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="divider-line" />
              <span className="font-sans text-[0.625rem] uppercase tracking-[0.16em] font-medium text-olive">
                The Collection
              </span>
            </div>
            <h2 className="font-serif font-light text-[1.75rem] md:text-[2.125rem] lg:text-[2.5rem] tracking-[-0.02em] uppercase text-walnut">
              Curated Essentials
            </h2>
            <p className="font-sans text-[0.875rem] text-deep/50 mt-2 max-w-sm font-medium">
              Designed for everyday ease, climate resilience, and enduring
              distinction.
            </p>
          </div>
          <Link
            href="/shop"
            className="self-start sm:self-end flex items-center gap-2 font-sans text-[0.6875rem] uppercase tracking-[0.14em] font-medium text-walnut border-b border-walnut/40 pb-0.5 hover:border-walnut transition-colors whitespace-nowrap"
          >
            View All
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </motion.div>

        {/* ── Product grid ── */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{
                duration: 0.6,
                delay: i * 0.07,
                ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
              }}
            >
              <Link href={`/products/${product.slug}`} className="group block">

                {/* Product image */}
                <div className="relative aspect-[3/4] overflow-hidden bg-cream-dim mb-3.5">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500 ease-out"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-full py-2.5 bg-walnut text-cream text-[0.5625rem] uppercase tracking-[0.16em] font-semibold text-center">
                      Quick View
                    </div>
                  </div>
                </div>

                {/* Product info */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-[0.5625rem] uppercase tracking-[0.12em] text-olive font-medium">
                      {product.categoryLabel}
                    </span>
                    <div className="flex items-center gap-1">
                      {product.colors.slice(0, 4).map((c) => (
                        <span
                          key={c.name}
                          className="w-2 h-2 border border-sand/50"
                          style={{ backgroundColor: c.hex }}
                        />
                      ))}
                    </div>
                  </div>
                  <h3 className="font-serif font-light text-[0.875rem] text-deep line-clamp-1 leading-snug">
                    {product.name}
                  </h3>
                  <p className="font-sans text-[0.875rem] text-walnut font-medium">
                    {formatPrice(product.price)}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
