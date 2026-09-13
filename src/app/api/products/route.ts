import { NextResponse } from "next/server";
import { getAllProducts } from "@/lib/data";

export async function GET() {
  try {
    const products = await getAllProducts();
    return NextResponse.json(products);
  } catch (err) {
    console.error("[/api/products] Error:", err);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
