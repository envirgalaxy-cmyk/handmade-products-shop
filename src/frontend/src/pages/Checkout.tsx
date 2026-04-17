import { Link } from "@tanstack/react-router";
import {
  CheckCircle2,
  ChevronRight,
  CreditCard,
  Lock,
  ShoppingBag,
  Truck,
} from "lucide-react";
import { useEffect, useState } from "react";
import { PageTransition } from "../components/shared/PageTransition";
import { useCart } from "../context/CartContext";

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  cardNumber: string;
  expiry: string;
  cvv: string;
}

export default function Checkout() {
  useEffect(() => {
    document.title = "Checkout — Artisan & Co.";
  }, []);
  const { cartItems, cartTotal, clearCart } = useCart();
  const [step, setStep] = useState<"shipping" | "payment" | "confirmation">(
    "shipping",
  );
  const [form, setForm] = useState<FormState>({
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
    cvv: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("confirmation");
    clearCart();
  };

  const shipping = cartTotal >= 75 ? 0 : 8.99;
  const tax = cartTotal * 0.08;
  const total = cartTotal + shipping + tax;

  if (step === "confirmation") {
    return (
      <PageTransition>
        <div
          data-ocid="checkout.confirmation_section"
          className="min-h-[70vh] flex items-center justify-center px-4"
        >
          <div className="max-w-md w-full text-center">
            <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={32} className="text-secondary-foreground" />
            </div>
            <h1 className="font-display text-3xl text-foreground mb-3">
              Order Confirmed!
            </h1>
            <p className="font-body text-muted-foreground mb-6 leading-relaxed">
              Thank you for your order. We'll send a confirmation to{" "}
              {form.email}. Your handcrafted items will be prepared with care.
            </p>
            <div className="bg-card rounded-xl border border-border p-4 mb-6 text-left">
              <div className="flex items-center gap-2 mb-3">
                <Truck size={16} className="text-primary" />
                <span className="font-body text-sm font-semibold text-foreground">
                  Estimated Delivery: 5–7 business days
                </span>
              </div>
              <p className="font-body text-xs text-muted-foreground">
                Shipping to {form.address}, {form.city}, {form.state} {form.zip}
              </p>
            </div>
            <Link
              to="/"
              data-ocid="checkout.back_home_button"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-body font-semibold text-sm hover:opacity-90 transition-smooth"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </PageTransition>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
        <ShoppingBag size={48} className="text-muted-foreground/40" />
        <p className="font-display text-2xl text-foreground">
          Your cart is empty
        </p>
        <Link
          to="/shop"
          className="text-sm font-body text-primary hover:underline"
        >
          Continue Shopping →
        </Link>
      </div>
    );
  }

  return (
    <PageTransition>
      {/* Steps */}
      <div className="bg-card border-b border-border py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center justify-center gap-4 text-sm font-body">
          {[
            { key: "shipping", label: "Shipping", num: 1 },
            { key: "payment", label: "Payment", num: 2 },
          ].map((s) => (
            <div key={s.key} className="flex items-center gap-2">
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                  step === s.key
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {s.num}
              </div>
              <span
                className={
                  step === s.key
                    ? "text-foreground font-semibold"
                    : "text-muted-foreground"
                }
              >
                {s.label}
              </span>
              {s.key !== "payment" && (
                <ChevronRight size={14} className="text-muted-foreground" />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            {step === "shipping" && (
              <div data-ocid="checkout.shipping_section">
                <h2 className="font-display text-2xl text-foreground mb-6">
                  Shipping Information
                </h2>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setStep("payment");
                  }}
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-body font-medium text-foreground mb-1.5"
                      >
                        First Name *
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        data-ocid="checkout.first_name_input"
                        type="text"
                        value={form.firstName}
                        onChange={handleChange}
                        required
                        placeholder="Maria"
                        className="w-full text-sm font-body bg-card border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-body font-medium text-foreground mb-1.5"
                      >
                        Last Name *
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        data-ocid="checkout.last_name_input"
                        type="text"
                        value={form.lastName}
                        onChange={handleChange}
                        required
                        placeholder="Vasquez"
                        className="w-full text-sm font-body bg-card border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-body font-medium text-foreground mb-1.5"
                    >
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      data-ocid="checkout.email_input"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="maria@example.com"
                      className="w-full text-sm font-body bg-card border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="address"
                      className="block text-sm font-body font-medium text-foreground mb-1.5"
                    >
                      Street Address *
                    </label>
                    <input
                      id="address"
                      name="address"
                      data-ocid="checkout.address_input"
                      type="text"
                      value={form.address}
                      onChange={handleChange}
                      required
                      placeholder="123 Artisan Lane"
                      className="w-full text-sm font-body bg-card border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
                    />
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <div className="col-span-2 sm:col-span-1">
                      <label
                        htmlFor="city"
                        className="block text-sm font-body font-medium text-foreground mb-1.5"
                      >
                        City *
                      </label>
                      <input
                        id="city"
                        name="city"
                        data-ocid="checkout.city_input"
                        type="text"
                        value={form.city}
                        onChange={handleChange}
                        required
                        placeholder="Portland"
                        className="w-full text-sm font-body bg-card border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="state"
                        className="block text-sm font-body font-medium text-foreground mb-1.5"
                      >
                        State *
                      </label>
                      <input
                        id="state"
                        name="state"
                        data-ocid="checkout.state_input"
                        type="text"
                        value={form.state}
                        onChange={handleChange}
                        required
                        placeholder="OR"
                        className="w-full text-sm font-body bg-card border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="zip"
                        className="block text-sm font-body font-medium text-foreground mb-1.5"
                      >
                        ZIP *
                      </label>
                      <input
                        id="zip"
                        name="zip"
                        data-ocid="checkout.zip_input"
                        type="text"
                        value={form.zip}
                        onChange={handleChange}
                        required
                        placeholder="97201"
                        className="w-full text-sm font-body bg-card border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    data-ocid="checkout.continue_to_payment_button"
                    className="w-full py-3.5 bg-primary text-primary-foreground rounded-full font-body font-semibold text-sm hover:opacity-90 transition-smooth"
                  >
                    Continue to Payment
                  </button>
                </form>
              </div>
            )}

            {step === "payment" && (
              <div data-ocid="checkout.payment_section">
                <button
                  type="button"
                  onClick={() => setStep("shipping")}
                  className="flex items-center gap-1 text-sm font-body text-muted-foreground hover:text-foreground mb-6 transition-smooth"
                >
                  ← Back to Shipping
                </button>
                <h2 className="font-display text-2xl text-foreground mb-6">
                  Payment Information
                </h2>
                <div className="flex items-center gap-2 mb-6 text-xs font-body text-muted-foreground">
                  <Lock size={12} className="text-secondary-foreground" />
                  <span>Your payment information is secure and encrypted</span>
                </div>
                <form onSubmit={handlePlaceOrder} className="space-y-5">
                  <div>
                    <label
                      htmlFor="cardNumber"
                      className="block text-sm font-body font-medium text-foreground mb-1.5"
                    >
                      Card Number *
                    </label>
                    <div className="relative">
                      <CreditCard
                        size={16}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                      />
                      <input
                        id="cardNumber"
                        name="cardNumber"
                        data-ocid="checkout.card_number_input"
                        type="text"
                        value={form.cardNumber}
                        onChange={handleChange}
                        required
                        placeholder="4242 4242 4242 4242"
                        maxLength={19}
                        className="w-full text-sm font-body bg-card border border-border rounded-xl pl-10 pr-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="expiry"
                        className="block text-sm font-body font-medium text-foreground mb-1.5"
                      >
                        Expiry *
                      </label>
                      <input
                        id="expiry"
                        name="expiry"
                        data-ocid="checkout.expiry_input"
                        type="text"
                        value={form.expiry}
                        onChange={handleChange}
                        required
                        placeholder="MM / YY"
                        maxLength={7}
                        className="w-full text-sm font-body bg-card border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="cvv"
                        className="block text-sm font-body font-medium text-foreground mb-1.5"
                      >
                        CVV *
                      </label>
                      <input
                        id="cvv"
                        name="cvv"
                        data-ocid="checkout.cvv_input"
                        type="text"
                        value={form.cvv}
                        onChange={handleChange}
                        required
                        placeholder="123"
                        maxLength={4}
                        className="w-full text-sm font-body bg-card border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    data-ocid="checkout.place_order_button"
                    className="w-full py-3.5 bg-primary text-primary-foreground rounded-full font-body font-semibold text-sm hover:opacity-90 transition-smooth flex items-center justify-center gap-2"
                  >
                    <Lock size={14} />
                    Place Order — ${total.toFixed(2)}
                  </button>
                </form>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div data-ocid="checkout.order_summary_panel">
            <div className="bg-card rounded-2xl border border-border p-5 sticky top-20">
              <h3 className="font-display text-lg text-foreground mb-4">
                Order Summary
              </h3>
              <div className="space-y-3 mb-4">
                {cartItems.map((item) => (
                  <div key={item.product.id} className="flex gap-3 items-start">
                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-body text-xs font-semibold text-foreground line-clamp-2 leading-tight">
                        {item.product.name}
                      </p>
                      <p className="text-xs font-body text-muted-foreground">
                        Qty: {item.quantity}
                      </p>
                    </div>
                    <p className="font-body text-sm font-bold text-foreground flex-shrink-0">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>
              <div className="border-t border-border pt-4 space-y-2 text-sm font-body">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="text-foreground">
                    ${cartTotal.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span
                    className={
                      shipping === 0
                        ? "text-secondary-foreground font-semibold"
                        : "text-foreground"
                    }
                  >
                    {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax (8%)</span>
                  <span className="text-foreground">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between border-t border-border pt-2 mt-2">
                  <span className="font-bold text-foreground">Total</span>
                  <span className="font-display text-lg text-foreground">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>
              {cartTotal < 75 && (
                <p className="text-xs font-body text-muted-foreground mt-3 bg-muted rounded-lg p-2">
                  Add ${(75 - cartTotal).toFixed(2)} more for free shipping
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
