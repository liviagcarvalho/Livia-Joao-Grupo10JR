//importando os componentes para eu poder usar
import React from 'react';
import HeroSection from '../components/HeroSectionB2C';
//import ProductHighlights from '../components/ProductHighlights';
// import LaunchBanner from '../components/LaunchBanner';
import ValueProps from '../components/ValuePropsB2C';
import WorkSolutions from '../components/WorkSolutionsB2C';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import LaunchBanner from '../components/LaunchBannerB2C';
import GradientBackground from '../components/DegradefundoB2C';
import ProductCarousel from '../components/ProductCarouselB2C';
//funcao que retorna a tela home, a qual estou denominando aqui
//dentrp da função return estiou montando com blocos a página home
//<>....</> é uma froma de agrupar essas informações no lugar de um div(É um envoltório invisível que o React usa pra agrupar múltiplos elementos sem jogar uma div extra no HTML.)
const Home = () => {
  return (
    <>
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


    </>
  );
};

export default Home;

