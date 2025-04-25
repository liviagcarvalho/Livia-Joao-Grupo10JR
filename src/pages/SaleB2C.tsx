import React, { useState } from 'react';
import styled from 'styled-components';
import Footer from '../components/FooterB2C';
import Header from '../components/HeaderB2C';
import Carrinho from '../components/Carrinho';
import { ProductCard } from '../components/ProductCardB2C';
import allProductsB2C from '../components/allProductsB2C';


const SaleB2C = () => {
    const [carrinhoAberto, setCarrinhoAberto] = useState(false); // 👈 controle do carrinho
  
    return (
      <>
        <Header abrirCarrinho={() => setCarrinhoAberto(true)} /> {/* Passa para o Header */}
        
        
        <Footer />
  
        {/* Carrinho visível ou não */}
        <Carrinho
          isOpen={carrinhoAberto}
          onClose={() => setCarrinhoAberto(false)}
        />
      </>
    );
  };
  
  export default SaleB2C;

//Grade responsiva para exibir os produtos - Cada `ProductCard` ocupa no mínimo 250px e o gap define o espaçamento
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`;