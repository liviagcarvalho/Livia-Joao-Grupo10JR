import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1D311F] text-white w-full px-6 py-10">
      {/* Parte superior */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center max-w-[1280px] mx-auto gap-12">
        {/* Logo + Navegação */}
        <div className="flex flex-col items-start">
          <h2 className="font-[Spectral] font-extrabold text-[32px] sm:text-[40px] lg:text-[48px] mb-4">
            R. Amaral Office
          </h2>
          <div className="flex flex-col sm:flex-row sm:gap-4 lg:gap-6 font-[Inter] font-extrabold text-[20px] sm:text-[22px] lg:text-[24px]">
            <a href="#">EMPRESA</a>
            <a href="#">ATENDIMENTO</a>
            <a href="#">PRODUTOS</a>
          </div>
        </div>

        {/* Fale Conosco */}
        <div className="flex flex-col items-start">
          <h3 className="font-[Inter] font-extrabold text-[24px] sm:text-[28px] lg:text-[32px] mb-2">
            FALE CONOSCO:
          </h3>
          <p className="font-[Inter] font-medium text-[20px] sm:text-[22px] lg:text-[24px]">
            R.AmaralOffice@gmail.com
          </p>
          <p className="font-[Inter] font-medium text-[20px] sm:text-[22px] lg:text-[24px]">
            +55 (11) 8265-3746
          </p>
        </div>

        {/* Ícones Sociais */}
        <div className="flex gap-4 self-start sm:self-center">
          <a href="#"><FaFacebookF className="w-[50px] h-[50px] sm:w-[55px] sm:h-[55px] lg:w-[60px] lg:h-[60px]" /></a>
          <a href="#"><FaInstagram className="w-[50px] h-[50px] sm:w-[55px] sm:h-[55px] lg:w-[60px] lg:h-[60px]" /></a>
          <a href="#"><FaLinkedinIn className="w-[50px] h-[50px] sm:w-[55px] sm:h-[55px] lg:w-[60px] lg:h-[60px]" /></a>
        </div>
      </div>

      {/* Linha inferior */}
      <div className="text-center mt-10 text-[11px] sm:text-[12px] font-[Inter] font-normal max-w-[1280px] mx-auto">
        2025 R. Amaral Office - Todos os direitos reservados \{' '}
        <a href="#" className="underline">Política de Privacidade</a> \{' '}
        <a href="#" className="underline">Termos de uso</a>
      </div>
    </footer>
  );
};

export default Footer;

