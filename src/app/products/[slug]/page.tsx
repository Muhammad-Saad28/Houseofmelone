"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Product } from "@/types";
import { formatPrice, formatPriceUSD } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer, staggerItem, editorialEase } from "@/lib/animations";


export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`/api/products/${slug}`);
        if (res.ok) {
          const data = await res.json();
          setProduct(data);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [slug]);

  // Auto-cycle images every 7 seconds
  useEffect(() => {
    if (!product || product.images.length <= 1) return;
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % product.images.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [product]);

  if (loading) {
    return (
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
    );
  }

  if (!product) {
    return (
      <>
        <Header />
        <main className="flex-1 flex items-center justify-center py-32">
          <div className="text-center space-y-4">
            <h1 className="font-serif text-[1.75rem] text-walnut">Product Not Found</h1>
            <p className="text-deep/55 text-[0.875rem]">The product you&apos;re looking for doesn&apos;t exist.</p>
            <Link
              href="/shop"
              className="inline-flex items-center px-7 py-3.5 bg-walnut text-cream text-[0.6875rem] uppercase tracking-[0.14em] font-semibold hover:bg-deep transition-colors mt-4"
            >
              Back to Shop
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="container-site pt-12 md:pt-16 lg:pt-20 pb-8 md:pb-12">
          <nav className="flex items-center gap-3 text-[0.6875rem] uppercase tracking-[0.14em] font-medium text-olive">
            <Link href="/" className="hover:text-walnut transition-colors">
              Home
            </Link>
            <span className="w-4 h-[1px] bg-sand"></span>
            <Link href="/shop" className="hover:text-walnut transition-colors">
              Shop
            </Link>
            <span className="w-4 h-[1px] bg-sand"></span>
            <span className="text-walnut font-semibold">{product.name}</span>
          </nav>
        </div>

        {/* Product */}
        <div className="container-site pb-24 md:pb-40 lg:pb-56">
          <motion.div 
            variants={staggerContainer(0.15)}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24"
          >
            {/* Gallery */}
            <motion.div variants={staggerItem} className="lg:col-span-6 space-y-4">
              {/* Main image */}
              <div className="relative w-full aspect-[3/4] overflow-hidden bg-cream-dim">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeImage}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    src={product.images[activeImage]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
                <div className="absolute top-4 left-4 bg-walnut text-cream px-3 py-1.5 text-[0.625rem] uppercase tracking-[0.14em] font-semibold">
                  {product.categoryLabel}
                </div>
              </div>

              {/* Thumbnails + Progress dots */}
              {product.images.length > 1 && (
                <div className="space-y-3">
                  {/* Thumbnail row */}
                  <div className="flex gap-2">
                    {product.images.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveImage(i)}
                        className={`relative w-16 h-20 overflow-hidden border-2 transition-all duration-300 ${
                          i === activeImage
                            ? "border-walnut opacity-100"
                            : "border-transparent opacity-50 hover:opacity-80 hover:border-sand"
                        }`}
                      >
                        <img
                          src={img}
                          alt={`${product.name} ${i + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>

                  {/* Progress indicator dots */}
                  <div className="flex items-center gap-2">
                    {product.images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveImage(i)}
                        className="relative h-[2px] flex-1 bg-sand/40 overflow-hidden"
                        aria-label={`Image ${i + 1}`}
                      >
                        {i === activeImage && (
                          <motion.span
                            key={activeImage}
                            className="absolute inset-y-0 left-0 bg-walnut"
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 7, ease: "linear" }}
                          />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>

            {/* Info */}
            <motion.div variants={staggerItem} className="lg:col-span-6">
              <div className="lg:sticky lg:top-28 flex flex-col gap-8">

                {/* Category label */}
                <div className="flex items-center gap-3">
                  <span className="w-6 h-[1px] bg-olive/50" />
                  <span className="text-[0.625rem] uppercase tracking-[0.25em] font-semibold text-olive">
                    {product.categoryLabel}
                  </span>
                </div>

                {/* Name */}
                <h1 className="font-serif text-[2rem] md:text-[2.5rem] lg:text-[3rem] leading-[1.05] tracking-[-0.02em] uppercase text-walnut -mt-2">
                  {product.name}
                </h1>

                {/* Price */}
                <div className="flex items-baseline gap-4">
                  <p className="font-serif text-[1.625rem] text-walnut">
                    {formatPrice(product.price)}
                  </p>
                  <p className="text-[0.8125rem] text-olive/70 font-medium tracking-wide">
                    {formatPriceUSD(product.priceUSD)}
                  </p>
                </div>

                {/* Divider */}
                <div className="w-full h-[1px] bg-sand/50" />

                {/* Description */}
                <p className="text-[0.9375rem] leading-[1.9] text-deep/60 text-justify hyphens-auto">
                  {product.longDescription}
                </p>

                {/* Divider */}
                <div className="w-full h-[1px] bg-sand/50" />

                {/* Colors */}
                {product.colors.length > 0 && (
                  <div className="flex flex-col gap-4">
                    <span className="text-[0.625rem] uppercase tracking-[0.25em] font-semibold text-olive">
                      Color &mdash;&nbsp;
                      <span className="text-walnut">{product.colors[selectedColor].name}</span>
                    </span>
                    <div className="flex items-center gap-4">
                      {product.colors.map((color, i) => (
                        <button
                          key={color.name}
                          onClick={() => setSelectedColor(i)}
                          className={`w-10 h-10 border-2 transition-all duration-200 flex items-center justify-center ${
                            i === selectedColor
                              ? "border-walnut scale-110 shadow-md"
                              : "border-sand/60 hover:border-walnut/50"
                          }`}
                          style={{ backgroundColor: color.hex }}
                          title={color.name}
                        >
                          {i === selectedColor && (
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke={
                                color.hex === "#F5F0E8" ||
                                color.hex === "#C8B896" ||
                                color.hex === "#D4A5A5"
                                  ? "#3A2920"
                                  : "#F2EBDD"
                              }
                              strokeWidth="2.5"
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Sizes */}
                <div className="flex flex-col gap-4">
                  <span className="text-[0.625rem] uppercase tracking-[0.25em] font-semibold text-olive">
                    Size &mdash;&nbsp;
                    <span className="text-walnut">{product.sizes[selectedSize]}</span>
                  </span>
                  <div className="flex items-center gap-3 flex-wrap">
                    {product.sizes.map((size, i) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(i)}
                        className={`min-w-[52px] h-12 px-4 text-[0.75rem] font-semibold uppercase tracking-[0.1em] border-2 transition-all duration-200 ${
                          i === selectedSize
                            ? "bg-walnut text-cream border-walnut"
                            : "border-sand/60 text-deep hover:border-walnut"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div className="flex flex-col gap-4">
                  <span className="text-[0.625rem] uppercase tracking-[0.25em] font-semibold text-olive">
                    Quantity
                  </span>
                  <div className="flex items-center border border-sand w-fit">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-14 h-14 flex items-center justify-center text-xl text-deep hover:bg-cream-dim transition-colors"
                    >
                      &minus;
                    </button>
                    <span className="w-14 h-14 flex items-center justify-center text-[1rem] font-medium border-x border-sand">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-14 h-14 flex items-center justify-center text-xl text-deep hover:bg-cream-dim transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Add to Cart */}
                <button className="w-full mt-2 py-5 bg-walnut text-cream text-[0.75rem] uppercase tracking-[0.25em] font-semibold hover:bg-deep transition-colors duration-300">
                  Add to Bag
                </button>

                {/* Note */}
                <div className="border-t border-sand/30 pt-6 pb-12">
                  <p className="text-[0.75rem] text-olive/60 leading-[1.9] text-justify">
                    Orders are reserved after receipt of a 50% advance payment.
                    Pickup available from Karachi. Contact us for international
                    shipping.
                  </p>
                </div>

              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
