import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  BadgeCheck,
  ChevronRight,
  MessageSquarePlus,
  Quote,
  ThumbsUp,
} from "lucide-react";
import { useEffect, useState } from "react";
import { PageTransition } from "../components/shared/PageTransition";
import { StarRating } from "../components/shared/StarRating";
import { reviews } from "../data/reviews";

// ── Derived stats ─────────────────────────────────────────────────────────────
const totalReviews = reviews.length;
const rawAvg = reviews.reduce((s, r) => s + r.rating, 0) / totalReviews;
const avgRating = Math.round(rawAvg * 10) / 10;

const ratingBreakdown = [5, 4, 3, 2, 1].map((star) => {
  const count = reviews.filter((r) => r.rating === star).length;
  return { star, count, pct: Math.round((count / totalReviews) * 100) };
});

const featuredReview = reviews.find((r) => r.id === "r1") ?? reviews[0];

// ── Sub-components ────────────────────────────────────────────────────────────
function RatingBar({
  star,
  count,
  pct,
  active,
  onClick,
}: {
  star: number;
  count: number;
  pct: number;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      data-ocid={`reviews.rating_filter_${star}`}
      onClick={onClick}
      className={`w-full flex items-center gap-3 text-left rounded-xl px-3 py-2 transition-smooth ${
        active ? "bg-primary/10 ring-1 ring-primary/30" : "hover:bg-muted"
      }`}
    >
      <span className="text-sm font-body text-foreground w-12 shrink-0">
        {star} star{star !== 1 ? "s" : ""}
      </span>
      <div className="flex-1 h-2.5 rounded-full bg-muted overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{
            width: `${pct}%`,
            backgroundColor: "oklch(0.58 0.18 35)",
          }}
        />
      </div>
      <span className="text-sm text-muted-foreground w-7 text-right shrink-0">
        {count}
      </span>
    </button>
  );
}

