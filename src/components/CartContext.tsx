//context é um meio de compartilhar informações entre vários componentes, sem precisar passar props de pais para filhos
import React, { createContext, useContext, useState, ReactNode } from 'react';

//Define como um item no carrinho deve ser
interface CartItem {
  name: string;
  price: string; // Ex: 'R$150,00'
  image: string;
  quantity: number;
}

//define quais props o carrinho vai fornecer
interface CartContextProps {
  cartItems: CartItem[];
  addItem: (item: CartItem) => void;
  increaseQuantity: (name: string) => void;
  decreaseQuantity: (name: string) => void;
  removeItem: (name: string) => void;
  getTotal: () => number;
  clearCart: () => void;
}

//cria o contexto, nesse caso, incialmente undefined, depois será preenchido pelas funções
const CartContext = createContext<CartContextProps | undefined>(undefined);

//cria o hook use cart para qualquer componente que usar o carrinho, usar esse const se nao da erro
export const useCart = (): CartContextProps => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart deve ser usado dentro de CartProvider');
  return context;
};

//Guarda o estado atual do carrinho e permite que todos os componentes no site acessem
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]); // carrinho como um array vaziao, ao clicar adicionar carrinho, chama a fuçao add item, e o produto é adicionado no cart item

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

  //acha o item pelo nome e adiciona uma quantidade
  const increaseQuantity = (name: string) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.name === name ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
//Acha pelo nome e diminui a quantidade
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
    setCartItems((prev) => prev.filter((item) => item.name !== name)); //Essa linha Remove do carrinho qualquer produto cujo name seja igual ao name informado.
  };

  const getTotal = () => {
    return cartItems.reduce((acc, item) => {
      const valorNumerico = parseFloat(item.price.replace('R$', '').replace(',', '.'));
      return acc + valorNumerico * item.quantity;
    }, 0);
  };

  const clearCart = () => {
    setCartItems([]); // Zera o carrinho
  };

  //disponibiliza as funcoes e o carrinho para todos os componentes
  return (
    <CartContext.Provider
      value={{ cartItems, addItem, increaseQuantity, decreaseQuantity, removeItem, getTotal, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
