//banner
import React from "react";
import cooworkingHomePage from "../assets/HomePage/cooworkingHomePage.png";

const HeroSection = () => {
  return (
    <section className="relative w-full max-w-[1280px] h-[757px] mx-auto px-4">
      {/* Imagem de fundo */}
      <img
        src={cooworkingHomePage}
        alt="Ambiente de trabalho"
        className="w-full h-full object-cover"
      />

      {/* Véu em gradiente branco no lado esquerdo */}
      <div className="absolute top-0 left-0 w-[1000px] sm:w-[1100px] md:w-[1200px] lg:w-[1300px] xl:w-[1400px] h-full bg-gradient-to-r from-white/80 to-transparent rounded-r-[300px] blur-md z-10" />

      {/* Camada de conteúdo por cima do véu */}
      <div className="absolute z-20 text-[#1D311F] w-full max-w-[556px]
                      top-16 left-4
                      sm:top-24 sm:left-8
                      md:top-28 md:left-12
                      lg:top-[147px] lg:left-[80px]">
        <h1 className="font-[Spectral] font-bold text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-tight mb-4 drop-shadow-md">
          Transforme Seu Espaço, <br /> Inspire Produtividade
        </h1>
        <p className="font-[Spectral] font-semibold text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] mb-8">
          Ambientes que aliam design inteligente, conforto e eficiência
        </p>
        <button className="bg-[#1D311F] text-white font-[Spectral] font-bold text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px]
                           w-[200px] sm:w-[220px] md:w-[240px] lg:w-[257px]
                           h-[45px] sm:h-[48px] md:h-[52px] lg:h-[55px]
                           rounded-[30px]">
          CONHEÇA AGORA
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
