import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomeB2B from './pages/HomeB2B';
import ProductB2B from './pages/ProductB2B';
import AjudaB2B from './pages/AjudaB2B';
import AjudaB2C from './pages/AjudaB2C';
import SobreB2B from './pages/SobreB2B';
import SobreB2C from './pages/SobreB2C';
import HomeB2C from './pages/HomeB2C';
import ProdutoB2B from './pages/ProdutoB2B';
import { CartProvider } from './components/CartContext'; 

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
          <Route path="/produtos/:categoria" element={<ProductB2B />} />
          <Route path="/produto/:nome" element={<ProdutoB2B />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
