export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  longDescription: string;
  category: string;
  image: string;
  images: string[];
  inStock: boolean;
  featured: boolean;
  rating: number;
  reviews: number;
  materials: string[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "Celestial Diamond Necklace",
    price: 2499,
    originalPrice: 2999,
    description: "18K gold necklace with brilliant-cut diamonds",
    longDescription: "This exquisite celestial-inspired necklace features a stunning arrangement of brilliant-cut diamonds set in 18K gold. Each diamond is carefully selected for its exceptional clarity and fire, creating a piece that captures light from every angle. The delicate chain perfectly complements the radiant pendant, making it ideal for both special occasions and everyday elegance.",
    category: "Necklaces",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&h=800&fit=crop"
    ],
    inStock: true,
    featured: true,
    rating: 4.9,
    reviews: 124,
    materials: ["18K Gold", "VVS Diamonds"]
  },
  {
    id: "2",
    name: "Angel Wing Earrings",
    price: 899,
    description: "Sterling silver earrings with pearl accents",
    longDescription: "Inspired by the grace of celestial beings, these angel wing earrings are crafted from premium sterling silver with lustrous freshwater pearl accents. The intricate feather detailing showcases exceptional craftsmanship, while the pearls add a touch of timeless elegance. Lightweight and comfortable for all-day wear.",
    category: "Earrings",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&h=800&fit=crop"
    ],
    inStock: true,
    featured: true,
    rating: 4.8,
    reviews: 89,
    materials: ["Sterling Silver", "Freshwater Pearls"]
  },
  {
    id: "3",
    name: "Halo Engagement Ring",
    price: 4999,
    description: "Platinum ring with center diamond and halo setting",
    longDescription: "The Halo Engagement Ring represents the pinnacle of romantic luxury. Featuring a breathtaking center diamond surrounded by a halo of smaller brilliant-cut diamonds, all set in platinum for eternal durability. This ring symbolizes endless love and commitment, crafted to be treasured for generations.",
    category: "Rings",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=800&h=800&fit=crop"
    ],
    inStock: true,
    featured: true,
    rating: 5.0,
    reviews: 256,
    materials: ["Platinum", "VVS Diamonds"]
  },
  {
    id: "4",
    name: "Golden Serpent Bracelet",
    price: 1299,
    description: "14K gold bracelet with emerald eyes",
    longDescription: "This striking serpent bracelet winds elegantly around the wrist, featuring intricate scale detailing in 14K gold. The serpent's eyes are set with vivid emeralds, adding a pop of color and mystique. A bold statement piece that embodies both power and grace.",
    category: "Bracelets",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&h=800&fit=crop"
    ],
    inStock: true,
    featured: false,
    rating: 4.7,
    reviews: 67,
    materials: ["14K Gold", "Emeralds"]
  },
  {
    id: "5",
    name: "Pearl Drop Pendant",
    price: 649,
    description: "Rose gold pendant with South Sea pearl",
    longDescription: "A stunning South Sea pearl suspended from a delicate rose gold chain creates this timeless pendant. The pearl's natural iridescence catches the light beautifully, while the warm tones of rose gold complement any skin tone. Perfect for adding understated elegance to any outfit.",
    category: "Necklaces",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=800&h=800&fit=crop"
    ],
    inStock: true,
    featured: false,
    rating: 4.6,
    reviews: 103,
    materials: ["Rose Gold", "South Sea Pearl"]
  },
  {
    id: "6",
    name: "Eternity Band",
    price: 1899,
    originalPrice: 2199,
    description: "18K white gold band with channel-set diamonds",
    longDescription: "Our Eternity Band features channel-set diamonds that encircle the entire band, symbolizing never-ending love. Crafted in 18K white gold, this band offers both beauty and comfort. Each diamond is perfectly matched for consistency in color and clarity, creating a seamless sparkle.",
    category: "Rings",
    image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=800&fit=crop"
    ],
    inStock: true,
    featured: true,
    rating: 4.9,
    reviews: 178,
    materials: ["18K White Gold", "Diamonds"]
  },
  {
    id: "7",
    name: "Sapphire Stud Earrings",
    price: 1599,
    description: "White gold studs with Ceylon sapphires",
    longDescription: "These elegant stud earrings feature vivid blue Ceylon sapphires set in 14K white gold. The sapphires are selected for their exceptional color saturation and clarity, creating a striking yet versatile piece. Secure butterfly backs ensure comfortable, worry-free wear.",
    category: "Earrings",
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&h=800&fit=crop"
    ],
    inStock: true,
    featured: false,
    rating: 4.8,
    reviews: 92,
    materials: ["14K White Gold", "Ceylon Sapphires"]
  },
  {
    id: "8",
    name: "Tennis Bracelet",
    price: 3499,
    description: "Platinum bracelet with graduated diamonds",
    longDescription: "The quintessential tennis bracelet reimagined with graduated diamonds set in platinum. The diamonds increase in size toward the center, creating a beautiful focal point. The flexible link design ensures comfort and movement, while the secure clasp provides peace of mind.",
    category: "Bracelets",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&h=800&fit=crop"
    ],
    inStock: true,
    featured: false,
    rating: 4.9,
    reviews: 145,
    materials: ["Platinum", "Diamonds"]
  }
];

export const categories = ["All", "Necklaces", "Earrings", "Rings", "Bracelets"];

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

export function getFeaturedProducts(): Product[] {
  return products.filter(p => p.featured);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "All") return products;
  return products.filter(p => p.category === category);
}
