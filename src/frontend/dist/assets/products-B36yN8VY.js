import { a as useNavigate, b as useCart, d as useWishlist, j as jsxRuntimeExports, e as cn, H as Heart, S as ShoppingBag } from "./index-amgHO34L.js";
import { S as StarRating } from "./StarRating-DI9p6wry.js";
function ProductCard({
  product,
  index = 0,
  className
}) {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const wished = isInWishlist(product.id);
  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };
  const handleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };
  const handleCardClick = () => {
    navigate({ to: "/product/$id", params: { id: product.id } });
  };
  const handleCardKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleCardClick();
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "article",
    {
      "data-ocid": `product.item.${index + 1}`,
      className: cn(
        "group relative bg-card rounded-xl overflow-hidden border border-border cursor-pointer hover-lift transition-smooth",
        className
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: `/product/${product.id}`,
            className: "absolute inset-0 z-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-xl",
            onClick: (e) => {
              e.preventDefault();
              handleCardClick();
            },
            onKeyDown: handleCardKeyDown,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "sr-only", children: [
              "View ",
              product.name
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/5] overflow-hidden bg-muted", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: product.images[0],
              alt: product.name,
              className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",
              loading: "lazy"
            }
          ),
          product.badge && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 left-3 z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: cn(
                "text-xs font-body font-semibold px-2.5 py-1 rounded-full",
                product.badge === "Sale" ? "bg-destructive text-destructive-foreground" : product.badge === "New" ? "bg-secondary text-secondary-foreground" : "bg-primary text-primary-foreground"
              ),
              children: product.badge
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "data-ocid": `product.wishlist_button.${index + 1}`,
              onClick: handleWishlist,
              "aria-label": wished ? "Remove from wishlist" : "Add to wishlist",
              className: cn(
                "absolute top-3 right-3 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-smooth",
                wished ? "bg-primary text-primary-foreground" : "bg-card/90 text-muted-foreground hover:text-primary hover:bg-card"
              ),
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { size: 14, className: wished ? "fill-current" : "" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 inset-x-0 z-10 translate-y-full group-hover:translate-y-0 transition-transform duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              "data-ocid": `product.add_to_cart_button.${index + 1}`,
              onClick: handleAddToCart,
              className: "w-full bg-foreground text-background py-3 text-sm font-body font-semibold flex items-center justify-center gap-2 hover:bg-primary transition-smooth",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { size: 14 }),
                "Add to Cart"
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-body mb-1 uppercase tracking-wider", children: product.categoryName }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-base text-foreground leading-snug mb-2 line-clamp-2", children: product.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(StarRating, { rating: product.rating, size: "sm" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
              "(",
              product.reviewCount,
              ")"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-body font-bold text-foreground", children: [
              "$",
              product.price
            ] }),
            product.originalPrice && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-body text-sm text-muted-foreground line-through", children: [
              "$",
              product.originalPrice
            ] })
          ] })
        ] })
      ]
    }
  );
}
const products = [
  {
    id: "p1",
    name: "Hammered Gold Hoop Earrings",
    slug: "hammered-gold-hoop-earrings",
    price: 68,
    categoryId: "jewelry",
    categoryName: "Handcrafted Jewelry",
    description: "Hand-forged from solid 14k gold-filled wire, these earrings feature a naturally hammered texture that catches light beautifully. Lightweight enough to wear all day.",
    materials: [
      "14k Gold-filled wire",
      "Sterling silver posts",
      "Hypoallergenic"
    ],
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80"
    ],
    variants: [
      {
        name: "Size",
        options: ["Small (25mm)", "Medium (35mm)", "Large (50mm)"]
      }
    ],
    rating: 4.9,
    reviewCount: 142,
    featured: true,
    badge: "Bestseller"
  },
  {
    id: "p2",
    name: "Terra Cotta Beaded Necklace",
    slug: "terra-cotta-beaded-necklace",
    price: 52,
    categoryId: "jewelry",
    categoryName: "Handcrafted Jewelry",
    description: "Handcrafted with natural clay beads, each individually rolled and kiln-fired by our artisan partners. The earthy terracotta tones pair perfectly with any outfit.",
    materials: ["Natural clay beads", "Waxed cotton cord", "Gold-filled clasp"],
    images: [
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80"
    ],
    variants: [{ name: "Length", options: ['16"', '18"', '20"'] }],
    rating: 4.7,
    reviewCount: 89,
    featured: true
  },
  {
    id: "p3",
    name: "Botanical Soy Candle Set",
    slug: "botanical-soy-candle-set",
    price: 44,
    originalPrice: 58,
    categoryId: "candles",
    categoryName: "Natural Candles",
    description: "A trio of hand-poured soy wax candles infused with real dried botanicals. Each candle burns for 45+ hours and fills your space with grounding, natural fragrance.",
    materials: [
      "100% soy wax",
      "Dried botanicals",
      "Cotton wick",
      "Amber glass vessel"
    ],
    images: [
      "https://images.unsplash.com/photo-1602178506945-ca27f7ef1d0f?w=800&q=80",
      "https://images.unsplash.com/photo-1572726729207-a78d6feb18d7?w=800&q=80"
    ],
    variants: [
      {
        name: "Scent",
        options: ["Sage & Cedar", "Rose & Sandalwood", "Vanilla & Amber"]
      }
    ],
    rating: 4.8,
    reviewCount: 203,
    featured: true,
    badge: "Sale"
  },
  {
    id: "p4",
    name: "Mira Terracotta Bowl Set",
    slug: "mira-terracotta-bowl-set",
    price: 98,
    categoryId: "pottery",
    categoryName: "Pottery & Ceramics",
    description: "Set of 2 hand-thrown terracotta bowls with a reactive glaze finish. No two pieces are alike — each carries the unique mark of the potter's hands.",
    materials: ["Terracotta clay", "Food-safe glaze", "Lead-free"],
    images: [
      "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80",
      "https://images.unsplash.com/photo-1493106819501-66d381c466f1?w=800&q=80"
    ],
    variants: [
      {
        name: "Color",
        options: ["Natural Terracotta", "Sage Glaze", "Cream Matte"]
      }
    ],
    rating: 4.9,
    reviewCount: 76,
    featured: true
  },
  {
    id: "p5",
    name: "Linen & Cotton Throw Blanket",
    slug: "linen-cotton-throw-blanket",
    price: 129,
    categoryId: "textiles",
    categoryName: "Woven Textiles",
    description: "Handwoven on traditional looms using a blend of organic linen and soft cotton. The perfect weight for year-round use — airy in summer, cozy in winter.",
    materials: [
      "60% Organic linen",
      "40% Cotton",
      "Natural plant dyes",
      "Fringe trim"
    ],
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
    ],
    variants: [
      {
        name: "Color",
        options: ["Natural Oat", "Dusty Rose", "Sage Green", "Warm Sand"]
      },
      { name: "Size", options: ['50"x60"', '60"x80"'] }
    ],
    rating: 4.8,
    reviewCount: 118,
    featured: true
  },
  {
    id: "p6",
    name: "Dried Pampas Wall Hanging",
    slug: "dried-pampas-wall-hanging",
    price: 78,
    categoryId: "home-decor",
    categoryName: "Home Decor",
    description: "A statement wall piece crafted from sustainably harvested dried pampas grass, bunny tail grass, and cotton stems arranged on a driftwood branch.",
    materials: [
      "Dried pampas grass",
      "Bunny tail grass",
      "Driftwood branch",
      "Jute twine"
    ],
    images: [
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80"
    ],
    rating: 4.6,
    reviewCount: 54
  },
  {
    id: "p7",
    name: "Hand-Spun Silver Ring",
    slug: "hand-spun-silver-ring",
    price: 48,
    categoryId: "jewelry",
    categoryName: "Handcrafted Jewelry",
    description: "Spun from sterling silver wire into a delicate spiral band. Minimalist, adjustable, and perfect for stacking. Each ring has a slightly different texture.",
    materials: ["Sterling silver", "Adjustable sizing"],
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
      "https://images.unsplash.com/photo-1608042314453-ae338d682c93?w=800&q=80"
    ],
    variants: [{ name: "Size", options: ["5", "6", "7", "8", "9"] }],
    rating: 4.7,
    reviewCount: 93
  },
  {
    id: "p8",
    name: "Beeswax Pillar Candle Trio",
    slug: "beeswax-pillar-candle-trio",
    price: 38,
    categoryId: "candles",
    categoryName: "Natural Candles",
    description: "Three raw beeswax pillars in varying heights, hand-dipped and naturally scented with honey and wildflower. Beautiful alone or grouped together.",
    materials: ["Raw beeswax", "Cotton wick", "Natural honey scent"],
    images: [
      "https://images.unsplash.com/photo-1592361535891-56e4e297dfe0?w=800&q=80",
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&q=80"
    ],
    rating: 4.5,
    reviewCount: 61
  },
  {
    id: "p9",
    name: "Handpainted Ceramic Mug",
    slug: "handpainted-ceramic-mug",
    price: 36,
    categoryId: "pottery",
    categoryName: "Pottery & Ceramics",
    description: "A wheel-thrown stoneware mug painted with delicate botanical motifs by hand. Dishwasher safe, microwave safe, and holds exactly 12oz.",
    materials: [
      "Stoneware clay",
      "Hand-painted underglaze",
      "Food-safe clear glaze"
    ],
    images: [
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=800&q=80",
      "https://images.unsplash.com/photo-1572119865084-43c285814d63?w=800&q=80"
    ],
    variants: [
      { name: "Design", options: ["Wildflower", "Fern", "Poppy", "Lavender"] }
    ],
    rating: 4.9,
    reviewCount: 187,
    badge: "New"
  },
  {
    id: "p10",
    name: "Macramé Plant Hanger",
    slug: "macrame-plant-hanger",
    price: 34,
    categoryId: "home-decor",
    categoryName: "Home Decor",
    description: 'Hand-knotted from 3mm natural cotton rope. Holds pots up to 8" in diameter. The boho-chic design adds texture and life to any corner.',
    materials: ["Natural cotton rope", "Wooden dowel", 'Fits 6-8" pots'],
    images: [
      "https://images.unsplash.com/photo-1566895291281-ea63efd4a5c9?w=800&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
    ],
    rating: 4.6,
    reviewCount: 72
  },
  {
    id: "p11",
    name: "Embroidered Linen Cushion Cover",
    slug: "embroidered-linen-cushion-cover",
    price: 56,
    categoryId: "textiles",
    categoryName: "Woven Textiles",
    description: "Hand-embroidered botanical patterns on 100% washed linen. Each piece takes 6+ hours to complete. Available in two sizes with an envelope-style back.",
    materials: [
      "100% Washed linen",
      "Cotton embroidery thread",
      "Envelope closure"
    ],
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=800&q=80"
    ],
    variants: [
      { name: "Size", options: ['18"x18"', '20"x20"'] },
      { name: "Color", options: ["Natural Linen", "Dusty Sage", "Warm Ivory"] }
    ],
    rating: 4.8,
    reviewCount: 45
  },
  {
    id: "p12",
    name: "Pressed Flower Resin Tray",
    slug: "pressed-flower-resin-tray",
    price: 62,
    categoryId: "home-decor",
    categoryName: "Home Decor",
    description: "Each tray is a unique artwork — real pressed wildflowers are sealed in crystal-clear resin on a walnut wood base. Perfect for jewelry, keys, or as a decorative accent.",
    materials: ["Pressed wildflowers", "Food-safe resin", "Walnut wood base"],
    images: [
      "https://images.unsplash.com/photo-1619873596840-2e3ab2769804?w=800&q=80",
      "https://images.unsplash.com/photo-1604762511020-5db2325a6613?w=800&q=80"
    ],
    rating: 4.7,
    reviewCount: 38,
    badge: "New"
  },
  {
    id: "p13",
    name: "Speckled Stoneware Vase",
    slug: "speckled-stoneware-vase",
    price: 72,
    categoryId: "pottery",
    categoryName: "Pottery & Ceramics",
    description: "A sculptural stoneware vase with a distinctive speckled matte glaze. The organic silhouette is hand-formed, making each vase one-of-a-kind.",
    materials: ["High-fire stoneware", "Matte speckled glaze"],
    images: [
      "https://images.unsplash.com/photo-1612196808214-b7e239e5e7c8?w=800&q=80",
      "https://images.unsplash.com/photo-1493106819501-66d381c466f1?w=800&q=80"
    ],
    variants: [{ name: "Height", options: ["6 inch", "9 inch", "12 inch"] }],
    rating: 4.8,
    reviewCount: 63
  },
  {
    id: "p14",
    name: "Sage & Lavender Candle",
    slug: "sage-lavender-candle",
    price: 28,
    categoryId: "candles",
    categoryName: "Natural Candles",
    description: "A calming blend of sage, lavender, and a hint of eucalyptus. Hand-poured in a reusable matte black ceramic vessel. Burns for 50 hours.",
    materials: [
      "Coconut-soy wax blend",
      "Essential oil fragrance",
      "Reusable ceramic vessel",
      "Cotton-wood wick"
    ],
    images: [
      "https://images.unsplash.com/photo-1548382040-3e38da04d361?w=800&q=80",
      "https://images.unsplash.com/photo-1602178506945-ca27f7ef1d0f?w=800&q=80"
    ],
    rating: 4.9,
    reviewCount: 156,
    featured: true,
    badge: "Bestseller"
  }
];
const getProductById = (id) => products.find((p) => p.id === id);
const getProductsByCategory = (categoryId) => products.filter((p) => p.categoryId === categoryId);
const getFeaturedProducts = () => products.filter((p) => p.featured);
export {
  ProductCard as P,
  getProductById as a,
  getProductsByCategory as b,
  getFeaturedProducts as g,
  products as p
};
