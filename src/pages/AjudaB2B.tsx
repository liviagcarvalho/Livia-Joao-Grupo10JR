import React, { useState } from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/Header'

//PERGUNTAS FREQUÊNTES
//limitador de largura 
const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #DCDACE;
  border-radius: 10px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.05);

    @media (max-width: 1280px) {
    margin-top: 8rem;
  }
  @media (max-width: 1024px) {
    margin-top: 16rem;
  }
  @media (max-width: 768px) {
    margin-top: 21rem;
  }
  @media (max-width: 640px) {
    margin-top: 26rem;
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
  font-size: 1rem;
  padding: 0.5rem;
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

const Button = styled.button`
  background-color: #1D311F;
  color: white;
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-family: 'sans-serif';
  cursor: pointer;
  margin-top: 1rem;
  transition: background 0.3s ease;

  &:hover {
    background-color: #16301a;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.85rem;
  margin-top: 0.8rem;
  font-family: 'sans-serif';
`;


interface ChevronProps {
    $open: boolean;
  }
  
  const Chevron = styled.span<ChevronProps>`
    font-size: 1.25rem;
    transition: transform 0.2s;
    transform: ${({ $open }) => ($open ? 'rotate(180deg)' : 'rotate(0deg)')};
  `;
  

// FORMULÁRIO - CENTRAL DE APOIO
const FormWrapper = styled.div`
  margin-top: 3rem;
  background-color: #DCDACE;
  padding: 2rem;
  border-radius: 10px;
`;

const FormTitle = styled.h2`
  font-size: 1.5rem;
  text-align: center;
  color: #1D311F;
  margin-bottom: 2rem;
  font-family: 'sans-serif';
  font-weight: bold;
  text-transform: uppercase;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  margin-bottom: 1.2rem;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-family: 'sans-serif';
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 1rem;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-family: 'sans-serif';
  resize: none;
`;

//CONTATO COM A EMPRESA
const ContactBox = styled.div`
  background-color: #DCDACE;
  padding: 1rem ;
  border-radius: 10px;
  text-align: center;
  font-family: 'sans-serif';
  max-width: 1000px;
  margin: 3rem auto 0 auto;
`;

const TitleContact = styled.h2`
  font-size: 1.8rem;
  color: #1D311F;
  font-weight: bold;
  margin-bottom: 0.25rem;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #333;
  margin-bottom: 2rem;
`;

const Label = styled.p`
  font-size: 1rem;
  color: #1D311F;
  margin-bottom: 0.5rem;
`;

//local do botao do email e do telefone
const ButtonGroup = styled.div` 
  display: flex;
  justify-content: center;
  gap: 1.5rem; /* espaçamento entre os botões */
  flex-wrap: wrap; /* quebra para próxima linha se não couber */
  margin-top: 1rem;
`;

//legenda em cima do botao do telefone e email
const ContatoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

//botao email é igual ao botao do telefone
const EmailButton = styled.div`
  background-color: #1D311F;
  color: white;
  font-size: 1.1rem;
  font-weight: 500;
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
  font-family: 'sans-serif';
  transition: background 0.3s ease;
  width: 300px;         /* todos terão a mesma largura */
  text-align: center;
`;

const PhoneButton = styled(EmailButton)``; // usa os mesmos estilos do EmailButton


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
        <Chevron $open={open}>⌄</Chevron>{/* Quando usamos props personalizadas com styled-components, prefixar com $ evita que a prop seja passada como atributo HTML inválido para o DOM*/}
      </Question>
      {open && <Answer>{answer}</Answer>}
    </div>
  );
};

