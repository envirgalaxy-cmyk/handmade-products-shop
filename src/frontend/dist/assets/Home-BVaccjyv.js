import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, L as Link, H as Heart } from "./index-amgHO34L.js";
import { P as PageTransition } from "./PageTransition-DjB1rXfo.js";
import { g as getFeaturedProducts, P as ProductCard } from "./products-B36yN8VY.js";
import { S as StarRating } from "./StarRating-DI9p6wry.js";
import { c as categories } from "./categories-zF_qE_Y3.js";
import { r as reviews } from "./reviews-DadTDW4Q.js";
import { A as ArrowRight, S as Sparkles } from "./sparkles-BmSBtIdy.js";
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
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }]
];
const Award = createLucideIcon("award", __iconNode);
const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&q=80",
    alt: "Terracotta pottery on wheel"
  },
  {
    src: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80",
    alt: "Handcrafted gold jewelry"
  },
  {
    src: "https://images.unsplash.com/photo-1602178506945-ca27f7ef1d0f?w=600&q=80",
    alt: "Botanical soy candles"
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    alt: "Handwoven linen textiles"
  },
  {
    src: "https://images.unsplash.com/photo-1566895291281-ea63efd4a5c9?w=600&q=80",
    alt: "Macramé plant hanger"
  },
  {
    src: "https://images.unsplash.com/photo-1612196808214-b7e239e5e7c8?w=600&q=80",
    alt: "Speckled stoneware vase"
  },
  {
    src: "https://images.unsplash.com/photo-1516967124798-10656f7dca28?w=600&q=80",
    alt: "Artisan at wooden workbench"
  },
  {
    src: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80",
    alt: "Sterling silver ring close-up"
  },
  {
    src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80",
    alt: "Dried pampas grass wall hanging"
  }
];
const perks = [
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 18 }),
    title: "100% Handmade",
    text: "Every piece crafted by artisan hands"
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { size: 18 }),
    title: "Ethically Sourced",
    text: "Sustainable materials, fair wages"
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { size: 18 }),
    title: "Made with Love",
    text: "Free shipping on orders over $75"
  }
];
function Home() {
  reactExports.useEffect(() => {
    document.title = "Artisan & Co. — Handmade with Love";
  }, []);
  const featured = getFeaturedProducts();
  const topReviews = reviews.slice(0, 3);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageTransition, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        "data-ocid": "hero.section",
        className: "relative min-h-[92vh] flex items-center overflow-hidden",
        "aria-label": "Hero",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 z-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1800&q=85",
                alt: "Artisan shaping pottery in a warm workshop",
                className: "w-full h-full object-cover"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/45 to-transparent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-foreground/25 via-transparent to-transparent" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-xl animate-fade-in", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block text-xs font-body font-semibold tracking-[0.2em] uppercase text-primary-foreground/90 bg-primary/85 rounded-full px-4 py-1.5 mb-7 backdrop-blur-sm", children: "Handcrafted with care" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.07] text-background mb-7 text-balance", children: [
              "Crafted with Heart,",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "not-italic text-accent/90", children: "Made for Your Home" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-lg text-background/80 mb-10 leading-relaxed max-w-md", children: "Discover unique handmade pieces crafted by skilled artisans who pour their soul into every stitch, pour, and form." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: "/shop",
                  "data-ocid": "hero.shop_now_button",
                  className: "inline-flex items-center gap-2 bg-primary text-primary-foreground font-body font-semibold px-8 py-3.5 rounded-full hover:bg-primary/90 transition-smooth hover-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  children: [
                    "Shop Now",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "/story",
                  "data-ocid": "hero.our_story_button",
                  className: "inline-flex items-center gap-2 bg-background/15 backdrop-blur-sm border border-background/50 text-background font-body font-semibold px-8 py-3.5 rounded-full hover:bg-background/25 transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  children: "Our Story"
                }
              )
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-background text-[10px] font-body tracking-[0.2em] uppercase", children: "Scroll" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-px h-10 bg-background/60 animate-pulse" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-card border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-6 lg:px-12 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-3 divide-y sm:divide-y-0 sm:divide-x divide-border", children: perks.map((perk) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex items-center gap-3 py-3 sm:py-0 sm:px-6 first:sm:pl-0 last:sm:pr-0",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary flex-shrink-0", children: perk.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body font-semibold text-sm text-foreground", children: perk.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs text-muted-foreground", children: perk.text })
          ] })
        ]
      },
      perk.title
    )) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        "data-ocid": "categories.section",
        className: "bg-background py-20 px-6 lg:px-12",
        "aria-labelledby": "categories-heading",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mb-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-body font-semibold tracking-[0.18em] uppercase text-primary mb-2", children: "Browse by category" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h2",
                {
                  id: "categories-heading",
                  className: "font-display text-3xl lg:text-4xl text-foreground",
                  children: "Shop Our Collections"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/shop",
                "data-ocid": "categories.view_all_link",
                className: "hidden sm:inline-flex items-center gap-1.5 font-body text-sm font-semibold text-primary hover:text-primary/80 transition-smooth",
                children: [
                  "View all ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14 })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4", children: categories.map((cat, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/shop/$categorySlug",
              params: { categorySlug: cat.slug },
              "data-ocid": `categories.item.${i + 1}`,
              className: "group block relative rounded-2xl overflow-hidden aspect-[3/4] hover-lift transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: cat.coverImage,
                    alt: cat.name,
                    className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",
                    loading: "lazy"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-foreground/65 via-foreground/10 to-transparent" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 inset-x-0 p-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-sm text-primary-foreground leading-snug", children: cat.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-body text-primary-foreground/70 mt-0.5", children: [
                    cat.productCount,
                    " products"
                  ] })
                ] })
              ]
            },
            cat.id
          )) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        "data-ocid": "featured_products.section",
        className: "bg-muted/30 py-20 px-6 lg:px-12",
        "aria-labelledby": "featured-heading",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mb-12", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-body font-semibold tracking-[0.18em] uppercase text-primary mb-2", children: "Handpicked for you" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h2",
                {
                  id: "featured-heading",
                  className: "font-display text-3xl lg:text-4xl text-foreground",
                  children: "Featured Collections"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/shop",
                "data-ocid": "featured_products.view_all_link",
                className: "hidden sm:inline-flex items-center gap-1.5 font-body text-sm font-semibold text-primary hover:text-primary/80 transition-smooth",
                children: [
                  "View all ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14 })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-6", children: featured.slice(0, 8).map((product, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product, index: i }, product.id)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:hidden mt-8 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/shop",
              "data-ocid": "featured_products.view_all_mobile_button",
              className: "inline-flex items-center gap-2 bg-primary text-primary-foreground font-body font-semibold px-8 py-3 rounded-full transition-smooth hover-lift",
              children: [
                "View All Products ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 15 })
              ]
            }
          ) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        "data-ocid": "story_teaser.section",
        className: "bg-background py-20 px-6 lg:px-12",
        "aria-labelledby": "story-heading",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-12 lg:gap-20 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/3] rounded-3xl overflow-hidden shadow-elevated", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: "https://images.unsplash.com/photo-1601628828688-632f38a5a7d0?w=1000&q=80",
                alt: "Artisan hands shaping clay in a warm ceramic workshop",
                className: "w-full h-full object-cover",
                loading: "lazy"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -bottom-5 -right-3 lg:-right-7 bg-card border border-border rounded-2xl px-6 py-4 shadow-elevated", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-3xl text-primary leading-none mb-1", children: "12+" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs text-muted-foreground uppercase tracking-wider", children: "Years of craft" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-body font-semibold tracking-[0.18em] uppercase text-primary mb-4", children: "Our philosophy" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "h2",
              {
                id: "story-heading",
                className: "font-display text-4xl lg:text-5xl text-foreground leading-[1.1] mb-6",
                children: [
                  "Handcrafted",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "not-italic text-primary", children: "with Love" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-base text-muted-foreground leading-relaxed mb-5", children: "Every piece in our collection begins with a maker's hands and a deep respect for traditional craft. We partner with independent artisans from around the world — potters, weavers, jewelers — who have honed their skills over decades." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-base text-muted-foreground leading-relaxed mb-8", children: "We believe in slow, intentional making. No mass production, no shortcuts — only goods that carry the warmth and character of the person who created them." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/story",
                "data-ocid": "story_teaser.explore_button",
                className: "inline-flex items-center gap-2 bg-primary text-primary-foreground font-body font-semibold px-8 py-3.5 rounded-full hover:bg-primary/90 transition-smooth hover-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                children: [
                  "Explore Our Story",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
                ]
              }
            )
          ] })
        ] }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        "data-ocid": "gallery.section",
        className: "bg-muted/30 py-20 px-6 lg:px-12",
        "aria-labelledby": "gallery-heading",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-body font-semibold tracking-[0.18em] uppercase text-primary mb-3", children: "@artisanandco" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h2",
              {
                id: "gallery-heading",
                className: "font-display text-3xl lg:text-4xl text-foreground",
                children: "From Our Workshop"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-3 lg:gap-4", children: galleryImages.map((img, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              "data-ocid": `gallery.item.${i + 1}`,
              className: "group relative aspect-square overflow-hidden rounded-2xl bg-muted cursor-pointer",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: img.src,
                    alt: img.alt,
                    className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",
                    loading: "lazy"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-smooth flex items-center justify-center rounded-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Heart,
                  {
                    size: 28,
                    fill: "currentColor",
                    className: "text-background opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300 drop-shadow-sm"
                  }
                ) })
              ]
            },
            img.src
          )) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        "data-ocid": "testimonials.section",
        className: "bg-accent/25 py-20 px-6 lg:px-12",
        "aria-labelledby": "testimonials-heading",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-body font-semibold tracking-[0.18em] uppercase text-primary mb-3", children: "Customer love" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h2",
              {
                id: "testimonials-heading",
                className: "font-display text-3xl lg:text-4xl text-foreground mb-3",
                children: "What Our Community Says"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-muted-foreground max-w-md mx-auto text-sm leading-relaxed", children: "Real stories from people who've brought a piece of handmade magic into their homes." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: topReviews.map((review, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "article",
            {
              "data-ocid": `testimonials.item.${i + 1}`,
              className: "bg-card border border-border rounded-2xl p-6 shadow-subtle hover-lift transition-smooth",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StarRating, { rating: review.rating, size: "sm" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-lg text-foreground leading-snug mb-2", children: [
                  '"',
                  review.title,
                  '"'
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-muted-foreground leading-relaxed mb-5 line-clamp-4", children: review.text }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 border-t border-border pt-4", children: [
                  review.image ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: review.image,
                      alt: review.customerName,
                      className: "w-10 h-10 rounded-full object-cover bg-muted flex-shrink-0",
                      loading: "lazy"
                    }
                  ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-display text-sm text-primary flex-shrink-0", children: review.customerName[0] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body font-semibold text-sm text-foreground truncate", children: review.customerName }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-body text-xs text-muted-foreground truncate", children: [
                      review.location,
                      " · ",
                      review.productName
                    ] })
                  ] })
                ] })
              ]
            },
            review.id
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/reviews",
              "data-ocid": "testimonials.read_all_link",
              className: "inline-flex items-center gap-2 border border-primary text-primary font-body font-semibold px-8 py-3.5 rounded-full hover:bg-primary hover:text-primary-foreground transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              children: [
                "Read All Reviews",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
              ]
            }
          ) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        "data-ocid": "newsletter.section",
        className: "bg-primary py-16 px-6 lg:px-12",
        "aria-labelledby": "newsletter-heading",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h2",
            {
              id: "newsletter-heading",
              className: "font-display text-3xl lg:text-4xl text-primary-foreground mb-4",
              children: "Join Our Maker Community"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-primary-foreground/80 mb-8 leading-relaxed", children: "Get early access to new collections, behind-the-scenes stories, and exclusive subscriber-only offers." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "form",
            {
              onSubmit: (e) => e.preventDefault(),
              className: "flex flex-col sm:flex-row gap-3 max-w-md mx-auto",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "email",
                    placeholder: "Your email address",
                    "data-ocid": "newsletter.input",
                    className: "flex-1 bg-primary-foreground/15 border border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/50 font-body text-sm px-5 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-foreground/50 min-w-0"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "submit",
                    "data-ocid": "newsletter.submit_button",
                    className: "bg-primary-foreground text-primary font-body font-semibold px-7 py-3 rounded-full hover:bg-primary-foreground/90 transition-smooth whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    children: "Subscribe"
                  }
                )
              ]
            }
          )
        ] })
      }
    )
  ] });
}
export {
  Home as default
};
