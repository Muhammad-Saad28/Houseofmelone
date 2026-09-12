import { NextResponse } from "next/server";
import { getFeaturedProducts } from "@/lib/data";

export async function GET() {
  const products = await getFeaturedProducts();
  return NextResponse.json(products);
}
