import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
} from "react";
import type { Product, WishlistItem } from "../data/types";

interface WishlistState {
  items: WishlistItem[];
}

type WishlistAction =
  | { type: "ADD_ITEM"; product: Product }
  | { type: "REMOVE_ITEM"; productId: string };

function wishlistReducer(
  state: WishlistState,
  action: WishlistAction,
): WishlistState {
  switch (action.type) {
    case "ADD_ITEM": {
      if (state.items.some((i) => i.product.id === action.product.id))
        return state;
      return {
        items: [
          ...state.items,
          { product: action.product, addedAt: new Date() },
        ],
      };
    }
    case "REMOVE_ITEM":
      return {
        items: state.items.filter((i) => i.product.id !== action.productId),
      };
    default:
      return state;
  }
}

interface WishlistContextValue {
  wishlistItems: WishlistItem[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
  toggleWishlist: (product: Product) => void;
  isInWishlist: (productId: string) => boolean;
}

const WishlistContext = createContext<WishlistContextValue | null>(null);

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(wishlistReducer, { items: [] });

  const addToWishlist = useCallback((product: Product) => {
    dispatch({ type: "ADD_ITEM", product });
  }, []);

  const removeFromWishlist = useCallback((productId: string) => {
    dispatch({ type: "REMOVE_ITEM", productId });
  }, []);

  const toggleWishlist = useCallback(
    (product: Product) => {
      const isIn = state.items.some((i) => i.product.id === product.id);
      dispatch(
        isIn
          ? { type: "REMOVE_ITEM", productId: product.id }
          : { type: "ADD_ITEM", product },
      );
    },
    [state.items],
  );

  const isInWishlist = useCallback(
    (productId: string) => {
      return state.items.some((i) => i.product.id === productId);
    },
    [state.items],
  );

  const value = useMemo<WishlistContextValue>(
    () => ({
      wishlistItems: state.items,
      addToWishlist,
      removeFromWishlist,
      toggleWishlist,
      isInWishlist,
    }),
    [
      state.items,
      addToWishlist,
      removeFromWishlist,
      toggleWishlist,
      isInWishlist,
    ],
  );

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error("useWishlist must be used within WishlistProvider");
  return ctx;
}
