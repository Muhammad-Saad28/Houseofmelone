"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { createClient } from "@/lib/supabase/client";

interface Product {
  id: string;
  name: string;
  slug: string;
  base_price: number;
  status: string;
  is_featured: boolean;
  stock_quantity: number;
  category_id: string;
  description: string;
}

interface Category {
  id: string;
  name: string;
  slug: string;
}

export default function AdminDashboard() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    checkAuth();
    fetchProducts();
    fetchCategories();
  }, []);

  const checkAuth = async () => {
    const cookies = document.cookie.split(";");
    const adminCookie = cookies.find((c) => c.trim().startsWith("admin_token="));
    if (!adminCookie) {
      router.push("/admin");
    }
  };

  const fetchProducts = async () => {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("created_at", { ascending: false });

    if (data) {
      setProducts(data);
    }
    setLoading(false);
  };

  const fetchCategories = async () => {
    const { data } = await supabase
      .from("categories")
      .select("*")
      .order("name");

    if (data) {
      setCategories(data);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this product?")) return;

    const { error } = await supabase.from("products").delete().eq("id", id);

    if (!error) {
      setProducts(products.filter((p) => p.id !== id));
    }
  };

  const handleStatusToggle = async (id: string, currentStatus: string) => {
    const newStatus = currentStatus === "active" ? "draft" : "active";
    const { error } = await supabase
      .from("products")
      .update({ status: newStatus, updated_at: new Date().toISOString() })
      .eq("id", id);

    if (!error) {
      setProducts(
        products.map((p) => (p.id === id ? { ...p, status: newStatus } : p))
      );
    }
  };

  const handleFeaturedToggle = async (id: string, current: boolean) => {
    const { error } = await supabase
      .from("products")
      .update({ is_featured: !current, updated_at: new Date().toISOString() })
      .eq("id", id);

    if (!error) {
      setProducts(
        products.map((p) => (p.id === id ? { ...p, is_featured: !current } : p))
      );
    }
  };

  const handleLogout = async () => {
    await fetch("/api/admin/auth/logout", { method: "DELETE" });
    router.push("/admin");
  };

  const getCategoryName = (categoryId: string) => {
    const cat = categories.find((c) => c.id === categoryId);
    return cat?.name || "Unknown";
  };

  if (loading) {
    return (
      <>
        <Header />
        <div id="page-content">
          <main className="flex-1 flex items-center justify-center min-h-[60vh]">
            <p className="font-sans text-[0.875rem] text-walnut/60">Loading products...</p>
          </main>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div id="page-content">
        <main className="flex-1">
          {/* Hero Section */}
          <section className="w-full bg-[#EAE0D5] border-b border-walnut/10 py-16 md:py-20">
            <motion.div
              variants={staggerContainer(0.12)}
              initial="hidden"
              animate="visible"
              className="max-w-[1200px] mx-auto px-5 md:px-8"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <motion.div variants={staggerItem} className="flex items-center gap-3 mb-4">
                    <span className="w-6 h-[1px] bg-walnut/25" />
                    <span className="font-sans text-[0.55rem] uppercase tracking-[0.25em] text-olive font-medium">
                      Admin
                    </span>
                    <span className="w-6 h-[1px] bg-walnut/25" />
                  </motion.div>
                  <motion.h1
                    variants={staggerItem}
                    className="font-serif font-light text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] leading-[1.05] tracking-[-0.01em] uppercase text-walnut"
                  >
                    Product Management
                  </motion.h1>
                </div>
                <motion.div variants={staggerItem} className="flex gap-3">
                  <button
                    onClick={() => setShowAddForm(true)}
                    className="px-6 py-3 bg-walnut text-cream font-sans text-[0.6875rem] uppercase tracking-[0.18em] font-semibold hover:bg-deep transition-colors duration-300 rounded-xl"
                  >
                    Add Product
                  </button>
                  <button
                    onClick={handleLogout}
                    className="px-6 py-3 border border-walnut/20 text-deep font-sans text-[0.6875rem] uppercase tracking-[0.18em] font-medium hover:border-walnut/40 transition-colors duration-300 rounded-xl"
                  >
                    Sign Out
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Products Table */}
          <section className="w-full bg-cream py-12 md:py-16">
            <div className="max-w-[1200px] mx-auto px-5 md:px-8">
              <motion.div
                variants={staggerContainer(0.08)}
                initial="hidden"
                animate="visible"
              >
                <motion.div variants={staggerItem} className="mb-6">
                  <p className="font-sans text-[0.8125rem] text-deep/60 font-medium">
                    {products.length} product{products.length !== 1 ? "s" : ""} total
                  </p>
                </motion.div>

                <motion.div variants={staggerItem} className="bg-[#EAE0D5]/60 rounded-2xl overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-walnut/10">
                          <th className="text-left px-6 py-4 font-sans text-[0.5625rem] uppercase tracking-[0.2em] text-olive font-medium">
                            Product
                          </th>
                          <th className="text-left px-6 py-4 font-sans text-[0.5625rem] uppercase tracking-[0.2em] text-olive font-medium hidden md:table-cell">
                            Category
                          </th>
                          <th className="text-left px-6 py-4 font-sans text-[0.5625rem] uppercase tracking-[0.2em] text-olive font-medium hidden sm:table-cell">
                            Price
                          </th>
                          <th className="text-left px-6 py-4 font-sans text-[0.5625rem] uppercase tracking-[0.2em] text-olive font-medium">
                            Status
                          </th>
                          <th className="text-left px-6 py-4 font-sans text-[0.5625rem] uppercase tracking-[0.2em] text-olive font-medium hidden lg:table-cell">
                            Stock
                          </th>
                          <th className="text-right px-6 py-4 font-sans text-[0.5625rem] uppercase tracking-[0.2em] text-olive font-medium">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {products.map((product) => (
                          <tr
                            key={product.id}
                            className="border-b border-walnut/5 last:border-0 hover:bg-white/40 transition-colors"
                          >
                            <td className="px-6 py-4">
                              <p className="font-sans text-[0.875rem] text-deep font-medium">
                                {product.name}
                              </p>
                              <p className="font-sans text-[0.6875rem] text-deep/40 mt-0.5 md:hidden">
                                {getCategoryName(product.category_id)}
                              </p>
                            </td>
                            <td className="px-6 py-4 hidden md:table-cell">
                              <span className="font-sans text-[0.8125rem] text-deep/70 font-medium">
                                {getCategoryName(product.category_id)}
                              </span>
                            </td>
                            <td className="px-6 py-4 hidden sm:table-cell">
                              <span className="font-sans text-[0.8125rem] text-deep font-medium">
                                PKR {product.base_price.toLocaleString()}
                              </span>
                            </td>
                            <td className="px-6 py-4">
                              <button
                                onClick={() => handleStatusToggle(product.id, product.status)}
                                className={`px-3 py-1.5 rounded-full font-sans text-[0.625rem] uppercase tracking-[0.1em] font-medium transition-colors ${
                                  product.status === "active"
                                    ? "bg-olive/15 text-olive hover:bg-olive/25"
                                    : "bg-sand/40 text-deep/50 hover:bg-sand/60"
                                }`}
                              >
                                {product.status}
                              </button>
                            </td>
                            <td className="px-6 py-4 hidden lg:table-cell">
                              <span className={`font-sans text-[0.8125rem] font-medium ${
                                product.stock_quantity <= 5 ? "text-red-600" : "text-deep/70"
                              }`}>
                                {product.stock_quantity}
                              </span>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center justify-end gap-2">
                                <button
                                  onClick={() => handleFeaturedToggle(product.id, product.is_featured)}
                                  className={`p-2 rounded-lg transition-colors ${
                                    product.is_featured
                                      ? "text-walnut bg-walnut/10"
                                      : "text-deep/30 hover:text-walnut/60"
                                  }`}
                                  title="Toggle featured"
                                >
                                  <svg width="14" height="14" viewBox="0 0 24 24" fill={product.is_featured ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5">
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                  </svg>
                                </button>
                                <button
                                  onClick={() => setEditingProduct(product)}
                                  className="p-2 text-deep/30 hover:text-walnut/60 transition-colors rounded-lg"
                                  title="Edit"
                                >
                                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                  </svg>
                                </button>
                                <button
                                  onClick={() => handleDelete(product.id)}
                                  className="p-2 text-deep/30 hover:text-red-500 transition-colors rounded-lg"
                                  title="Delete"
                                >
                                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <polyline points="3 6 5 6 21 6" />
                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                  </svg>
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
