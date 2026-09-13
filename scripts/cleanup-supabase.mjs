import "dotenv/config";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error("Missing Supabase credentials in .env");
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function cleanup() {
  console.log("Cleaning up existing data...\n");

  // Delete in order respecting foreign keys
  const tables = [
    "product_tags",
    "product_option_values",
    "product_options",
    "product_variants",
    "product_images",
    "discount_products",
    "collection_products",
    "cart_items",
    "order_items",
    "payments",
    "orders",
    "reviews",
    "wishlists",
    "products",
    "tags",
    "collections",
    "discounts",
    "carts",
    "addresses",
    "profiles",
    "newsletter_subscribers",
    "contact_messages",
  ];

  for (const table of tables) {
    const { error } = await supabase.from(table).delete().neq("id", "00000000-0000-0000-0000-000000000000");
    if (error) {
      // Some tables may use text IDs or have different PKs
      const { error: err2 } = await supabase.from(table).delete().not("id", "is", null);
      if (err2) {
        console.log(`  ⚠ ${table}: ${err2.message}`);
      } else {
        console.log(`  ✓ ${table} cleared`);
      }
    } else {
      console.log(`  ✓ ${table} cleared`);
    }
  }

  // Re-seed categories
  console.log("\nSeeding categories...");
  const categories = [
    { name: "Shalwar Kameez", slug: "shalwar-kameez", description: "Refined traditional Pakistani menswear.", sort_order: 1 },
    { name: "Irish Linen", slug: "shirts", description: "Premium linen shirts for effortless tailoring.", sort_order: 2 },
    { name: "Tailored Pants", slug: "pants", description: "Contemporary tailored trousers.", sort_order: 3 },
    { name: "Matching Sets", slug: "matching-sets", description: "Coordinated menswear sets.", sort_order: 4 },
    { name: "Chappal", slug: "chappal", description: "Traditional handcrafted footwear.", sort_order: 5 },
    { name: "Trucker Caps", slug: "caps", description: "Premium trucker caps.", sort_order: 6 },
  ];

  const { error: catError } = await supabase.from("categories").upsert(categories, { onConflict: "slug" });
  if (catError) {
    console.error("Error seeding categories:", catError.message);
  } else {
    console.log("  ✓ 6 categories seeded");
  }

  console.log("\nCleanup complete! Run 'node scripts/upload-products.mjs' to re-import.");
}

cleanup().catch(console.error);
