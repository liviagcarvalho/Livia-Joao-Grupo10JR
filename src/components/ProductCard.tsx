import React, { useState } from 'react';

interface ProductCardProps {
  name: string;
  price: string;
  images?: Record<string, string>; // imagens por cor
  image?: string; // fallback
  colors: string[];
}

export const ProductCard = ({
  name,
  price,
  images,
  image,
  colors,
}: ProductCardProps) => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const displayImage =
    images && selectedColor in images
      ? images[selectedColor]
      : image ?? Object.values(images ?? {})[0];

  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-[300px] sm:max-w-full mx-auto min-h-[460px] flex flex-col justify-between">
      {/* Imagem */}
      <img
        src={displayImage}
        alt={name}
        className="w-full h-[220px] object-cover border border-[#1D311F] mb-4 rounded"
      />

      {/* Título e preço */}
      <div className="flex flex-col items-center gap-1">
        <h3 className="text-[15px] text-center font-medium">{name}</h3>
        <p className="text-center text-[16px] font-bold mb-2">{price}</p>
      </div>

      {/* Bolinhas de cor */}
      <div className="flex justify-center gap-3 mb-4">
        {colors.map((cor) => (
          <button
            key={cor}
            onClick={() => setSelectedColor(cor)}
            className={`w-5 h-5 rounded-full border ${cor === '#ffffff' ? 'border-gray-300' : ''}`}
            style={{
              backgroundColor: cor,
              outline: selectedColor === cor ? '2px solid #1D311F' : 'none',
            }}
          />
        ))}
      </div>

      {/* Botão */}
      <button className="bg-[#1D311F] hover:bg-[#16341C] transition text-white w-full py-2 rounded-md text-sm font-semibold">
        SAIBA MAIS
      </button>
    </div>
  );
};
