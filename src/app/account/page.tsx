"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useAuth } from "@/components/AuthProvider";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function AccountPage() {
  const { user, loading, signOut } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <>
        <Header />
        <div id="page-content">
          <main className="flex-1 flex items-center justify-center min-h-[60vh]">
            <p className="font-sans text-[0.875rem] text-walnut/60">Loading...</p>
          </main>
        </div>
        <Footer />
      </>
    );
  }

  if (!user) return null;

  const firstName = user.user_metadata?.first_name || "";
  const lastName = user.user_metadata?.last_name || "";
  const displayName = firstName || user.email?.split("@")[0] || "Account";
  const initials = firstName && lastName
    ? `${firstName[0]}${lastName[0]}`.toUpperCase()
    : firstName
      ? firstName[0].toUpperCase()
      : user.email?.[0].toUpperCase() || "U";

  const handleSignOut = async () => {
    await signOut();
    router.push("/");
  };

  return (
    <>
      <Header />
      <div id="page-content">
        <main className="flex-1">
          <section className="w-full bg-cream py-20 md:py-32">
            <motion.div
              variants={staggerContainer(0.12)}
              initial="hidden"
              animate="visible"
              className="max-w-[600px] mx-auto px-5 md:px-8"
            >
              {/* Header */}
              <motion.div variants={staggerItem} className="text-center mb-16">
                <p className="font-sans text-[0.5625rem] uppercase tracking-[0.25em] text-olive font-medium mb-4">
                  Account
                </p>
                <h1 className="font-serif font-light text-[2rem] md:text-[2.5rem] text-walnut leading-[1.1] tracking-[-0.02em]">
                  My Account
                </h1>
              </motion.div>

              {/* Profile Card */}
              <motion.div
                variants={staggerItem}
                className="bg-white rounded-2xl border border-sand/30 p-8 md:p-10 mb-8"
              >
                <div className="flex items-center gap-5 mb-8">
                  <div className="w-16 h-16 rounded-full bg-walnut text-cream flex items-center justify-center flex-shrink-0">
                    <span className="font-sans text-[1.125rem] font-semibold leading-none">
                      {initials}
                    </span>
                  </div>
                  <div>
                    <h2 className="font-serif font-light text-[1.5rem] text-walnut leading-tight">
                      {displayName}
                    </h2>
                    <p className="font-sans text-[0.8125rem] text-deep/50 mt-1">
                      {user.email}
                    </p>
                  </div>
                </div>

                <div className="space-y-5 border-t border-sand/20 pt-8">
                  <div>
                    <p className="font-sans text-[0.5625rem] uppercase tracking-[0.2em] text-olive font-medium mb-1.5">
                      Full Name
                    </p>
                    <p className="font-sans text-[0.9375rem] text-deep font-medium">
                      {firstName && lastName ? `${firstName} ${lastName}` : firstName || "Not set"}
                    </p>
                  </div>
                  <div>
                    <p className="font-sans text-[0.5625rem] uppercase tracking-[0.2em] text-olive font-medium mb-1.5">
                      Email
                    </p>
                    <p className="font-sans text-[0.9375rem] text-deep font-medium">
                      {user.email}
                    </p>
                  </div>
                  <div>
                    <p className="font-sans text-[0.5625rem] uppercase tracking-[0.2em] text-olive font-medium mb-1.5">
                      Member Since
                    </p>
                    <p className="font-sans text-[0.9375rem] text-deep font-medium">
                      {new Date(user.created_at).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Quick Links */}
              <motion.div
                variants={staggerItem}
                className="bg-white rounded-2xl border border-sand/30 p-8 md:p-10 mb-8"
              >
                <p className="font-sans text-[0.5625rem] uppercase tracking-[0.2em] text-olive font-medium mb-6">
                  Quick Links
                </p>
                <div className="space-y-4">
                  <a
                    href="/shop"
                    className="flex items-center justify-between py-3 border-b border-sand/15 last:border-0 group"
                  >
                    <span className="font-sans text-[0.9375rem] text-deep font-medium group-hover:text-walnut transition-colors">
                      Continue Shopping
                    </span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="text-deep/30 group-hover:text-walnut transition-colors"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </a>
                  <a
                    href="/collections"
                    className="flex items-center justify-between py-3 border-b border-sand/15 last:border-0 group"
                  >
                    <span className="font-sans text-[0.9375rem] text-deep font-medium group-hover:text-walnut transition-colors">
                      View Collections
                    </span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="text-deep/30 group-hover:text-walnut transition-colors"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </a>
                </div>
              </motion.div>

              {/* Sign Out */}
              <motion.div variants={staggerItem} className="text-center">
                <button
                  onClick={handleSignOut}
                  className="font-sans text-[0.8125rem] text-walnut/50 hover:text-walnut underline underline-offset-4 decoration-walnut/20 hover:decoration-walnut transition-colors font-medium"
                >
                  Sign out
                </button>
              </motion.div>
            </motion.div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