function ReviewCard({
  review,
  index,
  helpful,
  onHelpful,
}: {
  review: (typeof reviews)[0];
  index: number;
  helpful: boolean;
  onHelpful: () => void;
}) {
  return (
    <article
      className="bg-card rounded-2xl p-6 border border-border flex flex-col gap-4 hover-lift shadow-subtle"
      data-ocid={`reviews.item.${index + 1}`}
    >
      {/* Header row */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          {review.image ? (
            <img
              src={review.image}
              alt={review.customerName}
              className="w-11 h-11 rounded-full object-cover shrink-0 border-2 border-border"
            />
          ) : (
            <div
              className="w-11 h-11 rounded-full flex items-center justify-center text-primary-foreground font-display text-lg shrink-0"
              style={{ backgroundColor: "oklch(0.58 0.18 35)" }}
            >
              {review.customerName.charAt(0)}
            </div>
          )}
          <div className="min-w-0">
            <div className="flex items-center gap-1.5 flex-wrap">
              <p className="font-display font-semibold text-foreground truncate">
                {review.customerName}
              </p>
              {review.verified && (
                <BadgeCheck
                  size={14}
                  className="shrink-0"
                  style={{ color: "oklch(0.58 0.18 35)" }}
                  aria-label="Verified purchase"
                />
              )}
            </div>
            <p className="text-xs text-muted-foreground">{review.location}</p>
          </div>
        </div>
        <div className="flex flex-col items-end gap-1 shrink-0">
          <StarRating rating={review.rating} size="sm" />
          <span className="text-xs text-muted-foreground">{review.date}</span>
        </div>
      </div>

      {/* Title + Body */}
      <div className="relative pl-4 border-l-2 border-primary/30">
        <Quote
          size={13}
          className="absolute -left-2 -top-1 bg-card"
          style={{ color: "oklch(0.58 0.18 35)" }}
        />
        <h3 className="font-display font-semibold text-foreground mb-2 text-balance">
          {review.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {review.text}
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-2 border-t border-border mt-auto">
        {review.productName && (
          <Badge variant="secondary" className="text-xs font-body">
            {review.productName}
          </Badge>
        )}
        <button
          type="button"
          data-ocid={`reviews.helpful_button.${index + 1}`}
          onClick={onHelpful}
          className={`ml-auto flex items-center gap-1.5 text-xs font-body transition-smooth ${
            helpful
              ? "text-primary"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <ThumbsUp size={12} className={helpful ? "fill-current" : ""} />
          {helpful ? "Helpful!" : "Helpful"}
        </button>
      </div>
    </article>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function Reviews() {
  useEffect(() => {
    document.title = "Reviews — Artisan & Co.";
  }, []);

  const [filter, setFilter] = useState<number | "all">("all");
  const [helpful, setHelpful] = useState<Record<string, boolean>>({});

  const filtered =
    filter === "all" ? reviews : reviews.filter((r) => r.rating === filter);

  const toggleHelpful = (id: string) =>
    setHelpful((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <PageTransition>
      {/* ── Page Header ───────────────────────────────────────────────────── */}
      <section
        className="py-16 md:py-20 px-4"
        style={{
          background:
            "linear-gradient(160deg, oklch(0.97 0.03 85) 0%, oklch(0.99 0.02 90) 100%)",
        }}
        data-ocid="reviews.header.section"
      >
        <div className="max-w-7xl mx-auto text-center">
          {/* Breadcrumb */}
          <nav
            className="flex items-center justify-center gap-1.5 text-sm text-muted-foreground mb-6"
            aria-label="Breadcrumb"
          >
            <Link
              to="/"
              className="hover:text-foreground transition-colors"
              data-ocid="reviews.breadcrumb.home"
            >
              Home
            </Link>
            <ChevronRight size={13} />
            <span className="text-foreground font-medium">Reviews</span>
          </nav>

          <p className="text-xs font-body uppercase tracking-widest text-primary mb-3">
            Verified Customers
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Customer Love
          </h1>
          <p className="text-muted-foreground font-body text-lg max-w-xl mx-auto mb-10">
            Real stories from real people who've brought handmade beauty into
            their homes and lives.
          </p>

          {/* Summary card */}
          <div className="inline-flex flex-col items-center gap-3 px-8 py-6 bg-card rounded-2xl border border-border shadow-elevated">
            <StarRating
              rating={avgRating}
              size="lg"
              className="justify-center"
            />
            <p className="font-display text-4xl font-bold text-foreground">
              {avgRating}{" "}
              <span className="text-lg font-body text-muted-foreground">
                out of 5
              </span>
            </p>
            <p className="text-sm text-muted-foreground">
              Based on{" "}
              <strong className="text-foreground">
                {totalReviews} verified reviews
              </strong>
            </p>
          </div>
        </div>
      </section>

      {/* ── Rating Breakdown + Filter ─────────────────────────────────────── */}
      <section
        className="bg-background py-12 px-4"
        data-ocid="reviews.breakdown.section"
      >
        <div className="max-w-lg mx-auto">
          <h2 className="font-display text-xl font-semibold text-foreground mb-6 text-center">
            Rating Breakdown
          </h2>
          <div className="flex flex-col gap-2">
            {ratingBreakdown.map(({ star, count, pct }) => (
              <RatingBar
                key={star}
                star={star}
                count={count}
                pct={pct}
                active={filter === star}
                onClick={() => setFilter(filter === star ? "all" : star)}
              />
            ))}
          </div>
          {filter !== "all" && (
            <button
              type="button"
              onClick={() => setFilter("all")}
              className="mt-4 w-full text-center text-sm font-body text-primary hover:underline transition-colors"
            >
              Clear filter — show all reviews
            </button>
          )}
        </div>
      </section>

      {/* ── Featured Pull-Quote ───────────────────────────────────────────── */}
      <section
        className="py-16 md:py-20 px-4"
        style={{ backgroundColor: "oklch(0.96 0.04 85)" }}
        data-ocid="reviews.featured.section"
      >
        <div className="max-w-3xl mx-auto text-center">
          <Quote
            size={56}
            className="mx-auto mb-5 rotate-180"
            style={{ color: "oklch(0.58 0.18 35)", opacity: 0.3 }}
            aria-hidden="true"
          />
          <blockquote className="font-display text-xl md:text-2xl font-medium text-foreground leading-relaxed text-balance mb-8 italic">
            "{featuredReview.text}"
          </blockquote>
          <div className="flex items-center justify-center gap-3">
            {featuredReview.image && (
              <img
                src={featuredReview.image}
                alt={featuredReview.customerName}
                className="w-12 h-12 rounded-full object-cover border-2 border-border"
              />
            )}
            <div className="text-left">
              <p className="font-display font-semibold text-foreground">
                {featuredReview.customerName}
              </p>
              <p className="text-sm text-muted-foreground">
                {featuredReview.location}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Reviews Grid ─────────────────────────────────────────────────── */}
      <section
        className="bg-background py-16 md:py-20 px-4"
        data-ocid="reviews.grid.section"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-10">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              {filter === "all"
                ? `All ${totalReviews} Reviews`
                : `${filtered.length} Review${filtered.length !== 1 ? "s" : ""} — ${filter} Stars`}
            </h2>
            {/* Filter chips */}
            <div
              className="flex items-center gap-2 flex-wrap"
              data-ocid="reviews.filter.tabs"
            >
              <button
                type="button"
                data-ocid="reviews.filter_all_tab"
                onClick={() => setFilter("all")}
                className={`px-4 py-1.5 rounded-full text-sm font-body transition-smooth border ${
                  filter === "all"
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                All
              </button>
              {[5, 4].map((n) => (
                <button
                  key={n}
                  type="button"
                  data-ocid={`reviews.filter_${n}_tab`}
                  onClick={() => setFilter(filter === n ? "all" : n)}
                  className={`px-4 py-1.5 rounded-full text-sm font-body transition-smooth border ${
                    filter === n
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {n}★
                </button>
              ))}
            </div>
          </div>

          {filtered.length === 0 ? (
            <div
              data-ocid="reviews.empty_state"
              className="text-center py-20 bg-muted/30 rounded-2xl border border-border"
            >
              <p className="font-display text-2xl text-foreground mb-3">
                No reviews for this rating
              </p>
              <button
                type="button"
                onClick={() => setFilter("all")}
                className="text-sm font-body text-primary hover:underline"
              >
                Show all reviews
              </button>
            </div>
          ) : (
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              data-ocid="reviews.list"
            >
              {filtered.map((review, idx) => (
                <ReviewCard
                  key={review.id}
                  review={review}
                  index={idx}
                  helpful={!!helpful[review.id]}
                  onHelpful={() => toggleHelpful(review.id)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Write a Review CTA ────────────────────────────────────────────── */}
      <section
        className="py-16 md:py-20 px-4 text-center"
        style={{ backgroundColor: "oklch(0.97 0.04 85)" }}
        data-ocid="reviews.cta.section"
      >
        <div className="max-w-xl mx-auto">
          <div
            className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5"
            style={{ backgroundColor: "oklch(0.58 0.18 35 / 0.12)" }}
          >
            <MessageSquarePlus
              size={26}
              style={{ color: "oklch(0.58 0.18 35)" }}
              aria-hidden="true"
            />
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
            Share Your Experience
          </h2>
          <p className="text-muted-foreground font-body text-base mb-8 text-balance">
            Did something from our shop bring joy to your home or someone you
            love? We'd be honoured to hear your story and share it with our
            community.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/contact" data-ocid="reviews.write_review.link">
              <Button
                type="button"
                size="lg"
                className="font-body px-8 w-full sm:w-auto"
                data-ocid="reviews.write_review.primary_button"
              >
                Write a Review
              </Button>
            </Link>
            <Link to="/shop" data-ocid="reviews.shop.link">
              <Button
                type="button"
                variant="outline"
                size="lg"
                className="font-body px-8 w-full sm:w-auto"
                data-ocid="reviews.shop.secondary_button"
              >
                Shop Now
              </Button>
            </Link>
          </div>
          <p className="text-xs text-muted-foreground mt-5">
            Reviews are open to verified purchasers only.
          </p>
        </div>
      </section>
    </PageTransition>
  );
}
