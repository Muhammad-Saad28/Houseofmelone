import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatPrice(price: number): string {
  return `Rs. ${price.toLocaleString("en-PK")}`;
}

export function formatPriceUSD(price: number): string {
  return `$${price} USD`;
}

export function generateWhatsAppUrl(
  phone: string,
  cartItems: Array<{
    name: string;
    color: string;
    size: string;
    quantity: number;
    price: number;
  }>,
  subtotal: number
): string {
  const itemsText = cartItems
    .map(
      (item, i) =>
        `${i + 1}. ${item.name} — ${item.color} / ${item.size} × ${item.quantity} — Rs. ${item.price.toLocaleString("en-PK")}`
    )
    .join("\n");

  const message = `*New Order — House of Melone*\n\n${itemsText}\n\n*Subtotal: Rs. ${subtotal.toLocaleString("en-PK")}*\n\nPlease confirm this order. 50% advance payment required.\n\nThank you!`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
