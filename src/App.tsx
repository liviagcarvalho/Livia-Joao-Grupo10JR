import React from 'react';
import Header from './components/Header';
import ProductB2B from './pages/ProductB2B';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/produtos" element={<ProductB2B />} />
        <Route path="/produtos/:categoria" element={<ProductB2B />} />
      </Routes>
    </Router>
  );
}

export default App;


