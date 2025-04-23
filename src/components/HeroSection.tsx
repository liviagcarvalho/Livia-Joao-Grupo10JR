import React from "react";
import styled from "styled-components";
import cooworkingHomePage from "../assets/HomePage/PrincipalHome.png";
import { useNavigate } from 'react-router-dom';

// Wrapper principal da seção
const Section = styled.section`
  position: relative;
  width: 100%;
  height: 757px; 
  padding: 0 1rem;
  overflow: hidden;
`;
// Imagem de fundo
const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
`;

// Gradiente branco com blur à esquerda
const GradientVeil = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 1400px; /* valor máximo */
  background: linear-gradient(to right, rgba(255, 255, 255, 0.8), transparent);
  border-top-right-radius: 300px;
  border-bottom-right-radius: 300px;
  filter: blur(8px);
  z-index: 10;

  @media (max-width: 1280px) {
    width: 1300px;
  }
  @media (max-width: 1024px) {
    width: 1200px;
  }
  @media (max-width: 768px) {
    width: 1100px;
  }
  @media (max-width: 640px) {
    width: 1000px;
  }
`;

// Camada de conteúdo acima do véu
const Content = styled.div`
  position: absolute;
  z-index: 20;
  color: #1d311f;
  width: 100%;
  max-width: 556px;

  top: 147px;
  left: 80px;

  @media (max-width: 1024px) {
    top: 112px;
    left: 48px;
  }

  @media (max-width: 768px) {
    top: 96px;
    left: 32px;
  }

  @media (max-width: 640px) {
    top: 64px;
    left: 16px;
  }
`;

const Title = styled.h1`
  font-family: 'Spectral', serif;
  font-weight: 700;
  font-size: 40px;
  line-height: 1.2;
  margin-bottom: 1rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 1024px) {
    font-size: 36px;
  }

  @media (max-width: 768px) {
    font-size: 32px;
  }

  @media (max-width: 640px) {
    font-size: 28px;
  }
`;

const Subtitle = styled.p`
  font-family: 'Spectral', serif;
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 2rem;

  @media (max-width: 1024px) {
    font-size: 22px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 640px) {
    font-size: 18px;
  }
`;

const CTAButton = styled.button`
  background-color: #1d311f;
  color: white;
  font-family: 'Spectral', serif;
  font-weight: 700;
  font-size: 24px;
  border: none;
  border-radius: 30px;
  cursor: pointer;

  width: 257px;
  height: 55px;

  @media (max-width: 1024px) {
    font-size: 22px;
    width: 240px;
    height: 52px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
    width: 220px;
    height: 48px;
  }

  @media (max-width: 640px) {
    font-size: 18px;
    width: 200px;
    height: 45px;
  }
`;

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <Section>
      <BackgroundImage src={cooworkingHomePage} alt="Ambiente de trabalho" />
      <GradientVeil />
      <Content>
        <Title>
          Transforme Seu Espaço, <br /> Inspire Produtividade
        </Title>
        <Subtitle>
          Ambientes que aliam design inteligente, conforto e eficiência
        </Subtitle>
        <CTAButton onClick={() => navigate('/produtos', { state: { filtroInicial: 'ver-tudo' } })}>
          CONHEÇA AGORA
        </CTAButton>
      </Content>
    </Section>
  );
};

export default HeroSection;
