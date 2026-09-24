// ============================================================
// NeoLar — dados dos produtos
// ============================================================
// Para adicionar um produto novo: copie um objeto do array,
// mude o "id" para o próximo número livre, preencha os campos
// e salve a imagem correspondente em /images/ com o mesmo número
// (ex: id 31 -> images/31.jpg).
//
// category: "eletronicos" ou "decoracao"
// featured: true coloca o produto no banner do topo (use com
//           moderação — o ideal são 4 a 6 produtos em destaque)
// ============================================================

const PRODUCTS = [
  { id: 1,  category: "decoracao",   name: "Trio de Vasos Cachepot para Cactos e Suculentas", price: "R$ 37,91", link: "https://s.shopee.com.br/2LYXcvA8Cx", featured: false },
  { id: 2,  category: "decoracao",   name: "Papel de Parede 3D Adesivo Tijolos", price: "R$ 3,99 – R$ 4,99", link: "https://s.shopee.com.br/BU32x96k3", featured: false },
  { id: 3,  category: "decoracao",   name: "Tela Mosqueteiro para Janelas Magnética Anti Inseto", price: "R$ 24,49", link: "https://s.shopee.com.br/8KpklyHcET", featured: false },
  { id: 4,  category: "decoracao",   name: "Porta Escova de Dentes UV com Dispenser de Pasta", price: "R$ 18,98 – R$ 54,98", link: "https://s.shopee.com.br/60RpzhQABO", featured: false },
  { id: 5,  category: "decoracao",   name: "Kit Quadros Decorativos \"Abençoados por Deus\"", price: "R$ 14,99 – R$ 24,99", link: "https://s.shopee.com.br/9V1iA8hdXF", featured: false },
  { id: 6,  category: "eletronicos", name: "Relógio Digital LED Quadrado à Prova D'água", price: "R$ 11,99 – R$ 24,99", link: "https://s.shopee.com.br/2BF7RE40fD", featured: false },
  { id: 7,  category: "eletronicos", name: "Fechadura Eletrônica Smart Door — Digital, NFC e Senha", price: "R$ 214,99", link: "https://s.shopee.com.br/7AdnOd67ak", featured: true },
  { id: 8,  category: "eletronicos", name: "Purificador de Água Colormaq Bivolt", price: "R$ 394,99 – R$ 437,99", link: "https://s.shopee.com.br/3VkV1voCxW", featured: true },
  { id: 9,  category: "eletronicos", name: "Babá Eletrônica com Câmera e Visão Noturna", price: "R$ 289,80", link: "https://s.shopee.com.br/4LJc1TtV32", featured: true },
  { id: 10, category: "eletronicos", name: "Chuveiro Elétrico Lorenzetti Loren Shower Ultra 5500W", price: "R$ 158,90", link: "https://s.shopee.com.br/70KNCOMwfz", featured: false },
  { id: 11, category: "eletronicos", name: "Caixa de Som Bluetooth Portátil LED RGB 30W", price: "R$ 94,99", link: "https://s.shopee.com.br/9zxym5T529", featured: true },
  { id: 12, category: "eletronicos", name: "Fone de Ouvido Sem Fio TWS i12s/i13 Bluetooth 5.0", price: "R$ 19,99 – R$ 20,99", link: "https://s.shopee.com.br/60Rq0kLpti", featured: false },
  { id: 13, category: "decoracao",   name: "Capa para Colchão Impermeável Matelada", price: "R$ 13,90 – R$ 54,90", link: "https://s.shopee.com.br/3qNLQmPHU4", featured: false },
  { id: 14, category: "decoracao",   name: "Tapete de Banheiro Antiderrapante Bolinha", price: "R$ 14,90 – R$ 17,90", link: "https://s.shopee.com.br/3LR4psmdq8", featured: false },
  { id: 15, category: "decoracao",   name: "Varal Retrátil de Parede 30m + Ganchos", price: "R$ 49,80", link: "https://s.shopee.com.br/5Asj1Jmuko", featured: false },
  { id: 16, category: "decoracao",   name: "Cortina Blackout PVC 2,80 x 2,30m", price: "R$ 32,97 – R$ 68,90", link: "https://s.shopee.com.br/3VkV2QxkkQ", featured: false },
  { id: 17, category: "decoracao",   name: "Jogo de Taças de Vidro Diamond Bico Jaca/Abacaxi", price: "R$ 18,89 – R$ 36,90", link: "https://s.shopee.com.br/40gldMquNS", featured: false },
  { id: 18, category: "eletronicos", name: "Espremedor Elétrico de Frutas Recarregável USB", price: "R$ 61,69", link: "https://s.shopee.com.br/8AWKb2JBH5", featured: false },
  { id: 19, category: "eletronicos", name: "Smartwatch Infantil com Frequência Cardíaca", price: "R$ 98,12", link: "https://s.shopee.com.br/2qUoFFPfuC", featured: false },
  { id: 20, category: "eletronicos", name: "Power Bank Portátil 10000mAh USB-C / Lightning", price: "R$ 32,99 – R$ 33,99", link: "https://s.shopee.com.br/8AWKb3j6eL", featured: false },
  { id: 21, category: "eletronicos", name: "Caixa de Som Infantil com Microfones Karaokê", price: "R$ 48,99", link: "https://s.shopee.com.br/8AWKbMbMYb", featured: false },
  { id: 22, category: "decoracao",   name: "Kit Manta Decorativa + 4 Capas de Almofada", price: "R$ 64,89 – R$ 64,90", link: "https://s.shopee.com.br/1gIqrQvRQy", featured: false },
  { id: 23, category: "eletronicos", name: "Relógio Esportivo Digital Masculino À Prova D'água", price: "R$ 10,62 – R$ 15,73", link: "https://s.shopee.com.br/6VO6cKPRFd", featured: false },
  { id: 24, category: "eletronicos", name: "Liquidificador Mondial L-99 Turbo 550W", price: "R$ 109,99", link: "https://s.shopee.com.br/AAHOz4xsPL", featured: false },
  { id: 25, category: "eletronicos", name: "Fone de Ouvido Bluetooth Intra-auricular B4", price: "R$ 47,98 – R$ 64,98", link: "https://s.shopee.com.br/5q8Pp8MhSY", featured: false },
  { id: 26, category: "eletronicos", name: "Fone Bluetooth J760 com Cancelamento de Ruído", price: "R$ 40,98 – R$ 51,76", link: "https://s.shopee.com.br/2Vrxrl38Uc", featured: false },
  { id: 27, category: "decoracao",   name: "Espelho Redondo Lapidado 60x60cm", price: "R$ 32,90 – R$ 61,90", link: "https://s.shopee.com.br/9V1iCdBgYR", featured: true },
  { id: 28, category: "decoracao",   name: "Garrafa Térmica Prisma 950ml Cabo de Madeira", price: "R$ 59,90", link: "https://s.shopee.com.br/6q0x1kdAZS", featured: false },
  { id: 29, category: "decoracao",   name: "Caixa Organizadora de Alimentos Empilhável", price: "R$ 37,99 – R$ 119,99", link: "https://s.shopee.com.br/BU35VbkNT", featured: false },
  { id: 30, category: "eletronicos", name: "Relógio LED Minimalista Coreano Unissex", price: "R$ 8,38 – R$ 10,91", link: "https://s.shopee.com.br/3LR4rL7cUi", featured: false },
];

const CATEGORY_LABELS = {
  eletronicos: "Eletrônicos",
  decoracao: "Decoração",
};
