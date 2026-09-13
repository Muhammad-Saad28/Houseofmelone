"use client";

import { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import { Product, Category } from "@/types";
import { formatPrice } from "@/lib/utils";
import {
  editorialEase,
  staggerContainer,
  staggerItem,
} from "@/lib/animations";

interface CategoryFilter {
  slug: string;
  label: string;
  count: number;
}

function ShopContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") as Category | null;

  const [activeFilter, setActiveFilter] = useState<string>(
    initialCategory || "all"
  );

  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<CategoryFilter[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [productsRes, categoriesRes] = await Promise.all([
          fetch("/api/products"),
          fetch("/api/categories"),
        ]);

        const productsData = await productsRes.json();
        const categoriesData = await categoriesRes.json();

        setProducts(productsData);
        setCategories(categoriesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const filtered =
    activeFilter === "all"
      ? products
      : products.filter((p) => p.category === activeFilter);

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
              <br></br>
              <p className="font-sans text-[0.625rem] md:text-[0.6875rem] uppercase tracking-[0.2em] text-olive font-medium mb-3 md:mb-4">
                Full Catalog
              </p>

              <h1 className="font-serif font-light text-[2.375rem] md:text-[3rem] lg:text-[3.75rem] tracking-[-0.02em] text-walnut leading-[1.05]">
                Shop All
              </h1>
            </motion.div>
          </section>

          {/* Divider */}
          <div className="container-site">
            <div className="h-[1px] bg-sand/60" />
          </div>
          <br></br>
          {/* Filters */}
          <section className="w-full bg-cream pt-8 md:pt-10 lg:pt-12 pb-10 md:pb-14 lg:pb-16">
            <div className="container-site">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.15,
                  ease: editorialEase,
                }}
                className="flex items-center gap-5 md:gap-7 overflow-x-auto scrollbar-none px-1 py-3"
              >
                {/* ALL */}
                <button
                  onClick={() => setActiveFilter("all")}
                  className={`
                    relative
                    shrink-0
                    pb-2
                    font-sans
                    text-[12px] md:text-[13.5px]
                    uppercase
                    tracking-[0.2em]
                    whitespace-nowrap
                    transition-colors
                    duration-300
                    ${
                      activeFilter === "all"
                        ? "text-walnut font-semibold"
                        : "text-walnut/50 font-medium hover:text-walnut"
                    }
                  `}
                >
                  All

                  {activeFilter === "all" && (
                    <span className="absolute left-0 right-0 bottom-0 h-[1px] bg-walnut" />
                  )}
                </button>

                {/* Categories */}
                {categories.map((cat) => (
                  <button
                    key={cat.slug}
                    onClick={() => setActiveFilter(cat.slug)}
                    className={`
                      relative
                      shrink-0
                      pb-2
                      font-sans
                      text-[12px] md:text-[13.5px]
                      uppercase
                      tracking-[0.2em]
                      whitespace-nowrap
                      transition-colors
                      duration-300
                      ${
                        activeFilter === cat.slug
                          ? "text-walnut font-semibold"
                          : "text-walnut/50 font-medium hover:text-walnut"
                      }
                    `}
                  >
                    {cat.label}

                    {activeFilter === cat.slug && (
                      <span className="absolute left-0 right-0 bottom-0 h-[1px] bg-walnut" />
                    )}
                  </button>
                ))}
              </motion.div>
            </div>
          </section>
          <br></br>
          {/* Product Grid */}
          <section className="w-full bg-cream pb-24 md:pb-40 lg:pb-56">
            <div className="container-site">
              {loading ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 md:gap-x-8 md:gap-y-14 lg:gap-x-9 lg:gap-y-16">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="animate-pulse">
                      <div className="relative aspect-[3/4] bg-sand/40 mb-4 md:mb-5"></div>
                      <div className="space-y-2.5">
                        <div className="h-2 bg-sand/40 w-1/3"></div>
                        <div className="h-3 bg-sand/40 w-3/4"></div>
                        <div className="h-3 bg-sand/40 w-1/4 mt-1.5"></div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : filtered.length === 0 ? (
                <div className="text-center py-24">
                  <p className="font-serif font-light text-xl text-walnut/60 mb-2">
                    No products found
                  </p>

                  <p className="font-sans text-[0.6875rem] uppercase tracking-[0.12em] text-olive font-medium">
                    Try selecting a different category
                  </p>
                </div>
              ) : (
                <motion.div
                  variants={staggerContainer(0.06)}
                  initial="hidden"
                  animate="visible"
                  key={activeFilter}
                  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 md:gap-x-8 md:gap-y-14 lg:gap-x-9 lg:gap-y-16"
                >
                  {filtered.map((product) => (
                    <motion.div key={product.id} variants={staggerItem}>
                      <Link
                        href={`/products/${product.slug}`}
                        className="group block"
                      >
                        <div className="relative aspect-[3/4] overflow-hidden bg-cream-dim mb-4 md:mb-5">
                          <img
                            src={product.images[0]}
                            alt={product.name}
                            className="w-full h-full object-cover transition-transform duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                          />

                          <div className="absolute inset-x-0 bottom-0 flex justify-center pb-5 opacity-0 group-hover:opacity-100 transition-all duration-[450ms] translate-y-2 group-hover:translate-y-0 pointer-events-none">
                            <span className="text-[0.5625rem] uppercase tracking-[0.16em] text-walnut bg-cream/90 backdrop-blur-sm px-5 py-2 border border-walnut/10">
                              View Product →
                            </span>
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <div className="flex items-start justify-between gap-3">
                            <div className="min-w-0">
                              <p className="font-sans text-[0.5625rem] md:text-[0.625rem] uppercase tracking-[0.16em] text-olive font-medium mb-1">
                                {product.categoryLabel}
                              </p>

                              <h3 className="font-serif font-light text-[0.8125rem] md:text-[0.875rem] text-deep leading-[1.4] line-clamp-2 group-hover:text-walnut transition-colors duration-300">
                                {product.name}
                              </h3>
                            </div>

                            {product.colors.length > 0 && (
                              <div className="flex items-center gap-1.5 mt-1 shrink-0">
                                {product.colors.map((c) => (
                                  <span
                                    key={c.name}
                                    className="w-[10px] h-[10px] md:w-3 md:h-3 rounded-full border border-sand/70 transition-transform duration-250 group-hover:scale-110"
                                    style={{ backgroundColor: c.hex }}
                                  />
                                ))}
                              </div>
                            )}
                          </div>

                          <p className="font-sans text-[0.75rem] md:text-[0.8125rem] text-walnut/75 font-medium tracking-[0.02em]">
                            {formatPrice(product.price)}
                          </p>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default function ShopPage() {
  return (
    <Suspense
      fallback={
        <>
          <Header />

          <div id="page-content">
            <main className="flex-1 flex items-center justify-center py-32">
              <div className="text-center">
                <span className="text-[0.625rem] uppercase tracking-[0.14em] text-olive">
                  Loading...
                </span>
              </div>
            </main>
          </div>
        </>
      }
    >
      <ShopContent />
    </Suspense>
  );
}