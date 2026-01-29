import Link from "next/link";

export const metadata = {
  title: "About Us | Tosin's Angels",
  description:
    "Learn about Tosin's Angels — our story, mission, and commitment to bringing you beautiful, affordable jewelry.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-cream py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold text-sm uppercase tracking-[0.2em] mb-2">
            Our Story
          </p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-4">
            About <span className="gold-text">Tosin&apos;s</span> Angels
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Beautiful jewelry that brings joy, without breaking the bank.
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-charcoal mb-6">
                How It All Started
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Tosin&apos;s Angels was born from a simple idea: that everyone
                  deserves to feel special. What started as a passion for finding
                  the perfect piece of jewelry for friends and family grew into a
                  curated collection of charming, affordable accessories that
                  bring a little sparkle to everyday life.
                </p>
                <p>
                  We noticed that beautiful jewelry often came with a steep price
                  tag, putting it out of reach for many. We set out to change
                  that by sourcing pieces that look and feel premium without the
                  luxury markup. Every item in our collection is hand-selected
                  for quality, style, and that little something extra that makes
                  you smile.
                </p>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-12">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-charcoal mb-6">
                Our Mission
              </h2>
              <div className="bg-cream rounded-lg p-8 md:p-12">
                <blockquote className="text-xl md:text-2xl font-serif text-charcoal leading-relaxed text-center italic">
                  &ldquo;To bring joy through beautiful, affordable jewelry that
                  you can wear every day and gift with pride &mdash; because
                  everyone deserves a little sparkle.&rdquo;
                </blockquote>
              </div>
              <p className="text-gray-600 leading-relaxed mt-6">
                We believe that style should be accessible. Whether you&apos;re
                treating yourself or finding the perfect gift for someone you
                love, Tosin&apos;s Angels is here to make those moments brighter.
                Our collection focuses on playful, elegant designs &mdash; from
                our signature bear motifs to statement pendants &mdash; all at
                prices that feel just as good as the jewelry looks.
              </p>
            </div>

            <div className="border-t border-gray-100 pt-12">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-charcoal mb-6">
                What We Stand For
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                    <svg
                      className="w-7 h-7 text-gold"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-charcoal mb-2">
                    Chosen with Care
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Every piece is hand-selected for quality and charm. We only
                    stock what we&apos;d happily wear or gift ourselves.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                    <svg
                      className="w-7 h-7 text-gold"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-charcoal mb-2">
                    Affordable Always
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Beautiful jewelry shouldn&apos;t cost a fortune. We keep our
                    prices fair so style is always within reach.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                    <svg
                      className="w-7 h-7 text-gold"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-charcoal mb-2">
                    Perfect for Gifting
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Our pieces make thoughtful gifts for any occasion. Each order
                    is packaged with love, ready to delight.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-charcoal text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">
            Ready to Find Your Next Favourite Piece?
          </h2>
          <p className="text-gray-400 mb-8">
            Browse our collection and discover jewelry that makes you feel
            special &mdash; every single day.
          </p>
          <Link href="/products" className="btn-primary">
            Shop the Collection
          </Link>
        </div>
      </section>
    </div>
  );
}
