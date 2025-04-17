//importando os componentes para eu poder usar
import React from 'react';
import HeroSection from '../components/HeroSection';
//import ProductHighlights from '../components/ProductHighlights';
// import LaunchBanner from '../components/LaunchBanner';
// import ValueProps from '../components/ValueProps';
// import WorkSolutions from '../components/WorkSolutions';
// import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

//funcao que retorna a tela home, a qual estou denominando aqui
//dentrp da função return estiou montando com blocos a página home
//<>....</> é uma froma de agrupar essas informações no lugar de um div(É um envoltório invisível que o React usa pra agrupar múltiplos elementos sem jogar uma div extra no HTML.)
const Home = () => {
  return (
    <>
      <HeroSection />
      <Footer />
      {/* <ProductHighlights />
      <LaunchBanner />
      <ValueProps />
      <WorkSolutions />
      <ContactForm /> */}
    </>
  );
};

export default Home;

