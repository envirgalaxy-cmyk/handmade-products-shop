export interface ProductVariant {
  name: string;
  options: string[];
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  originalPrice?: number;
  categoryId: string;
  categoryName: string;
  description: string;
  materials: string[];
  images: string[];
  variants?: ProductVariant[];
  rating: number;
  reviewCount: number;
  featured?: boolean;
  badge?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  coverImage: string;
  productCount: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedVariants?: Record<string, string>;
}

export interface WishlistItem {
  product: Product;
  addedAt: Date;
}

export interface Review {
  id: string;
  customerName: string;
  location: string;
  rating: number;
  title: string;
  text: string;
  date: string;
  productName: string;
  image?: string;
  verified: boolean;
}

export interface Artisan {
  id: string;
  name: string;
  specialty: string;
  location: string;
  bio: string;
  image: string;
  yearsExperience: number;
  productsCount: number;
}
