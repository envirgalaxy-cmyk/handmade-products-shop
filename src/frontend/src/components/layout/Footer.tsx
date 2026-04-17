import { Link } from "@tanstack/react-router";
import { Heart, Instagram, Send } from "lucide-react";
import { useState } from "react";
import { SiFacebook, SiPinterest } from "react-icons/si";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const year = new Date().getFullYear();
  const utmLink = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`;

  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="font-display text-2xl text-foreground">
                Artisan <span className="text-primary">&</span> Co.
              </span>
            </Link>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
              A curated collection of exceptional handmade products, celebrating
              skilled artisans and slow craftsmanship worldwide.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-smooth"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
                className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-smooth"
              >
                <SiPinterest size={14} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-smooth"
              >
                <SiFacebook size={14} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-display text-base text-foreground mb-4">
              Shop
            </h4>
            <ul className="space-y-2.5">
              {[
                "Handcrafted Jewelry",
                "Home Decor",
                "Natural Candles",
                "Pottery",
                "Woven Textiles",
              ].map((cat) => (
                <li key={cat}>
                  <Link
                    to="/shop"
                    className="font-body text-sm text-muted-foreground hover:text-foreground transition-smooth"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display text-base text-foreground mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {[
                { to: "/story", label: "Our Story" },
                { to: "/reviews", label: "Reviews" },
                { to: "/contact", label: "Contact Us" },
                { to: "/shop", label: "All Products" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="font-body text-sm text-muted-foreground hover:text-foreground transition-smooth"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display text-base text-foreground mb-2">
              Stay Inspired
            </h4>
            <p className="font-body text-sm text-muted-foreground mb-4">
              Get new arrivals, artisan stories, and exclusive offers.
            </p>
            {subscribed ? (
              <div
                data-ocid="footer.newsletter_success"
                className="bg-secondary/20 text-secondary-foreground text-sm font-body px-4 py-3 rounded-lg"
              >
                Thank you for subscribing! ✦
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  data-ocid="footer.newsletter_input"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="flex-1 min-w-0 text-sm font-body bg-muted border border-border rounded-lg px-3 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
                />
                <button
                  data-ocid="footer.newsletter_submit"
                  type="submit"
                  aria-label="Subscribe"
                  className="w-10 h-10 flex-shrink-0 bg-primary text-primary-foreground rounded-lg flex items-center justify-center hover:opacity-90 transition-smooth"
                >
                  <Send size={14} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-body text-xs text-muted-foreground">
            © {year}. Built with{" "}
            <Heart
              size={10}
              className="inline-block fill-primary text-primary mx-1"
            />{" "}
            using{" "}
            <a
              href={utmLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-smooth underline underline-offset-2"
            >
              caffeine.ai
            </a>
          </p>
          <p className="font-body text-xs text-muted-foreground">
            Handcrafted goods, honestly made.
          </p>
        </div>
      </div>
    </footer>
  );
}
