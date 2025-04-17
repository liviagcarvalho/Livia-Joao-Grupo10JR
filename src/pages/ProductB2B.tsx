import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import Footer from '../components/Footer';


const allProducts = [
  {
    name: 'Cadeira Conforto Pro',
    price: 'R$187,90',
    images: {
      '#ffffff': '/src/assets/Produtos/Cadeira Conforto/Cadeira Conforto Branca.png',
      '#5C4033': '/src/assets/Produtos/Cadeira Conforto/Cadeira Conforto Marrom.png',
      '#000000': '/src/assets/Produtos/Cadeira Conforto/Cadeira Conforto Preta.png',
    },
    colors: ['#ffffff', '#5C4033', '#000000'],
    categoria: 'moveis',
    tags: ['mais-vendidos', 'ver-tudo']
  },
  {
    name: 'Cadeira Joelhos',
    price: 'R$190,00',
    images: {
      '#000000': '/src/assets/Produtos/Cadeira Joelhos/Cadeira Joelhos Preta.png'
    },
    colors: ['#000000'],
    categoria: 'moveis',
    tags: ['mais-vendidos', 'ver-tudo']
  },
  {
    name: 'Locker G',
    price: 'R$350,00',
    images: {
      '#003366': '/src/assets/Produtos/LockerG/Locker G azul.png',
      '#FFD700': '/src/assets/Produtos/LockerG/Locker G amarelo.png',
      '#228B22': '/src/assets/Produtos/LockerG/Locker G verde.png',
    },
    colors: ['#003366', '#FFD700', '#228B22'],
    categoria: 'moveis',
    tags: ['lancamentos', 'ver-tudo']
  },
  {
    name: 'Mesa L',
    price: 'R$420,00',
    images: {
      '#ffffff': '/src/assets/Produtos/Mesa L/Mesa L Branca.png',
      '#5C4033': '/src/assets/Produtos/Mesa L/Mesa L Marrom.png',
    },
    colors: ['#ffffff', '#5C4033'],
    categoria: 'moveis',
    tags: ['mais-vendidos', 'ver-tudo']
  },
  {
    name: 'Suporte de Monitor',
    price: 'R$89,90',
    images: {
      '#D3D3D3': '/src/assets/Produtos/suporte/suportedemonitor.png'
    },
    colors: ['#D3D3D3'],
    categoria: 'materiais',
    tags: ['mais-vendidos', 'ver-tudo']
  },
  {
    name: 'Apoio de Itens',
    price: 'R$120,00',
    images: {
      '#ffffff': '/src/assets/Produtos/Apoio de Itens/Apoio de itens branco.png',
      '#000000': '/src/assets/Produtos/Apoio de Itens/Apoio de itens preto.png'
    },
    colors: ['#ffffff', "#000000"],
    categoria: 'materiais',
    tags: ['ver-tudo']
  },
  {
    name: 'Locker M',
    price: 'R$230,00',
    images: {
      '#ffffff': '/src/assets/Produtos/Locker M/Locker M Branco.png',
      '#228B22': '/src/assets/Produtos/Locker M/Locker M Verde.png'
    },
    colors: ['#ffffff', "#228B22"],
    categoria: 'moveis',
    tags: ['ver-tudo']
  },
  {
    name: 'Mesa de Seis Pessoas',
    price: 'R$500,00',
    images: {
      '#ffffff': '/src/assets/Produtos/Mesa Seis Pessoas/Mesa seis Pessoas Branca.png',
      '#DEB887': '/src/assets/Produtos/Mesa Seis Pessoas/Mesa seis Pessoas Madeira Clara.png',
      '#5C4033': '/src/assets/Produtos/Mesa Seis Pessoas/Mesa seis Pessoas Madeira Escura.png'
    },
    colors: ['#ffffff', "#DEB887", '#5C4033'],
    categoria: 'moveis',
    tags: ['ver-tudo', 'lancamentos']
  },
  {
    name: 'Tapetes',
    price: 'R$180,00',
    images: {
      '#003366': '/src/assets/Produtos/Tapetes/Tapete Azul.png',
      '#FFC0CB': '/src/assets/Produtos/Tapetes/Tapete Rosa.png',
      '#228B22': '/src/assets/Produtos/Tapetes/Tapete Verde.png'
    },
    colors: ['#003366', "#FFC0CB", '#228B22'],
    categoria: 'ambientacao',
    tags: ['ver-tudo']
  },
  {
    name: 'Pins Para Quadro',
    price: 'R$29,99',
    images: {
      '#D3D3D3': '/src/assets/Produtos/Pins/Pins para quadro.png'
    },
    colors: ['#D3D3D3'],
    categoria: 'materiais',
    tags: ['ver-tudo']
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
      <div className="w-full bg-[#DDE3DC] border-t border-b py-4">
        <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between px-4 gap-4">
          <div className="flex items-center gap-6 flex-wrap">
            <h2 className="text-[18px] font-semibold whitespace-nowrap">FILTROS</h2>
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
                  <button className="w-full text-left px-4 py-2 hover:bg-[#F5F8F5]" onClick={() => { setCategoriaFiltro('lancamentos'); setShowCategoria(false); }}>Lançamentos</button>
                  <button className="w-full text-left px-4 py-2 hover:bg-[#F5F8F5]" onClick={() => { setCategoriaFiltro('mais-vendidos'); setShowCategoria(false); }}>Mais Vendidos</button>
                  <button className="w-full text-left px-4 py-2 hover:bg-[#F5F8F5]" onClick={() => { setCategoriaFiltro(null); setShowCategoria(false); }}>Ver Tudo</button>
                </div>
              )}
            </div>
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
            {(categoriaFiltro || corFiltro) && (
              <button
                onClick={limparFiltros}
                className="text-sm text-[#1D311F] underline hover:text-[#4d5c45]"
              >
                Limpar filtros
              </button>
            )}
          </div>

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
                <button className="w-full text-left px-4 py-2 hover:bg-[#F5F8F5]" onClick={() => { setSortOption('menor'); setIsOpen(false); }}>Menor Preço</button>
                <button className="w-full text-left px-4 py-2 hover:bg-[#F5F8F5]" onClick={() => { setSortOption('maior'); setIsOpen(false); }}>Maior Preço</button>
                <button className="w-full text-left px-4 py-2 hover:bg-[#F5F8F5]" onClick={() => { setSortOption('az'); setIsOpen(false); }}>A–Z</button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="bg-[#F5F8F5] py-8">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-xl font-bold mb-6">{titulo}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {produtosOrdenados.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
