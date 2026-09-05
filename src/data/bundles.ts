import { products, type Product } from "./products";

export interface BundleItem {
  productId: number;
  quantity: number;
  customNote?: string;
}

export interface ProductBundle {
  id: number;
  name: string;
  tagline: string;
  category: "Cricket" | "Football" | "Badminton" | "Gym Equipment" | "Running" | "Multi-Sport";
  badge: string;
  image: string;
  description: string;
  items: BundleItem[];
  originalPrice: number;
  bundlePrice: number;
  savings: number;
  discountPercentage: number;
  features: string[];
  stock: number;
}

export const productBundles: ProductBundle[] = [
  {
    id: 101,
    name: "Complete Pro Cricket Champion Kit",
    tagline: "Tournament Grade Willow Bat + Leather Balls + Protection",
    category: "Cricket",
    badge: "💥 SAVE 25%",
    image:
      "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=800&q=80",
    description:
      "The ultimate tournament kit for club cricketers. Includes Grade-1 English Willow bat, authentic match leather balls, and batting gloves.",
    items: [
      { productId: 1, quantity: 1, customNote: "Grade-1 English Willow Bat" },
      { productId: 7, quantity: 2, customNote: "2x Match Leather Cricket Balls" },
      { productId: 6, quantity: 1, customNote: "Moisture-Wick Athlete Jersey" },
    ],
    originalPrice: 15100,
    bundlePrice: 11325,
    savings: 3775,
    discountPercentage: 25,
    features: [
      "Grade-1 English Willow with massive 40mm edges",
      "2x MCC-compliant four-piece leather balls",
      "Moisture-wicking breathable jersey for humid match days",
      "Free knocking and oiling service included",
    ],
    stock: 8,
  },
  {
    id: 102,
    name: "Football Striker & Agility Match Pack",
    tagline: "FIFA Quality Match Ball + Pro Footwear + Training Gear",
    category: "Football",
    badge: "🔥 SAVE 22%",
    image:
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=800&q=80",
    description:
      "Engineered for lethal strikers and fast wingers. Thermal-bonded match football paired with speed footwear and performance jersey.",
    items: [
      { productId: 2, quantity: 1, customNote: "FIFA Quality Match Football" },
      { productId: 4, quantity: 1, customNote: "Speed & Agility Cushion Footwear" },
      { productId: 6, quantity: 1, customNote: "Pro Athlete Match Jersey" },
    ],
    originalPrice: 15000,
    bundlePrice: 11700,
    savings: 3300,
    discountPercentage: 22,
    features: [
      "Thermal bonded seamless flight control ball",
      "Responsive sprint footwear for high-cadence acceleration",
      "Ergonomic fit jersey with anti-chafing flatlock seams",
    ],
    stock: 12,
  },
  {
    id: 103,
    name: "Heavy-Duty Gym & Strength Powerhouse",
    tagline: "Hex Dumbbells Pair + Athlete Footwear + Recovery Gear",
    category: "Gym Equipment",
    badge: "💪 SAVE 20%",
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80",
    description:
      "Build your home gym foundation. Rubber-encased hex dumbbells with high-traction knurling, supportive training shoes, and quick-dry apparel.",
    items: [
      { productId: 5, quantity: 1, customNote: "Hex Dumbbells (Pair)" },
      { productId: 4, quantity: 1, customNote: "Stable Lifting Training Shoes" },
      { productId: 6, quantity: 1, customNote: "Breathable Gym Jersey" },
    ],
    originalPrice: 16500,
    bundlePrice: 13200,
    savings: 3300,
    discountPercentage: 20,
    features: [
      "Anti-roll hex rubber dumbbells with chrome knurling",
      "Flat-sole stable base footwear for heavy squats and deadlifts",
      "High-stretch athletic jersey for unrestricted range of motion",
    ],
    stock: 10,
  },
  {
    id: 104,
    name: "Badminton Tournament Duo Championship Pack",
    tagline: "Pro Carbon Racket + High-Speed Footwear + Jersey",
    category: "Badminton",
    badge: "⚡ SAVE 24%",
    image:
      "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=800&q=80",
    description:
      "Dominate the court with ultra-lightweight carbon graphite racket, high-traction agile footwear, and quick-dry jersey.",
    items: [
      { productId: 3, quantity: 1, customNote: "Carbon Pro Badminton Racket" },
      { productId: 4, quantity: 1, customNote: "Agility Court Cushion Shoes" },
      { productId: 6, quantity: 1, customNote: "Breathable Court Jersey" },
    ],
    originalPrice: 14000,
    bundlePrice: 10640,
    savings: 3360,
    discountPercentage: 24,
    features: [
      "High-modulus carbon graphite frame (84g lightweight)",
      "Non-marking rubber sole cushioning for rapid split-steps",
      "Cooling mesh athlete jersey keeps core body temperature down",
    ],
    stock: 14,
  },
  {
    id: 105,
    name: "Marathon & Speed Runner Endurance Set",
    tagline: "Cushioned Long-Distance Shoes + 2x Athlete Jerseys",
    category: "Running",
    badge: "🏃 SAVE 20%",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    description:
      "Everything you need for half-marathons and daily pavement miles. Maximum cushioning footwear paired with dual quick-dry training jerseys.",
    items: [
      { productId: 4, quantity: 1, customNote: "Cushioned Running Shoes" },
      { productId: 6, quantity: 2, customNote: "2x Breathable Sports Jerseys" },
    ],
    originalPrice: 13500,
    bundlePrice: 10800,
    savings: 2700,
    discountPercentage: 20,
    features: [
      "Plush responsive midsole foam absorbing asphalt impact shock",
      "Reflective accents for low-light night and dawn road runs",
      "2x lightweight jerseys to alternate across weekly long runs",
    ],
    stock: 9,
  },
  {
    id: 106,
    name: "Multi-Sport Athlete All-Rounder Deluxe Kit",
    tagline: "Cricket Willow Bat + Match Football + Hex Dumbbells",
    category: "Multi-Sport",
    badge: "⭐ BEST VALUE (SAVE 28%)",
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=800&q=80",
    description:
      "The complete multi-sport athletic setup. Includes Grade-1 cricket bat, match-grade football, and heavy-duty hex dumbbells.",
    items: [
      { productId: 1, quantity: 1, customNote: "Professional Cricket Bat" },
      { productId: 2, quantity: 1, customNote: "Match Football" },
      { productId: 5, quantity: 1, customNote: "Hex Gym Dumbbells (Pair)" },
    ],
    originalPrice: 19000,
    bundlePrice: 13680,
    savings: 5320,
    discountPercentage: 28,
    features: [
      "English Willow cricket bat with premium balance",
      "FIFA-standard match ball with textured outer flight casing",
      "Pair of ergonomic knurled hex dumbbells for conditioning",
      "Maximum bundle savings of over Rs. 5,300",
    ],
    stock: 6,
  },
];

// Helper to convert a bundle into a Product instance compatible with CartContext
export const createBundleProduct = (bundle: ProductBundle): Product => {
  return {
    id: bundle.id + 50000, // Unique ID namespace for bundles
    name: `${bundle.name} [Bundle Pack]`,
    category: `Bundle - ${bundle.category}`,
    price: bundle.bundlePrice,
    image: bundle.image,
    rating: 4.9,
    reviews: 64,
    badge: bundle.badge,
    stock: bundle.stock,
    description: `${bundle.description} Includes all bundle items at ${bundle.discountPercentage}% discount.`,
  };
};

// Helper to get full product details for items in a bundle
export interface BundleProductDetail {
  product: Product;
  quantity: number;
  customNote?: string;
}

export const getBundleProductsDetails = (bundle: ProductBundle): BundleProductDetail[] => {
  const result: BundleProductDetail[] = [];
  for (const item of bundle.items) {
    const prod = products.find((p) => p.id === item.productId);
    if (prod) {
      result.push({
        product: prod,
        quantity: item.quantity,
        customNote: item.customNote,
      });
    }
  }
  return result;
};
