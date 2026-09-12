"use client";

import { useState, useCallback, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import CategoryMarquee from "@/components/home/CategoryMarquee";
import ProductFeature from "@/components/home/ProductFeature";
import ProductCarousel from "@/components/home/ProductCarousel";
import ShopTheCollection from "@/components/home/ShopTheCollection";
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
  const [carouselProducts, setCarouselProducts] = useState<Product[]>([]);

  const handleSplashComplete = useCallback(() => {
    setHeroReady(true);
  }, []);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        
        // Take first 4 for the vertical feature layout
        setFeaturedProducts(data.slice(0, 4));
        
        // Take next 8 for the fade carousel
        setCarouselProducts(data.slice(4, 12));
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

      <Header />

      <main className="flex-1">
        {/* 1. HERO */}
        <Hero animate={heroReady} />

        {/* 2. CATEGORY CAROUSEL */}
        <CategoryMarquee />

        {/* Spacer between carousel and products */}
        <div className="h-20 md:h-32 lg:h-44" />

        {/* 3. FEATURED PRODUCTS (Alternating Layout - 4 items) */}
        <section className="w-full bg-cream pb-24 md:pb-40 lg:pb-56">
          <div className="container-site flex flex-col gap-28 md:gap-44 lg:gap-60">
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

        {/* 4. CAROUSEL OF 8 PRODUCTS */}
        {carouselProducts.length > 0 && (
          <ProductCarousel products={carouselProducts} />
        )}

        {/* 5. SHOP THE COLLECTION */}
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
