import React from 'react';

const Header = () => {
  return (
    <header className="w-full font-[Inter]">
      {/* TOPO VERDE ESCURO */}
      <div className="bg-[#1D311F] text-white w-full px-6 pt-2 pb-1">
        {/* LINHA SUPERIOR COM EXTREMOS */}
        <div className="w-full flex justify-between items-start">
          {/* ESQUERDA COLADA */}
          <div className="flex gap-6 text-[15px]">
            <button className="hover:underline">Sobre nós</button>
            <button className="hover:underline">Ajuda</button>
          </div>

          {/* DIREITA COLADA */}
          <div className="flex items-center gap-2 text-[15px]">
            <span>Idioma</span>
            <img
              src="https://flagcdn.com/w40/br.png"
              alt="Bandeira do Brasil"
              className="w-5 h-4 object-cover"
            />
          </div>
        </div>

        {/* SWITCH + LOGO */}
        <div className="max-w-[1282px] mx-auto flex justify-between items-center mt-2">
          {/* Switch loja/pedido */}
          <div className="flex items-center gap-3">
            <span className="text-[16px] font-bold font-[Spectral]">Loja</span>
            <div className="w-10 h-5 bg-white rounded-full relative">
              <div className="w-5 h-5 bg-[#1D311F] rounded-full absolute right-0 transition" />
            </div>
            <span className="text-[16px] font-bold font-[Spectral]">Pedido Corporativo</span>
          </div>

          {/* Logo central */}
          <h1 className="text-[48px] font-extrabold font-[Spectral] text-white leading-[58px] text-center flex-1">
            R. Amaral Office
          </h1>

          {/* Compensação visual */}
          <div className="w-[220px]"></div>
        </div>
      </div>

      {/* MENU BRANCO */}
      <div className="bg-white w-full shadow-sm border-b">
        <div className="max-w-[1282px] mx-auto flex justify-between items-center px-6 py-3">
          {/* Menu links */}
          <nav className="flex gap-10 text-[20px] font-bold text-[#1D311F] mr-20">
            <a href="#" className="hover:text-[#aa8453]">EXPLORAR</a>
            <a href="#" className="hover:text-[#aa8453]">MÓVEIS</a>
            <a href="#" className="hover:text-[#aa8453]">ELETRÔNICOS</a>
            <a href="#" className="hover:text-[#aa8453]">MATERIAIS</a>
            <a href="#" className="hover:text-[#aa8453]">AMBIENTAÇÃO & CONFORTO</a>
          </nav>

          {/* Botão grandão */}
          <button
            className="bg-[#1D311F] text-white text-[16px] font-bold rounded-full px-10 py-2 tracking-wide"
            style={{ borderRadius: '30px', width: '300px', height: '48px' }}>
            FAÇA SEU ORÇAMENTO
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
