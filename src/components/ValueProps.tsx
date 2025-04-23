import React, { useState } from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";

const Section = styled.section`
  width: 100%;
  background-color: #1d311f;
  padding: 5rem 1rem;
  position: relative;
`;

const Title = styled.h2`
  color: white;
  font-family: "Spectral", serif;
  font-weight: 700;
  font-size: 96px;
  line-height: 1.1;
  text-align: center;
  margin-bottom: 3rem;
  position: sticky;
  top: 0;
  z-index: 0;
  background-color: #1d311f;
  padding: 1.5rem 0;

  @media (max-width: 1024px) {
    position: static;
    font-size: 48px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 10;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(5, auto);
  }
`;

const Card = styled.div<{ position: string }>`
  width: 360px;
  height: 250px;
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1.5rem;
  cursor: pointer;
  margin: 0 auto;

  @media (min-width: 1024px) {
    ${({ position }) => position};
  }
`;

const CardText = styled.p`
  font-size: 20px;
  font-family: "Spectral", serif;
  font-weight: 800;
  color: #1d311f;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const CardTitle = styled.span`
  font-size: 20px;
  font-family: "Spectral", serif;
  font-weight: 800;
  color: #1d311f;
`;

// Dados
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
    title: "Entrega Eficiente",
    icon: "carbon:delivery",
    description:
      "Nosso compromisso vai além da venda. Garantimos agilidade e cuidado na entrega, respeitando prazos e qualidade no transporte.",
  },
  {
    title: "Atendimento Personalizado",
    icon: "ri:customer-service-2-fill",
    description:
      "Acompanhamos você em cada etapa, com um atendimento próximo, rápido e voltado para entender suas reais necessidades.",
  },
];

// Posições em grid (CSS grid line syntax)
const gridPositions = [
  "grid-column-start: 1; grid-row-start: 1;",
  "grid-column-start: 3; grid-row-start: 2;",
  "grid-column-start: 1; grid-row-start: 4;",
  "grid-column-start: 2; grid-row-start: 3;",
];

const ValuePropsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Section>
      <Title>
        TUDO QUE <br className="hidden lg:block" /> VOCÊ PRECISA <br className="hidden lg:block" /> ESTÁ AQUI
      </Title>
      <Grid>
        {items.map((item, index) => (
          <Card
            key={index}
            position={gridPositions[index]}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {hoveredIndex === index ? (
              <CardText>{item.description}</CardText>
            ) : (
              <CardContent>
                <Icon icon={item.icon} width="48" color="#1D311F" />
                <CardTitle>{item.title}</CardTitle>
              </CardContent>
            )}
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default ValuePropsSection;
