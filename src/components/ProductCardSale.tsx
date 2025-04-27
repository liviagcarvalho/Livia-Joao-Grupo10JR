import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useCart } from '../components/CartContext';

export interface ProductCardProps {
  name: string;
  pricenormal: string;
  pricedesconto: string;
  images?: Record<string, string>;
  colors: string[];
  abrirCarrinho?: () => void;
}

export const ProductCardSale = ({
  name,
  pricenormal,
  pricedesconto,
  images = {},
  colors,
  abrirCarrinho,
}: ProductCardProps) => {
  const { addItem } = useCart();
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const displayImage =
    images[selectedColor] ?? Object.values(images)[0] ?? '';

  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem({
      name,
      price: pricedesconto,
      image: displayImage,
      quantity: 1,
    });
    abrirCarrinho?.();
  };

  const detalheLink = `/produto-b2c/${encodeURIComponent(name)}`;

  return (
    <Card>
      <Badge>SALE</Badge>
      <Link to={detalheLink}>
        <ProductImage src={displayImage} alt={name} />
      </Link>

      <Info>
        <Link to={detalheLink} style={{ textDecoration: 'none', color: 'inherit' }}>
          <ProductName>{name}</ProductName>
        </Link>
        <OriginalPrice>{pricenormal}</OriginalPrice>
        <DiscountPrice>{pricedesconto}</DiscountPrice>
      </Info>

      <ColorPicker>
        {colors.length > 1 &&
          colors.map((cor) => (
            <ColorDot
              key={cor}
              color={cor}
              selected={selectedColor === cor}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedColor(cor);
              }}
            />
          ))}
      </ColorPicker>

      <AddButton onClick={handleButtonClick}>
        ADICIONAR AO CARRINHO
      </AddButton>
    </Card>
  );
};

// --- Styled Components ---

const Card = styled.div`
  position: relative;
  background-color: white;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  padding: 1rem;
  width: 100%;
  max-width: 300px;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
`;

const Badge = styled.span`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  background: #e60023;
  color: white;
  font-size: 0.75rem;
  font-weight: bold;
  padding: 0.25rem 0.5rem;
  border-radius: 999px;
  text-transform: uppercase;
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
  margin-bottom: 1rem;
`;

const ProductName = styled.h3`
  font-size: 15px;
  font-weight: 500;
  text-align: center;
`;

const OriginalPrice = styled.p`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  color: #6b7280;
  text-decoration: line-through;
`;

const DiscountPrice = styled.p`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;

const ColorPicker = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  height: 32px;
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

const AddButton = styled.button`
  background-color: #DDE3DC;
  color: #1D311F;
  width: 100%;
  padding: 0.75rem;
  font-size: 14px;
  font-weight: 600;
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #C7D8BF;
  }
`;
