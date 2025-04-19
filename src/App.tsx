import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomeB2B from './pages/HomeB2B';
import ProductB2B from './pages/ProductB2B';
import AjudaB2B from './pages/AjudaB2B';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/ajuda-b2b" element={<AjudaB2B />} />
        <Route path="/" element={<HomeB2B />} />
        <Route path="/produtos" element={<ProductB2B />} />
        <Route path="/produtos/:categoria" element={<ProductB2B />} />
      </Routes>
    </Router>
  );
}

export default App;