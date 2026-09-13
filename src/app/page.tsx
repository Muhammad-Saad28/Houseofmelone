"use client";

import { useState, useCallback, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import CategoryMarquee from "@/components/home/CategoryMarquee";
import ProductFeature from "@/components/home/ProductFeature";
import ShopTheCollection from "@/components/home/ShopTheCollection";
import Newsletter from "@/components/home/Newsletter";
import SplashScreen from "@/components/home/SplashScreen";
import CartDrawer from "@/components/cart/CartDrawer";
import { Product } from "@/types";

export default function Home() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<
    Array<{
      id: string;
      name: string;
      color: string;
      size: string;
      quantity: number;
      price: number;
      image: string;
    }>
  >([]);
  const [heroReady, setHeroReady] = useState(false);
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);

  const handleSplashComplete = useCallback(() => {
    setHeroReady(true);
  }, []);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        // First 4 featured products for the alternating editorial layout
        setFeaturedProducts(data.slice(0, 4));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <>
      {/* Splash — shows once per session, then reveals hero */}
      <SplashScreen onComplete={handleSplashComplete} />

      {/* Fixed navbar — transparent over hero, cream on scroll */}
      <Header />

      <main className="flex-1">
        {/* 1. HERO — full-viewport, overlaps the header spacer */}
        <Hero animate={heroReady} />

        {/* 2. CATEGORY CAROUSEL */}
        <CategoryMarquee />

        {/* 3. FEATURED PRODUCTS — alternating IMAGE|TEXT layout */}
        <section className="w-full bg-cream py-20 md:py-32 lg:py-48">
          <div className="container-site flex flex-col gap-24 md:gap-40 lg:gap-56">
            {featuredProducts.map((product, index) => (
              <ProductFeature
                key={product.id}
                product={product}
                imagePosition={index % 2 === 0 ? "left" : "right"}
                index={index}
              />
            ))}
          </div>
        </section>

        {/* 4. SHOP THE COLLECTION — 4-col / 2-col product grid */}
        <ShopTheCollection />

        {/* 5. NEWSLETTER */}
        <Newsletter />
      </main>

      {/* 6. FOOTER */}
      <Footer />

      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onRemove={(id) =>
          setCartItems((prev) => prev.filter((item) => item.id !== id))
        }
      />
    </>
  );
}
