import React, { useState } from "react";
import { Icon } from '@iconify/react';

const items = [
  {
    title: "Design Funcional",
    icon: "hugeicons:office-chair",
    description:
      "Cada peça é pensada para unir conforto, praticidade e estética. Funcionalidade que transforma o ambiente e melhora sua rotina.",
  },
  {
    title: "Garantia",
    icon: "solar:medal-ribbons-star-outline",
    description:
      "Oferecemos garantia real de 2 anos em nossos produtos. Mais segurança e tranquilidade para você confiar na sua escolha.",
  },
  {
    title: "Entrega",
    icon: "carbon:delivery",
    description:
      "Nosso compromisso vai além da venda. Garantimos agilidade e cuidado na entrega, respeitando prazos e qualidade no transporte.",
  },
  {
    title: "Sustentabilidade",
    icon: "carbon:sustainability",
    description:
      "Desenvolvemos produtos com responsabilidade ambiental, priorizando materiais conscientes e processos sustentáveis.",
  },
  {
    title: "Atendimento",
    icon: "ri:customer-service-2-fill",
    description:
      "Acompanhamos você em cada etapa, com um atendimento próximo, rápido e voltado para entender suas reais necessidades.",
  },
];

const ValuePropsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-[#1D311F] py-20 px-4 relative">
      <h2 className="text-white font-[Spectral] font-bold text-[96px] leading-tight text-center mb-12 lg:sticky lg:top-0 lg:py-6 z-0 bg-[#1D311F]">
        TUDO QUE <br className="hidden lg:block" /> VOCÊ PRECISA <br className="hidden lg:block" /> ESTÁ AQUI
      </h2>
      <div className="grid relative z-10 grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 lg:grid-rows-5 gap-y-12 gap-x-4 max-w-[1200px] mx-auto">
        {items.map((item, index) => {
          const baseClass = "w-[360px] h-[250px] bg-white rounded-xl shadow-md flex items-center justify-center text-center px-6 cursor-pointer";

          const positions = [
            "lg:col-start-1 lg:row-start-1",
            "lg:col-start-3 lg:row-start-2",
            "lg:col-start-2 lg:row-start-3",
            "lg:col-start-1 lg:row-start-4",
            "lg:col-start-3 lg:row-start-5"
          ];

          return (
            <div
              key={index}
              className={`${baseClass} ${positions[index]}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {hoveredIndex === index ? (
                <p className="text-[20px] font-[Spectral] font-extrabold text-[#1D311F]">
                  {item.description}
                </p>
              ) : (
                <div className="flex flex-col items-center gap-4">
                  <Icon icon={item.icon} width="48" color="#1D311F" />
                  <span className="text-[20px] font-[Spectral] font-extrabold text-[#1D311F]">
                    {item.title}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ValuePropsSection;
