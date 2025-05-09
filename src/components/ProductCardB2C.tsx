//comentarios no product card b2b 

import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useCart } from '../components/CartContext';



export interface ProductCardProps {
  name: string;
  price: string;
  images?: Record<string, string>;
  colors: string[];
  abrirCarrinho?: () => void; // se passada como prop, deve disparar a abertura da interface do carrinho
}

export const ProductCard = ({
  name,
  price,
  images = {},
  colors,
  abrirCarrinho,
}: ProductCardProps) => {
  const { addItem } = useCart(); // puxando o que fizemos no arquivo do carrinho
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const displayImage =
    images[selectedColor] ?? Object.values(images)[0] ?? '';

  // handler de clique que une tudo
  const handleButtonClick = (e: React.MouseEvent) => { // (e: React.MouseEvent) simplesmente diz ao TypeScript “este e é um evento de clique de mouse do React”, trazendo todas as garantias de tipagem e autocompletar para trabalhar com ele.
    e.stopPropagation(); // impede que ao clicar no botao de acionar dispare eventos de click no card pai - ou seja, evita que o evento suba para elememntos pais
    addItem({ // construcao do objeto do produto (o que vai para o carrinho), em que a quantidade inicial é sempre 1 
      name,
      price,
      image: displayImage,
      quantity: 1,
    });
    abrirCarrinho?.(); // se a funcao de adicionar o produto no carrinho acontecer, o carrinho abre
  };

  //mais sobre o React.Mouseevent e stoppropagation - m “elemento pai” é simplesmente aquele que envolve ou contém outro elemento dentro dele na estrutura de árvore do DOM. Por exemplo, se você tem um <div> que envolve um <button>, esse <div> é o pai do <button>;
  //quando um clique no botão “borbulha” (bubbling), ele subiria até esse <div> pai e outros ancestrais, acionando event handlers neles, a menos que você use e.stopPropagation() para interromper essa subida.
  //Imagine que, quando você clica num botão, o navegador cria um “pacote de evento” que quer percorrer a árvore de elementos daquele botão para cima — primeiro dentro dele mesmo, depois no contêiner que o envolve, depois no contêiner ainda maior, e assim por diante, até chegar na raiz da página. Esse movimento de “subida” dos eventos pela hierarquia é o que chamamos de bubbling (ou borbulhamento)

  // monta o link (coloque aqui a sua rota de detalhe)
  const detalheLink = `/produto-b2c/${encodeURIComponent(name)}`;

  return (
    <Card>
      <Link to={detalheLink}>
        <ProductImage src={displayImage} alt={name} />
      </Link>

      <Info>
        <Link
          to={detalheLink}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <ProductName>{name}</ProductName>
        </Link>
        <ProductPrice>{price}</ProductPrice>
      </Info>

      <ColorPicker>
        {colors.length > 1 &&
          colors.map((cor) => (
            <ColorDot
              key={cor}
              color={cor}
              selected={selectedColor === cor}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedColor(cor);
              }}
            />
          ))}
      </ColorPicker>

      <AddButton onClick={handleButtonClick}>
        ADICIONAR AO CARRINHO
      </AddButton>
    </Card>
  );
};

// --- Styled Components ---

const Card = styled.div`
  background-color: white;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  padding: 1rem;
  width: 100%;
  max-width: 300px;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  border: 1px solid #1d311f;
  border-radius: 0.375rem;
  margin-bottom: 1rem;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  margin-bottom: 1rem;
`;

const ProductName = styled.h3`
  font-size: 15px;
  font-weight: 500;
  text-align: center;
`;

const ProductPrice = styled.p`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;

const ColorPicker = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  height: 32px;
  margin-bottom: 1rem;
`;

const ColorDot = styled.button<{ color: string; selected: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 9999px;
  border: ${({ color }) =>
    color === '#ffffff' ? '1px solid #d1d5db' : 'none'};
  background-color: ${({ color }) => color};
  outline: ${({ selected }) => (selected ? '2px solid #1D311F' : 'none')};
  cursor: pointer;
`;

const AddButton = styled.button`
  background-color: #DDE3DC;    /* verde claro B2C */
  color: #1D311F;
  width: 100%;
  padding: 0.75rem;
  font-size: 14px;
  font-weight: 600;
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #C7D8BF;  /* hover um pouquinho mais escuro */
  }
`;
