import React from "react";
import apoiamonitor from "../assets/HomePage/apoiamonitor.png";

const LaunchBanner = () => {
  return (
    <section className="w-full bg-white flex flex-col items-center py-20 px-4">
      {/* Título */}
      <h2 className="font-[Spectral] font-semibold text-[40px] text-[#1D311F] text-center mb-2">
        CONFIRA NOSSO ÚLTIMO LANÇAMENTO
      </h2>

      {/* Subtítulo */}
      <p className="font-[Spectral] font-medium text-[28px] text-[#1D311F] text-center mb-12">
        Pensamos no melhor pra você
      </p>

      {/* Conteúdo principal */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        {/* Imagem com estrela "NEW" */}
        <div className="relative w-fit">
          <img
            src={apoiamonitor}
            alt="Suporte de Monitor Ergonômico"
            className="w-[420px] h-auto rounded-[12px] shadow-md"
          />
          <div className="absolute top-[-20px] right-[-15px] bg-[#B4d3b2] text-[#1D311F] font-[Inter] font-semibold text-[24px] px-3 py-1 rounded-full shadow-md border border-[#D0D0D0]">
            NEW
          </div>
        </div>

        {/* Texto ao lado */}
        <div className="bg-[#F1F7F3] rounded-xl shadow-md px-8 py-6 w-[420px] text-center lg:text-left">
          <h3 className="font-[Inter] text-[40px] text-black leading-tight mb-4 flex flex-col items-center lg:items-start">
            <span>Suporte de Monitor</span>
            <span>Ergonômico</span>
          </h3>
          <p className="font-[Inter] text-[20px] text-black mb-6 leading-relaxed">
            Sua versatilidade permite melhorar a postura,
            alinhando o monitor para os seus olhos
          </p>

          <button className="bg-[#105C23] text-white font-[Inter] font-semibold text-[32px] lg:text-[48px] px-10 py-3 rounded-[10px] shadow-lg">
            Confira Já!
          </button>
        </div>
      </div>
    </section>
  );
};

export default LaunchBanner;
