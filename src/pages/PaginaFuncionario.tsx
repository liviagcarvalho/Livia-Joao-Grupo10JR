import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
`;

const Sidebar = styled.div`
  background-color: #1D311F;
  color: white;
  width: 240px;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Logo = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const NavItem = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 16px;
  text-align: left;
  cursor: pointer;
  padding: 0.5rem;

  &:hover {
    background-color: #2c4c33;
    border-radius: 8px;
  }
`;

const Content = styled.div`
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Card = styled.div`
  background-color: #f6fdf4;
  border: 1px solid #9CAF88;
  border-radius: 12px;
  padding: 1rem;
  font-size: 14px;
`;

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'orders' | 'b2b' | 'customers' | 'products'>('overview');

  return (
    <Wrapper>
      <Sidebar>
        <Logo>R. Amaral Admin</Logo>
        <NavItem onClick={() => setActiveTab('overview')}>Visão Geral</NavItem>
        <NavItem onClick={() => setActiveTab('orders')}>Pedidos B2C</NavItem>
        <NavItem onClick={() => setActiveTab('b2b')}>Pedidos B2B</NavItem>
        <NavItem onClick={() => setActiveTab('customers')}>Clientes</NavItem>
        <NavItem onClick={() => setActiveTab('products')}>Produtos</NavItem>
      </Sidebar>

      <Content>
        {activeTab === 'overview' && <h2>Bem-vindo ao Painel Administrativo</h2>}

        {activeTab === 'orders' && (
          <Section>
            <h2>Pedidos B2C</h2>
            <Card><strong>#001</strong> - Maria Souza - R$120,00 - Entregue</Card>
            <Card><strong>#002</strong> - João Pedro - R$89,00 - Em andamento</Card>
            <Card><strong>#003</strong> - Camila Lima - R$49,90 - Aguardando pagamento</Card>
          </Section>
        )}

        {activeTab === 'b2b' && (
          <Section>
            <h2>Pedidos B2B</h2>
            <Card>
              <strong>#B2B001</strong><br/>
              Empresa: Escritórios Global LTDA<br/>
              Responsável: Paula Fernandes<br/>
              CNPJ: 12.345.678/0001-99<br/>
              Valor: R$5.400,00<br/>
              Status: Entrega Programada
            </Card>
            <Card>
              <strong>#B2B002</strong><br/>
              Empresa: TechMove Mobiliário<br/>
              Responsável: Carlos Martins<br/>
              CNPJ: 98.765.432/0001-11<br/>
              Valor: R$3.890,00<br/>
              Status: Em negociação
            </Card>
            <Card>
              <strong>#B2B003</strong><br/>
              Empresa: Soluções Office ME<br/>
              Responsável: Larissa Borges<br/>
              CNPJ: 45.678.901/0001-55<br/>
              Valor: R$7.200,00<br/>
              Status: Aguardando pagamento
            </Card>
          </Section>
        )}

        {activeTab === 'customers' && (
          <Section>
            <h2>Clientes</h2>
            <Card>Maria Souza - maria@email.com</Card>
            <Card>João Pedro - joao@email.com</Card>
            <Card>Camila Lima - camila@email.com</Card>
          </Section>
        )}

        {activeTab === 'products' && (
          <Section>
            <h2>Produtos</h2>
            <Card>
              <strong>Cadeira Ergonômica</strong><br/>
              Preço: R$420,00<br/>
              Status: Ativo
            </Card>
            <Card>
              <strong>Mesa Compacta</strong><br/>
              Preço: R$699,90<br/>
              Status: Ativo
            </Card>
            <Card>
              <strong>Luminária LED</strong><br/>
              Preço: R$89,00<br/>
              Status: Inativo
            </Card>
          </Section>
        )}
      </Content>
    </Wrapper>
  );
};

export default AdminDashboard;
