import { r as reactExports, j as jsxRuntimeExports, e as cn } from "./index-amgHO34L.js";
function PageTransition({ children, className }) {
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(10px)";
    const raf = requestAnimationFrame(() => {
      el.style.transition = "opacity 0.4s ease-out, transform 0.4s ease-out";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });
    return () => cancelAnimationFrame(raf);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: cn("will-change-[opacity,transform]", className), children });
}
export {
  PageTransition as P
};
