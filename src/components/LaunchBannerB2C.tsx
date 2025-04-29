import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import apoiamonitor from "../assets/HomePage/apoiamonitor.png";

const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 1rem;
`;

const Title = styled.h2`
  font-family: 'Spectral', serif;
  font-weight: 600;
  font-size: 40px;
  color: #1d311f;
  text-align: center;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  font-family: 'Spectral', serif;
  font-weight: 500;
  font-size: 28px;
  color: #1d311f;
  text-align: center;
  margin-bottom: 3rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: fit-content;
`;

const ProductImage = styled.img`
  width: 420px;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const NewTag = styled.div`
  position: absolute;
  top: -20px;
  right: -15px;
  background-color: #b4d3b2;
  color: #1d311f;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 24px;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #d0d0d0;
`;

const InfoBox = styled.div`
  background-color: #f1f7f3;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem 2rem;
  width: 420px;
  text-align: center;

  @media (min-width: 1024px) {
    text-align: left;
  }
`;

const ProductTitle = styled.h3`
  font-family: 'Inter', sans-serif;
  font-size: 40px;
  color: black;
  line-height: 1.2;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1024px) {
    align-items: flex-start;
  }
`;

const ProductDesc = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 20px;
  color: black;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

// Usamos Link do React Router para navegação declarativa
const ButtonLink = styled(Link)`
  display: inline-block;
  background-color: #9CAF8821;
  color: #1d311f;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 32px;
  padding: 0.75rem 2.5rem;
  border-radius: 10px;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  text-decoration: none;
  cursor: pointer;

  @media (min-width: 1024px) {
    font-size: 48px;
  }
`;

const LaunchBanner = () => {
  return (
    <Section>
      <Title>CONFIRA NOSSO ÚLTIMO LANÇAMENTO</Title>
      <Subtitle>Pensamos no melhor pra você</Subtitle>

      <ContentWrapper>
        <ImageWrapper>
          <ProductImage src={apoiamonitor} alt="Suporte de Monitor" />
          <NewTag>NEW</NewTag>
        </ImageWrapper>

        <InfoBox>
          <ProductTitle>
            <span>Suporte de Monitor</span>
          </ProductTitle>
          <ProductDesc>
            Sua versatilidade permite melhorar a postura, alinhando o monitor para os seus olhos
          </ProductDesc>
          {/* Link declarativo para a página de detalhes */}
          <ButtonLink to={`/produto-b2c/${encodeURIComponent("Suporte de Monitor")}`}>Confira Já!</ButtonLink>
        </InfoBox>
      </ContentWrapper>
    </Section>
  );
};

export default LaunchBanner;
