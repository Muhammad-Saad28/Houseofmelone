"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  headerLoad,
  mobileMenuOverlay,
  mobileMenuPanel,
  staggerContainer,
  staggerItem,
} from "@/lib/animations";

const allLinks = [
  { href: "/shop", label: "Shop" },
  { href: "/shop?category=shalwar-kameez", label: "New Arrivals" },
  { href: "/shop", label: "Collections" },
  { href: "/about", label: "About" },
];

const mobileLinks = [
  { href: "/shop", label: "Shop All" },
  { href: "/shop?category=shalwar-kameez", label: "Shalwar Kameez" },
  { href: "/shop?category=shirts", label: "Irish Linen Shirts" },
  { href: "/shop?category=pants", label: "Tailored Pants" },
  { href: "/shop?category=matching-sets", label: "Matching Sets" },
  { href: "/shop?category=chappal", label: "Charsadda Chappal" },
  { href: "/shop?category=caps", label: "Trucker Caps" },
  { href: "/about", label: "Our Story" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        variants={headerLoad}
        initial="hidden"
        animate="visible"
        className={` fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isScrolled
            ? ` bg-[#F2EBDD]/95 backdrop-blur-xl border-b border-walnut/10 shadow-[0_4px_24px_rgba(80,60,40,0.06)] `
            : ` bg-transparent border-b border-transparent shadow-none backdrop-blur-0 `
          } `}
      >
        <div className="container-site">
          <div className="flex items-center justify-between h-20 lg:h-[84px]">
            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className={`lg:hidden flex flex-col gap-[5px] p-2 -ml-2 transition-opacity duration-300 hover:opacity-60 ${isScrolled ? 'text-black' : 'text-white'}`}
              aria-label="Open menu"
            >
              <span className="block w-5 h-[1.5px] bg-current" />
              <span className="block w-4 h-[1.5px] bg-current" />
              <span className="block w-5 h-[1.5px] bg-current" />
            </button>
            {/* Logo */}
            <div className="flex flex-1 lg:flex-none items-center justify-center lg:justify-start">
              <Link href="/" className="flex flex-col items-center lg:items-start group">
                <span className={`font-serif text-[1.125rem] lg:text-[1.375rem] font-medium uppercase tracking-[0.22em] whitespace-nowrap leading-none transition-opacity duration-300 group-hover:opacity-70 ${isScrolled ? 'text-black' : 'text-white'}`}>
                  House of Melone
                </span>
              </Link>
            </div>
            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center justify-center gap-8 flex-1 pl-10">
              {allLinks.map((link) => (
                <Link
                  key={link.href + link.label}
                  href={link.href}
                  className={`nav-link-slide text-[0.6875rem] font-medium uppercase tracking-[0.14em] transition-opacity duration-300 pb-0.5 hover:opacity-55 ${isScrolled ? 'text-black' : 'text-white'}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            {/* Desktop Right Icons */}
            <div className={`hidden lg:flex items-center gap-4 lg:flex-none justify-end ${isScrolled ? 'text-black' : 'text-white'}`}>
              <button
                className="p-1.5 transition-opacity duration-300 hover:opacity-50"
                aria-label="Search"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </button>
              <button
                className="p-1.5 transition-opacity duration-300 hover:opacity-50"
                aria-label="Account"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </button>
              <button
                className="p-1.5 transition-opacity duration-300 hover:opacity-50 relative flex items-center gap-2"
                aria-label="Cart"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
                <span className="text-[0.625rem] font-medium"> (0) </span>
              </button>
            </div>
            {/* Mobile right icons */}
            <div className={`flex lg:hidden items-center gap-1 ${isScrolled ? 'text-black' : 'text-white'}`}>
              <button
                className="p-2 transition-opacity duration-300 hover:opacity-50"
                aria-label="Search"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </button>
              <button
                className="p-2 transition-opacity duration-300 hover:opacity-50 flex items-center gap-1.5"
                aria-label="Cart"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
                <span className="text-[0.625rem] font-medium"> (0) </span>
              </button>
            </div>
          </div>
        </div>
      </motion.header>
      {/* No spacer — header overlays the hero */}
      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              variants={mobileMenuOverlay}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 z-[60] bg-walnut/40 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              variants={mobileMenuPanel}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-y-0 left-0 z-[70] w-[82vw] max-w-[320px] bg-cream shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between px-6 h-16 border-b border-sand/30">
                <span className="font-serif text-[0.875rem] font-medium uppercase tracking-[0.2em] text-walnut">
                  Menu
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 -mr-2 text-deep hover:text-walnut transition-colors"
                  aria-label="Close menu"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
              <motion.nav
                variants={staggerContainer(0.05)}
                initial="hidden"
                animate="visible"
                className="flex-1 overflow-y-auto px-6 py-5"
              >
                {mobileLinks.map((link) => (
                  <motion.div key={link.href + link.label} variants={staggerItem}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className=" flex items-center justify-between py-3.5 font-serif text-[1.125rem] font-normal text-deep hover:text-walnut transition-colors uppercase tracking-wide border-b border-sand/20 last:border-0 "
                    >
                      <span>{link.label}</span>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="opacity-30"
                      >
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>
              <div className="px-6 py-5 border-t border-sand/30 space-y-0.5">
                <p className="text-[0.625rem] uppercase tracking-[0.18em] text-olive font-semibold">
                  House of Melone
                </p>
                <p className="text-[0.625rem] text-deep/40">Statement Redefined</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}