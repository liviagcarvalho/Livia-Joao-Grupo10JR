// Importando os componentes
import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import styled from 'styled-components';
import HeroSection from '../components/HeroSectionB2C';
import Carrinho from '../components/Carrinho';
import ValueProps from '../components/ValuePropsB2C';
import WorkSolutions from '../components/WorkSolutionsB2C';
import ContactForm from '../components/ContactForm';
import Footer from '../components/FooterB2C';
import LaunchBanner from '../components/LaunchBannerB2C';
import GradientBackground from '../components/DegradefundoB2C';
import ProductCarousel from '../components/ProductCarouselB2C';
import Header from '../components/HeaderB2C';

const WhatsAppButton = styled.a`
  position: fixed;
  bottom: 24px;
  right: 24px;
  background-color: #25D366;
  color: white;
  border-radius: 50%;
  padding: 14px;
  font-size: 28px;
  z-index: 1000;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  transition: background-color 0.3s;

  &:hover {
    background-color: #1ebe5d;
  }

  svg {
    display: block;
  }
`;

const HomeB2C = () => {
  const [carrinhoAberto, setCarrinhoAberto] = useState(false); // 👈 controle do carrinho

  return (
    <>
      <Header abrirCarrinho={() => setCarrinhoAberto(true)} /> {/* Passa para o Header */}
      <HeroSection />
      
      {/* Passa a função para o ProductCarousel também */}
      <ProductCarousel abrirCarrinho={() => setCarrinhoAberto(true)} />
      
      <GradientBackground>
        <section className="py-20">
          <LaunchBanner />
        </section>

        <section className="py-20">
          <ValueProps />
        </section>

        <section className="py-20">
          <WorkSolutions />
        </section>
      </GradientBackground>
      
      <ContactForm />
      <Footer />

      {/* Carrinho visível ou não */}
      <Carrinho
        isOpen={carrinhoAberto}
        onClose={() => setCarrinhoAberto(false)}
      />
      <WhatsAppButton
        href="https://wa.me/5511999999999"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco no WhatsApp"
        >
        <FaWhatsapp />
      </WhatsAppButton>
    </>
  );
};

export default HomeB2C;
