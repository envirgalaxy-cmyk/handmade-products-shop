import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, H as Heart, L as Link } from "./index-amgHO34L.js";
import { P as PageTransition } from "./PageTransition-DjB1rXfo.js";
import { S as Sparkles, A as ArrowRight } from "./sparkles-BmSBtIdy.js";
import { M as MapPin } from "./map-pin-C9-5EbtW.js";
import { P as Package } from "./package-Frrj7G0S.js";
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
      d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",
      key: "nnexq3"
    }
  ],
  ["path", { d: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12", key: "mt58a7" }]
];
const Leaf = createLucideIcon("leaf", __iconNode);
const artisans = [
  {
    id: "a1",
    name: "Maria Vasquez",
    specialty: "Pottery & Ceramics",
    location: "Oaxaca, Mexico",
    bio: "Maria learned the art of wheel-throwing from her grandmother at age seven in the clay-rich highlands of Oaxaca. Her pieces are informed by pre-Columbian techniques and modern minimalist aesthetics — each one a meditation on form and function. She sources all her clay locally and fires exclusively in her wood-burning kiln.",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=600&q=80",
    yearsExperience: 18,
    productsCount: 34
  },
  {
    id: "a2",
    name: "Lena Hartmann",
    specialty: "Handcrafted Jewelry",
    location: "Copenhagen, Denmark",
    bio: "After a decade as a goldsmith in Copenhagen's jewelry district, Lena founded her own studio to pursue a simpler, more sustainable approach to metalwork. She uses only recycled gold and ethically sourced stones, and her signature hammer-textured finishes have become iconic in the slow jewelry movement.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80",
    yearsExperience: 12,
    productsCount: 28
  },
  {
    id: "a3",
    name: "Ravi Patel",
    specialty: "Woven Textiles",
    location: "Jaipur, India",
    bio: "Ravi is a fourth-generation weaver from a family of master craftspeople in Jaipur's textile district. He has modernized ancient Rajasthani weaving patterns to create textiles that honor tradition while speaking to contemporary design sensibilities. Each piece is woven by hand on a centuries-old loom.",
    image: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?w=600&q=80",
    yearsExperience: 22,
    productsCount: 19
  }
];
const milestones = [
  {
    year: "2018",
    title: "Started in a Small Studio",
    description: "Started in a small studio with a single loom, a dream, and two pairs of patient hands. Every piece was made with love, one stitch at a time.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=700&q=80"
  },
  {
    year: "2019",
    title: "First Artisan Fair",
    description: "First artisan fair — sold out in one day. The warmth and response from our community told us this was more than a business — it was a movement.",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=700&q=80"
  },
  {
    year: "2020",
    title: "Growing Our Family",
    description: "Expanded to 3 artisans, 50+ products. Each new maker brought fresh perspective and deepened our commitment to quality over quantity.",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=700&q=80"
  },
  {
    year: "2022",
    title: "Going Nationwide",
    description: "Launched online store, nationwide shipping. Handcrafted goods now reach homes across the country, carrying warmth from maker to doorstep.",
    image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=700&q=80"
  },
  {
    year: "2024",
    title: "A Thriving Community",
    description: "10+ artisans, 200+ products, thousands of happy customers who believe in the handmade difference. Our story is still being written.",
    image: "https://images.unsplash.com/photo-1517456793572-1d8efd6dc135?w=700&q=80"
  }
];
const pillars = [
  {
    Icon: Leaf,
    title: "Hand-Selected Materials",
    description: "We source only the finest natural materials — ethically obtained, sustainably harvested, and chosen for beauty that lasts a lifetime."
  },
  {
    Icon: Heart,
    title: "Lovingly Crafted",
    description: "Every item is made entirely by hand, never mass-produced. Each piece carries the intention and skill of the maker who created it."
  },
  {
    Icon: Sparkles,
    title: "Sustainably Made",
    description: "From eco-friendly dyes to compostable packaging, sustainability is woven into every step of our process."
  }
];
function useInView(threshold = 0.15) {
  const ref = reactExports.useRef(null);
  const [visible, setVisible] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, visible };
}
function TimelineItem({
  milestone,
  index
}) {
  const { ref, visible } = useInView(0.1);
  const isEven = index % 2 === 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref,
      "data-ocid": `story.timeline.item.${index + 1}`,
      className: `flex flex-col gap-8 md:gap-16 transition-all duration-700 ease-out ${isEven ? "md:flex-row" : "md:flex-row-reverse"} ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full md:w-1/2 overflow-hidden rounded-2xl shadow-elevated", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: milestone.image,
            alt: milestone.title,
            className: "w-full h-56 md:h-72 object-cover transition-smooth hover:scale-105"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `w-full md:w-1/2 flex flex-col justify-center gap-4 ${isEven ? "md:text-left" : "md:text-right"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex w-fit items-center text-xs font-semibold tracking-[0.2em] uppercase text-primary bg-primary/10 px-3 py-1.5 rounded-full", children: milestone.year }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl md:text-3xl text-foreground leading-snug", children: milestone.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: milestone.description })
            ]
          }
        )
      ]
    }
  );
}
function PillarCard({
  pillar,
  index
}) {
  const { ref, visible } = useInView(0.1);
  const { Icon } = pillar;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref,
      "data-ocid": `story.pillar.item.${index + 1}`,
      className: `flex flex-col items-center text-center gap-5 p-8 rounded-2xl bg-card border border-border hover-lift transition-all duration-500 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`,
      style: { transitionDelay: `${index * 120}ms` },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-7 h-7 text-primary", strokeWidth: 1.5 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl text-foreground", children: pillar.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed text-sm", children: pillar.description })
      ]
    }
  );
}
function ArtisanCard({
  artisan,
  index
}) {
  const { ref, visible } = useInView(0.1);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "article",
    {
      ref,
      "data-ocid": `story.artisan.item.${index + 1}`,
      className: `bg-card border border-border rounded-2xl overflow-hidden hover-lift transition-all duration-500 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`,
      style: { transitionDelay: `${index * 150}ms` },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden h-72", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: artisan.image,
              alt: artisan.name,
              className: "w-full h-full object-cover object-top transition-smooth hover:scale-105"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-4 left-4 right-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground font-display text-xl", children: artisan.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/80 text-sm", children: artisan.specialty })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 flex flex-col gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3.5 h-3.5 shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: artisan.location })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-3.5 h-3.5 shrink-0" }),
              artisan.productsCount,
              " products"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed line-clamp-4", children: artisan.bio }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-6 pt-3 border-t border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl text-foreground", children: artisan.yearsExperience }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Years crafting" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-px h-8 bg-border" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl text-foreground", children: artisan.productsCount }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Products" })
            ] })
          ] })
        ] })
      ]
    }
  );
}
function Story() {
  reactExports.useEffect(() => {
    document.title = "Our Story — Artisan & Co.";
  }, []);
  const { ref: missionRef, visible: missionVisible } = useInView(0.2);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageTransition, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        "data-ocid": "story.hero.section",
        className: "relative min-h-[75vh] flex items-center justify-center overflow-hidden",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80",
              alt: "Artisan hands crafting in a warm workshop",
              className: "absolute inset-0 w-full h-full object-cover"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-foreground/55 via-foreground/30 to-foreground/65" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 text-center px-6 max-w-3xl mx-auto flex flex-col items-center gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/70 text-xs tracking-[0.3em] uppercase font-semibold", children: "Artisan & Co." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-5xl md:text-7xl text-primary-foreground leading-tight text-balance", children: "Our Story" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg md:text-xl text-primary-foreground/85 font-light leading-relaxed text-balance max-w-xl", children: "Where craft meets heart, and tradition meets love" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-0.5 bg-primary-foreground/50 rounded-full mt-2" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary-foreground/60", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs tracking-widest uppercase", children: "Scroll" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-px h-8 bg-primary-foreground/40 animate-pulse" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        "data-ocid": "story.timeline.section",
        className: "py-24 px-6 bg-background",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary text-xs tracking-[0.25em] uppercase font-semibold mb-3", children: "How We Got Here" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl text-foreground mb-4", children: "Our Journey" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-xl mx-auto leading-relaxed", children: "From a single studio loom to a family of artisans — every milestone shaped who we are today." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-20", children: milestones.map((milestone, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            TimelineItem,
            {
              milestone,
              index: i
            },
            milestone.year
          )) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        "data-ocid": "story.craftsmanship.section",
        className: "py-24 px-6 bg-muted/30",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary text-xs tracking-[0.25em] uppercase font-semibold mb-3", children: "Our Philosophy" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl text-foreground mb-4", children: "The Art of Making" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-xl mx-auto leading-relaxed", children: "Three principles guide every piece we create — from the first sketch to the final stitch." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: pillars.map((pillar, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(PillarCard, { pillar, index: i }, pillar.title)) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        "data-ocid": "story.artisans.section",
        className: "py-24 px-6 bg-background",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary text-xs tracking-[0.25em] uppercase font-semibold mb-3", children: "The Makers" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl text-foreground mb-4", children: "Meet Our Artisans" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-xl mx-auto leading-relaxed", children: "Behind every piece is a skilled maker with a story. These are the hands behind Artisan & Co." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: artisans.map((artisan, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ArtisanCard, { artisan, index: i }, artisan.id)) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        "data-ocid": "story.mission.section",
        className: "relative py-32 px-6 overflow-hidden bg-primary",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 opacity-[0.07] bg-cover bg-center",
              style: {
                backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=30')"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              ref: missionRef,
              className: `relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center gap-10 transition-all duration-1000 ease-out ${missionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-0.5 bg-primary-foreground/50 rounded-full" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("blockquote", { className: "font-display text-3xl md:text-5xl text-primary-foreground leading-tight text-balance", children: '"We believe every home deserves a piece of something handmade."' }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/80 text-lg leading-relaxed max-w-xl", children: "Each object we create carries warmth, intention, and the irreplaceable mark of a human hand. That's what sets handmade apart — and why it matters." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Link,
                  {
                    to: "/shop",
                    "data-ocid": "story.mission.shop_link",
                    className: "inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded-full font-semibold text-sm tracking-wide hover:bg-primary-foreground/90 transition-smooth hover-lift",
                    children: [
                      "Shop Our Collection ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
                    ]
                  }
                )
              ]
            }
          )
        ]
      }
    )
  ] });
}
export {
  Story as default
};
