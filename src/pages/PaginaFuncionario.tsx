import React, { useState } from 'react';
import styled from 'styled-components';

// Styled Components
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
  position: relative;
`;

const Badge = styled.span`
  background-color: #105c23;
  color: white;
  font-size: 12px;
  font-weight: bold;
  padding: 2px 8px;
  border-radius: 999px;
  margin-left: 8px;
`;

const RemoveButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: none;
  border: none;
  color: red;
  font-size: 16px;
  cursor: pointer;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 2rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border-radius: 6px;
  border: 1px solid #9CAF88;
`;

const Select = styled.select`
  padding: 0.5rem;
  border-radius: 6px;
  border: 1px solid #9CAF88;
`;

const CheckboxGroup = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const SubmitButton = styled.button`
  background-color: #1D311F;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 0.75rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #16341c;
  }
`;

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'orders' | 'b2b' | 'customers' | 'products'>('overview');

  const [products, setProducts] = useState([
    { id: 1, name: 'Cadeira Ergonômica', price: 'R$420,00', category: 'MÓVEIS', active: true, sale: false, highlight: true },
    { id: 2, name: 'Mesa Compacta', price: 'R$699,90', category: 'MÓVEIS', active: true, sale: false, highlight: false },
    { id: 3, name: 'Luminária LED', price: 'R$89,00', category: 'ELETRÔNICOS', active: false, sale: true, highlight: false },
  ]);

  const [newProduct, setNewProduct] = useState({ name: '', price: '', sale: false, highlight: false, category: 'MÓVEIS' });
  const [editingProductId, setEditingProductId] = useState<number | null>(null);
  const [editedProduct, setEditedProduct] = useState({ name: '', price: '', sale: false, highlight: false, category: 'MÓVEIS' });

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    const newProd = {
      id: Date.now(),
      name: newProduct.name,
      price: newProduct.price,
      active: true,
      sale: newProduct.sale,
      highlight: newProduct.highlight,
      category: newProduct.category,
    };
    setProducts(prev => [...prev, newProd]);
    setNewProduct({ name: '', price: '', sale: false, highlight: false, category: 'MÓVEIS' });
  };

  const handleRemoveProduct = (id: number) => {
    setProducts(prev => prev.filter(product => product.id !== id));
  };

  const handleStartEdit = (product: any) => {
    setEditingProductId(product.id);
    setEditedProduct({
      name: product.name,
      price: product.price,
      sale: product.sale,
      highlight: product.highlight,
      category: product.category,
    });
  };

  const handleSaveEdit = (id: number) => {
    setProducts(prev =>
      prev.map(prod =>
        prod.id === id
          ? { ...prod, name: editedProduct.name, price: editedProduct.price, sale: editedProduct.sale, highlight: editedProduct.highlight, category: editedProduct.category }
          : prod
      )
    );
    setEditingProductId(null);
  };

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
            <Card><strong>#B2B001</strong> - Escritórios Global LTDA - R$5.400,00 - Entrega Programada</Card>
            <Card><strong>#B2B002</strong> - TechMove Mobiliário - R$3.890,00 - Em negociação</Card>
            <Card><strong>#B2B003</strong> - Soluções Office ME - R$7.200,00 - Aguardando pagamento</Card>
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

            <Form onSubmit={handleAddProduct}>
              <Input
                placeholder="Nome do Produto"
                value={newProduct.name}
                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                required
              />
              <Input
                placeholder="Preço"
                value={newProduct.price}
                onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                required
              />
              <Select
                value={newProduct.category}
                onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
              >
                <option value="MÓVEIS">MÓVEIS</option>
                <option value="ELETRÔNICOS">ELETRÔNICOS</option>
                <option value="MATERIAIS">MATERIAIS</option>
                <option value="AMBIENTAÇÃO & CONFORTO">AMBIENTAÇÃO & CONFORTO</option>
              </Select>
              <CheckboxGroup>
                <label>
                  <input
                    type="checkbox"
                    checked={newProduct.sale}
                    onChange={(e) => setNewProduct({ ...newProduct, sale: e.target.checked })}
                  /> Promoção
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={newProduct.highlight}
                    onChange={(e) => setNewProduct({ ...newProduct, highlight: e.target.checked })}
                  /> Destaque
                </label>
              </CheckboxGroup>

              <SubmitButton type="submit">Adicionar Produto</SubmitButton>
            </Form>

            {products.map((product) => (
              <Card key={product.id}>
                <RemoveButton onClick={() => handleRemoveProduct(product.id)}>✖</RemoveButton>

                {editingProductId === product.id ? (
                  <>
                    <Input
                      value={editedProduct.name}
                      onChange={(e) => setEditedProduct({ ...editedProduct, name: e.target.value })}
                      placeholder="Nome"
                    />
                    <Input
                      value={editedProduct.price}
                      onChange={(e) => setEditedProduct({ ...editedProduct, price: e.target.value })}
                      placeholder="Preço"
                    />
                    <Select
                      value={editedProduct.category}
                      onChange={(e) => setEditedProduct({ ...editedProduct, category: e.target.value })}
                    >
                      <option value="MÓVEIS">MÓVEIS</option>
                      <option value="ELETRÔNICOS">ELETRÔNICOS</option>
                      <option value="MATERIAIS">MATERIAIS</option>
                      <option value="AMBIENTAÇÃO & CONFORTO">AMBIENTAÇÃO & CONFORTO</option>
                    </Select>
                    <CheckboxGroup>
                      <label>
                        <input
                          type="checkbox"
                          checked={editedProduct.sale}
                          onChange={(e) => setEditedProduct({ ...editedProduct, sale: e.target.checked })}
                        /> Promoção
                      </label>
                      <label>
                        <input
                          type="checkbox"
                          checked={editedProduct.highlight}
                          onChange={(e) => setEditedProduct({ ...editedProduct, highlight: e.target.checked })}
                        /> Destaque
                      </label>
                    </CheckboxGroup>
                    <SubmitButton type="button" onClick={() => handleSaveEdit(product.id)}>Salvar</SubmitButton>
                  </>
                ) : (
                  <>
                    <strong>{product.name}</strong> <br />
                    Preço: {product.price} <br />
                    Categoria: {product.category} <br />
                    Status: {product.active ? 'Ativo' : 'Inativo'}
                    {product.sale && <Badge>Promoção</Badge>}
                    {product.highlight && <Badge>Destaque</Badge>}
                    <br />
                    <SubmitButton type="button" onClick={() => handleStartEdit(product)}>Editar</SubmitButton>
                  </>
                )}
              </Card>
            ))}
          </Section>
        )}
      </Content>
    </Wrapper>
  );
};

export default AdminDashboard;

