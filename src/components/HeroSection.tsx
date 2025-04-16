//banner 
import React from "react";
import cooworkingHomePage from "../assets/HomePage/cooworkingHomePage.png";

const HeroSection = () => {
  return (
    <section className="relative w-[1280px] h-[757px] mx-auto">
      {/* Imagem de fundo */}
      <img
        src={cooworkingHomePage}
        alt="Ambiente de trabalho"
        className="w-full h-full object-cover"
      />

      {/* Arco esverdeado suave no lado esquerdo */}
      <div className="absolute top-0 left-0 w-[1400px] h-full bg-gradient-to-r from-white/80 to-transparent rounded-r-[300px] blur-md z-10" />

      {/* Camada de conteúdo por cima do arco */}
      <div className="absolute left-[80px] top-[147px] w-[556px] text-[#1D311F] z-20">
        <h1 className="font-[Spectral] font-bold text-[40px] leading-tight mb-4">
          Transforme Seu Espaço, <br /> Inspire Produtividade
        </h1>
        <p className="font-[Spectral] font-semibold text-[24px] mb-8">
          Ambientes que aliam design inteligente, conforto e eficiência
        </p>
        <button className="bg-[#1D311F] text-white font-[Spectral] font-bold text-[24px] w-[257px] h-[55px] rounded-[30px]">
          CONHEÇA AGORA
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
