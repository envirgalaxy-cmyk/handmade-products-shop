import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Suspense, lazy } from "react";
import { Layout } from "./components/layout/Layout";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";

const HomePage = lazy(() => import("./pages/Home"));
const ShopPage = lazy(() => import("./pages/Shop"));
const ProductDetailPage = lazy(() => import("./pages/ProductDetail"));
const StoryPage = lazy(() => import("./pages/Story"));
const ReviewsPage = lazy(() => import("./pages/Reviews"));
const ContactPage = lazy(() => import("./pages/Contact"));
const CheckoutPage = lazy(() => import("./pages/Checkout"));

const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
  </div>
);

const rootRoute = createRootRoute({
  component: () => (
    <CartProvider>
      <WishlistProvider>
        <Layout>
          <Outlet />
        </Layout>
      </WishlistProvider>
    </CartProvider>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <HomePage />
    </Suspense>
  ),
});

const shopRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/shop",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <ShopPage />
    </Suspense>
  ),
});

const shopCategoryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/shop/$categorySlug",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <ShopPage />
    </Suspense>
  ),
});

const productDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/product/$id",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <ProductDetailPage />
    </Suspense>
  ),
});

const storyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/story",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <StoryPage />
    </Suspense>
  ),
});

const reviewsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/reviews",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <ReviewsPage />
    </Suspense>
  ),
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <ContactPage />
    </Suspense>
  ),
});

const checkoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/checkout",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <CheckoutPage />
    </Suspense>
  ),
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  shopRoute,
  shopCategoryRoute,
  productDetailRoute,
  storyRoute,
  reviewsRoute,
  contactRoute,
  checkoutRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
