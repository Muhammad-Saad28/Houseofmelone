"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense } from "react";

function CarouselContent() {
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category");

  const baseCategories = [
    { name: "Shalwar Kameez", href: "/shop?category=shalwar-kameez", id: "shalwar-kameez" },
    { name: "Irish Linen", href: "/shop?category=shirts", id: "shirts" },
    { name: "Tailored Pants", href: "/shop?category=pants", id: "pants" },
    { name: "Matching Sets", href: "/shop?category=matching-sets", id: "matching-sets" },
    { name: "Charsadda Chappal", href: "/shop?category=chappal", id: "chappal" },
    { name: "Trucker Caps", href: "/shop?category=caps", id: "caps" },
    { name: "Gadgets", href: "/shop?category=gadgets", id: "gadgets" },
  ];

  // Duplicate 4 times to ensure it covers even ultrawide screens infinitely
  const categories = [...baseCategories, ...baseCategories, ...baseCategories, ...baseCategories];

  return (
    <div className="flex whitespace-nowrap items-center w-max animate-marquee-ltr group-hover/marquee:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:overflow-x-auto scrollbar-none">
      {categories.map((cat, i) => {
        const isActive = currentCategory === cat.id;
        
        return (
          <div key={`${cat.id}-${i}`} className="inline-flex items-center mr-16 md:mr-24 lg:mr-32">
            <Link
              href={cat.href}
              className={`group/item relative px-4 md:px-6 lg:px-8 transition-opacity duration-300 ${
                isActive ? "opacity-100" : "opacity-55 hover:opacity-100"
              }`}
            >
              <span className={`font-serif text-[13px] md:text-[14px] lg:text-[15px] uppercase tracking-[0.14em] md:tracking-[0.16em] font-normal text-deep`}>
                {cat.name}
              </span>
              
              {/* Subtle hover underline animation */}
              <span 
                className={`absolute -bottom-1 md:-bottom-1.5 left-1/2 -translate-x-1/2 h-[1px] bg-walnut transition-all duration-300 ease-out ${
                  isActive ? "w-full" : "w-0 group-hover/item:w-full"
                }`} 
              />
            </Link>
            
            {/* Elegant Separator */}
            <span className="text-walnut/20 text-[8px] md:text-[10px] px-16 md:px-24 lg:px-32 select-none">
              ✦
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default function CategoryMarquee() {
  return (
    <section className="w-full bg-cream border-y border-walnut/15 relative z-20 overflow-hidden shadow-[inset_0_1px_3px_rgba(0,0,0,0.02)] mb-16 md:mb-24 lg:mb-32">
      {/* Subtle edge masks for fade effect */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-cream to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-cream to-transparent z-10 pointer-events-none" />

      {/* Main marquee track */}
      <div className="flex py-8 md:py-10 lg:py-12 group/marquee cursor-ew-resize">
        <Suspense fallback={<div className="h-6"></div>}>
          <CarouselContent />
        </Suspense>
      </div>
    </section>
  );
}