const AjudaB2B = () => {
  const [nome, setNome] = useState(''); /* Use state- onde os dados são guardados */
  const [email, setEmail] = useState(''); 
  const [mensagem, setMensagem] = useState('');
  const [erro, setErro] = useState(false);

  const handleSubmit = (e: React.FormEvent) => { // Porque precisa guardar info se não estamos trabalhando com backend? - "mesmo que você não tenha um back-end, precisa guardar temporariamente as informações que o usuário digita" - ChatGPT
    e.preventDefault(); /* impede o comportamento padrão do formulário (recarregar a página */
    if (!nome || !email || !mensagem) { /* verifica se algum campo está vazio */
      setErro(true);
    } else {
      alert("Informações enviadas com sucesso!"); // ou console.log mostra a caixinha do navegador (um popup) - alert() é uma função nativa do JavaScript
      setNome(''); //limpa os campos
      setEmail('');
      setMensagem('');
      setErro(false); // mensagem de erro
    }
  };
  return (
    <>
      <Header />
      <Container>
        <Wrapper>
          <Title>Perguntas Frequentes</Title>

          <Section>
            <SectionTitle>Pedidos, Rastreamento e Entrega</SectionTitle>
            <FAQItem question="Como entrar em contato da maneira mais rápida?" answer="É possível realizar um orçamento diretamente no site e obterá um retorno em menos de 24hs, entretanto, se for extremamente urgente ligue em +55 (11) 8265-3746. Para mais informações contate-nos via whatsapp." />
            <FAQItem question="Consigo mudar meu endereço após o pedido?" answer="Sim, dentro de 48hs antes do pedido ser enviado esta ação pode ser realizada, para isso entre em contato via whatsapp que resolveremos todos os seus problemas da maneira mais rápida possível." />
            <FAQItem question="O que fazer se meu pedido chegou incompleto?" answer="Entre em contato com o nosso suporte com o número do pedido e fotos dos itens recebidos." />
            <FAQItem question="Como acompanho o rastreamento do meu pedido B2B?" answer="Para garantir um atendimento mais personalizado, o rastreamento de pedidos B2B é realizado diretamente por nossos canais exclusivos. Assim que seu pedido for despachado, nossa equipe enviará por e-mail os dados de rastreio com o link da transportadora responsável. Em caso de dúvidas ou necessidade de atualizações adicionais, você pode entrar em contato diretamente com nosso time pelo e-mail ou aplicativo de atendimento corporativo." />
          </Section>

          <Section>
            <SectionTitle>Informações dos Produtos</SectionTitle>
            <FAQItem question="É possivel ajustar as cadeiras para o meu tamanho?" answer="Sim! Todas as nossas cadeiras possuem ajuste de altura e inclinação, sendo adaptável ao seu tamanho. Elas também são pensadas na sua saúde e conforto, todas são ergonômicas para proteger a sua coluna." />
            <FAQItem question="Posso ver seus produtos pessoalmente antes de comprá-los?" answer="Sim! Temos nossa loja física em Rua dos Pinheiros, n48 - São Paulo, SP. Precisa de atendimento personalizado? Ligue em +55 (11) 8265-3746 para agendar o melhor horário que encontrarmos para você." />
          </Section>

          <Section>
            <SectionTitle>Retornos e Reembolsos</SectionTitle>
            <FAQItem question="Qual é a política de retorno e reembolso?" answer="Você tem até 3 dias úteis após o recebimento do produto para solicitar a devolução dos mesmos. Este processo pode ser feito através do nosso canal de suporte ou em nossas principais vias: Whatsapp e telefone." />
            <FAQItem question="Em quanto tempo receberei meu reembolso após a devolução?" answer="Após o recebimento e análise do produto devolvido, o reembolso é processado em até 7 dias úteis após a validação da solicitação. O valor será creditado conforme o meio de pagamento utilizado na compra — no caso de cartão de crédito, o estorno pode aparecer em até duas faturas subsequentes, conforme regras da administradora." />
            <FAQItem question="Posso trocar um produto ou apenas solicitar reembolso?" answer="Você pode optar tanto pela troca quanto pelo reembolso, desde que a solicitação esteja dentro do prazo de 3 dias após o recebimento. Para trocas, oferecemos a possibilidade de escolher um novo item de igual valor ou gerar um crédito em loja. Basta entrar em contato com nosso suporte." />
          </Section>

          {/* Formulário de contato */}
          <FormWrapper>
          <FormTitle>Central de Apoio ao Cliente</FormTitle>
            <form onSubmit={handleSubmit}>
              <Input
                type="text" /* Define que é campo de texto */
                placeholder="Digite seu Nome e Sobrenome" /* O que aparece antes de começar a digitar */
                value={nome} /* O que ta sendo guardado */
                onChange={(e) => setNome(e.target.value)} /* Atualize o nome toda vez que alguem digita */
              />
              <Input
                type="email" /* Muito importante: validação automática do navegador que não aceita quando nao tem @ ou .com */
                placeholder="Digite seu Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextArea
                placeholder="Nos conte seu problema aqui"
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
              />
              <Button type="submit">Enviar</Button>
              {erro && <ErrorMessage>Por favor, preencha todos os campos antes de enviar.</ErrorMessage>} {/* Se erro for verdadeiro, mostre esse texto - aparece em vermelho*/}
            </form>
          </FormWrapper>

        </Wrapper>

        <ContactBox>
          <TitleContact>Entre em contato conosco</TitleContact>
          <Subtitle>
            Obtenha todas as suas respostas aqui e aprenda mais sobre nossas coleções, serviços e equipe!
          </Subtitle>
          <ButtonGroup>
            <ContatoItem>
              <Label>Email para contato</Label>
              <EmailButton>R.AmaralOffice@gmail.com</EmailButton>
            </ContatoItem>
            <ContatoItem>
              <Label>Telefone para contato</Label>
              <PhoneButton>+55 (11) 8265-3746</PhoneButton>
            </ContatoItem>
          </ButtonGroup>

      </ContactBox>
      </Container>
      <Footer />
    </>
  );
};

export default AjudaB2B;
