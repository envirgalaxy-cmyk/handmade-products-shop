import { Link } from "@tanstack/react-router";
import { ArrowRight, Award, Heart, Sparkles } from "lucide-react";
import { useEffect } from "react";
import { PageTransition } from "../components/shared/PageTransition";
import { ProductCard } from "../components/shared/ProductCard";
import { StarRating } from "../components/shared/StarRating";
import { categories } from "../data/categories";
import { getFeaturedProducts } from "../data/products";
import { reviews } from "../data/reviews";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&q=80",
    alt: "Terracotta pottery on wheel",
  },
  {
    src: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80",
    alt: "Handcrafted gold jewelry",
  },
  {
    src: "https://images.unsplash.com/photo-1602178506945-ca27f7ef1d0f?w=600&q=80",
    alt: "Botanical soy candles",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    alt: "Handwoven linen textiles",
  },
  {
    src: "https://images.unsplash.com/photo-1566895291281-ea63efd4a5c9?w=600&q=80",
    alt: "Macramé plant hanger",
  },
  {
    src: "https://images.unsplash.com/photo-1612196808214-b7e239e5e7c8?w=600&q=80",
    alt: "Speckled stoneware vase",
  },
  {
    src: "https://images.unsplash.com/photo-1516967124798-10656f7dca28?w=600&q=80",
    alt: "Artisan at wooden workbench",
  },
  {
    src: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80",
    alt: "Sterling silver ring close-up",
  },
  {
    src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80",
    alt: "Dried pampas grass wall hanging",
  },
];

const perks = [
  {
    icon: <Sparkles size={18} />,
    title: "100% Handmade",
    text: "Every piece crafted by artisan hands",
  },
  {
    icon: <Award size={18} />,
    title: "Ethically Sourced",
    text: "Sustainable materials, fair wages",
  },
  {
    icon: <Heart size={18} />,
    title: "Made with Love",
    text: "Free shipping on orders over $75",
  },
];

