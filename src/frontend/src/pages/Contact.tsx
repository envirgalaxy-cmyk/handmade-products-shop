import { Link } from "@tanstack/react-router";
import {
  CheckCircle2,
  ChevronDown,
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { useEffect, useState } from "react";
import { SiPinterest } from "react-icons/si";
import { PageTransition } from "../components/shared/PageTransition";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}
interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

// ---------------------------------------------------------------------------
// FAQ data
// ---------------------------------------------------------------------------
const FAQS = [
  {
    q: "Do you accept custom orders?",
    a: "Yes! We love creating personalised pieces. Share your vision — materials, dimensions, colour preferences — and one of our artisans will reply within 24 hours with a quote and estimated timeline.",
  },
  {
    q: "What is your shipping policy?",
    a: "We offer free standard shipping on all orders over $50 within the continental US. Express and international options are available at checkout. Most orders ship within 2–3 business days; you'll receive a tracking link by email.",
  },
  {
    q: "What is your return policy?",
    a: "We accept returns within 30 days of delivery for unused, undamaged items in their original packaging. Custom and personalised pieces are final sale. To start a return, email hello@artisanandco.com with your order number.",
  },
  {
    q: "Are your products sustainable?",
    a: "Absolutely. We source eco-friendly, ethically harvested materials — natural fibres, reclaimed wood, non-toxic dyes — and our packaging is 100 % compostable. Sustainability is woven into every step of our craft.",
  },
  {
    q: "Can I visit your studio?",
    a: "Yes, by appointment! We host studio visits on weekends and select weekday afternoons. Browse finished work, watch the process, and commission bespoke pieces in person. Use the form below to schedule your visit.",
  },
];

