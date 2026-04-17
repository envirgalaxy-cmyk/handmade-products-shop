import { c as createLucideIcon, u as useParams, a as useNavigate, b as useCart, d as useWishlist, r as reactExports, j as jsxRuntimeExports, L as Link, e as cn, M as Minus, P as Plus, S as ShoppingBag, H as Heart } from "./index-amgHO34L.js";
import { P as PageTransition } from "./PageTransition-DjB1rXfo.js";
import { a as getProductById, b as getProductsByCategory, P as ProductCard } from "./products-B36yN8VY.js";
import { S as StarRating } from "./StarRating-DI9p6wry.js";
import { r as reviews } from "./reviews-DadTDW4Q.js";
import { C as ChevronRight } from "./chevron-right-KujboAJ1.js";
import { T as Truck } from "./truck-D9umDVDn.js";
import { P as Package } from "./package-Frrj7G0S.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]];
const ChevronLeft = createLucideIcon("chevron-left", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ]
];
const Shield = createLucideIcon("shield", __iconNode);
const CARE_INSTRUCTIONS = {
  jewelry: [
    "Store in a cool, dry place away from sunlight",
    "Avoid contact with perfumes and harsh chemicals",
    "Wipe clean with a soft polishing cloth",
    "Remove before swimming or showering"
  ],
  candles: [
    "Trim wick to 1/4 inch before each burn",
    "Burn for 2–4 hours at a time",
    "Keep away from drafts and flammable materials",
    "Never leave a burning candle unattended"
  ],
  pottery: [
    "Dishwasher safe on the top rack",
    "Microwave safe unless metallic glaze is present",
    "Avoid sudden temperature changes",
    "Hand wash recommended to preserve glaze"
  ],
  textiles: [
    "Cold machine wash on gentle cycle",
    "Lay flat or hang to dry — avoid tumble drying",
    "Iron on low heat if needed",
    "Do not bleach"
  ],
  "home-decor": [
    "Dust with a soft dry cloth",
    "Avoid direct prolonged sunlight to preserve colour",
    "Handle with care — natural materials may vary",
    "Keep away from moisture"
  ]
};
const DEFAULT_CARE = [
  "Handle with care — this item is handmade",
  "Keep away from direct sunlight and moisture",
  "Clean gently with a soft, dry cloth",
  "Store safely when not in use"
];
const TABS = [
  { key: "description", label: "Description" },
  { key: "materials", label: "Materials & Care" },
  { key: "shipping", label: "Shipping" }
];
function ProductDetail() {
  const { id } = useParams({ from: "/product/$id" });
  const navigate = useNavigate();
  const product = getProductById(id);
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [activeImage, setActiveImage] = reactExports.useState(0);
  const [quantity, setQuantity] = reactExports.useState(1);
  const [selectedVariants, setSelectedVariants] = reactExports.useState({});
  const [addedFeedback, setAddedFeedback] = reactExports.useState(false);
  const [activeTab, setActiveTab] = reactExports.useState("description");
  const wished = product ? isInWishlist(product.id) : false;
  const relatedProducts = product ? getProductsByCategory(product.categoryId).filter((p) => p.id !== product.id).slice(0, 4) : [];
  const productReviews = reviews.slice(0, 3);
  const careInstructions = product ? CARE_INSTRUCTIONS[product.categoryId] ?? DEFAULT_CARE : DEFAULT_CARE;
  reactExports.useEffect(() => {
    if (product) {
      document.title = `${product.name} — Artisan & Co.`;
      setActiveImage(0);
      setQuantity(1);
      setSelectedVariants({});
    } else {
      document.title = "Product Not Found — Artisan & Co.";
    }
  }, [product]);
  if (!product) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-ocid": "product_not_found.section",
        className: "min-h-[60vh] flex flex-col items-center justify-center gap-5 px-4 text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-muted flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "text-muted-foreground", size: 28 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl text-foreground mb-2", children: "Product Not Found" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-body text-sm", children: "We couldn't find this product. It may have been removed or the link is incorrect." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/shop",
              "data-ocid": "product_not_found.back_button",
              className: "px-6 py-3 bg-primary text-primary-foreground rounded-full font-body font-semibold text-sm hover:opacity-90 transition-smooth",
              children: "Back to Shop"
            }
          )
        ]
      }
    );
  }
  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariants);
    setAddedFeedback(true);
    setTimeout(() => setAddedFeedback(false), 2e3);
  };
  const handleBuyNow = () => {
    addToCart(product, quantity, selectedVariants);
    navigate({ to: "/checkout" });
  };
  const handleVariantSelect = (variantName, option) => {
    setSelectedVariants((prev) => ({ ...prev, [variantName]: option }));
  };
  const discountPct = product.originalPrice ? Math.round((1 - product.price / product.originalPrice) * 100) : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageTransition, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "nav",
      {
        "aria-label": "Breadcrumb",
        className: "flex items-center gap-1.5 text-xs font-body text-muted-foreground flex-wrap",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/",
              "data-ocid": "product_detail.breadcrumb_home",
              className: "hover:text-foreground transition-colors",
              children: "Home"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 12, className: "flex-shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/shop",
              "data-ocid": "product_detail.breadcrumb_shop",
              className: "hover:text-foreground transition-colors",
              children: "Shop"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 12, className: "flex-shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/shop/$categorySlug",
              params: { categorySlug: product.categoryId },
              "data-ocid": "product_detail.breadcrumb_category",
              className: "hover:text-foreground transition-colors",
              children: product.categoryName
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 12, className: "flex-shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium truncate max-w-[180px]", children: product.name })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-8 lg:gap-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "product_detail.gallery", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-square rounded-2xl overflow-hidden bg-muted mb-3 group", children: [
            product.images.map((src, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src,
                alt: `${product.name} — view ${i + 1}`,
                className: cn(
                  "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
                  i === activeImage ? "opacity-100" : "opacity-0"
                ),
                loading: i === 0 ? "eager" : "lazy"
              },
              src
            )),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-foreground/70 text-background text-[10px] font-body px-2 py-1 rounded-full backdrop-blur-sm", children: "Handcrafted" }) }),
            product.badge && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-4 left-4 z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: cn(
                  "text-xs font-body font-semibold px-3 py-1.5 rounded-full",
                  product.badge === "Sale" ? "bg-destructive text-destructive-foreground" : product.badge === "New" ? "bg-secondary text-secondary-foreground" : "bg-primary text-primary-foreground"
                ),
                children: product.badge
              }
            ) })
          ] }),
          product.images.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2.5 overflow-x-auto scrollbar-none pb-1", children: product.images.map((src, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "data-ocid": `product_detail.thumb.${i + 1}`,
              onClick: () => setActiveImage(i),
              "aria-label": `View image ${i + 1}`,
              className: cn(
                "flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-smooth",
                i === activeImage ? "border-primary shadow-sm" : "border-border hover:border-muted-foreground"
              ),
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src,
                  alt: `Thumbnail ${i + 1}`,
                  className: "w-full h-full object-cover",
                  loading: "lazy"
                }
              )
            },
            src
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "product_detail.info", className: "flex flex-col gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/shop/$categorySlug",
              params: { categorySlug: product.categoryId },
              className: "inline-block w-fit text-xs font-body font-semibold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full hover:bg-primary/20 transition-smooth",
              children: product.categoryName
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl md:text-4xl text-foreground leading-tight text-balance", children: product.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(StarRating, { rating: product.rating, size: "md", showValue: true }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground font-body", children: [
              product.reviewCount,
              " reviews"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-3xl text-primary font-semibold", children: [
              "$",
              product.price
            ] }),
            product.originalPrice && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-body text-lg text-muted-foreground line-through", children: [
                "$",
                product.originalPrice
              ] }),
              discountPct && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-body font-bold bg-destructive text-destructive-foreground px-2 py-0.5 rounded-full", children: [
                discountPct,
                "% OFF"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-muted-foreground leading-relaxed", children: product.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs uppercase tracking-widest font-semibold text-foreground/60", children: "Materials Used" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: product.materials.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "text-xs font-body bg-muted text-muted-foreground px-2.5 py-1 rounded-full border border-border",
                children: m
              },
              m
            )) })
          ] }),
          product.variants && product.variants.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", "data-ocid": "product_detail.variants", children: product.variants.map((variant) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-body text-xs uppercase tracking-widest font-semibold text-foreground/60", children: [
              variant.name,
              selectedVariants[variant.name] && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-2 font-normal normal-case tracking-normal text-muted-foreground", children: [
                "— ",
                selectedVariants[variant.name]
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: variant.options.map((opt) => {
              const selected = selectedVariants[variant.name] === opt;
              return /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "data-ocid": `product_detail.variant_${variant.name.toLowerCase()}_option`,
                  onClick: () => handleVariantSelect(variant.name, opt),
                  "aria-pressed": selected,
                  className: cn(
                    "font-body text-sm px-3.5 py-1.5 rounded-full border transition-smooth",
                    selected ? "border-primary bg-primary text-primary-foreground shadow-sm" : "border-border bg-card text-foreground hover:border-primary/60 hover:bg-primary/5"
                  ),
                  children: opt
                },
                opt
              );
            }) })
          ] }, variant.name)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs uppercase tracking-widest font-semibold text-foreground/60", children: "Quantity" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center border border-border rounded-full overflow-hidden bg-card", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "data-ocid": "product_detail.qty_decrease",
                  onClick: () => setQuantity((q) => Math.max(1, q - 1)),
                  "aria-label": "Decrease quantity",
                  className: "w-10 h-10 flex items-center justify-center text-foreground hover:bg-muted transition-smooth",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { size: 14 })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  "data-ocid": "product_detail.qty_value",
                  className: "w-10 text-center font-body font-semibold text-sm text-foreground",
                  children: quantity
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "data-ocid": "product_detail.qty_increase",
                  onClick: () => setQuantity((q) => q + 1),
                  "aria-label": "Increase quantity",
                  className: "w-10 h-10 flex items-center justify-center text-foreground hover:bg-muted transition-smooth",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 14 })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 pt-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "data-ocid": "product_detail.add_to_cart_button",
                  onClick: handleAddToCart,
                  className: cn(
                    "flex-1 h-12 rounded-full font-body font-semibold text-sm flex items-center justify-center gap-2 transition-smooth shadow-subtle",
                    addedFeedback ? "bg-secondary text-secondary-foreground" : "bg-foreground text-background hover:bg-primary"
                  ),
                  children: addedFeedback ? /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: "✓ Added to Cart" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { size: 16 }),
                    "Add to Cart"
                  ] })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "data-ocid": "product_detail.wishlist_button",
                  onClick: () => toggleWishlist(product),
                  "aria-label": wished ? "Remove from wishlist" : "Add to wishlist",
                  className: cn(
                    "w-12 h-12 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-smooth",
                    wished ? "bg-primary border-primary text-primary-foreground" : "border-border bg-card text-muted-foreground hover:border-primary hover:text-primary"
                  ),
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { size: 18, className: wished ? "fill-current" : "" })
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "data-ocid": "product_detail.buy_now_button",
                onClick: handleBuyNow,
                className: "w-full h-12 rounded-full border-2 border-primary text-primary font-body font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-smooth",
                children: "Buy Now"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-4 pt-4 border-t border-border", children: [
            { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { size: 13 }), text: "Free shipping over $50" },
            { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { size: 13 }), text: "Handmade with care" },
            { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { size: 13 }), text: "Secure checkout" }
          ].map((badge) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-center gap-1.5 text-xs font-body text-muted-foreground",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: badge.icon }),
                badge.text
              ]
            },
            badge.text
          )) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "section",
        {
          className: "mt-14 rounded-2xl border border-border bg-card overflow-hidden",
          "data-ocid": "product_detail.tabs_section",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex border-b border-border overflow-x-auto scrollbar-none", children: TABS.map(({ key, label }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "data-ocid": `product_detail.tab_${key}`,
                onClick: () => setActiveTab(key),
                className: cn(
                  "flex-shrink-0 px-6 py-4 text-sm font-body font-semibold border-b-2 transition-smooth whitespace-nowrap",
                  activeTab === key ? "border-primary text-primary bg-primary/5" : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
                ),
                children: label
              },
              key
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "p-6 md:p-8 max-w-2xl",
                "data-ocid": "product_detail.tab_content",
                children: [
                  activeTab === "description" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-foreground leading-relaxed", children: product.description }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-muted-foreground leading-relaxed text-sm", children: "Each piece in our artisan collection is crafted one at a time. Because of the handmade nature, slight variations in colour, texture, and form are what make each piece uniquely yours." }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 pt-1", children: [
                      "100% handmade by skilled artisans",
                      "Each piece is one-of-a-kind",
                      "Ethically sourced materials",
                      "Packaged in eco-friendly materials"
                    ].map((point) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "li",
                      {
                        className: "flex items-start gap-2 font-body text-sm text-foreground",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" }),
                          point
                        ]
                      },
                      point
                    )) })
                  ] }),
                  activeTab === "materials" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-7", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg text-foreground mb-3", children: "Materials" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: product.materials.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "li",
                        {
                          className: "flex items-start gap-2 font-body text-sm text-foreground",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" }),
                            m
                          ]
                        },
                        m
                      )) })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg text-foreground mb-3", children: "Care Instructions" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: careInstructions.map((instruction) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "li",
                        {
                          className: "flex items-start gap-2 font-body text-sm text-muted-foreground",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" }),
                            instruction
                          ]
                        },
                        instruction
                      )) })
                    ] })
                  ] }),
                  activeTab === "shipping" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: [
                    {
                      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { size: 20, className: "text-primary" }),
                      title: "Standard Shipping",
                      body: "3–5 business days · $5.99 flat rate. Free on orders $50+."
                    },
                    {
                      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { size: 20, className: "text-secondary" }),
                      title: "Handcrafted Packaging",
                      body: "Every order is wrapped in tissue paper and shipped in a recycled kraft box. Gift-ready by default."
                    },
                    {
                      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { size: 20, className: "text-primary" }),
                      title: "Easy Returns",
                      body: "Not happy? Return within 14 days of delivery for a full refund. Handmade items in original condition only."
                    }
                  ].map(({ icon, title, body }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "flex gap-4 p-4 rounded-xl bg-muted/40 border border-border",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 mt-0.5", children: icon }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body font-semibold text-foreground text-sm mb-0.5", children: title }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-muted-foreground", children: body })
                        ] })
                      ]
                    },
                    title
                  )) })
                ]
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "section",
        {
          className: "mt-14 pt-12 border-t border-border",
          "data-ocid": "product_detail.reviews_section",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl text-foreground mb-8", children: "Customer Reviews" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-5", children: productReviews.map((review, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "article",
              {
                "data-ocid": `product_detail.review.${i + 1}`,
                className: "bg-card rounded-2xl p-5 border border-border",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(StarRating, { rating: review.rating, size: "sm", className: "mb-3" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body font-semibold text-sm text-foreground mb-1", children: review.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-body text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3", children: [
                    '"',
                    review.text,
                    '"'
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    review.image ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "img",
                      {
                        src: review.image,
                        alt: review.customerName,
                        className: "w-7 h-7 rounded-full object-cover"
                      }
                    ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-7 h-7 rounded-full bg-muted flex items-center justify-center text-xs font-display text-primary", children: review.customerName[0] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-body font-semibold text-foreground", children: review.customerName }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground ml-auto", children: review.date })
                  ] })
                ]
              },
              review.id
            )) })
          ]
        }
      ),
      relatedProducts.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "section",
        {
          className: "mt-14 pt-12 border-t border-border",
          "data-ocid": "product_detail.related_section",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mb-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs uppercase tracking-widest text-primary font-semibold mb-1", children: "Continue Exploring" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl sm:text-3xl text-foreground", children: "You May Also Like" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: "/shop/$categorySlug",
                  params: { categorySlug: product.categoryId },
                  "data-ocid": "product_detail.view_all_link",
                  className: "hidden sm:inline-flex items-center gap-1 font-body text-sm text-muted-foreground hover:text-foreground transition-colors group",
                  children: [
                    "View all",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      ChevronRight,
                      {
                        size: 14,
                        className: "group-hover:translate-x-0.5 transition-transform"
                      }
                    )
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-4 overflow-x-auto scrollbar-none pb-2 sm:pb-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-5", children: relatedProducts.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 w-56 sm:w-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product: p, index: i }) }, p.id)) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 pt-8 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/shop",
          "data-ocid": "product_detail.back_to_shop_link",
          className: "inline-flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-foreground transition-smooth",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 14 }),
            "Back to Shop"
          ]
        }
      ) })
    ] })
  ] });
}
export {
  ProductDetail as default
};
