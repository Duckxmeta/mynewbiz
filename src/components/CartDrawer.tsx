'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, Trash2, ShoppingBag, Truck, ArrowRight, Sparkles, Loader2 } from 'lucide-react';
import { useCartStore, FREE_SHIPPING_THRESHOLD } from '@/store/useCartStore';

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    updateQuantity,
    removeItem,
    getSubtotal,
    getItemCount,
  } = useCartStore();

  const [loading, setLoading] = useState(false);
  const subtotal = getSubtotal();
  const itemCount = getItemCount();
  const remainingForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const freeShippingProgress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);

  if (!isOpen) return null;

  const handleCheckout = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items }),
      });

      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert('Checkout error: Unable to initiate session.');
        setLoading(false);
      }
    } catch (err) {
      console.error('Checkout failure:', err);
      alert('Checkout process error. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm transition-opacity duration-300">
      {/* Backdrop click */}
      <div className="absolute inset-0" onClick={closeCart} />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF7F2] border-l border-[#E8DFD1] shadow-2xl flex flex-col justify-between transform transition-transform duration-300">
          
          {/* Header */}
          <div className="p-6 border-b border-[#E8DFD1] bg-[#FAF7F2]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-[#D4A343]" />
                <h2 className="font-serif text-2xl font-semibold text-[#1A1A1A]">Your Cart</h2>
                <span className="bg-[#E8C172] text-[#1A1A1A] text-xs font-bold px-2 py-0.5 rounded-full">
                  {itemCount}
                </span>
              </div>
              <button
                onClick={closeCart}
                className="p-2 text-[#66635D] hover:text-[#1A1A1A] hover:bg-[#E8DFD1]/60 rounded-full transition-colors"
                aria-label="Close cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Free Shipping Tracker */}
            <div className="mt-4 bg-[#F5EFDF] p-3.5 rounded-xl border border-[#E8DFD1]">
              <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
                <div className="flex items-center gap-1.5 text-[#1A1A1A]">
                  <Truck className="w-4 h-4 text-[#D4A343]" />
                  <span>
                    {remainingForFreeShipping > 0 ? (
                      <>
                        Add <strong className="text-[#B8860B]">${remainingForFreeShipping.toFixed(2)}</strong> for FREE Shipping
                      </>
                    ) : (
                      <span className="text-[#2E7D32] flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5 fill-[#2E7D32]" />
                        You've unlocked FREE Shipping!
                      </span>
                    )}
                  </span>
                </div>
                <span className="text-[11px] text-[#787570]">{Math.round(freeShippingProgress)}%</span>
              </div>
              <div className="w-full bg-[#E8DFD1] h-2 rounded-full overflow-hidden">
                <div
                  className="bg-[#D4A343] h-full rounded-full transition-all duration-500"
                  style={{ width: `${freeShippingProgress}%` }}
                />
              </div>
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#F5EFDF] flex items-center justify-center mx-auto text-[#D4A343]">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#1A1A1A]">Your Cart is Empty</h3>
                <p className="text-xs text-[#787570] max-w-xs mx-auto">
                  Explore our small-batch 100% natural beeswax candles hand-poured in Smithville, TN.
                </p>
                <button
                  onClick={closeCart}
                  className="mt-2 inline-flex items-center gap-2 bg-[#1A1A1A] text-[#FAF7F2] px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#262626]"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-4 p-3.5 bg-[#FFFFFF] rounded-xl border border-[#E8DFD1] shadow-sm items-center"
                >
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-[#F5EFDF] shrink-0">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="font-serif font-semibold text-sm text-[#1A1A1A] truncate">
                      {item.product.name}
                    </h4>
                    <p className="text-[10px] text-[#787570] truncate">
                      {item.product.subtitle}
                    </p>
                    <p className="font-serif font-bold text-xs text-[#1A1A1A] mt-1">
                      ${item.product.price.toFixed(2)}
                    </p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex flex-col items-end gap-2">
                    <div className="flex items-center border border-[#E8DFD1] rounded-lg bg-[#FAF7F2]">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="px-2 py-0.5 text-xs text-[#1A1A1A] hover:bg-[#E8DFD1] rounded-l"
                      >
                        -
                      </button>
                      <span className="px-2 text-xs font-bold text-[#1A1A1A]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="px-2 py-0.5 text-xs text-[#1A1A1A] hover:bg-[#E8DFD1] rounded-r"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="text-[#99958F] hover:text-[#C62828] p-1 transition-colors"
                      title="Remove item"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout CTA */}
          {items.length > 0 && (
            <div className="p-6 border-t border-[#E8DFD1] bg-[#FAF7F2] space-y-4">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-[#66635D]">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#1A1A1A]">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-[#66635D]">
                  <span>Shipping</span>
                  <span>
                    {remainingForFreeShipping === 0 ? (
                      <strong className="text-[#2E7D32]">FREE</strong>
                    ) : (
                      'Calculated at checkout'
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-[#66635D]">
                  <span>Taxes</span>
                  <span>Calculated at checkout</span>
                </div>
                <div className="pt-2 border-t border-[#E8DFD1] flex justify-between font-serif text-lg font-bold text-[#1A1A1A]">
                  <span>Total</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#1A1A1A] hover:bg-[#262626] disabled:bg-[#66635D] text-[#FAF7F2] py-4 rounded-full text-xs font-bold uppercase tracking-widest transition-all shadow-md transform hover:scale-[1.01]"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-[#E8C172]" />
                    <span>Preparing Stripe Checkout...</span>
                  </>
                ) : (
                  <>
                    <span>Proceed to Checkout</span>
                    <ArrowRight className="w-4 h-4 text-[#E8C172]" />
                  </>
                )}
              </button>

              <p className="text-[10px] text-center text-[#787570]">
                🔒 256-bit encrypted checkout via Stripe • Hand-packed in Smithville, TN
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
