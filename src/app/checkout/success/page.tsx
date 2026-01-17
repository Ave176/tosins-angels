"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CheckoutSuccessPage() {
  const { clearCart } = useCart();

  useEffect(() => {
    // Clear the cart after successful payment
    clearCart();
  }, [clearCart]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-cream">
      <div className="bg-white rounded-lg p-8 max-w-md w-full text-center shadow-sm">
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-10 h-10 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="text-3xl font-serif font-bold text-charcoal mb-2">
          Thank You!
        </h1>

        <p className="text-gray-500 mb-2">
          Your order has been placed successfully.
        </p>

        <p className="text-gray-400 text-sm mb-6">
          A confirmation email has been sent to your email address.
        </p>

        <div className="border-t border-gray-100 pt-6 mb-6">
          <div className="flex items-center justify-center gap-2 text-gold">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
            </svg>
            <span className="font-medium">Your order is being prepared</span>
          </div>
        </div>

        <Link href="/products" className="btn-primary inline-block">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
