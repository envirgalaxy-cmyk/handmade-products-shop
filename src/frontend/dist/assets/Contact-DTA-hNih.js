import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, L as Link, I as Instagram, g as SiPinterest, h as Send } from "./index-amgHO34L.js";
import { P as PageTransition } from "./PageTransition-DjB1rXfo.js";
import { M as MapPin } from "./map-pin-C9-5EbtW.js";
import { C as CircleCheck } from "./circle-check-BjVWREe0.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
const ChevronDown = createLucideIcon("chevron-down", __iconNode$4);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
];
const Clock = createLucideIcon("clock", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  [
    "path",
    { d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z", key: "1jg4f8" }
  ]
];
const Facebook = createLucideIcon("facebook", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
];
const Mail = createLucideIcon("mail", __iconNode$1);
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
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
];
const Phone = createLucideIcon("phone", __iconNode);
const FAQS = [
  {
    q: "Do you accept custom orders?",
    a: "Yes! We love creating personalised pieces. Share your vision — materials, dimensions, colour preferences — and one of our artisans will reply within 24 hours with a quote and estimated timeline."
  },
  {
    q: "What is your shipping policy?",
    a: "We offer free standard shipping on all orders over $50 within the continental US. Express and international options are available at checkout. Most orders ship within 2–3 business days; you'll receive a tracking link by email."
  },
  {
    q: "What is your return policy?",
    a: "We accept returns within 30 days of delivery for unused, undamaged items in their original packaging. Custom and personalised pieces are final sale. To start a return, email hello@artisanandco.com with your order number."
  },
  {
    q: "Are your products sustainable?",
    a: "Absolutely. We source eco-friendly, ethically harvested materials — natural fibres, reclaimed wood, non-toxic dyes — and our packaging is 100 % compostable. Sustainability is woven into every step of our craft."
  },
  {
    q: "Can I visit your studio?",
    a: "Yes, by appointment! We host studio visits on weekends and select weekday afternoons. Browse finished work, watch the process, and commission bespoke pieces in person. Use the form below to schedule your visit."
  }
];
function FaqItem({ q, a, index }) {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "bg-card rounded-xl border border-border overflow-hidden",
      "data-ocid": `contact.faq.item.${index + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setOpen((v) => !v),
            className: "w-full flex items-center justify-between px-5 py-4 text-left hover:bg-muted/50 transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
            "aria-expanded": open,
            "data-ocid": `contact.faq.toggle.${index + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-semibold text-sm sm:text-base text-foreground pr-4", children: q }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                ChevronDown,
                {
                  className: `shrink-0 w-5 h-5 text-primary transition-transform duration-300 ${open ? "rotate-180" : ""}`,
                  "aria-hidden": "true"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            style: {
              maxHeight: open ? "300px" : "0px",
              overflow: "hidden",
              transition: "max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1)"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "px-5 pb-5 text-sm text-muted-foreground leading-relaxed", children: a })
          }
        )
      ]
    }
  );
}
function Contact() {
  reactExports.useEffect(() => {
    document.title = "Contact Us — Artisan & Co.";
  }, []);
  const [form, setForm] = reactExports.useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: ""
  });
  const [errors, setErrors] = reactExports.useState({});
  const [submitted, setSubmitted] = reactExports.useState(false);
  const [sending, setSending] = reactExports.useState(false);
  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) {
      e.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) e.message = "Message is required.";
    return e;
  }
  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: void 0 }));
    }
  }
  function handleBlur(e) {
    const { name } = e.target;
    const validationErrors = validate();
    setErrors((prev) => ({
      ...prev,
      [name]: validationErrors[name]
    }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 1200);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageTransition, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-card border-b border-border py-12 sm:py-16",
        "data-ocid": "contact.header.section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "nav",
            {
              "aria-label": "Breadcrumb",
              className: "flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: "/",
                    className: "hover:text-primary transition-colors duration-200",
                    "data-ocid": "contact.breadcrumb.home_link",
                    children: "Home"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", children: "/" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: "Contact" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl sm:text-5xl font-bold text-foreground tracking-tight mb-3", children: "Get in Touch" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg max-w-md mx-auto", children: "We'd love to hear from you — questions, custom orders, or just to say hello." })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-16 sm:py-20 bg-background",
        "data-ocid": "contact.form.section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "aside",
            {
              className: "lg:col-span-2 flex flex-col gap-8",
              "data-ocid": "contact.info.panel",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-semibold text-foreground mb-2", children: "Studio Details" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: "We typically respond within 24 hours. For urgent custom inquiries, give us a call!" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "flex flex-col gap-5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5 w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      MapPin,
                      {
                        className: "w-4 h-4 text-primary",
                        "aria-hidden": "true"
                      }
                    ) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-0.5", children: "Studio Address" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-foreground text-sm leading-relaxed", children: [
                        "123 Artisan Lane, Craft Quarter",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                        "CA 90210"
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5 w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-4 h-4 text-primary", "aria-hidden": "true" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-0.5", children: "Email" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "a",
                        {
                          href: "mailto:hello@artisanandco.com",
                          className: "text-foreground text-sm hover:text-primary transition-colors duration-200",
                          "data-ocid": "contact.info.email_link",
                          children: "hello@artisanandco.com"
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5 w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Phone,
                      {
                        className: "w-4 h-4 text-primary",
                        "aria-hidden": "true"
                      }
                    ) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-0.5", children: "Phone" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "a",
                        {
                          href: "tel:+15552345678",
                          className: "text-foreground text-sm hover:text-primary transition-colors duration-200",
                          "data-ocid": "contact.info.phone_link",
                          children: "+1 (555) 234-5678"
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5 w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Clock,
                      {
                        className: "w-4 h-4 text-primary",
                        "aria-hidden": "true"
                      }
                    ) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-0.5", children: "Studio Hours" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground text-sm", children: "Mon–Sat: 9am–6pm PST" })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3", children: "Follow Along" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "a",
                      {
                        href: "https://instagram.com",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        "aria-label": "Instagram",
                        className: "w-10 h-10 rounded-full bg-accent flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-smooth",
                        "data-ocid": "contact.social.instagram_link",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "w-4 h-4", "aria-hidden": "true" })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "a",
                      {
                        href: "https://pinterest.com",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        "aria-label": "Pinterest",
                        className: "w-10 h-10 rounded-full bg-accent flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-smooth",
                        "data-ocid": "contact.social.pinterest_link",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(SiPinterest, { className: "w-4 h-4", "aria-hidden": "true" })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "a",
                      {
                        href: "https://facebook.com",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        "aria-label": "Facebook",
                        className: "w-10 h-10 rounded-full bg-accent flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-smooth",
                        "data-ocid": "contact.social.facebook_link",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Facebook, { className: "w-4 h-4", "aria-hidden": "true" })
                      }
                    )
                  ] })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-3", children: submitted ? (
            /* Success State */
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "h-full flex flex-col items-center justify-center text-center gap-5 py-16 px-8 bg-card rounded-2xl border border-border",
                "data-ocid": "contact.form.success_state",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    CircleCheck,
                    {
                      className: "w-8 h-8 text-secondary-foreground",
                      "aria-hidden": "true"
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-semibold text-foreground mb-2", children: "Message Sent!" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed max-w-sm", children: "Thank you! We'll be in touch soon. Our team aims to reply within 24 hours." })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => {
                        setSubmitted(false);
                        setForm({
                          name: "",
                          email: "",
                          subject: "General Inquiry",
                          message: ""
                        });
                      },
                      className: "mt-2 text-sm text-primary underline underline-offset-2 hover:no-underline transition-smooth",
                      "data-ocid": "contact.form.send_another_button",
                      children: "Send another message"
                    }
                  )
                ]
              }
            )
          ) : (
            /* Contact Form */
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "form",
              {
                onSubmit: handleSubmit,
                noValidate: true,
                className: "bg-card rounded-2xl border border-border p-7 sm:p-9 flex flex-col gap-6",
                "data-ocid": "contact.form",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-semibold text-foreground", children: "Send a Message" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "label",
                      {
                        htmlFor: "contact-name",
                        className: "text-sm font-medium text-foreground",
                        children: [
                          "Full Name",
                          " ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", "aria-hidden": "true", children: "*" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        id: "contact-name",
                        name: "name",
                        type: "text",
                        autoComplete: "name",
                        required: true,
                        value: form.name,
                        onChange: handleChange,
                        onBlur: handleBlur,
                        placeholder: "Jane Doe",
                        "aria-describedby": errors.name ? "name-error" : void 0,
                        "aria-invalid": !!errors.name,
                        className: `h-11 w-full rounded-xl border px-4 text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors duration-200 ${errors.name ? "border-destructive" : "border-border"}`,
                        "data-ocid": "contact.name.input"
                      }
                    ),
                    errors.name && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        id: "name-error",
                        className: "text-xs text-destructive",
                        role: "alert",
                        "data-ocid": "contact.name.field_error",
                        children: errors.name
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "label",
                      {
                        htmlFor: "contact-email",
                        className: "text-sm font-medium text-foreground",
                        children: [
                          "Email Address",
                          " ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", "aria-hidden": "true", children: "*" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        id: "contact-email",
                        name: "email",
                        type: "email",
                        autoComplete: "email",
                        required: true,
                        value: form.email,
                        onChange: handleChange,
                        onBlur: handleBlur,
                        placeholder: "jane@example.com",
                        "aria-describedby": errors.email ? "email-error" : void 0,
                        "aria-invalid": !!errors.email,
                        className: `h-11 w-full rounded-xl border px-4 text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors duration-200 ${errors.email ? "border-destructive" : "border-border"}`,
                        "data-ocid": "contact.email.input"
                      }
                    ),
                    errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        id: "email-error",
                        className: "text-xs text-destructive",
                        role: "alert",
                        "data-ocid": "contact.email.field_error",
                        children: errors.email
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "label",
                      {
                        htmlFor: "contact-subject",
                        className: "text-sm font-medium text-foreground",
                        children: "Subject"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "select",
                      {
                        id: "contact-subject",
                        name: "subject",
                        value: form.subject,
                        onChange: handleChange,
                        className: "h-11 w-full rounded-xl border border-border px-4 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors duration-200 cursor-pointer",
                        "data-ocid": "contact.subject.select",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "General Inquiry", children: "General Inquiry" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Custom Order", children: "Custom Order" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Wholesale", children: "Wholesale" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Other", children: "Other" })
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "label",
                      {
                        htmlFor: "contact-message",
                        className: "text-sm font-medium text-foreground",
                        children: [
                          "Message",
                          " ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", "aria-hidden": "true", children: "*" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "textarea",
                      {
                        id: "contact-message",
                        name: "message",
                        required: true,
                        rows: 5,
                        value: form.message,
                        onChange: handleChange,
                        onBlur: handleBlur,
                        placeholder: "Tell us what's on your mind…",
                        "aria-describedby": errors.message ? "message-error" : void 0,
                        "aria-invalid": !!errors.message,
                        className: `w-full rounded-xl border px-4 py-3 text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors duration-200 resize-y min-h-[120px] ${errors.message ? "border-destructive" : "border-border"}`,
                        "data-ocid": "contact.message.textarea"
                      }
                    ),
                    errors.message && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        id: "message-error",
                        className: "text-xs text-destructive",
                        role: "alert",
                        "data-ocid": "contact.message.field_error",
                        children: errors.message
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "submit",
                      disabled: sending,
                      className: "mt-1 flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium text-sm transition-smooth hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-60 disabled:cursor-not-allowed self-start",
                      "data-ocid": "contact.form.submit_button",
                      children: sending ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: "w-4 h-4 rounded-full border-2 border-primary-foreground border-t-transparent animate-spin",
                            "aria-hidden": "true"
                          }
                        ),
                        "Sending…"
                      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-4 h-4", "aria-hidden": "true" }),
                        "Send Message"
                      ] })
                    }
                  )
                ]
              }
            )
          ) })
        ] }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-16 sm:py-20 bg-muted/30",
        "data-ocid": "contact.faq.section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-widest text-primary mb-2", children: "Quick Answers" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl sm:text-4xl font-bold text-foreground", children: "Frequently Asked Questions" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-3", "data-ocid": "contact.faq.list", children: FAQS.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(FaqItem, { q: item.q, a: item.a, index: i }, item.q)) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-16 sm:py-20 bg-background",
        "data-ocid": "contact.studio.section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-2xl shadow-elevated aspect-[16/7]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: "https://images.unsplash.com/photo-1556760544-74068565f05c?w=1400&q=85&auto=format&fit=crop",
              alt: "Cosy artisan studio with pottery wheels, natural wood shelves, and warm afternoon light",
              className: "w-full h-full object-cover",
              loading: "lazy"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent flex items-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 sm:p-12", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl sm:text-3xl font-semibold text-primary-foreground drop-shadow-sm", children: "Visit our studio in the heart of the Craft Quarter" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/80 text-sm mt-1.5 drop-shadow-sm", children: "123 Artisan Lane · By appointment — weekends & select weekday afternoons" })
          ] }) })
        ] }) })
      }
    )
  ] });
}
export {
  Contact as default
};
