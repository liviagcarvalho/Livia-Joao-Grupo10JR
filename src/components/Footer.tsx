import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1D311F] text-white w-full px-6 py-10 flex flex-col justify-between">
      {/* Logo e Navegação */}
      <div className="flex flex-col items-center text-center">
        <h2 className="font-[Spectral] font-extrabold text-[32px] sm:text-[40px] lg:text-[48px] leading-tight mb-4">
          R. Amaral Office
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 font-[Inter] font-extrabold text-[20px] sm:text-[22px] lg:text-[24px]">
          <a href="#">EMPRESA</a>
          <a href="#">ATENDIMENTO</a>
          <a href="#">PRODUTOS</a>
        </div>
      </div>

      {/* Contato e Ícones */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full max-w-[1280px] mx-auto mt-10 gap-10 sm:gap-0">
        {/* Contato à esquerda */}
        <div className="flex flex-col text-left">
          <h3 className="font-[Inter] font-extrabold text-[24px] sm:text-[28px] lg:text-[32px] mb-2">
            FALE CONOSCO:
          </h3>
          <p className="font-[Inter] font-medium text-[20px] sm:text-[22px] lg:text-[24px]">
            R.AmaralOffice@gmail.com
          </p>
          <p className="font-[Inter] font-medium text-[20px] sm:text-[22px] lg:text-[24px]">
            +55 (11) 8265-3746
          </p>
          <p className="font-[Inter] font-medium text-[20px] sm:text-[22px] lg:text-[24px]">
            Nossa Loja Física: Rua dos Pinheiros, n48 - São Paulo, SP
          </p>
        </div>

        {/* Ícones à direita */}
        <div className="flex gap-4 self-start sm:self-center">
          <a href="#"><FaFacebookF className="w-[48px] h-[48px] sm:w-[55px] sm:h-[55px] lg:w-[60px] lg:h-[60px]" /></a>
          <a href="#"><FaInstagram className="w-[48px] h-[48px] sm:w-[55px] sm:h-[55px] lg:w-[60px] lg:h-[60px]" /></a>
          <a href="#"><FaLinkedinIn className="w-[48px] h-[48px] sm:w-[55px] sm:h-[55px] lg:w-[60px] lg:h-[60px]" /></a>
        </div>
      </div>

      {/* Rodapé final */}
      <div className="text-center text-[11px] sm:text-[12px] font-[Inter] font-normal mt-10">
        2025 R. Amaral Office - Todos os direitos reservados \{' '}
        <a href="#" className="underline">Política de Privacidade</a> \{' '}
        <a href="#" className="underline">Termos de uso</a>
      </div>
    </footer>
  );
};

export default Footer;
