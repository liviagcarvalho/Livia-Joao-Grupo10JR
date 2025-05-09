import SwitchToggle from "../components/SwitchToggle"; // importa um botão de alternância
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FiChevronDown } from 'react-icons/fi'; // seta para dropdown
import Orcamento from '../pages/OrcamentoB2B'; // aqui está o seu modal de orçamento
import { User, ShoppingCart } from 'lucide-react'; // ícones de usuário e carrinho

// ====== ESTILOS COM STYLED-COMPONENTS ======
const HeaderWrapper = styled.header`
  width: 100%;
  font-family: 'Inter', sans-serif;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: white;
`;

const TopBar = styled.div`
  background-color: #9CAF88;
  color: #1D311F;
  width: 100%;
  padding: 0.5rem 1.5rem 0.25rem 1.5rem;
  position: relative;
`;

const TopContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  font-size: 15px;

  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const TopLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 4px;
  color: #1D311F;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const SwitchContainer = styled.div`
  max-width: 1282px;
  margin: 0 auto;
  margin-top: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const Switch = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span {
    font-size: 18px;
    font-weight: bold;
    font-family: 'Spectral', serif;
  }
`;

const Toggle = styled.div`
  width: 40px;
  height: 20px;
  background: white;
  border-radius: 9999px;
  position: relative;
  cursor: pointer;

  div {
    width: 20px;
    height: 20px;
    background: #1D311F;
    border-radius: 9999px;
    position: absolute;
    right: 0;
    transition: all 0.3s;
  }
`;

const Logo = styled(Link)`
  font-size: 48px;
  font-weight: 800;
  font-family: 'Spectral', serif;
  color: #1D311F;
  line-height: 58px;
  text-align: center;
  flex: 1;
  transition: 0.3s;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const Spacer = styled.div`
  width: 220px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuWrapper = styled.div`
  background: white;
  width: 100%;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid #eaeaea;
`;

const MenuContent = styled.div`
  max-width: 1282px;
  margin: 0 auto;
  padding: 0.75rem 0.5rem;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 2.5rem;
  font-size: 20px;
  font-weight: bold;
  color: #1D311F;
  flex-grow: 1;
  flex-wrap: wrap;
  justify-content: center;

  a {
    white-space: nowrap;
    transition: 0.3s;

    &:hover {
      color: #aa8453;
    }
  }
`;

const QuoteButton = styled(Link)`
  background-color: transparent;
  color: red;
  font-size: 24px;
  font-weight: bold;
  padding: 0.5rem 2.5rem;
  border-radius: 30px;
  height: 48px;
  width: 150px;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background-color: #2b452d;
    color: white;
  }

  @media (max-width: 768px) {
    width: 90%;
    text-align: center;
  }
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const B2CIcons = styled.div`
  position: absolute;
  bottom: 15px;
  right: 15px;
  display: flex;
  gap: 12px;
  color: #1D311F;

  @media (max-width: 768px) {
    position: static;
    margin-top: 1rem;
  }
`;

// ===== COMPONENTE PRINCIPAL =====
const Header = ({ abrirCarrinho }: { abrirCarrinho: () => void }) => {
  const [isOrcamentoOpen, setOrcamentoOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <HeaderWrapper>
      {/* TOPO VERDE CLARO */}
      <TopBar>
        <TopContent>
          <ButtonGroup>
            <TopLink to="/sobre-b2c">
              Sobre nós <FiChevronDown size={14} />
            </TopLink>
            <TopLink to="/ajuda-b2c">
              Ajuda <FiChevronDown size={14} />
            </TopLink>
          </ButtonGroup>
        </TopContent>

        <SwitchContainer>
          <Switch>
            <span>Para Clientes</span>
            <SwitchToggle />
            <div />
            <span>Para Empresas</span>
          </Switch>

          <Logo to="/b2c">R. Amaral Office</Logo>

          <Spacer />
        </SwitchContainer>

        <B2CIcons>
          <IconButton aria-label="Conta" onClick={() => navigate('/perfil')}>
            <User size={24} strokeWidth={3} />
          </IconButton>
          <IconButton aria-label="Carrinho" onClick={abrirCarrinho}>
            <ShoppingCart size={24} strokeWidth={3} />
          </IconButton>
        </B2CIcons>
      </TopBar>

      {/* MENU BRANCO */}
      <MenuWrapper>
        <MenuContent>
          <Nav>
            <Link to="/produtos-b2c">EXPLORAR</Link>
            <Link to="/produtos-b2c/moveis">MÓVEIS</Link>
            <Link to="/produtos-b2c/eletronicos">ELETRÔNICOS</Link>
            <Link to="/produtos-b2c/materiais">MATERIAIS</Link>
            <Link to="/produtos-b2c/ambientacao">AMBIENTAÇÃO & CONFORTO</Link>
          </Nav>
          <QuoteButton to="/Sale">
            SALE
          </QuoteButton>
        </MenuContent>
      </MenuWrapper>

      {/* MODAL DE ORÇAMENTO */}
      {isOrcamentoOpen && <Orcamento closeOrcamento={() => setOrcamentoOpen(false)} />}
    </HeaderWrapper>
  );
};

export default Header;
