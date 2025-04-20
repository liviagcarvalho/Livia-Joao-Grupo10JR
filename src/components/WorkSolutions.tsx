import React from "react";
import styled from "styled-components";
import imgIndividual from "../assets/HomePage/cooworkingHomePage.png";
import imgGrupo from "../assets/HomePage/EscritorioPrivadoHomePage.png";

// Wrapper da seção
const Section = styled.section`
  width: 100%;
  padding: 5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Título principal
const Title = styled.h2`
  color: #1d311f;
  font-family: "Spectral", serif;
  font-weight: 600;
  font-size: 40px;
  text-align: center;
  margin-bottom: 4rem;
`;

// Grid dos blocos
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  max-width: 1240px;
  width: 100%;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

// Bloco individual (imagem + textos + botão)
const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1024px) {
    align-items: flex-start;
  }
`;

const Image = styled.img`
  width: 602.84px;
  height: 391px;
  object-fit: cover;
  border-radius: 8px;
`;

const SubTitle = styled.h3`
  color: #1d311f;
  font-family: "Spectral", serif;
  font-weight: 600;
  font-size: 40px;
  margin-top: 1.5rem;
`;

const Description = styled.p`
  color: #1d311f;
  font-family: "Spectral", serif;
  font-weight: 500;
  font-size: 28px;
  margin-top: 0.5rem;
`;

const Button = styled.button`
  margin-top: 1rem;
  width: 141px;
  height: 34px;
  background-color: #105c23;
  color: white;
  font-family: "Inter", sans-serif;
  font-size: 18px;
  font-weight: 600;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(11, 71, 26, 0.13);
  }
`;

// Componente principal
const WorkSolutionsSection = () => {
  return (
    <Section>
      <Title>PERFORME SEU MÁXIMO EM TODO LUGAR</Title>
      <Grid>
        {/* Bloco 1 - Individual */}
        <Block>
          <Image src={imgGrupo} alt="Trabalho Individual" />
          <SubTitle>Do Trabalho Individual</SubTitle>
          <Description>O essencial para usar no dia a dia</Description>
          <Button>Veja Mais</Button>
        </Block>

        {/* Bloco 2 - Grupo */}
        <Block>
          <Image src={imgIndividual} alt="Trabalho em Grupo" />
          <SubTitle>Ao Trabalho Em Grupo</SubTitle>
          <Description>Soluções para equipes de todos os tamanhos</Description>
          <Button>Veja Mais</Button>
        </Block>
      </Grid>
    </Section>
  );
};

export default WorkSolutionsSection;

