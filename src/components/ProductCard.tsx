import React, { useState } from 'react';
import styled from 'styled-components';
import { useCart } from '../components/CartContext';

export interface ProductCardProps {
  name: string;
  price: string;
  images?: Record<string, string | undefined>; // imagens por cor
  image?: string; // fallback
  colors: string[];
  modo?: 'b2b' | 'b2c';
  abrirCarrinho?:  () => void;
}

// Styled Components
const Card = styled.div`
  background-color: white;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  padding: 1rem;
  width: 100%;
  max-width: 300px;
  min-height: 460px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  border: 1px solid #1d311f;
  border-radius: 0.375rem;
  margin-bottom: 1rem;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
`;

const ProductName = styled.h3`
  font-size: 15px;
  font-weight: 500;
  text-align: center;
`;

const ProductPrice = styled.p`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 0.5rem;
`;

const ColorPicker = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
`;

const ColorDot = styled.button<{ color: string; selected: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 9999px;
  border: ${({ color }) => (color === '#ffffff' ? '1px solid #d1d5db' : 'none')};
  background-color: ${({ color }) => color};
  outline: ${({ selected }) => (selected ? '2px solid #1D311F' : 'none')};
  cursor: pointer;
`;

const MoreButton = styled.button<{ modo?: 'b2b' | 'b2c' }>`
  background-color: ${({ modo }) => (modo === 'b2c' ? '#9CAF88' : '#1D311F')};
  color: ${({ modo }) => (modo === 'b2c' ? '#1D311F' : '#FFFFFF')};
  width: ${({ modo }) => (modo === 'b2c' ? '100%' : '100%')};
  padding: ${({ modo }) => (modo === 'b2c' ? '0.75rem' : '0.5rem')};
  font-size: ${({ modo }) => (modo === 'b2c' ? '14px' : '14px')};
  font-weight: 600;
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;
  align-self: center;

  &:hover {
    background-color: ${({ modo }) => (modo === 'b2c' ? '#859872' : '#16341c')};
  }
`;

// Componente
export const ProductCard = ({
  name,
  price,
  images,
  image,
  colors,
  modo = 'b2b',
  abrirCarrinho,
}: ProductCardProps) => {
  const { addItem } = useCart();

  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const displayImage =
    images && selectedColor in images
      ? images[selectedColor]
      : image ?? Object.values(images ?? {})[0];

  return (
    <Card>
      <ProductImage src={displayImage} alt={name} />

      <Info>
        <ProductName>{name}</ProductName>
        <ProductPrice>{price}</ProductPrice>
      </Info>

      {colors.length > 1 && (
        <ColorPicker>
          {colors.map((cor) => (
            <ColorDot
              key={cor}
              color={cor}
              selected={selectedColor === cor}
              onClick={() => setSelectedColor(cor)}
            />
          ))}
        </ColorPicker>
      )}
      <MoreButton
        modo={modo}
        onClick={() => {
          if (modo === 'b2c') {
            addItem({
              name,
              price,
              image: displayImage || '', // pega a imagem da cor selecionada
              quantity: 1,
            });
              abrirCarrinho?.(); // abre o carrinho se a função for passada
            }
        }}
>
  {modo === 'b2c' ? 'ADICIONAR AO CARRINHO' : 'SAIBA MAIS'}
</MoreButton>
    </Card>
  );
};
