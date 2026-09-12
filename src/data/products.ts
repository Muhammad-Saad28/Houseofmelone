import { Product, Category } from "@/types";

export type { Category };

export const products: Product[] = [
  {
    id: "1",
    name: "Black Shalwar Kameez",
    slug: "black-shalwar-kameez",
    category: "shalwar-kameez",
    categoryLabel: "Shalwar Kameez",
    price: 15000,
    priceUSD: 65,
    description: "Italian Wash & Wear fabric with fade resistance and lightweight comfort.",
    longDescription:
      "Crafted from premium Italian Wash & Wear fabric, this shalwar kameez combines traditional Pakistani tailoring with modern durability. The fabric resists fading, maintains its structure wash after wash, and provides all-day lightweight comfort. Suitable for both everyday wear and formal occasions.",
    colors: [
      { name: "Black", hex: "#1a1a1a" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB82Icm3J5lAWE4e3GFJgwaJ0G8v2VBP9nW6PjrTruo1pPcJ8rJTEtPHuFQRIVq78PM5nTbdBFliPzywhmhN4QJLcdaPyEKqxYtfC3kxmaFv8uIY27W9yinHSvaHmiGZMaVxb1vwg9zbvH_KSiyzWb2rzVJiHj_JxCzzZ3D10sJlocdL_eQ1Ebtjv-GPZCEznHTMviOZO0neWgt-nPXcRrWrIt7RSI6C_WPLY0iNozbsvvIQvEtatvM",
    ],
    featured: true,
    homepageOrder: 1,
    homepageSection: "Shalwar Kameez",
    homepageDescription: "Italian Wash & Wear fabric engineered for lasting color, structured drape, and everyday versatility. Traditional tailoring refined for the modern wardrobe.",
    inStock: true,
  },
  {
    id: "2",
    name: "Olive Green Shalwar Kameez",
    slug: "olive-green-shalwar-kameez",
    category: "shalwar-kameez",
    categoryLabel: "Shalwar Kameez",
    price: 15000,
    priceUSD: 65,
    description: "Italian Wash & Wear in a rich olive green. Fade-resistant and breathable.",
    longDescription:
      "This olive green variant brings an earthy sophistication to the classic shalwar kameez silhouette. Made from the same premium Italian Wash & Wear fabric, it offers excellent color retention and a smooth, breathable hand feel. A versatile piece that transitions seamlessly from day to evening.",
    colors: [
      { name: "Olive Green", hex: "#556B2F" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDDT4XJPqIU14q2c4A9H8F3kGrRL2utHgB6Al5wPWg9Dsfk9owpQNYxRaZWcWMnuC_c5m3I6o-C9h6oZZ8GiZ9H6ZdIuG_y_9YRbr6htrhR_olhoYDWKqqho8FXyuiO31w2HJ7tBh9WsgCLindnK9V9vCm8fc7e7L5OR1FecA6fUOMB2UDkhB7myTWP0MWsQZ3tBGKXULmBiZ2CDQIyTrkxdXI_XEuvanLH_nZWoMGNp-hzgFDHd7gM",
    ],
    featured: true,
    homepageOrder: 2,
    homepageSection: "Heritage Craft",
    homepageDescription: "Rooted in tradition. Each silhouette honors generations of Pakistani tailoring while embracing contemporary refinement and international sartorial standards.",
    inStock: true,
  },
  {
    id: "3",
    name: "White Irish Linen Shirt",
    slug: "white-irish-linen-shirt",
    category: "shirts",
    categoryLabel: "Irish Linen Shirts",
    price: 10000,
    priceUSD: 45,
    description: "100% premium Irish linen. Relaxed fit, button-down, breathable.",
    longDescription:
      "Cut from 100% premium Irish linen, this white shirt embodies understated summer luxury. The relaxed fit and breathable construction make it ideal for warm climates, while mother-of-pearl buttons and a soft-structured collar elevate it beyond casual. Wear it tucked or untucked — it adapts to your intent.",
    colors: [
      { name: "White", hex: "#F5F0E8" },
    ],
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBnFi_WgJS4z8BeWkO8yj5UEiwDpD-VBCdqg4pRUyiDn7Uozqov_YPmWrKJJpCWTbsN2nMRoqdKw67aGp1LgcFcSLM9JwBaByk9I2-JlUsFlvdrVtCIlncNgJfjbvbkDp0F5QsSH9jc2T6Sk5kOHUHnOpQaYWshdw6HlLMGrojmyqekvj2emRexsjyC1IXoYwV2MTKfyqYD-a-jpeMAta9EUMvIe7_IOGAoREAsatJYbTp76K7gDKJu",
    ],
    featured: true,
    homepageOrder: 3,
    homepageSection: "Irish Linen",
    homepageDescription: "Natural by design. 100% Irish linen breathes with you, drapes effortlessly, and ages beautifully with every wear.",
    inStock: true,
  },
  {
    id: "4",
    name: "Pink Irish Linen Shirt",
    slug: "pink-irish-linen-shirt",
    category: "shirts",
    categoryLabel: "Irish Linen Shirts",
    price: 10000,
    priceUSD: 45,
    description: "Soft pink Irish linen. Relaxed fit with premium construction.",
    longDescription:
      "A soft pink Irish linen shirt that brings warmth and quiet confidence to any outfit. The breathable flax fibers keep you cool while the relaxed silhouette ensures comfort without sacrificing structure. Finished with horn buttons and a gently curved hem.",
    colors: [
      { name: "Pink", hex: "#D4A5A5" },
    ],
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBnFi_WgJS4z8BeWkO8yj5UEiwDpD-VBCdqg4pRUyiDn7Uozqov_YPmWrKJJpCWTbsN2nMRoqdKw67aGp1LgcFcSLM9JwBaByk9I2-JlUsFlvdrVtCIlncNgJfjbvbkDp0F5QsSH9jc2T6Sk5kOHUHnOpQaYWshdw6HlLMGrojmyqekvj2emRexsjyC1IXoYwV2MTKfyqYD-a-jpeMAta9EUMvIe7_IOGAoREAsatJYbTp76K7gDKJu",
    ],
    featured: false,
    homepageOrder: 0,
    homepageSection: "",
    homepageDescription: "",
    inStock: true,
  },
  {
    id: "5",
    name: "Blue Stripe Pants",
    slug: "blue-stripe-pants",
    category: "pants",
    categoryLabel: "Tailored Pants",
    price: 7000,
    priceUSD: 30,
    description: "Tailored stripe pants in breathable cotton-linen blend.",
    longDescription:
      "These blue stripe pants combine precise tailoring with relaxed fabric. The cotton-linen blend provides breathability and a natural texture, while the subtle stripe pattern adds visual interest without overwhelming the silhouette. Designed to pair effortlessly with both linen shirts and shalwar kameez.",
    colors: [
      { name: "Blue Stripe", hex: "#4A6FA5" },
    ],
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB5nhkTm1sUu5htz-TGkKtUTkHWPaMlI5WEExnXy2bPeeVXpC3ctCnrcSulqzUAoJdynNz-vR-2-HI7Z5t1bfYWlIKein5W2L86YLl7F7elbyg524Ean5YoUzkJiLPvmO-HwBjrz4N2N89iej3fn8pKndp3KVYy5P7KP850OKZwCQjhVS7W8FoG52InrPUgfy2H-w3VACs8cjpDjhgnnFKBZt8EZZborDlauTdXjizzW_0WPOPdgMkZ",
    ],
    featured: true,
    homepageOrder: 4,
    homepageSection: "Tailored Pants",
    homepageDescription: "Precision cuts, refined fabrics. Each pair is engineered for clean lines and all-day comfort in warm and temperate climates.",
    inStock: true,
  },
  {
    id: "6",
    name: "Navy Blue Shacket Set",
    slug: "navy-blue-shacket-set",
    category: "matching-sets",
    categoryLabel: "Matching Sets",
    price: 25000,
    priceUSD: 110,
    description: "100% Irish linen shacket + tailored trousers. Coordinated luxury.",
    longDescription:
      "This navy blue matching set pairs a relaxed Irish linen shacket with tailored linen trousers. The coordinated silhouette creates an effortless, commanding presence. Perfect for weekend gatherings, resort wear, or any occasion that calls for refined ease without pretension.",
    colors: [
      { name: "Navy Blue", hex: "#1B2A4A" },
    ],
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD5EgVlBN4V7VZWmiioABcYql6WcGXZ3D5c22mwrKrDgiN0GsavC3Na3xBNM6Yj8B9CURbOSzkQFZsFB-zye-LKwqXLPVxpjx-Hn7R-whhnMir9GO_b3fYlWM_gJjMCpxroxC531loCXlWMsJL3CwB46aijbvh55SbltBcfx6S0VuMeeJezUlyvCuLlFtg-rT7O-cCRUyhkoj-49k0dHu_-ryv6A_tf86iUjCQGg3ZnjAHpjDkQu1pX",
    ],
    featured: true,
    homepageOrder: 5,
    homepageSection: "Matching Sets",
    homepageDescription: "Effortless coordination. Irish linen shacket paired with tailored trousers for a commanding yet relaxed presence.",
    inStock: true,
  },
  {
    id: "7",
    name: "Brown Shacket Set",
    slug: "brown-shacket-set",
    category: "matching-sets",
    categoryLabel: "Matching Sets",
    price: 25000,
    priceUSD: 110,
    description: "Rich brown Irish linen set. Shacket + trousers in premium linen.",
    longDescription:
      "A rich brown Irish linen matching set that exudes warmth and sophistication. The shacket features a relaxed camp collar and patch pockets, while the tapered trousers maintain a clean, tailored line. Ideal for evening gatherings or elevated casual wear.",
    colors: [
      { name: "Brown", hex: "#6B4226" },
    ],
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD5EgVlBN4V7VZWmiioABcYql6WcGXZ3D5c22mwrKrDgiN0GsavC3Na3xBNM6Yj8B9CURbOSzkQFZsFB-zye-LKwqXLPVxpjx-Hn7R-whhnMir9GO_b3fYlWM_gJjMCpxroxC531loCXlWMsJL3CwB46aijbvh55SbltBcfx6S0VuMeeJezUlyvCuLlFtg-rT7O-cCRUyhkoj-49k0dHu_-ryv6A_tf86iUjCQGg3ZnjAHpjDkQu1pX",
    ],
    featured: false,
    homepageOrder: 0,
    homepageSection: "",
    homepageDescription: "",
    inStock: true,
  },
  {
    id: "8",
    name: "Brown Leather Charsadda Chappal",
    slug: "brown-charsadda-chappal",
    category: "chappal",
    categoryLabel: "Charsadda Chappal",
    price: 4500,
    priceUSD: 20,
    description: "Handcrafted Charsadda Panjedar Chappal in full-grain brown leather.",
    longDescription:
      "Handcrafted by master cobblers in Charsadda, Khyber Pakhtunkhwa, this Panjedar Chappal represents generations of leather-working tradition. Full-grain vegetable-tanned leather, hand-braided straps, and a comfortable sole make this footwear both a cultural statement and a daily essential.",
    colors: [
      { name: "Brown", hex: "#7A411F" },
    ],
    sizes: ["40", "41", "42", "43", "44", "45"],
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBSKY2x0fjCD_NaAitUPMKbvcg7CsmcfYQBZrMT0Hdsn4lPGNpFKQOvBES2vZjLF30AI-3IUhBRUa-emLw8zhPZIGW4xToRd3qbNt0Eo5er2JxiAKrRAoR5J7G3ry3m7kk4mCcNws2Jt6YZNKV1R2HWnSXvdu2iA8TvGp0aK3US4DCdG-ep7pQpB4lHsMlo3r9a3_iJh5LivOLEdgyoKna1YZch4nsXI72hlKgMJhHqB_6Y1brLt3U4",
    ],
    featured: true,
    homepageOrder: 6,
    homepageSection: "Crafted in Heritage",
    homepageDescription: "Handcrafted in Charsadda by master cobblers. Four generations of leather-working tradition shaped into every pair.",
    inStock: true,
  },
  {
    id: "9",
    name: "Black Basic Trucker Cap",
    slug: "black-trucker-cap",
    category: "caps",
    categoryLabel: "Trucker Caps",
    price: 1500,
    priceUSD: 7,
    description: "Minimalist trucker cap in matte black. Structured fit.",
    longDescription:
      "A clean, minimalist trucker cap in matte black. Structured front panel, adjustable snapback, and breathable mesh back. The understated design makes it versatile enough for casual outings or as a finishing touch to a curated streetwear look.",
    colors: [
      { name: "Black", hex: "#1a1a1a" },
    ],
    sizes: ["One Size"],
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCze0ljZ4INaANpkhzgKzLPCnWhDj4X8F8YygGsECU5ypjgf1_sTGQAA9nSdKZpqyLeYQTv66S_nDBVVlOtSYTDp2pnJ4gLCyRojDhfUE255DnDDM-uu2pLHiITGC6vylY686eIpqXp5YqK7u7UiZD05HtB2CClJuDUvrENhx2hhaB3X_28US84LZz9xc8qIPi3a1pG7BfEAi5Z8cFwlbeL9IJYZKVDoAnoYyp6u344QrpqjsW6GpRy",
    ],
    featured: false,
    homepageOrder: 0,
    homepageSection: "",
    homepageDescription: "",
    inStock: true,
  },
  {
    id: "10",
    name: "Beige Charsadda Chappal",
    slug: "beige-charsadda-chappal",
    category: "chappal",
    categoryLabel: "Charsadda Chappal",
    price: 4500,
    priceUSD: 20,
    description: "Beige suede leather Charsadda Panjedar Chappal. Handcrafted.",
    longDescription:
      "This beige suede variant of the Charsadda Panjedar Chappal offers a lighter, more contemporary take on traditional Pashtun footwear. The soft suede leather molds to your foot over time, while the hand-braided detailing preserves the artisanal integrity of the original craft.",
    colors: [
      { name: "Beige", hex: "#C8B896" },
    ],
    sizes: ["40", "41", "42", "43", "44", "45"],
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBSKY2x0fjCD_NaAitUPMKbvcg7CsmcfYQBZrMT0Hdsn4lPGNpFKQOvBES2vZjLF30AI-3IUhBRUa-emLw8zhPZIGW4xToRd3qbNt0Eo5er2JxiAKrRAoR5J7G3ry3m7kk4mCcNws2Jt6YZNKV1R2HWnSXvdu2iA8TvGp0aK3US4DCdG-ep7pQpB4lHsMlo3r9a3_iJh5LivOLEdgyoKna1YZch4nsXI72hlKgMJhHqB_6Y1brLt3U4",
    ],
    featured: false,
    homepageOrder: 0,
    homepageSection: "",
    homepageDescription: "",
    inStock: true,
  },
];

export const categories = [
  { slug: "shalwar-kameez", label: "Shalwar Kameez", count: 6 },
  { slug: "shirts", label: "Irish Linen Shirts", count: 4 },
  { slug: "pants", label: "Tailored Pants", count: 4 },
  { slug: "matching-sets", label: "Matching Sets", count: 5 },
  { slug: "chappal", label: "Charsadda Chappal", count: 3 },
  { slug: "caps", label: "Trucker Caps", count: 3 },
  { slug: "gadgets", label: "Gadgets", count: 2 },
];

export const homepageFeatures = products
  .filter((p) => p.featured)
  .sort((a, b) => a.homepageOrder - b.homepageOrder);

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: Category): Product[] {
  return products.filter((p) => p.category === category);
}

export function formatPrice(price: number): string {
  return `Rs. ${price.toLocaleString("en-PK")}`;
}

export function formatPriceUSD(price: number): string {
  return `$${price} USD`;
}
