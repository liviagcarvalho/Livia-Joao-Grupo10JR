import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  background-color: #f6f6f6;
`;

const Sidebar = styled.div`
  width: 250px;
  background-color: #1d311f;
  padding: 2rem 1rem;
  color: rgb(255, 255, 255);
  font-family: 'Spectral', serif;
`;

const MenuItem = styled.div<{ active?: boolean }>`
  padding: 1rem;
  cursor: pointer;
  font-size: 24px;
  font-weight: 600;q
  border-radius: 8px;
  margin-top: 6rem;
  transition: background-color 0.2s;
  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
  }
`;

const Content = styled.div`
  flex: 1;
  padding: 2rem;
  font-family: 'Inter', sans-serif;
`;

const SectionTitle = styled.h2`
  color: #1d311f;
  font-size: 56px;
  margin-bottom: 1rem;
`;

const OrderBox = styled.div`
  background-color: #fff;
  border: 1px solid #dbe3d4;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 10px;
`;

const TrackButton = styled.button`
  background-color: #1d311f;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  margin-top: 0.5rem;
  &:hover {
    background-color: #105c23;
  }
`;

const UserInfoBox = styled.div`
  max-width: 1000px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: rgb(29, 63, 13);
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

const UserInfoItem = styled.p`
  font-size: 40px;
  color: rgb(246, 247, 246);
  margin-bottom: 1rem;
  font-family: 'Inter', sans-serif;
`;

export default function PerfilPage() {
  const [activeSection, setActiveSection] = useState<'minhaConta' | 'meusPedidos'>('minhaConta');

  const pedidos = [
    { id: '001', produto: 'Cadeira Ergonômica Alpha', status: 'Entregue' },
    { id: '002', produto: 'Mesa Executiva Delta', status: 'A caminho' },
    { id: '003', produto: 'Estante Compacta R. Amaral', status: 'Preparando envio' },
  ];

  return (
    <Wrapper>
      <Sidebar>
        <MenuItem onClick={() => setActiveSection('minhaConta')} active={activeSection === 'minhaConta'}>
          Minha Conta
        </MenuItem>
        <MenuItem onClick={() => setActiveSection('meusPedidos')} active={activeSection === 'meusPedidos'}>
          Meus Pedidos
        </MenuItem>
        <MenuItem onClick={() => alert('Você saiu!')}>Sair</MenuItem>
      </Sidebar>
      <Content>
        {activeSection === 'minhaConta' && (
          <>
            <SectionTitle>Dados da Conta</SectionTitle>
            <UserInfoBox>
              <UserInfoItem><strong>Nome:</strong> João da Silva</UserInfoItem>
              <UserInfoItem><strong>Email:</strong> joao@email.com</UserInfoItem>
              <UserInfoItem><strong>Telefone:</strong> (11) 91234-5678</UserInfoItem>
            </UserInfoBox>
          </>
        )}
        {activeSection === 'meusPedidos' && (
          <>
            <SectionTitle>Meus Pedidos</SectionTitle>
            {pedidos.map((pedido) => (
              <OrderBox key={pedido.id}>
                <p><strong>ID Pedido:</strong> {pedido.id}</p>
                <p><strong>Produto:</strong> {pedido.produto}</p>
                <p><strong>Status:</strong> {pedido.status}</p>
                <TrackButton>Rastrear</TrackButton>
              </OrderBox>
            ))}
          </>
        )}
      </Content>
    </Wrapper>
  );
}
