import React, { useState } from "react";
import styled from "styled-components";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

// local de contato
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

const ContactTitle = styled.h4`
  font-family: 'Inter', 'sans-serif';
  font-weight: 700;
  font-size: 20px;
  color: white;

  @media (min-width: 640px) {
    font-size: 24px;
  }

  @media (min-width: 1024px) {
    font-size: 26px;
  }
`;

const ContactInputs = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 900px;
`;

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

  @media (max-width: 480px) {
    width: 90%;
  }
`;

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

  @media (max-width: 480px) {
    width: 90%;
  }
`;

// local do logo e infos do footer
const FooterContainer = styled.footer`
  background-color: #1D311F;
  color: white;
  width: 100%;
  padding: 2.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CenterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Logo = styled.h2`
  font-family: 'Spectral', serif;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1rem;
  font-size: 42px;

  @media (min-width: 640px) {
    font-size: 56px;
  }

  @media (min-width: 1024px) {
    font-size: 64px;
  }
`;

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

const BottomContent = styled.div`
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  width: 100%;
  max-width: 1280px;
  align-self: center;

  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 0;
  }
`;

const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center; // Centraliza no mobile para ficar mais bonito

  font-family: 'Inter', 'sans-serif';

  @media (min-width: 640px) {
    text-align: left; // Desktop volta para alinhamento normal
  }

  h3 {
    font-family: 'Inter', 'sans-serif';
    font-weight: 800;
    font-size: 28px;
    margin-bottom: 0.8rem;

    @media (min-width: 640px) {
      font-size: 32px;
    }

    @media (min-width: 1024px) {
      font-size: 36px;
    }
  }

  p {
    font-weight: 400;
    font-size: 18px;
    margin: 0.2rem 0;
    padding-left: 0.5rem;

    @media (min-width: 640px) {
      font-size: 20px;
      padding-left: 1rem;
    }

    @media (min-width: 1024px) {
      font-size: 22px;
      padding-left: 1.5rem;
    }
  }
`;

const Icons = styled.div`
  display: flex;
  gap: 1rem;
  align-self: center;

  svg {
    width: 48px;
    height: 48px;
    color: white;
    transition: 0.3s;

    @media (min-width: 640px) {
      width: 55px;
      height: 55px;
    }

    @media (min-width: 1024px) {
      width: 60px;
      height: 60px;
    }

    &:hover {
      color: #b4d9c4;
    }
  }
`;

const LegalNotice = styled.div`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 11px;
  margin-top: 2.5rem;
  text-align: center;

  @media (min-width: 640px) {
    font-size: 12px;
  }

  a {
    color: white;
    text-decoration: underline;

    &:hover {
      color: #b4d9c4;
    }
  }
`;

const Footer = () => {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    // Aqui futuramente pode ser feita a validação/envio para backend
    setNome("");
    setTelefone("");
    setEmail("");
  };

  return (
    <FooterContainer>
      {/* Bloco de Contato */}
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

      {/* Bloco Central - Logo e Navegação */}
      <CenterContent>
        <Logo>R. Amaral Office</Logo>
        <NavLinks>
          <a href="#">EMPRESA</a>
          <a href="#">ATENDIMENTO</a>
          <a href="#">PRODUTOS</a>
        </NavLinks>
      </CenterContent>

      {/* Bloco Inferior - Contatos e Ícones */}
      <BottomContent>
        <ContactSection>
          <h3>FALE CONOSCO:</h3>
          <p>R.AmaralOffice@gmail.com</p>
          <p>+55 (11) 8265-3746</p>
          <p>Nossa Loja Física: Rua dos Pinheiros, n48 - São Paulo, SP</p>
        </ContactSection>

        <Icons>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
        </Icons>
      </BottomContent>

      {/* Aviso Legal */}
      <LegalNotice>
        2025 R. Amaral Office - Todos os direitos reservados {' '}
        <a href="#">Política de Privacidade</a> {' '}
        <a href="#">Termos de uso</a>
      </LegalNotice>
    </FooterContainer>
  );
};

export default Footer;

