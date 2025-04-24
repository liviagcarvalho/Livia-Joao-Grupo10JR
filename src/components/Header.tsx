
// export default Header;
import SwitchToggle from "../components/SwitchToggle" //importa um componente personalizado; Geralmente é um botão que “liga/desliga” algo no UI.
import React, { useState } from 'react';
//useState é um Hook do React que permite criar e gerenciar estados dentro de componentes funcionais.
import { Link } from 'react-router-dom';
//O Link é um componente do React Router que cria links de navegação interna sem recarregar a página. É o equivalente a um <a>, mas mantém sua SPA (Single Page Application).
import styled from 'styled-components';
import { FiChevronDown } from 'react-icons/fi';
//importa um ícone (setinha para baixo) da biblioteca react-icons.
import Orcamento from '../pages/OrcamentoB2B'; 
import { useLocation, useNavigate } from "react-router-dom";
//useLocation retorna o objeto que descreve a URL atual (útil para ler query params, estado, pathname).
//useNavigate retorna uma função que permite navegar programaticamente (por exemplo, navigate('/produtos')).

// COMPONENTE PRINCIPAL 
const Header = () => {
  //isOrcamentoOpen: é o nome da caixinha. Quando for true, o orçamento está aberto; quando for false, está fechado.
  const [isOrcamentoOpen, setOrcamentoOpen] = useState(false);
  //setOrcamentoOpen: é a função para mudar o valor dentro dessa caixinha. Para abrir o orçamento, chamar setOrcamentoOpen(true); para fechar, setOrcamentoOpen(false).
  return (
    <HeaderWrapper>
      {/* TOPO VERDE ESCURO 
      Top bar- inicio do header*/}
      <TopBar>
        <TopContent>
          <ButtonGroup>
            {/* O TopLink é um componente React criado com a biblioteca styled-components - veja no código la em baixo - que “empacota” o componente <Link> do React Router e já aplica estilos CSS nele
            Vem de import { Link } from 'react-router-dom'.
            Substitui a tag <a> tradicional: ao clicar, muda a rota sem recarregar a página inteira
            Em vez de usar href="…", passa a usar to="/alguma-rota":*/}
            <TopLink to="/sobre"> 
              Sobre nós <FiChevronDown/>
            </TopLink>
            <TopLink to="/ajuda-b2b">
              Ajuda <FiChevronDown/>  {/* dentro do styled compnents top link, tem o que esta escrcrito e a flechinha da biblioteca */}
            </TopLink>
          </ButtonGroup>

          {/*<Language>
            <span>Idioma</span>
            <Flag src="https://flagcdn.com/w40/br.png" alt="Bandeira do Brasil" />
          </Language>*/}
        </TopContent>

        <SwitchContainer>
          <Switch>
            <span>Para Clientes</span>
            <SwitchToggle />
              <div />
            <span>Para Empresas</span>
          </Switch>

          <Logo to="/">R. Amaral Office</Logo>

          <Spacer />  {/* Espaço é porque como estabeleci que justify-content: space-between; preciso colocar alguma coisa para ficar no final pois se nao o logo iria ficar grudado do lado direito */}
        </SwitchContainer>
      </TopBar>

      {/* MENU BRANCO */}
      <MenuWrapper>
          <Nav>
            <Link to="/produtos">EXPLORAR</Link>
            <Link to="/produtos/moveis">MÓVEIS</Link>
            <Link to="/produtos/eletronicos">ELETRÔNICOS</Link>
            <Link to="/produtos/materiais">MATERIAIS</Link>
            <Link to="/produtos/ambientacao">AMBIENTAÇÃO & CONFORTO</Link>
          </Nav>
          <QuoteButton onClick={() => setOrcamentoOpen(true)}> {/* on click deixa setOrcamentoOpen(true) então antes estava falso e agora quando a pessoa clica fica open*/}
            FAÇA SEU ORÇAMENTO
          </QuoteButton>
        
      </MenuWrapper>

      {/* MODAL DE ORÇAMENTO */}
      {isOrcamentoOpen && <Orcamento closeOrcamento={() => setOrcamentoOpen(false)} />}
    </HeaderWrapper>
  );
};

export default Header;


// ESTILOS COM STYLED-COMPONENTS
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
  background-color: #1D311F;
  color: white;
  width: 100%; // vai ocupar 100% da largura do seu elemento-pai 
  padding: 0.5rem 1.5rem 0.25rem 1.5rem;
`;
//está definindo, em ordem:
// padding-top: 0.5rem;
// padding-right: 1.5rem;
// padding-bottom: 0.25rem;
// padding-left: 1.5rem;

const TopContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const ButtonGroup = styled.div`
  display: flex; // faz ficar um do lado do outro e nao um em cima do outro
  gap: 1.5rem; // espçamento entre os itens do button group (sobre nos e ajuda)
  font-size: 15px;
`;

//styled-components permite escrever CSS dentro de um template literal e associá-lo a um componente React.
// styled(Link) - é um componente do React Router -trocar de rota sem recarregar a página inteira
// Em vez de usar href="…", você passa to="/alguma-rota":
const TopLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 4px;
  color: white;

  // quando o mouse passar por cima, adiciona sublinhado
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
// SwitchContainer é só o “caixote” que agrupa o switch

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
// Switch define o espaço para as duas legendas e a alavanca do toggle

const Toggle = styled.div`
  width: 40px; //largura total do trilho (40px).
  height: 20px; // altura total
  background: white; //Cor de fundo
  border-radius: 9999px; //Arredonda fortemente as bordas, gerando um formato “pílula”
  position: relative;

  div { /* Seleciona o <div> interno (a bolinha do toggle)*/
    width: 20px; // altura e largura iguais para quando aplicar o border ficar uma bolinha
    height: 20px;
    background: #1D311F; // cor do fundo da pilula quando a bolinha desliza desliza
    border-radius: 9999px;
    position: absolute; 
    right: 0; //Encosta a bolinha no lado direito
    transition: all 0.3s; // faz a mudaça de posicao da bolota ser suave
  }
`;
// Toggle é o estilo do “trilho” branco (onde a bolinha desliza) e da bolinha escura que muda de lado

//Logo é o nome da empresa que tem link pois quando a pessoa clica vai para a home 
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

// spacer explicado no código
const Spacer = styled.div`
  width: 220px;
`;

const MenuWrapper = styled.div`
  background: white;
  width: 100%;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  max-width: 1282px;
  margin: 0 auto;
  padding: 0.75rem 0.5rem;
  display: flex;
  align-items: center;
`;

//área onde reune os links que ajudam o usuário a “navegar” pelo site
const Nav = styled.nav`
  display: flex;
  gap: 2.5rem;
  font-size: 20px;
  font-weight: bold;
  color: #1D311F;
  flex-grow: 1; //Faz o nav “crescer” para ocupar todo o espaço horizontal disponível, empurrando o botão para a direita

  a { //Seleciona cada <a> dentro do nav para aplicar estilos específicos aos links
    white-space: nowrap; //Impede que o texto quebre em várias linhas; mantém tudo numa única linha

    &:hover { // quando o cursor esta em cima muda para marrom dourado ( a cor das letras)
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