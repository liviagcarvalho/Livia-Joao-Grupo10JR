import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

//aqui esta sendo definidas as propriedades 
// então o que é o que 
// imagens - esta falando que é um objeto em que cada chave é p nome de uma cor e o valor ;e a URL da imagem
//cores, sao uma lista e uma string, alguns produtos tem mais de uma cor
export interface ProductCardProps {
  name: string;
  price: string;
  images?: Record<string, string | undefined>; // dentro da chave string pode receber um objeto como o descrito ou undefined (nenhum valor passado) - isso pois uma cor pode nao ter uma imagem
  image?: string; // ? indica que as props sao opicionais - esse aqui é para quando só tem uma imagem
  colors: string[];
}

//criacao do componente funcional
// estamos extraindo diretamente as props que acabmos de fazer 
export const ProductCardB2B = ({
  name,
  price,
  images,
  image,
  colors,
}: ProductCardProps) => {

  //CONSTANTE QUE GUARDA AS CORES
  // selectedColor é a variavel que guarda a cor selecionada 
  // setSelectedColor: funcao para atualizar o selected color 
  // incializa o estado com a primeira cor disponivel
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  //SABENDO QUAL IMAGEM SERÁ EXIBIDA - const displayimage
  //URL escolhida dinamicamente (conforme cor selecionada).
  // verfica se existe um objeto images e se a chave ta nesse objeto (chave = selectedcolors)
  const displayImage =
    images && selectedColor in images
      ? images[selectedColor]! // ! = se certifica de que nao é undefined
      : image ?? Object.values(images ?? {})[0] ?? ''; // usa esse se nao estiver definido (nem como undefined)
      //tenta extrair a primeira das imagens disponiveis e se nao conseguir cai em string vazia

  //  detalhe link é o link para a pagina de cada produto - sem recarregar a pagina
  const detalheLink = `/produto/${encodeURIComponent(name)}`;

  return (
    <Card>
      {/* Link envolvendo a imagem  que vai para a pagina do produto*/}
      <Link to={detalheLink}>
        <ProductImage src={displayImage} />
      </Link>

      {/* Seção de informações (nome e preço) */}
      <Info>
        <Link
          to={detalheLink}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <ProductName>{name}</ProductName>
        </Link>
        <ProductPrice>{price}</ProductPrice>
      </Info>

      {/* Seletor de cor */}
      <ColorPicker>
        {colors.length > 1 && /* */
          colors.map((cor) => ( /* para cada cor disponivel */
            <ColorDot
              key={cor} /* chave react- identificador de cada item no map */
              color={cor} /* qual cor */
              selected={selectedColor === cor} /* bolinha ativa */
              onClick={(e) => { /*quando clicar na bolinha de cor */
                e.stopPropagation(); /* impede que o clique suba e dispare o link pai que definimos la em cima no color selected */
                setSelectedColor(cor); /* atualiza cor no usestate  */
              }}
            />
          ))}
      </ColorPicker>

      {/*  Botão “Saiba Mais” que também é um Link para a pagina do produto */}
      <SaibaMaisButton as={Link} to={detalheLink}>
        SAIBA MAIS
      </SaibaMaisButton>
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
  border: ${({ color }) => (color === '#ffffff' ? '1px solid #d1d5db' : 'none')};
  background-color: ${({ color }) => color};
  outline: ${({ selected }) => (selected ? '2px solid #1D311F' : 'none')};
  cursor: pointer;
`;

const SaibaMaisButton = styled.button`
  background-color: #1D311F;
  color: white;
  width: 100%;
  padding: 0.75rem;
  font-size: 14px;
  font-weight: 600;
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #16371B;
  }
`;


