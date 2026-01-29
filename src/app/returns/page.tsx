import Link from "next/link";

export const metadata = {
  title: "Return Policy | Tosin's Angels",
  description:
    "Read our return and exchange policy. We want you to love your Tosin's Angels jewelry.",
};

export default function ReturnsPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-cream py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold text-sm uppercase tracking-[0.2em] mb-2">
            Customer Care
          </p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-4">
            Returns & Exchanges
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We want you to love your purchase. If something isn&apos;t right, we&apos;re
            here to help.
          </p>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Return Window */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">
                30-Day Return Policy
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We offer a 30-day return policy from the date you receive your
                order. If you&apos;re not completely happy with your purchase, you
                may return it for a full refund or exchange.
              </p>
              <div className="bg-cream rounded-lg p-6">
                <h3 className="font-semibold text-charcoal mb-3">
                  To be eligible for a return, items must be:
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-gold mt-0.5 shrink-0"
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
                    Unused and in the same condition you received them
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-gold mt-0.5 shrink-0"
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
                    In original packaging with all tags attached
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-gold mt-0.5 shrink-0"
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
                    Accompanied by the original receipt or proof of purchase
                  </li>
                </ul>
              </div>
            </div>

            {/* How to Return */}
            <div className="border-t border-gray-100 pt-12">
              <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">
                How to Start a Return
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-gold text-white flex items-center justify-center text-sm font-bold shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">
                      Contact Us
                    </h3>
                    <p className="text-gray-600">
                      Email us at{" "}
                      <a
                        href="mailto:returns@tosinsangels.com"
                        className="text-gold hover:underline"
                      >
                        returns@tosinsangels.com
                      </a>{" "}
                      with your order number and reason for return. We&apos;ll
                      respond within 24 hours.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-gold text-white flex items-center justify-center text-sm font-bold shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">
                      Pack Your Item
                    </h3>
                    <p className="text-gray-600">
                      Place the item securely in its original packaging. Include
                      your order confirmation or receipt inside the parcel.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-gold text-white flex items-center justify-center text-sm font-bold shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">
                      Ship It Back
                    </h3>
                    <p className="text-gray-600">
                      Send the package to the return address provided in our
                      email. We recommend using a tracked postal service for
                      your protection.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-gold text-white flex items-center justify-center text-sm font-bold shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">
                      Receive Your Refund
                    </h3>
                    <p className="text-gray-600">
                      Once we receive and inspect your return, we&apos;ll process
                      your refund within 5&ndash;7 business days. Refunds are
                      issued to the original payment method.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Exchanges */}
            <div className="border-t border-gray-100 pt-12">
              <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">
                Exchanges
              </h2>
              <p className="text-gray-600 leading-relaxed">
                If you&apos;d like to exchange an item for a different piece,
                please follow the return process above and place a new order for
                the item you&apos;d like instead. This is the fastest way to get
                your new piece to you. If the replacement item costs more, you
                will pay the difference; if it costs less, we will refund the
                balance.
              </p>
            </div>

            {/* Damaged or Faulty Items */}
            <div className="border-t border-gray-100 pt-12">
              <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">
                Damaged or Faulty Items
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If your item arrives damaged or faulty, please contact us within
                48 hours of delivery with photos of the issue. We will arrange a
                replacement or full refund at no extra cost to you, including
                return postage.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Email{" "}
                <a
                  href="mailto:support@tosinsangels.com"
                  className="text-gold hover:underline"
                >
                  support@tosinsangels.com
                </a>{" "}
                with your order number and clear photos of the damage.
              </p>
            </div>

            {/* Non-Returnable */}
            <div className="border-t border-gray-100 pt-12">
              <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">
                Non-Returnable Items
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                For hygiene reasons, the following items cannot be returned
                unless they arrive damaged or faulty:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-gold">&bull;</span>
                  Earrings that have been worn or removed from sealed packaging
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">&bull;</span>
                  Items marked as final sale
                </li>
              </ul>
            </div>

            {/* Shipping Costs */}
            <div className="border-t border-gray-100 pt-12">
              <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">
                Return Shipping Costs
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Return shipping costs are the responsibility of the customer,
                unless the item is damaged or faulty. We recommend using a
                tracked delivery service, as we cannot be held responsible for
                items lost in transit.
              </p>
            </div>

            {/* Questions */}
            <div className="border-t border-gray-100 pt-12">
              <div className="bg-cream rounded-lg p-8 text-center">
                <h2 className="text-2xl font-serif font-bold text-charcoal mb-3">
                  Have Questions?
                </h2>
                <p className="text-gray-600 mb-6">
                  Our team is happy to help with any queries about returns,
                  exchanges, or your order.
                </p>
                <a
                  href="mailto:support@tosinsangels.com"
                  className="btn-primary inline-block"
                >
                  Contact Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
