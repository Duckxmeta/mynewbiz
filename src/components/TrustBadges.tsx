import React from 'react';
import { Flame, Sparkles, MapPin, Truck } from 'lucide-react';

export default function TrustBadges() {
  const BADGES = [
    {
      icon: Flame,
      title: '100% Pure Beeswax',
      description: 'Naturally honey-scented base, clean-burning with zero paraffin or synthetic petroleum additives.',
    },
    {
      icon: Sparkles,
      title: 'Lead-Free Cotton Wicks',
      description: 'Unbleached natural cotton wicks engineered for an optimal wax pool and zero heavy metal emissions.',
    },
    {
      icon: MapPin,
      title: 'Hand-Poured in Smithville, TN',
      description: 'Individually crafted, cured, and quality-inspected in small batches in DeKalb County, Tennessee.',
    },
    {
      icon: Truck,
      title: 'Nationwide Shipping',
      description: 'Carefully cushioned parcel delivery with temperature-protected packaging shipped directly to your door.',
    },
  ];

  return (
    <section id="craftsmanship" className="bg-[#F5EFDF] py-16 border-b border-[#E8DFD1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-[0.2em] text-[#D4A343] uppercase">
            Artisanal Integrity
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1A1A1A] mt-1">
            Craftsmanship & Standards
          </h2>
          <p className="text-sm text-[#66635D] mt-2">
            Every candle combines high-end aesthetic minimalist presentation with uncompromised material purity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {BADGES.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <div
                key={idx}
                className="bg-[#FAF7F2] p-8 rounded-2xl border border-[#E8DFD1] shadow-sm hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#E8C172]/25 flex items-center justify-center text-[#D4A343] mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#1A1A1A] mb-2">
                  {badge.title}
                </h3>
                <p className="text-xs text-[#66635D] leading-relaxed">
                  {badge.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
