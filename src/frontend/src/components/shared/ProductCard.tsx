import { cn } from "@/lib/utils";
import { useNavigate } from "@tanstack/react-router";
import { Heart, ShoppingBag } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import type { Product } from "../../data/types";
import { StarRating } from "./StarRating";

interface ProductCardProps {
  product: Product;
  index?: number;
  className?: string;
}

export function ProductCard({
  product,
  index = 0,
  className,
}: ProductCardProps) {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const wished = isInWishlist(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  const handleCardClick = () => {
    navigate({ to: "/product/$id", params: { id: product.id } });
  };

  const handleCardKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleCardClick();
    }
  };

  return (
    <article
      data-ocid={`product.item.${index + 1}`}
      className={cn(
        "group relative bg-card rounded-xl overflow-hidden border border-border cursor-pointer hover-lift transition-smooth",
        className,
      )}
    >
      {/* Invisible link overlay for navigation */}
      <a
        href={`/product/${product.id}`}
        className="absolute inset-0 z-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-xl"
        onClick={(e) => {
          e.preventDefault();
          handleCardClick();
        }}
        onKeyDown={handleCardKeyDown}
      >
        <span className="sr-only">View {product.name}</span>
      </a>

      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden bg-muted">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 z-10">
            <span
              className={cn(
                "text-xs font-body font-semibold px-2.5 py-1 rounded-full",
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
        {/* Wishlist */}
        <button
          type="button"
          data-ocid={`product.wishlist_button.${index + 1}`}
          onClick={handleWishlist}
          aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}
          className={cn(
            "absolute top-3 right-3 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-smooth",
            wished
              ? "bg-primary text-primary-foreground"
              : "bg-card/90 text-muted-foreground hover:text-primary hover:bg-card",
          )}
        >
          <Heart size={14} className={wished ? "fill-current" : ""} />
        </button>
        {/* Add to cart overlay */}
        <div className="absolute bottom-0 inset-x-0 z-10 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            type="button"
            data-ocid={`product.add_to_cart_button.${index + 1}`}
            onClick={handleAddToCart}
            className="w-full bg-foreground text-background py-3 text-sm font-body font-semibold flex items-center justify-center gap-2 hover:bg-primary transition-smooth"
          >
            <ShoppingBag size={14} />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <p className="text-xs text-muted-foreground font-body mb-1 uppercase tracking-wider">
          {product.categoryName}
        </p>
        <h3 className="font-display text-base text-foreground leading-snug mb-2 line-clamp-2">
          {product.name}
        </h3>
        <div className="flex items-center gap-2 mb-3">
          <StarRating rating={product.rating} size="sm" />
          <span className="text-xs text-muted-foreground">
            ({product.reviewCount})
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-body font-bold text-foreground">
            ${product.price}
          </span>
          {product.originalPrice && (
            <span className="font-body text-sm text-muted-foreground line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
