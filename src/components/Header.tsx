import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="w-full font-[Inter]">
      {/* TOPO VERDE ESCURO */}
      <div className="bg-[#1D311F] text-white w-full px-6 pt-2 pb-1">
        <div className="w-full flex justify-between items-start">
          <div className="flex gap-6 text-[15px]">
            <button className="hover:underline">Sobre nós</button>
            <button className="hover:underline">Ajuda</button>
          </div>

          <div className="flex items-center gap-2 text-[15px]">
            <span>Idioma</span>
            <img
              src="https://flagcdn.com/w40/br.png"
              alt="Bandeira do Brasil"
              className="w-5 h-4 object-cover"
            />
          </div>
        </div>

        <div className="max-w-[1282px] mx-auto flex justify-between items-center mt-2">
          <div className="flex items-center gap-3">
            <span className="text-[16px] font-bold font-[Spectral]">Loja</span>
            <div className="w-10 h-5 bg-white rounded-full relative">
              <div className="w-5 h-5 bg-[#1D311F] rounded-full absolute right-0 transition" />
            </div>
            <span className="text-[16px] font-bold font-[Spectral]">Pedido Corporativo</span>
          </div>

          {/* Logo com link para a home */}
          <Link
            to="/"
            className="text-[48px] font-extrabold font-[Spectral] text-white leading-[58px] text-center flex-1 hover:opacity-90 transition"
          >
            R. Amaral Office
          </Link>

          <div className="w-[220px]"></div>
        </div>
      </div>

      {/* MENU BRANCO */}
      <div className="bg-white w-full shadow-sm border-b">
        <div className="max-w-[1282px] mx-auto flex items-center px-2 py-3">
          {/* Menu de navegação */}
          <nav className="flex gap-10 text-[20px] font-bold text-[#1D311F] flex-grow">
            <Link to="/produtos" className="hover:text-[#aa8453] whitespace-nowrap">EXPLORAR</Link>
            <Link to="/produtos/moveis" className="hover:text-[#aa8453] whitespace-nowrap">MÓVEIS</Link>
            <Link to="/produtos/eletronicos" className="hover:text-[#aa8453] whitespace-nowrap">ELETRÔNICOS</Link>
            <Link to="/produtos/materiais" className="hover:text-[#aa8453] whitespace-nowrap">MATERIAIS</Link>
            <Link to="/produtos/ambientacao" className="hover:text-[#aa8453] whitespace-nowrap">AMBIENTAÇÃO & CONFORTO</Link>
          </nav>

          <button
            className="bg-[#1D311F] text-white text-[16px] font-bold rounded-full px-10 py-2 tracking-wide ml-auto"
            style={{ borderRadius: '30px', width: '300px', height: '48px' }}
          >
            FAÇA SEU ORÇAMENTO
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

