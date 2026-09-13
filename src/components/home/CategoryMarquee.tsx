"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const baseCategories = [
  {
    name: "Shalwar Kameez",
    href: "/shop?category=shalwar-kameez",
    id: "shalwar-kameez",
  },
  {
    name: "Irish Linen",
    href: "/shop?category=shirts",
    id: "shirts",
  },
  {
    name: "Tailored Pants",
    href: "/shop?category=pants",
    id: "pants",
  },
  {
    name: "Matching Sets",
    href: "/shop?category=matching-sets",
    id: "matching-sets",
  },
  {
    name: "Charsadda Chappal",
    href: "/shop?category=chappal",
    id: "chappal",
  },
  {
    name: "Trucker Caps",
    href: "/shop?category=caps",
    id: "caps",
  },
];

// Duplicate categories for seamless infinite marquee
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
    <div
      className="
        flex
        items-center
        whitespace-nowrap
        w-max
        animate-marquee-ltr
        hover-pause
        motion-reduce:animate-none
        motion-reduce:overflow-x-auto
        scrollbar-none
      "
    >
      {categories.map((cat, i) => {
        const isActive = currentCategory === cat.id;

        return (
          <div
            key={`${cat.id}-${i}`}
            className="inline-flex items-center"
          >
            <Link
              href={cat.href}
              className={`
                group/item
                relative
                inline-flex
                items-center
                justify-center
                rounded-full
                border
                min-w-[190px]
                md:min-w-[210px]
                lg:min-w-[230px]
                px-8
                py-3
                transition-all
                duration-300
                ease-out
                ${
                  isActive
                    ? `
                      border-walnut
                      bg-walnut/[0.06]
                      text-deep
                      shadow-[0_2px_10px_rgba(73,52,38,0.08)]
                    `
                    : `
                      border-sand
                      bg-transparent
                      text-deep/85
                      hover:border-walnut/60
                      hover:bg-walnut/[0.035]
                      hover:text-deep
                      hover:-translate-y-[1px]
                      hover:shadow-[0_3px_12px_rgba(73,52,38,0.06)]
                    `
                }
              `}
            >
              <span
                className="
                  font-serif
                  text-[13px]
                  md:text-[14px]
                  lg:text-[15px]
                  uppercase
                  tracking-[0.15em]
                  md:tracking-[0.17em]
                  font-light
                "
              >
                {cat.name}
              </span>

              {/* Subtle animated underline */}
              <span
                className={`
                  absolute
                  bottom-[5px]
                  left-9
                  md:left-7
                  lg:left-8
                  right-8
                  md:right-7
                  lg:right-8
                  h-px
                  bg-walnut
                  origin-left
                  transition-transform
                  duration-300
                  ease-out
                  ${
                    isActive
                      ? "scale-x-100"
                      : "scale-x-0 group-hover/item:scale-x-100"
                  }
                `}
              />
            </Link>

            {/* Two-space visual gap between categories */}
            <span
              aria-hidden="true"
              className="
                w-5
                md:w-6
                lg:w-7
                shrink-0
              "
            />
          </div>
        );
      })}
    </div>
  );
}

export default function CategoryMarquee() {
  return (
    <section
      className="
        relative
        z-20
        w-full
        overflow-hidden
        bg-cream
        pt-2
      "
    >
      {/* Left edge fade */}
      <div
        className="
          absolute
          inset-y-2
          left-0
          w-12
          md:w-20
          lg:w-28
          bg-gradient-to-r
          from-cream
          via-cream/90
          to-transparent
          z-10
          pointer-events-none
        "
      />

      {/* Right edge fade */}
      <div
        className="
          absolute
          inset-y-2
          right-0
          w-12
          md:w-20
          lg:w-28
          bg-gradient-to-l
          from-cream
          via-cream/90
          to-transparent
          z-10
          pointer-events-none
        "
      />

      {/* Bordered ticker */}
      <div
        className="
          w-full
          border-y
          border-sand
          bg-cream
          flex
          min-h-[52px]
          md:min-h-[56px]
          items-center
        "
      >
        <Suspense fallback={<div className="h-6" />}>
          <CarouselContent />
        </Suspense>
      </div>
    </section>
  );
}