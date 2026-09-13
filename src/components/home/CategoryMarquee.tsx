"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const baseCategories = [
  { name: "Shalwar Kameez", href: "/shop?category=shalwar-kameez", id: "shalwar-kameez" },
  { name: "Irish Linen", href: "/shop?category=shirts", id: "shirts" },
  { name: "Tailored Pants", href: "/shop?category=pants", id: "pants" },
  { name: "Matching Sets", href: "/shop?category=matching-sets", id: "matching-sets" },
  { name: "Charsadda Chappal", href: "/shop?category=chappal", id: "chappal" },
  { name: "Trucker Caps", href: "/shop?category=caps", id: "caps" },
  { name: "Gadgets", href: "/shop?category=gadgets", id: "gadgets" },
];

// Duplicate 4× for seamless infinite scroll
const categories = [
  ...baseCategories,
  ...baseCategories,
  ...baseCategories,
  ...baseCategories,
];

function CarouselContent() {
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category");

  return (
    /*
      pause-on-hover only fires on devices that support hover (@media hover:hover).
      On mobile (touch-only) the marquee runs uninterrupted.
    */
    <div className="flex whitespace-nowrap items-center w-max animate-marquee-ltr hover-pause motion-reduce:animate-none motion-reduce:overflow-x-auto scrollbar-none">
      {categories.map((cat, i) => {
        const isActive = currentCategory === cat.id;

        return (
          <div key={`${cat.id}-${i}`} className="inline-flex items-center">
            <Link
              href={cat.href}
              className={`group/item relative px-10 md:px-14 lg:px-16 py-1 transition-opacity duration-300 ${
                isActive ? "opacity-100" : "opacity-80 hover:opacity-100"
              }`}
            >
              <span className="font-serif text-[13px] md:text-[14px] lg:text-[15px] uppercase tracking-[0.16em] md:tracking-[0.18em] font-normal text-deep">
                {cat.name}
              </span>

              {/* Left→right underline on hover */}
              <span
                className={`absolute -bottom-0.5 left-10 md:left-14 lg:left-16 right-10 md:right-14 lg:right-16 h-[1px] bg-walnut origin-left transition-transform duration-300 ease-out ${
                  isActive ? "scale-x-100" : "scale-x-0 group-hover/item:scale-x-100"
                }`}
              />
            </Link>

            {/* Bullet separator */}
            <span className="text-walnut/25 text-[7px] select-none leading-none">●</span>
          </div>
        );
      })}
    </div>
  );
}

export default function CategoryMarquee() {
  return (
    <section className="w-full bg-cream border-y border-sand relative z-20 overflow-hidden">
      {/* Edge fade masks */}
      <div className="absolute inset-y-0 left-0 w-20 md:w-36 bg-gradient-to-r from-cream to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 md:w-36 bg-gradient-to-l from-cream to-transparent z-10 pointer-events-none" />

      {/* Marquee track - tight height for editorial divider look (~40px total) */}
      <div className="flex py-2 md:py-2.5">
        <Suspense fallback={<div className="h-6" />}>
          <CarouselContent />
        </Suspense>
      </div>
    </section>
  );
}
