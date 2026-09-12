"use client";

import { motion, AnimatePresence } from "framer-motion";
import { formatPrice } from "@/data/products";
import { cartOverlay, cartPanel } from "@/lib/animations";

interface CartItemData {
  id: string;
  name: string;
  color: string;
  size: string;
  quantity: number;
  price: number;
  image: string;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItemData[];
  onRemove: (id: string) => void;
}

const WHATSAPP_NUMBER = "923372388118";

export default function CartDrawer({
  isOpen,
  onClose,
  items,
  onRemove,
}: CartDrawerProps) {
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    const itemsText = items
      .map(
        (item, i) =>
          `${i + 1}. ${item.name} — ${item.color} / ${item.size} × ${item.quantity} — ${formatPrice(item.price)}`
      )
      .join("%0A");

    const message = `*New Order — House of Melone*%0A%0A${itemsText}%0A%0A*Subtotal: ${formatPrice(subtotal)}*%0A%0APlease confirm this order. 50% advance payment required.%0A%0AThank you!`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`,
      "_blank"
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            variants={cartOverlay}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-[80] bg-walnut/50"
            onClick={onClose}
          />
          <motion.div
            variants={cartPanel}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-0 right-0 h-full w-full max-w-md z-[90] bg-cream shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="px-6 py-5 bg-cream-dim flex items-center justify-between border-b border-sand/40">
              <span className="text-[0.6875rem] uppercase tracking-[0.14em] font-semibold text-walnut">
                Shopping Bag ({items.length})
              </span>
              <button
                onClick={onClose}
                className="p-1 text-deep hover:text-walnut transition-colors"
                aria-label="Close cart"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <div className="py-16 text-center text-deep/40">
                  <svg
                    className="mx-auto mb-4 opacity-30"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <path d="M16 10a4 4 0 0 1-8 0" />
                  </svg>
                  <p className="text-[0.9375rem]">Your bag is empty</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-4 pb-4 border-b border-sand/20"
                    >
                      <div className="w-20 h-24 bg-cream-dim overflow-hidden flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start">
                            <h4 className="text-[0.9375rem] font-medium text-deep">
                              {item.name}
                            </h4>
                            <button
                              onClick={() => onRemove(item.id)}
                              className="text-deep/40 hover:text-red-600 transition-colors"
                              aria-label="Remove item"
                            >
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                              >
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                              </svg>
                            </button>
                          </div>
                          <p className="text-[0.6875rem] uppercase tracking-[0.1em] text-olive mt-0.5">
                            {item.color} &bull; {item.size}
                          </p>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-[0.8125rem] font-medium text-walnut">
                            {formatPrice(item.price)}
                          </span>
                          <span className="text-[0.75rem] text-deep/50">
                            Qty: {item.quantity}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="px-6 py-6 bg-cream-dim border-t border-sand/40 space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-[0.8125rem] text-deep/60">
                    <span>Subtotal</span>
                    <span className="font-medium text-deep">
                      {formatPrice(subtotal)}
                    </span>
                  </div>
                  <div className="flex justify-between text-[0.8125rem] text-deep/60">
                    <span>Shipping</span>
                    <span className="text-olive text-[0.6875rem] uppercase tracking-[0.1em] font-semibold">
                      Complimentary
                    </span>
                  </div>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full py-4 bg-walnut text-cream text-[0.6875rem] uppercase tracking-[0.14em] font-semibold hover:bg-deep transition-colors text-center"
                >
                  Order via WhatsApp
                </button>
                <p className="text-center text-[0.6875rem] text-deep/40 uppercase tracking-[0.1em]">
                  50% advance payment required to confirm
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
