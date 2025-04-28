import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export interface ProductCardProps {
  name: string;
  price: string;
  images?: Record<string, string | undefined>;
  image?: string;
  colors: string[];
}

export const ProductCardB2B = ({
  name,
  price,
  images,
  image,
  colors,
}: ProductCardProps) => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const displayImage =
    images && selectedColor in images
      ? images[selectedColor]!
      : image ?? Object.values(images ?? {})[0] ?? '';

  const detalheLink = `/produto/${encodeURIComponent(name)}`;

  return (
    <Card>
      <Link to={detalheLink}>
        <ProductImage src={displayImage} alt={name} />
      </Link>

      <Info>
        <Link
          to={detalheLink}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <ProductName>{name}</ProductName>
        </Link>
        <ProductPrice>{price}</ProductPrice>
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

      <SaibaMaisButton as={Link} to={detalheLink}>
        SAIBA MAIS
      </SaibaMaisButton>
    </Card>
  );
};

// --- Styled Components ---

const Card = styled.div`
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

const ProductPrice = styled.p`
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

const SaibaMaisButton = styled.button`
  background-color: #1D311F;
  color: white;
  width: 100%;
  padding: 0.75rem;
  font-size: 14px;
  font-weight: 600;
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #16371B;
  }
`;


