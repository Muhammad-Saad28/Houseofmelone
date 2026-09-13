"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useAuth } from "@/components/AuthProvider";
import { createClient } from "@/lib/supabase/client";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function AccountPage() {
  const { user, loading, signOut } = useAuth();
  const router = useRouter();
  const supabase = createClient();

  const [editing, setEditing] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  useEffect(() => {
    if (user) {
      setFirstName(user.user_metadata?.first_name || "");
      setLastName(user.user_metadata?.last_name || "");
    }
  }, [user]);

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

  const displayName = firstName || user.email?.split("@")[0] || "Account";
  const initials = firstName && lastName
    ? `${firstName[0]}${lastName[0]}`.toUpperCase()
    : firstName
      ? firstName[0].toUpperCase()
      : user.email?.[0].toUpperCase() || "U";

  const handleSave = async () => {
    setSaving(true);
    setSuccess("");

    const { error } = await supabase.auth.updateUser({
      data: {
        first_name: firstName,
        last_name: lastName,
      },
    });

    if (!error) {
      setSuccess("Profile updated successfully.");
      setEditing(false);
    }
    setSaving(false);
  };

  const handleSignOut = async () => {
    await signOut();
    router.push("/");
  };

  return (
    <>
      <Header />
      <div id="page-content">
        <main className="flex-1">
          {/* Hero Section */}
          <section className="w-full bg-[#EAE0D5] border-b border-walnut/10 py-20 md:py-28">
            <motion.div
              variants={staggerContainer(0.12)}
              initial="hidden"
              animate="visible"
              className="max-w-[720px] mx-auto px-5 md:px-8 text-center"
            >
              <br></br>
              <motion.div variants={staggerItem} className="flex items-center gap-3 justify-center mb-8 md:mb-10">
                <span className="w-6 md:w-12 h-[1px] bg-walnut/25" />
                <span className="font-sans text-[0.55rem] md:text-[0.6875rem] uppercase tracking-[0.25em] text-olive font-medium">
                  Account
                </span>
                <span className="w-6 md:w-12 h-[1px] bg-walnut/25" />
              </motion.div>
              <motion.h1
                variants={staggerItem}
                className="font-serif font-light text-[2rem] sm:text-[2.75rem] md:text-[3.25rem] leading-[1.05] tracking-[-0.01em] uppercase text-walnut mb-6"
              >
                My Account
              </motion.h1>
              <motion.p
                variants={staggerItem}
                className="font-sans text-[0.8rem] md:text-[0.95rem] leading-[1.8] text-deep/60 max-w-[460px] mx-auto font-medium"
              >
                Manage your profile, view orders, and keep your details up to date.
              </motion.p>
              <br></br>
            </motion.div>
          </section>

          {/* Profile Section */}
          <section className="w-full bg-cream py-16 md:py-24">
            <motion.div
              variants={staggerContainer(0.12)}
              initial="hidden"
              animate="visible"
              className="max-w-[720px] mx-auto px-5 md:px-8 text-center"
            >
              {/* Profile Card */}
              <motion.div
                variants={staggerItem}
                className="bg-transparent rounded-2xl p-8 md:p-12 mb-10 text-center"
              >
                <div className="flex flex-col items-center gap-6 mb-10">
                  <div className="w-20 h-20 rounded-full bg-walnut text-cream flex items-center justify-center flex-shrink-0">
                    <span className="font-serif text-[1.5rem] font-light leading-none">
                      {initials}
                    </span>
                  </div>
                  <div className="text-center">
                    <h2 className="font-serif font-light text-[1.75rem] md:text-[2rem] text-walnut leading-tight">
                      {displayName}
                    </h2>
                    <p className="font-sans text-[0.875rem] text-deep/50 mt-2 font-medium">
                      {user.email}
                    </p>
                  </div>
                </div>

                <div className="border-t border-walnut/10 pt-8">
                  <br></br>
                  {success && (
                    <p className="font-sans text-[0.8125rem] text-olive mb-6 font-medium">{success}</p>
                  )}
                  {editing ? (
                    <div className="space-y-5 max-w-[360px] mx-auto text-center">
                      <div>
                        <label className="font-sans text-[0.5625rem] uppercase tracking-[0.2em] text-olive font-medium block mb-2">
                          First Name
                        </label>
                        <input
                          type="text"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          className="w-full bg-white/60 border border-walnut/15 rounded-xl px-5 py-3.5 font-sans text-[0.9375rem] text-deep focus:outline-none focus:border-walnut/40 transition-colors duration-300 font-medium text-center"
                          placeholder="First name"
                        />
                      </div>
                      <div>
                        <label className="font-sans text-[0.5625rem] uppercase tracking-[0.2em] text-olive font-medium block mb-2">
                          Last Name
                        </label>
                        <input
                          type="text"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          className="w-full bg-white/60 border border-walnut/15 rounded-xl px-5 py-3.5 font-sans text-[0.9375rem] text-deep focus:outline-none focus:border-walnut/40 transition-colors duration-300 font-medium text-center"
                          placeholder="Last name"
                        />
                      </div>
                      <div className="flex gap-3 pt-2">
                        <button
                          onClick={handleSave}
                          disabled={saving}
                          className="flex-1 py-3.5 bg-walnut text-cream font-sans text-[0.6875rem] uppercase tracking-[0.18em] font-semibold hover:bg-deep transition-colors duration-300 disabled:opacity-70 rounded-xl"
                        >
                          {saving ? "Saving..." : "Save"}
                        </button>
                        <button
                          onClick={() => { setEditing(false); setFirstName(user.user_metadata?.first_name || ""); setLastName(user.user_metadata?.last_name || ""); }}
                          className="flex-1 py-3.5 border border-walnut/20 text-deep font-sans text-[0.6875rem] uppercase tracking-[0.18em] font-medium hover:border-walnut/40 transition-colors duration-300 rounded-xl"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[400px] mx-auto text-center">
                      <div>
                        <p className="font-sans text-[0.5625rem] uppercase tracking-[0.2em] text-olive font-medium mb-2">
                          First Name
                        </p>
                        <p className="font-sans text-[0.9375rem] text-deep font-medium">
                          {firstName || "Not set"}
                        </p>
                      </div>
                      <div>
                        <p className="font-sans text-[0.5625rem] uppercase tracking-[0.2em] text-olive font-medium mb-2">
                          Last Name
                        </p>
                        <p className="font-sans text-[0.9375rem] text-deep font-medium">
                          {lastName || "Not set"}
                        </p>
                      </div>
                      <div className="sm:col-span-2">
                        <p className="font-sans text-[0.5625rem] uppercase tracking-[0.2em] text-olive font-medium mb-2">
                          Email
                        </p>
                        <p className="font-sans text-[0.9375rem] text-deep font-medium">
                          {user.email}
                        </p>
                      </div>
                      <div className="sm:col-span-2">
                        <p className="font-sans text-[0.5625rem] uppercase tracking-[0.2em] text-olive font-medium mb-2">
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
                      <div className="sm:col-span-2 pt-2">
                        <button
                          onClick={() => setEditing(true)}
                          className="w-full py-3.5 border border-walnut/20 text-deep font-sans text-[0.6875rem] uppercase tracking-[0.18em] font-medium hover:border-walnut/40 transition-colors duration-300 rounded-xl"
                        >
                          Edit Profile
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>

              <br></br>

              {/* Quick Links */}
              <motion.div variants={staggerItem}>
                <div className="flex items-center gap-3 mb-8 justify-center">
                  <span className="w-6 h-[1px] bg-walnut/25" />
                  <span className="font-sans text-[0.55rem] uppercase tracking-[0.25em] text-olive font-medium">
                    Quick Links
                  </span>
                  <span className="w-6 h-[1px] bg-walnut/25" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[400px] mx-auto">
                  <a
                    href="/shop"
                    className="flex flex-col items-center justify-center border border-walnut/10 rounded-xl px-6 py-5 group hover:border-walnut/30 transition-colors duration-300 text-center"
                  >
                    <span className="font-sans text-[0.875rem] text-deep font-medium group-hover:text-walnut transition-colors">
                      Continue Shopping
                    </span>
                  </a>
                  <a
                    href="/collections"
                    className="flex flex-col items-center justify-center border border-walnut/10 rounded-xl px-6 py-5 group hover:border-walnut/30 transition-colors duration-300 text-center"
                  >
                    <span className="font-sans text-[0.875rem] text-deep font-medium group-hover:text-walnut transition-colors">
                      View Collections
                    </span>
                  </a>
                </div>
              </motion.div>

              {/* Sign Out */}
              <motion.div variants={staggerItem} className="mt-12 text-center">
                <button
                  onClick={handleSignOut}
                  className="font-sans text-[0.8125rem] text-walnut/50 hover:text-walnut underline underline-offset-4 decoration-walnut/20 hover:decoration-walnut transition-colors font-medium"
                >
                  Sign out
                </button>
              </motion.div>
              <br></br>
            </motion.div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
