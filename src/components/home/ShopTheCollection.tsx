"use client";

import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Product } from "@/types";
import { formatPrice } from "@/lib/utils";
import { revealText, editorialEase } from "@/lib/animations";

export default function ShopTheCollection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [collectionProducts, setCollectionProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(collectionProducts.length / itemsPerPage);

  useEffect(() => {
    async function fetchCollection() {
      try {
        const res = await fetch("/api/products");
        const allProducts: Product[] = await res.json();
        // Prefer featured products; fall back to first 8 if none are flagged
        const featured = allProducts.filter((p) => p.featured);
        setCollectionProducts((featured.length > 0 ? featured : allProducts).slice(0, 8));
      } catch (error) {
        console.error("Error fetching collection:", error);
      }
    }
    fetchCollection();
  }, []);

  useEffect(() => {
    if (totalPages <= 1) return;
    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 5000); // 5 seconds per page
    return () => clearInterval(interval);
  }, [totalPages]);

  const currentProducts = collectionProducts.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section ref={ref} className="w-full bg-cream">
      <div className="container-site pt-20 pb-32 md:pt-32 md:pb-44 lg:pt-44 lg:pb-56 overflow-hidden">

        {/* Section header */}
        <motion.div
          variants={revealText}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-12 md:mb-16 lg:mb-20"
        >
          <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-5">
            <span className="w-5 md:w-10 h-[1px] bg-walnut/25" />
            <span className="font-sans text-[0.5rem] md:text-[0.625rem] uppercase tracking-[0.22em] text-olive font-medium">
              The Edit
            </span>
          </div>
          <h2 className="font-serif font-light text-[1.5rem] sm:text-[1.875rem] md:text-[2.25rem] lg:text-[2.75rem] leading-[1.05] tracking-[-0.02em] uppercase text-walnut mb-4 md:mb-6">
            Shop The Collection
          </h2>
          <p className="font-sans text-[0.65rem] sm:text-[0.75rem] md:text-[0.875rem] leading-[1.7] text-deep/45 max-w-[360px] text-justify hyphens-auto mx-auto font-medium">
            Selected House of Melone essentials, curated for you.
          </p>
        </motion.div>

        {/* Product Carousel Grid */}
        <div className="relative min-h-[500px] md:min-h-[550px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.6, ease: editorialEase }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 absolute w-full"
            >
              {currentProducts.map((product, i) => (
                <Link key={product.id} href={`/products/${product.slug}`} className="group/card block">
                  {/* Image */}
                  <div
                    className="relative w-full overflow-hidden bg-cream-dim mb-3 md:mb-4"
                    style={{ aspectRatio: "3/4" }}
                  >
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-600 ease-out group-hover/card:scale-[1.025]"
                    />

                  </div>

                  {/* Info */}
                  <div className="px-0.5">
                    <h3 className="font-serif font-light text-[0.8rem] sm:text-[0.9rem] md:text-[1rem] lg:text-[1.05rem] leading-[1.15] text-walnut uppercase tracking-[-0.01em] mb-1 md:mb-1.5 transition-colors duration-300 group-hover/card:text-deep">
                      {product.name}
                      {/* Arrow appears on hover */}
                      <span className="inline-block ml-1.5 opacity-0 translate-x-0 group-hover/card:opacity-100 group-hover/card:translate-x-0.5 transition-all duration-300 text-[0.6em]">
                        →
                      </span>
                    </h3>
                    <p className="font-sans text-[0.6rem] md:text-[0.7rem] text-deep/40 font-medium">
                      {formatPrice(product.price)}
                    </p>
                  </div>
                </Link>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Dots */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-3 mt-14 md:mt-20">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`transition-all duration-500 ease-out rounded-full ${i === currentPage
                  ? "w-8 h-1 bg-walnut"
                  : "w-2 h-1 bg-walnut/20 hover:bg-walnut/40"
                  }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        )}

        {/* View All */}
        <div className="mt-12 md:mt-20 text-center relative z-10">
          <Link
            href="/shop"
            className="group/view inline-flex items-center gap-2.5 font-sans text-[0.6rem] md:text-[0.6875rem] uppercase tracking-[0.18em] text-walnut/60 hover:text-walnut font-medium transition-colors duration-300"
          >
            <span className="nav-link-slide">View All Products</span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="transition-transform duration-300 group-hover/view:translate-x-1"
            >

              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
        <br></br>
        <br></br>
      </div>
    </section>
  );
}
