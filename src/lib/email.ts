import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface OrderConfirmationProps {
  to: string;
  orderNumber: string;
  items: Array<{
    name: string;
    price: number;
    quantity: number;
  }>;
  total: number;
  shippingAddress: {
    name: string;
    line1: string;
    city: string;
    state: string;
    postal_code: string;
    country: string;
  };
}

export async function sendOrderConfirmation({
  to,
  orderNumber,
  items,
  total,
  shippingAddress,
}: OrderConfirmationProps) {
  const itemsHtml = items
    .map(
      (item) => `
      <tr>
        <td style="padding: 12px; border-bottom: 1px solid #eee;">${item.name}</td>
        <td style="padding: 12px; border-bottom: 1px solid #eee; text-align: center;">${item.quantity}</td>
        <td style="padding: 12px; border-bottom: 1px solid #eee; text-align: right;">$${(item.price * item.quantity).toLocaleString()}</td>
      </tr>
    `
    )
    .join("");

  const { data, error } = await resend.emails.send({
    from: "Tosin's Angels <orders@tosinsangels.com>",
    to: [to],
    subject: `Order Confirmation - ${orderNumber}`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: system-ui, -apple-system, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #d4af37; margin: 0;">Tosin's Angels</h1>
            <p style="color: #666; margin: 5px 0;">Luxury Jewelry</p>
          </div>

          <div style="background: #faf7f2; padding: 30px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="color: #2d2d2d; margin-top: 0;">Thank You for Your Order!</h2>
            <p>Hi ${shippingAddress.name},</p>
            <p>We're thrilled to confirm your order. Your beautiful pieces are being carefully prepared for shipment.</p>
            <p><strong>Order Number:</strong> ${orderNumber}</p>
          </div>

          <h3 style="color: #2d2d2d; border-bottom: 2px solid #d4af37; padding-bottom: 10px;">Order Summary</h3>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <thead>
              <tr style="background: #f5f5f5;">
                <th style="padding: 12px; text-align: left;">Item</th>
                <th style="padding: 12px; text-align: center;">Qty</th>
                <th style="padding: 12px; text-align: right;">Price</th>
              </tr>
            </thead>
            <tbody>
              ${itemsHtml}
            </tbody>
            <tfoot>
              <tr>
                <td colspan="2" style="padding: 12px; text-align: right; font-weight: bold;">Total:</td>
                <td style="padding: 12px; text-align: right; font-weight: bold; color: #d4af37;">$${total.toLocaleString()}</td>
              </tr>
            </tfoot>
          </table>

          <h3 style="color: #2d2d2d; border-bottom: 2px solid #d4af37; padding-bottom: 10px;">Shipping Address</h3>
          <p style="background: #f9f9f9; padding: 15px; border-radius: 4px;">
            ${shippingAddress.name}<br>
            ${shippingAddress.line1}<br>
            ${shippingAddress.city}, ${shippingAddress.state} ${shippingAddress.postal_code}<br>
            ${shippingAddress.country}
          </p>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; color: #666;">
            <p>Questions? Reply to this email or contact us at support@tosinsangels.com</p>
            <p style="margin-top: 20px;">
              <a href="https://tosinsangels.com" style="color: #d4af37; text-decoration: none;">tosinsangels.com</a>
            </p>
          </div>
        </body>
      </html>
    `,
  });

  if (error) {
    console.error("Failed to send email:", error);
    throw error;
  }

  return data;
}

export async function sendShippingNotification({
  to,
  orderNumber,
  trackingNumber,
  carrier,
}: {
  to: string;
  orderNumber: string;
  trackingNumber: string;
  carrier: string;
}) {
  const { data, error } = await resend.emails.send({
    from: "Tosin's Angels <orders@tosinsangels.com>",
    to: [to],
    subject: `Your Order Has Shipped - ${orderNumber}`,
    html: `
      <!DOCTYPE html>
      <html>
        <body style="font-family: system-ui, -apple-system, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #d4af37; margin: 0;">Tosin's Angels</h1>
          </div>

          <div style="background: #faf7f2; padding: 30px; border-radius: 8px;">
            <h2 style="color: #2d2d2d; margin-top: 0;">Your Order Has Shipped!</h2>
            <p>Great news! Your order <strong>${orderNumber}</strong> is on its way.</p>
            <p><strong>Carrier:</strong> ${carrier}</p>
            <p><strong>Tracking Number:</strong> ${trackingNumber}</p>
            <a href="#" style="display: inline-block; background: #d4af37; color: #fff; padding: 12px 24px; text-decoration: none; border-radius: 4px; margin-top: 15px;">Track Your Order</a>
          </div>
        </body>
      </html>
    `,
  });

  if (error) throw error;
  return data;
}
