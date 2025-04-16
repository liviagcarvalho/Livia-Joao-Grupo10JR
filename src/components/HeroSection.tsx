//banner 
import React from "react";
import cooworkingHomePage from "../assets/cooworkingHomePage.png";

const HeroSection = () => {
  return (
    <section className="relative w-[1280px] h-[757px] mx-auto">
      {/* Imagem de fundo */}
      <img
        src={cooworkingHomePage}
        alt="Ambiente de trabalho"
        className="w-full h-full object-cover"
      />

      {/* Camada de conteúdo */}
      <div className="absolute left-[80px] top-[147px] w-[556px] text-[#1D311F]">
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
