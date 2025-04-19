import React, { useState } from 'react';
import styled from 'styled-components';

//limitador de largura 
const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #DCDACE;
  border-radius: 10px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.05);
`;

//cuidar da cor geral e padding externo
const Container = styled.div`
  padding: 1.5rem;
  background-color: #FAFAF5;
  min-height: 100vh;
`;

//titulo perguntas frequentes
const Title = styled.h2`
  text-align: center;
  font-family:'sans-serif';
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  color: #1D311F;
  font-weight: bold;
`;

const Section = styled.div`
  margin-bottom: 1.5rem;
`;

//titulo de cada bloco
const SectionTitle = styled.h3`
  font-size: 1.20rem;
  font-family:'sans-serif';
  color: #1D311F;
  margin-bottom: 1rem;
  font-weight: bold;
`;

//perguntas dentro do bloco
const Question = styled.div`
  border-bottom: 1px solid #1D311F;
  padding: 0.5rem ;
  font-family:'sans-serif';
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

//respostas das perguntas
const Answer = styled.p`
  margin-top: 0.5rem;
  color: #444;
  font-size: 0.95rem;
  font-family:'sans-serif';
  padding-left: 1rem;
`;

const Chevron = styled.span`
  font-size: 1.25rem;
  transition: transform 0.2s;
  transform: ${({ open }: { open: boolean }) => (open ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Question onClick={() => setOpen(!open)}>
        <span>{question}</span>
        <Chevron open={open}>⌄</Chevron>
      </Question>
      {open && <Answer>{answer}</Answer>}
    </div>
  );
};

const AjudaB2B = () => {
  return (
    <>
      <Container>
        <Wrapper>
        <Title>Perguntas Frequentes</Title>

        <Section>
          <SectionTitle>Pedidos, Rastreamento e Entrega</SectionTitle>
          <FAQItem question="Como entrar em contato da maneira mais rápida?" answer="É possível realizar um orçamento diretamente no site e obterá um retorno em menos de 24hs, entretando, se for extremamente urgente ligue em +55 (11) 8265-3746. Para mais informações contate-nos via whatsapp." />
          <FAQItem question="Consigo mudar meu endereço após o pedido?" answer="Sim, dentro de 48hs antes do pedido ser enviado esta ação pode ser realizada, para isso entre em contato via whatsapp que resolveremos todos os seus problemas da maneira mais rápida possível." />
          <FAQItem question="O que fazer se meu pedido chegou incompleto?" answer= "Entre em contato com o nosso suporte com o número do pedido e fotos dos itens recebidos." />
          <FAQItem question="Como acompanho o rastreamento do meu pedido B2B?" answer="Para garantir um atendimento mais personalizado, o rastreamento de pedidos B2B é realizado diretamente por nossos canais exclusivos. Assim que seu pedido for despachado, nossa equipe enviará por e-mail os dados de rastreio com o link da transportadora responsável. Em caso de dúvidas ou necessidade de atualizações adicionais, você pode entrar em contato diretamente com nosso time pelo e-mail ou aplicativo de atendimento corporativo." />
        </Section>

        <Section> 
          <SectionTitle>Informações dos Produtos</SectionTitle>
          <FAQItem question="É possivel ajustar as cadeiras para o meu tamanho?" answer="Sim! Todas as nossas cadeiras possuem ajuste de altura e inclinação, sendo adáptavel ao seu tamanho. Elas também são pensadas na sua saúde e conforto, todas são ergonomicas para proteger a sua coluna" />
          <FAQItem question="Posso ver seus produtos pessoalmente antes de comprá-los?" answer="Sim! Temos nossa loja física em Rua dos Pinheiros, n48 - São paulo, SP. Precisa de atendimento personalizado? Ligue em +55 (11) 8265-3746 para agendar o melhor horario que encontrarmos para você" />
        </Section>

        <Section>
          <SectionTitle>Retornos e Reembolsos</SectionTitle>
          <FAQItem question="Qual é a política de retorno e reembolso?" answer="Você tem até 3 dias úteis após o recebimento do produto para solicitar a devolução dos mesmos. Este processo pode ser feito através do nosso canal de suporte ou em nossas principais vias: Whatsapp e telefone. " />
          <FAQItem question="Em quanto tempo receberei meu reembolso após a devolução?" answer="Após o recebimento e análise do produto devolvido, o reembolso é processado em até 7 dias úteis após a validação da solicitação. O valor será creditado conforme o meio de pagamento utilizado na compra — no caso de cartão de crédito, o estorno pode aparecer em até duas faturas subsequentes, conforme regras da administradora." />
          <FAQItem question="Posso trocar um produto ou apenas solicitar reembolso?" answer="Você pode optar tanto pela troca quanto pelo reembolso, desde que a solicitação esteja dentro do prazo de 3 dias após o recebimento. Para trocas, oferecemos a possibilidade de escolher um novo item de igual valor ou gerar um crédito em loja. Basta acessar a área de pedidos ou entrar em contato com nosso suporte." />
        </Section>
        </Wrapper>
      </Container>
    </>
  );
};

export default AjudaB2B;
