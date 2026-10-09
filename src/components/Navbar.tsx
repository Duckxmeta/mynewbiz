'use client';

import React from 'react';
import { ShoppingBag, Flame, Menu, X } from 'lucide-react';
import { useCartStore } from '@/store/useCartStore';

export default function Navbar() {
  const { toggleCart, getItemCount } = useCartStore();
  const itemCount = getItemCount();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8DFD1]/80 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Mobile menu trigger */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#262626] hover:text-[#D4A343] transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold tracking-widest uppercase text-[#55524D]">
            <a href="#collection" className="hover:text-[#1A1A1A] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#D4A343] hover:after:w-full after:transition-all">
              The Collection
            </a>
            <a href="#craftsmanship" className="hover:text-[#1A1A1A] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#D4A343] hover:after:w-full after:transition-all">
              Craftsmanship
            </a>
            <a href="#origin-story" className="hover:text-[#1A1A1A] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#D4A343] hover:after:w-full after:transition-all">
              Poured in Smithville
            </a>
            <a href="#care-guide" className="hover:text-[#1A1A1A] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#D4A343] hover:after:w-full after:transition-all">
              Care & Trim Guide
            </a>
          </nav>

          {/* Brand Logo */}
          <div className="flex flex-col items-center justify-center text-center group cursor-pointer">
            <a href="#" className="flex flex-col items-center">
              <div className="flex items-center gap-1.5 text-[#1A1A1A]">
                <Flame className="w-5 h-5 text-[#D4A343] fill-[#E8C172] animate-pulse-subtle" />
                <span className="font-serif text-2xl sm:text-3xl font-bold tracking-wider text-[#1A1A1A]">
                  JUSTDUCKIT
                </span>
              </div>
              <span className="text-[9px] font-bold tracking-[0.25em] uppercase text-[#8C857B] group-hover:text-[#D4A343] transition-colors">
                Smithville, TN • Artisanal Beeswax
              </span>
            </a>
          </div>

          {/* Cart Trigger Button */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleCart}
              className="relative flex items-center gap-2.5 bg-[#1A1A1A] hover:bg-[#262626] text-[#FAF7F2] px-4 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all transform hover:scale-102 active:scale-98 shadow-sm group"
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="w-4 h-4 text-[#E8C172] group-hover:rotate-6 transition-transform" />
              <span className="hidden sm:inline">CART</span>
              <span className="bg-[#E8C172] text-[#1A1A1A] text-[11px] font-bold px-2 py-0.5 rounded-full min-w-[20px] text-center">
                {itemCount}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF7F2] border-b border-[#E8DFD1] px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <a
            href="#collection"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold tracking-wider uppercase text-[#1A1A1A] hover:text-[#D4A343]"
          >
            The Collection
          </a>
          <a
            href="#craftsmanship"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold tracking-wider uppercase text-[#1A1A1A] hover:text-[#D4A343]"
          >
            Craftsmanship
          </a>
          <a
            href="#origin-story"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold tracking-wider uppercase text-[#1A1A1A] hover:text-[#D4A343]"
          >
            Poured in Smithville
          </a>
          <a
            href="#care-guide"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold tracking-wider uppercase text-[#1A1A1A] hover:text-[#D4A343]"
          >
            Care & Trim Guide
          </a>
        </div>
      )}
    </header>
  );
}
