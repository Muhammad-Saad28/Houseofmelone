"use client";

import { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Product, Category } from "@/types";
import { formatPrice } from "@/lib/utils";
import { editorialEase, staggerContainer, staggerItem } from "@/lib/animations";

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
      <main className="flex-1">
        {/* Hero */}
        <section className="w-full bg-cream py-20 md:py-32 lg:py-44 border-b border-sand/30">
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: editorialEase }}
            className="container-site"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="w-8 md:w-12 h-[1px] bg-walnut/30" />
              <span className="text-[0.625rem] uppercase tracking-[0.14em] font-semibold text-olive">
                Full Catalog
              </span>
            </div>
            <h1 className="font-serif text-[2rem] md:text-[2.75rem] lg:text-[3.25rem] tracking-[-0.02em] uppercase text-walnut">
              Shop All
            </h1>
          </motion.div>
        </section>

        {/* Filters + Grid */}
        <section className="w-full bg-cream pt-16 pb-24 md:pb-40 lg:pb-56">
          <div className="container-site">
            {/* Filter pills */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 lg:mb-16 scrollbar-none"
            >
              <button
                onClick={() => setActiveFilter("all")}
                className={`px-4 py-2 text-[0.625rem] uppercase tracking-[0.14em] font-semibold transition-colors whitespace-nowrap ${
                  activeFilter === "all"
                    ? "bg-walnut text-cream"
                    : "bg-cream-dim text-deep hover:bg-sand/40"
                }`}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => setActiveFilter(cat.slug)}
                  className={`px-4 py-2 text-[0.625rem] uppercase tracking-[0.14em] font-semibold transition-colors whitespace-nowrap ${
                    activeFilter === cat.slug
                      ? "bg-walnut text-cream"
                      : "bg-cream-dim text-deep hover:bg-sand/40"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </motion.div>

            {/* Grid */}
            {loading ? (
              <div className="text-center py-20">
                <span className="text-[0.625rem] uppercase tracking-[0.14em] text-olive">
                  Loading products...
                </span>
              </div>
            ) : (
              <motion.div 
                variants={staggerContainer(0.08)}
                initial="hidden"
                animate="visible"
                key={activeFilter} // Re-triggers animation on filter change
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10 lg:gap-14"
              >
                {filtered.map((product) => (
                  <motion.div key={product.id} variants={staggerItem}>
                    <Link
                      href={`/products/${product.slug}`}
                      className="group block"
                    >
                      <div className="relative aspect-[3/4] overflow-hidden bg-cream-dim">
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        />
                        <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-full py-2.5 bg-cream text-walnut text-[0.625rem] uppercase tracking-[0.14em] font-semibold text-center border border-walnut/10">
                            View Details
                          </div>
                        </div>
                      </div>
                      <div className="pt-4 pb-2 space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="text-[0.625rem] uppercase tracking-[0.14em] text-olive font-medium">
                            {product.categoryLabel}
                          </span>
                          <div className="flex items-center gap-1.5">
                            {product.colors.map((c) => (
                              <span
                                key={c.name}
                                className="w-2.5 h-2.5 rounded-full border border-sand/80 shadow-sm"
                                style={{ backgroundColor: c.hex }}
                              />
                            ))}
                          </div>
                        </div>
                        <h3 className="text-[0.875rem] font-medium text-deep line-clamp-1 leading-[1.6]">
                          {product.name}
                        </h3>
                        <p className="text-[0.875rem] text-walnut font-medium">
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
      <Footer />
    </>
  );
}

export default function ShopPage() {
  return (
    <Suspense
      fallback={
        <>
          <Header />
          <main className="flex-1 flex items-center justify-center py-32">
            <div className="text-center">
              <span className="text-[0.625rem] uppercase tracking-[0.14em] text-olive">
                Loading...
              </span>
            </div>
          </main>
          <Footer />
        </>
      }
    >
      <ShopContent />
    </Suspense>
  );
}
