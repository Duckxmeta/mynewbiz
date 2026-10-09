import React from 'react';
import { Sparkles, MapPin, Truck } from 'lucide-react';

export default function TopBanner() {
  return (
    <div className="bg-[#1A1A1A] text-[#FAF7F2] text-xs py-2.5 px-4 tracking-wider uppercase border-b border-[#333333] select-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="hidden md:flex items-center gap-2 text-[#E8C172]">
          <MapPin className="w-3.5 h-3.5" />
          <span className="font-medium text-[11px]">DeKalb County, TN</span>
        </div>
        
        <div className="w-full md:w-auto text-center font-medium tracking-widest text-[11px] text-[#FAF7F2]/90 flex items-center justify-center gap-2">
          <span>Hand-poured in Smithville, TN</span>
          <span className="text-[#E8C172]">•</span>
          <span>Nationwide Shipping</span>
          <span className="text-[#E8C172]">•</span>
          <span className="text-[#E8C172] font-semibold">Free shipping on orders over $60</span>
        </div>

        <div className="hidden md:flex items-center gap-2 text-[#E8C172]">
          <Truck className="w-3.5 h-3.5" />
          <span className="font-medium text-[11px]">Batch #084 Live</span>
        </div>
      </div>
    </div>
  );
}
