import { useNavigate } from "@tanstack/react-router";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { useCart } from "../../context/CartContext";

export function CartDrawer() {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    cartTotal,
    cartCount,
    isCartOpen,
    setCartOpen,
  } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    setCartOpen(false);
    navigate({ to: "/checkout" });
  };

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-foreground/30 backdrop-blur-sm z-40 animate-fade-in"
        onClick={() => setCartOpen(false)}
        onKeyDown={(e) => e.key === "Escape" && setCartOpen(false)}
        role="presentation"
        aria-hidden="true"
      />
      {/* Drawer */}
      <dialog
        data-ocid="cart.sheet"
        open
        className="fixed right-0 top-0 h-full w-full sm:w-[400px] bg-card border-l border-border z-50 flex flex-col shadow-elevated animate-slide-up p-0 max-w-none"
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <div className="flex items-center gap-2">
            <ShoppingBag size={20} className="text-primary" />
            <h2 className="font-display text-lg text-foreground">Your Cart</h2>
            {cartCount > 0 && (
              <span className="bg-primary text-primary-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>
          <button
            type="button"
            data-ocid="cart.close_button"
            onClick={() => setCartOpen(false)}
            aria-label="Close cart"
            className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-muted transition-smooth text-muted-foreground hover:text-foreground"
          >
            <X size={18} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {cartItems.length === 0 ? (
            <div
              data-ocid="cart.empty_state"
              className="flex flex-col items-center justify-center h-full text-center gap-4 py-16"
            >
              <ShoppingBag size={48} className="text-muted-foreground/40" />
              <p className="font-display text-xl text-foreground">
                Your cart is empty
              </p>
              <p className="text-sm text-muted-foreground">
                Discover our handcrafted collection
              </p>
              <button
                type="button"
                data-ocid="cart.shop_button"
                onClick={() => {
                  setCartOpen(false);
                  navigate({ to: "/shop" });
                }}
                className="mt-2 px-6 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-body font-semibold hover:opacity-90 transition-smooth"
              >
                Shop Now
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item, idx) => (
                <div
                  key={item.product.id}
                  data-ocid={`cart.item.${idx + 1}`}
                  className="flex gap-3 bg-background rounded-lg p-3"
                >
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-body text-sm font-semibold text-foreground leading-snug line-clamp-2">
                      {item.product.name}
                    </p>
                    <p className="font-body text-sm text-primary font-bold mt-1">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        type="button"
                        data-ocid={`cart.decrement_button.${idx + 1}`}
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity - 1)
                        }
                        className="w-6 h-6 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-smooth"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={10} />
                      </button>
                      <span className="text-sm font-body w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        data-ocid={`cart.increment_button.${idx + 1}`}
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity + 1)
                        }
                        className="w-6 h-6 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-smooth"
                        aria-label="Increase quantity"
                      >
                        <Plus size={10} />
                      </button>
                      <button
                        type="button"
                        data-ocid={`cart.delete_button.${idx + 1}`}
                        onClick={() => removeFromCart(item.product.id)}
                        className="ml-auto w-6 h-6 rounded-full flex items-center justify-center text-muted-foreground hover:text-destructive transition-smooth"
                        aria-label="Remove item"
                      >
                        <Trash2 size={12} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t border-border px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-body text-muted-foreground">Subtotal</span>
              <span className="font-display text-lg font-semibold text-foreground">
                ${cartTotal.toFixed(2)}
              </span>
            </div>
            <p className="text-xs text-muted-foreground">
              Shipping & taxes calculated at checkout
            </p>
            <button
              type="button"
              data-ocid="cart.checkout_button"
              onClick={handleCheckout}
              className="w-full bg-primary text-primary-foreground py-3.5 rounded-full font-body font-semibold text-sm hover:opacity-90 transition-smooth"
            >
              Proceed to Checkout
            </button>
            <button
              type="button"
              data-ocid="cart.continue_shopping_button"
              onClick={() => setCartOpen(false)}
              className="w-full text-sm text-muted-foreground hover:text-foreground transition-smooth text-center"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </dialog>
    </>
  );
}
