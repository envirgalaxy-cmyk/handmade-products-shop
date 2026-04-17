import { cn } from "@/lib/utils";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "../../context/CartContext";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/story", label: "Our Story" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { cartCount, setCartOpen } = useCart();
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  return (
    <>
      <header className="sticky top-0 z-30 bg-card/95 backdrop-blur-sm border-b border-border shadow-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <Link to="/" data-ocid="header.logo_link" className="flex-shrink-0">
              <span className="font-display text-xl md:text-2xl text-foreground tracking-tight">
                Artisan <span className="text-primary">&</span> Co.
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  data-ocid={`header.nav_${link.label.toLowerCase().replace(/\s+/g, "_")}_link`}
                  className={cn(
                    "font-body text-sm transition-smooth relative pb-0.5",
                    currentPath === link.to
                      ? "text-primary font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:rounded-full"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                data-ocid="header.cart_button"
                onClick={() => setCartOpen(true)}
                aria-label={`Open cart (${cartCount} items)`}
                className="relative w-9 h-9 rounded-full flex items-center justify-center hover:bg-muted transition-smooth text-foreground"
              >
                <ShoppingBag size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 min-w-[18px] min-h-[18px] bg-primary text-primary-foreground text-[10px] font-bold rounded-full flex items-center justify-center px-1">
                    {cartCount > 9 ? "9+" : cartCount}
                  </span>
                )}
              </button>
              <button
                type="button"
                data-ocid="header.mobile_menu_button"
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
                className="md:hidden w-9 h-9 rounded-full flex items-center justify-center hover:bg-muted transition-smooth"
              >
                <Menu size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 bg-foreground/30 z-40 md:hidden animate-fade-in"
            onClick={() => setMobileOpen(false)}
            onKeyDown={(e) => e.key === "Escape" && setMobileOpen(false)}
            role="presentation"
            aria-hidden="true"
          />
          <dialog
            open
            className="fixed inset-y-0 right-0 w-72 bg-card border-l border-border z-50 md:hidden flex flex-col animate-slide-up p-0 max-w-none h-full m-0"
            aria-label="Navigation menu"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-border">
              <span className="font-display text-lg">
                Artisan <span className="text-primary">&</span> Co.
              </span>
              <button
                type="button"
                data-ocid="header.mobile_close_button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-muted transition-smooth"
              >
                <X size={18} />
              </button>
            </div>
            <nav className="flex-1 px-6 py-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  data-ocid={`header.mobile_nav_${link.label.toLowerCase().replace(/\s+/g, "_")}_link`}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "block py-3 px-4 rounded-lg font-body text-base transition-smooth",
                    currentPath === link.to
                      ? "bg-primary/10 text-primary font-semibold"
                      : "text-foreground hover:bg-muted",
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="px-6 py-6 border-t border-border">
              <p className="text-xs text-muted-foreground">
                Handcrafted with love ✦
              </p>
            </div>
          </dialog>
        </>
      )}
    </>
  );
}
