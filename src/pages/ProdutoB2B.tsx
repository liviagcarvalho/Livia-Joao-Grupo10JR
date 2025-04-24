import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import allProducts from '../components/allProducts';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Orcamento from '../pages/OrcamentoB2B'; 


const PageContainer = styled.div`
  background-color: #f5f8f5;
  min-height: 100vh;
  margin-top: 10rem;
`;

const Content = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: 600;
  text-align: center;
  background-color: #dce3d8;
  padding: 1rem 0;
  margin-bottom: 2rem;
`;

const ProductSection = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const GalleryColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Thumbnail = styled.img`
  width: 80px;
  height: 80px;
  border: 1px solid #ccc;
  object-fit: cover;
  cursor: pointer;
`;

const MainImage = styled.img`
  width: 350px;
  height: 350px;
  object-fit: contain;
  border: 1px solid #1d311f;
`;

const InfoBox = styled.div`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ProductName = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
`;

const ProductPrice = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #999;
`;

const Description = styled.p`
  font-size: 0.95rem;
  color: #333;
`;

const ColorOptions = styled.div`
  display: flex;
  gap: 0.75rem;
`;

const ColorDot = styled.button<{ color: string; selected: boolean }>`
  width: 22px;
  height: 22px;
  border-radius: 9999px;
  border: ${({ color }) => (color === '#ffffff' ? '1px solid #ccc' : 'none')};
  background-color: ${({ color }) => color};
  outline: ${({ selected }) => (selected ? '2px solid #1D311F' : 'none')};
  cursor: pointer;
`;

const BudgetButton = styled.button`
  background-color: #1d311f;
  color: white;
  padding: 0.75rem;
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  width: fit-content;
`;

export default function Produto() {
  const { nome } = useParams();
  const produto = allProducts.find((p) => p.name === nome);

  const [corSelecionada, setCorSelecionada] = useState(produto?.colors[0]);
  const [mostrarOrcamento, setMostrarOrcamento] = useState(false);


  if (!produto) return <p>Produto não encontrado.</p>;

  const imagens = produto.images || {};
  const imagemPrincipal = imagens[corSelecionada] || Object.values(imagens)[0];

  const abrirModal = () => setMostrarOrcamento(true);
  const fecharModal = () => setMostrarOrcamento(false);

  return (
    <PageContainer>
      <Header />
      <Content>
        <Title>{produto.name}</Title>

        <ProductSection>
          {/* Coluna de thumbnails */}
          <GalleryColumn>
            {Object.values(imagens).map((img, idx) => (
              <Thumbnail
                key={idx}
                src={img}
                onClick={() => setCorSelecionada(Object.keys(imagens)[idx])}
              />
            ))}
          </GalleryColumn>

          {/* Imagem principal */}
          <MainImage src={imagemPrincipal} alt={produto.name} />

          {/* Informações do produto */}
          <InfoBox>
            <ProductName>{produto.name}</ProductName>
            <ProductPrice>{produto.price}</ProductPrice>
            <Divider />
            <Description>{produto.description}</Description>

            {produto.colors.length > 1 && (
              <ColorOptions>
                {produto.colors.map((cor) => (
                  <ColorDot
                    key={cor}
                    color={cor}
                    selected={corSelecionada === cor}
                    onClick={() => setCorSelecionada(cor)}
                  />
                ))}
              </ColorOptions>
            )}

            <BudgetButton onClick={abrirModal}>REALIZE SEU ORÇAMENTO</BudgetButton>
          </InfoBox>
        </ProductSection>
      </Content>
      {mostrarOrcamento && <Orcamento closeOrcamento={fecharModal} />}
      <Footer />
    </PageContainer>
  );
}
