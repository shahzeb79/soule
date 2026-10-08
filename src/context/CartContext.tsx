import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, Product, ProductColorway, ProductSize } from '../types';

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addToCart: (product: Product, colorway: ProductColorway, size: ProductSize, quantity?: number) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, delta: number) => void;
  clearCart: () => void;
  totalItemsCount: number;
  subtotalCHF: number;
  discountRate: number;
  discountCode: string;
  applyDiscountCode: (code: string) => { success: boolean; message: string };
  shippingCostCHF: number;
  freeShippingThresholdCHF: number;
  totalCHF: number;
  lastAddedItem: CartItem | null;
  clearLastAddedItem: () => void;
}

const STORAGE_KEY = 'soule_persistent_cart_v1';
const FREE_SHIPPING_THRESHOLD = 150.0;
const STANDARD_SHIPPING_FEE = 9.90;

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isOpen, setIsOpen] = useState(false);
  const [discountCode, setDiscountCode] = useState('');
  const [discountRate, setDiscountRate] = useState(0);
  const [lastAddedItem, setLastAddedItem] = useState<CartItem | null>(null);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [items]);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
  const clearLastAddedItem = () => setLastAddedItem(null);

  const addToCart = (
    product: Product,
    colorway: ProductColorway,
    size: ProductSize,
    quantity: number = 1
  ) => {
    const existingIndex = items.findIndex(
      (item) =>
        item.product.id === product.id &&
        item.selectedColorway.id === colorway.id &&
        item.selectedSize.size === size.size
    );

    let updatedList: CartItem[];
    let addedCartItem: CartItem;

    if (existingIndex > -1) {
      updatedList = [...items];
      updatedList[existingIndex].quantity += quantity;
      addedCartItem = updatedList[existingIndex];
    } else {
      const newItem: CartItem = {
        cartItemId: `${product.id}-${colorway.id}-${size.size}-${Date.now()}`,
        product,
        selectedColorway: colorway,
        selectedSize: size,
        quantity
      };
      updatedList = [newItem, ...items];
      addedCartItem = newItem;
    }

    setItems(updatedList);
    setLastAddedItem(addedCartItem);
    setIsOpen(true);
  };

  const removeFromCart = (cartItemId: string) => {
    setItems((prev) => prev.filter((i) => i.cartItemId !== cartItemId));
  };

  const updateQuantity = (cartItemId: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((item) => {
          if (item.cartItemId === cartItemId) {
            const nextQty = item.quantity + delta;
            return nextQty > 0 ? { ...item, quantity: nextQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const applyDiscountCode = (code: string) => {
    const clean = code.trim().toUpperCase();
    if (clean === 'SOULE10') {
      setDiscountCode('SOULE10');
      setDiscountRate(0.1);
      return { success: true, message: '10% discount applied!' };
    }
    if (clean === 'SWISSRUNNER' || clean === 'RUNFAST') {
      setDiscountCode(clean);
      setDiscountRate(0.15);
      return { success: true, message: '15% runner VIP discount applied!' };
    }
    return { success: false, message: 'Invalid promo code. Try "SOULE10"' };
  };

  const totalItemsCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const subtotalCHF = items.reduce(
    (sum, item) => sum + item.product.priceCHF * item.quantity,
    0
  );

  const discountAmountCHF = subtotalCHF * discountRate;
  const netSubtotal = subtotalCHF - discountAmountCHF;

  const shippingCostCHF =
    subtotalCHF === 0 || netSubtotal >= FREE_SHIPPING_THRESHOLD
      ? 0
      : STANDARD_SHIPPING_FEE;

  const totalCHF = Math.max(0, netSubtotal + shippingCostCHF);

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        openCart,
        closeCart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItemsCount,
        subtotalCHF,
        discountRate,
        discountCode,
        applyDiscountCode,
        shippingCostCHF,
        freeShippingThresholdCHF: FREE_SHIPPING_THRESHOLD,
        totalCHF,
        lastAddedItem,
        clearLastAddedItem
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
};
