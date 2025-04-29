import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../components/Footer';
import allProducts from '../components/allProducts'
import { FiSearch } from 'react-icons/fi';
import Header from '../components/Header'
import { useLocation } from 'react-router-dom';
import {ProductCardB2B} from '../components/ProductCard';


// Função principal do componente da página de produtos
export default function ProductB2B() {
  // Pega a categoria que definimos no Header - parametros (ex: "moveis", "materiais", etc.)
  const { categoria } = useParams();

  // Estados usados para filtros e ordenações
  const location = useLocation();
  const [sortOption, setSortOption] = useState(''); // como ordenar os produtos
  const [isOpen, setIsOpen] = useState(false); // dropdown de ordenação 
  const [showCategoria, setShowCategoria] = useState(false); // dropdown de categoria 
  const [showCor, setShowCor] = useState(false); // dropdown de cor 
  const [quantidadeVisivel, setQuantidadeVisivel] = useState(8); // controla se deve mostrar tudo ou só os primeiros
  

  //se location.state existir, ela retorna state.filtroInicial; se não existir, o resultado é undefined em vez de um erro.
  // O tipo string | null indica que, até você atribuir algo, categoriaFiltro pode ser null ou uma string.
  //no inicio vale null
  //set categoria filtro é a funcao que atualiza a actegoria
  const filtroInicial = location.state?.filtroInicial || null; //Captura de maneira segura o filtroInicial que veio no state da rota (via location.state?.filtroInicial), e — se esse valor não existir ou for undefined — usa o || null para atribuir null em vez de deixar filtroInicial indefinido.
  const [categoriaFiltro, setCategoriaFiltro] = useState<string | null>(null); // filtro por tag
  React.useEffect(() => {  // useEffect = lidar com efeitos colaterais (“side effects”) em componentes funcionais
    if (filtroInicial) { // verifica se exite valor em filtro incial
      setCategoriaFiltro(filtroInicial); // atualiza para o filtro escolhido (setusestate)
      // Limpa o state da URL para não reaplicar em reloads ou navegação
      window.history.replaceState({}, document.title);
    }
  }, []);
  

  // Filtra produtos com base na categoria 
  // se categoria nao for undefined usamos a primeira, se nao usamos a segunda linha
  let produtosFiltrados = categoria 
  ? allProducts.filter((p) => p.categoria === categoria.toLowerCase()) //aplica a categoria - percorre o array e devolve os produtos que tem aquela cat
  : allProducts; // cat undefined = todos os prod

  const [busca, setBusca] = useState(''); // termo da barra de busca
  // Aplica busca textual (por nome) - lugar de buscar
  if (busca.trim() !== '') { // remove espacos em branco - so entra se tiver algo digitado
    const termo = busca.toLowerCase(); // converte para minusculas 
    produtosFiltrados = produtosFiltrados.filter((p) => // array filtrado
      p.name.toLowerCase().includes(termo)
    );
  }


  // Aplica filtro adicional por "tags" (como 'lancamentos', 'mais-vendidos') - se o filtro for ver tudo, então não aplica filtro
  if (categoriaFiltro && categoriaFiltro !== 'ver-tudo') {
    produtosFiltrados = produtosFiltrados.filter((p) =>
      p.tags.includes(categoriaFiltro)
    );
  }
  
  //estado de corFiltro (set cor filtro para mudar de cor) - cor filtro= cor atual; setcorfiltro= para colocar uma cor nova (atualiza a cor)
  const [corFiltro, setCorFiltro] = useState<string | null>(null); // filtro por cor
  // Aplica filtro por cor
  if (corFiltro) {
    produtosFiltrados = produtosFiltrados.filter((p) =>
      p.colors.includes(corFiltro)
    );
  }

  // Ordena os produtos conforme o filtro selecionado - clona o array - garantindo que o .sort() ali embaixo não altere o array original.
  const produtosOrdenados = [...produtosFiltrados].sort((a, b) => { 
    // Converte o preço de string (ex: "R$199,00") para número (199.00) 
    // para comparar os valores numericamente
    const getPriceValue = (price: string) =>
      parseFloat(price.replace('R$', '').replace(',', '.'));
    // Quando encontra o case certo, retorna o valor que faz o .sort() colocar a antes ou depois de b
    switch (sortOption) {
      case 'menor': // subtrai a - b - ordem crescente
        return getPriceValue(a.price) - getPriceValue(b.price); // menor preço primeiro
      case 'maior': // // ordena do mais caro ao mais barato
        return getPriceValue(b.price) - getPriceValue(a.price); // maior preço primeiro
      case 'az':
        return a.name.localeCompare(b.name); // ordem alfabética
      default: //Se sortOption não for nenhuma dessas três, cai no default e mantém a ordem original.
        return 0;
    }
  });

  // Tradução dos nomes das categorias para exibição (chave para valor para deixar os nomes gramaticamente corretos)
  //constante categoria formatada
  const categoriaFormatada: Record<string, string> = {
    moveis: 'Móveis',
    eletronicos: 'Eletrônicos',
    materiais: 'Materiais',
    ambientacao: 'Ambientação & Conforto',
  };

  // Define o título que será exibido na página
  //se nao tiver uma categoria vai para todos os produtos 
  const titulo = categoria
    ? categoriaFormatada[categoria.toLowerCase()] || categoria
    : 'Todos os Produtos';

  // Função para limpar todos os filtros
  const limparFiltros = () => {
    setCategoriaFiltro(null);
    setCorFiltro(null);
  };

  // Traduz as cores HEX para nomes normais 
const nomesCores: Record<string, string> = {
  "#ffffff": "Branco",
  "#000000": "Preto",
  "#5C4033": "Marrom",
  "#DEB887": "Bege",
  "#003366": "Azul Escuro",
  "#228B22": "Verde",
  "#FFD700": "Amarelo",
  "#FFC0CB": "Rosa Claro",
};

// Traduz as tags de categoria - mesma coisa do nome das categorias
const nomesCategorias: Record<string, string> = {
  "lancamentos": "Lançamentos",
  "mais-vendidos": "Mais Vendidos",
  "ver-tudo": "Ver Tudo"
};

  // JSX retornado pelo componente
  return (
    <Container>
      <Header />
      {/* Barra de busca centralizada */}
      <SearchWrapper>
        <SearchBox>
          <SearchIcon>🔍</SearchIcon>
          <SearchInput 
            type="text" /* campo de texto comum */
            placeholder="Buscar produtos..." 
            value={busca}
            onChange={(e) => setBusca(e.target.value)} /* atualiza o campo a medida que o usuario digita */
          />
        </SearchBox>
      </SearchWrapper>

      {/* Barra superior com os filtros */}
      <FiltroBar>
        <FiltroWrapper>
          <div className="flex items-center gap-6 flex-wrap">
            <h2 className="text-[18px] font-semibold whitespace-nowrap">FILTROS</h2>

            {/* Filtro por Categoria */}
            <FiltroBox>
              {categoriaFiltro ? (
                <Botao
                  onClick={() => setCategoriaFiltro(null)} // clicando remove o filtro
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  {nomesCategorias[categoriaFiltro] || categoriaFiltro} ×
                </Botao>
              ) : (
                <Botao
                  onClick={() => {
                    setIsOpen(false); // fecha menu de ordenação
                    setShowCategoria(!showCategoria); // abre/fecha menu de categoria
                    setShowCor(false); // fecha menu de cor
                  }}
                >
                  Categoria
                </Botao>
              )}

              {showCategoria && (
                <Dropdown className="dropdown-list">
                  <button onClick={() => { setCategoriaFiltro('lancamentos'); setShowCategoria(false); }}>Lançamentos</button>
                  <button onClick={() => { setCategoriaFiltro('mais-vendidos'); setShowCategoria(false); }}>Mais Vendidos</button>
                  <button onClick={() => { setCategoriaFiltro(null); setShowCategoria(false); }}>Ver Tudo</button>
                </Dropdown>
              )}
            </FiltroBox>


            {/* Filtro por Cor */}
            <FiltroBox>
              {corFiltro ? (
                <Botao
                  onClick={() => setCorFiltro(null)} // clicando remove o filtro de cor
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  {nomesCores[corFiltro]} ×
                </Botao>
              ) : (
                <Botao
                  onClick={() => {
                    setIsOpen(false); // fecha menu de ordenação
                    setShowCategoria(false); // fecha menu de categoria
                    setShowCor(!showCor); // abre/fecha menu de cor
                  }}
                >
                  Cor
                </Botao>
              )}

              {showCor && (
                <Dropdown
                  style={{
                    padding: '0.75rem',
                    display: 'flex',
                    gap: '0.75rem',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    minWidth: '160px'
                  }}
                >
                  {[
                    "#ffffff", "#000000", "#5C4033", "#DEB887",
                    "#003366", "#228B22", "#FFD700", "#FFC0CB"
                  ].map((cor) => (
                    <CorButton
                      key={cor}
                      cor={cor}
                      onClick={() => {
                        setCorFiltro(cor === corFiltro ? null : cor);
                        setShowCor(false);
                      }}
                    />
                  ))}
                </Dropdown>
              )}
            </FiltroBox>

            {/* Botão para limpar filtros, só aparece se algum filtro estiver ativo */}
            {(categoriaFiltro || corFiltro) && (
              <button
                onClick={limparFiltros}
                style={{ color: '#1D311F', fontSize: '0.875rem', textDecoration: 'underline' }}
              >
                Limpar filtros
              </button>
            )}
          </div>

          {/* Dropdown de ordenação */}
          <FiltroBox>
            <button
              onClick={() => {
                setIsOpen(!isOpen); // abre/fecha menu de ordenação
                setShowCategoria(false); // fecha outros menus
                setShowCor(false);
              }}
              style={{ fontSize: '0.875rem', fontWeight: 600, backgroundColor: '#DDE3DC', color: '#1D311F', padding: '0.25rem 1rem', borderRadius: '5px' }}
            >
              Ordenado por <span style={{ fontSize: '0.75rem' }}>▼</span>
            </button>
            {isOpen && (
              <Dropdown className="dropdown-list"> {/* adicionada a classe */}
                <button onClick={() => { setSortOption('menor'); setIsOpen(false); }}>Menor Preço</button>
                <button onClick={() => { setSortOption('maior'); setIsOpen(false); }}>Maior Preço</button>
                <button onClick={() => { setSortOption('az'); setIsOpen(false); }}>A–Z</button>
              </Dropdown>
            )}
          </FiltroBox>
        </FiltroWrapper>
      </FiltroBar>

      {/* Área principal com os produtos */}
      <Main>
        <ContentWrapper>
          {/* Título da seção */}
          <Title>{titulo}</Title>

          {/* Grid com os cards dos produtos */}
          <Grid>
          {produtosOrdenados.slice(0, quantidadeVisivel).map((product, index) => (
            <ProductCardB2B key={index} {...product} />
          ))}

          </Grid>

          {/* Botão para ver mais produtos, aparece só se houver mais de 8 e não estiver mostrando todos ainda */}
          {quantidadeVisivel < produtosOrdenados.length && (
            <VerMaisWrapper>
              <VerMaisButton onClick={() => setQuantidadeVisivel(prev => prev + 8)}>
                VER MAIS
              </VerMaisButton>
            </VerMaisWrapper>
          )}

        </ContentWrapper>
      </Main>

      {/* Rodapé da página */}
      <Footer />
    </Container>
  );
}



