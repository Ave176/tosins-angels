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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const sessionData = session as any;
    const shippingDetails = sessionData.shipping_details || sessionData.collected_information?.shipping_details;
    const customerDetails = session.customer_details;

    try {
      // Get line items from the session
      const lineItems = await stripe.checkout.sessions.listLineItems(session.id);

      // Create order in database
      const order = await createOrder({
        email: customerDetails?.email || "",
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
          name: shippingDetails?.name || customerDetails?.name || "",
          line1: shippingDetails?.address?.line1 || customerDetails?.address?.line1 || "",
          line2: shippingDetails?.address?.line2 || customerDetails?.address?.line2 || undefined,
          city: shippingDetails?.address?.city || customerDetails?.address?.city || "",
          state: shippingDetails?.address?.state || customerDetails?.address?.state || "",
          postal_code: shippingDetails?.address?.postal_code || customerDetails?.address?.postal_code || "",
          country: shippingDetails?.address?.country || customerDetails?.address?.country || "",
        },
      });

      // Send confirmation email
      if (customerDetails?.email) {
        await sendOrderConfirmation({
          to: customerDetails.email,
          orderNumber: order.id,
          items: lineItems.data.map((item) => ({
            name: item.description || "",
            price: (item.price?.unit_amount || 0) / 100,
            quantity: item.quantity || 1,
          })),
          total: (session.amount_total || 0) / 100,
          shippingAddress: {
            name: shippingDetails?.name || customerDetails?.name || "",
            line1: shippingDetails?.address?.line1 || customerDetails?.address?.line1 || "",
            city: shippingDetails?.address?.city || customerDetails?.address?.city || "",
            state: shippingDetails?.address?.state || customerDetails?.address?.state || "",
            postal_code: shippingDetails?.address?.postal_code || customerDetails?.address?.postal_code || "",
            country: shippingDetails?.address?.country || customerDetails?.address?.country || "",
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
