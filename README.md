# Livia-Joao-Grupo10JR

R. Amaral Office

Um portal de e-commerce B2B e B2C para ambientes corporativos, oferecendo móveis, eletrônicos, materiais de escritório e soluções de ambientação que aliam design inteligente, conforto e eficiência.

Essas instruções permitirão que você obtenha uma cópia do projeto em funcionamento na sua máquina local para fins de desenvolvimento e testes.
Consulte a seção Implantação para saber como colocar o projeto em produção.

Pré-requisitos
Antes de começar, você precisará ter instalado na sua máquina:
Node.js (versão 18 ou superior recomendada)
NPM (gerenciador de pacotes Node)
Git (opcional, para clonar o projeto)

Instalar o Node.js e o NPM
Exemplo de instalação no Mac/Linux:
brew install node
No Windows, baixe diretamente do site oficial.

Instalação
Clone o repositório:
git clone https://github.com/seu-usuario/seu-repositorio.git
Acesse o diretório do projeto:
cd TreineeJR-Grupo10
Instale as dependências:
npm install
Se houver conflitos de dependências, utilize:
npm install --legacy-peer-deps

Testando o ambiente
Após executar npm run dev, o projeto será iniciado e poderá ser acessado via:
http://localhost:5173
Você verá a Home Page da R. Amaral Office carregando, com cabeçalho, banner principal e as categorias de navegação.

Executando os testes
No momento, o projeto ainda não possui testes automatizados implementados.
Pretende-se futuramente adicionar:
Testes de componentes com Jest e React Testing Library
Testes de integração simulando interações reais no sistema


Testes de estilo de codificação (planejado)
Pretende-se utilizar:
ESLint: Para garantir padrões de escrita do código
Prettier: Para formatação automática de código
Rodando manualmente:
npm run lint

Implantação
Para colocar o projeto em produção, será necessário:
Gerar o build de produção:
npm run build
O build será criado dentro da pasta /dist.
O conteúdo da pasta /dist pode ser hospedado em plataformas como:
Vercel
Netlify
AWS Amplify
GitHub Pages (com adaptações)

Construído com
Ferramentas utilizadas para desenvolver o projeto:
Vite — Bundler ultrarrápido
React — Biblioteca principal para construção de UI
TypeScript — Tipagem estática
Tailwind CSS — Estilização via classes utilitárias
Radix UI — Componentes de interface acessíveis
PostCSS — Processador de CSS

Versão
Este projeto utiliza o modelo de versionamento SemVer.
Versão atual: 0.1.0 (versão inicial de desenvolvimento)

Autores
Livia Carvalho 
João Mattar
