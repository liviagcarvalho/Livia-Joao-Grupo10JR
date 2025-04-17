import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { ProductCard } from '../components/ProductCard';
import Footer from '../components/Footer';
import allProducts from '../components/allProducts'

const Container = styled.div`
  width: 100%;
`;

const FiltroBar = styled.div`
  width: 100%;
  background-color: #DDE3DC;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  padding: 1rem 0;
`;

const FiltroWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  gap: 1rem;
`;

const Botao = styled.button`
  background-color: #1D311F;
  color: white;
  padding: 0.25rem 1rem;
  border-radius: 5px;
`;

const Dropdown = styled.div`
  position: absolute;
  margin-top: 0.5rem;
  background: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  z-index: 10;
`;

const FiltroBox = styled.div`
  position: relative;
`;

const CorButton = styled.button<{ cor: string }>`
  width: 20px;
  height: 20px;
  border-radius: 9999px;
  border: ${(props) => (props.cor === '#ffffff' ? '1px solid #ccc' : 'none')};
  background-color: ${(props) => props.cor};
`;

const Main = styled.div`
  background-color: #F5F8F5;
  padding: 2rem 0;
`;

const ContentWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`;

export default function ProductB2B() {
  const { categoria } = useParams();
  const [sortOption, setSortOption] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [showCategoria, setShowCategoria] = useState(false);
  const [showCor, setShowCor] = useState(false);
  const [categoriaFiltro, setCategoriaFiltro] = useState<string | null>(null);
  const [corFiltro, setCorFiltro] = useState<string | null>(null);

  let produtosFiltrados = categoria
    ? allProducts.filter((p) => p.categoria === categoria.toLowerCase())
    : allProducts;

  if (categoriaFiltro && categoriaFiltro !== 'ver-tudo') {
    produtosFiltrados = produtosFiltrados.filter((p) =>
      p.tags.includes(categoriaFiltro)
    );
  }

  if (corFiltro) {
    produtosFiltrados = produtosFiltrados.filter((p) =>
      p.colors.includes(corFiltro)
    );
  }

  const produtosOrdenados = [...produtosFiltrados].sort((a, b) => {
    const getPriceValue = (price: string) =>
      parseFloat(price.replace('R$', '').replace(',', '.'));

    switch (sortOption) {
      case 'menor':
        return getPriceValue(a.price) - getPriceValue(b.price);
      case 'maior':
        return getPriceValue(b.price) - getPriceValue(a.price);
      case 'az':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  const categoriaFormatada: Record<string, string> = {
    moveis: 'Móveis',
    eletronicos: 'Eletrônicos',
    materiais: 'Materiais',
    ambientacao: 'Ambientação & Conforto',
  };

  const titulo = categoria
    ? categoriaFormatada[categoria.toLowerCase()] || categoria
    : 'Todos os Produtos';

  const limparFiltros = () => {
    setCategoriaFiltro(null);
    setCorFiltro(null);
  };

  return (
    <Container>
      <FiltroBar>
        <FiltroWrapper>
          <div className="flex items-center gap-6 flex-wrap">
            <h2 className="text-[18px] font-semibold whitespace-nowrap">FILTROS</h2>
            <FiltroBox>
              <Botao
                onClick={() => {
                  setIsOpen(false);
                  setShowCategoria(!showCategoria);
                  setShowCor(false);
                }}
              >
                Categoria
              </Botao>
              {showCategoria && (
                <Dropdown>
                  <button onClick={() => { setCategoriaFiltro('lancamentos'); setShowCategoria(false); }}>Lançamentos</button>
                  <button onClick={() => { setCategoriaFiltro('mais-vendidos'); setShowCategoria(false); }}>Mais Vendidos</button>
                  <button onClick={() => { setCategoriaFiltro(null); setShowCategoria(false); }}>Ver Tudo</button>
                </Dropdown>
              )}
            </FiltroBox>

            <FiltroBox>
              <Botao
                onClick={() => {
                  setIsOpen(false);
                  setShowCategoria(false);
                  setShowCor(!showCor);
                }}
              >
                Cor
              </Botao>
              {showCor && (
                <Dropdown style={{ padding: '0.75rem', display: 'flex', gap: '0.75rem' }}>
                  {["#000000", "#ffffff", "#8B8177"].map((cor) => (
                    <CorButton
                      key={cor}
                      cor={cor}
                      onClick={() => {
                        setCorFiltro(cor === corFiltro ? null : cor);
                        setShowCor(false);
                      }}
                    />
                  ))}
                </Dropdown>
              )}
            </FiltroBox>

            {(categoriaFiltro || corFiltro) && (
              <button
                onClick={limparFiltros}
                style={{ color: '#1D311F', fontSize: '0.875rem', textDecoration: 'underline' }}
              >
                Limpar filtros
              </button>
            )}
          </div>

          <FiltroBox>
            <button
              onClick={() => {
                setIsOpen(!isOpen);
                setShowCategoria(false);
                setShowCor(false);
              }}
              style={{ fontSize: '0.875rem', fontWeight: 600, backgroundColor: '#DDE3DC', color: '#1D311F', padding: '0.25rem 1rem', borderRadius: '5px' }}
            >
              Ordenado por <span style={{ fontSize: '0.75rem' }}>▼</span>
            </button>
            {isOpen && (
              <Dropdown>
                <button onClick={() => { setSortOption('menor'); setIsOpen(false); }}>Menor Preço</button>
                <button onClick={() => { setSortOption('maior'); setIsOpen(false); }}>Maior Preço</button>
                <button onClick={() => { setSortOption('az'); setIsOpen(false); }}>A–Z</button>
              </Dropdown>
            )}
          </FiltroBox>
        </FiltroWrapper>
      </FiltroBar>

      <Main>
        <ContentWrapper>
          <Title>{titulo}</Title>
          <Grid>
            {produtosOrdenados.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </Grid>
        </ContentWrapper>
      </Main>
      <Footer />
    </Container>
  );
}
