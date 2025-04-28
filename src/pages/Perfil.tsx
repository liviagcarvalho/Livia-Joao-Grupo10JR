import React, { useState } from 'react';
import styled from 'styled-components';
import HeaderB2C from '../components/HeaderB2C';
import FooterB2C from '../components/FooterB2C';

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  background-color: #f6f6f6;
  margin-top: 10rem;
`;

const Sidebar = styled.div`
  width: 250px;
  background-color: #9CAF88;
  padding: 2rem 1rem;
  color: #ffffff;
  font-family: 'Spectral', serif;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const MenuItem = styled.div<{ active?: boolean }>`
  padding: 1rem;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  border-radius: 8px;
  background-color: ${({ active }) => (active ? 'rgba(255,255,255,0.2)' : 'transparent')};
  transition: background-color 0.3s;
  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
  }
`;

const Content = styled.div`
  flex: 1;
  padding: 3rem 2rem;
  font-family: 'Inter', sans-serif;
`;

const SectionTitle = styled.h2`
  color: #1d311f;
  font-size: 40px;
  margin-bottom: 2rem;
`;

const UserInfoBox = styled.div`
  background-color: #ffffff;
  border: 1px solid #dbe3d4;
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 2rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
`;

const UserInfoItem = styled.p`
  font-size: 20px;
  margin-bottom: 1rem;
  color: #333;
  strong {
    color: #1d311f;
  }
`;

const OrderBox = styled.div`
  background-color: #ffffff;
  border: 1px solid #dbe3d4;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
`;

const TrackButton = styled.button`
  background-color: #1d311f;
  color: #ffffff;
  border: none;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #105c23;
  }
`;

export default function PerfilPage() {
  const [activeSection, setActiveSection] = useState<'minhaConta' | 'meusPedidos'>('minhaConta');

  const pedidos = [
    { id: '001', produto: 'Cadeira Ergonômica Alpha', status: 'Entregue' },
    { id: '002', produto: 'Mesa Executiva Delta', status: 'A caminho' },
    { id: '003', produto: 'Estante Compacta R. Amaral', status: 'Preparando envio' },
  ];

  return (
    <>
      <HeaderB2C abrirCarrinho={() => {}} />

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
              <SectionTitle>Minha Conta</SectionTitle>
              <UserInfoBox>
                <UserInfoItem><strong>Nome:</strong> João da Silva</UserInfoItem>
                <UserInfoItem><strong>Email:</strong> joao@email.com</UserInfoItem>
                <UserInfoItem><strong>Telefone:</strong> (11) 91234-5678</UserInfoItem>
                <UserInfoItem><strong>Endereço:</strong> Rua das Flores, 123 - São Paulo/SP</UserInfoItem>
                <UserInfoItem><strong>Método de Pagamento:</strong> Cartão de Crédito (final 1234)</UserInfoItem>
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

      <FooterB2C />
    </>
  );
}
