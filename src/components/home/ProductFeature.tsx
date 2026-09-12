"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Product } from "@/types";
import { formatPrice } from "@/lib/utils";
import { editorialEase } from "@/lib/animations";

interface ProductFeatureProps {
  product: Product;
  imagePosition: "left" | "right";
  index: number;
}

export default function ProductFeature({
  product,
  imagePosition,
  index,
}: ProductFeatureProps) {
  const isLeft = imagePosition === "left";
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <div ref={sectionRef} className="w-full">
      <div
        className="flex items-center w-full gap-6 md:gap-10 lg:gap-16"
        style={{ flexDirection: isLeft ? "row" : "row-reverse" }}
      >
        {/* IMAGE — with scroll reveal + hover scale */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05, y: 15 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 1.05, y: 15 }}
          transition={{ duration: 0.9, ease: editorialEase, delay: 0.2 }}
          className="w-[35%] md:w-[32%] flex justify-center items-center"
        >
          <Link href={`/products/${product.slug}`} className="block w-full">
            <div
              className="group/img relative w-full overflow-hidden bg-cream-dim shadow-lg shadow-walnut/8"
              style={{ aspectRatio: "3/4" }}
            >
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-600 ease-out group-hover/img:scale-[1.03]"
              />
              {/* Category badge */}
              <div className="absolute top-3 left-3 md:top-5 md:left-5 bg-walnut/90 backdrop-blur-sm text-cream px-2.5 py-1 md:px-4 md:py-1.5 text-[0.5rem] md:text-[0.625rem] uppercase tracking-[0.18em] font-medium">
                {product.categoryLabel}
              </div>
              {/* Index label */}
              <div className="absolute bottom-3 right-3 md:bottom-5 md:right-5 font-serif text-[1.5rem] md:text-[2.5rem] font-light text-cream/25 leading-none select-none">
                0{index + 1}
              </div>
            </div>
          </Link>
        </motion.div>

        {/* TEXT — with scroll reveal, richer layout */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 35 }}
          transition={{ duration: 0.75, ease: editorialEase }}
          className="w-[65%] md:w-[68%] flex flex-col justify-center pl-2 md:pl-6 lg:pl-10"
        >
          {/* Section label with vertical accent */}
          <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
            <span className="w-5 md:w-10 h-[1px] bg-walnut/25" />
            <span className="text-[0.5rem] md:text-[0.625rem] uppercase tracking-[0.22em] text-olive font-medium">
              {String(index + 1).padStart(2, "0")} — {product.homepageSection}
            </span>
          </div>

          {/* Product name — larger, bolder */}
          <h3 className="font-serif text-[1.375rem] sm:text-[1.75rem] md:text-[2.5rem] lg:text-[3rem] leading-[1.02] tracking-[-0.02em] uppercase text-walnut mb-6 md:mb-9">
            {product.name}
          </h3>

          {/* Description with left border accent */}
          <div className="flex gap-3 md:gap-4 mb-7 md:mb-11">
            <span className="w-[2px] h-auto bg-walnut/15 flex-shrink-0 self-stretch" />
            <p className="text-[0.6rem] sm:text-[0.75rem] md:text-[0.875rem] leading-[1.8] md:leading-[2] text-deep/50 max-w-[360px]">
              {product.homepageDescription}
            </p>
          </div>

          {/* Price + Colors — refined row */}
          <div className="flex items-center gap-8 md:gap-12 mb-8 md:mb-12">
            <div className="flex flex-col">
              <span className="text-[0.4rem] md:text-[0.5rem] uppercase tracking-[0.2em] text-olive/60 mb-1.5">
                Price
              </span>
              <span className="font-serif text-[1rem] md:text-[1.25rem] lg:text-[1.375rem] font-medium text-walnut">
                {formatPrice(product.price)}
              </span>
            </div>
            {product.colors.length > 1 && (
              <div className="flex flex-col">
                <span className="text-[0.4rem] md:text-[0.5rem] uppercase tracking-[0.2em] text-olive/60 mb-1.5">
                  Colors
                </span>
                <div className="flex items-center gap-2.5">
                  {product.colors.map((c) => (
                    <span
                      key={c.name}
                      className="w-3.5 h-3.5 md:w-4 md:h-4 border border-sand/50 shadow-sm"
                      style={{ backgroundColor: c.hex }}
                      title={c.name}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="w-10 md:w-14 h-[1px] bg-sand/40 mb-8 md:mb-12" />


          {/* CTA — with hover sweep */}
          <div>
            <Link
              href={`/products/${product.slug}`}
              className="group/cta relative inline-flex items-center gap-2.5 md:gap-3 px-6 md:px-10 py-3 md:py-4 bg-walnut text-cream text-[0.5rem] md:text-[0.6875rem] uppercase tracking-[0.2em] font-medium overflow-hidden transition-colors duration-500"
            >
              <span className="absolute inset-0 bg-deep translate-y-full group-hover/cta:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
              <span className="relative z-10">Explore Collection</span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="relative z-10 md:w-3.5 md:h-3.5 transition-transform duration-300 group-hover/cta:translate-x-0.5"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
