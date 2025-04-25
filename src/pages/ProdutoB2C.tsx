
import React, { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import allProductsB2C from '../components/allProductsB2C';
import HeaderB2C from '../components/HeaderB2C';
import FooterB2C from '../components/FooterB2C';
import Carrinho from '../components/Carrinho';
import { useCart } from '../components/CartContext';

const PageContainer = styled.div`
  background-color: #F5F8F5;
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
  background-color: #DDE3DC;
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
  border: 1px solid #1D311F;
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

const AddCartButton = styled.button`
  background-color: #DDE3DC;
  color: #1D311F;
  padding: 0.75rem;
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  width: fit-content;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #C7D8BF;
  }
`;

/* seção de descrição agora com fundo uniforme e gap reduzido */
const DetailedSection = styled.section`
  background-color: #F5F8F5;
  margin: 1rem auto 0;
  padding: 1rem;
  max-width: 1280px;
`;

const SectionTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const DetailedDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.5;
  color: #333;
`;

const ProdutoB2C = () => {
    const { nome } = useParams<{ nome: string }>();
    const produto = allProductsB2C.find(p => p.name === nome);
  
    if (nome && !produto) {
      return <Navigate to="/produtos-b2c" replace />;
    }
  
    const [corSelecionada, setCorSelecionada] = useState<string>(
      produto?.colors[0] ?? ''
    );
    const [carrinhoAberto, setCarrinhoAberto] = useState(false);
    const { addItem } = useCart();
  
    useEffect(() => {
      if (produto) setCorSelecionada(produto.colors[0]);
    }, [produto]);
  
    if (!produto) return null;
  
    const imagens = produto.images;
    const imagemPrincipal =
      imagens[corSelecionada] ?? Object.values(imagens)[0];
  
    const handleAddToCart = () => {
      addItem({
        name: produto.name,
        price: produto.price,
        image: imagemPrincipal,
        quantity: 1,
      });
      setCarrinhoAberto(true);
    };
  
    return (
      <>
        <HeaderB2C abrirCarrinho={() => setCarrinhoAberto(true)} />
  
        <PageContainer>
          <Content>
            <Title>{produto.name}</Title>
  
            <ProductSection>
              <GalleryColumn>
                {Object.entries(imagens).map(([cor, src]) => (
                  <Thumbnail
                    key={cor}
                    src={src}
                    alt={`${produto.name} — cor ${cor}`}
                    onClick={() => setCorSelecionada(cor)}
                  />
                ))}
              </GalleryColumn>
  
              <MainImage
                src={imagemPrincipal}
                alt={`${produto.name} — cor ${corSelecionada}`}
              />
  
              <InfoBox>
                <ProductName>{produto.name}</ProductName>
                <ProductPrice>{produto.price}</ProductPrice>
                <Divider />
                {produto.description && (
                  <Description>{produto.description}</Description>
                )}
                {produto.colors.length > 1 && (
                  <ColorOptions>
                    {produto.colors.map(cor => (
                      <ColorDot
                        key={cor}
                        color={cor}
                        selected={cor === corSelecionada}
                        onClick={() => setCorSelecionada(cor)}
                      />
                    ))}
                  </ColorOptions>
                )}
                <AddCartButton onClick={handleAddToCart}>
                  ADICIONAR AO CARRINHO
                </AddCartButton>
              </InfoBox>
            </ProductSection>
          </Content>
  
          {produto.detailedDescription && (
            <DetailedSection>
              <SectionTitle>Descrição do Produto</SectionTitle>
              <DetailedDescription>
                {produto.detailedDescription}
              </DetailedDescription>
            </DetailedSection>
          )}
        </PageContainer>
  
        <FooterB2C />
  
        <Carrinho
          isOpen={carrinhoAberto}
          onClose={() => setCarrinhoAberto(false)}
        />
      </>
    );
  }

export default ProdutoB2C;
