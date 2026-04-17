import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  size?: "sm" | "md" | "lg";
  showValue?: boolean;
  reviewCount?: number;
  className?: string;
}

const sizeMap = { sm: 12, md: 16, lg: 20 };
const STAR_KEYS = ["s1", "s2", "s3", "s4", "s5"] as const;

export function StarRating({
  rating,
  size = "md",
  showValue = false,
  reviewCount,
  className,
}: StarRatingProps) {
  const px = sizeMap[size];
  const full = Math.floor(rating);
  const partial = rating % 1;
  const empty = 5 - Math.ceil(rating);

  return (
    <div className={cn("flex items-center gap-1", className)}>
      <div className="flex items-center gap-0.5">
        {Array.from({ length: full }).map((_, i) => (
          <Star
            key={STAR_KEYS[i]}
            size={px}
            className="fill-primary text-primary"
          />
        ))}
        {partial >= 0.5 && (
          <div className="relative" style={{ width: px, height: px }}>
            <Star size={px} className="text-border absolute inset-0" />
            <div
              className="overflow-hidden absolute inset-0"
              style={{ width: `${partial * 100}%` }}
            >
              <Star size={px} className="fill-primary text-primary" />
            </div>
          </div>
        )}
        {Array.from({ length: empty }).map((_, i) => (
          <Star
            key={`${STAR_KEYS[full + (partial >= 0.5 ? 1 : 0) + i]}-empty`}
            size={px}
            className="text-border"
          />
        ))}
      </div>
      {showValue && (
        <span
          className={cn(
            "text-muted-foreground font-body",
            size === "sm" ? "text-xs" : "text-sm",
          )}
        >
          {rating.toFixed(1)}
          {reviewCount !== undefined && (
            <span className="ml-1">({reviewCount})</span>
          )}
        </span>
      )}
    </div>
  );
}
