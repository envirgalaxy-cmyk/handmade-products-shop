import { c as createLucideIcon, u as useParams, a as useNavigate, r as reactExports, j as jsxRuntimeExports, L as Link, X } from "./index-amgHO34L.js";
import { P as PageTransition } from "./PageTransition-DjB1rXfo.js";
import { p as products, P as ProductCard } from "./products-B36yN8VY.js";
import { g as getCategoryBySlug, c as categories } from "./categories-zF_qE_Y3.js";
import { C as ChevronRight } from "./chevron-right-KujboAJ1.js";
import "./StarRating-DI9p6wry.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" }],
  ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" }],
  ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" }],
  ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" }]
];
const LayoutGrid = createLucideIcon("layout-grid", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 18h.01", key: "1tta3j" }],
  ["path", { d: "M3 6h.01", key: "1rqtza" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 18h13", key: "1lx6n3" }],
  ["path", { d: "M8 6h13", key: "ik3vkj" }]
];
const List = createLucideIcon("list", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
];
const Search = createLucideIcon("search", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["line", { x1: "21", x2: "14", y1: "4", y2: "4", key: "obuewd" }],
  ["line", { x1: "10", x2: "3", y1: "4", y2: "4", key: "1q6298" }],
  ["line", { x1: "21", x2: "12", y1: "12", y2: "12", key: "1iu8h1" }],
  ["line", { x1: "8", x2: "3", y1: "12", y2: "12", key: "ntss68" }],
  ["line", { x1: "21", x2: "16", y1: "20", y2: "20", key: "14d8ph" }],
  ["line", { x1: "12", x2: "3", y1: "20", y2: "20", key: "m0wm8r" }],
  ["line", { x1: "14", x2: "14", y1: "2", y2: "6", key: "14e1ph" }],
  ["line", { x1: "8", x2: "8", y1: "10", y2: "14", key: "1i6ji0" }],
  ["line", { x1: "16", x2: "16", y1: "18", y2: "22", key: "1lctlv" }]
];
const SlidersHorizontal = createLucideIcon("sliders-horizontal", __iconNode);
const SORT_OPTIONS = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "popular", label: "Most Popular" }
];
function Shop() {
  const params = useParams({ strict: false });
  const navigate = useNavigate();
  const categorySlug = params.categorySlug;
  const routeCategory = categorySlug ? getCategoryBySlug(categorySlug) : null;
  const [selectedCategory, setSelectedCategory] = reactExports.useState(
    (routeCategory == null ? void 0 : routeCategory.id) ?? "all"
  );
  const [sort, setSort] = reactExports.useState("featured");
  const [viewMode, setViewMode] = reactExports.useState("grid");
  const [search, setSearch] = reactExports.useState("");
  const [showMobileSort, setShowMobileSort] = reactExports.useState(false);
  const [gridVisible, setGridVisible] = reactExports.useState(true);
  const productsRef = reactExports.useRef(null);
  const activeCategory = categories.find(
    (c) => c.id === selectedCategory
  );
  reactExports.useEffect(() => {
    document.title = activeCategory ? `${activeCategory.name} — Artisan & Co.` : "Shop — Artisan & Co.";
  }, [activeCategory]);
  reactExports.useEffect(() => {
    if (routeCategory) setSelectedCategory(routeCategory.id);
  }, [routeCategory]);
  const handleCategoryChange = (catId) => {
    setGridVisible(false);
    setTimeout(() => {
      setSelectedCategory(catId);
      setSearch("");
      setGridVisible(true);
      if (productsRef.current) {
        productsRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    }, 160);
    if (catId === "all") {
      navigate({ to: "/shop" });
    } else {
      const cat = categories.find((c) => c.id === catId);
      if (cat) {
        navigate({
          to: "/shop/$categorySlug",
          params: { categorySlug: cat.slug }
        });
      }
    }
  };
  const filteredProducts = reactExports.useMemo(() => {
    let list = [...products];
    if (selectedCategory !== "all") {
      list = list.filter((p) => p.categoryId === selectedCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) => p.name.toLowerCase().includes(q) || p.categoryName.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)
      );
    }
    switch (sort) {
      case "price-asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list.sort((a, b) => b.price - a.price);
        break;
      case "popular":
        list.sort(
          (a, b) => b.rating - a.rating || b.reviewCount - a.reviewCount
        );
        break;
      default:
        list.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }
    return list;
  }, [selectedCategory, sort, search]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PageTransition, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", "data-ocid": "shop.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative bg-card border-b border-border overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-0 opacity-[0.045] pointer-events-none bg-cover bg-center",
          style: {
            backgroundImage: 'url("https://images.unsplash.com/photo-1554252116-30abfd459a41?w=1400&q=30")'
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "nav",
          {
            "aria-label": "Breadcrumb",
            className: "flex items-center gap-1.5 text-sm text-muted-foreground mb-5 font-body",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "/",
                  className: "hover:text-foreground transition-colors duration-200",
                  children: "Home"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 13, className: "opacity-40" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "/shop",
                  className: "hover:text-foreground transition-colors duration-200",
                  children: "Shop"
                }
              ),
              activeCategory && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 13, className: "opacity-40" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: activeCategory.name })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-end md:justify-between gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-3", children: activeCategory ? activeCategory.name : "Our Shop" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-muted-foreground text-base md:text-lg max-w-lg leading-relaxed", children: activeCategory ? activeCategory.description : "Handcrafted with intention — each piece a small act of love." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full md:w-72 shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Search,
              {
                size: 14,
                className: "absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                "data-ocid": "shop.search_input",
                type: "text",
                value: search,
                onChange: (e) => setSearch(e.target.value),
                placeholder: "Search products…",
                className: "w-full pl-10 pr-9 py-2.5 text-sm font-body bg-background/80 border border-border rounded-full text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
              }
            ),
            search && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setSearch(""),
                "aria-label": "Clear search",
                className: "absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors duration-200",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 13 })
              }
            )
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-muted/30 border-b border-border py-8 md:py-12",
        "data-ocid": "shop.categories.section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-lg md:text-xl text-foreground", children: "Browse Collections" }),
            selectedCategory !== "all" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                "data-ocid": "shop.categories.clear_button",
                onClick: () => handleCategoryChange("all"),
                className: "flex items-center gap-1.5 text-xs font-body text-muted-foreground hover:text-primary transition-colors duration-200",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 12 }),
                  "View all"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 sm:grid-cols-5 gap-3 md:gap-4", children: categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            const count = products.filter(
              (p) => p.categoryId === cat.id
            ).length;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                "data-ocid": `shop.category_card.${cat.slug}`,
                onClick: () => handleCategoryChange(cat.id),
                className: `group relative rounded-xl overflow-hidden aspect-[3/4] cursor-pointer transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${isActive ? "ring-2 ring-primary ring-offset-2 shadow-elevated scale-[1.02]" : "hover:scale-[1.015] hover:shadow-elevated"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: cat.coverImage,
                      alt: cat.name,
                      className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",
                      loading: "lazy"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" }),
                  isActive && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-primary/25" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-x-0 bottom-0 p-3 text-left", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-white text-xs sm:text-sm leading-tight drop-shadow-sm", children: cat.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-body text-white/65 text-[11px] mt-0.5", children: [
                      count,
                      " items"
                    ] })
                  ] }),
                  isActive && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-2 right-2 w-5 h-5 rounded-full bg-primary flex items-center justify-center shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary-foreground text-[10px] font-bold leading-none", children: "✓" }) })
                ]
              },
              cat.id
            );
          }) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "sticky top-0 z-30 bg-card/95 backdrop-blur-md border-b border-border shadow-subtle",
        "data-ocid": "shop.filter.bar",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 md:gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-center gap-2 flex-1 min-w-0 overflow-x-auto scrollbar-none",
                "aria-label": "Filter by category",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      "data-ocid": "shop.filter.all",
                      onClick: () => handleCategoryChange("all"),
                      className: `whitespace-nowrap shrink-0 px-3.5 py-1.5 rounded-full text-xs font-body font-medium transition-smooth ${selectedCategory === "all" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/60"}`,
                      children: [
                        "All (",
                        products.length,
                        ")"
                      ]
                    }
                  ),
                  categories.map((cat) => {
                    const count = products.filter(
                      (p) => p.categoryId === cat.id
                    ).length;
                    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        type: "button",
                        "data-ocid": `shop.filter.${cat.slug}`,
                        onClick: () => handleCategoryChange(cat.id),
                        className: `whitespace-nowrap shrink-0 px-3.5 py-1.5 rounded-full text-xs font-body font-medium transition-smooth ${selectedCategory === cat.id ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/60"}`,
                        children: [
                          cat.name,
                          " (",
                          count,
                          ")"
                        ]
                      },
                      cat.id
                    );
                  })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 shrink-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  "data-ocid": "shop.mobile_sort_toggle",
                  onClick: () => setShowMobileSort(!showMobileSort),
                  className: "sm:hidden flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-muted text-muted-foreground text-xs font-body transition-smooth hover:bg-muted/60",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SlidersHorizontal, { size: 13 }),
                    "Sort"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "select",
                {
                  "data-ocid": "shop.sort.select",
                  value: sort,
                  onChange: (e) => setSort(e.target.value),
                  "aria-label": "Sort products",
                  className: "hidden sm:block bg-muted border border-border text-foreground text-xs font-body rounded-lg px-3 py-1.5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-ring transition-smooth",
                  children: SORT_OPTIONS.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: opt.value, children: opt.label }, opt.value))
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:flex items-center border border-border rounded-lg overflow-hidden", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    "data-ocid": "shop.view.grid",
                    onClick: () => setViewMode("grid"),
                    "aria-label": "Grid view",
                    className: `p-1.5 transition-smooth ${viewMode === "grid" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutGrid, { size: 14 })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    "data-ocid": "shop.view.list",
                    onClick: () => setViewMode("list"),
                    "aria-label": "List view",
                    className: `p-1.5 border-l border-border transition-smooth ${viewMode === "list" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(List, { size: 14 })
                  }
                )
              ] })
            ] })
          ] }),
          showMobileSort && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:hidden mt-2 pt-2 border-t border-border flex items-center gap-2 flex-wrap", children: SORT_OPTIONS.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => {
                setSort(opt.value);
                setShowMobileSort(false);
              },
              className: `px-3 py-1 rounded-full text-xs font-body transition-smooth ${sort === opt.value ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`,
              children: opt.label
            },
            opt.value
          )) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        ref: productsRef,
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-6 md:mb-8 flex-wrap gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 flex-wrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "p",
                {
                  className: "font-body text-sm text-muted-foreground",
                  "data-ocid": "shop.results.count",
                  children: [
                    "Showing",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: filteredProducts.length }),
                    " ",
                    filteredProducts.length === 1 ? "product" : "products",
                    search && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      " ",
                      "for",
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-foreground font-medium", children: [
                        '"',
                        search,
                        '"'
                      ] })
                    ] })
                  ]
                }
              ),
              selectedCategory !== "all" && activeCategory && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-body font-medium border border-primary/20", children: [
                activeCategory.name,
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => handleCategoryChange("all"),
                    "aria-label": "Remove category filter",
                    className: "hover:opacity-70 transition-opacity duration-200",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 10 })
                  }
                )
              ] })
            ] }),
            activeCategory && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "hidden lg:block font-body text-xs text-muted-foreground max-w-xs text-right leading-relaxed italic", children: [
              '"',
              activeCategory.description.slice(0, 72),
              '…"'
            ] })
          ] }),
          filteredProducts.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              "data-ocid": "shop.empty_state",
              className: "flex flex-col items-center justify-center py-28 text-center",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl mb-5", children: "🌿" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl text-foreground mb-2", children: "No products found" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-muted-foreground mb-7 max-w-sm leading-relaxed", children: search ? `We couldn't find products matching "${search}". Try a different search.` : "No products in this category right now. Explore another collection." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    "data-ocid": "shop.empty_state.reset_button",
                    onClick: () => {
                      setSearch("");
                      handleCategoryChange("all");
                    },
                    className: "px-6 py-2.5 bg-primary text-primary-foreground rounded-full font-body font-medium text-sm transition-smooth hover:opacity-90",
                    children: "Browse All Products"
                  }
                )
              ]
            }
          ) : viewMode === "grid" ? (
            /* Grid view */
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                "data-ocid": "shop.products.grid",
                className: `grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 transition-opacity duration-200 ${gridVisible ? "opacity-100" : "opacity-0"}`,
                children: filteredProducts.map((product, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product, index: idx }, product.id))
              }
            )
          ) : (
            /* List view */
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                "data-ocid": "shop.products.list",
                className: `flex flex-col gap-3 transition-opacity duration-200 ${gridVisible ? "opacity-100" : "opacity-0"}`,
                children: filteredProducts.map((product, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "article",
                  {
                    "data-ocid": `shop.list.item.${idx + 1}`,
                    className: "group flex gap-4 bg-card rounded-xl border border-border overflow-hidden hover-lift cursor-pointer",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Link,
                      {
                        to: "/product/$id",
                        params: { id: product.id },
                        className: "flex gap-4 w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-xl",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-28 sm:w-36 shrink-0 overflow-hidden", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "img",
                              {
                                src: product.images[0],
                                alt: product.name,
                                className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",
                                loading: "lazy"
                              }
                            ),
                            product.badge && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-2 left-2 text-[10px] font-body font-semibold px-2 py-0.5 rounded-full bg-primary text-primary-foreground", children: product.badge })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0 py-4 pr-4 flex flex-col justify-between", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-body uppercase tracking-wider mb-1", children: product.categoryName }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-base md:text-lg text-foreground leading-snug mb-1.5 line-clamp-1", children: product.name }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-muted-foreground line-clamp-2 leading-relaxed", children: product.description })
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-3 gap-2", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-body font-bold text-foreground text-lg", children: [
                                  "$",
                                  product.price
                                ] }),
                                product.originalPrice && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-body text-sm text-muted-foreground line-through", children: [
                                  "$",
                                  product.originalPrice
                                ] })
                              ] }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-primary text-xs font-body font-medium", children: [
                                "View details ",
                                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 12 })
                              ] })
                            ] })
                          ] })
                        ]
                      }
                    )
                  },
                  product.id
                ))
              }
            )
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted/40 border-t border-border py-12 md:py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-[11px] uppercase tracking-widest text-muted-foreground mb-3", children: "Our Commitment" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl md:text-3xl text-foreground mb-3", children: "Every piece, made with purpose." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-muted-foreground max-w-lg mx-auto leading-relaxed text-sm", children: "We partner with independent artisans worldwide — ensuring fair wages, sustainable materials, and the preservation of traditional craft." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid grid-cols-3 gap-6 max-w-sm mx-auto", children: [
        { icon: "🌿", label: "Sustainably Made" },
        { icon: "🤝", label: "Fair Trade Partners" },
        { icon: "♻️", label: "Eco Packaging" }
      ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex flex-col items-center gap-2",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: item.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-xs text-muted-foreground leading-tight text-center", children: item.label })
          ]
        },
        item.label
      )) })
    ] }) })
  ] }) });
}
export {
  Shop as default
};
