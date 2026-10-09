import React from 'react';
import Image from 'next/image';
import { MapPin, Award, Sparkles, HeartHandshake } from 'lucide-react';

export default function SmithvilleStory() {
  return (
    <section id="origin-story" className="py-24 bg-[#F5EFDF] border-y border-[#E8DFD1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Editorial Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8C172]/30 border border-[#D4A343]/30 text-[#1A1A1A] text-xs font-bold uppercase tracking-widest">
              <MapPin className="w-3.5 h-3.5 text-[#D4A343]" />
              <span>DeKalb County, Tennessee</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl font-light text-[#1A1A1A] leading-tight">
              Small-Batch Purity, <br />
              <span className="italic font-normal text-[#B8860B]">Unapologetic Authenticity</span>
            </h2>

            <p className="text-base text-[#55524D] leading-relaxed">
              Nestled in the rolling hills of Smithville, Tennessee, JustDuckit was founded on a simple premise: candle design should look like high-end French apothecary minimalism, but smell with unflinching, hyper-realistic accuracy of actual farmstead life.
            </p>

            <p className="text-sm text-[#66635D] leading-relaxed">
              We melt only 100% natural beeswax sourced locally from regional apiaries. Free from petroleum paraffin, synthetic phthalate oils, and metal wicks, our small-batch candles burn slower, cleaner, and emit a subtle honey-toned warmth naturally present in unbleached comb.
            </p>

            {/* Feature Callouts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#E8DFD1]">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-[#FAF7F2] rounded-lg text-[#D4A343] border border-[#E8DFD1]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-[#1A1A1A]">Hand-Poured Craft</h4>
                  <p className="text-xs text-[#66635D]">Every jar hand-poured, set, and labeled in Smithville, TN.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-[#FAF7F2] rounded-lg text-[#D4A343] border border-[#E8DFD1]">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-[#1A1A1A]">Nationwide Delivery</h4>
                  <p className="text-xs text-[#66635D]">Eco-cushioned shipping direct from Tennessee to your door.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Grid Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md">
              <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[#FAF7F2]">
                <Image
                  src="/images/premium-duck-fertilizer.jpg"
                  alt="JustDuckit Candle Craftsmanship in Smithville TN"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-[#FAF7F2]">
                  <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#E8C172]">
                    DeKalb County Crafting
                  </p>
                  <p className="font-serif text-xl font-semibold">Smithville Workshop Batch #084</p>
                </div>
              </div>

              {/* Floating Quote Badge */}
              <div className="absolute -top-6 -right-6 bg-[#1A1A1A] text-[#FAF7F2] p-5 rounded-2xl shadow-xl max-w-[220px] hidden sm:block">
                <Sparkles className="w-5 h-5 text-[#E8C172] mb-2" />
                <p className="font-serif italic text-xs leading-snug">
                  "Looks like Brooklyn. Smells like Smithville."
                </p>
                <p className="text-[10px] font-bold text-[#E8C172] mt-2 uppercase tracking-wider">
                  — JustDuckit Founder
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
