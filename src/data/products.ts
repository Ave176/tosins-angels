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
    name: "Gold Angel Bear Necklace & Earring Set",
    price: 12,
    description: "Gold-tone bear pendant necklace with matching crystal stud earrings",
    longDescription: "This charming jewelry set features a gold-tone bear pendant adorned with sparkling cubic zirconia stones on a delicate twisted chain, paired with matching bear stud earrings. The playful bear motif captures the spirit of Tosin's Angels, making it a perfect gift or everyday accessory. Each piece is carefully crafted for lasting shine and comfort.",
    category: "Necklaces",
    image: "/images/products/gold-bear-set.jpg",
    images: [
      "/images/products/gold-bear-set.jpg"
    ],
    inStock: true,
    featured: true,
    rating: 4.9,
    reviews: 124,
    materials: ["Gold-Tone Metal", "Cubic Zirconia"]
  },
  {
    id: "2",
    name: "Rainbow Cross Pendant Necklace",
    price: 18,
    description: "Gold-tone cross pendant with multicolored gemstone accents",
    longDescription: "A beautiful gold-tone cross pendant featuring vibrant multicolored baguette-cut stones arranged in a striking rainbow pattern. Suspended from a fine box chain, this necklace blends faith and fashion effortlessly. The rich jewel tones catch the light beautifully, making it a standout piece for any occasion.",
    category: "Necklaces",
    image: "/images/products/rainbow-cross-necklace.jpg",
    images: [
      "/images/products/rainbow-cross-necklace.jpg"
    ],
    inStock: true,
    featured: true,
    rating: 4.8,
    reviews: 89,
    materials: ["Gold-Tone Metal", "Colored Crystals"]
  },
  {
    id: "3",
    name: "Silver Angel Bear Necklace & Earring Set",
    price: 18,
    description: "Silver-tone bear pendant necklace with matching bear stud earrings",
    longDescription: "Our signature angel bear design in polished silver tone, this set includes a bear pendant on a fine snake chain and coordinating bear stud earrings with crystal accents. The smooth, rounded bear silhouette has a modern, minimalist feel while still being playful and eye-catching. A customer favourite and a staple of the Tosin's Angels collection.",
    category: "Necklaces",
    image: "/images/products/silver-bear-set.jpg",
    images: [
      "/images/products/silver-bear-set.jpg"
    ],
    inStock: true,
    featured: true,
    rating: 5.0,
    reviews: 156,
    materials: ["Silver-Tone Metal", "Crystal Accents"]
  },
  {
    id: "4",
    name: "Crystal Bear Necklace & Earring Set",
    price: 18,
    description: "Silver-tone bear pendant with matching crystal dangle earrings",
    longDescription: "This elegant set pairs a crystal-embellished bear pendant necklace with dainty dangle earrings on a twisted rope chain. The silver-tone finish and faceted crystals give the bear motif a more refined, sophisticated look. The hook earrings provide comfortable wear and graceful movement. Perfect for those who love a touch of sparkle.",
    category: "Earrings",
    image: "/images/products/crystal-bear-set.jpg",
    images: [
      "/images/products/crystal-bear-set.jpg"
    ],
    inStock: true,
    featured: true,
    rating: 4.8,
    reviews: 92,
    materials: ["Silver-Tone Metal", "Faceted Crystals"]
  },
  {
    id: "5",
    name: "Mini Teddy Bear Stud Earrings",
    price: 6,
    description: "Adorable miniature teddy bear stud earrings",
    longDescription: "These irresistibly cute miniature teddy bear studs are the perfect finishing touch for any outfit. Each tiny bear is detailed with a sweet face and a delicate bow, sitting comfortably on secure stud backs. Lightweight and fun, they are ideal for everyday wear or as a thoughtful gift for someone special. A beloved entry-level piece from Tosin's Angels.",
    category: "Earrings",
    image: "/images/products/mini-bear-studs.jpg",
    images: [
      "/images/products/mini-bear-studs.jpg"
    ],
    inStock: true,
    featured: false,
    rating: 4.7,
    reviews: 203,
    materials: ["Mixed Materials"]
  }
];

export const categories = ["All", "Necklaces", "Earrings"];

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
