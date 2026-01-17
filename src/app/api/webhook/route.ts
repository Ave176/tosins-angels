import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { createOrder } from "@/lib/supabase";
import { sendOrderConfirmation } from "@/lib/email";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-12-15.clover",
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get("stripe-signature")!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    try {
      // Get line items from the session
      const lineItems = await stripe.checkout.sessions.listLineItems(session.id);

      // Create order in database
      const order = await createOrder({
        email: session.customer_details?.email || "",
        stripe_session_id: session.id,
        status: "paid",
        total: (session.amount_total || 0) / 100,
        items: lineItems.data.map((item) => ({
          product_id: item.price?.product as string,
          name: item.description || "",
          price: (item.price?.unit_amount || 0) / 100,
          quantity: item.quantity || 1,
          image: "",
        })),
        shipping_address: {
          name: session.shipping_details?.name || session.customer_details?.name || "",
          line1: session.shipping_details?.address?.line1 || "",
          line2: session.shipping_details?.address?.line2 || undefined,
          city: session.shipping_details?.address?.city || "",
          state: session.shipping_details?.address?.state || "",
          postal_code: session.shipping_details?.address?.postal_code || "",
          country: session.shipping_details?.address?.country || "",
        },
      });

      // Send confirmation email
      if (session.customer_details?.email) {
        await sendOrderConfirmation({
          to: session.customer_details.email,
          orderNumber: order.id,
          items: lineItems.data.map((item) => ({
            name: item.description || "",
            price: (item.price?.unit_amount || 0) / 100,
            quantity: item.quantity || 1,
          })),
          total: (session.amount_total || 0) / 100,
          shippingAddress: {
            name: session.shipping_details?.name || session.customer_details?.name || "",
            line1: session.shipping_details?.address?.line1 || "",
            city: session.shipping_details?.address?.city || "",
            state: session.shipping_details?.address?.state || "",
            postal_code: session.shipping_details?.address?.postal_code || "",
            country: session.shipping_details?.address?.country || "",
          },
        });
      }

      console.log("Order created:", order.id);
    } catch (error) {
      console.error("Error processing order:", error);
      return NextResponse.json(
        { error: "Error processing order" },
        { status: 500 }
      );
    }
  }

  return NextResponse.json({ received: true });
}
