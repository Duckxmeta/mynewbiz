import React from 'react';
import Image from 'next/image';
import { ArrowDown, Flame, ShieldCheck, Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-[#E8DFD1]">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E8C172]/15 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8C172]/20 border border-[#D4A343]/30 text-[#1A1A1A] text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#D4A343]" />
              <span>Small-Batch Apothecary • Smithville, TN</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.08] tracking-tight">
              The Raw Truth of <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#B8860B]">Farmstead Aromas</span>
            </h1>

            <p className="max-w-2xl mx-auto lg:mx-0 text-base sm:text-lg text-[#55524D] font-normal leading-relaxed">
              Boutique, ultra-luxe minimalist candle design housing unapologetically realistic, hyper-focused farmstead scent profiles. Hand-poured with 100% natural Tennessee beeswax and lead-free cotton wicks.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#collection"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#1A1A1A] hover:bg-[#262626] text-[#FAF7F2] px-8 py-4 rounded-full text-xs font-bold tracking-widest uppercase transition-all transform hover:-translate-y-0.5 shadow-md hover:shadow-lg"
              >
                <span>Explore The Collection</span>
                <ArrowDown className="w-4 h-4 text-[#E8C172]" />
              </a>

              <a
                href="#craftsmanship"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F5EFDF] hover:bg-[#E8DFD1] text-[#1A1A1A] px-7 py-4 rounded-full text-xs font-semibold tracking-widest uppercase transition-all border border-[#E8DFD1]"
              >
                <Flame className="w-4 h-4 text-[#D4A343]" />
                <span>Our 100% Beeswax Standard</span>
              </a>
            </div>

            {/* Micro Highlights */}
            <div className="pt-8 border-t border-[#E8DFD1]/80 grid grid-cols-3 gap-4 text-center lg:text-left">
              <div>
                <p className="font-serif text-2xl font-semibold text-[#1A1A1A]">100%</p>
                <p className="text-[11px] font-medium text-[#787570] uppercase tracking-wider">Natural Beeswax</p>
              </div>
              <div>
                <p className="font-serif text-2xl font-semibold text-[#1A1A1A]">45–50+ hrs</p>
                <p className="text-[11px] font-medium text-[#787570] uppercase tracking-wider">Clean Burn Time</p>
              </div>
              <div>
                <p className="font-serif text-2xl font-semibold text-[#1A1A1A]">0%</p>
                <p className="text-[11px] font-medium text-[#787570] uppercase tracking-wider">Phthalates or Lead</p>
              </div>
            </div>
          </div>

          {/* Right Visual Image Hero */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="aspect-square relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[#FFFFFF] group">
                <Image
                  src="/images/fresh-duck-water.jpg"
                  alt="JustDuckit Fresh Duck Water Candle"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <div className="inline-block px-2.5 py-0.5 bg-[#E8C172] text-[#1A1A1A] text-[10px] font-extrabold uppercase tracking-widest rounded-full mb-1">
                    Featured Scent
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-[#FAF7F2]">Fresh Duck Water</h3>
                  <p className="text-xs text-[#FAF7F2]/80 font-light">
                    Sunlit Duckweed • Wetland Mist • Mineral Mud & River Reed
                  </p>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-[#FFFFFF] p-4 rounded-xl shadow-xl border border-[#E8DFD1] flex items-center gap-3 hidden sm:flex">
                <div className="p-3 bg-[#E8C172]/20 rounded-lg text-[#D4A343]">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#1A1A1A] uppercase tracking-wider">Poured in Smithville, TN</p>
                  <p className="text-[11px] text-[#787570]">DeKalb County Artisanal Batch</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
