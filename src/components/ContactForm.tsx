import React from "react";

const ContactSupportForm = () => {
  return (
    <section className="w-full flex justify-center py-20 px-4 bg-white">
      <div
        className="w-[1018px] h-[580px] bg-[#1D311F]/[0.10] border border-[#1D311F] rounded-[30px] px-8 py-6 flex flex-col gap-6"
      >
        <h2 className="text-[#1D311F] font-[Spectral] font-bold text-[48px]">
          Central de Apoio ao Cliente
        </h2>

        <input
          type="text"
          placeholder="Digite seu Nome e Sobrenome"
          className="w-full bg-white rounded-md px-4 py-3 text-[20px] font-[Inter] font-medium outline-none"
        />

        <input
          type="email"
          placeholder="Digite seu Email"
          className="w-full bg-white rounded-md px-4 py-3 text-[20px] font-[Inter] font-medium outline-none"
        />

        <textarea
          rows={6}
          placeholder="Nos conte seu problema aqui"
          className="w-full bg-white rounded-md px-4 py-3 text-[20px] font-[Inter] font-medium outline-none resize-none"
        ></textarea>
      </div>
    </section>
  );
};

export default ContactSupportForm;