import React from 'react';
import HeroSection from '@/components/HeroSection';
import TrustBadges from '@/components/TrustBadges';
import ProductGrid from '@/components/ProductGrid';
import SmithvilleStory from '@/components/SmithvilleStory';

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBadges />
      <ProductGrid />
      <SmithvilleStory />
    </>
  );
}
