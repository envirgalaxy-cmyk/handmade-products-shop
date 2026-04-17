import { c as createLucideIcon, j as jsxRuntimeExports, e as cn } from "./index-amgHO34L.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
];
const Star = createLucideIcon("star", __iconNode);
const sizeMap = { sm: 12, md: 16, lg: 20 };
const STAR_KEYS = ["s1", "s2", "s3", "s4", "s5"];
function StarRating({
  rating,
  size = "md",
  showValue = false,
  reviewCount,
  className
}) {
  const px = sizeMap[size];
  const full = Math.floor(rating);
  const partial = rating % 1;
  const empty = 5 - Math.ceil(rating);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("flex items-center gap-1", className), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-0.5", children: [
      Array.from({ length: full }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Star,
        {
          size: px,
          className: "fill-primary text-primary"
        },
        STAR_KEYS[i]
      )),
      partial >= 0.5 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", style: { width: px, height: px }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: px, className: "text-border absolute inset-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "overflow-hidden absolute inset-0",
            style: { width: `${partial * 100}%` },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: px, className: "fill-primary text-primary" })
          }
        )
      ] }),
      Array.from({ length: empty }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Star,
        {
          size: px,
          className: "text-border"
        },
        `${STAR_KEYS[full + (partial >= 0.5 ? 1 : 0) + i]}-empty`
      ))
    ] }),
    showValue && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "span",
      {
        className: cn(
          "text-muted-foreground font-body",
          size === "sm" ? "text-xs" : "text-sm"
        ),
        children: [
          rating.toFixed(1),
          reviewCount !== void 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-1", children: [
            "(",
            reviewCount,
            ")"
          ] })
        ]
      }
    )
  ] });
}
export {
  StarRating as S
};
