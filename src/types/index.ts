export type Category = 'all' | 'men' | 'women' | 'kids';

export type Activity = 
  | 'Road Running'
  | 'Trail Running'
  | 'All Day'
  | 'Speed & Racing'
  | 'Hiking & Trekking';

export type Cushioning = 'Plush' | 'Max' | 'Responsive' | 'Ultralight';

export interface ProductColorway {
  id: string;
  name: string;
  primaryColorHex: string;
  accentColorHex: string;
  image: string;
  angles?: {
    side?: string;
    perspective?: string;
    top?: string;
    sole?: string;
    front?: string;
    back?: string;
    [key: string]: string | undefined;
  };
  additionalImages?: string[];
}

export interface ProductSize {
  size: string;
  us: string;
  eu: string;
  inStock: boolean;
  stockCount?: number;
}

export interface TechnologyHighlight {
  name: string;
  description: string;
  icon?: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  subCategory: string; // e.g. "Road Running"
  gender: 'men' | 'women' | 'kids';
  activity: Activity;
  cushioning: Cushioning;
  priceCHF: number;
  isNew?: boolean;
  isBestSeller?: boolean;
  badge?: string;
  weight: string;
  heelDrop: string;
  stability: string;
  lacing: string;
  description: string;
  features: string[];
  technologies: TechnologyHighlight[];
  sustainability: {
    recycledContent: string;
    details: string;
  };
  rating: number;
  reviewCount: number;
  colorways: ProductColorway[];
  sizes: ProductSize[];
}

export interface CartItem {
  cartItemId: string;
  product: Product;
  selectedColorway: ProductColorway;
  selectedSize: ProductSize;
  quantity: number;
}

export interface FilterState {
  category: Category;
  activity: Activity[];
  cushioning: Cushioning[];
  sort: 'featured' | 'newest' | 'price-asc' | 'price-desc' | 'rating';
  searchQuery: string;
  inStockOnly: boolean;
}

export type Currency = 'PKR';

export interface CheckoutFormData {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  shippingMethod: 'standard' | 'express';
  paymentMethod: 'card' | 'apple-pay' | 'google-pay';
  cardNumber: string;
  cardExpiry: string;
  cardCvc: string;
  cardName: string;
}

export interface OrderConfirmation {
  orderNumber: string;
  date: string;
  items: CartItem[];
  subtotal: number;
  discount: number;
  shipping: number;
  total: number;
  currency: Currency;
  shippingDetails: CheckoutFormData;
  estimatedDelivery: string;
}
