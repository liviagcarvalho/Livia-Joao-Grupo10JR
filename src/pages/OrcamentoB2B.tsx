import React from 'react';
import styled from 'styled-components';

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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
`;

const InputRow = styled.div`
  display: flex;
  gap: 1.1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  flex: 1;
  padding: 0.75rem 1rem;
  border-radius: 20px;
  border: 2px solid #1e3b22;
  font-size: 15px;
  background-color: #f0f5f1;
`;

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

const LojaLink = styled.p`
  margin-top: 2.5rem;
  text-align: center;
  color: #1e3b22;
  font-size: 20px;
  font-weight: 500;
  font-family: 'sans-serif';

  strong {
    font-weight: bold;
  }
`;

interface ModalProps {
  closeModal: () => void;
}

const Orcamento: React.FC<ModalProps> = ({ closeModal }) => {
  return (
    <Overlay>
      <ModalContent>
        <CloseButton onClick={closeModal}>&times;</CloseButton>
        <Form>
          <Input placeholder="Nome e Sobrenome" />
          <InputRow>
            <Input placeholder="Empresa" />
            <Input placeholder="CNPJ" />
          </InputRow>
          <InputRow>
            <Input placeholder="Telefone para contato" />
            <Input placeholder="Email" />
          </InputRow>
          <TextArea placeholder="Digite os produtos que deseja com suas respectivas quantidades" />
          <SubmitButton type="submit">SOLICITAR ORÇAMENTO</SubmitButton>
        </Form>
        <LojaLink>
          Pedidos menores? Confira nossa <strong>LOJA</strong>
        </LojaLink>
      </ModalContent>
    </Overlay>
  );
};

export default Orcamento;
