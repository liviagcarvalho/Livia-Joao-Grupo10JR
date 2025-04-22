import React from 'react';
import styled from 'styled-components';
import { X, Plus, Minus } from 'lucide-react';
import { useCart } from './CartContext';

interface CarrinhoProps {
  isOpen: boolean;
  onClose: () => void;
}

const Overlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  z-index: 1000;
`;

const CarrinhoWrapper = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 400px;
  height: 100vh;
  background-color: #fff;
  box-shadow: -2px 0 6px rgba(0, 0, 0, 0.1);
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;
  z-index: 1001;
  display: flex;
  flex-direction: column;
`;

const CarrinhoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  font-family: 'Spectral', serif;
  font-size: 24px;
  font-weight: 700;
  color: #1D311F;
  border-bottom: 1px solid #eaeaea;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const CarrinhoBody = styled.div`
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const ItemInfo = styled.div`
  flex: 1;
`;

const ItemImage = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 8px;
  object-fit: cover;
`;

const ItemName = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 0.25rem;
`;

const ItemPrice = styled.p`
  font-size: 14px;
  color: #555;
`;

const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const QuantityButton = styled.button`
  background-color: #9CAF88;
  border: none;
  border-radius: 4px;
  color: #fff;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Total = styled.div`
  padding: 1rem;
  border-top: 1px solid #eaeaea;
  font-size: 18px;
  font-weight: bold;
  color: #1D311F;
  text-align: right;
`;

const CheckoutButton = styled.button`
  background-color: #1D311F;
  color: #fff;
  font-size: 16px;
  padding: 0.75rem 1.5rem;
  margin: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.2s;

  &:hover {
    background-color: #16341c;
  }
`;

const Carrinho = ({ isOpen, onClose }: CarrinhoProps) => {
  const { cartItems, increaseQuantity, decreaseQuantity, getTotal } = useCart();

  return (
    <>
      <Overlay isOpen={isOpen} onClick={onClose} />
      <CarrinhoWrapper isOpen={isOpen}>
        <CarrinhoHeader>
          Meu Carrinho
          <CloseButton onClick={onClose}>
            <X size={24} color="#1D311F" />
          </CloseButton>
        </CarrinhoHeader>

        <CarrinhoBody>
          {cartItems.length === 0 ? (
            <p>Seu carrinho está vazio </p>
          ) : (
            cartItems.map((item) => (
              <Item key={item.name}>
                <ItemImage src={item.image} alt={item.name} />
                <ItemInfo>
                  <ItemName>{item.name}</ItemName>
                  <ItemPrice>{item.price}</ItemPrice>
                </ItemInfo>
                <QuantityControls>
                  <QuantityButton onClick={() => decreaseQuantity(item.name)}>
                    <Minus size={16} />
                  </QuantityButton>
                  <span>{item.quantity}</span>
                  <QuantityButton onClick={() => increaseQuantity(item.name)}>
                    <Plus size={16} />
                  </QuantityButton>
                </QuantityControls>
              </Item>
            ))
          )}
        </CarrinhoBody>

        <Total>Total: R$ {getTotal().toFixed(2).replace('.', ',')}</Total>
        <CheckoutButton>CHECKOUT</CheckoutButton>
      </CarrinhoWrapper>
    </>
  );
};

export default Carrinho;
