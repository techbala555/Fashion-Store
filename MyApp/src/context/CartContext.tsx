// context/CartContext.tsx

import React, { createContext, useContext, useState, ReactNode } from 'react';

export type ProductType = {
  id: string;
  name: string;
  price: string;
  image: { uri: string };
};

type CartContextType = {
  cartItems: ProductType[];
  addToCart: (product: ProductType) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
};

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<ProductType[]>([]);

  const addToCart = (product: ProductType) => {
    setCartItems((prev) => [...prev, product]);
  };

  const removeFromCart = (id: string) => {
    setCartItems((prev) => prev.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
