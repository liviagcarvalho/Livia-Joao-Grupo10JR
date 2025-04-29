// import React, { useState } from 'react';
// import styled from 'styled-components';
// import Footer from '../components/FooterB2C';
// import Header from '../components/HeaderB2C';
// import Carrinho from '../components/Carrinho';
// import { ProductCard } from '../components/ProductCardB2C';
// import allProductsB2C from '../components/allProductsB2C';


// const SaleB2C = () => {
//     const [carrinhoAberto, setCarrinhoAberto] = useState(false); // 👈 controle do carrinho
  
//     return (
//       <>
//         <Header abrirCarrinho={() => setCarrinhoAberto(true)} /> {/* Passa para o Header */}
        
        
//         <Footer />
  
//         {/* Carrinho visível ou não */}
//         <Carrinho
//           isOpen={carrinhoAberto}
//           onClose={() => setCarrinhoAberto(false)}
//         />
//       </>
//     );
//   };
  
//   export default SaleB2C;

// //Grade responsiva para exibir os produtos - Cada `ProductCard` ocupa no mínimo 250px e o gap define o espaçamento
// const Grid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
//   gap: 2rem;
// `;

import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { ProductCardSale } from '../components/ProductCardSale';
import allProductsSale from '../components/allProductsSale';
import { FiSearch } from 'react-icons/fi';
import HeaderB2C from '../components/HeaderB2C';
import Footer from '../components/FooterB2C';
import Carrinho from '../components/Carrinho';
import { useCart } from '../components/CartContext';

const SaleB2C: React.FC = () => {
  const { categoria } = useParams();
  const [carrinhoAberto, setCarrinhoAberto] = useState(false);
  const location = useLocation();
  const filtroInicial = (location.state as any)?.filtroInicial || null;
  const [sortOption, setSortOption] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [showCategoria, setShowCategoria] = useState(false);
  const [showCor, setShowCor] = useState(false);
  const [categoriaFiltro, setCategoriaFiltro] = useState<string | null>(null);
  const [corFiltro, setCorFiltro] = useState<string | null>(null);
  const [quantidadeVisivel, setQuantidadeVisivel] = useState(8);
  const [busca, setBusca] = useState('');

  useEffect(() => {
    if (filtroInicial) {
      setCategoriaFiltro(filtroInicial);
      window.history.replaceState({}, document.title);
    }
  }, [filtroInicial]);

  // Filtragem de produtos
  let produtosFiltrados = categoria
    ? allProductsSale.filter(p => p.categoria === categoria.toLowerCase())
    : allProductsSale;

  if (busca.trim()) {
    const termo = busca.toLowerCase();
    produtosFiltrados = produtosFiltrados.filter(p =>
      p.name.toLowerCase().includes(termo)
    );
  }

  if (categoriaFiltro && categoriaFiltro !== 'ver-tudo') {
    produtosFiltrados = produtosFiltrados.filter(p =>
      p.tags.includes(categoriaFiltro)
    );
  }

  if (corFiltro) {
    produtosFiltrados = produtosFiltrados.filter(p =>
      p.colors.includes(corFiltro)
    );
  }

  const getPriceValue = (price: string) =>
    parseFloat(price.replace(/[^0-9,\.]/g, '').replace(',', '.'));

  const produtosOrdenados = [...produtosFiltrados].sort((a, b) => {
    switch (sortOption) {
      case 'menor':
        return getPriceValue(a.pricedesconto) - getPriceValue(b.pricedesconto);
      case 'maior':
        return getPriceValue(b.pricedesconto) - getPriceValue(a.pricedesconto);
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

  const nomesCores: Record<string, string> = {
    '#ffffff': 'Branco',
    '#000000': 'Preto',
    '#5C4033': 'Marrom',
    '#DEB887': 'Bege',
    '#003366': 'Azul Escuro',
    '#228B22': 'Verde',
    '#FFD700': 'Amarelo',
    '#FFC0CB': 'Rosa Claro',
  };

  const nomesCategorias: Record<string, string> = {
    lancamentos: 'Lançamentos',
    'mais-vendidos': 'Mais Vendidos',
    'ver-tudo': 'Ver Tudo',
  };

  return (
    <>
      <HeaderB2C abrirCarrinho={() => setCarrinhoAberto(true)} />
      <Container>
        <SearchWrapper>
          <SearchBox>
            <SearchIcon />
            <SearchInput
              type="text"
              placeholder="Buscar produtos..."
              value={busca}
              onChange={e => setBusca(e.target.value)}
            />
          </SearchBox>
        </SearchWrapper>

        <Main>
          <ContentWrapper>
            <Title>{titulo}</Title>
            <Grid>
              {produtosOrdenados.slice(0, quantidadeVisivel).map((p, i) => (
                <ProductCardSale
                  key={i}
                  name={p.name}
                  pricenormal={p.pricenormal}
                  pricedesconto={p.pricedesconto}
                  images={p.images}
                  colors={p.colors}
                  abrirCarrinho={() => setCarrinhoAberto(true)}
                />
              ))}
            </Grid>
            {quantidadeVisivel < produtosOrdenados.length && (
              <VerMaisWrapper>
                <VerMaisButton onClick={() => setQuantidadeVisivel(v => v + 8)}>
                  VER MAIS
                </VerMaisButton>
              </VerMaisWrapper>
            )}
          </ContentWrapper>
        </Main>

        <Footer />
        <Carrinho
          isOpen={carrinhoAberto}
          onClose={() => setCarrinhoAberto(false)}
        />
      </Container>
    </>
  );
};

export default SaleB2C;


// --- Styled Components ---
const Container = styled.div`
  width: 100%;
  margin-top: 10rem;

  @media (max-width: 1280px) {
    margin-top: 8rem;
  }
  @media (max-width: 1024px) {
    margin-top: 16rem;
  }
  @media (max-width: 768px) {
    margin-top: 21rem;
  }
  @media (max-width: 640px) {
    margin-top: 26rem;
`;

const SearchWrapper = styled.div`
  width: 100%;
  background-color: #F5F8F5;
  padding: 2rem 1rem;
  display: flex;
  justify-content: center;
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  max-width: 600px;
  width: 100%;
  padding: 0.75rem 1rem;
  gap: 0.75rem;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  width: 100%;
  font-size: 1rem;
  background: transparent;
`;

const SearchIcon = styled(FiSearch)`
  font-size: 1.2rem;
  color: #999;
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

const VerMaisButton = styled.button`
  background-color: #9CAF88;
  color: #1D311F;
  font-weight: bold;
  padding: 0.5rem 1.5rem;
  border-radius: 5px;
  font-size: 0.875rem;
  cursor: pointer;
  border: none;
`;

const VerMaisWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
`;
