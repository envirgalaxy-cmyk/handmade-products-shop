import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Heart,
  Leaf,
  MapPin,
  Package,
  Sparkles,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { PageTransition } from "../components/shared/PageTransition";
import { artisans } from "../data/artisans";

// ── Data ───────────────────────────────────────────────────────────────────

const milestones = [
  {
    year: "2018",
    title: "Started in a Small Studio",
    description:
      "Started in a small studio with a single loom, a dream, and two pairs of patient hands. Every piece was made with love, one stitch at a time.",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=700&q=80",
  },
  {
    year: "2019",
    title: "First Artisan Fair",
    description:
      "First artisan fair — sold out in one day. The warmth and response from our community told us this was more than a business — it was a movement.",
    image:
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=700&q=80",
  },
  {
    year: "2020",
    title: "Growing Our Family",
    description:
      "Expanded to 3 artisans, 50+ products. Each new maker brought fresh perspective and deepened our commitment to quality over quantity.",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=700&q=80",
  },
  {
    year: "2022",
    title: "Going Nationwide",
    description:
      "Launched online store, nationwide shipping. Handcrafted goods now reach homes across the country, carrying warmth from maker to doorstep.",
    image:
      "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=700&q=80",
  },
  {
    year: "2024",
    title: "A Thriving Community",
    description:
      "10+ artisans, 200+ products, thousands of happy customers who believe in the handmade difference. Our story is still being written.",
    image:
      "https://images.unsplash.com/photo-1517456793572-1d8efd6dc135?w=700&q=80",
  },
];

const pillars = [
  {
    Icon: Leaf,
    title: "Hand-Selected Materials",
    description:
      "We source only the finest natural materials — ethically obtained, sustainably harvested, and chosen for beauty that lasts a lifetime.",
  },
  {
    Icon: Heart,
    title: "Lovingly Crafted",
    description:
      "Every item is made entirely by hand, never mass-produced. Each piece carries the intention and skill of the maker who created it.",
  },
  {
    Icon: Sparkles,
    title: "Sustainably Made",
    description:
      "From eco-friendly dyes to compostable packaging, sustainability is woven into every step of our process.",
  },
];

// ── Intersection observer hook ─────────────────────────────────────────────

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

// ── Sub-components ─────────────────────────────────────────────────────────

function TimelineItem({
  milestone,
  index,
}: {
  milestone: (typeof milestones)[0];
  index: number;
}) {
  const { ref, visible } = useInView(0.1);
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      data-ocid={`story.timeline.item.${index + 1}`}
      className={`flex flex-col gap-8 md:gap-16 transition-all duration-700 ease-out ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      } ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      {/* Image */}
      <div className="w-full md:w-1/2 overflow-hidden rounded-2xl shadow-elevated">
        <img
          src={milestone.image}
          alt={milestone.title}
          className="w-full h-56 md:h-72 object-cover transition-smooth hover:scale-105"
        />
      </div>

      {/* Content */}
      <div
        className={`w-full md:w-1/2 flex flex-col justify-center gap-4 ${
          isEven ? "md:text-left" : "md:text-right"
        }`}
      >
        <span className="inline-flex w-fit items-center text-xs font-semibold tracking-[0.2em] uppercase text-primary bg-primary/10 px-3 py-1.5 rounded-full">
          {milestone.year}
        </span>
        <h3 className="font-display text-2xl md:text-3xl text-foreground leading-snug">
          {milestone.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {milestone.description}
        </p>
      </div>
    </div>
  );
}

function PillarCard({
  pillar,
  index,
}: {
  pillar: (typeof pillars)[0];
  index: number;
}) {
  const { ref, visible } = useInView(0.1);
  const { Icon } = pillar;

  return (
    <div
      ref={ref}
      data-ocid={`story.pillar.item.${index + 1}`}
      className={`flex flex-col items-center text-center gap-5 p-8 rounded-2xl bg-card border border-border hover-lift transition-all duration-500 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
        <Icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
      </div>
      <h3 className="font-display text-xl text-foreground">{pillar.title}</h3>
      <p className="text-muted-foreground leading-relaxed text-sm">
        {pillar.description}
      </p>
    </div>
  );
}

