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
        const res = await fetch(`/api/products?slug=${slug}`);
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
        <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12 py-3">
          <nav className="flex items-center gap-2 text-[0.6875rem] text-deep/45">
            <Link href="/" className="hover:text-walnut transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-walnut transition-colors">
              Shop
            </Link>
            <span>/</span>
            <span className="text-deep">{product.name}</span>
          </nav>
        </div>

        {/* Product */}
        <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12 pb-24 md:pb-40 lg:pb-56">
          <motion.div 
            variants={staggerContainer(0.15)}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24"
          >
            {/* Gallery */}
            <motion.div variants={staggerItem} className="lg:col-span-7 space-y-4">
              {/* Main image */}
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-cream-dim">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeImage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    src={product.images[activeImage]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
                <div className="absolute top-4 left-4 bg-walnut text-cream px-3 py-1.5 text-[0.625rem] uppercase tracking-[0.14em] font-semibold">
                  {product.categoryLabel}
                </div>
              </div>

              {/* Thumbnails */}
              {product.images.length > 1 && (
                <div className="flex gap-2">
                  {product.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(i)}
                      className={`w-16 h-20 overflow-hidden border-2 transition-colors ${
                        i === activeImage
                          ? "border-walnut"
                          : "border-transparent hover:border-sand"
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
              )}
            </motion.div>

            {/* Info */}
            <motion.div variants={staggerItem} className="lg:col-span-5">
              <div className="lg:sticky lg:top-32 space-y-8">
                <div className="space-y-1.5">
                  <span className="text-[0.625rem] uppercase tracking-[0.14em] font-semibold text-olive">
                    {product.categoryLabel}
                  </span>
                  <h1 className="font-serif text-[1.5rem] md:text-[1.875rem] lg:text-[2.125rem] leading-[1.1] tracking-[-0.02em] uppercase text-walnut">
                    {product.name}
                  </h1>
                </div>

                <div className="space-y-0.5">
                  <span className="font-serif text-[1.375rem] font-medium text-walnut">
                    {formatPrice(product.price)}
                  </span>
                  <span className="text-[0.75rem] text-deep/45 ml-2">
                    {formatPriceUSD(product.priceUSD)}
                  </span>
                </div>

                <p className="text-[0.875rem] leading-[1.7] text-deep/60">
                  {product.longDescription}
                </p>

                {/* Colors */}
                {product.colors.length > 0 && (
                  <div className="space-y-2.5">
                    <span className="text-[0.625rem] uppercase tracking-[0.14em] font-semibold text-olive block">
                      Color — {product.colors[selectedColor].name}
                    </span>
                    <div className="flex items-center gap-2">
                      {product.colors.map((color, i) => (
                        <button
                          key={color.name}
                          onClick={() => setSelectedColor(i)}
                          className={`w-7 h-7 border-2 transition-colors flex items-center justify-center ${
                            i === selectedColor
                              ? "border-walnut"
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
                <div className="space-y-2.5">
                  <span className="text-[0.625rem] uppercase tracking-[0.14em] font-semibold text-olive block">
                    Size — {product.sizes[selectedSize]}
                  </span>
                  <div className="flex items-center gap-2 flex-wrap">
                    {product.sizes.map((size, i) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(i)}
                        className={`min-w-[40px] h-10 px-2.5 text-[0.75rem] font-medium border transition-colors ${
                          i === selectedSize
                            ? "bg-walnut text-cream border-walnut"
                            : "border-sand/60 text-deep hover:border-walnut/50"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div className="space-y-2.5">
                  <span className="text-[0.625rem] uppercase tracking-[0.14em] font-semibold text-olive block">
                    Quantity
                  </span>
                  <div className="flex items-center border border-sand/60 w-fit">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 flex items-center justify-center text-deep hover:bg-cream-dim transition-colors"
                    >
                      −
                    </button>
                    <span className="w-10 h-10 flex items-center justify-center text-[0.875rem] font-medium border-x border-sand/60">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-10 flex items-center justify-center text-deep hover:bg-cream-dim transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Add to Cart */}
                <button className="w-full mt-4 py-4 bg-walnut text-cream text-[0.6875rem] uppercase tracking-[0.14em] font-semibold hover:bg-deep transition-colors">
                  Add to Bag
                </button>

                {/* Note */}
                <div className="pt-2 border-t border-sand/40">
                  <p className="text-[0.6875rem] text-deep/45 leading-relaxed">
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
