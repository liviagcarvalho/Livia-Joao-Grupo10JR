const allProducts = [
    {
        name: 'Cadeira Conforto Pro',
        price: 'R$187,90',
        images: {
          '#ffffff': '/src/assets/Produtos/Cadeiras/Cadeira Conforto Branca.png',
          '#5C4033': '/src/assets/Produtos/Cadeiras/Cadeira Conforto Marrom.png',
          '#000000': '/src/assets/Produtos/Cadeiras/Cadeira Conforto Preta.png',
        },
        colors: ['#ffffff', '#5C4033', '#000000'],
        categoria: 'moveis',
        tags: ['mais-vendidos', 'ver-tudo'],
        detailedDescription: `A Cadeira Conforto Pro foi projetada para oferecer o máximo de ergonomia e estilo em ambientes corporativos ou home office. Seu encosto alto e curvado segue a forma natural da coluna, proporcionando suporte lombar eficiente durante longas jornadas de trabalho. O assento é estofado com espuma de alta densidade revestida em tecido respirável, garantindo conforto sem superaquecer. A estrutura em aço reforçado possui acabamento em pintura eletrostática, conferindo durabilidade e resistência a riscos. Ajuste de altura a gás, mecanismo de inclinação com trava em múltiplas posições e base giratória de 360° aumentam a versatilidade, permitindo personalizar o ângulo de acordo com sua postura preferida. Rodízios em nylon protegem o piso enquanto asseguram mobilidade suave. Disponível em três cores clássicas, a Cadeira Conforto Pro combina com qualquer decoração e eleva o nível do seu espaço de trabalho.`,
      },
      {
        name: 'Porta Papel Elegante',
        price: 'R$35,90',
        images: {
          '#000000': '/src/assets/Produtos/Organizacao/porta papel 1.png'
        },
        colors: ['#000000'],
        categoria: 'materiais',
        tags: ['ver-tudo'],
        detailedDescription: `O Porta Papel Elegante reúne funcionalidade e design minimalista para organizar documentos, papéis e revistas sobre a mesa de trabalho ou bancada de estudos. Confeccionado em plástico ABS de alta resistência com acabamento fosco, suporta até 1kg sem deformar. Seu formato angular facilita o encaixe de folhas A4, relatórios e blocos de anotações, enquanto o recorte frontal permite visualizar facilmente o conteúdo. O suporte antiderrapante na base evita deslizamentos, mantendo tudo no lugar durante o uso. Com dimensões compactas (20cm x 15cm x 8cm), integra-se discretamente ao ambiente, sendo ideal para escritórios corporativos, home offices e áreas de recepção. Fácil de limpar e manter, é uma peça indispensável para manter sua mesa organizada com elegância.`,
      },
      {
        name: 'Persiana com Blackout',
        price: 'R$210,00',
        images: {
          '#ffffff': '/src/assets/Produtos/Persianas/Persiana Branca 1.png',
          '#9E9E9E': '/src/assets/Produtos/Persianas/Persiana Cinza 1.png',
          '#5C4033': '/src/assets/Produtos/Persianas/Persiana Marrom 1.png',
          '#000000': '/src/assets/Produtos/Persianas/Persiana Preta 1.png'
        },
        colors: ['#ffffff', '#9E9E9E', '#5C4033', '#000000'],
        categoria: 'ambientacao',
        tags: ['ver-tudo'],
        detailedDescription: `Esta Persiana com Blackout combina estética moderna e funcionalidade superior para controlar luminosidade e garantir privacidade. Feita em tecido revestido com camada blackout na face interna, bloqueia até 99% da entrada de luz, ideal para salas de reunião, home theaters ou quartos. O mecanismo de acionamento pode ser manual (corrente lateral) ou motorizado (opcional), permitindo ajuste preciso da altura. O material antiestático repele poeira e é fácil de limpar com pano úmido. A fixação universal adapta-se a diferentes tipos de janela (madeira, alvenaria ou drywall) sem necessidade de furação complexa. Disponível em quatro tonalidades neutras, integra-se a qualquer estilo de decoração, adicionando conforto térmico e acústico graças ao revestimento isolante.`,
      },
      {
        name: 'MousePad Confortável',
        price: 'R$49,90',
        images: {
          '#000000': '/src/assets/Produtos/Cabos-Fones/MousePad 1.png'
        },
        colors: ['#000000'],
        categoria: 'eletronicos',
        tags: ['ver-tudo'],
        detailedDescription: `O MousePad Confortável foi desenvolvido para otimizar o uso de mouses ópticos e a laser em escritórios e estações de trabalho. A base em borracha antideslizante garante estabilidade total sobre qualquer superfície, enquanto a superfície em tecido de microfibra proporciona deslize suave e sensível aos movimentos do cursor. Medindo 30x25cm, oferece espaço amplo para comandos e ações rápidas. As bordas costuradas evitam desfiamento mesmo com uso intensivo, prolongando a vida útil. Leve e fino, é fácil de transportar, ideal para profissionais que alternam entre desktop e notebook. Limpeza simples com pano úmido; resistente à água e manchas. Um acessório essencial para melhorar conforto e precisão em tarefas diárias.`,
      },
      {
        name: 'Mesa Regular Com Altura Ajustável',
        price: 'R$500,00',
        images: {
          '#DEB887': '/src/assets/Produtos/Mesas/Mesa Regular Com Altura Móvel Clara 1.png',
          '#5C4033': '/src/assets/Produtos/Mesas/Mesa Regular Com Altura Móvel Escura 1.png'
        },
        colors: ['#DEB887', '#5C4033'],
        categoria: 'moveis',
        tags: ['mais-vendidos', 'ver-tudo'],
        detailedDescription: `A Mesa Regular Com Altura Ajustável oferece ergonomia e versatilidade para quem busca alternar entre postura sentada e em pé ao longo do dia. O mecanismo de ajuste pneumático permite regular a altura entre 70cm e 115cm com apenas um toque, atendendo diferentes perfis de usuários. A superfície em MDF com bordas arredondadas é resistente a riscos e líquidos, facilitando a limpeza. Estrutura em aço reforçado suporte até 80kg de carga distribuída. Ideal para escritórios modernos e home offices, promove melhor circulação e reduz fadiga muscular. Montagem simples com poucas ferramentas; sistema de travamento garante segurança em todas as posições. Design clean em dois acabamentos de madeira realça a decoração.`,
      },
      {
        name: 'Telefone Sem Fio',
        price: 'R$150,00',
        images: {
          '#000000': '/src/assets/Produtos/Telefones/Telefone1.png'
        },
        colors: ['#000000'],
        categoria: 'eletronicos',
        tags: ['ver-tudo'],
        detailedDescription: `O Telefone Sem Fio combina tecnologia DECT 6.0 com design ergonômico e bateria de longa duração (até 10 horas em conversação). Ideal para escritórios e residências, possui viva-voz de alta clareza, identificação de chamadas e agenda para até 200 contatos. Teclas grandes com retroiluminação facilitam o discador em ambientes escuros. Base compacta com conector para fone de ouvido opcional. Economia de energia com modo ECO e selo CE garantem eficiência. Fácil de instalar, sem fio de conexão; alcance até 50m em ambientes internos e 300m ao ar livre.`,
      },
      {
        name: 'Cadeira Joelhos',
        price: 'R$190,00',
        images: {
          '#000000': '/src/assets/Produtos/Cadeiras/Cadeira Joelhos Preta.png'
        },
        colors: ['#000000'],
        categoria: 'moveis',
        tags: ['mais-vendidos', 'ver-tudo'],
        detailedDescription: `A Cadeira Joelhos oferece postura dinâmica e saúde corporal, distribuindo o peso entre joelhos e quadril para manter a coluna alinhada. Assento ergonômico revestido em couro sintético de fácil limpeza, espuma densa para conforto prolongado. Estrutura em aço tubular soldado suporta até 120kg. Ajuste de altura a gás (60cm a 80cm) e ângulo de inclinação de 15° favorecem movimentação natural. Ideal para recepções e áreas de debates, estimula postura ativa, reduz tensão lombar e melhora circulação. Design minimalista e compacto ocupa pouco espaço.`,
      },
      {
        name: 'Mesa Para Quatro Pessoas',
        price: 'R$420,00',
        images: {
          '#DEB887': '/src/assets/Produtos/Mesas/Mesa Quatro Pessoas Clara.png',
          '#5C4033': '/src/assets/Produtos/Mesas/Mesa Quatro Pessoas Escura.png'
        },
        colors: ['#DEB887', '#5C4033'],
        categoria: 'moveis',
        tags: ['ver-tudo', 'lancamentos'],
        detailedDescription: `Perfeita para reuniões rápidas ou coworkings, a Mesa Para Quatro Pessoas é feita em MDF resistente com acabamento UV, fácil de limpar e resistente a manchas. Medindo 120x80cm, acomoda confortavelmente quatro cadeiras padrão. Estrutura metálica com pintura powder-coat aumenta durabilidade e estabilidade. Pés com regulagem de nível compensam pisos irregulares, evitando balanços. Design retangular clean integra-se a diferentes estilos; cores disponíveis em claro ou escuro para combinar com o ambiente. Montagem simples, entregue com kit completo.`,
      },
      {
        name: 'Locker G',
        price: 'R$350,00',
        images: {
          '#003366': '/src/assets/Produtos/Lockers/Locker G azul.png',
          '#FFD700': '/src/assets/Produtos/Lockers/Locker G amarelo.png',
          '#228B22': '/src/assets/Produtos/Lockers/Locker G verde.png'
        },
        colors: ['#003366', '#FFD700', '#228B22'],
        categoria: 'moveis',
        tags: ['lancamentos', 'ver-tudo'],
        detailedDescription: `O Locker G oferece amplo espaço interno em chapa metálica de 1,2mm com pintura epoxy resistente a riscos e arranhões. Cada compartimento possui chave individual, prateleira ajustável e ganchos internos para mochilas ou casacos. Dimensões externas de 180x90x45cm acomodam pertences pessoais em empresas, universidades e academias. A porta ventilada garante circulação de ar, prevenindo odores. Disponível em três cores vibrantes, adiciona personalidade ao espaço. Montagem modular facilita expansão de acordo com sua necessidade.`,
      },
      {
        name: 'Mesa L',
        price: 'R$420,00',
        images: {
          '#ffffff': '/src/assets/Produtos/Mesas/Mesa L Branca.png',
          '#5C4033': '/src/assets/Produtos/Mesas/Mesa L Marrom.png'
        },
        colors: ['#ffffff', '#5C4033'],
        categoria: 'moveis',
        tags: ['mais-vendidos', 'ver-tudo'],
        detailedDescription: `A Mesa L combina estética contemporânea e robustez para escritórios e salas de reunião. Fabricada em MDF revestido com lâmina melamínica, resistente a riscos e alta temperatura. O formato em 'L' maximiza a área de trabalho, ideal para multitarefas ou estações compartilhadas. Suporte metálico em perfis retangulares garante estabilidade e suporte para até 100kg. Cantos arredondados evitam acidentes e aprimoram o visual clean. Disponível em branco ou marrom, integra-se facilmente à decoração existente. Montagem fácil com manual ilustrado.`,
      },
      {
        name: 'Suporte de Monitor',
        price: 'R$89,90',
        images: {
          '#D3D3D3': '/src/assets/Produtos/suporte/suportedemonitor.png'
        },
        colors: ['#D3D3D3'],
        categoria: 'materiais',
        tags: ['mais-vendidos', 'ver-tudo'],
        detailedDescription: `Eleve seu monitor a uma altura ergonômica com este Suporte de Monitor ajustável em alumínio escovado. Compatível com telas de 17" a 32" e até 8kg, possui sistema de ângulo&nbsp;e altura reguláveis, melhorando postura e reduzindo tensão no pescoço. Base antiderrapante com rodízios ocultos facilita reorganização. Design minimalista e acabamento premium combinam com qualquer estação de trabalho. Instalação rápida sem ferramentas adicionais.`,
      },
      {
        name: 'Cadeira Ergométrica',
        price: 'R$150,00',
        images: {
          '#000000': '/src/assets/Produtos/Cadeiras/Cadeira Ergométrica Preta 1.png',
          '#C62828': '/src/assets/Produtos/Cadeiras/Cadeira Ergométrica Vermelha 1.png',
          '#64B5F6': '/src/assets/Produtos/Cadeiras/Cadeira Ergométrica Azul 1.png',
        },
        colors: ['#000000', '#C62828', '#64B5F6'],
        categoria: 'moveis',
        tags: ['mais-vendidos', 'ver-tudo'],
        detailedDescription: `A Cadeira Ergométrica foi projetada para oferecer suporte máximo à coluna e conforto durante longas horas de trabalho. Seu encosto em malha respirável permite circulação de ar, evitando acúmulo de calor, enquanto o apoio lombar ajustável promove alinhamento correto da postura. O assento acolchoado em espuma de alta densidade garante firmeza e durabilidade. O mecanismo synchro de reclinação sincroniza movimento entre assento e encosto, bloqueável em múltiplas posições, para relaxar e redistribuir o peso. Ajuste de altura a gás e braços ajustáveis em 3 dimensões (altura, largura e ângulo) personalizam o encaixe de acordo com seu biotipo. A base de alumínio com rodízios em PU desliza suavemente em diferentes pisos sem riscar. Disponível em três cores, combina alto desempenho ergonômico com design sofisticado.` 
      },
      {
        name: 'Apoio de Itens',
        price: 'R$120,00',
        images: {
          '#ffffff': '/src/assets/Produtos/Apoio de Itens/Apoio de itens branco.png',
          '#000000': '/src/assets/Produtos/Apoio de Itens/Apoio de itens preto.png'
        },
        colors: ['#ffffff', '#000000'],
        categoria: 'materiais',
        tags: ['ver-tudo'],
        detailedDescription: `O Apoio de Itens organiza e eleva seus objetos de mesa para otimizar espaço e ergonomia. Feito em MDF revestido com pintura UV, suporta até 5kg de maneira estável. A base antiderrapante evita deslizamentos, enquanto o design modular permite empilhar múltiplas unidades. Ideal para notebooks, impressoras, organizadores e itens decorativos. As laterais possuem recortes para passagem de cabos e ventilação, mantendo o equipamento protegido e livre de superaquecimento. Fácil de montar, não necessita ferramentas.` 
      },
      {
        name: 'Impressora Multifuncinal Pro',
        price: 'R$349,99',
        images: {
          '#ffffff': '/src/assets/Produtos/Impressoras/Impressora Hp 1.png'
        },
        colors: ['#ffffff'],
        categoria: 'eletronicos',
        tags: ['mais vendidos', 'lacamentos'],
        detailedDescription: `A Impressora Multifuncional Pro oferece impressão, cópia e digitalização com alta velocidade (até 20 ppm em preto e 18 ppm em colorido). Conectividade Wi-Fi, Ethernet e USB simplifica a integração em redes corporativas ou residenciais. O display LCD de 2,7” facilita navegação em configurações e manutenção. Compatível com impressão duplex automática para economia de papel. O reservatório de tinta de alta capacidade reduz o custo por página e inclui tanque visível para monitoramento de níveis. Digitalização em até 1200 dpi e cópia nítida em até 600 dpi atendem documentos e fotos com qualidade profissional. Design compacto e acabamento em branco fosco harmonizam com qualquer ambiente.` 
      },
      {
        name: 'Ampulheta Moderna',
        price: 'R$89,00',
        images: {
          '#000000': '/src/assets/Produtos/Decoração/Ampulheta 1.png'
        },
        colors: ['#000000'],
        categoria: 'ambientacao',
        tags: ['ver-tudo'],
        detailedDescription: `A Ampulheta Moderna combina arte e funcionalidade para marcar intervalos de 30 minutos com precisão. O vidro soprado artesanal protege a areia branca ou preta em um recipiente selado. A base em metal preto fosco confere estabilidade e um toque de elegância industrial. Ideal para gestão de tempo em tarefas, meditação ou decoração de escritório, acrescenta estilo minimalista à superfície de mesas e prateleiras. ` 
      },
      {
        name: 'Tapete Estampado Decorativo',
        price: 'R$189,00',
        images: {
          '#000000': '/src/assets/Produtos/Tapetes/Tapete estampado 1.png'
        },
        colors: ['#000000'],
        categoria: 'ambientacao',
        tags: ['ver-tudo'],
        detailedDescription: `O Tapete Estampado Decorativo traz aconchego e estilo ao ambiente com fibra sintética resistente a manchas e desbotamento. Medindo 120x180cm, possui base antiderrapante que mantém o tapete no lugar. A estampa geométrica em tons neutros destaca qualquer decoração, enquanto a superfície macia proporciona conforto ao caminhar. Fácil de limpar com aspirador ou pano úmido. ` 
      },
      {
        name: 'Locker M',
        price: 'R$230,00',
        images: {
          '#ffffff': '/src/assets/Produtos/Lockers/Locker M Branco.png',
          '#228B22': '/src/assets/Produtos/Lockers/Locker M Verde.png'
        },
        colors: ['#ffffff', '#228B22'],
        categoria: 'moveis',
        tags: ['ver-tudo'],
        detailedDescription: `O Locker M é um armário compacto em chapa metálica com pintura epoxy resistente. Ideal para escritórios e coworkings, possui três compartimentos com portas ventiladas, sistema de fechamento com chave e prateleiras internas ajustáveis. Suporta até 10kg por prateleira. Medidas externas de 120x40x45cm. Entrega praticidade e organização com estética clean. ` 
      },
      {
        name: 'Armário Multifuncial Com Gavetas',
        price: 'R$359,99',
        images: {
          '#DEB887': '/src/assets/Produtos/Armários/Armário Claro 1.png',
          '#5C4033': '/src/assets/Produtos/Armários/Armário Escuro 1.png',
        },
        colors: ['#DEB887', '#5C4033'],
        categoria: 'moveis',
        tags: ['ver-tudo', 'mais-vendidos'],
        detailedDescription: `Este Armário Multifuncional oferece quatro gavetas espaçosas e duas prateleiras ajustáveis, perfeito para arquivos, materiais de escritório e objetos pessoais. Estrutura em MDF de alta densidade com revestimento melamínico resistente a riscos. Corrediças telescópicas garantem abertura suave. Base elevatória mantém o móvel nivelado. Acabamento sofisticado em tons de madeira clara ou escura. ` 
      },
      {
        name: 'Telefone Intelbras Com Fio',
        price: 'R$119,00',
        images: {
          '#000000': '/src/assets/Produtos/Telefones/Telefone 2.png'
        },
        colors: ['#000000'],
        categoria: 'eletronicos',
        tags: ['ver-tudo','mais-vendidos'],
        detailedDescription: `O Telefone Intelbras com Fio dispõe de função viva-voz, identificador de chamadas e viva-voz com qualidade de áudio cristalina. Design ergonômico com teclas grandes e display iluminado. Base compacta com memória para 10 números fast-dial. Excelente custo-benefício para residências e pequenos escritórios. ` 
      },
      {
        name: 'Mesa de Seis Pessoas',
        price: 'R$500,00',
        images: {
          '#ffffff': '/src/assets/Produtos/Mesas/Mesa seis Pessoas Branca.png',
          '#DEB887': '/src/assets/Produtos/Mesas/Mesa seis Pessoas Madeira Clara.png',
          '#5C4033': '/src/assets/Produtos/Mesas/Mesa seis Pessoas Madeira Escura.png'
        },
        colors: ['#ffffff', '#DEB887', '#5C4033'],
        categoria: 'moveis',
        tags: ['ver-tudo', 'lancamentos'],
        detailedDescription: `Perfeita para salas de reunião ou refeitórios corporativos, a Mesa de Seis Pessoas mede 240x90cm e acomoda confortavelmente seis cadeiras. Tampos em MDF com acabamento UV montados sobre base metálica tubular com pintura epóxi. Bordas arredondadas aumentam segurança. Prática de limpar e super resistente ao uso diário. ` 
      },
      {
        name: 'Globo Decorativo de Mesa',
        price: 'R$159,90',
        images: {
          '#000000': '/src/assets/Produtos/Decoração/Globo decor 1 .png'
        },
        colors: ['#000000'],
        categoria: 'ambientacao',
        tags: ['ver-tudo'],
        detailedDescription: `Este Globo Decorativo combina base em metal e esfera de plástico ABS com mapa político detalhado. Mede 30cm de diâmetro e gira suavemente em seu eixo. Ideal para escritório ou sala de estudos, adiciona charme e inspirações de viagem. ` 
      },
      {
        name: 'Tapetes',
        price: 'R$180,00',
        images: {
          '#003366': '/src/assets/Produtos/Tapetes/Tapete Azul.png',
          '#FFC0CB': '/src/assets/Produtos/Tapetes/Tapete Rosa.png',
          '#228B22': '/src/assets/Produtos/Tapetes/Tapete Verde.png'
        },
        colors: ['#003366', '#FFC0CB', '#228B22'],
        categoria: 'ambientacao',
        tags: ['ver-tudo'],
        detailedDescription: `Conjunto de Tapetes estampados em fibras sintéticas, cada um medindo 60x90cm. Resistentes a manchas, com base antiderrapante. Estampas modernas em três cores vibrantes, perfeito para delimitar espaços e decorar ambientes. ` 
      },
      {
        name: 'Impressora Multifuncinal',
        price: 'R$299,90',
        images: {
          '#000000': '/src/assets/Produtos/Impressoras/Impressora Hp 2 Capa.png'
        },
        colors: ['#000000'],
        categoria: 'eletronicos',
        tags: ['mais-vendidos', 'ver-tudo'],
        detailedDescription: `Modelo compacto com impressão mono e colorida até 18 ppm. Scanner CIS integrado e cópia rápida. Conexão USB e Wi-Fi Direct para impressão móvel. Tanque de tinta recarregável para baixo custo operacional. ` 
      },
      {
        name: 'Combo Cartucho (Preto + Colorido)',
        price: 'R$99,99',
        images: {
          '#000000': '/src/assets/Produtos/Cartuchos/CartuchoCombo.png'
        },
        colors: ['#000000'],
        categoria: 'materiais',
        tags: ['mais-vendidos', 'ver-tudo'],
        detailedDescription: `Kit econômico com cartuchos original compatíveis para impressoras jato de tinta. Inclui 1 preto de alta capacidade e 1 colorido (ciano, magenta, amarelo). Garantia de cores vivas e texto nítido. Fácil reposição. ` 
      },
      {
        name: 'Combo: Mesa e Cadeira',
        price: 'R$399,99',
        images: {
          '#DEB887': '/src/assets/Produtos/Mesas/Combo Mesa e Cadeira Clara.png',
          '#000000': '/src/assets/Produtos/Mesas/Combo Mesa e Cadeira Preto.png',
          '#64B5F6': '/src/assets/Produtos/Mesas/Combo Mesa e Cadeira Azul.png'
        },
        colors: ['#DEB887', '#000000', '#64B5F6'],
        categoria: 'moveis',
        tags: ['ver-tudo', 'lancamentos'],
        detailedDescription: `Pacote completo com Mesa Assis+Sup e Cadeira Confortável. Mesa em MDF ajustável de altura e cadeira ergonômica com espuma de alta densidade. Ideal para estações de trabalho compactas. Disponível em três combinações de cores. ` 
      },
      {
        name: 'Espelho Orgânico Decorativo',
        price: 'R$145,00',
        images: {
          '#000000': '/src/assets/Produtos/Decoração/Espelho organico 1.png'
        },
        colors: ['#000000'],
        categoria: 'ambientacao',
        tags: ['ver-tudo'],
        detailedDescription: `Espelho de moldura irregular em fibra de madeira natural, acabamento pintado à mão. Mede 50x40cm. Perfeito para entradas, salas e banheiros, confere estilo orgânico e moderno. ` 
      },
      {
        name: 'Telefone Intelbras Simples Com Fio',
        price: 'R$98,00',
        images: {
          '#ffffff': '/src/assets/Produtos/Telefones/Telefone 3.png'
        },
        colors: ['#ffffff'],
        categoria: 'eletronicos',
        tags: ['ver-tudo'],
        detailedDescription: `Telefone de linha fixa com fio, design compacto e funcionalidade básica de discagem rápida. Teclas suaves e display numérico. Ideal para quem busca simplicidade e economia. ` 
      },
      {
        name: 'Pins Para Quadro',
        price: 'R$29,99',
        images: {
          '#D3D3D3': '/src/assets/Produtos/Pins/Pins para quadro.png'
        },
        colors: ['#D3D3D3'],
        categoria: 'materiais',
        tags: ['ver-tudo'],
        detailedDescription: `Pacote com 100 pins de plástico resistentes em formato cônico. Perfeitos para fixação em cortiça, quadros de aviso e murais. Cores neutras que não desviam a atenção dos documentos. ` 
      },
      {
        name: 'Head Fone Bluetooth Preto',
        price: 'R$150,00',
        images: {
          '#000000': '/src/assets/Produtos/Cabos-Fones/HeadFone.png'
        },
        colors: ['#000000'],
        categoria: 'eletronicos',
        tags: ['ver-tudo', 'lancamentos'],
        detailedDescription: `Fone de ouvido Bluetooth com drivers de 40mm, conexão estéreo sem fio, até 20h de bateria e microfone integrado. Almofadas acolchoadas e haste ajustável. Controles no earcup para volume e chamadas. ` 
      },
      {
        name: 'Carrinho Porta Itens',
        price: 'R$299,99',
        images: {
          '#ffffff': '/src/assets/Produtos/Armários/Carrinho Branco 1.png',
          '#DEB887': '/src/assets/Produtos/Armários/Carrinho Claro 1.png',
          '#000000': '/src/assets/Produtos/Armários/Carrinho Escuro 1.png',
        },
        colors: ['#ffffff', '#DEB887', '#000000'],
        categoria: 'moveis',
        tags: ['ver-tudo'],
        detailedDescription: `Carrinho móvel com três prateleiras em aço resistente e rodízios trava-fácil. Ideal para organização de materiais, utensílios e suprimentos em escritórios, cozinhas e ateliês. Altura total de 90cm e capacidade de 15kg por prateleira. ` 
      },
      {
        name: 'Relógio de Parede Minimalista',
        price: 'R$99,90',
        images: {
          '#000000': '/src/assets/Produtos/Decoração/Relogio 1.png'
        },
        colors: ['#000000'],
        categoria: 'ambientacao',
        tags: ['ver-tudo', 'mais-vendidos'],
        detailedDescription: `Relógio de parede com numeração minimalista e ponteiros em metal fosco. Diâmetro de 30cm. Funcionamento silencioso (sweep). Montagem rápida com furo único na parede. ` 
      },
      {
        name: 'Cartucho Tinta Preta',
        price: 'R$58,70',
        images: {
          '#000000': '/src/assets/Produtos/Cartuchos/Cartucho1.png'
        },
        colors: ['#000000'],
        categoria: 'materiais',
        tags: ['ver-tudo'],
        detailedDescription: `Cartucho de tinta preta original compatível com diversas impressoras jato de tinta. Até 400 páginas em preto com qualidade profissional. Fácil de instalar sem vazamentos. ` 
      },
      {
        name: 'Cartucho Tinta Colorida',
        price: 'R$65,00',
        images: {
          '#000000': '/src/assets/Produtos/Cartuchos/Cartucho2.png'
        },
        colors: ['#000000'],
        categoria: 'materiais',
        tags: ['ver-tudo'],
        detailedDescription: `Cartucho colorido original para impressoras jato de tinta, combina ciano, magenta e amarelo em um único refil. Cores vibrantes e uniformes. Rende até 300 páginas. Fácil troca e armazenagem. ` 
      },
      {
        name: 'Porta Caneta Minimalista',
        price: 'R$25,00',
        images: {
          '#000000': '/src/assets/Produtos/Organizacao/porta caneta 1.png'
        },
        colors: ['#000000'],
        categoria: 'materiais',
        tags: ['ver-tudo'],
        detailedDescription: `Porta-caneta cilíndrico em metal escovado, acabamento fosco. Mede 8x10cm e acomoda até 20 instrumentos de escrita. Base emborrachada evita deslizamentos. Design clean para qualquer ambiente. ` 
      },
      {
        name: 'Cadeira Com Suporte de Pescoço',
        price: 'R$187,90',
        images: {
          '#ffffff': '/src/assets/Produtos/Cadeiras/Cadeira Pescoço branca 1.png',
          '#9E9E9E': '/src/assets/Produtos/Cadeiras/Cadeira Pescoço cinza.png',
          '#228B22': '/src/assets/Produtos/Cadeiras/Cadeira Pescoço verde 1.png',
        },
        colors: ['#ffffff', '#9E9E9E', '#228B22'],
        categoria: 'moveis',
        tags: ['mais-vendidos', 'ver-tudo'],
        detailedDescription: `A Cadeira com Suporte de Pescoço possui encosto alto e almofada integrada para suporte da cervical. Assento em espuma injetada e revestimento em tecido resistente. Base giratória e ajuste de altura a gás. Indicado para espaços de conferência e relaxamento de colaboradores. ` 
      },
      {
        name: 'Cabo HDMI',
        price: 'R$40,00',
        images: {
          '#000000': '/src/assets/Produtos/Cabos-Fones/CaboHDMI.png'
        },
        colors: ['#000000'],
        categoria: 'eletronicos',
        tags: ['ver-tudo','mais-vendidos'],
        detailedDescription: `Cabo HDMI 2.0 de 1,8m com conectores banhados a ouro para transmissão de áudio e vídeo em 4K@60Hz. Suporta ARC, CEC e HDR. Revestimento nylon trançado aumenta durabilidade. ` 
      },
      {
        name: 'Fone Bluetooth Portátil',
        price: 'R$113,00',
        images: {
          '#000000': '/src/assets/Produtos/Cabos-Fones/FoneBP.png'
        },
        colors: ['#000000'],
        categoria: 'eletronicos',
        tags: ['ver-tudo','mais-vendidos'],
        detailedDescription: `Fone de ouvido portátil com conexão Bluetooth 5.0, drivers de alta definição e microfone integrado. Até 8h de reprodução contínua. Almofadas ergonômicas proporcionam conforto prolongado. Controles externos para música e chamadas. ` 
      },
      {
        name: 'Mesa Móvel Simples',
        price: 'R$250,00',
        images: {
          '#DEB887': '/src/assets/Produtos/Mesas/Mesa Móvel Clara 1.png',
          '#5C4033': '/src/assets/Produtos/Mesas/Mesa Móvel Escura 1.png'
        },
        colors: ['#DEB887', '#5C4033'],
        categoria: 'moveis',
        tags: ['ver-tudo', 'lancamentos'],
        detailedDescription: `Mesa móvel com tampo de MDF resistente e rodízios giratórios com trava. Ideal para ambientes dinâmicos e coworkings. Mede 60x40x75cm. Montagem simples sem ferramentas especiais. ` 
      },
      {
        name: 'Organizador de Mesa Preto',
        price: 'R$59,90',
        images: {
          '#000000': '/src/assets/Produtos/Organizacao/Organizador 2.png'
        },
        colors: ['#000000'],
        categoria: 'materiais',
        tags: ['ver-tudo', 'lancamentos'],
        detailedDescription: `Organizador de mesa com seis compartimentos de diferentes formatos, ideal para canetas, clipes, post-its e acessórios. Feito em ABS resistente, base antiderrapante. ` 
      },
      {
        name: 'Cabo Adaptador usbc para hdmi',
        price: 'R$113,00',
        images: {
          '#ffffff': '/src/assets/Produtos/Cabos-Fones/cabo-adaptador-usb-tipo-c-para-hdmi.png'
        },
        colors: ['#ffffff'],
        categoria: 'eletronicos',
        tags: ['ver-tudo'],
        detailedDescription: `Adaptador USB-C para HDMI 4K@30Hz, plug-and-play, compatível com notebooks e smartphones. Conector em alumínio, cabo reforçado. ` 
      },
      {
        name: 'Fone Com Fio',
        price: 'R$55,00',
        images: {
          '#ffffff': '/src/assets/Produtos/Cabos-Fones/FoneCfio.png'
        },
        colors: ['#ffffff'],
        categoria: 'eletronicos',
        tags: ['ver-tudo'],
        detailedDescription: `Fone de ouvido com fio com drivers de 32mm, plug P2 banhado a ouro e cabo de 1,2m com revestimento reforçado. Almofadas macias e ajuste de haste. Excelente custo-benefício para uso diário. ` 
      },
      {
        name: 'Prateleira',
        price: 'R$190,00',
        images: {
          '#FFD700': '/src/assets/Produtos/Armários/Prateleira Amarela 1.png',
          '#64B5F6': '/src/assets/Produtos/Armários/Prateleira Azul 1.png',
          '#ffffff': '/src/assets/Produtos/Armários/Prateleira Branca.png',
          '#228B22': '/src/assets/Produtos/Armários/Prateleira Verde 1.png',
        },
        colors: ['#FFD700', '#64B5F6', '#ffffff', '#228B22'],
        categoria: 'moveis',
        tags: ['ver-tudo'],
        detailedDescription: `Prateleira em MDF com suportes metálicos, disponível em quatro cores. Mede 80x20x2cm, suporta até 15kg. Fácil instalação com parafusos inclusos. ` 
      },
      {
        name: 'Apontador de Mesa',
        price: 'R$77,90',
        images: {
          '#000000': '/src/assets/Produtos/Papelaria/Apontador de Mesa 1.png'
        },
        colors: ['#000000'],
        categoria: 'materiais',
        tags: ['ver-tudo'],
        detailedDescription: `Apontador metálico de bancada com reservatório de aparas e base antiderrapante. Inclui lâmina de aço inox para corte preciso. ` 
      },
      {
        name: 'Vaso Decorativo Médio',
        price: 'R$79,90',
        images: {
          '#000000': '/src/assets/Produtos/Decoração/Vaso 2.png'
        },
        colors: ['#000000'],
        categoria: 'ambientacao',
        tags: ['ver-tudo'],
        detailedDescription: `Vaso em cerâmica com acabamento rústico e superfície texturizada. Mede 25cm de altura. Ideal para plantas de folhagem média. ` 
      },
      {
        name: 'Organizador de Mesa Rosa',
        price: 'R$59,90',
        images: {
          '#FFC0CB': '/src/assets/Produtos/Organizacao/Organizador 1.png'
        },
        colors: ['#FFC0CB'],
        categoria: 'materiais',
        tags: ['ver-tudo'],
        detailedDescription: `Organizador de acrílico rosa com quatro divisórias, perfeito para guardar canetas, clips e post-its. Base antiderrapante. ` 
      },
      {
        name: 'Agenda Clássica',
        price: 'R$35,00',
        images: {
          '#000000': '/src/assets/Produtos/Papelaria/Agenda Preta 1.png',
          '#FFC0CB': '/src/assets/Produtos/Papelaria/Agenda Rosa 1.png'
        },
        colors: ['#000000', '#FFC0CB'],
        categoria: 'materiais',
        tags: ['ver-tudo'],
        detailedDescription: `Agenda semanal com capa dura, 80 folhas internas pautadas, marcador de página em fita de cetim. Ideal para planejamento diário.` 
      },
      {
        name: 'Vaso Decorativo Pequeno',
        price: 'R$69,90',
        images: {
          '#000000': '/src/assets/Produtos/Decoração/Vaso 1.png'
        },
        colors: ['#000000'],
        categoria: 'ambientacao',
        tags: ['ver-tudo'],
        detailedDescription: `Mini vaso de cerâmica esmaltada preta, altura de 12cm, perfeito para suculentas e cactos pequenos. ` 
      },
      {
        name: 'Borracha Escolar',
        price: 'R$4,50',
        images: {
          '#000000': '/src/assets/Produtos/Papelaria/Borracha 1.png'
        },
        colors: ['#000000'],
        categoria: 'materiais',
        tags: ['ver-tudo'],
        detailedDescription: `Borracha macia em PVC sem ácido, formato retangular, mede 5x2cm. Não desgasta o papel e não deixa resíduos coloridos. ` 
      },
      {
        name: 'Calculadora Portátil',
        price: 'R$29,90',
        images: {
          '#000000': '/src/assets/Produtos/Papelaria/Calculadora 1.png'
        },
        colors: ['#000000'],
        categoria: 'eletronicos',
        tags: ['ver-tudo'],
        detailedDescription: `Calculadora de bolso com 8 dígitos, alimentação solar e bateria de backup, teclas emborrachadas para conforto ao digitar. ` 
      },
      {
        name: 'Calendário de Mesa 2025',
        price: 'R$22,00',
        images: {
          '#000000': '/src/assets/Produtos/Papelaria/Calendario 1.png'
        },
        colors: ['#000000'],
        categoria: 'materiais',
        tags: ['ver-tudo'],
        detailedDescription: `Calendário de mesa em papel-cartão 300gsm, base em MDF, flip mensal com página dupla de cada mês. Inclui fuso horário e feriados nacionais. ` 
      },
      {
        name: 'Caneta Bic (50 unidades)',
        price: 'R$49,90',
        images: {
          '#000000': '/src/assets/Produtos/Papelaria/Caneta Bic 50un 1.png',
          '#003366': '/src/assets/Produtos/Papelaria/Caneta Bic 50un 1.png',
          '#C62828': '/src/assets/Produtos/Papelaria/Caneta Bic 50un 1.png'
        },
        colors: ['#000000', '#003366', '#C62828'],
        categoria: 'materiais',
        tags: ['ver-tudo'],
        detailedDescription: `Pacote com 50 canetas esferográficas Bic Cristal, corpo transparente, tinta azul, ponta média 1mm. Popular para escritório e escola. ` 
      },
      {
        name: 'Folha A4 (5 pacotes)',
        price: 'R$32,00',
        images: {
          '#ffffff': '/src/assets/Produtos/Papelaria/Folha A4 5 pacotes 1.png'
        },
        colors: ['#ffffff'],
        categoria: 'materiais',
        tags: ['ver-tudo'],
        detailedDescription: `5 pacotes com 500 folhas cada em papel sulfite 75g/m², impressão nítida e qualidade consistente. Adequado para impressões, cópias e rascunhos. ` 
      },
      {
        name: 'Marca Texto Colorida',
        price: 'R$19,00',
        images: {
          '#000000': '/src/assets/Produtos/Papelaria/Marca texto colorida 1.png'
        },
        colors: ['#000000'],
        categoria: 'materiais',
        tags: ['ver-tudo'],
        detailedDescription: `Marca-texto em corpo plástico com tinta fluorescente resistente ao desbotamento. Ponta chanfrada para linhas de 1mm a 5mm. Cores vivas. ` 
      },
      {
        name: 'Post-it Colorido',
        price: 'R$15,00',
        images: {
          '#000000': '/src/assets/Produtos/Papelaria/Post-it colorido 1.png'
        },
        colors: ['#000000'],
        categoria: 'materiais',
        tags: ['ver-tudo'],
        detailedDescription: `Bloco com 100 folhas adesivas 75x75mm em cores sortidas. Fácil colagem e remoção sem deixar resíduos. ` 
      }      
      ];
    
      export default allProducts;