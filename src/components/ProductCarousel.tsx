import React, { useRef } from "react";
import styled from "styled-components";
import { ProductCardB2B, ProductCardProps } from "./ProductCard";
import allProducts from "./allProducts";
import { ChevronLeft, ChevronRight, Subtitles } from "lucide-react";
import { useNavigate } from "react-router-dom";


// Styled Components
const Section = styled.section`
  width: 100%;
  padding: 4rem 1rem;
  background-color: #f8f8f8;
  position: relative;
`;

const Title = styled.h2`
  font-family: 'Spectral', serif;
  font-weight: 700;
  font-size: 40px;
  color: #1d311f;
  text-align: center;
  margin-bottom: 2rem;
`;

const SubTitle = styled.p`
  font-family: 'Spectral', serif;
  font-weight: 400;
  font-size: 30px;
  color: #1d311f;
  text-align: center;
  margin-top: -2rem;
  margin-bottom: 2rem;
`;

const ViewMoreButton = styled.button`
  background-color: #1d311f;
  color: white;
  padding: 0.5rem 1.5rem;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 14px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;
  margin-bottom: 1rem;
  margin-left: 2rem;

  &:hover {
    background-color: #16341c;
  }
`;

const Carousel = styled.div`
  display: flex;
  gap: 1.5rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  padding-bottom: 1rem;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const CarouselItem = styled.div`
  flex: 0 0 auto;
  scroll-snap-align: start;
`;

const Arrow = styled.button<{ left?: boolean }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ left }) => (left ? "left: 10px;" : "right: 10px;")}
  background-color: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 999px;
  padding: 0.5rem;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
  z-index: 10;
  cursor: pointer;

  &:hover {
    background-color: #e4e4e4;
  }

  svg {
    color: #1d311f;
    width: 24px;
    height: 24px;
  }
`;

const ProductCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: direction === "left" ? -320 : 320,
        behavior: "smooth",
      });
    }
  };
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/produtos', {
      state: { filtroInicial: 'mais-vendidos' }
    });
  };

  return (
    <Section>
      <Title>Essenciais para o seu escritório</Title>
      <SubTitle>
        Planeje cada detalhe
      </SubTitle>
      <ViewMoreButton onClick={handleNavigate}>
        Ver mais vendidos
      </ViewMoreButton>
    
      <Arrow left onClick={() => scroll("left")}>
        <ChevronLeft />
      </Arrow>
      <Arrow onClick={() => scroll("right")}>
        <ChevronRight />
      </Arrow>

      <Carousel ref={carouselRef}>
        {allProducts.map((product: ProductCardProps, index: number) => (
          <CarouselItem key={index}>
            <ProductCardB2B {...product} />
          </CarouselItem>
        ))}
      </Carousel>
    </Section>
  );
};

export default ProductCarousel;

