import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import { ProductCard } from '../components/ProductCard';

const allProducts = [
  {
    image: '/src/assets/HomePage/EscritorioPrivadoHomePage.png',
    name: 'Cadeira Conforto Pro',
    price: 'R$187,90',
    colors: ['#000000', '#f5f5f5', '#8B8177'],
    categoria: 'moveis',
  },
  {
    image: '/src/assets/HomePage/cooworkingHomePage.png',
    name: 'Fone de Ouvido XYZ',
    price: 'R$xyz,ab',
    colors: ['#000000', '#e5e5e5'],
    categoria: 'eletronicos',
  },
  // Adicione mais produtos com diferentes categorias
];

export default function ProductB2B() {
  const { categoria } = useParams(); // pega da URL

  const produtosFiltrados = categoria
    ? allProducts.filter((p) => p.categoria === categoria.toLowerCase())
    : allProducts;

  return (
    <div>
      <Header />
      <div className="bg-[#F5F8F5] py-4">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-lg font-semibold mb-4">
            {categoria ? `Categoria: ${categoria}` : 'Todos os Produtos'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {produtosFiltrados.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
