import supabase from "@/lib/supabase/admin";
import { Product, Category } from "@/types";

const COLOR_HEX_MAP: Record<string, string> = {
  "black": "#1a1a1a",
  "white": "#F5F0E8",
  "off white": "#F5F0E8",
  "offwhite": "#F5F0E8",
  "brown": "#6B4226",
  "blue": "#4A6FA5",
  "navy blue": "#1B2A4A",
  "pink": "#D4A5A5",
  "olive green": "#556B2F",
  "army green": "#556B2F",
  "red wine maroon": "#722F37",
  "charcoal grey": "#36454F",
  "beige": "#C8B896",
  "green": "#2E8B57",
  "blue stripe": "#4A6FA5",
  "grey": "#808080",
};

function getColorHex(name: string): string {
  return COLOR_HEX_MAP[name.toLowerCase()] || "#888888";
}

function mapCategory(slug: string): Category {
  const map: Record<string, Category> = {
    "shalwar-kameez": "shalwar-kameez",
    "shirts": "shirts",
    "pants": "pants",
    "matching-sets": "matching-sets",
    "chappal": "chappal",
    "caps": "chappal",
  };
  return map[slug] || "shalwar-kameez";
}

interface SupabaseProduct {
  id: string;
  name: string;
  slug: string;
  description: string;
  short_description: string;
  base_price: number;
  compare_at_price: number | null;
  currency: string;
  stock_quantity: number;
  is_featured: boolean;
  is_new: boolean;
  is_bestseller: boolean;
  status: string;
  category_name: string | null;
  category_slug: string | null;
  primary_image: string | null;
  images: Array<{ id: string; url: string; alt: string; sort_order: number }> | string[];
  variants: Array<{
    id: string;
    sku: string;
    size: string | null;
    color: string | null;
    price: number | null;
    stock_quantity: number;
  }> | string[];
}

interface ImageItem {
  url: string;
}

interface VariantItem {
  color: string | null;
  size: string | null;
}

function transformProduct(row: SupabaseProduct): Product {
  let images: string[] = [];
  if (Array.isArray(row.images)) {
    images = row.images.map((img) => (typeof img === "string" ? img : (img as unknown as ImageItem).url));
  } else if (typeof row.images === "string") {
    try {
      const parsed: unknown[] = JSON.parse(row.images);
      images = parsed.map((img) => (typeof img === "string" ? img : (img as unknown as ImageItem).url));
    } catch {
      images = [];
    }
  }
  if (images.length === 0 && row.primary_image) {
    images = [row.primary_image];
  }

  let variants: VariantItem[] = [];
  if (Array.isArray(row.variants)) {
    variants = row.variants as unknown as VariantItem[];
  } else if (typeof row.variants === "string") {
    try {
      variants = JSON.parse(row.variants) as VariantItem[];
    } catch {
      variants = [];
    }
  }

  const colors = [
    ...new Set(variants.map((v) => v.color).filter(Boolean)),
  ].map((c) => ({
    name: c as string,
    hex: getColorHex(c as string),
  }));

  const sizes = [
    ...new Set(variants.map((v) => v.size).filter(Boolean)),
  ] as string[];

  if (colors.length === 0) {
    colors.push({ name: "Default", hex: "#888888" });
  }
  if (sizes.length === 0) {
    sizes.push("One Size");
  }

  return {
    id: row.id,
    name: row.name,
    slug: row.slug,
    category: mapCategory(row.category_slug || ""),
    categoryLabel: row.category_name || "Other",
    price: Number(row.base_price),
    priceUSD: Math.round(Number(row.base_price) / 230),
    description: row.short_description || row.description?.slice(0, 160) || "",
    longDescription: row.description || "",
    colors,
    sizes,
    images,
    featured: row.is_featured,
    homepageOrder: row.is_featured ? 1 : 0,
    homepageSection: row.category_name || "Collection",
    homepageDescription: row.description?.slice(0, 200) || "",
    inStock: row.stock_quantity > 0,
  };
}

export async function getAllProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from("product_catalog")
    .select("*")
    .eq("status", "active");

  if (error) {
    console.error("Error fetching products:", error);
    return [];
  }

  return (data as SupabaseProduct[]).map(transformProduct);
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const { data, error } = await supabase
    .from("product_catalog")
    .select("*")
    .eq("slug", slug)
    .eq("status", "active")
    .single();

  if (error || !data) {
    return null;
  }

  return transformProduct(data as SupabaseProduct);
}

export async function getFeaturedProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from("product_catalog")
    .select("*")
    .eq("status", "active")
    .eq("is_featured", true);

  if (error) {
    console.error("Error fetching featured products:", error);
    return [];
  }

  return (data as SupabaseProduct[]).map(transformProduct);
}

export async function getProductsByCategory(categorySlug: string): Promise<Product[]> {
  const { data, error } = await supabase
    .from("product_catalog")
    .select("*")
    .eq("status", "active")
    .eq("category_slug", categorySlug);

  if (error) {
    console.error("Error fetching products by category:", error);
    return [];
  }

  return (data as SupabaseProduct[]).map(transformProduct);
}

interface CategoryRow {
  slug: string;
  name: string;
}

export async function getCategories(): Promise<Array<{ slug: string; label: string; count: number }>> {
  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .eq("is_active", true)
    .order("sort_order");

  if (error) {
    console.error("Error fetching categories:", error);
    return [];
  }

  return (data as CategoryRow[]).map((cat) => ({
    slug: cat.slug,
    label: cat.name,
    count: 0,
  }));
}


