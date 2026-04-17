import { c as createLucideIcon, r as reactExports, b as useCart, j as jsxRuntimeExports, L as Link, S as ShoppingBag } from "./index-amgHO34L.js";
import { P as PageTransition } from "./PageTransition-DjB1rXfo.js";
import { C as CircleCheck } from "./circle-check-BjVWREe0.js";
import { T as Truck } from "./truck-D9umDVDn.js";
import { C as ChevronRight } from "./chevron-right-KujboAJ1.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" }],
  ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }]
];
const CreditCard = createLucideIcon("credit-card", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
];
const Lock = createLucideIcon("lock", __iconNode);
function Checkout() {
  reactExports.useEffect(() => {
    document.title = "Checkout — Artisan & Co.";
  }, []);
  const { cartItems, cartTotal, clearCart } = useCart();
  const [step, setStep] = reactExports.useState(
    "shipping"
  );
  const [form, setForm] = reactExports.useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "US",
    cardNumber: "",
    expiry: "",
    cvv: ""
  });
  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setStep("confirmation");
    clearCart();
  };
  const shipping = cartTotal >= 75 ? 0 : 8.99;
  const tax = cartTotal * 0.08;
  const total = cartTotal + shipping + tax;
  if (step === "confirmation") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(PageTransition, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "data-ocid": "checkout.confirmation_section",
        className: "min-h-[70vh] flex items-center justify-center px-4",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md w-full text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 32, className: "text-secondary-foreground" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl text-foreground mb-3", children: "Order Confirmed!" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-body text-muted-foreground mb-6 leading-relaxed", children: [
            "Thank you for your order. We'll send a confirmation to",
            " ",
            form.email,
            ". Your handcrafted items will be prepared with care."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-xl border border-border p-4 mb-6 text-left", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { size: 16, className: "text-primary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-sm font-semibold text-foreground", children: "Estimated Delivery: 5–7 business days" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-body text-xs text-muted-foreground", children: [
              "Shipping to ",
              form.address,
              ", ",
              form.city,
              ", ",
              form.state,
              " ",
              form.zip
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/",
              "data-ocid": "checkout.back_home_button",
              className: "inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-body font-semibold text-sm hover:opacity-90 transition-smooth",
              children: "Back to Home"
            }
          )
        ] })
      }
    ) });
  }
  if (cartItems.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-[60vh] flex flex-col items-center justify-center gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { size: 48, className: "text-muted-foreground/40" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl text-foreground", children: "Your cart is empty" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/shop",
          className: "text-sm font-body text-primary hover:underline",
          children: "Continue Shopping →"
        }
      )
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageTransition, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border-b border-border py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 flex items-center justify-center gap-4 text-sm font-body", children: [
      { key: "shipping", label: "Shipping", num: 1 },
      { key: "payment", label: "Payment", num: 2 }
    ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${step === s.key ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`,
          children: s.num
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: step === s.key ? "text-foreground font-semibold" : "text-muted-foreground",
          children: s.label
        }
      ),
      s.key !== "payment" && /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 14, className: "text-muted-foreground" })
    ] }, s.key)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 gap-8 lg:gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2", children: [
        step === "shipping" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "checkout.shipping_section", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl text-foreground mb-6", children: "Shipping Information" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "form",
            {
              onSubmit: (e) => {
                e.preventDefault();
                setStep("payment");
              },
              className: "space-y-5",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "label",
                      {
                        htmlFor: "firstName",
                        className: "block text-sm font-body font-medium text-foreground mb-1.5",
                        children: "First Name *"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        id: "firstName",
                        name: "firstName",
                        "data-ocid": "checkout.first_name_input",
                        type: "text",
                        value: form.firstName,
                        onChange: handleChange,
                        required: true,
                        placeholder: "Maria",
                        className: "w-full text-sm font-body bg-card border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "label",
                      {
                        htmlFor: "lastName",
                        className: "block text-sm font-body font-medium text-foreground mb-1.5",
                        children: "Last Name *"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        id: "lastName",
                        name: "lastName",
                        "data-ocid": "checkout.last_name_input",
                        type: "text",
                        value: form.lastName,
                        onChange: handleChange,
                        required: true,
                        placeholder: "Vasquez",
                        className: "w-full text-sm font-body bg-card border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "label",
                    {
                      htmlFor: "email",
                      className: "block text-sm font-body font-medium text-foreground mb-1.5",
                      children: "Email *"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      id: "email",
                      name: "email",
                      "data-ocid": "checkout.email_input",
                      type: "email",
                      value: form.email,
                      onChange: handleChange,
                      required: true,
                      placeholder: "maria@example.com",
                      className: "w-full text-sm font-body bg-card border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "label",
                    {
                      htmlFor: "address",
                      className: "block text-sm font-body font-medium text-foreground mb-1.5",
                      children: "Street Address *"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      id: "address",
                      name: "address",
                      "data-ocid": "checkout.address_input",
                      type: "text",
                      value: form.address,
                      onChange: handleChange,
                      required: true,
                      placeholder: "123 Artisan Lane",
                      className: "w-full text-sm font-body bg-card border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2 sm:col-span-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "label",
                      {
                        htmlFor: "city",
                        className: "block text-sm font-body font-medium text-foreground mb-1.5",
                        children: "City *"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        id: "city",
                        name: "city",
                        "data-ocid": "checkout.city_input",
                        type: "text",
                        value: form.city,
                        onChange: handleChange,
                        required: true,
                        placeholder: "Portland",
                        className: "w-full text-sm font-body bg-card border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "label",
                      {
                        htmlFor: "state",
                        className: "block text-sm font-body font-medium text-foreground mb-1.5",
                        children: "State *"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        id: "state",
                        name: "state",
                        "data-ocid": "checkout.state_input",
                        type: "text",
                        value: form.state,
                        onChange: handleChange,
                        required: true,
                        placeholder: "OR",
                        className: "w-full text-sm font-body bg-card border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "label",
                      {
                        htmlFor: "zip",
                        className: "block text-sm font-body font-medium text-foreground mb-1.5",
                        children: "ZIP *"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        id: "zip",
                        name: "zip",
                        "data-ocid": "checkout.zip_input",
                        type: "text",
                        value: form.zip,
                        onChange: handleChange,
                        required: true,
                        placeholder: "97201",
                        className: "w-full text-sm font-body bg-card border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "submit",
                    "data-ocid": "checkout.continue_to_payment_button",
                    className: "w-full py-3.5 bg-primary text-primary-foreground rounded-full font-body font-semibold text-sm hover:opacity-90 transition-smooth",
                    children: "Continue to Payment"
                  }
                )
              ]
            }
          )
        ] }),
        step === "payment" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "checkout.payment_section", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setStep("shipping"),
              className: "flex items-center gap-1 text-sm font-body text-muted-foreground hover:text-foreground mb-6 transition-smooth",
              children: "← Back to Shipping"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl text-foreground mb-6", children: "Payment Information" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-6 text-xs font-body text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { size: 12, className: "text-secondary-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Your payment information is secure and encrypted" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handlePlaceOrder, className: "space-y-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  htmlFor: "cardNumber",
                  className: "block text-sm font-body font-medium text-foreground mb-1.5",
                  children: "Card Number *"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  CreditCard,
                  {
                    size: 16,
                    className: "absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    id: "cardNumber",
                    name: "cardNumber",
                    "data-ocid": "checkout.card_number_input",
                    type: "text",
                    value: form.cardNumber,
                    onChange: handleChange,
                    required: true,
                    placeholder: "4242 4242 4242 4242",
                    maxLength: 19,
                    className: "w-full text-sm font-body bg-card border border-border rounded-xl pl-10 pr-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    htmlFor: "expiry",
                    className: "block text-sm font-body font-medium text-foreground mb-1.5",
                    children: "Expiry *"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    id: "expiry",
                    name: "expiry",
                    "data-ocid": "checkout.expiry_input",
                    type: "text",
                    value: form.expiry,
                    onChange: handleChange,
                    required: true,
                    placeholder: "MM / YY",
                    maxLength: 7,
                    className: "w-full text-sm font-body bg-card border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    htmlFor: "cvv",
                    className: "block text-sm font-body font-medium text-foreground mb-1.5",
                    children: "CVV *"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    id: "cvv",
                    name: "cvv",
                    "data-ocid": "checkout.cvv_input",
                    type: "text",
                    value: form.cvv,
                    onChange: handleChange,
                    required: true,
                    placeholder: "123",
                    maxLength: 4,
                    className: "w-full text-sm font-body bg-card border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "submit",
                "data-ocid": "checkout.place_order_button",
                className: "w-full py-3.5 bg-primary text-primary-foreground rounded-full font-body font-semibold text-sm hover:opacity-90 transition-smooth flex items-center justify-center gap-2",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { size: 14 }),
                  "Place Order — $",
                  total.toFixed(2)
                ]
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-ocid": "checkout.order_summary_panel", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl border border-border p-5 sticky top-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg text-foreground mb-4", children: "Order Summary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 mb-4", children: cartItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 items-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-lg overflow-hidden bg-muted flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: item.product.images[0],
              alt: item.product.name,
              className: "w-full h-full object-cover"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs font-semibold text-foreground line-clamp-2 leading-tight", children: item.product.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-body text-muted-foreground", children: [
              "Qty: ",
              item.quantity
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-body text-sm font-bold text-foreground flex-shrink-0", children: [
            "$",
            (item.product.price * item.quantity).toFixed(2)
          ] })
        ] }, item.product.id)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border pt-4 space-y-2 text-sm font-body", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Subtotal" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-foreground", children: [
              "$",
              cartTotal.toFixed(2)
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Shipping" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: shipping === 0 ? "text-secondary-foreground font-semibold" : "text-foreground",
                children: shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Tax (8%)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-foreground", children: [
              "$",
              tax.toFixed(2)
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-t border-border pt-2 mt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-foreground", children: "Total" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-lg text-foreground", children: [
              "$",
              total.toFixed(2)
            ] })
          ] })
        ] }),
        cartTotal < 75 && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-body text-muted-foreground mt-3 bg-muted rounded-lg p-2", children: [
          "Add $",
          (75 - cartTotal).toFixed(2),
          " more for free shipping"
        ] })
      ] }) })
    ] }) })
  ] });
}
export {
  Checkout as default
};
