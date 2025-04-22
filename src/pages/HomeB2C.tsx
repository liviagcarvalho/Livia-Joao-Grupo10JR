// Importando os componentes
import React, { useState } from 'react';
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

const HomeB2C = () => {
  const [carrinhoAberto, setCarrinhoAberto] = useState(false); // 👈 controle do carrinho

  return (
    <>
      <Header abrirCarrinho={() => setCarrinhoAberto(true)} /> {/* Passa para o Header */}
      <HeroSection />
      
      {/* ✅ Passa a função para o ProductCarousel também */}
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
    </>
  );
};

export default HomeB2C;
