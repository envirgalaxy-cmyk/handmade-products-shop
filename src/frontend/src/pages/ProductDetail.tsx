import { cn } from "@/lib/utils";
import { Link, useNavigate, useParams } from "@tanstack/react-router";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Minus,
  Package,
  Plus,
  Shield,
  ShoppingBag,
  Truck,
} from "lucide-react";
import { useEffect, useState } from "react";
import { PageTransition } from "../components/shared/PageTransition";
import { ProductCard } from "../components/shared/ProductCard";
import { StarRating } from "../components/shared/StarRating";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { getProductById, getProductsByCategory } from "../data/products";
import { reviews } from "../data/reviews";

type TabKey = "description" | "materials" | "shipping";

const CARE_INSTRUCTIONS: Record<string, string[]> = {
  jewelry: [
    "Store in a cool, dry place away from sunlight",
    "Avoid contact with perfumes and harsh chemicals",
    "Wipe clean with a soft polishing cloth",
    "Remove before swimming or showering",
  ],
  candles: [
    "Trim wick to 1/4 inch before each burn",
    "Burn for 2–4 hours at a time",
    "Keep away from drafts and flammable materials",
    "Never leave a burning candle unattended",
  ],
  pottery: [
    "Dishwasher safe on the top rack",
    "Microwave safe unless metallic glaze is present",
    "Avoid sudden temperature changes",
    "Hand wash recommended to preserve glaze",
  ],
  textiles: [
    "Cold machine wash on gentle cycle",
    "Lay flat or hang to dry — avoid tumble drying",
    "Iron on low heat if needed",
    "Do not bleach",
  ],
  "home-decor": [
    "Dust with a soft dry cloth",
    "Avoid direct prolonged sunlight to preserve colour",
    "Handle with care — natural materials may vary",
    "Keep away from moisture",
  ],
};

const DEFAULT_CARE = [
  "Handle with care — this item is handmade",
  "Keep away from direct sunlight and moisture",
  "Clean gently with a soft, dry cloth",
  "Store safely when not in use",
];

const TABS: { key: TabKey; label: string }[] = [
  { key: "description", label: "Description" },
  { key: "materials", label: "Materials & Care" },
  { key: "shipping", label: "Shipping" },
];

