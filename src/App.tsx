import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomeB2B from './pages/HomeB2B';
import ProductB2B from './pages/ProductB2B';
import ProductB2C from './pages/ProductsB2C';
import AjudaB2B from './pages/AjudaB2B';
import AjudaB2C from './pages/AjudaB2C';
import SobreB2B from './pages/SobreB2B';
import SobreB2C from './pages/SobreB2C';
import HomeB2C from './pages/HomeB2C';
import SaleB2C from './pages/SaleB2C';
import ProdutoB2B from './pages/ProdutoB2B';
import { CartProvider } from './components/CartContext'; 
import ProdutoB2C from './pages/ProdutoB2C';
import PaginadosFuncionarios from './pages/PaginaFuncionario';
import Perfil from './pages/Perfil';

function App() {
  return (
    <CartProvider> 
      <Router>
        <Routes>
          <Route path="/b2c" element={<HomeB2C />} />
          <Route path="/ajuda-b2b" element={<AjudaB2B />} />
          <Route path="/ajuda-b2c" element={<AjudaB2C />} />
          <Route path="/sobre-b2c" element={<SobreB2C />} />
          <Route path="/sobre" element={<SobreB2B />} />
          <Route path="/" element={<HomeB2B />} />
          <Route path="/produtos" element={<ProductB2B />} />
          <Route path="/produtos-b2c" element={<ProductB2C />} />
          <Route path="/produtos/:categoria" element={<ProductB2B />} />
          <Route path="/produtos-b2c/:categoria" element={<ProductB2C />} />
          <Route path="/produto/:nome" element={<ProdutoB2B />} />
          <Route path="/produto-b2c/:nome"    element={<ProdutoB2C />} />
          <Route path="/Sale" element={<SaleB2C />} />
          <Route path="/funcionarios" element={<PaginadosFuncionarios />} />
          <Route path="/perfil" element={<Perfil />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