export default function Home() {
  useEffect(() => {
    document.title = "Artisan & Co. — Handmade with Love";
  }, []);

  const featured = getFeaturedProducts();
  const topReviews = reviews.slice(0, 3);

  return (
    <PageTransition>
      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section
        data-ocid="hero.section"
        className="relative min-h-[92vh] flex items-center overflow-hidden"
        aria-label="Hero"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1800&q=85"
            alt="Artisan shaping pottery in a warm workshop"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/45 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/25 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-28">
          <div className="max-w-xl animate-fade-in">
            <span className="inline-block text-xs font-body font-semibold tracking-[0.2em] uppercase text-primary-foreground/90 bg-primary/85 rounded-full px-4 py-1.5 mb-7 backdrop-blur-sm">
              Handcrafted with care
            </span>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.07] text-background mb-7 text-balance">
              Crafted with Heart,{" "}
              <em className="not-italic text-accent/90">Made for Your Home</em>
            </h1>
            <p className="font-body text-lg text-background/80 mb-10 leading-relaxed max-w-md">
              Discover unique handmade pieces crafted by skilled artisans who
              pour their soul into every stitch, pour, and form.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/shop"
                data-ocid="hero.shop_now_button"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body font-semibold px-8 py-3.5 rounded-full hover:bg-primary/90 transition-smooth hover-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Shop Now
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/story"
                data-ocid="hero.our_story_button"
                className="inline-flex items-center gap-2 bg-background/15 backdrop-blur-sm border border-background/50 text-background font-body font-semibold px-8 py-3.5 rounded-full hover:bg-background/25 transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-50">
          <span className="text-background text-[10px] font-body tracking-[0.2em] uppercase">
            Scroll
          </span>
          <div className="w-px h-10 bg-background/60 animate-pulse" />
        </div>
      </section>

      {/* ─── PERKS BAR ────────────────────────────────────────────── */}
      <section className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 divide-y sm:divide-y-0 sm:divide-x divide-border">
            {perks.map((perk) => (
              <div
                key={perk.title}
                className="flex items-center gap-3 py-3 sm:py-0 sm:px-6 first:sm:pl-0 last:sm:pr-0"
              >
                <div className="text-primary flex-shrink-0">{perk.icon}</div>
                <div>
                  <p className="font-body font-semibold text-sm text-foreground">
                    {perk.title}
                  </p>
                  <p className="font-body text-xs text-muted-foreground">
                    {perk.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED CATEGORIES ─────────────────────────────────── */}
      <section
        data-ocid="categories.section"
        className="bg-background py-20 px-6 lg:px-12"
        aria-labelledby="categories-heading"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs font-body font-semibold tracking-[0.18em] uppercase text-primary mb-2">
                Browse by category
              </p>
              <h2
                id="categories-heading"
                className="font-display text-3xl lg:text-4xl text-foreground"
              >
                Shop Our Collections
              </h2>
            </div>
            <Link
              to="/shop"
              data-ocid="categories.view_all_link"
              className="hidden sm:inline-flex items-center gap-1.5 font-body text-sm font-semibold text-primary hover:text-primary/80 transition-smooth"
            >
              View all <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((cat, i) => (
              <Link
                key={cat.id}
                to="/shop/$categorySlug"
                params={{ categorySlug: cat.slug }}
                data-ocid={`categories.item.${i + 1}`}
                className="group block relative rounded-2xl overflow-hidden aspect-[3/4] hover-lift transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <img
                  src={cat.coverImage}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/65 via-foreground/10 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-4">
                  <h3 className="font-display text-sm text-primary-foreground leading-snug">
                    {cat.name}
                  </h3>
                  <p className="text-xs font-body text-primary-foreground/70 mt-0.5">
                    {cat.productCount} products
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED PRODUCTS ───────────────────────────────────── */}
      <section
        data-ocid="featured_products.section"
        className="bg-muted/30 py-20 px-6 lg:px-12"
        aria-labelledby="featured-heading"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs font-body font-semibold tracking-[0.18em] uppercase text-primary mb-2">
                Handpicked for you
              </p>
              <h2
                id="featured-heading"
                className="font-display text-3xl lg:text-4xl text-foreground"
              >
                Featured Collections
              </h2>
            </div>
            <Link
              to="/shop"
              data-ocid="featured_products.view_all_link"
              className="hidden sm:inline-flex items-center gap-1.5 font-body text-sm font-semibold text-primary hover:text-primary/80 transition-smooth"
            >
              View all <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-6">
            {featured.slice(0, 8).map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>

          <div className="sm:hidden mt-8 text-center">
            <Link
              to="/shop"
              data-ocid="featured_products.view_all_mobile_button"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body font-semibold px-8 py-3 rounded-full transition-smooth hover-lift"
            >
              View All Products <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── BRAND STORY TEASER ──────────────────────────────────── */}
      <section
        data-ocid="story_teaser.section"
        className="bg-background py-20 px-6 lg:px-12"
        aria-labelledby="story-heading"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image — left */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-elevated">
                <img
                  src="https://images.unsplash.com/photo-1601628828688-632f38a5a7d0?w=1000&q=80"
                  alt="Artisan hands shaping clay in a warm ceramic workshop"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Floating stat badge */}
              <div className="absolute -bottom-5 -right-3 lg:-right-7 bg-card border border-border rounded-2xl px-6 py-4 shadow-elevated">
                <p className="font-display text-3xl text-primary leading-none mb-1">
                  12+
                </p>
                <p className="font-body text-xs text-muted-foreground uppercase tracking-wider">
                  Years of craft
                </p>
              </div>
            </div>

            {/* Text — right */}
            <div>
              <p className="text-xs font-body font-semibold tracking-[0.18em] uppercase text-primary mb-4">
                Our philosophy
              </p>
              <h2
                id="story-heading"
                className="font-display text-4xl lg:text-5xl text-foreground leading-[1.1] mb-6"
              >
                Handcrafted{" "}
                <em className="not-italic text-primary">with Love</em>
              </h2>
              <p className="font-body text-base text-muted-foreground leading-relaxed mb-5">
                Every piece in our collection begins with a maker's hands and a
                deep respect for traditional craft. We partner with independent
                artisans from around the world — potters, weavers, jewelers —
                who have honed their skills over decades.
              </p>
              <p className="font-body text-base text-muted-foreground leading-relaxed mb-8">
                We believe in slow, intentional making. No mass production, no
                shortcuts — only goods that carry the warmth and character of
                the person who created them.
              </p>
              <Link
                to="/story"
                data-ocid="story_teaser.explore_button"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body font-semibold px-8 py-3.5 rounded-full hover:bg-primary/90 transition-smooth hover-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Explore Our Story
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WORKSHOP GALLERY ────────────────────────────────────── */}
      <section
        data-ocid="gallery.section"
        className="bg-muted/30 py-20 px-6 lg:px-12"
        aria-labelledby="gallery-heading"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-body font-semibold tracking-[0.18em] uppercase text-primary mb-3">
              @artisanandco
            </p>
            <h2
              id="gallery-heading"
              className="font-display text-3xl lg:text-4xl text-foreground"
            >
              From Our Workshop
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 lg:gap-4">
            {galleryImages.map((img, i) => (
              <div
                key={img.src}
                data-ocid={`gallery.item.${i + 1}`}
                className="group relative aspect-square overflow-hidden rounded-2xl bg-muted cursor-pointer"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-smooth flex items-center justify-center rounded-2xl">
                  <Heart
                    size={28}
                    fill="currentColor"
                    className="text-background opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300 drop-shadow-sm"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS PREVIEW ────────────────────────────────── */}
      <section
        data-ocid="testimonials.section"
        className="bg-accent/25 py-20 px-6 lg:px-12"
        aria-labelledby="testimonials-heading"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-body font-semibold tracking-[0.18em] uppercase text-primary mb-3">
              Customer love
            </p>
            <h2
              id="testimonials-heading"
              className="font-display text-3xl lg:text-4xl text-foreground mb-3"
            >
              What Our Community Says
            </h2>
            <p className="font-body text-muted-foreground max-w-md mx-auto text-sm leading-relaxed">
              Real stories from people who've brought a piece of handmade magic
              into their homes.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topReviews.map((review, i) => (
              <article
                key={review.id}
                data-ocid={`testimonials.item.${i + 1}`}
                className="bg-card border border-border rounded-2xl p-6 shadow-subtle hover-lift transition-smooth"
              >
                <div className="mb-4">
                  <StarRating rating={review.rating} size="sm" />
                </div>
                <p className="font-display text-lg text-foreground leading-snug mb-2">
                  "{review.title}"
                </p>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5 line-clamp-4">
                  {review.text}
                </p>
                <div className="flex items-center gap-3 border-t border-border pt-4">
                  {review.image ? (
                    <img
                      src={review.image}
                      alt={review.customerName}
                      className="w-10 h-10 rounded-full object-cover bg-muted flex-shrink-0"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-display text-sm text-primary flex-shrink-0">
                      {review.customerName[0]}
                    </div>
                  )}
                  <div className="min-w-0">
                    <p className="font-body font-semibold text-sm text-foreground truncate">
                      {review.customerName}
                    </p>
                    <p className="font-body text-xs text-muted-foreground truncate">
                      {review.location} · {review.productName}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/reviews"
              data-ocid="testimonials.read_all_link"
              className="inline-flex items-center gap-2 border border-primary text-primary font-body font-semibold px-8 py-3.5 rounded-full hover:bg-primary hover:text-primary-foreground transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Read All Reviews
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── NEWSLETTER STRIP ────────────────────────────────────── */}
      <section
        data-ocid="newsletter.section"
        className="bg-primary py-16 px-6 lg:px-12"
        aria-labelledby="newsletter-heading"
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2
            id="newsletter-heading"
            className="font-display text-3xl lg:text-4xl text-primary-foreground mb-4"
          >
            Join Our Maker Community
          </h2>
          <p className="font-body text-primary-foreground/80 mb-8 leading-relaxed">
            Get early access to new collections, behind-the-scenes stories, and
            exclusive subscriber-only offers.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Your email address"
              data-ocid="newsletter.input"
              className="flex-1 bg-primary-foreground/15 border border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/50 font-body text-sm px-5 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-foreground/50 min-w-0"
            />
            <button
              type="submit"
              data-ocid="newsletter.submit_button"
              className="bg-primary-foreground text-primary font-body font-semibold px-7 py-3 rounded-full hover:bg-primary-foreground/90 transition-smooth whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </PageTransition>
  );
}