function ArtisanCard({
  artisan,
  index,
}: {
  artisan: (typeof artisans)[0];
  index: number;
}) {
  const { ref, visible } = useInView(0.1);

  return (
    <article
      ref={ref}
      data-ocid={`story.artisan.item.${index + 1}`}
      className={`bg-card border border-border rounded-2xl overflow-hidden hover-lift transition-all duration-500 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Portrait */}
      <div className="relative overflow-hidden h-72">
        <img
          src={artisan.image}
          alt={artisan.name}
          className="w-full h-full object-cover object-top transition-smooth hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-primary-foreground font-display text-xl">
            {artisan.name}
          </p>
          <p className="text-primary-foreground/80 text-sm">
            {artisan.specialty}
          </p>
        </div>
      </div>

      {/* Details */}
      <div className="p-6 flex flex-col gap-4">
        <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5 min-w-0">
            <MapPin className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">{artisan.location}</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Package className="w-3.5 h-3.5 shrink-0" />
            {artisan.productsCount} products
          </span>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-4">
          {artisan.bio}
        </p>
        <div className="flex items-center gap-6 pt-3 border-t border-border">
          <div className="text-center">
            <p className="font-display text-2xl text-foreground">
              {artisan.yearsExperience}
            </p>
            <p className="text-xs text-muted-foreground">Years crafting</p>
          </div>
          <div className="w-px h-8 bg-border" />
          <div className="text-center">
            <p className="font-display text-2xl text-foreground">
              {artisan.productsCount}
            </p>
            <p className="text-xs text-muted-foreground">Products</p>
          </div>
        </div>
      </div>
    </article>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────

export default function Story() {
  useEffect(() => {
    document.title = "Our Story — Artisan & Co.";
  }, []);

  const { ref: missionRef, visible: missionVisible } = useInView(0.2);

  return (
    <PageTransition>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        data-ocid="story.hero.section"
        className="relative min-h-[75vh] flex items-center justify-center overflow-hidden"
      >
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80"
          alt="Artisan hands crafting in a warm workshop"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Layered overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/55 via-foreground/30 to-foreground/65" />

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto flex flex-col items-center gap-6">
          <p className="text-primary-foreground/70 text-xs tracking-[0.3em] uppercase font-semibold">
            Artisan &amp; Co.
          </p>
          <h1 className="font-display text-5xl md:text-7xl text-primary-foreground leading-tight text-balance">
            Our Story
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/85 font-light leading-relaxed text-balance max-w-xl">
            Where craft meets heart, and tradition meets love
          </p>
          <div className="w-12 h-0.5 bg-primary-foreground/50 rounded-full mt-2" />
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary-foreground/60">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-primary-foreground/40 animate-pulse" />
        </div>
      </section>

      {/* ── BRAND JOURNEY TIMELINE ───────────────────────────────────────── */}
      <section
        data-ocid="story.timeline.section"
        className="py-24 px-6 bg-background"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary text-xs tracking-[0.25em] uppercase font-semibold mb-3">
              How We Got Here
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
              From a single studio loom to a family of artisans — every
              milestone shaped who we are today.
            </p>
          </div>

          <div className="flex flex-col gap-20">
            {milestones.map((milestone, i) => (
              <TimelineItem
                key={milestone.year}
                milestone={milestone}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── CRAFTSMANSHIP ────────────────────────────────────────────────── */}
      <section
        data-ocid="story.craftsmanship.section"
        className="py-24 px-6 bg-muted/30"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary text-xs tracking-[0.25em] uppercase font-semibold mb-3">
              Our Philosophy
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              The Art of Making
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Three principles guide every piece we create — from the first
              sketch to the final stitch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, i) => (
              <PillarCard key={pillar.title} pillar={pillar} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── ARTISAN PROFILES ─────────────────────────────────────────────── */}
      <section
        data-ocid="story.artisans.section"
        className="py-24 px-6 bg-background"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary text-xs tracking-[0.25em] uppercase font-semibold mb-3">
              The Makers
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              Meet Our Artisans
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Behind every piece is a skilled maker with a story. These are the
              hands behind Artisan &amp; Co.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {artisans.map((artisan, i) => (
              <ArtisanCard key={artisan.id} artisan={artisan} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION STATEMENT ────────────────────────────────────────────── */}
      <section
        data-ocid="story.mission.section"
        className="relative py-32 px-6 overflow-hidden bg-primary"
      >
        {/* Subtle texture */}
        <div
          className="absolute inset-0 opacity-[0.07] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=30')",
          }}
        />

        <div
          ref={missionRef}
          className={`relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center gap-10 transition-all duration-1000 ease-out ${
            missionVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="w-10 h-0.5 bg-primary-foreground/50 rounded-full" />

          <blockquote className="font-display text-3xl md:text-5xl text-primary-foreground leading-tight text-balance">
            "We believe every home deserves a piece of something handmade."
          </blockquote>

          <p className="text-primary-foreground/80 text-lg leading-relaxed max-w-xl">
            Each object we create carries warmth, intention, and the
            irreplaceable mark of a human hand. That's what sets handmade apart
            — and why it matters.
          </p>

          <Link
            to="/shop"
            data-ocid="story.mission.shop_link"
            className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded-full font-semibold text-sm tracking-wide hover:bg-primary-foreground/90 transition-smooth hover-lift"
          >
            Shop Our Collection <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}
