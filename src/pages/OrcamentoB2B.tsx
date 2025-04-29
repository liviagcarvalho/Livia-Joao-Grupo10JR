import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom"

//Define o tipo esperado das props do componente Orcamento.
//Espera receber uma função chamada closeOrcamento, que não recebe nenhum argumento e também não retorna nada (tipo void).
//Essa função será usada para fechar o modal de orçamento.
interface OrcamentoProps {
  closeOrcamento: () => void;
}

//const Orcamento: React.FC<OrcamentoProps>
//Define um componente funcional do React chamado Orcamento, e tipa ele usando React.FC (Functional Component), dizendo que ele recebe as props definidas em OrcamentoProps.
//({ closeOrcamento }) => {
//Aqui é feita a desestruturação das props, pegando diretamente a função closeOrcamento que foi passada para o componente.
const Orcamento: React.FC<OrcamentoProps> = ({ closeOrcamento }) => {
  // Estados dos campos do formulário - Cada linha cria um state com useState(valorInicial) que é uma string vazia
  const [nome, setNome] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [produtos, setProdutos] = useState('');
  const [erro, setErro] = useState(false); 
  // set permite atualizar cada valor conforme o usuário digita ou acontece algo no componente
  
  const handleSubmit = (e: React.FormEvent) => { //funcao chamada quando formulario é enviado
    e.preventDefault(); // impede que o navegador recarregue a pagina ao enviar

    // Verifica se algum campo está vazio
    if (!nome || !empresa || !cnpj || !telefone || !email || !produtos) {
      setErro(true); //se tiver algum vazio set erro fica true
      return;
    }

    // Se todos os campos estiverem preenchidos
    setErro(false);
    alert('Orçamento enviado com sucesso!'); //funcao alert para falar pro cliente que deu certo
    closeOrcamento(); // ativa a funcao close orcamento

    // Limpa os campos (opcional)
    setNome('');
    setEmpresa('');
    setCnpj('');
    setTelefone('');
    setEmail('');
    setProdutos('');
  };
  //Hook do React Router que retorna uma função (navigate) usada para programaticamente mudar de rota dentro da sua aplicação SPA, sem recarregar a página.
  const navigate = useNavigate();
  const handleNavigate = () => { // botão ou evento de clique.
    navigate('/b2c', { // minha rota
      state: { filtroInicial: 'lancamentos' }
    });
  };

  return (
    <Overlay>

      <ModalContent>
        <CloseButton onClick={closeOrcamento}>&times;</CloseButton>
        <Form onSubmit={handleSubmit}>
          <Input
            placeholder="Nome e Sobrenome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <InputRow>
            <Input
              placeholder="Empresa"
              value={empresa}
              onChange={(e) => setEmpresa(e.target.value)}
            />
            <Input
              placeholder="CNPJ"
              value={cnpj}
              onChange={(e) => setCnpj(e.target.value)}
            />
          </InputRow>
          <InputRow>
            <Input
              placeholder="Telefone para contato"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
            <Input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputRow>
          <TextArea
            placeholder="Digite os produtos que deseja com suas respectivas quantidades"
            value={produtos}
            onChange={(e) => setProdutos(e.target.value)}
          />
          {erro && <ErrorText>Por favor, preencha todos os campos antes de enviar.</ErrorText>}
          <SubmitButton type="submit">SOLICITAR ORÇAMENTO</SubmitButton>
        </Form>
        <LojaLink onClick={handleNavigate} >
          Não é uma empresa? Confira nossa <strong>LOJA</strong>
        </LojaLink>
      </ModalContent>
    </Overlay>
  );
};

export default Orcamento;

//Styled Components 
//overlay
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

//conteudo do overlay
const ModalContent = styled.div`
  background-color: #ffffff;
  border: 4px solid #1e3b22;
  border-radius: 16px;
  padding: 2.5rem 3rem 2rem 3rem;
  width: 100%;
  max-width: 900px;
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.1);
  position: relative;
`;

//botao para fechar
const CloseButton = styled.button`
  position: absolute;
  top: 0rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 2rem;
  color: #1e3b22;
  cursor: pointer;
  font-weight: bold;
  transition: 0.3s;

  &:hover {
    color: #254b33;
  }
`;

//formulario onde ficam os inputs
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
`;

// as linhas de input
//flex-direction: column; muda o eixo principal de um container flexível de linha (row, padrão) para coluna.
const InputRow = styled.div`
  display: flex;
  gap: 1.1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

//input local - dos dados
const Input = styled.input`
  flex: 1;
  padding: 0.75rem 1rem;
  border-radius: 20px;
  border: 2px solid #1e3b22;
  font-size: 15px;
  background-color: #f0f5f1;
`;

//local de texto para falar de todos os produtos que deseja
const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  height: 130px;
  border-radius: 20px;
  border: 2px solid #1e3b22;
  font-size: 15px;
  resize: none;
  background-color: #f0f5f1;
`;

//botao para enviar
const SubmitButton = styled.button`
  background-color: #1b3524;
  color: white;
  padding: 1rem;
  font-weight: bold;
  font-size: 16px;
  border: none;
  border-radius: 30px;
  width: 100%;
  cursor: pointer;
  margin-top: 0.5rem;
  transition: 0.3s;

  &:hover {
    background-color: #254b33;
  }
`;

//local para ir para o b2c
const LojaLink = styled.p`
  margin-top: 2.5rem;
  text-align: center;
  color: #1e3b22;
  font-size: 20px;
  font-weight: 500;
  font-family: 'sans-serif';
  cursor: pointer;

  strong {
    font-weight: bold;
  }
`;

//se preencher errado aparece error text
const ErrorText = styled.p`
  color: red;
  font-size: 13px;
  margin-top: -0.8rem;
  margin-bottom: 0.5rem;
  text-align: center;
`;