export default function ProductDetail() {
  const { id } = useParams({ from: "/product/$id" });
  const navigate = useNavigate();
  const product = getProductById(id);

  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariants, setSelectedVariants] = useState<
    Record<string, string>
  >({});
  const [addedFeedback, setAddedFeedback] = useState(false);
  const [activeTab, setActiveTab] = useState<TabKey>("description");

  const wished = product ? isInWishlist(product.id) : false;
  const relatedProducts = product
    ? getProductsByCategory(product.categoryId)
        .filter((p) => p.id !== product.id)
        .slice(0, 4)
    : [];
  const productReviews = reviews.slice(0, 3);
  const careInstructions = product
    ? (CARE_INSTRUCTIONS[product.categoryId] ?? DEFAULT_CARE)
    : DEFAULT_CARE;

  useEffect(() => {
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
    return (
      <div
        data-ocid="product_not_found.section"
        className="min-h-[60vh] flex flex-col items-center justify-center gap-5 px-4 text-center"
      >
        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
          <Shield className="text-muted-foreground" size={28} />
        </div>
        <div>
          <h1 className="font-display text-2xl text-foreground mb-2">
            Product Not Found
          </h1>
          <p className="text-muted-foreground font-body text-sm">
            We couldn't find this product. It may have been removed or the link
            is incorrect.
          </p>
        </div>
        <Link
          to="/shop"
          data-ocid="product_not_found.back_button"
          className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-body font-semibold text-sm hover:opacity-90 transition-smooth"
        >
          Back to Shop
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariants);
    setAddedFeedback(true);
    setTimeout(() => setAddedFeedback(false), 2000);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity, selectedVariants);
    navigate({ to: "/checkout" });
  };

  const handleVariantSelect = (variantName: string, option: string) => {
    setSelectedVariants((prev) => ({ ...prev, [variantName]: option }));
  };

  const discountPct = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null;

  return (
    <PageTransition>
      {/* ── Breadcrumb ── */}
      <div className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-xs font-body text-muted-foreground flex-wrap"
          >
            <Link
              to="/"
              data-ocid="product_detail.breadcrumb_home"
              className="hover:text-foreground transition-colors"
            >
              Home
            </Link>
            <ChevronRight size={12} className="flex-shrink-0" />
            <Link
              to="/shop"
              data-ocid="product_detail.breadcrumb_shop"
              className="hover:text-foreground transition-colors"
            >
              Shop
            </Link>
            <ChevronRight size={12} className="flex-shrink-0" />
            <Link
              to="/shop/$categorySlug"
              params={{ categorySlug: product.categoryId }}
              data-ocid="product_detail.breadcrumb_category"
              className="hover:text-foreground transition-colors"
            >
              {product.categoryName}
            </Link>
            <ChevronRight size={12} className="flex-shrink-0" />
            <span className="text-foreground font-medium truncate max-w-[180px]">
              {product.name}
            </span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-14">
          {/* ── Image Gallery ── */}
          <div data-ocid="product_detail.gallery">
            {/* Main image */}
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted mb-3 group">
              {product.images.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt={`${product.name} — view ${i + 1}`}
                  className={cn(
                    "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
                    i === activeImage ? "opacity-100" : "opacity-0",
                  )}
                  loading={i === 0 ? "eager" : "lazy"}
                />
              ))}
              {/* zoom hint */}
              <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <span className="bg-foreground/70 text-background text-[10px] font-body px-2 py-1 rounded-full backdrop-blur-sm">
                  Handcrafted
                </span>
              </div>
              {/* Badge */}
              {product.badge && (
                <div className="absolute top-4 left-4 z-10">
                  <span
                    className={cn(
                      "text-xs font-body font-semibold px-3 py-1.5 rounded-full",
                      product.badge === "Sale"
                        ? "bg-destructive text-destructive-foreground"
                        : product.badge === "New"
                          ? "bg-secondary text-secondary-foreground"
                          : "bg-primary text-primary-foreground",
                    )}
                  >
                    {product.badge}
                  </span>
                </div>
              )}
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-2.5 overflow-x-auto scrollbar-none pb-1">
                {product.images.map((src, i) => (
                  <button
                    key={src}
                    type="button"
                    data-ocid={`product_detail.thumb.${i + 1}`}
                    onClick={() => setActiveImage(i)}
                    aria-label={`View image ${i + 1}`}
                    className={cn(
                      "flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-smooth",
                      i === activeImage
                        ? "border-primary shadow-sm"
                        : "border-border hover:border-muted-foreground",
                    )}
                  >
                    <img
                      src={src}
                      alt={`Thumbnail ${i + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ── Product Info Panel ── */}
          <div data-ocid="product_detail.info" className="flex flex-col gap-5">
            {/* Category pill */}
            <Link
              to="/shop/$categorySlug"
              params={{ categorySlug: product.categoryId }}
              className="inline-block w-fit text-xs font-body font-semibold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full hover:bg-primary/20 transition-smooth"
            >
              {product.categoryName}
            </Link>

            {/* Name */}
            <h1 className="font-display text-3xl md:text-4xl text-foreground leading-tight text-balance">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3">
              <StarRating rating={product.rating} size="md" showValue />
              <span className="text-sm text-muted-foreground font-body">
                {product.reviewCount} reviews
              </span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="font-display text-3xl text-primary font-semibold">
                ${product.price}
              </span>
              {product.originalPrice && (
                <>
                  <span className="font-body text-lg text-muted-foreground line-through">
                    ${product.originalPrice}
                  </span>
                  {discountPct && (
                    <span className="text-xs font-body font-bold bg-destructive text-destructive-foreground px-2 py-0.5 rounded-full">
                      {discountPct}% OFF
                    </span>
                  )}
                </>
              )}
            </div>

            {/* Short description */}
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            {/* Materials chips */}
            <div className="space-y-1.5">
              <p className="font-body text-xs uppercase tracking-widest font-semibold text-foreground/60">
                Materials Used
              </p>
              <div className="flex flex-wrap gap-1.5">
                {product.materials.map((m) => (
                  <span
                    key={m}
                    className="text-xs font-body bg-muted text-muted-foreground px-2.5 py-1 rounded-full border border-border"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>

            {/* Variants */}
            {product.variants && product.variants.length > 0 && (
              <div className="space-y-4" data-ocid="product_detail.variants">
                {product.variants.map((variant) => (
                  <div key={variant.name} className="space-y-2">
                    <p className="font-body text-xs uppercase tracking-widest font-semibold text-foreground/60">
                      {variant.name}
                      {selectedVariants[variant.name] && (
                        <span className="ml-2 font-normal normal-case tracking-normal text-muted-foreground">
                          — {selectedVariants[variant.name]}
                        </span>
                      )}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {variant.options.map((opt) => {
                        const selected = selectedVariants[variant.name] === opt;
                        return (
                          <button
                            key={opt}
                            type="button"
                            data-ocid={`product_detail.variant_${variant.name.toLowerCase()}_option`}
                            onClick={() =>
                              handleVariantSelect(variant.name, opt)
                            }
                            aria-pressed={selected}
                            className={cn(
                              "font-body text-sm px-3.5 py-1.5 rounded-full border transition-smooth",
                              selected
                                ? "border-primary bg-primary text-primary-foreground shadow-sm"
                                : "border-border bg-card text-foreground hover:border-primary/60 hover:bg-primary/5",
                            )}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Quantity */}
            <div className="flex items-center gap-4">
              <p className="font-body text-xs uppercase tracking-widest font-semibold text-foreground/60">
                Quantity
              </p>
              <div className="flex items-center border border-border rounded-full overflow-hidden bg-card">
                <button
                  type="button"
                  data-ocid="product_detail.qty_decrease"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                  className="w-10 h-10 flex items-center justify-center text-foreground hover:bg-muted transition-smooth"
                >
                  <Minus size={14} />
                </button>
                <span
                  data-ocid="product_detail.qty_value"
                  className="w-10 text-center font-body font-semibold text-sm text-foreground"
                >
                  {quantity}
                </span>
                <button
                  type="button"
                  data-ocid="product_detail.qty_increase"
                  onClick={() => setQuantity((q) => q + 1)}
                  aria-label="Increase quantity"
                  className="w-10 h-10 flex items-center justify-center text-foreground hover:bg-muted transition-smooth"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Action buttons */}
            <div className="space-y-3 pt-1">
              <div className="flex gap-3">
                <button
                  type="button"
                  data-ocid="product_detail.add_to_cart_button"
                  onClick={handleAddToCart}
                  className={cn(
                    "flex-1 h-12 rounded-full font-body font-semibold text-sm flex items-center justify-center gap-2 transition-smooth shadow-subtle",
                    addedFeedback
                      ? "bg-secondary text-secondary-foreground"
                      : "bg-foreground text-background hover:bg-primary",
                  )}
                >
                  {addedFeedback ? (
                    <>✓ Added to Cart</>
                  ) : (
                    <>
                      <ShoppingBag size={16} />
                      Add to Cart
                    </>
                  )}
                </button>
                <button
                  type="button"
                  data-ocid="product_detail.wishlist_button"
                  onClick={() => toggleWishlist(product)}
                  aria-label={
                    wished ? "Remove from wishlist" : "Add to wishlist"
                  }
                  className={cn(
                    "w-12 h-12 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-smooth",
                    wished
                      ? "bg-primary border-primary text-primary-foreground"
                      : "border-border bg-card text-muted-foreground hover:border-primary hover:text-primary",
                  )}
                >
                  <Heart size={18} className={wished ? "fill-current" : ""} />
                </button>
              </div>
              <button
                type="button"
                data-ocid="product_detail.buy_now_button"
                onClick={handleBuyNow}
                className="w-full h-12 rounded-full border-2 border-primary text-primary font-body font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-smooth"
              >
                Buy Now
              </button>
            </div>

            {/* Trust strip */}
            <div className="flex flex-wrap gap-4 pt-4 border-t border-border">
              {[
                { icon: <Truck size={13} />, text: "Free shipping over $50" },
                { icon: <Package size={13} />, text: "Handmade with care" },
                { icon: <Shield size={13} />, text: "Secure checkout" },
              ].map((badge) => (
                <div
                  key={badge.text}
                  className="flex items-center gap-1.5 text-xs font-body text-muted-foreground"
                >
                  <span className="text-primary">{badge.icon}</span>
                  {badge.text}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Product Details Tabs ── */}
        <section
          className="mt-14 rounded-2xl border border-border bg-card overflow-hidden"
          data-ocid="product_detail.tabs_section"
        >
          {/* Tab headers */}
          <div className="flex border-b border-border overflow-x-auto scrollbar-none">
            {TABS.map(({ key, label }) => (
              <button
                key={key}
                type="button"
                data-ocid={`product_detail.tab_${key}`}
                onClick={() => setActiveTab(key)}
                className={cn(
                  "flex-shrink-0 px-6 py-4 text-sm font-body font-semibold border-b-2 transition-smooth whitespace-nowrap",
                  activeTab === key
                    ? "border-primary text-primary bg-primary/5"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:border-border",
                )}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div
            className="p-6 md:p-8 max-w-2xl"
            data-ocid="product_detail.tab_content"
          >
            {activeTab === "description" && (
              <div className="space-y-5">
                <p className="font-body text-foreground leading-relaxed">
                  {product.description}
                </p>
                <p className="font-body text-muted-foreground leading-relaxed text-sm">
                  Each piece in our artisan collection is crafted one at a time.
                  Because of the handmade nature, slight variations in colour,
                  texture, and form are what make each piece uniquely yours.
                </p>
                <ul className="space-y-2 pt-1">
                  {[
                    "100% handmade by skilled artisans",
                    "Each piece is one-of-a-kind",
                    "Ethically sourced materials",
                    "Packaged in eco-friendly materials",
                  ].map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 font-body text-sm text-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === "materials" && (
              <div className="space-y-7">
                <div>
                  <h3 className="font-display text-lg text-foreground mb-3">
                    Materials
                  </h3>
                  <ul className="space-y-2">
                    {product.materials.map((m) => (
                      <li
                        key={m}
                        className="flex items-start gap-2 font-body text-sm text-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-display text-lg text-foreground mb-3">
                    Care Instructions
                  </h3>
                  <ul className="space-y-2">
                    {careInstructions.map((instruction) => (
                      <li
                        key={instruction}
                        className="flex items-start gap-2 font-body text-sm text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                        {instruction}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === "shipping" && (
              <div className="space-y-4">
                {[
                  {
                    icon: <Truck size={20} className="text-primary" />,
                    title: "Standard Shipping",
                    body: "3–5 business days · $5.99 flat rate. Free on orders $50+.",
                  },
                  {
                    icon: <Package size={20} className="text-secondary" />,
                    title: "Handcrafted Packaging",
                    body: "Every order is wrapped in tissue paper and shipped in a recycled kraft box. Gift-ready by default.",
                  },
                  {
                    icon: <Shield size={20} className="text-primary" />,
                    title: "Easy Returns",
                    body: "Not happy? Return within 14 days of delivery for a full refund. Handmade items in original condition only.",
                  },
                ].map(({ icon, title, body }) => (
                  <div
                    key={title}
                    className="flex gap-4 p-4 rounded-xl bg-muted/40 border border-border"
                  >
                    <div className="flex-shrink-0 mt-0.5">{icon}</div>
                    <div>
                      <p className="font-body font-semibold text-foreground text-sm mb-0.5">
                        {title}
                      </p>
                      <p className="font-body text-sm text-muted-foreground">
                        {body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ── Customer Reviews ── */}
        <section
          className="mt-14 pt-12 border-t border-border"
          data-ocid="product_detail.reviews_section"
        >
          <h2 className="font-display text-2xl text-foreground mb-8">
            Customer Reviews
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {productReviews.map((review, i) => (
              <article
                key={review.id}
                data-ocid={`product_detail.review.${i + 1}`}
                className="bg-card rounded-2xl p-5 border border-border"
              >
                <StarRating rating={review.rating} size="sm" className="mb-3" />
                <p className="font-body font-semibold text-sm text-foreground mb-1">
                  {review.title}
                </p>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-2">
                  {review.image ? (
                    <img
                      src={review.image}
                      alt={review.customerName}
                      className="w-7 h-7 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-7 h-7 rounded-full bg-muted flex items-center justify-center text-xs font-display text-primary">
                      {review.customerName[0]}
                    </div>
                  )}
                  <p className="text-xs font-body font-semibold text-foreground">
                    {review.customerName}
                  </p>
                  <span className="text-xs text-muted-foreground ml-auto">
                    {review.date}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── Related Products ── */}
        {relatedProducts.length > 0 && (
          <section
            className="mt-14 pt-12 border-t border-border"
            data-ocid="product_detail.related_section"
          >
            <div className="flex items-end justify-between mb-8">
              <div>
                <p className="font-body text-xs uppercase tracking-widest text-primary font-semibold mb-1">
                  Continue Exploring
                </p>
                <h2 className="font-display text-2xl sm:text-3xl text-foreground">
                  You May Also Like
                </h2>
              </div>
              <Link
                to="/shop/$categorySlug"
                params={{ categorySlug: product.categoryId }}
                data-ocid="product_detail.view_all_link"
                className="hidden sm:inline-flex items-center gap-1 font-body text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                View all
                <ChevronRight
                  size={14}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </Link>
            </div>

            {/* Mobile: horizontal scroll; Desktop: grid */}
            <div className="flex gap-4 overflow-x-auto scrollbar-none pb-2 sm:pb-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-5">
              {relatedProducts.map((p, i) => (
                <div key={p.id} className="flex-shrink-0 w-56 sm:w-auto">
                  <ProductCard product={p} index={i} />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Back nav */}
        <div className="mt-12 pt-8 border-t border-border">
          <Link
            to="/shop"
            data-ocid="product_detail.back_to_shop_link"
            className="inline-flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-foreground transition-smooth"
          >
            <ChevronLeft size={14} />
            Back to Shop
          </Link>
        </div>
      </div>
    </PageTransition>
  );
}
