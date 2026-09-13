"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Product } from "@/types";
import { formatPrice } from "@/data/products";

interface ProductCarouselProps {
  products: Product[];
}

export default function ProductCarousel({ products }: ProductCarouselProps) {
  const [currentPage, setCurrentPage] = useState(0);
  
  const itemsPerPage = 4;
  const totalPages = Math.ceil(products.length / itemsPerPage);

  useEffect(() => {
    if (totalPages <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 5000); // 5 seconds per page

    return () => clearInterval(interval);
  }, [totalPages]);

  const currentProducts = products.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section className="w-full bg-cream py-16 md:py-24 lg:py-32">
      <div className="container-site">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16 lg:mb-20">
          <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-5">
            <span className="w-5 md:w-10 h-[1px] bg-walnut/30" />
            <span className="font-sans text-[0.5rem] md:text-[0.625rem] uppercase tracking-[0.22em] text-olive font-medium">
              Curated Selection
            </span>
            <span className="w-5 md:w-10 h-[1px] bg-walnut/30" />
          </div>
          <h2 className="font-serif font-light text-[1.5rem] sm:text-[1.875rem] md:text-[2.25rem] lg:text-[2.75rem] leading-[1.05] tracking-[-0.02em] uppercase text-walnut mb-3">
            Latest Arrivals
          </h2>
        </div>

        <div className="relative min-h-[450px] md:min-h-[550px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-10"
            >
              {currentProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.slug}`}
                  className="group block card-hover"
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-cream-dim img-hover">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-full py-2 bg-cream text-walnut font-sans text-[0.625rem] uppercase tracking-[0.14em] font-medium text-center border border-walnut/10">
                        View Details
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 pb-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-sans text-[0.55rem] md:text-[0.625rem] uppercase tracking-[0.14em] text-olive font-medium">
                        {product.categoryLabel}
                      </span>
                    </div>
                    <h3 className="font-serif font-light text-[0.8125rem] text-deep line-clamp-1 leading-[1.6]">
                      {product.name}
                    </h3>
                    <p className="font-sans text-[0.8125rem] text-walnut font-medium">
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
          <div className="flex items-center justify-center gap-3 mt-10 md:mt-14">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`transition-all duration-500 ease-out rounded-full ${
                  i === currentPage
                    ? "w-8 h-1 bg-walnut"
                    : "w-2 h-1 bg-walnut/20 hover:bg-walnut/40"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