// ---------------------------------------------------------------------------
// FAQ Accordion Item
// ---------------------------------------------------------------------------
function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="bg-card rounded-xl border border-border overflow-hidden"
      data-ocid={`contact.faq.item.${index + 1}`}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-muted/50 transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        aria-expanded={open}
        data-ocid={`contact.faq.toggle.${index + 1}`}
      >
        <span className="font-display font-semibold text-sm sm:text-base text-foreground pr-4">
          {q}
        </span>
        <ChevronDown
          className={`shrink-0 w-5 h-5 text-primary transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      {/* CSS max-height accordion animation */}
      <div
        style={{
          maxHeight: open ? "300px" : "0px",
          overflow: "hidden",
          transition: "max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
          {a}
        </p>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main Page
// ---------------------------------------------------------------------------
export default function Contact() {
  useEffect(() => {
    document.title = "Contact Us — Artisan & Co.";
  }, []);

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  function validate(): FormErrors {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) {
      e.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) e.message = "Message is required.";
    return e;
  }

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function handleBlur(
    e: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    const { name } = e.target;
    const validationErrors = validate();
    setErrors((prev) => ({
      ...prev,
      [name]: validationErrors[name as keyof FormErrors],
    }));
  }

  function handleSubmit(e: React.FormEvent) {
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

  return (
    <PageTransition>
      {/* ── Page Header ─────────────────────────────────────────── */}
      <section
        className="bg-card border-b border-border py-12 sm:py-16"
        data-ocid="contact.header.section"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4"
          >
            <Link
              to="/"
              className="hover:text-primary transition-colors duration-200"
              data-ocid="contact.breadcrumb.home_link"
            >
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-foreground font-medium">Contact</span>
          </nav>

          <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground tracking-tight mb-3">
            Get in Touch
          </h1>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            We'd love to hear from you — questions, custom orders, or just to
            say hello.
          </p>
        </div>
      </section>

      {/* ── Contact Info + Form Split ────────────────────────────── */}
      <section
        className="py-16 sm:py-20 bg-background"
        data-ocid="contact.form.section"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left — Contact Information */}
            <aside
              className="lg:col-span-2 flex flex-col gap-8"
              data-ocid="contact.info.panel"
            >
              <div>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-2">
                  Studio Details
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We typically respond within 24 hours. For urgent custom
                  inquiries, give us a call!
                </p>
              </div>

              <ul className="flex flex-col gap-5">
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin
                      className="w-4 h-4 text-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-0.5">
                      Studio Address
                    </p>
                    <p className="text-foreground text-sm leading-relaxed">
                      123 Artisan Lane, Craft Quarter
                      <br />
                      CA 90210
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="mt-0.5 w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-0.5">
                      Email
                    </p>
                    <a
                      href="mailto:hello@artisanandco.com"
                      className="text-foreground text-sm hover:text-primary transition-colors duration-200"
                      data-ocid="contact.info.email_link"
                    >
                      hello@artisanandco.com
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="mt-0.5 w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone
                      className="w-4 h-4 text-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-0.5">
                      Phone
                    </p>
                    <a
                      href="tel:+15552345678"
                      className="text-foreground text-sm hover:text-primary transition-colors duration-200"
                      data-ocid="contact.info.phone_link"
                    >
                      +1 (555) 234-5678
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="mt-0.5 w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock
                      className="w-4 h-4 text-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-0.5">
                      Studio Hours
                    </p>
                    <p className="text-foreground text-sm">
                      Mon–Sat: 9am–6pm PST
                    </p>
                  </div>
                </li>
              </ul>

              {/* Social Links */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                  Follow Along
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-smooth"
                    data-ocid="contact.social.instagram_link"
                  >
                    <Instagram className="w-4 h-4" aria-hidden="true" />
                  </a>
                  <a
                    href="https://pinterest.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Pinterest"
                    className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-smooth"
                    data-ocid="contact.social.pinterest_link"
                  >
                    <SiPinterest className="w-4 h-4" aria-hidden="true" />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-smooth"
                    data-ocid="contact.social.facebook_link"
                  >
                    <Facebook className="w-4 h-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </aside>

            {/* Right — Contact Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                /* Success State */
                <div
                  className="h-full flex flex-col items-center justify-center text-center gap-5 py-16 px-8 bg-card rounded-2xl border border-border"
                  data-ocid="contact.form.success_state"
                >
                  <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                    <CheckCircle2
                      className="w-8 h-8 text-secondary-foreground"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-muted-foreground leading-relaxed max-w-sm">
                      Thank you! We'll be in touch soon. Our team aims to reply
                      within 24 hours.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        name: "",
                        email: "",
                        subject: "General Inquiry",
                        message: "",
                      });
                    }}
                    className="mt-2 text-sm text-primary underline underline-offset-2 hover:no-underline transition-smooth"
                    data-ocid="contact.form.send_another_button"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                /* Contact Form */
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="bg-card rounded-2xl border border-border p-7 sm:p-9 flex flex-col gap-6"
                  data-ocid="contact.form"
                >
                  <h2 className="font-display text-2xl font-semibold text-foreground">
                    Send a Message
                  </h2>

                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="contact-name"
                      className="text-sm font-medium text-foreground"
                    >
                      Full Name{" "}
                      <span className="text-primary" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Jane Doe"
                      aria-describedby={errors.name ? "name-error" : undefined}
                      aria-invalid={!!errors.name}
                      className={`h-11 w-full rounded-xl border px-4 text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors duration-200 ${errors.name ? "border-destructive" : "border-border"}`}
                      data-ocid="contact.name.input"
                    />
                    {errors.name && (
                      <p
                        id="name-error"
                        className="text-xs text-destructive"
                        role="alert"
                        data-ocid="contact.name.field_error"
                      >
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="contact-email"
                      className="text-sm font-medium text-foreground"
                    >
                      Email Address{" "}
                      <span className="text-primary" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="jane@example.com"
                      aria-describedby={
                        errors.email ? "email-error" : undefined
                      }
                      aria-invalid={!!errors.email}
                      className={`h-11 w-full rounded-xl border px-4 text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors duration-200 ${errors.email ? "border-destructive" : "border-border"}`}
                      data-ocid="contact.email.input"
                    />
                    {errors.email && (
                      <p
                        id="email-error"
                        className="text-xs text-destructive"
                        role="alert"
                        data-ocid="contact.email.field_error"
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Subject */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="contact-subject"
                      className="text-sm font-medium text-foreground"
                    >
                      Subject
                    </label>
                    <select
                      id="contact-subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="h-11 w-full rounded-xl border border-border px-4 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors duration-200 cursor-pointer"
                      data-ocid="contact.subject.select"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Custom Order">Custom Order</option>
                      <option value="Wholesale">Wholesale</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="contact-message"
                      className="text-sm font-medium text-foreground"
                    >
                      Message{" "}
                      <span className="text-primary" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Tell us what's on your mind…"
                      aria-describedby={
                        errors.message ? "message-error" : undefined
                      }
                      aria-invalid={!!errors.message}
                      className={`w-full rounded-xl border px-4 py-3 text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors duration-200 resize-y min-h-[120px] ${errors.message ? "border-destructive" : "border-border"}`}
                      data-ocid="contact.message.textarea"
                    />
                    {errors.message && (
                      <p
                        id="message-error"
                        className="text-xs text-destructive"
                        role="alert"
                        data-ocid="contact.message.field_error"
                      >
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={sending}
                    className="mt-1 flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium text-sm transition-smooth hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-60 disabled:cursor-not-allowed self-start"
                    data-ocid="contact.form.submit_button"
                  >
                    {sending ? (
                      <>
                        <span
                          className="w-4 h-4 rounded-full border-2 border-primary-foreground border-t-transparent animate-spin"
                          aria-hidden="true"
                        />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" aria-hidden="true" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ──────────────────────────────────────────── */}
      <section
        className="py-16 sm:py-20 bg-muted/30"
        data-ocid="contact.faq.section"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
              Quick Answers
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="flex flex-col gap-3" data-ocid="contact.faq.list">
            {FAQS.map((item, i) => (
              <FaqItem key={item.q} q={item.q} a={item.a} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Studio Image / Map Visual ────────────────────────────── */}
      <section
        className="py-16 sm:py-20 bg-background"
        data-ocid="contact.studio.section"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl shadow-elevated aspect-[16/7]">
            <img
              src="https://images.unsplash.com/photo-1556760544-74068565f05c?w=1400&q=85&auto=format&fit=crop"
              alt="Cosy artisan studio with pottery wheels, natural wood shelves, and warm afternoon light"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {/* Gradient overlay with caption */}
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent flex items-end">
              <div className="p-8 sm:p-12">
                <p className="font-display text-2xl sm:text-3xl font-semibold text-primary-foreground drop-shadow-sm">
                  Visit our studio in the heart of the Craft Quarter
                </p>
                <p className="text-primary-foreground/80 text-sm mt-1.5 drop-shadow-sm">
                  123 Artisan Lane · By appointment — weekends &amp; select
                  weekday afternoons
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
