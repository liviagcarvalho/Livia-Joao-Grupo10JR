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
      tags: ['mais-vendidos', 'ver-tudo']
    },
    {
      name: 'Mesa Regular Com Altura Ajustável',
      price: 'R$500,00',
      images: {
        '#DEB887': '/src/assets/Produtos/Mesas/Mesa Regular Com Altura Móvel Clara 1.png',
        '#5C4033': 'src/assets/Produtos/Mesas/Mesa Regular Com Altura Móvel Escura 1.png',
      },
      colors: ['#DEB887', '#5C4033'],
      categoria: 'moveis',
      tags: ['mais-vendidos', 'ver-tudo']
    },
    {
      name: 'Telefone Sem Fio',
      price: 'R$150,00',
      images: {
        '#000000': '/src/assets/Produtos/Telefones/Telefone1.png'
      },
      colors: ['#000000'],
      categoria: 'eletronicos',
      tags: ['ver-tudo']
    },
    {
      name: 'Cadeira Joelhos',
      price: 'R$190,00',
      images: {
        '#000000': '/src/assets/Produtos/Cadeiras/Cadeira Joelhos Preta.png'
      },
      colors: ['#000000'],
      categoria: 'moveis',
      tags: ['mais-vendidos', 'ver-tudo']
    },
    {
      name: 'Mesa Para Quatro Pessoas',
      price: 'R$420,00',
      images: {
        '#DEB887': '/src/assets/Produtos/Mesas/Mesa Quatro Pessoas Clara.png',
        '#5C4033': '/src/assets/Produtos/Mesas/Mesa Quatro Pessoas Escura.png',
      },
      colors: ['#DEB887', '#5C4033'],
      categoria: 'moveis',
      tags: ['ver-tudo']
    },
    {
      name: 'Locker G',
      price: 'R$350,00',
      images: {
        '#003366': '/src/assets/Produtos/Lockers/Locker G azul.png',
        '#FFD700': 'e/src/assets/Produtos/Lockers/Locker G amarelo.png',
        '#228B22': '/src/assets/Produtos/Lockers/Locker G verde.png',
      },
      colors: ['#003366', '#FFD700', '#228B22'],
      categoria: 'moveis',
      tags: ['lancamentos', 'ver-tudo']
    },
    {
      name: 'Mesa L',
      price: 'R$420,00',
      images: {
        '#ffffff': '/src/assets/Produtos/Mesas/Mesa L Branca.png',
        '#5C4033': '/src/assets/Produtos/Mesas/Mesa L Marrom.png',
      },
      colors: ['#ffffff', '#5C4033'],
      categoria: 'moveis',
      tags: ['mais-vendidos', 'ver-tudo']
    },
    {
      name: 'Suporte de Monitor',
      price: 'R$89,90',
      images: {
        '#D3D3D3': '/src/assets/Produtos/suporte/suportedemonitor.png'
      },
      colors: ['#D3D3D3'],
      categoria: 'materiais',
      tags: ['mais-vendidos', 'ver-tudo']
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
      tags: ['mais-vendidos', 'ver-tudo']
    },
    {
      name: 'Apoio de Itens',
      price: 'R$120,00',
      images: {
        '#ffffff': '/src/assets/Produtos/Apoio de Itens/Apoio de itens branco.png',
        '#000000': '/src/assets/Produtos/Apoio de Itens/Apoio de itens preto.png'
      },
      colors: ['#ffffff', "#000000"],
      categoria: 'materiais',
      tags: ['ver-tudo']
    },
    {
      name: 'Impressora Multifuncinal Pro',
      price: 'R$349,99',
      images: {
        '#ffffff': '/src/assets/Produtos/Impressoras/Impressora Hp 1.png'
      },
      colors: ['#ffffff'],
      categoria: 'eletronicos',
      tags: ['mais vendidos', 'lacamentos']
    },
    {
      name: 'Locker M',
      price: 'R$230,00',
      images: {
        '#ffffff': '/src/assets/Produtos/Lockers/Locker M Branco.png',
        '#228B22': '/src/assets/Produtos/Lockers/Locker M Verde.png'
      },
      colors: ['#ffffff', "#228B22"],
      categoria: 'moveis',
      tags: ['ver-tudo']
    },
    {
      name: 'Armário Multifuncial Com Gavetas',
      price: 'R$359,99',
      images: {
        '#DEB887': '/src/assets/Produtos/Armários/Armário Claro 1.png',
        '#5C4033': '/src/assets/Produtos/Armários/Armário Escuro 1.png',
      },
      colors: ['#DEB887', "#5C4033"],
      categoria: 'moveis',
      tags: ['ver-tudo', 'mais-vendidos']
    },
    {
      name: 'Telefone Intelbras Com Fio',
      price: 'R$119,00',
      images: {
        '#000000': '/src/assets/Produtos/Telefones/Telefone 2.png'
      },
      colors: ['#000000'],
      categoria: 'eletronicos',
      tags: ['ver-tudo','mais-vendidos']
    },
    {
      name: 'Mesa de Seis Pessoas',
      price: 'R$500,00',
      images: {
        '#ffffff': '/src/assets/Produtos/Mesas/Mesa seis Pessoas Branca.png',
        '#DEB887': '/src/assets/Produtos/Mesas/Mesa seis Pessoas Madeira Clara.png',
        '#5C4033': '/src/assets/Produtos/Mesas/Mesa seis Pessoas Madeira Escura.png'
      },
      colors: ['#ffffff', "#DEB887", '#5C4033'],
      categoria: 'moveis',
      tags: ['ver-tudo', 'lancamentos']
    },
    {
      name: 'Tapetes',
      price: 'R$180,00',
      images: {
        '#003366': '/src/assets/Produtos/Tapetes/Tapete Azul.png',
        '#FFC0CB': '/src/assets/Produtos/Tapetes/Tapete Rosa.png',
        '#228B22': '/src/assets/Produtos/Tapetes/Tapete Verde.png'
      },
      colors: ['#003366', "#FFC0CB", '#228B22'],
      categoria: 'ambientacao',
      tags: ['ver-tudo']
    },
    {
      name: 'Impressora Multifuncinal',
      price: 'R$299,90',
      images: {
        '#000000': '/src/assets/Produtos/Impressoras/Impressora Hp 2 Capa.png'
      },
      colors: ['#000000'],
      categoria: 'eletronicos',
      tags: ['mais-vendidos', 'ver-tudo']
    },
    {
      name: 'Combo Cartucho (Preto + Colorido)',
      price: 'R$99,99',
      images: {
        '#000000': '/src/assets/Produtos/Cartuchos/CartuchoCombo.png'
      },
      colors: ['#000000'],
      categoria: 'materiais',
      tags: ['mais-vendidos', 'ver-tudo']
    },
    {
      name: 'Combo: Mesa e Cadeira',
      price: 'R$399,99',
      images: {
        '#DEB887': '/src/assets/Produtos/Mesas/Combo Mesa e Cadeira Clara.png',
        '#000000': '/src/assets/Produtos/Mesas/Combo Mesa e Cadeira Preto.png',
        '#64B5F6': '/src/assets/Produtos/Mesas/Combo Mesa e Cadeira Azul.png'
      },
      colors: ['#DEB887', "#000000", '#64B5F6'],
      categoria: 'moveis',
      tags: ['ver-tudo', 'lancamentos']
    },
    {
      name: 'Telefone Intelbras Simples Com Fio',
      price: 'R$98,00',
      images: {
        '#ffffff': '/src/assets/Produtos/Telefones/Telefone 3.png'
      },
      colors: ['#ffffff'],
      categoria: 'eletronicos',
      tags: ['ver-tudo']
    },
    {
      name: 'Pins Para Quadro',
      price: 'R$29,99',
      images: {
        '#D3D3D3': '/src/assets/Produtos/Pins/Pins para quadro.png'
      },
      colors: ['#D3D3D3'],
      categoria: 'materiais',
      tags: ['ver-tudo']
    },
    {
      name: 'Head Fone Bluetooth Preto',
      price: 'R$150,00',
      images: {
        '#000000': '/src/assets/Produtos/Cabos-Fones/HeadFone.png'
      },
      colors: ['#000000'],
      categoria: 'eletronicos',
      tags: ['ver-tudo']
    },
    {
      name: 'Carrinho Porta Itens',
      price: 'R$299,99',
      images: {
        '#ffffff': '/src/assets/Produtos/Armários/Carrinho Branco 1.png',
        '#DEB887': '/src/assets/Produtos/Armários/Carrinho Claro 1.png',
        '#000000': '/src/assets/Produtos/Armários/Carrinho Escuro 1.png',
      },
      colors: ['#ffffff', "#DEB887", '#000000'],
      categoria: 'moveis',
      tags: ['ver-tudo']
    },
    {
      name: 'Cartucho Tinta Preta',
      price: 'R$58,70',
      images: {
        '#000000': '/src/assets/Produtos/Cartuchos/Cartucho1.png'
      },
      colors: ['#000000'],
      categoria: 'materiais',
      tags: ['ver-tudo']
    },
    {
      name: 'Cartucho Tinta Colorida',
      price: 'R$65,00',
      images: {
        '#000000': '/src/assets/Produtos/Cartuchos/Cartucho2.png'
      },
      colors: ['#000000'],
      categoria: 'materiais',
      tags: ['ver-tudo']
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
      tags: ['mais-vendidos', 'ver-tudo']
    },
    {
      name: 'Cabo HDMI',
      price: 'R$40,00',
      images: {
        '#000000': '/src/assets/Produtos/Cabos-Fones/CaboHDMI.png'
      },
      colors: ['#000000'],
      categoria: 'eletronicos',
      tags: ['ver-tudo','mais-vendidos']
    },
    {
      name: 'Fone Bluetooth Portátil',
      price: 'R$113,00',
      images: {
        '#000000': '/src/assets/Produtos/Cabos-Fones/FoneBP.png'
      },
      colors: ['#000000'],
      categoria: 'eletronicos',
      tags: ['ver-tudo','mais-vendidos']
    },
    {
      name: 'Mesa Móvel Simples',
      price: 'R$250,00',
      images: {
        '#DEB887': '/src/assets/Produtos/Mesas/Mesa Móvel Clara 1.png',
        '#5C4033': '/src/assets/Produtos/Mesas/Mesa Móvel Escura 1.png'
      },
      colors: ["#DEB887", '#5C4033'],
      categoria: 'moveis',
      tags: ['ver-tudo']
    },
    {
      name: 'Cabo Adaptador usbc para hdmi',
      price: 'R$113,00',
      images: {
        '#ffffff': '/src/assets/Produtos/Cabos-Fones/cabo-adaptador-usb-tipo-c-para-hdmi.png'
      },
      colors: ['#ffffff'],
      categoria: 'eletronicos',
      tags: ['ver-tudo']
    },
    {
      name: 'Fone Com Fio',
      price: 'R$55,00',
      images: {
        '#ffffff': '/src/assets/Produtos/Cabos-Fones/FoneCfio.png'
      },
      colors: ['#fffffff'],
      categoria: 'eletronicos',
      tags: ['ver-tudo']
    },
    {
      name: 'Fone Bluetooth Portátil',
      price: 'R$113,00',
      images: {
        '#000000': '/src/assets/Produtos/Cabos-Fones/FoneBP.png'
      },
      colors: ['#000000'],
      categoria: 'eletronicos',
      tags: ['ver-tudo','mais-vendidos']
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
      colors: ['#FFD700', "#64B5F6", '#ffffff', '#228B22'],
      categoria: 'moveis',
      tags: ['ver-tudo']
    },
  ];

  export default allProducts;