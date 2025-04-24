
const allProducts = [
  {
    name: 'Cadeira Conforto Pro',
    price: 'R$1877,90',
    images: {
      '#ffffff': '/src/assets/Produtos/Cadeiras/Cadeira Conforto Branca.png',
      '#5C4033': '/src/assets/Produtos/Cadeiras/Cadeira Conforto Marrom.png',
      '#000000': '/src/assets/Produtos/Cadeiras/Cadeira Conforto Preta.png',
    },
    colors: ['#ffffff', '#5C4033', '#000000'],
    categoria: 'moveis',
    tags: ['mais-vendidos', 'ver-tudo'],
    description: 'A Cadeira Conforto Pro oferece ergonomia de alto nível com apoio ajustável e acabamento premium, ideal para jornadas longas de trabalho.'
  },
  {
    name: 'Porta Papel Elegante',
    price: 'R$358,90',
    images: {
      '#000000': '/src/assets/Produtos/Organizacao/porta papel 1.png'
    },
    colors: ['#000000'],
    categoria: 'materiais',
    tags: ['ver-tudo'],
    description: "Organize seus documentos com estilo. Feito em material resistente, une praticidade e estética minimalista."
  },
  {
    name: 'Persiana com Blackout',
    price: 'R$2105,00',
    images: {
      '#ffffff': '/src/assets/Produtos/Persianas/Persiana Branca 1.png',
      '#9E9E9E': '/src/assets/Produtos/Persianas/Persiana Cinza 1.png',
      '#5C4033': '/src/assets/Produtos/Persianas/Persiana Marrom 1.png',
      '#000000': '/src/assets/Produtos/Persianas/Persiana Preta 1.png'
    },
    colors: ['#ffffff', '#9E9E9E', '#5C4033', '#000000'],
    categoria: 'ambientacao',
    tags: ['ver-tudo'],
    description: "Controle total da iluminação com elegância. Ideal para escritórios modernos e ambientes corporativos sofisticados."
  },
  {
    name: 'MousePad Confortável',
    price: 'R$498,90',
    images: {
      '#000000': '/src/assets/Produtos/Cabos-Fones/MousePad 1.png'
    },
    colors: ['#000000'],
    categoria: 'eletronicos',
    tags: ['ver-tudo'],
    description: "Superfície suave e antiderrapante, ideal para conforto e precisão no uso contínuo do mouse."
  },    
  {
    name: 'Mesa Regular Com Altura Ajustável',
    price: 'R$5000,00',
    images: {
      '#DEB887': '/src/assets/Produtos/Mesas/Mesa Regular Com Altura Móvel Clara 1.png',
      '#5C4033': 'src/assets/Produtos/Mesas/Mesa Regular Com Altura Móvel Escura 1.png',
    },
    colors: ['#DEB887', '#5C4033'],
    categoria: 'moveis',
    tags: ['mais-vendidos', 'ver-tudo'],
    description: "Funcionalidade ergonômica com regulagem de altura para promover conforto e saúde no trabalho."
  },
  {
    name: 'Telefone Sem Fio',
    price: 'R$1500,00',
    images: {
      '#000000': '/src/assets/Produtos/Telefones/Telefone1.png'
    },
    colors: ['#000000'],
    categoria: 'eletronicos',
    tags: ['ver-tudo'],
    description: "Comunicação descomplicada com design moderno e bateria de longa duração. Ideal para ambientes corporativos."
  },
  {
    name: 'Cadeira Joelhos',
    price: 'R$1900,00',
    images: {
      '#000000': '/src/assets/Produtos/Cadeiras/Cadeira Joelhos Preta.png'
    },
    colors: ['#000000'],
    categoria: 'moveis',
    tags: ['mais-vendidos', 'ver-tudo'],
    description: "Postura ativa e conforto aliados em um design ergonômico que favorece a saúde da coluna."
  },
  {
    name: 'Mesa Para Quatro Pessoas',
    price: 'R$4200,00',
    images: {
      '#DEB887': '/src/assets/Produtos/Mesas/Mesa Quatro Pessoas Clara.png',
      '#5C4033': '/src/assets/Produtos/Mesas/Mesa Quatro Pessoas Escura.png',
    },
    colors: ['#DEB887', '#5C4033'],
    categoria: 'moveis',
    tags: ['ver-tudo'],
    description: "Versatilidade e espaço para equipes colaborarem com conforto. Acabamento refinado e estrutura robusta."
  },
  {
    name: 'Porta Cartão de Visita',
    price: 'R$299,00',
    images: {
      '#000000': '/src/assets/Produtos/Organizacao/Porta cartao 1.png'
    },
    colors: ['#000000'],
    categoria: 'materiais',
    tags: ['ver-tudo'],
    description: "Organização e elegância em um acessório essencial para recepções e mesas executivas."
  },
  {
    name: 'Locker G',
    price: 'R$3500,00',
    images: {
      '#003366': '/src/assets/Produtos/Lockers/Locker G azul.png',
      '#FFD700': 'e/src/assets/Produtos/Lockers/Locker G amarelo.png',
      '#228B22': '/src/assets/Produtos/Lockers/Locker G verde.png',
    },
    colors: ['#003366', '#FFD700', '#228B22'],
    categoria: 'moveis',
    tags: ['lancamentos', 'ver-tudo'],
    description: "Armazenamento seguro e estilizado. Ideal para escritórios compartilhados ou áreas de staff."
  },
  {
    name: 'Mesa L',
    price: 'R$4200,00',
    images: {
      '#ffffff': '/src/assets/Produtos/Mesas/Mesa L Branca.png',
      '#5C4033': '/src/assets/Produtos/Mesas/Mesa L Marrom.png',
    },
    colors: ['#ffffff', '#5C4033'],
    categoria: 'moveis',
    tags: ['mais-vendidos', 'ver-tudo'],
    description: "Design funcional para otimizar cantos de salas. Excelente para home offices e estações de trabalho eficientes."
  },
  {
    name: 'Suporte de Monitor',
    price: 'R$899,90',
    images: {
      '#D3D3D3': '/src/assets/Produtos/suporte/suportedemonitor.png'
    },
    colors: ['#D3D3D3'],
    categoria: 'materiais',
    tags: ['mais-vendidos', 'ver-tudo'],
    description: "Elevação ergonômica que melhora a postura e libera espaço na mesa. Estrutura firme e design discreto."
  },
  {
    name: 'Cadeira Ergométrica',
    price: 'R$1500,00',
    images: {
      '#000000': '/src/assets/Produtos/Cadeiras/Cadeira Ergométrica Preta 1.png',
      '#C62828': '/src/assets/Produtos/Cadeiras/Cadeira Ergométrica Vermelha 1.png',
      '#64B5F6': '/src/assets/Produtos/Cadeiras/Cadeira Ergométrica Azul 1.png',
    },
    colors: ['#000000', '#C62828', '#64B5F6'],
    categoria: 'moveis',
    tags: ['mais-vendidos', 'ver-tudo'],
    description: "Ideal para longos períodos de uso, oferece ajustes personalizados e suporte total à coluna."
  },
  {
    name: 'Apoio de Itens',
    price: 'R$1200,00',
    images: {
      '#ffffff': '/src/assets/Produtos/Apoio de Itens/Apoio de itens branco.png',
      '#000000': '/src/assets/Produtos/Apoio de Itens/Apoio de itens preto.png'
    },
    colors: ['#ffffff', "#000000"],
    categoria: 'materiais',
    tags: ['ver-tudo'],
    description: "Suporte versátil para periféricos e acessórios. Compacto, resistente e funcional."
  },
  {
    name: 'Impressora Multifuncinal Pro',
    price: 'R$3499,99',
    images: {
      '#ffffff': '/src/assets/Produtos/Impressoras/Impressora Hp 1.png'
    },
    colors: ['#ffffff'],
    categoria: 'eletronicos',
    tags: ['mais vendidos', 'lacamentos'],
    description: "Alta performance para escritórios exigentes: imprime, copia e digitaliza com qualidade profissional."
  },
  {
    name: 'Ampulheta Moderna',
    price: 'R$899,00',
    images: {
      '#000000': '/src/assets/Produtos/Decoração/Ampulheta 1.png'
    },
    colors: ['#000000'],
    categoria: 'ambientacao',
    tags: ['ver-tudo'],
    description: "Decoração funcional que une design contemporâneo com um toque de sofisticação atemporal."
  },
  {
    name: 'Tapete Estampado Decorativo',
    price: 'R$1890,00',
    images: {
      '#000000': '/src/assets/Produtos/Tapetes/Tapete estampado 1.png'
    },
    colors: ['#000000'],
    categoria: 'ambientacao',
    tags: ['ver-tudo'],
    description: "Estilo e aconchego em um só item. Ideal para decorar ambientes profissionais com personalidade."
  },
  {
    name: 'Locker M',
    price: 'R$2300,00',
    images: {
      '#ffffff': '/src/assets/Produtos/Lockers/Locker M Branco.png',
      '#228B22': '/src/assets/Produtos/Lockers/Locker M Verde.png'
    },
    colors: ['#ffffff', "#228B22"],
    categoria: 'moveis',
    tags: ['ver-tudo'],
    description: "Locker funcional com excelente divisão de espaços. Segurança e praticidade para uso corporativo."
  },
  {
    name: 'Armário Multifuncial Com Gavetas',
    price: 'R$3599,99',
    images: {
      '#DEB887': '/src/assets/Produtos/Armários/Armário Claro 1.png',
      '#5C4033': '/src/assets/Produtos/Armários/Armário Escuro 1.png',
    },
    colors: ['#DEB887', "#5C4033"],
    categoria: 'moveis',
    tags: ['ver-tudo', 'mais-vendidos'],
    description: "Armazenamento inteligente com gavetas amplas. Acabamento refinado para ambientes executivos."
  },
  {
    name: 'Telefone Intelbras Com Fio',
    price: 'R$1199,00',
    images: {
      '#000000': '/src/assets/Produtos/Telefones/Telefone 2.png'
    },
    colors: ['#000000'],
    categoria: 'eletronicos',
    tags: ['ver-tudo','mais-vendidos'],
    description: "Confiabilidade e clareza em ligações. Design compacto ideal para qualquer estação de trabalho."
  },
  {
    name: 'Mesa de Seis Pessoas',
    price: 'R$5000,00',
    images: {
      '#ffffff': '/src/assets/Produtos/Mesas/Mesa seis Pessoas Branca.png',
      '#DEB887': '/src/assets/Produtos/Mesas/Mesa seis Pessoas Madeira Clara.png',
      '#5C4033': '/src/assets/Produtos/Mesas/Mesa seis Pessoas Madeira Escura.png'
    },
    colors: ['#ffffff', "#DEB887", '#5C4033'],
    categoria: 'moveis',
    tags: ['ver-tudo', 'lancamentos'],
    description: "Solução ampla e elegante para equipes maiores. Design contemporâneo e estrutura firme."
  },
  {
    name: 'Globo Decorativo de Mesa',
    price: 'R$1599,90',
    images: {
      '#000000': '/src/assets/Produtos/Decoração/Globo decor 1 .png'
    },
    colors: ['#000000'],
    categoria: 'ambientacao',
    tags: ['ver-tudo'],
    description: "Toque clássico e sofisticado para sua decoração. Combina com escritórios e salas de reunião."
  },
  {
    name: 'Tapetes',
    price: 'R$1800,00',
    images: {
      '#003366': '/src/assets/Produtos/Tapetes/Tapete Azul.png',
      '#FFC0CB': '/src/assets/Produtos/Tapetes/Tapete Rosa.png',
      '#228B22': '/src/assets/Produtos/Tapetes/Tapete Verde.png'
    },
    colors: ['#003366', "#FFC0CB", '#228B22'],
    categoria: 'ambientacao',
    tags: ['ver-tudo'],
    description: "Conforto e estilo sob os pés. Disponível em diversas cores para harmonizar com qualquer ambiente."
  },
  {
    name: 'Impressora Multifuncinal',
    price: 'R$2998,90',
    images: {
      '#000000': '/src/assets/Produtos/Impressoras/Impressora Hp 2 Capa.png'
    },
    colors: ['#000000'],
    categoria: 'eletronicos',
    tags: ['mais-vendidos', 'ver-tudo'],
    description: "Impressão de qualidade e funções completas para escritórios que exigem eficiência."
  },
  {
    name: 'Combo Cartucho (Preto + Colorido)',
    price: 'R$990,99',
    images: {
      '#000000': '/src/assets/Produtos/Cartuchos/CartuchoCombo.png'
    },
    colors: ['#000000'],
    categoria: 'materiais',
    tags: ['mais-vendidos', 'ver-tudo'],
    description: "Alto rendimento em um kit econômico. Ideal para manter a produtividade sem interrupções."
  },
  {
    name: 'Combo: Mesa e Cadeira',
    price: 'R$3999,99',
    images: {
      '#DEB887': '/src/assets/Produtos/Mesas/Combo Mesa e Cadeira Clara.png',
      '#000000': '/src/assets/Produtos/Mesas/Combo Mesa e Cadeira Preto.png',
      '#64B5F6': '/src/assets/Produtos/Mesas/Combo Mesa e Cadeira Azul.png'
    },
    colors: ['#DEB887', "#000000", '#64B5F6'],
    categoria: 'moveis',
    tags: ['ver-tudo', 'lancamentos'],
    description: "Conjunto ergonômico e moderno para estações completas de trabalho. Estilo e funcionalidade combinados."
  },
  {
    name: 'Espelho Orgânico Decorativo',
    price: 'R$1450,00',
    images: {
      '#000000': '/src/assets/Produtos/Decoração/Espelho organico 1.png'
    },
    colors: ['#000000'],
    categoria: 'ambientacao',
    tags: ['ver-tudo'],
    description: "Design fluido e contemporâneo para dar um toque artístico ao ambiente profissional."
  },
  {
    name: 'Telefone Intelbras Simples Com Fio',
    price: 'R$988,00',
    images: {
      '#ffffff': '/src/assets/Produtos/Telefones/Telefone 3.png'
    },
    colors: ['#ffffff'],
    categoria: 'eletronicos',
    tags: ['ver-tudo'],
    description: "Modelo básico, eficiente e confiável. Ideal para comunicação interna em empresas."
  },
  {
    "name": "Pins Para Quadro",
    "price": "R$299,99",
    "images": {
      "#D3D3D3": "/src/assets/Produtos/Pins/Pins para quadro.png"
    },
    "colors": ["#D3D3D3"],
    "categoria": "materiais",
    "tags": ["ver-tudo"],
    "description": "Coloridos e funcionais, ideais para murais de recado em escritórios e salas de reunião."
  },
  {
    "name": "Head Fone Bluetooth Preto",
    "price": "R$1000,00",
    "images": {
      "#000000": "/src/assets/Produtos/Cabos-Fones/HeadFone.png"
    },
    "colors": ["#000000"],
    "categoria": "eletronicos",
    "tags": ["ver-tudo"],
    "description": "Qualidade sonora com liberdade de movimento. Ideal para chamadas e concentração no trabalho."
  },
  {
    "name": "Carrinho Porta Itens",
    "price": "R$2999,99",
    "images": {
      "#ffffff": "/src/assets/Produtos/Armários/Carrinho Branco 1.png",
      "#DEB887": "/src/assets/Produtos/Armários/Carrinho Claro 1.png",
      "#000000": "/src/assets/Produtos/Armários/Carrinho Escuro 1.png"
    },
    "colors": ["#ffffff", "#DEB887", "#000000"],
    "categoria": "moveis",
    "tags": ["ver-tudo"],
    "description": "Mobilidade e organização para ambientes dinâmicos. Perfeito para escritórios multifuncionais."
  },
  {
    "name": "Relógio de Parede Minimalista",
    "price": "R$660,90",
    "images": {
      "#000000": "/src/assets/Produtos/Decoração/Relogio 1.png"
    },
    "colors": ["#000000"],
    "categoria": "ambientacao",
    "tags": ["ver-tudo", "mais-vendidos"],
    "description": "Design limpo e moderno para manter a pontualidade com estilo em qualquer ambiente."
  },
  {
    "name": "Cartucho Tinta Preta",
    "price": "R$580,70",
    "images": {
      "#000000": "/src/assets/Produtos/Cartuchos/Cartucho1.png"
    },
    "colors": ["#000000"],
    "categoria": "materiais",
    "tags": ["ver-tudo"],
    "description": "Cartucho de alta qualidade para impressões nítidas e profissionais em documentos do dia a dia."
  },
  {
    name: 'Cartucho Tinta Colorida',
    price: 'R$650,00',
    images: {
      '#000000': '/src/assets/Produtos/Cartuchos/Cartucho2.png'
    },
    colors: ['#000000'],
    categoria: 'materiais',
    tags: ['ver-tudo'],
    description: "Cartucho confiável para impressões coloridas com qualidade profissional e alto rendimento."
  },
  {
    name: 'Porta Caneta Minimalista',
    price: 'R$238,00',
    images: {
      '#000000': '/src/assets/Produtos/Organizacao/porta caneta 1.png'
    },
    colors: ['#000000'],
    categoria: 'materiais',
    tags: ['ver-tudo'],
    description: "Organização com elegância. Ideal para escritórios que valorizam estética e funcionalidade."
  },
  {
    name: 'Cadeira Com Suporte de Pescoço',
    price: 'R$1873,90',
    images: {
      '#ffffff': '/src/assets/Produtos/Cadeiras/Cadeira Pescoço branca 1.png',
      '#9E9E9E': '/src/assets/Produtos/Cadeiras/Cadeira Pescoço cinza.png',
      '#228B22': '/src/assets/Produtos/Cadeiras/Cadeira Pescoço verde 1.png',
    },
    colors: ['#ffffff', '#9E9E9E', '#228B22'],
    categoria: 'moveis',
    tags: ['mais-vendidos', 'ver-tudo'],
    description: "Conforto e ergonomia elevados com apoio para o pescoço. Ideal para longas jornadas de trabalho."
  },
  {
    name: 'Cabo HDMI',
    price: 'R$400,00',
    images: {
      '#000000': '/src/assets/Produtos/Cabos-Fones/CaboHDMI.png'
    },
    colors: ['#000000'],
    categoria: 'eletronicos',
    tags: ['ver-tudo','mais-vendidos'],
    description: "Conexão rápida e estável para monitores e TVs. Transmita com qualidade de som e imagem."
  },
  {
    name: 'Fone Bluetooth Portátil',
    price: 'R$1129,00',
    images: {
      '#000000': '/src/assets/Produtos/Cabos-Fones/FoneBP.png'
    },
    colors: ['#000000'],
    categoria: 'eletronicos',
    tags: ['ver-tudo','mais-vendidos'],
    description: "Compacto, potente e sem fios. Ideal para produtividade e chamadas no ambiente de trabalho."
  },
  {
    name: 'Mesa Móvel Simples',
    price: 'R$2500,00',
    images: {
      '#DEB887': '/src/assets/Produtos/Mesas/Mesa Móvel Clara 1.png',
      '#5C4033': '/src/assets/Produtos/Mesas/Mesa Móvel Escura 1.png'
    },
    colors: ["#DEB887", '#5C4033'],
    categoria: 'moveis',
    tags: ['ver-tudo'],
    description: "Versátil e funcional, com design limpo. Perfeita para espaços corporativos modernos."
  },
  {
    name: 'Organizador de Mesa Preto',
    price: 'R$599,90',
    images: {
      '#000000': '/src/assets/Produtos/Organizacao/Organizador 2.png'
    },
    colors: ['#000000'],
    categoria: 'materiais',
    tags: ['ver-tudo'],
    description: "Conjunto completo para manter a mesa organizada com elegância e eficiência."
  },
  {
    name: 'Cabo Adaptador usbc para hdmi',
    price: 'R$1130,00',
    images: {
      '#ffffff': '/src/assets/Produtos/Cabos-Fones/cabo-adaptador-usb-tipo-c-para-hdmi.png'
    },
    colors: ['#ffffff'],
    categoria: 'eletronicos',
    tags: ['ver-tudo'],
    description: "Conecte dispositivos com USB-C a monitores HDMI com praticidade e alta definição."
  },
  {
    name: 'Fone Com Fio',
    price: 'R$550,00',
    images: {
      '#ffffff': '/src/assets/Produtos/Cabos-Fones/FoneCfio.png'
    },
    colors: ['#fffffff'],
    categoria: 'eletronicos',
    tags: ['ver-tudo'],
    description: "Solução simples e eficaz para chamadas nítidas e uso prolongado com conforto."
  },
  {
    name: 'Fone Bluetooth Portátil',
    price: 'R$1130,00',
    images: {
      '#000000': '/src/assets/Produtos/Cabos-Fones/FoneBP.png'
    },
    colors: ['#000000'],
    categoria: 'eletronicos',
    tags: ['ver-tudo','mais-vendidos'],
    description: "Mobilidade e som de qualidade. Ideal para ambientes corporativos e reuniões online."
  },
  {
    name: 'Prateleira',
    price: 'R$1870,00',
    images: {
      '#FFD700': '/src/assets/Produtos/Armários/Prateleira Amarela 1.png',
      '#64B5F6': '/src/assets/Produtos/Armários/Prateleira Azul 1.png',
      '#ffffff': '/src/assets/Produtos/Armários/Prateleira Branca.png',
      '#228B22': '/src/assets/Produtos/Armários/Prateleira Verde 1.png',
    },
    colors: ['#FFD700', "#64B5F6", '#ffffff', '#228B22'],
    categoria: 'moveis',
    tags: ['ver-tudo'],
    description: "Prateleira versátil com visual moderno, ideal para decoração e organização de escritórios."
  },
  {
    name: 'Apontador de Mesa',
    price: 'R$770,90',
    images: {
      '#000000': '/src/assets/Produtos/Papelaria/Apontador de Mesa 1.png'
    },
    colors: ['#000000'],
    categoria: 'materiais',
    tags: ['ver-tudo'],
    description: "Compacto e robusto, ideal para manter lápis sempre prontos no ambiente de trabalho."
  },
  {
    name: 'Vaso Decorativo Médio',
    price: 'R$799,90',
    images: {
      '#000000': '/src/assets/Produtos/Decoração/Vaso 2.png'
    },
    colors: ['#000000'],
    categoria: 'ambientacao',
    tags: ['ver-tudo'],
    description: "Elegância natural para complementar a decoração de mesas, estantes e recepções."
  },
  {
    name: 'Organizador de Mesa Rosa',
    price: 'R$599,90',
    images: {
      '#FFC0CB': '/src/assets/Produtos/Organizacao/Organizador 1.png'
    },
    colors: ['#FFC0CB'],
    categoria: 'materiais',
    tags: ['ver-tudo'],
    description: "Charme e funcionalidade para o dia a dia. Perfeito para escritórios mais criativos."
  },
  {
    name: 'Agenda Clássica',
    price: 'R$355,00',
    images: {
      '#000000': '/src/assets/Produtos/Papelaria/Agenda Preta 1.png',
      '#FFC0CB': '/src/assets/Produtos/Papelaria/Agenda Rosa 1.png'
    },
    colors: ['#000000', '#FFC0CB'],
    categoria: 'materiais',
    tags: ['ver-tudo'],
    description: "Para quem valoriza organização com estilo. Capa resistente e layout funcional para o trabalho."
  },  
  {
    name: 'Vaso Decorativo Pequeno',
    price: 'R$699,90',
    images: {
      '#000000': '/src/assets/Produtos/Decoração/Vaso 1.png'
    },
    colors: ['#000000'],
    categoria: 'ambientacao',
    tags: ['ver-tudo'],
    description: "Um toque sutil de elegância para compor ambientes sofisticados com estilo minimalista."
  },
  {
    name: 'Borracha Escolar',
    price: 'R$49,50',
    images: {
      '#000000': '/src/assets/Produtos/Papelaria/Borracha 1.png'
    },
    colors: ['#000000'],
    categoria: 'materiais',
    tags: ['ver-tudo'],
    description: "Pequena, eficiente e indispensável no dia a dia de qualquer escritório ou sala de aula."
  },
  {
    name: 'Calculadora Portátil',
    price: 'R$290,90',
    images: {
      '#000000': '/src/assets/Produtos/Papelaria/Calculadora 1.png'
    },
    colors: ['#000000'],
    categoria: 'eletronicos',
    tags: ['ver-tudo'],
    description: "Compacta, leve e prática. Ideal para cálculos rápidos com visual clean e moderno."
  },
  {
    name: 'Calendário de Mesa 2025',
    price: 'R$220,00',
    images: {
      '#000000': '/src/assets/Produtos/Papelaria/Calendario 1.png'
    },
    colors: ['#000000'],
    categoria: 'materiais',
    tags: ['ver-tudo'],
    description: "Organize compromissos com clareza e estilo. Design funcional e ideal para qualquer mesa."
  },
  {
    name: 'Caneta Bic (50 unidades)',
    price: 'R$490,90',
    images: {
      '#000000': '/src/assets/Produtos/Papelaria/Caneta Bic 50un 1.png',
      '#003366': '/src/assets/Produtos/Papelaria/Caneta Bic 50un 1.png',
      '#C62828': '/src/assets/Produtos/Papelaria/Caneta Bic 50un 1.png'
    },
    colors: ['#000000', '#003366', '#C62828'],
    categoria: 'materiais',
    tags: ['ver-tudo'],
    description: "Pacote econômico com 50 unidades. Escrita macia, confiável e duradoura para o dia a dia."
  },
  {
    name: 'Folha A4 (5 pacotes)',
    price: 'R$320,00',
    images: {
      '#ffffff': '/src/assets/Produtos/Papelaria/Folha A4 5 pacotes 1.png'
    },
    colors: ['#ffffff'],
    categoria: 'materiais',
    tags: ['ver-tudo'],
    description: "Pacote com 5 resmas de folhas A4. Ideal para impressões em alta qualidade e uso intenso."
  },
  {
    name: 'Marca Texto Colorida',
    price: 'R$190,00',
    images: {
      '#000000': '/src/assets/Produtos/Papelaria/Marca texto colorida 1.png'
    },
    colors: ['#000000'],
    categoria: 'materiais',
    tags: ['ver-tudo'],
    description: "Realce suas anotações com cores vibrantes. Ideal para leitura, organização e estudos."
  },
  {
    name: 'Post-it Colorido',
    price: 'R$150,00',
    images: {
      '#000000': '/src/assets/Produtos/Papelaria/Post-it colorido 1.png'
    },
    colors: ['#000000'],
    categoria: 'materiais',
    tags: ['ver-tudo'],
    description: "Notas adesivas práticas para recados, lembretes ou marcações rápidas no ambiente de trabalho."
  }  
];

export default allProducts;