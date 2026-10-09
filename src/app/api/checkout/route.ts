import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { items } = body;

    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { error: 'No items provided in checkout payload' },
        { status: 400 }
      );
    }

    const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
    const origin = req.nextUrl.origin || 'http://localhost:3000';

    // Fallback Mock Mode if STRIPE_SECRET_KEY is missing or invalid placeholder
    if (!stripeSecretKey || stripeSecretKey.includes('placeholder') || stripeSecretKey === 'sk_test_') {
      console.log('=== STRIPE CHECKOUT MOCK MODE ===');
      console.log('Items payload:', JSON.stringify(items, null, 2));
      console.log('STRIPE_SECRET_KEY environment variable is not defined or is placeholder.');
      console.log('Redirecting cleanly to mock checkout success page...');

      // Calculate total item count for mock query param
      const totalCount = items.reduce((acc: number, item: any) => acc + (item.quantity || 1), 0);
      const mockSessionId = 'cs_mock_' + Math.random().toString(36).substring(2, 11);

      return NextResponse.json({
        url: `${origin}/success?mock=true&session_id=${mockSessionId}&items=${totalCount}`,
      });
    }

    // Initialize Stripe client if secret key exists
    const stripe = new Stripe(stripeSecretKey, {
      apiVersion: '2025-02-24.acacia' as any,
    });

    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = items.map((item: any) => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.product.name,
          description: `${item.product.subtitle} - 100% Beeswax Candle Hand-Poured in Smithville, TN`,
          images: [
            item.product.image.startsWith('http')
              ? item.product.image
              : `${origin}${item.product.image}`,
          ],
        },
        unit_amount: Math.round(item.product.price * 100),
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: 'payment',
      shipping_address_collection: {
        allowed_countries: ['US', 'CA'],
      },
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/?canceled=true`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error('Stripe session creation error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
