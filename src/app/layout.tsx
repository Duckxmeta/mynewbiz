import type { Metadata } from 'next';
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import TopBanner from '@/components/TopBanner';
import Navbar from '@/components/Navbar';
import CartDrawer from '@/components/CartDrawer';
import CareGuideFooter from '@/components/CareGuideFooter';

const cormorant = Cormorant_Garamond({
  variable: '--font-serif',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const jakarta = Plus_Jakarta_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'JustDuckit Candles | Artisanal Beeswax Candles Poured in Smithville, TN',
  description: 'Ultra-luxe artisanal beeswax candles hand-poured in Smithville, Tennessee. Hyper-realistic farmstead aromatics crafted with 100% natural beeswax and lead-free cotton wicks.',
  keywords: ['beeswax candles', 'Smithville TN', 'artisanal candles', 'JustDuckit', 'hand poured', 'clean burning'],
  openGraph: {
    title: 'JustDuckit Candles | Ultra-Luxe Farmstead Aromatics',
    description: 'Boutique 100% natural beeswax candles hand-poured in Smithville, TN.',
    siteName: 'JustDuckit Candles',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable} h-full scroll-smooth antialiased`}>
      <body className="min-h-full flex flex-col bg-[#FAF7F2] text-[#262626] font-sans selection:bg-[#E8C172] selection:text-[#1A1A1A]">
        <TopBanner />
        <Navbar />
        <main className="flex-1">{children}</main>
        <CartDrawer />
        <CareGuideFooter />
      </body>
    </html>
  );
}
