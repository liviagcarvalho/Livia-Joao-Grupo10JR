import React from "react";
import imgIndividual from "../assets/HomePage/cooworkingHomePage.png";
import imgGrupo from "../assets/HomePage/EscritorioPrivadoHomePage.png";

const WorkSolutionsSection = () => {
  return (
    <section className="w-full py-20 px-4 flex flex-col items-center">
      {/* Título principal */}
      <h2 className="text-[#1D311F] font-[Spectral] font-semibold text-[40px] text-center mb-16">
        PERFORME SEU MÁXIMO EM TODO LUGAR
      </h2>

      {/* Blocos */}
      <div className="grid lg:grid-cols-2 gap-12 max-w-[1240px] w-full">
        {/* Bloco 1 - Individual */}
        <div className="flex flex-col items-center lg:items-start">
          <img
            src={imgGrupo}
            alt="Trabalho Individual"
            className="w-[602.84px] h-[391px] object-cover rounded-md"
          />
          <h3 className="text-[#1D311F] font-[Spectral] font-semibold text-[40px] mt-6">
            Do Trabalho Individual
          </h3>
          <p className="text-[#1D311F] font-[Spectral] font-medium text-[28px] mt-2">
            O essencial para usar no dia a dia
          </p>
          <button className="mt-4 w-[141px] h-[34px] bg-[#105C23] hover:bg-[#0B471A]/[0.13] text-white font-[Inter] font-semibold text-[18px] rounded-[10px] shadow-md">
            Veja Mais
          </button>
        </div>

        {/* Bloco 2 - Grupo */}
        <div className="flex flex-col items-center lg:items-start">
          <img
            src={imgIndividual}
            alt="Trabalho em Grupo"
            className="w-[602.84px] h-[391px] object-cover rounded-md"
          />
          <h3 className="text-[#1D311F] font-[Spectral] font-semibold text-[40px] mt-6">
            Ao Trabalho Em Grupo
          </h3>
          <p className="text-[#1D311F] font-[Spectral] font-medium text-[28px] mt-2">
            Soluções para equipes de todos os tamanhos
          </p>
          <button className="mt-4 w-[141px] h-[34px] bg-[#105C23] hover:bg-[#0B471A]/[0.13] text-white font-[Inter] font-semibold text-[18px] rounded-[10px] shadow-md">
            Veja Mais
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorkSolutionsSection;
