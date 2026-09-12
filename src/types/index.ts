export interface Product {
  id: string;
  name: string;
  slug: string;
  category: Category;
  categoryLabel: string;
  price: number;
  priceUSD: number;
  description: string;
  longDescription: string;
  colors: ProductColor[];
  sizes: string[];
  images: string[];
  featured: boolean;
  homepageOrder: number;
  homepageSection: string;
  homepageDescription: string;
  inStock: boolean;
}

export interface ProductColor {
  name: string;
  hex: string;
}

export type Category =
  | "shalwar-kameez"
  | "shirts"
  | "pants"
  | "matching-sets"
  | "chappal"
  | "caps"
  | "gadgets";

export interface CartItem {
  id: string;
  product: Product;
  color: ProductColor;
  size: string;
  quantity: number;
}

export interface HomepageSection {
  id: string;
  type: "hero" | "carousel" | "product" | "grid" | "story" | "newsletter";
  productId?: string;
  title: string;
  subtitle?: string;
  description?: string;
  imagePosition?: "left" | "right";
  sortOrder: number;
  isActive: boolean;
}
