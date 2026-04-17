const categories = [
  {
    id: "jewelry",
    name: "Handcrafted Jewelry",
    slug: "jewelry",
    description: "One-of-a-kind pieces forged by skilled artisans using ethically sourced metals, gemstones, and natural materials. Each piece tells a story.",
    coverImage: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    productCount: 24
  },
  {
    id: "home-decor",
    name: "Home Decor",
    slug: "home-decor",
    description: "Transform your space with hand-thrown ceramics, woven textiles, and artisan sculptures that bring warmth and character to every room.",
    coverImage: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
    productCount: 32
  },
  {
    id: "candles",
    name: "Natural Candles",
    slug: "candles",
    description: "Hand-poured soy and beeswax candles with botanical botanicals and essential oils. Clean burn, long-lasting fragrance, zero toxins.",
    coverImage: "https://images.unsplash.com/photo-1602178506945-ca27f7ef1d0f?w=800&q=80",
    productCount: 18
  },
  {
    id: "pottery",
    name: "Pottery & Ceramics",
    slug: "pottery",
    description: "Wheel-thrown and hand-built ceramic pieces for everyday use. Functional art that elevates your table and home with timeless beauty.",
    coverImage: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80",
    productCount: 28
  },
  {
    id: "textiles",
    name: "Woven Textiles",
    slug: "textiles",
    description: "Handwoven throws, cushions, and wall hangings using natural fibers and traditional techniques passed down through generations of weavers.",
    coverImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    productCount: 20
  }
];
const getCategoryBySlug = (slug) => categories.find((c) => c.slug === slug);
export {
  categories as c,
  getCategoryBySlug as g
};
