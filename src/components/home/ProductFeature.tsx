"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Product } from "@/types";
import { formatPrice } from "@/lib/utils";
import { revealText, revealImage, editorialEase } from "@/lib/animations";

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

  const imageCol = (
    <motion.div
      variants={revealImage}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      /*
        Keep a minimum width on mobile so the image stays visible.
        On desktop the column is wider. flex-shrink-0 prevents collapse.
      */
      className="w-[42%] md:w-[40%] flex-shrink-0 flex justify-center items-start"
    >
      <Link href={`/products/${product.slug}`} className="block w-full">
        <div
          className="group/img relative w-full overflow-hidden bg-cream-dim"
          style={{ aspectRatio: "3/4" }}
        >
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/img:scale-[1.025]"
          />

          {/* Index label */}
          <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 font-serif text-[1.25rem] md:text-[2rem] font-light text-cream/20 leading-none select-none">
            0{index + 1}
          </div>
        </div>
      </Link>
    </motion.div>
  );

  const textCol = (
    <motion.div
      variants={revealText}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`flex-1 flex flex-col justify-center ${
        isLeft ? "pl-4 md:pl-8 lg:pl-14" : "pr-4 md:pr-8 lg:pr-14"
      }`}
    >
      {/* Section label */}
      <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
        <span className="w-4 md:w-8 h-[1px] bg-walnut/25 flex-shrink-0" />
        <span className="font-sans text-[0.45rem] md:text-[0.5625rem] uppercase tracking-[0.22em] text-olive font-medium whitespace-nowrap">
          {String(index + 1).padStart(2, "0")} — {product.categoryLabel}
        </span>
      </div>

      {/* Product name */}
      <h3 className="font-serif font-light text-[1rem] sm:text-[1.375rem] md:text-[2rem] lg:text-[2.625rem] leading-[1.04] tracking-[-0.01em] uppercase text-walnut mb-4 md:mb-7">
        {product.name}
      </h3>

      {/* Description */}
      <div className="flex gap-2 md:gap-3 mb-5 md:mb-9">
        <span className="w-[1.5px] bg-walnut/12 flex-shrink-0 self-stretch" />
        <p className="font-sans text-[0.55rem] sm:text-[0.6875rem] md:text-[0.8125rem] leading-[1.75] md:leading-[2] text-deep/45 max-w-[340px] text-justify hyphens-auto font-medium">
          {product.homepageDescription}
        </p>
      </div>

      {/* Price */}
      <div className="flex flex-col mb-6 md:mb-10">
        <span className="text-[0.4rem] md:text-[0.5rem] uppercase tracking-[0.2em] text-olive/50 mb-1">
          Price
        </span>
        <span className="font-sans text-[0.875rem] md:text-[1.125rem] lg:text-[1.25rem] font-medium text-walnut">
          {formatPrice(product.price)}
        </span>
      </div>

      {/* Divider */}
      <div className="w-8 md:w-12 h-[1px] bg-sand/35 mb-5 md:mb-9" />

      {/* CTA */}
      <div>
        <Link
          href={`/products/${product.slug}`}
          className="group/cta relative inline-flex items-center gap-2 md:gap-3 px-5 md:px-8 py-2.5 md:py-3.5 bg-walnut text-cream font-sans text-[0.45rem] md:text-[0.625rem] uppercase tracking-[0.2em] font-medium overflow-hidden transition-colors duration-500"
        >
          <span
            className="absolute inset-0 bg-deep translate-y-full group-hover/cta:translate-y-0 transition-transform duration-500"
            style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
          />
          <span className="relative z-10">Shop Now</span>
          <svg
            width="10"
            height="10"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="relative z-10 md:w-3 md:h-3 transition-transform duration-300 group-hover/cta:translate-x-0.5"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );

  return (
    <div ref={sectionRef} className="w-full">
      {/*
        Always side-by-side — on mobile the image col is 42% wide, text col fills the rest.
        imagePosition alternates left/right via flex-row / flex-row-reverse.
        We never collapse to a single column so the editorial rhythm is preserved on all screens.
      */}
      <div
        className="flex items-center w-full gap-4 md:gap-10 lg:gap-16"
        style={{ flexDirection: isLeft ? "row" : "row-reverse" }}
      >
        {imageCol}
        {textCol}
      </div>
    </div>
  );
}
