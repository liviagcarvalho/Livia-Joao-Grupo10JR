import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import imagemTopo from '../assets/sobrenós/1.png';
import imagemMissao from '../assets/sobrenós/2.png';
import imagemExperiencia from '../assets/sobrenós/3.png';
import Header from '../components/Header'

const SobreB2B = () => {
  return (
    <>
    <Header />
      <HeroSection>
        <HeroText>
          <HeroTitle>Eficiência, Conforto e Estilo Para o Seu Ambiente de Trabalho</HeroTitle>
          <HeroSubtitle>Seu espaço de trabalho elevado a outro nível</HeroSubtitle>
        </HeroText>
      </HeroSection>

      <Container>
        <Section>
          <Title>R. Amaral Office</Title>
          <Text>
            A R. Amaral Office nasceu da visão empreendedora de Ricardo Amaral, um apaixonado por design funcional e soluções inteligentes para o ambiente de trabalho.
            Após anos atuando no varejo físico, atendendo empresas de todos os tamanhos e profissionais autônomos em busca de conforto e produtividade, Ricardo decidiu dar um novo passo: levar a R. Amaral para o digital.
          </Text>
        </Section>

        <MissionSection>
          <TextWrapper>
            <Subtitle>Nossa missão</Subtitle>
            <Text>
              Oferecer soluções completas, acessíveis e confiáveis para escritórios modernos, sejam eles em grandes corporações, coworkings ou dentro de casa.
              Sabemos que um bom espaço de trabalho precisa ser prático, ergonômico e esteticamente agradável. Por isso, unimos móveis, tecnologia, materiais e itens de ambientação em um só lugar, para facilitar a sua jornada.
              Acreditamos que produtividade e bem-estar caminham lado a lado. Por isso, desenvolvemos nossos produtos pensando não apenas na funcionalidade, mas também na experiência de quem os utiliza diariamente.
              Cada peça é escolhida com cuidado, priorizando conforto, durabilidade e design atemporal.
              Nossa missão vai além de oferecer mobiliário: queremos transformar a maneira como as pessoas vivenciam seus espaços de trabalho.
              Seja em ambientes corporativos de grande escala ou em escritórios compactos dentro de casa, a R. Amaral Office entrega soluções que se adaptam ao seu ritmo, inspiram criatividade e promovem um dia a dia mais eficiente.
            </Text>
          </TextWrapper>
          <Image src={imagemMissao} alt="Ambiente de trabalho moderno e confortável" />
        </MissionSection>
        <SectionWrapper>
        <TextBlock>
          <Title>Enfatizando a experiência do cliente</Title>
          <Paragraph>
            O lançamento do nosso e-commerce representa mais do que uma mudança de canal:
            é a expansão de um propósito. Queremos estar mais próximos de você, oferecendo
            uma experiência de compra fluida, moderna e personalizada. Através da tecnologia,
            conseguimos entender melhor suas necessidades e evoluir com você — sempre com o
            mesmo compromisso que nos trouxe até aqui.
          </Paragraph>
        </TextBlock>
      </SectionWrapper>

      <NewsletterSection>
        <NewsletterTitle>Vamos transformar seu espaço juntos?</NewsletterTitle>
        <NewsletterSubtitle>
          Receba dicas, lançamentos e ofertas pensadas para o seu ambiente de trabalho.
        </NewsletterSubtitle>
        <Form>
          <Input type="text" placeholder="Nome" />
          <Input type="email" placeholder="Email" />
          <Button type="submit">INSCREVA-SE</Button>
        </Form>
      </NewsletterSection>
      </Container>
      <Footer />
    </>
  );
};

export default SobreB2B;


//Hero Section - Imagem grande com título em cima
const HeroSection = styled.section`
  position: relative;
  height: 550px;
  width: 100%;
  background-image: url(${imagemTopo});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 5%;
  color: white;

    @media (max-width: 1280px) {
    margin-top: 8rem;
  }
  @media (max-width: 1024px) {
    margin-top: 16rem;
  }
  @media (max-width: 768px) {
    margin-top: 21rem;
  }
  @media (max-width: 640px) {
    margin-top: 26rem;
`;

const HeroText = styled.div`
  max-width: 600px;
  padding-top: 300px; /* Aumente ou reduza esse valor conforme necessário */
`;

const HeroTitle = styled.h1`
    font-size: 2.5rem;
    font-weight: bold;
    line-height: 1.3;
    font-family: 'sans-serif';
    color: white;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.6);
`;

const HeroSubtitle = styled.p`
    font-size: 1.2rem;
    color: #f5f5f5;
    font-family: 'sans-serif';
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.6);
`;

//Sobre R. Amaral Office - Título e breve texto
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 2rem;
  font-family: 'sans-serif';
`;

const Section = styled.section`
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #1D311F;
  text-align: center;
  margin-bottom: 1rem;
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #1D311F;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  font-size: 1.1rem;
  color: #333;
  line-height: 1.7;
  text-align: justify;
`;

//Missão da empresa
const MissionSection = styled.section`
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  margin-top: 3rem;
  flex-wrap: wrap; /* Para quebrar em telas menores */
`;

const TextWrapper = styled.div`
  flex: 1;
  min-width: 300px;
`;

const Image = styled.img`
  width: 40%;
  max-height: 500px;
  height: auto;
  border-radius: 12px;
  object-fit: cover;
  align-self: flex-start;
  margin-top: 1.5rem;
`;

//Experiencia
const SectionWrapper = styled.section`
  max-width: 1200px;
  margin: 1rem auto;
  padding: 0 1rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
`;

const TextBlock = styled.div`
  flex: 1;
  min-width: 280px;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  color: #333;
  line-height: 1.8;
  text-align: justify;
`;

//info deles
const NewsletterSection = styled.section`
  background-color: #fff;
  padding: 4rem 2rem;
  text-align: center;
`;

const NewsletterTitle = styled.h2`
  font-size: 2rem;
  color: #1D311F;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const NewsletterSubtitle = styled.p`
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.8rem 1.2rem;
  font-size: 1rem;
  border: 2px solid #1D311F;
  border-radius: 4px;
  min-width: 200px;
`;

const Button = styled.button`
  padding: 0.8rem 1.5rem;
  background-color: #1D311F;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  border: none;
  border-radius: 30px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;