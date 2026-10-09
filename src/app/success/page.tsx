'use client';

import React, { useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { CheckCircle2, MapPin, Truck, Sparkles, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCartStore } from '@/store/useCartStore';

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id') || 'cs_test_sample';
  const isMock = searchParams.get('mock') === 'true';
  const { clearCart } = useCartStore();

  useEffect(() => {
    // Clear shopping cart on successful checkout
    clearCart();
  }, [clearCart]);

  return (
    <div className="min-h-screen bg-[#FAF7F2] py-16 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center">
      <div className="max-w-xl w-full bg-[#FFFFFF] rounded-3xl p-8 sm:p-12 shadow-2xl border border-[#E8DFD1] text-center space-y-6 relative overflow-hidden">
        
        {/* Decorative background glow */}
        <div className="absolute -top-20 -left-20 w-48 h-48 bg-[#E8C172]/20 rounded-full blur-2xl pointer-events-none" />

        {/* Success Icon */}
        <div className="w-20 h-20 rounded-full bg-[#E8C172]/20 border-2 border-[#D4A343]/40 flex items-center justify-center mx-auto text-[#D4A343]">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        {isMock && (
          <div className="inline-block px-3 py-1 bg-[#F5EFDF] text-[#B8860B] rounded-full text-[10px] font-extrabold uppercase tracking-widest border border-[#E8DFD1]">
            ⚡ Stripe Checkout Mock Mode Verified
          </div>
        )}

        <div className="space-y-2">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4A343]">
            Order Confirmed
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl font-light text-[#1A1A1A]">
            Thank You for Your Order!
          </h1>
          <p className="text-sm text-[#66635D] max-w-md mx-auto">
            Your small-batch 100% natural beeswax candles are being hand-packed at our workshop in Smithville, Tennessee.
          </p>
        </div>

        {/* Order Details Card */}
        <div className="bg-[#FAF7F2] p-5 rounded-2xl border border-[#E8DFD1] text-left space-y-3 text-xs text-[#55524D]">
          <div className="flex justify-between items-center pb-3 border-b border-[#E8DFD1]">
            <span className="font-bold text-[#1A1A1A] uppercase tracking-wider text-[11px]">
              Confirmation ID
            </span>
            <span className="font-mono text-[#1A1A1A] bg-[#FFFFFF] px-2.5 py-1 rounded border border-[#E8DFD1]">
              {sessionId}
            </span>
          </div>

          <div className="flex items-center gap-3 text-[#1A1A1A]">
            <MapPin className="w-4 h-4 text-[#D4A343] shrink-0" />
            <span>
              <strong>Dispatch Origin:</strong> Smithville, DeKalb County, TN
            </span>
          </div>

          <div className="flex items-center gap-3 text-[#1A1A1A]">
            <Truck className="w-4 h-4 text-[#D4A343] shrink-0" />
            <span>
              <strong>Estimated Delivery:</strong> 3–5 Business Days (Thermal Cushioned Parcel)
            </span>
          </div>

          <div className="flex items-center gap-3 text-[#1A1A1A]">
            <Sparkles className="w-4 h-4 text-[#D4A343] shrink-0" />
            <span>
              <strong>Crafting Standard:</strong> 100% Tennessee Beeswax & Cotton Wicks
            </span>
          </div>
        </div>

        {/* Return Button */}
        <div className="pt-4">
          <Link
            href="/"
            className="w-full inline-flex items-center justify-center gap-2 bg-[#1A1A1A] hover:bg-[#262626] text-[#FAF7F2] py-4 px-8 rounded-full text-xs font-bold uppercase tracking-widest transition-all shadow-md transform hover:scale-[1.01]"
          >
            <ShoppingBag className="w-4 h-4 text-[#E8C172]" />
            <span>Return to Storefront</span>
            <ArrowRight className="w-4 h-4 text-[#E8C172]" />
          </Link>
        </div>

      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-[#FAF7F2] text-xs font-semibold uppercase tracking-wider text-[#787570]">
        Loading order confirmation...
      </div>
    }>
      <SuccessContent />
    </Suspense>
  );
}
