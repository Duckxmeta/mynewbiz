export interface ScentPyramid {
  top: string;
  heart: string;
  base: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  burnTime: string;
  wax: string;
  wick: string;
  tag: 'Fresh & Aquatic' | 'Savory & Rich' | 'Earthy & Bold' | "Collector's Batch";
  description: string;
  scentPyramid: ScentPyramid;
  image: string;
  subtitle: string;
  inStock: boolean;
  weight: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 'fresh-duck-water',
    name: 'Fresh Duck Water',
    subtitle: 'Sunlit Wetland & Mineral Reed',
    price: 28.00,
    burnTime: '45+ Hours',
    wax: '100% Pure Beeswax',
    wick: 'Lead-Free Cotton Wick',
    tag: 'Fresh & Aquatic',
    description: 'An evocative aquatic blend capturing early light dancing across standing farmstead ponds. Features top notes of sunlit duckweed and crisp algae grounded by mineral mud and wild river reed.',
    scentPyramid: {
      top: 'Sunlit Duckweed & Crisp Algae',
      heart: 'Standing Wetland Mist',
      base: 'Mineral Mud & River Reed',
    },
    image: '/images/fresh-duck-water.jpg',
    inStock: true,
    weight: '8.5 oz / 240g',
  },
  {
    id: 'boiled-duck-eggs',
    name: 'Boiled Duck Eggs',
    subtitle: 'Steamed Yolk & Saline Vapor',
    price: 28.00,
    burnTime: '45+ Hours',
    wax: '100% Pure Beeswax',
    wick: 'Lead-Free Cotton Wick',
    tag: 'Savory & Rich',
    description: 'A comforting yet unapologetically realistic kitchen fragrance. Opens with warm calcium shell and steamy yolk richness before setting into saline kitchen vapor.',
    scentPyramid: {
      top: 'Warm Calcium Shell',
      heart: 'Steamed Rich Yolks',
      base: 'Saline Vapor & Farm Kitchen Steam',
    },
    image: '/images/boiled-duck-eggs.jpg',
    inStock: true,
    weight: '8.5 oz / 240g',
  },
  {
    id: 'premium-duck-fertilizer',
    name: 'Premium Duck Fertilizer',
    subtitle: 'Composted Nitrogen & Microbe Musk',
    price: 30.00,
    burnTime: '50+ Hours',
    wax: '100% Pure Beeswax',
    wick: 'Lead-Free Cotton Wick',
    tag: 'Earthy & Bold',
    description: 'The ultimate scent of raw, fertile abundance. Sun-baked straw and fresh nitrogen greens settle into a deep, earthy composted soil with micro-botanical warmth.',
    scentPyramid: {
      top: 'Fresh Straw & Sun-Baked Earth',
      heart: 'Decomposed Nitrogen Greens',
      base: 'Rich Composted Soil & Microbe Musk',
    },
    image: '/images/premium-duck-fertilizer.jpg',
    inStock: true,
    weight: '9.5 oz / 270g',
  },
  {
    id: 'limited-edition-chicken-scat',
    name: 'Limited Edition Chicken Scat',
    subtitle: 'Pine Loft & Coop Grain',
    price: 32.00,
    burnTime: '50+ Hours',
    wax: '100% Pure Beeswax',
    wick: 'Lead-Free Cotton Wick',
    tag: "Collector's Batch",
    description: 'A rare collector’s formulation commemorating traditional roosting life. Crisp pine shavings and scratch grains yield to sharp coop essence and sun-dried bedding.',
    scentPyramid: {
      top: 'Pine Shavings & Scratch Grains',
      heart: 'Sharp Coop Essence',
      base: 'Sun-Dried Bedding & Deep Loft Warmth',
    },
    image: '/images/chicken-scat.jpg',
    inStock: true,
    weight: '9.5 oz / 270g',
  },
];

export const CATEGORIES = [
  'All',
  'Fresh & Aquatic',
  'Savory & Rich',
  'Earthy & Bold',
  "Collector's Batch",
] as const;
