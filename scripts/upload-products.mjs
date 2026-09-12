import "dotenv/config";
import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";
import { parse } from "csv-parse/sync";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error("Missing Supabase credentials in .env");
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const CATEGORY_MAP = {
  "Shirts": "shirts",
  "shirts": "shirts",
  "Shirt and pants": "matching-sets",
  "Shalwar Kameez": "shalwar-kameez",
  "Pants": "pants",
  "Charsadda Panjedar Chappal": "chappal",
  "Caps": "chappal",
};

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function stripHtml(html) {
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

async function getCategories() {
  const { data, error } = await supabase.from("categories").select("id, slug");
  if (error) throw error;
  const map = {};
  for (const cat of data) map[cat.slug] = cat.id;
  return map;
}

async function uploadProducts() {
  const csvPath = path.join(process.cwd(), "public", "all_products_houseofmelone.com.csv");
  const csvContent = fs.readFileSync(csvPath, "utf-8");

  const records = parse(csvContent, {
    columns: true,
    skip_empty_lines: true,
    relax_column_count: true,
  });

  const categoryMap = await getCategories();
  console.log("Categories loaded:", Object.keys(categoryMap));

  const productMap = {};

  for (const row of records) {
    const handle = row["Handle"]?.trim();
    if (!handle) continue;

    if (!productMap[handle]) {
      const catSlug = CATEGORY_MAP[row["Product Category"]] || "shalwar-kameez";
      const categoryId = categoryMap[catSlug] || null;

      productMap[handle] = {
        name: row["Title"] || handle.replace(/-/g, " "),
        slug: handle,
        description: stripHtml(row["Body (HTML)"] || ""),
        short_description: stripHtml(row["Body (HTML)"] || "").slice(0, 160),
        category_id: categoryId,
        brand: row["Vendor"] || "House of Melone",
        status: row["Status"] === "active" ? "active" : "draft",
        base_price: parseFloat(row["Variant Price"]) || 0,
        compare_at_price: row["Variant Compare At Price"]
          ? parseFloat(row["Variant Compare At Price"])
          : null,
        stock_quantity: parseInt(row["Variant Inventory Qty"]) || 0,
        meta_title: row["SEO Title"] || null,
        meta_description: row["SEO Description"] || null,
        tags: row["Tags"]
          ? row["Tags"].split(",").map((t) => t.trim())
          : [],
        variants: [],
        images: [],
      };
    }

    const product = productMap[handle];

    const variantName = row["Option1 Name"];
    const variantValue = row["Option1 Value"];
    const sizeName = row["Option2 Name"];
    const sizeValue = row["Option2 Value"];

    if (variantValue || sizeValue) {
      const sku = row["Variant SKU"] || null;
      const existing = product.variants.find(
        (v) => v.sku === sku && v.color === variantValue && v.size === sizeValue
      );

      if (!existing && (variantValue || sizeValue)) {
        product.variants.push({
          sku: sku || `${handle}-${variantValue || ""}-${sizeValue || ""}`.replace(/-+$/, ""),
          color: variantValue || null,
          size: sizeValue || null,
          price: parseFloat(row["Variant Price"]) || product.base_price,
          compare_at_price: row["Variant Compare At Price"]
            ? parseFloat(row["Variant Compare At Price"])
            : null,
          stock_quantity: parseInt(row["Variant Inventory Qty"]) || 0,
        });
      }
    }

    const imageSrc = row["Image Src"]?.trim();
    if (imageSrc && !product.images.find((img) => img.url === imageSrc)) {
      product.images.push({
        url: imageSrc,
        alt_text: row["Image Alt Text"] || product.name,
        sort_order: parseInt(row["Image Position"]) || product.images.length + 1,
        is_primary: parseInt(row["Image Position"]) === 1,
      });
    }
  }

  const products = Object.values(productMap);
  console.log(`Found ${products.length} unique products`);

  let inserted = 0;
  let errors = 0;

  for (const product of products) {
    try {
      const { images, tags, variants, ...productData } = product;

      const { data: productRow, error: productError } = await supabase
        .from("products")
        .upsert(productData, { onConflict: "slug" })
        .select("id")
        .single();

      if (productError) {
        console.error(`Error inserting product ${product.slug}:`, productError.message);
        errors++;
        continue;
      }

      const productId = productRow.id;

      if (images.length > 0) {
        const imageRecords = images.map((img) => ({
          product_id: productId,
          image_url: img.url,
          alt_text: img.alt_text,
          sort_order: img.sort_order,
          is_primary: img.is_primary,
        }));

        await supabase.from("product_images").upsert(imageRecords, {
          onConflict: "id",
          ignoreDuplicates: true,
        });
      }

      if (variants.length > 0) {
        const variantRecords = variants.map((v) => ({
          product_id: productId,
          sku: v.sku,
          color: v.color,
          size: v.size,
          price: v.price,
          compare_at_price: v.compare_at_price,
          stock_quantity: v.stock_quantity,
          is_active: true,
        }));

        await supabase.from("product_variants").upsert(variantRecords, {
          onConflict: "sku",
          ignoreDuplicates: true,
        });
      }

      if (tags.length > 0) {
        const tagRecords = tags.map((tagName) => ({
          name: tagName,
          slug: slugify(tagName),
        }));

        await supabase.from("tags").upsert(tagRecords, {
          onConflict: "slug",
          ignoreDuplicates: true,
        });

        const { data: allTags } = await supabase
          .from("tags")
          .select("id, slug")
          .in("slug", tagRecords.map((t) => t.slug));

        if (allTags) {
          const productTagRecords = allTags.map((tag) => ({
            product_id: productId,
            tag_id: tag.id,
          }));

          await supabase.from("product_tags").upsert(productTagRecords, {
            onConflict: "product_id,tag_id",
            ignoreDuplicates: true,
          });
        }
      }

      inserted++;
      console.log(`✓ ${product.slug} (${images.length} images, ${variants.length} variants)`);
    } catch (err) {
      console.error(`Error with ${product.slug}:`, err.message);
      errors++;
    }
  }

  console.log(`\nDone! Inserted: ${inserted}, Errors: ${errors}`);
}

uploadProducts().catch(console.error);
