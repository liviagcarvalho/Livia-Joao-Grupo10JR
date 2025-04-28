import React, { useState } from "react";
import styled from "styled-components";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

//local de contato
const ContactBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 4rem;
  font-family: 'Inter', 'sans-serif';

  @media (min-width: 768px) {
    margin-bottom: 5rem;
  }
`;

// titulo da area de contato com a empresa (parte de cima do footer)
const ContactTitle = styled.h4`
  font-family: 'Inter', 'sans-serif';
  font-weight: 700;
  font-size: 20px;
  color: white;

  @media(min-width: 640px) {
    font-size: 24px;
  }

  @media(min-width: 1024px) {
    font-size: 26px;
  }
`;

// local que agrupa todos os inputs fields
const ContactInputs = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 900px;
`;

// local para por as infos do local de contato
const InputField = styled.input`
  padding: 0.7rem 1rem;
  border-radius: 20px;
  border: none;
  font-size: 16px;
  width: 250px;
  background-color: #f0f5f1;
  color: #1d311f;

  &::placeholder {
    color: #1d311f88;
  }
`;


// botao enviar do local de contato (parte de cima do footer)
const SendButton = styled.button`
  padding: 0.8rem 2rem;
  background-color: #b4d9c4;
  color: #1d311f;
  border: none;
  border-radius: 30px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #cde6d8;
  }
`;

//local do logo e infos do footer
const FooterContainer = styled.footer`
  background-color: #1D311F;
  color: white;
  width: 100%;
  padding: 2.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

//onde fica o logo e "empresa e funcionarios" no meio ao centro do footer 
const CenterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

//logo da emoresa, com responsividade
const Logo = styled.h2`
  font-family: 'Spectral', serif;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1rem;
  font-size: 42px;

  @media(min-width: 640px) {
    font-size: 56px;
  }

  @media(min-width: 1024px) {
    font-size: 64px;
  }
`;

// nav links - Empresa e funcionarios em baixo do logo - com responsividade
//quando passa o cursor por cima tem unrline e muda de cor 
// tem responsividade com media 
const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-family: 'Inter', sans-serif;
  font-weight: 800;
  font-size: 20px;

  @media (min-width: 640px) {
    flex-direction: row;
    gap: 2rem;
    font-size: 22px;
  }

  @media (min-width: 1024px) {
    font-size: 24px;
  }

  a {
    color: white;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

//secao/ container do fale conosco e in=cones de social media - com responsividade media 
const BottomContent = styled.div`
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  width: 100%;
  max-width: 1280px;
  align-self: center;

  @media(min-width: 640px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 0;
  }
`;

//area para contato
//titulo h3 com responsividade -media  - dependendo do tamanho da tela muda fonte
//info fale conosco (p) - responsividade media - muda fonte e espacamento dependendo do tamanho de telas
//primeiro tem os valores iniciais e depois o media com a responsividade

const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  font-family: 'Inter', 'sans-serif';

  h3 {
    font-family: 'Inter', 'sans-serif'; 
    font-weight: 800;
    font-size: 28px;
    margin-bottom: 0.8rem;

    @media(min-width: 640px) {
      font-size: 32px;
    }

    @media(min-width: 1024px) {
      font-size: 36px;
    }
  }

  p {
    font-weight: 400;
    font-size: 18px;
    margin: 0.2rem 0;
    padding-left: 0.5rem;

    @media(min-width: 640px) {
      font-size: 20px;
      padding-left: 1rem;
    }

    @media(min-width: 1024px) {
      font-size: 22px;
      padding-left: 1.5rem;
    }
  }
`;

// & hover, quando cursor estiver em cima, mudar de cor 
// @media - responsividade para quando o tamanho da tela for de 640px - responsividade container e dps para os icones
//svg icones insta, face e linkedin 
const Icons = styled.div`
  display: flex;
  gap: 1rem;
  align-self: flex-start;

  @media(min-width: 640px) {
    align-self: center;
  }

  svg {
    width: 48px;
    height: 48px;
    color: white;
    transition: 0.3s;

    @media(min-width: 640px) {
      width: 55px;
      height: 55px;
    }

    @media(min-width: 1024px) {
      width: 60px;
      height: 60px;
    }

    &:hover {
      color: #b4d9c4;
    }
  }
`;

// quando a lagura for de 640px mudar a fonte - responsividade @media
const LegalNotice = styled.div`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 11px;
  margin-top: 2.5rem;
  text-align: center;

  @media(min-width: 640px) {
    font-size: 12px;
  }
`;


const Footer = () => {
  //Cada linha cria uma constante - state hook- para armazenar o valor do respectivo campo
  // todos se inciam vazios, sem string
  //setXXX é a funcao usada para atualizar o valor, conforme o usuário digita
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");

  // quando apertamos o botao enviar, limpa todos os campos 
  // botao enviar funciona com handle submit 
  const handleSubmit = () => {
    setNome("");
    setTelefone("");
    setEmail("");
  };

  // type = text recebe uma string, =email recebe .com e @, =tel - teclado numerico
  //value = o que faz, então é o que vai ser enviado no meu input
  //place holder = orienta o que a pessoa vai escrever no input 

  //ONCHANGE - IMPORTANTE
  // e representa mudanca no react
  // e.target.value é o novo texto que o usuário acabou de digitar.
  //Quando o usuário digita algo, o React dispara essa função, que chama setNome(...)
  //resumindo - quando o usuario esta digitando o e.target.value vai salvando o texto digitado e quando a pessoa envia ela "set" um nome
  // Usamos onChange pq sem ele o react nao saberis quando o texto mudou e nao conseguiriamos capturar o valor do input

  //HANDLE SUBMIT - quando clicamos no botao com  essa funcao as informacoes sao enviadas e os campos são limpos 
  //const que definimos ali em cima 
 
  return (
    <FooterContainer>
      <ContactBar>
        <ContactTitle>Entre em contato com a empresa</ContactTitle>
        <ContactInputs>
          <InputField
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <InputField
            type="tel"
            placeholder="Telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
          <InputField
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </ContactInputs>
        <SendButton type="button" onClick={handleSubmit}>
          ENVIAR
        </SendButton>
      </ContactBar>

      <CenterContent>
        <Logo>R. Amaral Office</Logo>
        <NavLinks>
          <a href="#">EMPRESA</a>
          <a href="#">FUNCIONARIOS</a>
        </NavLinks>
      </CenterContent>

      <BottomContent>
        <ContactSection>
          <h3>FALE CONOSCO:</h3>
          <p>R.AmaralOffice@gmail.com</p>
          <p>+55 (11) 8265-3746</p>
          <p>Nossa Loja Física: Rua dos Pinheiros, n48 - São Paulo, SP</p>
        </ContactSection>

        <Icons>
          <a href="https://facebook.com" target="_blank">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" target="_blank" >
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" >
            <FaLinkedinIn />
          </a>
        </Icons>
      </BottomContent>

      <LegalNotice>
        2025 R. Amaral Office - Todos os direitos reservados \{' '}
        <a >Política de Privacidade</a> \{' '}
        <a >Termos de uso</a>
      </LegalNotice>
    </FooterContainer>
  );
};

export default Footer;
