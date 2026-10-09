'use client';

import React from 'react';
import Image from 'next/image';
import { ShoppingBag, Eye, Flame, Check, Sparkles } from 'lucide-react';
import { Product } from '@/data/products';
import { useCartStore } from '@/store/useCartStore';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
}

export default function ProductCard({ product, onQuickView }: ProductCardProps) {
  const { addItem } = useCartStore();
  const [added, setAdded] = React.useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem(product, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div
      onClick={() => onQuickView(product)}
      className="group bg-[#FFFFFF] rounded-2xl border border-[#E8DFD1] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer transform hover:-translate-y-1"
    >
      <div>
        {/* Product Image Container */}
        <div className="relative aspect-square overflow-hidden bg-[#F5EFDF]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
            <span className="bg-[#1A1A1A]/90 text-[#FAF7F2] text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full shadow-sm">
              {product.tag}
            </span>
            <span className="bg-[#E8C172] text-[#1A1A1A] text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-sm flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5" />
              100% Beeswax
            </span>
          </div>

          {/* Burn Time Badge */}
          <div className="absolute bottom-3 right-3 bg-[#FAF7F2]/90 backdrop-blur-sm text-[#1A1A1A] text-[10px] font-semibold px-2.5 py-1 rounded-md border border-[#E8DFD1] flex items-center gap-1">
            <Flame className="w-3 h-3 text-[#D4A343]" />
            <span>{product.burnTime}</span>
          </div>

          {/* Quick View Hover Overlay */}
          <div className="absolute inset-0 bg-[#1A1A1A]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onQuickView(product);
              }}
              className="bg-[#FAF7F2] text-[#1A1A1A] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-md flex items-center gap-1.5 hover:bg-[#E8C172] transition-colors"
            >
              <Eye className="w-3.5 h-3.5" />
              Quick View
            </button>
          </div>
        </div>

        {/* Product Details */}
        <div className="p-5 space-y-3">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#D4A343]">
                {product.subtitle}
              </p>
              <h3 className="font-serif text-xl font-semibold text-[#1A1A1A] group-hover:text-[#B8860B] transition-colors">
                {product.name}
              </h3>
            </div>
            <p className="font-serif text-lg font-bold text-[#1A1A1A]">
              ${product.price.toFixed(2)}
            </p>
          </div>

          {/* Scent Notes Breakdown */}
          <div className="space-y-1 text-[11px] text-[#66635D] bg-[#FAF7F2] p-2.5 rounded-lg border border-[#E8DFD1]/60">
            <p><span className="font-semibold text-[#1A1A1A]">Top:</span> {product.scentPyramid.top}</p>
            <p><span className="font-semibold text-[#1A1A1A]">Heart:</span> {product.scentPyramid.heart}</p>
            <p><span className="font-semibold text-[#1A1A1A]">Base:</span> {product.scentPyramid.base}</p>
          </div>
        </div>
      </div>

      {/* Add to Cart Footer */}
      <div className="px-5 pb-5 pt-1">
        <button
          onClick={handleAddToCart}
          className="w-full flex items-center justify-center gap-2 bg-[#1A1A1A] hover:bg-[#262626] text-[#FAF7F2] py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all active:scale-98 shadow-sm group-hover:shadow-md"
        >
          {added ? (
            <>
              <Check className="w-4 h-4 text-[#E8C172]" />
              <span>Added to Cart</span>
            </>
          ) : (
            <>
              <ShoppingBag className="w-4 h-4 text-[#E8C172]" />
              <span>Add to Cart • ${product.price.toFixed(2)}</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
