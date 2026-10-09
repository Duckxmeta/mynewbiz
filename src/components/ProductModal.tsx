'use client';

import React from 'react';
import Image from 'next/image';
import { X, Flame, ShieldCheck, ShoppingBag, Check } from 'lucide-react';
import { Product } from '@/data/products';
import { useCartStore } from '@/store/useCartStore';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const { addItem } = useCartStore();
  const [quantity, setQuantity] = React.useState(1);
  const [added, setAdded] = React.useState(false);

  if (!product) return null;

  const handleAddToCart = () => {
    addItem(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      {/* Backdrop click */}
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative bg-[#FAF7F2] max-w-4xl w-full rounded-2xl shadow-2xl overflow-hidden z-10 border border-[#E8DFD1] grid grid-cols-1 md:grid-cols-2">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#FAF7F2]/80 hover:bg-[#E8DFD1] text-[#262626] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Image */}
        <div className="relative aspect-square md:aspect-auto min-h-[320px] bg-[#E8DFD1]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute top-4 left-4 bg-[#1A1A1A]/90 text-[#FAF7F2] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
            {product.tag}
          </div>
        </div>

        {/* Product Details */}
        <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#D4A343]">
                  {product.subtitle}
                </span>
                <h2 className="font-serif text-3xl font-semibold text-[#1A1A1A] mt-0.5">
                  {product.name}
                </h2>
              </div>
              <p className="font-serif text-2xl font-bold text-[#1A1A1A]">
                ${product.price.toFixed(2)}
              </p>
            </div>

            <p className="text-sm text-[#55524D] leading-relaxed">
              {product.description}
            </p>

            {/* Scent Pyramid Breakdown */}
            <div className="bg-[#F5EFDF] p-4 rounded-xl border border-[#E8DFD1] space-y-2 text-xs">
              <p className="font-bold text-[11px] uppercase tracking-widest text-[#1A1A1A] mb-2 flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-[#D4A343]" />
                Scent Pyramid Notes
              </p>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-2 bg-[#FAF7F2] rounded-lg border border-[#E8DFD1]">
                  <p className="text-[10px] font-bold uppercase text-[#8C857B]">Top</p>
                  <p className="font-medium text-[#1A1A1A] mt-0.5">{product.scentPyramid.top}</p>
                </div>
                <div className="p-2 bg-[#FAF7F2] rounded-lg border border-[#E8DFD1]">
                  <p className="text-[10px] font-bold uppercase text-[#8C857B]">Heart</p>
                  <p className="font-medium text-[#1A1A1A] mt-0.5">{product.scentPyramid.heart}</p>
                </div>
                <div className="p-2 bg-[#FAF7F2] rounded-lg border border-[#E8DFD1]">
                  <p className="text-[10px] font-bold uppercase text-[#8C857B]">Base</p>
                  <p className="font-medium text-[#1A1A1A] mt-0.5">{product.scentPyramid.base}</p>
                </div>
              </div>
            </div>

            {/* Specs Grid */}
            <div className="grid grid-cols-2 gap-3 text-xs text-[#55524D]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#D4A343]" />
                <span><strong>Wax:</strong> {product.wax}</span>
              </div>
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-[#D4A343]" />
                <span><strong>Burn:</strong> {product.burnTime}</span>
              </div>
            </div>
          </div>

          {/* Action Area */}
          <div className="space-y-4 pt-4 border-t border-[#E8DFD1]">
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-[#D4A343] rounded-full overflow-hidden bg-white">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3.5 py-2 text-[#1A1A1A] hover:bg-[#F5EFDF] font-semibold text-sm transition-colors"
                >
                  -
                </button>
                <span className="px-3 text-xs font-bold text-[#1A1A1A] min-w-[24px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3.5 py-2 text-[#1A1A1A] hover:bg-[#F5EFDF] font-semibold text-sm transition-colors"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#1A1A1A] hover:bg-[#262626] text-[#FAF7F2] py-3.5 px-6 rounded-full text-xs font-bold uppercase tracking-widest transition-all transform hover:scale-[1.01]"
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4 text-[#E8C172]" />
                    <span>Added to Cart</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4 text-[#E8C172]" />
                    <span>Add to Cart (${(product.price * quantity).toFixed(2)})</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
