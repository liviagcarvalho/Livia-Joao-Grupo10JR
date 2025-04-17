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
    <section className="w-full bg-[#F5F5F5] py-20 px-4">
      <h2 className="text-center text-[#1D311F] font-[Spectral] font-extrabold text-[36px] mb-12">
        TUDO QUE VOCÊ PRECISA ESTÁ AQUI
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {items.map((item, index) => (
          <div
            key={index}
            className="w-[360px] h-[250px] bg-white rounded-xl shadow-md flex items-center justify-center text-center px-6 cursor-pointer"
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
        ))}
      </div>
    </section>
  );
};

export default ValuePropsSection;