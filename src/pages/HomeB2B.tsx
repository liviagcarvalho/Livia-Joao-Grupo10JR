//importando os componentes para eu poder usar
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import styled from 'styled-components';
import HeroSection from '../components/HeroSection';
//import ProductHighlights from '../components/ProductHighlights';
// import LaunchBanner from '../components/LaunchBanner';
import Header from '../components/Header'
import ValueProps from '../components/ValueProps';
import WorkSolutions from '../components/WorkSolutions';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import LaunchBanner from '../components/LaunchBanner';
import DegradeFundo from '../components/Degradefundo';
import GradientBackground from '../components/Degradefundo';
import ProductCarousel from '../components/ProductCarousel';
//funcao que retorna a tela home, a qual estou denominando aqui
//dentrp da função return estiou montando com blocos a página home
//<>....</> é uma froma de agrupar essas informações no lugar de um div(É um envoltório invisível que o React usa pra agrupar múltiplos elementos sem jogar uma div extra no HTML.)
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


const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ProductCarousel />
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

export default Home;

