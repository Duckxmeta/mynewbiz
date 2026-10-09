import React from 'react';
import { Flame, Scissors, Wind, ShieldAlert, MapPin, Truck, Heart } from 'lucide-react';

export default function CareGuideFooter() {
  return (
    <footer className="bg-[#1A1A1A] text-[#FAF7F2] pt-16 pb-12 border-t border-[#333333]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Burning & Care Guide Section */}
        <div id="care-guide" className="mb-16 bg-[#262626] p-8 rounded-2xl border border-[#333333]">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-[0.25em] text-[#E8C172] uppercase mb-1">
              <Flame className="w-4 h-4" />
              <span>Artisanal Maintenance</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#FAF7F2]">
              Beeswax Burning & Care Guide
            </h3>
            <p className="text-xs text-[#A3A099] mt-2">
              100% natural beeswax burns differently than synthetic wax. Follow these guidelines for maximum scent throw and flame stability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#D6D3CD]">
            <div className="bg-[#1A1A1A] p-5 rounded-xl border border-[#333333] space-y-2">
              <div className="flex items-center gap-2 text-[#E8C172] font-bold uppercase tracking-wider text-[11px]">
                <Scissors className="w-4 h-4" />
                <span>Trim Wicks to 1/4"</span>
              </div>
              <p className="leading-relaxed">
                Before every burn, trim your lead-free cotton wick to exactly 1/4 inch. This prevents mushrooming and controls flame height.
              </p>
            </div>

            <div className="bg-[#1A1A1A] p-5 rounded-xl border border-[#333333] space-y-2">
              <div className="flex items-center gap-2 text-[#E8C172] font-bold uppercase tracking-wider text-[11px]">
                <Flame className="w-4 h-4" />
                <span>Full Wax Pool Memory</span>
              </div>
              <p className="leading-relaxed">
                On your first burn, allow liquid wax to reach all edges of the glass jar (approx 2-3 hours). This prevents wax tunneling.
              </p>
            </div>

            <div className="bg-[#1A1A1A] p-5 rounded-xl border border-[#333333] space-y-2">
              <div className="flex items-center gap-2 text-[#E8C172] font-bold uppercase tracking-wider text-[11px]">
                <Wind className="w-4 h-4" />
                <span>Draft-Free Placement</span>
              </div>
              <p className="leading-relaxed">
                Burn your beeswax candle on a heat-resistant surface away from ceiling fans, open windows, pets, or drafts.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Navigation & Brand Info */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#333333]">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <Flame className="w-6 h-6 text-[#D4A343] fill-[#E8C172]" />
              <span className="font-serif text-2xl font-bold tracking-wider text-[#FAF7F2]">
                JUSTDUCKIT
              </span>
            </div>
            <p className="text-xs text-[#A3A099] max-w-sm leading-relaxed">
              Boutique direct-to-consumer candle studio. Hand-poured 100% natural Tennessee beeswax candles featuring hyper-realistic farmstead scents.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#E8C172]">
              <MapPin className="w-4 h-4" />
              <span>Workshop: Smithville, DeKalb County, TN 37166</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif text-base font-semibold text-[#FAF7F2]">Collection</h4>
            <ul className="space-y-2 text-xs text-[#A3A099]">
              <li><a href="#collection" className="hover:text-[#E8C172] transition-colors">Fresh Duck Water</a></li>
              <li><a href="#collection" className="hover:text-[#E8C172] transition-colors">Boiled Duck Eggs</a></li>
              <li><a href="#collection" className="hover:text-[#E8C172] transition-colors">Premium Duck Fertilizer</a></li>
              <li><a href="#collection" className="hover:text-[#E8C172] transition-colors">Limited Edition Chicken Scat</a></li>
            </ul>
          </div>

          {/* Shipping & Support */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-serif text-base font-semibold text-[#FAF7F2]">Parcel & Shipping Policy</h4>
            <p className="text-xs text-[#A3A099] leading-relaxed">
              All orders are dispatched from Smithville, TN via thermal-protected packaging. Free shipping applies to order subtotals over $60.00.
            </p>
            <div className="pt-2 text-xs text-[#E8C172] font-medium flex items-center gap-1.5">
              <Truck className="w-4 h-4" />
              <span>Nationwide 50-State Express Shipping</span>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#787570] gap-4">
          <p>© 2026 JustDuckit Candles Co. All rights reserved. Hand-Poured in Smithville, TN.</p>
          <p className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-[#E8C172] fill-[#E8C172]" />
            <span>& Pure Beeswax</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
