import { Link, useNavigate, useParams } from "@tanstack/react-router";
import {
  ChevronRight,
  LayoutGrid,
  List,
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { PageTransition } from "../components/shared/PageTransition";
import { ProductCard } from "../components/shared/ProductCard";
import { categories, getCategoryBySlug } from "../data/categories";
import { products } from "../data/products";
import type { Category } from "../data/types";

type SortOption = "featured" | "price-asc" | "price-desc" | "popular";
type ViewMode = "grid" | "list";

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "popular", label: "Most Popular" },
];

export default function Shop() {
  const params = useParams({ strict: false });
  const navigate = useNavigate();
  const categorySlug = (params as { categorySlug?: string }).categorySlug;
  const routeCategory = categorySlug ? getCategoryBySlug(categorySlug) : null;

  const [selectedCategory, setSelectedCategory] = useState<string>(
    routeCategory?.id ?? "all",
  );
  const [sort, setSort] = useState<SortOption>("featured");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [search, setSearch] = useState("");
  const [showMobileSort, setShowMobileSort] = useState(false);
  const [gridVisible, setGridVisible] = useState(true);
  const productsRef = useRef<HTMLDivElement>(null);

  const activeCategory: Category | undefined = categories.find(
    (c) => c.id === selectedCategory,
  );

  useEffect(() => {
    document.title = activeCategory
      ? `${activeCategory.name} — Artisan & Co.`
      : "Shop — Artisan & Co.";
  }, [activeCategory]);

  useEffect(() => {
    if (routeCategory) setSelectedCategory(routeCategory.id);
  }, [routeCategory]);

  const handleCategoryChange = (catId: string) => {
    // Animate out → update → animate in
    setGridVisible(false);
    setTimeout(() => {
      setSelectedCategory(catId);
      setSearch("");
      setGridVisible(true);
      // Smooth-scroll to products
      if (productsRef.current) {
        productsRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 160);

    // Sync URL
    if (catId === "all") {
      navigate({ to: "/shop" });
    } else {
      const cat = categories.find((c) => c.id === catId);
      if (cat) {
        navigate({
          to: "/shop/$categorySlug",
          params: { categorySlug: cat.slug },
        });
      }
    }
  };

  const filteredProducts = useMemo(() => {
    let list = [...products];

    if (selectedCategory !== "all") {
      list = list.filter((p) => p.categoryId === selectedCategory);
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.categoryName.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q),
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
          (a, b) => b.rating - a.rating || b.reviewCount - a.reviewCount,
        );
        break;
      default:
        list.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return list;
  }, [selectedCategory, sort, search]);

  return (
    <PageTransition>
      <div className="min-h-screen bg-background" data-ocid="shop.page">
        {/* ── Page Header ─────────────────────────────────────────── */}
        <section className="relative bg-card border-b border-border overflow-hidden">
          {/* Subtle texture overlay */}
          <div
            className="absolute inset-0 opacity-[0.045] pointer-events-none bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1554252116-30abfd459a41?w=1400&q=30")',
            }}
          />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-1.5 text-sm text-muted-foreground mb-5 font-body"
            >
              <Link
                to="/"
                className="hover:text-foreground transition-colors duration-200"
              >
                Home
              </Link>
              <ChevronRight size={13} className="opacity-40" />
              <Link
                to="/shop"
                className="hover:text-foreground transition-colors duration-200"
              >
                Shop
              </Link>
              {activeCategory && (
                <>
                  <ChevronRight size={13} className="opacity-40" />
                  <span className="text-foreground font-medium">
                    {activeCategory.name}
                  </span>
                </>
              )}
            </nav>

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-3">
                  {activeCategory ? activeCategory.name : "Our Shop"}
                </h1>
                <p className="font-body text-muted-foreground text-base md:text-lg max-w-lg leading-relaxed">
                  {activeCategory
                    ? activeCategory.description
                    : "Handcrafted with intention — each piece a small act of love."}
                </p>
              </div>
              {/* Search */}
              <div className="relative w-full md:w-72 shrink-0">
                <Search
                  size={14}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
                />
                <input
                  data-ocid="shop.search_input"
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search products…"
                  className="w-full pl-10 pr-9 py-2.5 text-sm font-body bg-background/80 border border-border rounded-full text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
                />
                {search && (
                  <button
                    type="button"
                    onClick={() => setSearch("")}
                    aria-label="Clear search"
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    <X size={13} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ── Categories Showcase ─────────────────────────────────── */}
        <section
          className="bg-muted/30 border-b border-border py-8 md:py-12"
          data-ocid="shop.categories.section"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-display text-lg md:text-xl text-foreground">
                Browse Collections
              </h2>
              {selectedCategory !== "all" && (
                <button
                  type="button"
                  data-ocid="shop.categories.clear_button"
                  onClick={() => handleCategoryChange("all")}
                  className="flex items-center gap-1.5 text-xs font-body text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  <X size={12} />
                  View all
                </button>
              )}
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 md:gap-4">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat.id;
                const count = products.filter(
                  (p) => p.categoryId === cat.id,
                ).length;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    data-ocid={`shop.category_card.${cat.slug}`}
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`group relative rounded-xl overflow-hidden aspect-[3/4] cursor-pointer transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                      isActive
                        ? "ring-2 ring-primary ring-offset-2 shadow-elevated scale-[1.02]"
                        : "hover:scale-[1.015] hover:shadow-elevated"
                    }`}
                  >
                    <img
                      src={cat.coverImage}
                      alt={cat.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    {/* Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
                    {/* Active tint */}
                    {isActive && (
                      <div className="absolute inset-0 bg-primary/25" />
                    )}
                    {/* Content */}
                    <div className="absolute inset-x-0 bottom-0 p-3 text-left">
                      <p className="font-display text-white text-xs sm:text-sm leading-tight drop-shadow-sm">
                        {cat.name}
                      </p>
                      <p className="font-body text-white/65 text-[11px] mt-0.5">
                        {count} items
                      </p>
                    </div>
                    {/* Active check badge */}
                    {isActive && (
                      <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-primary flex items-center justify-center shadow-sm">
                        <span className="text-primary-foreground text-[10px] font-bold leading-none">
                          ✓
                        </span>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Filter / Sort Bar ────────────────────────────────────── */}
        <div
          className="sticky top-0 z-30 bg-card/95 backdrop-blur-md border-b border-border shadow-subtle"
          data-ocid="shop.filter.bar"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
            <div className="flex items-center gap-2 md:gap-3">
              {/* Category pills — scrollable */}
              <div
                className="flex items-center gap-2 flex-1 min-w-0 overflow-x-auto scrollbar-none"
                aria-label="Filter by category"
              >
                <button
                  type="button"
                  data-ocid="shop.filter.all"
                  onClick={() => handleCategoryChange("all")}
                  className={`whitespace-nowrap shrink-0 px-3.5 py-1.5 rounded-full text-xs font-body font-medium transition-smooth ${
                    selectedCategory === "all"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/60"
                  }`}
                >
                  All ({products.length})
                </button>
                {categories.map((cat) => {
                  const count = products.filter(
                    (p) => p.categoryId === cat.id,
                  ).length;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      data-ocid={`shop.filter.${cat.slug}`}
                      onClick={() => handleCategoryChange(cat.id)}
                      className={`whitespace-nowrap shrink-0 px-3.5 py-1.5 rounded-full text-xs font-body font-medium transition-smooth ${
                        selectedCategory === cat.id
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/60"
                      }`}
                    >
                      {cat.name} ({count})
                    </button>
                  );
                })}
              </div>

              {/* Right side controls */}
              <div className="flex items-center gap-1.5 shrink-0">
                {/* Mobile sort toggle */}
                <button
                  type="button"
                  data-ocid="shop.mobile_sort_toggle"
                  onClick={() => setShowMobileSort(!showMobileSort)}
                  className="sm:hidden flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-muted text-muted-foreground text-xs font-body transition-smooth hover:bg-muted/60"
                >
                  <SlidersHorizontal size={13} />
                  Sort
                </button>

                {/* Desktop sort select */}
                <select
                  data-ocid="shop.sort.select"
                  value={sort}
                  onChange={(e) => setSort(e.target.value as SortOption)}
                  aria-label="Sort products"
                  className="hidden sm:block bg-muted border border-border text-foreground text-xs font-body rounded-lg px-3 py-1.5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
                >
                  {SORT_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>

                {/* View mode */}
                <div className="hidden md:flex items-center border border-border rounded-lg overflow-hidden">
                  <button
                    type="button"
                    data-ocid="shop.view.grid"
                    onClick={() => setViewMode("grid")}
                    aria-label="Grid view"
                    className={`p-1.5 transition-smooth ${
                      viewMode === "grid"
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <LayoutGrid size={14} />
                  </button>
                  <button
                    type="button"
                    data-ocid="shop.view.list"
                    onClick={() => setViewMode("list")}
                    aria-label="List view"
                    className={`p-1.5 border-l border-border transition-smooth ${
                      viewMode === "list"
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <List size={14} />
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile sort drawer */}
            {showMobileSort && (
              <div className="sm:hidden mt-2 pt-2 border-t border-border flex items-center gap-2 flex-wrap">
                {SORT_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => {
                      setSort(opt.value);
                      setShowMobileSort(false);
                    }}
                    className={`px-3 py-1 rounded-full text-xs font-body transition-smooth ${
                      sort === opt.value
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ── Results + Products ───────────────────────────────────── */}
        <section
          ref={productsRef}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12"
        >
          {/* Results meta row */}
          <div className="flex items-center justify-between mb-6 md:mb-8 flex-wrap gap-3">
            <div className="flex items-center gap-3 flex-wrap">
              <p
                className="font-body text-sm text-muted-foreground"
                data-ocid="shop.results.count"
              >
                Showing{" "}
                <span className="font-semibold text-foreground">
                  {filteredProducts.length}
                </span>{" "}
                {filteredProducts.length === 1 ? "product" : "products"}
                {search && (
                  <span>
                    {" "}
                    for{" "}
                    <span className="text-foreground font-medium">
                      "{search}"
                    </span>
                  </span>
                )}
              </p>

              {/* Active filter tag */}
              {selectedCategory !== "all" && activeCategory && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-body font-medium border border-primary/20">
                  {activeCategory.name}
                  <button
                    type="button"
                    onClick={() => handleCategoryChange("all")}
                    aria-label="Remove category filter"
                    className="hover:opacity-70 transition-opacity duration-200"
                  >
                    <X size={10} />
                  </button>
                </span>
              )}
            </div>

            {activeCategory && (
              <p className="hidden lg:block font-body text-xs text-muted-foreground max-w-xs text-right leading-relaxed italic">
                "{activeCategory.description.slice(0, 72)}…"
              </p>
            )}
          </div>

          {/* Empty state */}
          {filteredProducts.length === 0 ? (
            <div
              data-ocid="shop.empty_state"
              className="flex flex-col items-center justify-center py-28 text-center"
            >
              <div className="text-5xl mb-5">🌿</div>
              <h3 className="font-display text-2xl text-foreground mb-2">
                No products found
              </h3>
              <p className="font-body text-muted-foreground mb-7 max-w-sm leading-relaxed">
                {search
                  ? `We couldn't find products matching "${search}". Try a different search.`
                  : "No products in this category right now. Explore another collection."}
              </p>
              <button
                type="button"
                data-ocid="shop.empty_state.reset_button"
                onClick={() => {
                  setSearch("");
                  handleCategoryChange("all");
                }}
                className="px-6 py-2.5 bg-primary text-primary-foreground rounded-full font-body font-medium text-sm transition-smooth hover:opacity-90"
              >
                Browse All Products
              </button>
            </div>
          ) : viewMode === "grid" ? (
            /* Grid view */
            <div
              data-ocid="shop.products.grid"
              className={`grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 transition-opacity duration-200 ${
                gridVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              {filteredProducts.map((product, idx) => (
                <ProductCard key={product.id} product={product} index={idx} />
              ))}
            </div>
          ) : (
            /* List view */
            <div
              data-ocid="shop.products.list"
              className={`flex flex-col gap-3 transition-opacity duration-200 ${
                gridVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              {filteredProducts.map((product, idx) => (
                <article
                  key={product.id}
                  data-ocid={`shop.list.item.${idx + 1}`}
                  className="group flex gap-4 bg-card rounded-xl border border-border overflow-hidden hover-lift cursor-pointer"
                >
                  <Link
                    to="/product/$id"
                    params={{ id: product.id }}
                    className="flex gap-4 w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-xl"
                  >
                    <div className="relative w-28 sm:w-36 shrink-0 overflow-hidden">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      {product.badge && (
                        <span className="absolute top-2 left-2 text-[10px] font-body font-semibold px-2 py-0.5 rounded-full bg-primary text-primary-foreground">
                          {product.badge}
                        </span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0 py-4 pr-4 flex flex-col justify-between">
                      <div>
                        <p className="text-xs text-muted-foreground font-body uppercase tracking-wider mb-1">
                          {product.categoryName}
                        </p>
                        <h3 className="font-display text-base md:text-lg text-foreground leading-snug mb-1.5 line-clamp-1">
                          {product.name}
                        </h3>
                        <p className="font-body text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                          {product.description}
                        </p>
                      </div>
                      <div className="flex items-center justify-between mt-3 gap-2">
                        <div className="flex items-center gap-2">
                          <span className="font-body font-bold text-foreground text-lg">
                            ${product.price}
                          </span>
                          {product.originalPrice && (
                            <span className="font-body text-sm text-muted-foreground line-through">
                              ${product.originalPrice}
                            </span>
                          )}
                        </div>
                        <span className="flex items-center gap-1 text-primary text-xs font-body font-medium">
                          View details <ChevronRight size={12} />
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* ── Craft Promise Banner ─────────────────────────────────── */}
        <section className="bg-muted/40 border-t border-border py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="font-body text-[11px] uppercase tracking-widest text-muted-foreground mb-3">
              Our Commitment
            </p>
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-3">
              Every piece, made with purpose.
            </h2>
            <p className="font-body text-muted-foreground max-w-lg mx-auto leading-relaxed text-sm">
              We partner with independent artisans worldwide — ensuring fair
              wages, sustainable materials, and the preservation of traditional
              craft.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6 max-w-sm mx-auto">
              {[
                { icon: "🌿", label: "Sustainably Made" },
                { icon: "🤝", label: "Fair Trade Partners" },
                { icon: "♻️", label: "Eco Packaging" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center gap-2"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="font-body text-xs text-muted-foreground leading-tight text-center">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