const Container = styled.div`
  width: 100%;
  margin-top: 10rem;

  @media (max-width: 950px) {
    margin-top: 18rem;
  }

  /* Para tablets e telas intermediárias */
  @media (max-width: 768px) {
    margin-top: 20rem;
  }

  /* Para smartphones menores */
  @media (max-width: 480px) {
    margin-top: 25rem;
  }
`;


// Wrapper para centralizar e posicionar a barra de busca
const SearchWrapper = styled.div`
  width: 100%;
  background-color: #F5F8F5;
  padding: 2rem 1rem;
  display: flex;
  justify-content: center;
`;

// Container da busca (ícone + input)
const SearchBox = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  max-width: 600px;
  width: 100%;
  padding: 0.75rem 1rem;
  gap: 0.75rem;
`;

// Campo de input da busca
const SearchInput = styled.input`
  border: none;
  outline: none;
  width: 100%;
  font-size: 1rem;
  background: transparent;
`;

// Ícone da lupa
const SearchIcon = styled(FiSearch)`
  font-size: 1.2rem;
  color: #999;
`;

//Barra horizontal verde onde ficam os filtros e ordenado por 
const FiltroBar = styled.div` 
  width: 100%;
  background-color: #DDE3DC;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  padding: 1rem 0;
`;

//Organizador dos filtros - flex box para filtros e botoes 
const FiltroWrapper = styled.div`
  max-width: 1280px; 
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  gap: 1rem;
`;

//Estilização de botões (ex: botão "Categoria", "Cor", "Ordenar por") - cor verde escura de fundo, com letras brancas
const Botao = styled.button`
  background-color: #1D311F;
  color: white;
  padding: 0.25rem 1rem;
  border-radius: 5px;
