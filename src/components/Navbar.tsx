"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { totalItems, setIsCartOpen } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-serif font-bold tracking-wide">
              <span className="gold-text">Tosin&apos;s</span>
              <span className="text-charcoal"> Angels</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-charcoal hover:text-gold transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-charcoal hover:text-gold transition-colors font-medium"
            >
              Collections
            </Link>
            <Link
              href="/products?category=Rings"
              className="text-charcoal hover:text-gold transition-colors font-medium"
            >
              Rings
            </Link>
            <Link
              href="/products?category=Necklaces"
              className="text-charcoal hover:text-gold transition-colors font-medium"
            >
              Necklaces
            </Link>
            <Link
              href="/products?category=Earrings"
              className="text-charcoal hover:text-gold transition-colors font-medium"
            >
              Earrings
            </Link>
          </div>

          {/* Cart & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-charcoal hover:text-gold transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-gold text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-charcoal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-charcoal hover:text-gold transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/products"
                className="text-charcoal hover:text-gold transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Collections
              </Link>
              <Link
                href="/products?category=Rings"
                className="text-charcoal hover:text-gold transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Rings
              </Link>
              <Link
                href="/products?category=Necklaces"
                className="text-charcoal hover:text-gold transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Necklaces
              </Link>
              <Link
                href="/products?category=Earrings"
                className="text-charcoal hover:text-gold transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Earrings
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
