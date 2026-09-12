"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { editorialEase } from "@/lib/animations";

export default function Footer() {
const ref = useRef<HTMLElement>(null);
const isInView = useInView(ref, { once: true, margin: "-40px" });
const [email, setEmail] = useState("");

return (
<motion.footer
ref={ref}
initial={{ opacity: 0, y: 20 }}
animate={
isInView
? { opacity: 1, y: 0 }
: { opacity: 0, y: 20 }
}
transition={{ duration: 0.7, ease: editorialEase }}
className="bg-[#241914] text-[#fff8f3] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 pb-4 md:pb-6"
>
{/* Outer premium frame */} <div className="max-w-[1500px] mx-auto rounded-[2px] overflow-hidden border border-[#fff8f3]/10"> <div className="pl-12 sm:pl-16 md:pl-24 lg:pl-32 xl:pl-40 pr-6 sm:pr-8 md:pr-10 lg:pr-14 xl:pr-16 pt-16 sm:pt-20 md:pt-24 lg:pt-28 pb-10 sm:pb-12 md:pb-14 lg:pb-16">
      <br></br>
      {/* Main Footer */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-20 lg:gap-x-20 gap-y-12 lg:gap-y-0 pb-14 md:pb-16 lg:pb-20 border-b border-[#fff8f3]/10">

        {/* Brand + Newsletter */}
        <div className="lg:col-span-5 lg:pr-25">
          <div className="max-w-lg">
            <p className="text-[0.625rem] uppercase tracking-[0.28em] text-[#d2c4be] mb-5">
              House of Melone
            </p>

            <h3 className="font-serif text-[1.7rem] sm:text-[1.9rem] md:text-[2.1rem] font-normal tracking-[0.12em] uppercase leading-[1.1] text-[#fff8f3] mb-6">
              Sartorially
              <br />
              Considered.
            </h3>

            <p className="text-[0.875rem] md:text-[0.9375rem] leading-[1.7] text-[#d2c4be] max-w-md">
              Sartorial discipline, heritage craftsmanship, and
              contemporary menswear tailoring cut for international
              silhouettes.
            </p>
          </div>

          {/* Newsletter */}
          <div className="mt-10 md:mt-12 max-w-md">
            <p className="text-[0.625rem] uppercase tracking-[0.2em] font-medium text-[#fff8f3] mb-4">
              Journal &amp; Inquiries
            </p>

            <form
              className="flex items-center border-b border-[#fff8f3]/25 focus-within:border-[#fff8f3]/70 transition-colors duration-300"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full bg-transparent py-3.5 pr-4 text-[0.8125rem] text-[#fff8f3] placeholder:text-[#d2c4be]/70 focus:outline-none"
              />

              <button
                type="submit"
                className="text-[0.625rem] uppercase tracking-[0.18em] font-medium text-[#fff8f3] hover:text-[#d2c4be] transition-colors duration-300 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Collections */}
        <div className="lg:col-span-2">
          <h3 className="text-[0.625rem] uppercase tracking-[0.2em] font-medium text-[#fff8f3] mb-7">
            Collections
          </h3>

          <ul className="space-y-4 text-[0.8125rem] text-[#d2c4be]">
            {[
              {
                href: "/shop?category=shalwar-kameez",
                label: "Shalwar Kameez",
              },
              {
                href: "/shop?category=shirts",
                label: "Irish Linen",
              },
              {
                href: "/shop?category=pants",
                label: "Tailored Pants",
              },
              {
                href: "/shop?category=matching-sets",
                label: "Matching Sets",
              },
              {
                href: "/shop?category=chappal",
                label: "Chappal",
              },
            ].map((link) => (
              <li key={link.href + link.label}>
                <Link
                  href={link.href}
                  className="inline-block hover:text-[#fff8f3] hover:translate-x-0.5 transition-all duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div className="lg:col-span-2">
          <h3 className="text-[0.625rem] uppercase tracking-[0.2em] font-medium text-[#fff8f3] mb-7">
            Support
          </h3>

          <ul className="space-y-4 text-[0.8125rem] text-[#d2c4be]">
            {[
              { href: "/about", label: "About Us" },
              { href: "/shop", label: "Contact" },
              { href: "/shop", label: "Exchanges" },
              { href: "/shop", label: "Returns" },
              { href: "/shop", label: "Size Guide" },
            ].map((link) => (
              <li key={link.href + link.label}>
                <Link
                  href={link.href}
                  className="inline-block hover:text-[#fff8f3] hover:translate-x-0.5 transition-all duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Client Care */}
        <div className="lg:col-span-3">
          <h3 className="text-[0.625rem] uppercase tracking-[0.2em] font-medium text-[#fff8f3] mb-7">
            Client Care
          </h3>

          <ul className="space-y-5 text-[0.8125rem] text-[#d2c4be]">
            <li>
              <a
                href="mailto:houseofmelone@gmail.com"
                className="inline-block hover:text-[#fff8f3] transition-colors duration-200 break-all"
              >
                houseofmelone@gmail.com
              </a>
            </li>

            <li>
              <a
                href="tel:+923372388118"
                className="inline-block hover:text-[#fff8f3] transition-colors duration-200 whitespace-nowrap"
              >
                +92 337 2388118
              </a>
            </li>

            <li className="pt-1">
              <span className="block whitespace-nowrap">
                Mon — Fri, 11 AM — 6 PM
              </span>

              <span className="block mt-1.5">
                Karachi, Pakistan
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="pt-7 md:pt-9 flex flex-col md:flex-row items-center justify-between gap-5">
        <p className="text-[0.625rem] md:text-[0.6875rem] text-[#d2c4be] tracking-[0.08em] text-center md:text-left">
          © {new Date().getFullYear()} House of Melone. All Rights Reserved.
        </p>

        <div className="flex items-center gap-6 md:gap-8">
          <Link
            href="#"
            className="text-[0.625rem] md:text-[0.6875rem] text-[#d2c4be] tracking-[0.08em] hover:text-[#fff8f3] transition-colors duration-200 whitespace-nowrap"
          >
            Privacy Policy
          </Link>

          <Link
            href="#"
            className="text-[0.625rem] md:text-[0.6875rem] text-[#d2c4be] tracking-[0.08em] hover:text-[#fff8f3] transition-colors duration-200 whitespace-nowrap"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </div>
  </div>
</motion.footer>
)}