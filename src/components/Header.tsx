// import React from 'react';
// import { Link } from 'react-router-dom';

// const Header = () => {
//   return (
//     <header className="w-full font-[Inter]">
//       {/* TOPO VERDE ESCURO */}
//       <div className="bg-[#1D311F] text-white w-full px-6 pt-2 pb-1">
//         <div className="w-full flex justify-between items-start">
//           <div className="flex gap-6 text-[15px]">
//             <button className="hover:underline">Sobre nós</button>
//             <button className="hover:underline">Ajuda</button>
//           </div>

//           <div className="flex items-center gap-2 text-[15px]">
//             <span>Idioma</span>
//             <img
//               src="https://flagcdn.com/w40/br.png"
//               alt="Bandeira do Brasil"
//               className="w-5 h-4 object-cover"
//             />
//           </div>
//         </div>

//         <div className="max-w-[1282px] mx-auto flex justify-between items-center mt-2">
//           <div className="flex items-center gap-3">
//             <span className="text-[16px] font-bold font-[Spectral]">Loja</span>
//             <div className="w-10 h-5 bg-white rounded-full relative">
//               <div className="w-5 h-5 bg-[#1D311F] rounded-full absolute right-0 transition" />
//             </div>
//             <span className="text-[16px] font-bold font-[Spectral]">Pedido Corporativo</span>
//           </div>

//           {/* Logo com link para a home */}
//           <Link
//             to="/"
//             className="text-[48px] font-extrabold font-[Spectral] text-white leading-[58px] text-center flex-1 hover:opacity-90 transition"
//           >
//             R. Amaral Office
//           </Link>

//           <div className="w-[220px]"></div>
//         </div>
//       </div>

//       {/* MENU BRANCO */}
//       <div className="bg-white w-full shadow-sm border-b">
//         <div className="max-w-[1282px] mx-auto flex items-center px-2 py-3">
//           {/* Menu de navegação */}
//           <nav className="flex gap-10 text-[20px] font-bold text-[#1D311F] flex-grow">
//             <Link to="/produtos" className="hover:text-[#aa8453] whitespace-nowrap">EXPLORAR</Link>
//             <Link to="/produtos/moveis" className="hover:text-[#aa8453] whitespace-nowrap">MÓVEIS</Link>
//             <Link to="/produtos/eletronicos" className="hover:text-[#aa8453] whitespace-nowrap">ELETRÔNICOS</Link>
//             <Link to="/produtos/materiais" className="hover:text-[#aa8453] whitespace-nowrap">MATERIAIS</Link>
//             <Link to="/produtos/ambientacao" className="hover:text-[#aa8453] whitespace-nowrap">AMBIENTAÇÃO & CONFORTO</Link>
//           </nav>

//           <button
//             className="bg-[#1D311F] text-white text-[16px] font-bold rounded-full px-10 py-2 tracking-wide ml-auto"
//             style={{ borderRadius: '30px', width: '300px', height: '48px' }}
//           >
//             FAÇA SEU ORÇAMENTO
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
import SwitchToggle from "../components/SwitchToggle"
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FiChevronDown } from 'react-icons/fi';
import Orcamento from '../pages/OrcamentoB2B'; // aqui está o seu modal de orçamento
import { useLocation, useNavigate } from "react-router-dom";



// ====== ESTILOS COM STYLED-COMPONENTS ======
const HeaderWrapper = styled.header`
  width: 100%;
  font-family: 'Inter', sans-serif;
`;

const TopBar = styled.div`
  background-color: #1D311F;
  color: white;
  width: 100%;
  padding: 0.5rem 1.5rem 0.25rem 1.5rem;
`;

const TopContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  font-size: 15px;
`;

const TopLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 4px;
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Language = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 15px;
`;

const Flag = styled.img`
  width: 20px;
  height: 16px;
  object-fit: cover;
`;

const SwitchContainer = styled.div`
  max-width: 1282px;
  margin: 0 auto;
  margin-top: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Switch = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span {
    font-size: 16px;
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
  color: white;
  line-height: 58px;
  text-align: center;
  flex: 1;
  transition: 0.3s;

  &:hover {
    opacity: 0.9;
  }
`;

const Spacer = styled.div`
  width: 220px;
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
`;

const Nav = styled.nav`
  display: flex;
  gap: 2.5rem;
  font-size: 20px;
  font-weight: bold;
  color: #1D311F;
  flex-grow: 1;

  a {
    white-space: nowrap;
    transition: 0.3s;

    &:hover {
      color: #aa8453;
    }
  }
`;

const QuoteButton = styled.button`
  background-color: #1D311F;
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 0.5rem 2.5rem;
  border-radius: 30px;
  height: 48px;
  width: 300px;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background-color: #2b452d;
  }
`;

// ===== COMPONENTE PRINCIPAL =====
const Header = () => {
  const [isOrcamentoOpen, setOrcamentoOpen] = useState(false);

  return (
    <HeaderWrapper>
      {/* TOPO VERDE ESCURO */}
      <TopBar>
        <TopContent>
          <ButtonGroup>
            <TopLink to="/sobre">
              Sobre nós <FiChevronDown size={14} />
            </TopLink>
            <TopLink to="/ajuda-b2b">
              Ajuda <FiChevronDown size={14} />
            </TopLink>
          </ButtonGroup>

          <Language>
            <span>Idioma</span>
            <Flag src="https://flagcdn.com/w40/br.png" alt="Bandeira do Brasil" />
          </Language>
        </TopContent>

        <SwitchContainer>
          <Switch>
            <span>Loja</span>
            <SwitchToggle />
              <div />
            <span>Pedido Corporativo</span>
          </Switch>

          <Logo to="/">R. Amaral Office</Logo>

          <Spacer />
        </SwitchContainer>
      </TopBar>

      {/* MENU BRANCO */}
      <MenuWrapper>
        <MenuContent>
          <Nav>
            <Link to="/produtos">EXPLORAR</Link>
            <Link to="/produtos/moveis">MÓVEIS</Link>
            <Link to="/produtos/eletronicos">ELETRÔNICOS</Link>
            <Link to="/produtos/materiais">MATERIAIS</Link>
            <Link to="/produtos/ambientacao">AMBIENTAÇÃO & CONFORTO</Link>
          </Nav>
          <QuoteButton onClick={() => setOrcamentoOpen(true)}>
            FAÇA SEU ORÇAMENTO
          </QuoteButton>
        </MenuContent>
      </MenuWrapper>

      {/* MODAL DE ORÇAMENTO */}
      {isOrcamentoOpen && <Orcamento closeOrcamento={() => setOrcamentoOpen(false)} />}
    </HeaderWrapper>
  );
};

export default Header;
