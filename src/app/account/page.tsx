"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getCurrentUser, getOrdersByUserId, signOut, Order } from "@/lib/supabase";
import { User } from "@supabase/supabase-js";

export default function AccountPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      const currentUser = await getCurrentUser();
      if (!currentUser) {
        router.push("/login");
        return;
      }
      setUser(currentUser);

      try {
        const userOrders = await getOrdersByUserId(currentUser.id);
        setOrders(userOrders || []);
      } catch (error) {
        console.error("Error loading orders:", error);
      }

      setIsLoading(false);
    }

    loadData();
  }, [router]);

  const handleSignOut = async () => {
    await signOut();
    router.push("/");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gold"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-serif font-bold text-charcoal">
            My Account
          </h1>
          <button
            onClick={handleSignOut}
            className="text-gray-500 hover:text-red-500 transition-colors"
          >
            Sign Out
          </button>
        </div>

        {/* User Info */}
        <div className="bg-white rounded-lg p-6 shadow-sm mb-8">
          <h2 className="text-lg font-semibold text-charcoal mb-4">
            Account Details
          </h2>
          <p className="text-gray-600">
            <span className="font-medium">Email:</span> {user?.email}
          </p>
          <p className="text-gray-600 mt-2">
            <span className="font-medium">Member since:</span>{" "}
            {new Date(user?.created_at || "").toLocaleDateString()}
          </p>
        </div>

        {/* Orders */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-charcoal mb-4">
            Order History
          </h2>

          {orders.length === 0 ? (
            <div className="text-center py-8">
              <svg
                className="w-16 h-16 mx-auto text-gray-300 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              <p className="text-gray-500 mb-4">No orders yet</p>
              <Link href="/products" className="btn-primary inline-block">
                Start Shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {orders.map((order) => (
                <div
                  key={order.id}
                  className="border border-gray-100 rounded-lg p-4"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <p className="font-medium text-charcoal">
                        Order #{order.id?.slice(0, 8)}
                      </p>
                      <p className="text-sm text-gray-500">
                        {new Date(order.created_at || "").toLocaleDateString()}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-charcoal">
                        ${order.total.toLocaleString()}
                      </p>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          order.status === "delivered"
                            ? "bg-green-100 text-green-600"
                            : order.status === "shipped"
                            ? "bg-blue-100 text-blue-600"
                            : order.status === "paid"
                            ? "bg-yellow-100 text-yellow-600"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">
                    {order.items.length} item{order.items.length !== 1 ? "s" : ""}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
