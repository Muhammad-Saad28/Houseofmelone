"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { products, categories, formatPrice, Category } from "@/data/products";

function ShopContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") as Category | null;
  const [activeFilter, setActiveFilter] = useState<string>(
    initialCategory || "all"
  );

  const filtered =
    activeFilter === "all"
      ? products
      : products.filter((p) => p.category === activeFilter);

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="w-full bg-cream py-10 md:py-14 lg:py-16 border-b border-sand/30">
          <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-[1px] bg-walnut" />
              <span className="text-[0.625rem] uppercase tracking-[0.14em] font-semibold text-olive">
                Full Catalog
              </span>
            </div>
            <h1 className="font-serif text-[1.75rem] md:text-[2.25rem] lg:text-[2.75rem] tracking-[-0.02em] uppercase text-walnut">
              Shop All
            </h1>
          </div>
        </section>

        {/* Filters + Grid */}
        <section className="w-full bg-cream py-8 md:py-12 lg:py-16">
          <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">
            {/* Filter pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 lg:mb-8 scrollbar-none">
              <button
                onClick={() => setActiveFilter("all")}
                className={`px-3.5 py-1.5 text-[0.625rem] uppercase tracking-[0.14em] font-semibold transition-colors whitespace-nowrap ${
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
                  className={`px-3.5 py-1.5 text-[0.625rem] uppercase tracking-[0.14em] font-semibold transition-colors whitespace-nowrap ${
                    activeFilter === cat.slug
                      ? "bg-walnut text-cream"
                      : "bg-cream-dim text-deep hover:bg-sand/40"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-5">
              {filtered.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.slug}`}
                  className="group block"
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-cream-dim">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-full py-2 bg-cream text-walnut text-[0.625rem] uppercase tracking-[0.14em] font-semibold text-center">
                        Quick View
                      </div>
                    </div>
                  </div>
                  <div className="pt-2.5 pb-1 space-y-0.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[0.625rem] uppercase tracking-[0.1em] text-olive font-medium">
                        {product.categoryLabel}
                      </span>
                      <div className="flex items-center gap-1">
                        {product.colors.map((c) => (
                          <span
                            key={c.name}
                            className="w-2 h-2 border border-sand/60"
                            style={{ backgroundColor: c.hex }}
                          />
                        ))}
                      </div>
                    </div>
                    <h3 className="text-[0.8125rem] font-medium text-deep line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-[0.8125rem] text-walnut font-medium">
                      {formatPrice(product.price)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
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
