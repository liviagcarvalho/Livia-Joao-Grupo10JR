import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CartItem {
  name: string;
  price: string; // Ex: 'R$150,00'
  image: string;
  quantity: number;
}

interface CartContextProps {
  cartItems: CartItem[];
  addItem: (item: CartItem) => void;
  increaseQuantity: (name: string) => void;
  decreaseQuantity: (name: string) => void;
  removeItem: (name: string) => void;
  getTotal: () => number;
  clearCart: () => void; // ✅ Adicionado
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const useCart = (): CartContextProps => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart deve ser usado dentro de CartProvider');
  return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addItem = (item: CartItem) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.name === item.name);
      if (existing) {
        return prev.map((i) =>
          i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  const increaseQuantity = (name: string) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.name === name ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (name: string) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.name === name ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (name: string) => {
    setCartItems((prev) => prev.filter((item) => item.name !== name));
  };

  const getTotal = () => {
    return cartItems.reduce((acc, item) => {
      const valorNumerico = parseFloat(item.price.replace('R$', '').replace(',', '.'));
      return acc + valorNumerico * item.quantity;
    }, 0);
  };

  const clearCart = () => {
    setCartItems([]); // ✅ Zera o carrinho
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addItem, increaseQuantity, decreaseQuantity, removeItem, getTotal, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
