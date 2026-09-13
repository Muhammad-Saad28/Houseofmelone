"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (data.success) {
        router.push("/admin/dashboard");
      } else {
        setError("Invalid credentials. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div id="page-content">
        <main className="flex-1">
          <section className="w-full bg-[#EAE0D5] border-b border-walnut/10 py-20 md:py-28">
            <motion.div
              variants={staggerContainer(0.12)}
              initial="hidden"
              animate="visible"
              className="max-w-[720px] mx-auto px-5 md:px-8 text-center"
            >
              <motion.div variants={staggerItem} className="flex items-center gap-3 justify-center mb-8 md:mb-10">
                <span className="w-6 md:w-12 h-[1px] bg-walnut/25" />
                <span className="font-sans text-[0.55rem] md:text-[0.6875rem] uppercase tracking-[0.25em] text-olive font-medium">
                  Admin Access
                </span>
                <span className="w-6 md:w-12 h-[1px] bg-walnut/25" />
              </motion.div>
              <motion.h1
                variants={staggerItem}
                className="font-serif font-light text-[2rem] sm:text-[2.75rem] md:text-[3.25rem] leading-[1.05] tracking-[-0.01em] uppercase text-walnut"
              >
                Admin Panel
              </motion.h1>
            </motion.div>
          </section>

          <section className="w-full bg-cream py-16 md:py-24">
            <motion.div
              variants={staggerContainer(0.12)}
              initial="hidden"
              animate="visible"
              className="max-w-[440px] mx-auto px-5 md:px-8"
            >
              <motion.div
                variants={staggerItem}
                className="bg-[#EAE0D5]/60 rounded-2xl p-8 md:p-12"
              >
                {error && (
                  <p className="font-sans text-[0.8125rem] text-red-600 mb-6 text-center font-medium">
                    {error}
                  </p>
                )}

                <form onSubmit={handleLogin} className="space-y-6">
                  <div>
                    <label className="font-sans text-[0.5625rem] uppercase tracking-[0.2em] text-olive font-medium block mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full bg-white/60 border border-walnut/15 rounded-xl px-5 py-4 font-sans text-[0.9375rem] text-deep placeholder:text-deep/30 focus:outline-none focus:border-walnut/40 transition-colors duration-300 font-medium"
                      placeholder="admin@houseofmelone"
                    />
                  </div>
                  <div>
                    <label className="font-sans text-[0.5625rem] uppercase tracking-[0.2em] text-olive font-medium block mb-2">
                      Password
                    </label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="w-full bg-white/60 border border-walnut/15 rounded-xl px-5 py-4 font-sans text-[0.9375rem] text-deep placeholder:text-deep/30 focus:outline-none focus:border-walnut/40 transition-colors duration-300 font-medium"
                      placeholder="••••••••"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-walnut text-cream font-sans text-[0.6875rem] uppercase tracking-[0.22em] font-semibold hover:bg-deep transition-colors duration-300 disabled:opacity-70 rounded-xl"
                  >
                    {loading ? "Signing in..." : "Access Admin"}
                  </button>
                </form>
              </motion.div>
            </motion.div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
