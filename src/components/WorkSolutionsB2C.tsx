// import React from "react";
// import styled from "styled-components";
// import imgIndividual from "../assets/HomePage/cooworkingHomePage.png";
// import imgGrupo from "../assets/HomePage/EscritorioPrivadoHomePage.png";

// // Wrapper da seção
// const Section = styled.section`
//   width: 100%;
//   padding: 5rem 1rem;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// // Título principal
// const Title = styled.h2`
//   color: #1d311f;
//   font-family: "Spectral", serif;
//   font-weight: 600;
//   font-size: 40px;
//   text-align: center;
//   margin-bottom: 4rem;
// `;

// // Grid dos blocos
// const Grid = styled.div`
//   display: grid;
//   grid-template-columns: 1fr;
//   gap: 3rem;
//   max-width: 1240px;
//   width: 100%;

//   @media (min-width: 1024px) {
//     grid-template-columns: repeat(2, 1fr);
//   }
// `;

// // Bloco individual (imagem + textos + botão)
// const Block = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;

//   @media (min-width: 1024px) {
//     align-items: flex-start;
//   }
// `;

// const Image = styled.img`
//   width: 602.84px;
//   height: 391px;
//   object-fit: cover;
//   border-radius: 8px;
// `;

// const SubTitle = styled.h3`
//   color: #1d311f;
//   font-family: "Spectral", serif;
//   font-weight: 600;
//   font-size: 40px;
//   margin-top: 1.5rem;
// `;

// const Description = styled.p`
//   color: #1d311f;
//   font-family: "Spectral", serif;
//   font-weight: 500;
//   font-size: 28px;
//   margin-top: 0.5rem;
// `;

// const Button = styled.button`
//   margin-top: 1rem;
//   width: 141px;
//   height: 34px;
//   background-color: #9CAF88;
//   color: white;
//   font-family: "Inter", sans-serif;
//   font-size: 18px;
//   font-weight: 600;
//   border-radius: 10px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   border: none;
//   cursor: pointer;
//   transition: background-color 0.2s ease;

//   &:hover {
//     background-color: rgba(11, 71, 26, 0.13);
//   }
// `;

// // Componente principal
// const WorkSolutionsSection = () => {
//   return (
//     <Section>
//       <Title>PERFORME SEU MÁXIMO EM TODO LUGAR</Title>
//       <Grid>
//         {/* Bloco 1 - Individual */}
//         <Block>
//           <Image src={imgGrupo} alt="Trabalho Individual" />
//           <SubTitle>Do Trabalho Individual</SubTitle>
//           <Description>O essencial para usar no dia a dia</Description>
//           <Button>Veja Mais</Button>
//         </Block>

//         {/* Bloco 2 - Grupo */}
//         <Block>
//           <Image src={imgIndividual} alt="Trabalho em Grupo" />
//           <SubTitle>Ao Trabalho Em Grupo</SubTitle>
//           <Description>Soluções para equipes de todos os tamanhos</Description>
//           <Button>Veja Mais</Button>
//         </Block>
//       </Grid>
//     </Section>
//   );
// };

// export default WorkSolutionsSection;

import React from "react";
import styled from "styled-components";
import imgIndividual from "../assets/HomePage/cooworkingHomePage.png";
import imgGrupo from "../assets/HomePage/EscritorioPrivadoHomePage.png";
import { useNavigate } from "react-router-dom";

// Wrapper da seção com degradê correto
const Section = styled.section`
  width: 100%;
  padding: 5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-family: "Spectral", serif;
  font-size: 42px;
  font-weight: 700;
  color: #1d311f;
  text-align: center;
  margin-bottom: 4rem;

  @media (min-width: 768px) {
    font-size: 46px;
  }

  @media (min-width: 1024px) {
    font-size: 50px;
  }
`;

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

const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
  max-width: 600px;
  border-radius: 12px;
  object-fit: cover;
`;

const SubTitle = styled.h3`
  color: #1d311f;
  font-family: "Spectral", serif;
  font-weight: 700;
  font-size: 28px;
  margin-top: 1.5rem;

  @media (min-width: 1024px) {
    font-size: 30px;
  }
`;

const Description = styled.p`
  color: #1d311f;
  font-family: "Spectral", serif;
  font-weight: 400;
  font-size: 18px;
  margin-top: 0.3rem;

  @media (min-width: 1024px) {
    font-size: 20px;
  }
`;

const Button = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1.25rem;
  background-color: #9caf88;
  color: white;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12);

  &:hover {
    background-color: #88a379;
  }
`;

const WorkSolutionsSection = () => {
  const navigate = useNavigate();
  
  const handleNavigate = () => {
    navigate('/produtos-b2c', {
      state: { filtroInicial: 'lancamentos' }
    });
  };

  return (
    <Section>
      <Title>PERFORME SEU MÁXIMO EM TODO LUGAR</Title>
      <Grid>
        <Block>
          <Image src={imgGrupo} alt="Trabalho Individual" />
          <SubTitle>Do Trabalho Individual</SubTitle>
          <Description>O essencial para usar no dia a dia</Description>
          <Button onClick={handleNavigate} >Veja Mais</Button>
        </Block>

        <Block>
          <Image src={imgIndividual} alt="Trabalho em Grupo" />
          <SubTitle>Ao Trabalho Em Grupo</SubTitle>
          <Description>Soluções para equipes de todos os tamanhos</Description>
          <Button onClick={handleNavigate} > Veja Mais </Button>
        </Block>
      </Grid>
    </Section>
  );
};

export default WorkSolutionsSection;
