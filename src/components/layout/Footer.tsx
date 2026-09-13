"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { editorialEase } from "@/lib/animations";

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [email, setEmail] = useState("");

  const collections = [
    { href: "/shop?category=shalwar-kameez", label: "Shalwar Kameez" },
    { href: "/shop?category=shirts", label: "Irish Linen" },
    { href: "/shop?category=pants", label: "Tailored Pants" },
    { href: "/shop?category=matching-sets", label: "Matching Sets" },
    { href: "/shop?category=chappal", label: "Chappal" },
    { href: "/collections", label: "All Collections" },
  ];

  const support = [
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
    { href: "/exchanges", label: "Exchanges" },
    { href: "/returns", label: "Returns" },
    { href: "/size-guide", label: "Size Guide" },
  ];

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.7, ease: editorialEase }}
      className="bg-[#241914] text-[#fff8f3] relative overflow-hidden"
    >
      {/* Same crosshatch texture as the auth panel */}
      <div
        className="absolute inset-0 opacity-[0.045] pointer-events-none"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}
      />
      <div className="relative container-site pt-16 sm:pt-20 pb-8">
        <br></br>
        {/* ── Main grid: 4 columns matching reference layout ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 xl:gap-x-14 gap-y-14 pb-14 border-b border-[#fff8f3]/10">

          {/* ── Col 1: Brand + tagline + description + newsletter ── */}
          <div className="flex flex-col gap-0">
            {/* Brand label */}
            <p className="font-sans text-[0.6rem] uppercase tracking-[0.28em] text-[#d2c4be] mb-8 font-medium">
              House of Melone
            </p>

            {/* Large serif tagline */}
            <h3 className="font-serif font-light text-[1.75rem] sm:text-[2rem] tracking-[0.08em] uppercase leading-[1.1] text-[#fff8f3] mb-10">
              Sartorially
              <br />
              Considered.
            </h3>

            {/* Description */}
            <p className="font-sans text-[0.8125rem] leading-[1.75] text-[#d2c4be] font-medium">
              Sartorial discipline, heritage craftsmanship, and contemporary
              menswear tailoring cut for international silhouettes.
            </p>

            {/* Newsletter */}
            <div className="mt-9">
              <br></br>
              <p className="font-sans text-[0.6rem] uppercase tracking-[0.22em] font-medium text-[#fff8f3] mb-3">
                Journal &amp; Inquiries
              </p>
              <br></br>

              <form
                className="flex items-center border-b border-[#fff8f3]/25 focus-within:border-[#fff8f3]/60 transition-colors duration-300"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full bg-transparent py-3 pr-3 font-sans text-[0.8rem] text-[#fff8f3] placeholder:text-[#d2c4be]/60 focus:outline-none font-medium"
                />
                <button
                  type="submit"
                  className="font-sans text-[0.6rem] uppercase tracking-[0.18em] font-medium text-[#fff8f3] hover:text-[#d2c4be] transition-colors duration-300 whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* ── Col 2: Collections ── */}
          <div>
            <h4 className="font-sans text-[0.6rem] uppercase tracking-[0.22em] font-medium text-[#fff8f3] mb-6">
              Collections
            </h4>
            <ul className="space-y-[22px]">
              {collections.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-sans text-[0.8125rem] text-[#d2c4be] hover:text-[#fff8f3] hover:translate-x-0.5 inline-block transition-all duration-200 font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Support ── */}
          <div>
            <h4 className="font-sans text-[0.6rem] uppercase tracking-[0.22em] font-medium text-[#fff8f3] mb-6">
              Support
            </h4>
            <ul className="space-y-[22px]">
              {support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-sans text-[0.8125rem] text-[#d2c4be] hover:text-[#fff8f3] hover:translate-x-0.5 inline-block transition-all duration-200 font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 4: Client Care ── */}
          <div>
            <h4 className="font-sans text-[0.6rem] uppercase tracking-[0.22em] font-medium text-[#fff8f3] mb-6">
              Client Care
            </h4>
            <ul className="space-y-[22px]">
              <li>
                <a
                  href="mailto:houseofmelone@gmail.com"
                  className="font-sans text-[0.8125rem] text-[#d2c4be] hover:text-[#fff8f3] transition-colors duration-200 break-all font-medium"
                >
                  houseofmelone@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+923372388118"
                  className="font-sans text-[0.8125rem] text-[#d2c4be] hover:text-[#fff8f3] transition-colors duration-200 whitespace-nowrap font-medium"
                >
                  +92 337 2388118
                </a>
              </li>
              <li className="pt-1">
                <span className="block font-sans text-[0.8125rem] text-[#d2c4be] whitespace-nowrap font-medium">
                  Mon — Fri, 11 AM — 6 PM
                </span>
                <span className="block font-sans text-[0.8125rem] text-[#d2c4be] mt-1 font-medium">
                  Karachi, Pakistan
                </span>
              </li>
            </ul>
          </div>
        </div>
        <br></br>
        {/* ── Bottom bar ── */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-[0.6875rem] text-[#d2c4be] tracking-[0.06em] text-center sm:text-left font-medium">
            © {new Date().getFullYear()} House of Melone. All Rights Reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="font-sans text-[0.6875rem] text-[#d2c4be] tracking-[0.06em] hover:text-[#fff8f3] transition-colors duration-200 whitespace-nowrap font-medium"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="font-sans text-[0.6875rem] text-[#d2c4be] tracking-[0.06em] hover:text-[#fff8f3] transition-colors duration-200 whitespace-nowrap font-medium"
            >
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </motion.footer>
  );
}