`;

//Caixinha que aparece embaixo dos botões quando você clica neles 
const Dropdown = styled.div`
  position: absolute;
  margin-top: 0.5rem;
  background: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  z-index: 10;

  // Estilo aplicado apenas se for um dropdown de texto
  &.dropdown-list {
    display: flex;
    flex-direction: column;
    min-width: 160px; // define uma largura mínima
    padding: 0.5rem 0;

    // aplica estilo diretamente nos <button> dentro do Dropdown de texto
    button {
      background: none;
      border: none;
      text-align: left;
      padding: 0.5rem 1rem;
      cursor: pointer;
      width: 100%;
      font-size: 0.875rem;

      &:hover {
        background-color: #f0f0f0;
      }
    }
  }
`;

// posição dos botões do filtro
const FiltroBox = styled.div`
  position: relative;
`;

//Cores do filtro de cor 
const CorButton = styled.button<{ cor: string }>`
  width: 20px;
  height: 20px;
  border-radius: 9999px;
  border: ${(props) => (props.cor === '#ffffff' ? '1px solid #ccc' : 'none')};
  background-color: ${(props) => props.cor};
`;

//Area da página onde ficam os produtos 
const Main = styled.div`
  background-color: #F5F8F5;
  padding: 2rem 0;
`;

//centraliza e limita a largura do conteúdo dentro do `Main`
const ContentWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
`;

// Título da página de produtos
const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

//Grade responsiva para exibir os produtos - Cada `ProductCard` ocupa no mínimo 250px e o gap define o espaçamento
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`;

// Botão que aparece após duas linhas de produtos para expandir e ver mais
const VerMaisButton = styled.button`
  background-color: #1D311F;
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 5px;
  font-size: 0.875rem;
  cursor: pointer;
  border: none;
`;

// Centralizaçao o botão "Ver Mais" - Wrapper - nome que se da quando é um componente que engloba outros elementos 
const VerMaisWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
`;
