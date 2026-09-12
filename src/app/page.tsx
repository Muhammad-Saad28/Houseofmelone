"use client";

import { useState, useCallback } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import CategoryMarquee from "@/components/home/CategoryMarquee";
import ProductFeature from "@/components/home/ProductFeature";
import ShopTheCollection from "@/components/home/ShopTheCollection";
import SplashScreen from "@/components/home/SplashScreen";
import CartDrawer from "@/components/cart/CartDrawer";
import { homepageFeatures } from "@/data/products";

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

  const handleSplashComplete = useCallback(() => {
    setHeroReady(true);
  }, []);

  return (
    <>
      {/* Splash — shows once per session, then reveals hero */}
      <SplashScreen onComplete={handleSplashComplete} />

      <Header />

      <main className="flex-1">
        {/* 1. HERO */}
        <Hero animate={heroReady} />

        {/* 2. CATEGORY CAROUSEL */}
        <CategoryMarquee />

        {/* Spacer between carousel and products */}
        <div className="h-20 md:h-32 lg:h-44" />

        {/* 3. FEATURED PRODUCTS (Alternating Layout) */}
        <section className="w-full bg-cream pb-24 md:pb-40 lg:pb-56">
          <div className="container-site flex flex-col gap-28 md:gap-44 lg:gap-60">
            {homepageFeatures.map((product, index) => (
              <ProductFeature
                key={product.id}
                product={product}
                imagePosition={index % 2 === 0 ? "left" : "right"}
                index={index}
              />
            ))}
          </div>
        </section>

        {/* 4. SHOP THE COLLECTION */}
        <ShopTheCollection />

        {/* Spacer between collection and footer */}
        <div className="h-20 md:h-32 lg:h-44" />
      </main>

      {/* 5. FOOTER */}
      <Footer />

      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onRemove={(id) => setCartItems((prev) => prev.filter((item) => item.id !== id))}
      />
    </>
  );
}
