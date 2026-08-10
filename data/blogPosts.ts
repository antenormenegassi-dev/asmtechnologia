export type BlogCategory = "certificados-digitais" | "gestao-empresarial" | "tecnologia";

export interface BlogSection {
  heading?: string;
  paragraphs: string[];
}

export interface BlogPost {
  slug: string;
  category: BlogCategory;
  categoryLabel: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readingTime: string;
  content: BlogSection[];
  seoTitle: string;
  seoDescription: string;
}

const CATEGORY_LABELS: Record<BlogCategory, string> = {
  "certificados-digitais": "Certificados Digitais",
  "gestao-empresarial": "Gestão Empresarial",
  tecnologia: "Tecnologia",
};

export const blogPosts: BlogPost[] = [
  {
    slug: "o-que-e-certificado-digital",
    category: "certificados-digitais",
    categoryLabel: CATEGORY_LABELS["certificados-digitais"],
    title: "O que é certificado digital e por que sua empresa precisa de um",
    excerpt:
      "Entenda como o certificado digital funciona, para que serve e por que se tornou obrigatório em diversas rotinas empresariais.",
    publishedAt: "2026-02-10",
    readingTime: "6 min de leitura",
    seoTitle: "O que é certificado digital? Guia completo para empresas",
    seoDescription:
      "Descubra o que é um certificado digital, como ele funciona e por que sua empresa precisa de um para emitir notas fiscais e assinar documentos.",
    content: [
      {
        paragraphs: [
          "O certificado digital é um documento eletrônico que funciona como uma identidade virtual, permitindo que pessoas físicas e jurídicas assinem documentos, emitam notas fiscais e acessem sistemas do governo com validade jurídica.",
          "Diferente de uma senha comum, o certificado digital usa criptografia para garantir que a assinatura realmente pertence a quem diz ser — o que evita fraudes e dá segurança às transações eletrônicas.",
        ],
      },
      {
        heading: "Para que serve na prática",
        paragraphs: [
          "Empresas usam o certificado digital para emitir NF-e, assinar contratos, acessar o eSocial, participar de licitações e autenticar documentos junto a órgãos públicos.",
          "Sem ele, diversos processos fiscais e trabalhistas simplesmente não podem ser realizados — o que torna o certificado uma exigência prática, não apenas uma recomendação.",
        ],
      },
      {
        heading: "Como escolher o certificado certo",
        paragraphs: [
          "A escolha depende do tipo de empresa (e-CNPJ) ou profissional (e-CPF), do volume de uso e de onde a assinatura será feita — daí a diferença entre os modelos A1 e A3.",
          "A ASM orienta cada cliente nessa escolha, evitando que a empresa compre um certificado inadequado ao seu processo.",
        ],
      },
    ],
  },
  {
    slug: "a1-ou-a3-qual-escolher",
    category: "certificados-digitais",
    categoryLabel: CATEGORY_LABELS["certificados-digitais"],
    title: "A1 ou A3: qual certificado digital escolher?",
    excerpt:
      "Veja as diferenças entre os certificados A1 e A3 e descubra qual modelo se encaixa melhor na rotina da sua empresa.",
    publishedAt: "2026-02-24",
    readingTime: "5 min de leitura",
    seoTitle: "A1 ou A3: qual certificado digital escolher? | ASM Tecnologia",
    seoDescription:
      "Compare o certificado digital A1 e A3, entenda validade, mídia de armazenamento e descubra qual é o ideal para sua empresa.",
    content: [
      {
        paragraphs: [
          "A principal diferença entre os certificados A1 e A3 está na forma como são armazenados e no tempo de validade.",
          "O A1 é um arquivo digital instalado no computador, com validade de 12 meses. O A3 é armazenado em um cartão ou token físico, com validade de até 3 anos.",
        ],
      },
      {
        heading: "Quando escolher o A1",
        paragraphs: [
          "Ideal para empresas que emitem notas fiscais com frequência e usam sistemas integrados, já que permite automação de processos sem a necessidade de um dispositivo físico conectado.",
        ],
      },
      {
        heading: "Quando escolher o A3",
        paragraphs: [
          "Recomendado para quem prioriza portabilidade e segurança física — o certificado fica protegido em um cartão ou token, exigindo o dispositivo em mãos para qualquer assinatura.",
        ],
      },
    ],
  },
  {
    slug: "o-que-e-erp-e-por-que-sua-empresa-precisa",
    category: "gestao-empresarial",
    categoryLabel: CATEGORY_LABELS["gestao-empresarial"],
    title: "O que é ERP e por que sua empresa precisa de um",
    excerpt:
      "Entenda como um sistema de gestão integrado organiza vendas, estoque e financeiro em um só lugar.",
    publishedAt: "2026-03-02",
    readingTime: "7 min de leitura",
    seoTitle: "O que é ERP? Como um sistema de gestão organiza sua empresa",
    seoDescription:
      "Saiba o que é um ERP, quais processos ele integra e como um sistema como o InfinityFy pode organizar a gestão da sua empresa.",
    content: [
      {
        paragraphs: [
          "ERP significa Enterprise Resource Planning — um sistema que integra as principais áreas de uma empresa, como vendas, estoque, financeiro e compras, em uma única plataforma.",
          "Em vez de planilhas separadas e processos manuais, o ERP centraliza a informação, reduz erros e dá visibilidade real sobre o negócio.",
        ],
      },
      {
        heading: "Principais módulos de um ERP",
        paragraphs: [
          "PDV, controle de estoque, gestão financeira, DRE, relatórios gerenciais e cadastro de clientes são alguns dos módulos mais usados por pequenas e médias empresas.",
        ],
      },
      {
        heading: "Como o InfinityFy se encaixa",
        paragraphs: [
          "O InfinityFy, solução da ASM Tecnologia, reúne esses módulos em uma plataforma única, pensada para empresas que precisam de controle sem complexidade excessiva.",
        ],
      },
    ],
  },
  {
    slug: "controle-de-estoque-sem-planilha",
    category: "gestao-empresarial",
    categoryLabel: CATEGORY_LABELS["gestao-empresarial"],
    title: "Como sair da planilha e ter controle de estoque de verdade",
    excerpt:
      "Os riscos de gerenciar estoque em planilhas e como um sistema de gestão evita perdas e rupturas.",
    publishedAt: "2026-03-18",
    readingTime: "5 min de leitura",
    seoTitle: "Controle de estoque: por que sair da planilha",
    seoDescription:
      "Entenda os riscos de controlar estoque por planilha e como um sistema de gestão evita perdas, rupturas e erros de contagem.",
    content: [
      {
        paragraphs: [
          "Planilhas dependem de atualização manual — um esquecimento é suficiente para gerar ruptura de estoque ou compras desnecessárias.",
          "Um sistema de gestão atualiza o estoque automaticamente a cada venda ou compra, eliminando divergências entre o que existe no sistema e o que existe na prateleira.",
        ],
      },
      {
        heading: "O que observar em um bom controle de estoque",
        paragraphs: [
          "Alertas de estoque mínimo, integração com o PDV, rastreabilidade por lote e relatórios de giro são recursos que fazem diferença no dia a dia.",
        ],
      },
    ],
  },
  {
    slug: "quando-vale-a-pena-um-sistema-sob-medida",
    category: "tecnologia",
    categoryLabel: CATEGORY_LABELS.tecnologia,
    title: "Quando vale a pena desenvolver um sistema sob medida",
    excerpt:
      "Nem toda necessidade cabe em um sistema pronto. Veja os sinais de que sua empresa precisa de uma solução personalizada.",
    publishedAt: "2026-04-05",
    readingTime: "6 min de leitura",
    seoTitle: "Quando vale a pena um sistema sob medida | ASM Tecnologia",
    seoDescription:
      "Descubra os sinais de que sua empresa precisa de um sistema sob medida em vez de um produto pronto, e como estruturar esse projeto.",
    content: [
      {
        paragraphs: [
          "Sistemas prontos resolvem a maioria dos casos — mas quando o processo da empresa é o diferencial competitivo, adaptar um produto genérico pode custar mais do que criar algo sob medida.",
        ],
      },
      {
        heading: "Sinais de que você precisa de tecnologia sob medida",
        paragraphs: [
          "Processos que exigem múltiplas planilhas paralelas, integrações que nenhum sistema pronto oferece, ou fluxos de trabalho únicos do seu setor são indícios claros.",
        ],
      },
      {
        heading: "Como a ASM conduz esse tipo de projeto",
        paragraphs: [
          "Começamos entendendo o problema de negócio antes de falar em tecnologia, e só então projetamos a arquitetura da solução — sistema, plataforma web, aplicativo ou integração via API.",
        ],
      },
    ],
  },
  {
    slug: "automacao-de-processos-por-onde-comecar",
    category: "tecnologia",
    categoryLabel: CATEGORY_LABELS.tecnologia,
    title: "Automação de processos: por onde sua empresa deve começar",
    excerpt:
      "Automatizar tudo de uma vez raramente funciona. Veja como priorizar os primeiros processos a automatizar.",
    publishedAt: "2026-04-20",
    readingTime: "5 min de leitura",
    seoTitle: "Automação de processos: por onde começar",
    seoDescription:
      "Aprenda a priorizar quais processos automatizar primeiro e como a automação reduz erros e libera tempo da sua equipe.",
    content: [
      {
        paragraphs: [
          "O erro mais comum ao pensar em automação é tentar resolver tudo de uma vez. O ponto de partida deve ser o processo mais repetitivo e mais propenso a erro manual.",
        ],
      },
      {
        heading: "Como priorizar",
        paragraphs: [
          "Liste os processos por volume e por impacto de erro. Processos de alto volume e alto impacto — como conciliação financeira ou emissão de notas — costumam ser o melhor ponto de partida.",
        ],
      },
    ],
  },
];

export function getPostsByCategory(category: BlogCategory): BlogPost[] {
  return blogPosts.filter((post) => post.category === category);
}

export function getPostBySlug(category: BlogCategory, slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.category === category && post.slug === slug);
}

export function getCategoryLabel(category: BlogCategory): string {
  return CATEGORY_LABELS[category];
}
