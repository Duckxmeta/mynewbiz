'use client';

import React, { useState } from 'react';
import { PRODUCTS, CATEGORIES, Product } from '@/data/products';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';
import { Filter, Flame } from 'lucide-react';

export default function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = PRODUCTS.filter((product) => {
    if (selectedCategory === 'All') return true;
    return product.tag === selectedCategory;
  });

  return (
    <section id="collection" className="py-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-[0.25em] text-[#D4A343] uppercase mb-2">
            <Flame className="w-3.5 h-3.5" />
            <span>The Smithville Collection</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-light text-[#1A1A1A]">
            Curated Artisanal Batches
          </h2>
          <p className="text-sm text-[#66635D] mt-3">
            Hand-poured 100% natural beeswax candles. Hyper-realistic farmstead scents packaged in ultra-luxe minimalist apothecary jars.
          </p>
        </div>

        {/* Filter Chips */}
        <div className="flex items-center justify-center mb-12">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 p-1.5 bg-[#F5EFDF] rounded-2xl border border-[#E8DFD1]">
            {CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider transition-all uppercase ${
                    isActive
                      ? 'bg-[#1A1A1A] text-[#FAF7F2] shadow-sm'
                      : 'text-[#55524D] hover:text-[#1A1A1A] hover:bg-[#E8DFD1]/60'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={(prod) => setSelectedProduct(prod)}
            />
          ))}
        </div>

        {/* Quick View Modal */}
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      </div>
    </section>
  );
}
