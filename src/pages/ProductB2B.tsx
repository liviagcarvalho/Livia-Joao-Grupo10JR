import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';

const allProducts = [
  {
    image: '/src/assets/HomePage/EscritorioPrivadoHomePage.png',
    name: 'Cadeira Conforto Pro',
    price: 'R$187,90',
    colors: ['#000000', '#f5f5f5', '#8B8177'],
    categoria: 'moveis',
    tags: ['lancamentos', 'ver-tudo'],
  },
  {
    image: '/src/assets/HomePage/cooworkingHomePage.png',
    name: 'Fone de Ouvido XYZ',
    price: 'R$99,90',
    colors: ['#000000', '#e5e5e5'],
    categoria: 'eletronicos',
    tags: ['mais-vendidos', 'ver-tudo'],
  },
];

export default function ProductB2B() {
  const { categoria } = useParams();
  const [sortOption, setSortOption] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [showCategoria, setShowCategoria] = useState(false);
  const [showCor, setShowCor] = useState(false);
  const [categoriaFiltro, setCategoriaFiltro] = useState<string | null>(null);
  const [corFiltro, setCorFiltro] = useState<string | null>(null);

  let produtosFiltrados = categoria
    ? allProducts.filter((p) => p.categoria === categoria.toLowerCase())
    : allProducts;

  if (categoriaFiltro && categoriaFiltro !== 'ver-tudo') {
    produtosFiltrados = produtosFiltrados.filter((p) =>
      p.tags.includes(categoriaFiltro)
    );
  }

  if (corFiltro) {
    produtosFiltrados = produtosFiltrados.filter((p) =>
      p.colors.includes(corFiltro)
    );
  }

  const produtosOrdenados = [...produtosFiltrados].sort((a, b) => {
    const getPriceValue = (price: string) =>
      parseFloat(price.replace('R$', '').replace(',', '.'));

    switch (sortOption) {
      case 'menor':
        return getPriceValue(a.price) - getPriceValue(b.price);
      case 'maior':
        return getPriceValue(b.price) - getPriceValue(a.price);
      case 'az':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  const categoriaFormatada: Record<string, string> = {
    moveis: 'Móveis',
    eletronicos: 'Eletrônicos',
    materiais: 'Materiais',
    ambientacao: 'Ambientação & Conforto',
  };
  
  const titulo = categoria
    ? categoriaFormatada[categoria.toLowerCase()] || categoria
    : 'Todos os Produtos';
  

  const limparFiltros = () => {
    setCategoriaFiltro(null);
    setCorFiltro(null);
  };

  return (
    <div className="w-full">
      {/* Barra de filtros */}
      <div className="w-full bg-[#DDE3DC] border-t border-b py-4">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4">
          {/* Esquerda: filtros */}
          <div className="flex items-center gap-6">
            <h2 className="text-[18px] font-semibold whitespace-nowrap">FILTROS</h2>

            {/* Dropdown: Categoria */}
            <div className="relative">
              <button
                onClick={() => {
                  setIsOpen(false);
                  setShowCategoria(!showCategoria);
                  setShowCor(false);
                }}
                className="bg-[#1D311F] text-white px-4 py-1 rounded"
              >
                Categoria
              </button>
              {showCategoria && (
                <div className="absolute left-0 mt-2 w-44 bg-white border rounded shadow-lg z-10">
                  <button
                    className="w-full text-left px-4 py-2 hover:bg-[#F5F8F5]"
                    onClick={() => {
                      setCategoriaFiltro('lancamentos');
                      setShowCategoria(false);
                    }}
                  >
                    Lançamentos
                  </button>
                  <button
                    className="w-full text-left px-4 py-2 hover:bg-[#F5F8F5]"
                    onClick={() => {
                      setCategoriaFiltro('mais-vendidos');
                      setShowCategoria(false);
                    }}
                  >
                    Mais Vendidos
                  </button>
                  <button
                    className="w-full text-left px-4 py-2 hover:bg-[#F5F8F5]"
                    onClick={() => {
                      setCategoriaFiltro(null);
                      setShowCategoria(false);
                    }}
                  >
                    Ver Tudo
                  </button>
                </div>
              )}
            </div>

            {/* Dropdown: Cor */}
            <div className="relative">
              <button
                onClick={() => {
                  setIsOpen(false);
                  setShowCategoria(false);
                  setShowCor(!showCor);
                }}
                className="bg-[#1D311F] text-white px-4 py-1 rounded"
              >
                Cor
              </button>
              {showCor && (
                <div className="absolute left-0 mt-2 bg-white border rounded shadow-lg p-3 flex gap-3 z-10">
                  {['#000000', '#ffffff', '#8B8177'].map((cor) => (
                    <button
                      key={cor}
                      onClick={() => {
                        setCorFiltro(cor === corFiltro ? null : cor);
                        setShowCor(false);
                      }}
                      className={`w-5 h-5 rounded-full border ${cor === '#ffffff' ? 'border-gray-300' : ''}`}
                      style={{ backgroundColor: cor }}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Botão Limpar Filtros */}
            {(categoriaFiltro || corFiltro) && (
              <button
                onClick={limparFiltros}
                className="text-sm text-[#1D311F] underline hover:text-[#4d5c45]"
              >
                Limpar filtros
              </button>
            )}
          </div>

          {/* Direita: Ordenado por */}
          <div className="relative">
            <button
              onClick={() => {
                setIsOpen(!isOpen);
                setShowCategoria(false);
                setShowCor(false);
              }}
              className="text-sm font-semibold bg-[#DDE3DC] text-[#1D311F] px-4 py-1 rounded flex items-center gap-2"
            >
              Ordenado por <span className="text-[12px]">▼</span>
            </button>
            {isOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-white border rounded shadow-lg z-10">
                <button
                  className="w-full text-left px-4 py-2 hover:bg-[#F5F8F5]"
                  onClick={() => {
                    setSortOption('menor');
                    setIsOpen(false);
                  }}
                >
                  Menor Preço
                </button>
                <button
                  className="w-full text-left px-4 py-2 hover:bg-[#F5F8F5]"
                  onClick={() => {
                    setSortOption('maior');
                    setIsOpen(false);
                  }}
                >
                  Maior Preço
                </button>
                <button
                  className="w-full text-left px-4 py-2 hover:bg-[#F5F8F5]"
                  onClick={() => {
                    setSortOption('az');
                    setIsOpen(false);
                  }}
                >
                  A–Z
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Produtos */}
      <div className="bg-[#F5F8F5] py-8">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-xl font-bold mb-6">{titulo}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {produtosOrdenados.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
