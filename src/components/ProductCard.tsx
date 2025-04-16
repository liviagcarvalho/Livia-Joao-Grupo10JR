import React from 'react';

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  colors: string[];
}

export const ProductCard: React.FC<ProductCardProps> = ({ image, name, price, colors }) => {
  return (
    <div className="w-64 border p-4 flex flex-col items-center bg-white shadow-md">
      <img src={image} alt={name} className="w-full h-48 object-contain mb-2" />
      <h3 className="text-sm text-gray-800 mb-1">{name}</h3>
      <p className="text-sm font-semibold mb-2">{price}</p>
      <div className="flex space-x-2 mb-3">
        {colors.map((color, idx) => (
          <span
            key={idx}
            className="w-4 h-4 rounded-full border"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
      <button className="bg-[#24341C] text-white px-4 py-1 rounded shadow-md hover:bg-[#1b2915]">
        SAIBA MAIS
      </button>
    </div>
  );
};

