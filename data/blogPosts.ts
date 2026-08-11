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
      "O certificado digital deixou de ser um detalhe burocrático para se tornar parte da rotina fiscal e jurídica de qualquer empresa. Entenda como ele funciona e onde entra no dia a dia do seu negócio.",
    publishedAt: "2026-02-10",
    readingTime: "8 min de leitura",
    seoTitle: "O que é certificado digital? Guia completo para empresas",
    seoDescription:
      "Entenda o que é um certificado digital, como a certificação ICP-Brasil funciona na prática e por que sua empresa precisa de um para emitir notas fiscais, assinar documentos e cumprir obrigações fiscais.",
    content: [
      {
        paragraphs: [
          "Todo certificado digital emitido no Brasil segue um padrão regulado pela ICP-Brasil, a infraestrutura de chaves públicas mantida pelo Instituto Nacional de Tecnologia da Informação. Na prática, ele funciona como uma identidade eletrônica: um conjunto de dados criptografados que comprova, com validade jurídica, que uma assinatura ou um acesso a determinado sistema partiu de fato da pessoa física ou da empresa que ele representa.",
          "A diferença em relação a uma senha convencional está na engenharia por trás do processo. Uma senha pode ser compartilhada, adivinhada ou reutilizada sem que ninguém perceba. Um certificado digital usa um par de chaves criptográficas, uma pública e uma privada, que tornam a falsificação de uma assinatura tecnicamente inviável sem o acesso físico ou lógico ao certificado. É esse mecanismo que dá ao documento eletrônico o mesmo peso legal de uma assinatura reconhecida em cartório.",
        ],
      },
      {
        heading: "Onde o certificado entra na rotina da empresa",
        paragraphs: [
          "Na prática empresarial, o certificado digital deixou de ser exigido apenas em situações pontuais. Ele é a porta de entrada para a emissão de notas fiscais eletrônicas (NF-e, NFS-e e CT-e), para o envio de informações ao eSocial, para a assinatura de contratos e procurações, para o acesso ao e-CAC da Receita Federal e para a participação em licitações públicas por meio do Comprasnet e de portais estaduais.",
          "Empresas que operam sem certificado válido não deixam de existir juridicamente, mas passam a depender de terceiros para cada uma dessas etapas, o que gera custo, atraso e, em muitos casos, risco de autuação por descumprimento de prazo fiscal. Um certificado vencido em um período de apuração de impostos, por exemplo, pode travar a emissão de notas justamente no momento em que a empresa mais precisa faturar.",
        ],
      },
      {
        heading: "O custo real de negligenciar esse detalhe",
        paragraphs: [
          "É comum que o certificado digital só vire prioridade quando já está prestes a vencer, ou pior, quando já venceu. Nesse cenário, a empresa perde tempo com o processo de renovação, pode ficar impedida de emitir documentos fiscais por dias e, dependendo do porte do negócio, isso significa vendas represadas e clientes insatisfeitos com a demora na entrega de notas.",
          "Tratar o certificado como parte da infraestrutura da empresa, e não como uma obrigação isolada, é o que diferencia negócios que operam com previsibilidade daqueles que vivem apagando incêndios fiscais.",
        ],
      },
      {
        heading: "Como escolher o certificado certo",
        paragraphs: [
          "A primeira decisão é sobre a titularidade: e-CNPJ para a pessoa jurídica, e-CPF para o profissional que assina em nome próprio, e certificados específicos para funções como e-Nota ou NF-e quando o processo é operado por um sistema. A segunda decisão, igualmente importante, é o modelo de armazenamento, que separa os certificados A1 e A3 e influencia diretamente a rotina operacional da empresa.",
          "A ASM Technologia acompanha esse processo de perto com cada cliente, entendendo o volume de emissões, os sistemas já utilizados e a forma como a equipe trabalha antes de recomendar um modelo. O objetivo não é vender um certificado, é evitar que a empresa pague por uma estrutura que não corresponde à sua operação.",
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
      "A escolha entre A1 e A3 raramente é sobre preço. É sobre como sua empresa trabalha, quantas notas emite por mês e quem, de fato, precisa assinar documentos.",
    publishedAt: "2026-02-24",
    readingTime: "7 min de leitura",
    seoTitle: "A1 ou A3: qual certificado digital escolher? | ASM Technologia",
    seoDescription:
      "Compare o certificado digital A1 e A3 em validade, armazenamento e rotina de uso, e entenda qual modelo se encaixa melhor na operação da sua empresa.",
    content: [
      {
        paragraphs: [
          "Ambos os modelos, A1 e A3, cumprem a mesma função legal dentro da ICP-Brasil: identificar de forma inequívoca quem assina um documento ou acessa um sistema. A diferença não está na validade jurídica, que é idêntica, e sim na engenharia de armazenamento e no ciclo de renovação, dois fatores que impactam diretamente a rotina de quem usa o certificado todos os dias.",
          "O A1 é um arquivo digital instalado diretamente no computador ou em nuvem, com validade de doze meses. O A3 é gravado em uma mídia física, cartão inteligente ou token USB, com validade de um a cinco anos, e exige que esse dispositivo esteja fisicamente conectado no momento da assinatura. Essa diferença aparentemente técnica é o que determina, na prática, qual dos dois faz sentido para cada empresa.",
        ],
      },
      {
        heading: "Quando o A1 é a escolha certa",
        paragraphs: [
          "O A1 foi desenhado para operações que dependem de automação. Empresas que emitem um volume alto de notas fiscais, integram sistemas de PDV com a Receita Federal ou processam informações fiscais em lote se beneficiam do fato de o certificado estar instalado diretamente no servidor ou no computador, sem depender de alguém conectar um token físico a cada emissão.",
          "É também a opção mais indicada para negócios que operam em múltiplos pontos ou que terceirizam parte da rotina contábil e fiscal para um sistema de gestão, já que o A1 pode ser instalado diretamente na plataforma responsável pela emissão, mantendo o processo funcionando mesmo fora do horário comercial.",
        ],
      },
      {
        heading: "Quando o A3 faz mais sentido",
        paragraphs: [
          "O A3 responde a uma necessidade diferente: segurança física e portabilidade em contextos onde poucas pessoas assinam, mas o fazem com frequência variável e em locais diferentes. Advogados, contadores autônomos, diretores que assinam contratos fora do escritório e profissionais que lidam com documentos sigilosos costumam preferir esse modelo, já que o certificado só funciona com o dispositivo físico em mãos.",
          "Essa exigência, que pode parecer uma limitação, é na verdade a principal vantagem do A3 em termos de segurança: mesmo que o computador seja comprometido remotamente, o certificado continua protegido dentro do token, inacessível sem a posse física do dispositivo.",
        ],
      },
      {
        heading: "Como decidir sem errar",
        paragraphs: [
          "Na prática, a decisão raramente é binária. Empresas de médio porte costumam usar A1 para a operação fiscal do dia a dia e A3 para assinaturas de contratos e documentos societários que exigem um nível adicional de segurança. A ASM ajuda cada cliente a mapear essas necessidades antes da compra, evitando o erro mais comum do mercado: adquirir o modelo errado e descobrir a limitação apenas quando o processo já está em andamento.",
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
      "Vendas, estoque e financeiro em planilhas separadas funcionam até certo ponto. Depois disso, cada divergência de número custa tempo, dinheiro e credibilidade com o cliente.",
    publishedAt: "2026-03-02",
    readingTime: "9 min de leitura",
    seoTitle: "O que é ERP? Como um sistema de gestão organiza sua empresa",
    seoDescription:
      "Entenda o que é um ERP, quais processos ele integra, os sinais de que sua empresa ainda opera de forma fragmentada e como o InfinityFy organiza vendas, estoque e financeiro em uma única plataforma.",
    content: [
      {
        paragraphs: [
          "ERP é a sigla para Enterprise Resource Planning, termo cunhado no início dos anos 1990 para descrever sistemas capazes de integrar, em uma única base de dados, as principais áreas operacionais de uma empresa: vendas, estoque, financeiro, compras e, em muitos casos, produção e recursos humanos. O conceito evoluiu, mas o problema que ele resolve continua o mesmo há décadas.",
          "Sem um sistema integrado, cada área trabalha com sua própria versão da realidade. O time de vendas sabe o que vendeu, mas não necessariamente o que há em estoque. O financeiro sabe o que entrou em caixa, mas depende de outra planilha para saber o que ainda está a receber. Um ERP elimina essa fragmentação ao fazer com que uma única venda, registrada uma única vez, atualize automaticamente o estoque, gere o lançamento financeiro e alimente os relatórios gerenciais, tudo na mesma operação.",
        ],
      },
      {
        heading: "Os sinais de que sua gestão ainda depende de planilhas",
        paragraphs: [
          "Existe um padrão que se repete em empresas que ainda não adotaram um sistema de gestão: o fechamento do mês leva dias em vez de horas, porque alguém precisa consolidar manualmente dados de vendas, estoque e financeiro que vivem em arquivos separados. Divergências entre o que o sistema mostra e o que existe fisicamente no estoque só aparecem na contagem, quando já é tarde para corrigir a causa.",
          "Outro sinal característico é a dependência de uma única pessoa que entende a planilha, sabe onde estão as fórmulas e é quem, na prática, sustenta o controle da empresa. Quando essa pessoa sai de férias, muda de função ou deixa a empresa, o conhecimento vai junto, e a gestão fica exposta a um risco que nenhum negócio deveria correr.",
        ],
      },
      {
        heading: "Os módulos que sustentam a operação",
        paragraphs: [
          "Um ERP bem estruturado para pequenas e médias empresas costuma reunir PDV para vendas no ponto físico, controle de estoque com atualização automática a cada movimentação, gestão financeira com contas a pagar e a receber, DRE gerencial para leitura rápida de resultado, relatórios de desempenho por período, produto ou vendedor, e cadastro centralizado de clientes e fornecedores.",
          "O valor desses módulos não está em existirem separadamente, mas em conversarem entre si sem intervenção manual. É essa comunicação automática que transforma um conjunto de funcionalidades em um sistema de gestão de verdade, e não apenas em outro software isolado somado à pilha de ferramentas que a empresa já usa.",
        ],
      },
      {
        heading: "Como o InfinityFy se encaixa",
        paragraphs: [
          "O InfinityFy, oferecido pela ASM Technologia por meio de parceria comercial, foi construído a partir da rotina real de pequenas e médias empresas brasileiras, não como uma versão simplificada de um sistema corporativo. Ele reúne os módulos essenciais de gestão em uma única plataforma, com a integração entre vendas, estoque e financeiro funcionando desde o primeiro dia de uso, sem exigir customizações complexas para começar a operar.",
          "O critério que guia o desenvolvimento do InfinityFy é simples de enunciar e difícil de entregar: controle de verdade sobre o negócio, sem a complexidade desnecessária que costuma afastar pequenas empresas dos sistemas de gestão tradicionais.",
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
      "A planilha de estoque funciona até o dia em que não funciona mais, e nesse dia a empresa descobre, ao mesmo tempo, uma ruptura e uma compra desnecessária.",
    publishedAt: "2026-03-18",
    readingTime: "7 min de leitura",
    seoTitle: "Controle de estoque: por que sair da planilha",
    seoDescription:
      "Entenda os riscos reais de controlar estoque por planilha, o impacto financeiro das divergências e o que observar em um sistema de gestão que resolve o problema pela raiz.",
    content: [
      {
        paragraphs: [
          "Uma planilha de estoque é tão confiável quanto a última pessoa que a atualizou. Ela depende de alguém lembrar de lançar cada entrada e cada saída, no momento certo e sem erro de digitação, uma condição que raramente se sustenta quando o volume de vendas cresce ou quando mais de uma pessoa mexe no mesmo controle.",
          "O resultado, cedo ou tarde, é a divergência entre o número que a planilha mostra e o que realmente existe na prateleira. Essa divergência custa caro de duas formas opostas: a ruptura, quando o sistema indica estoque que já acabou e a venda é perdida ou o cliente fica esperando, e a compra desnecessária, quando a empresa repõe um item que na verdade ainda tinha saldo suficiente, imobilizando capital que poderia estar em outro lugar.",
        ],
      },
      {
        heading: "Por que a atualização manual é o problema, não a planilha em si",
        paragraphs: [
          "A ferramenta em si não é o defeito, é a dependência da intervenção humana em cada movimentação. Um sistema de gestão resolve isso na origem: o estoque é debitado automaticamente no momento da venda e creditado automaticamente no momento da compra, sem que ninguém precise lembrar de atualizar nada manualmente.",
          "Essa automação elimina não apenas o erro de esquecimento, mas também o atraso entre o que acontece na loja e o que aparece no sistema, um intervalo que em operações com alto volume de vendas pode significar decisões tomadas com base em números que já não refletem a realidade.",
        ],
      },
      {
        heading: "O que observar em um bom controle de estoque",
        paragraphs: [
          "Alertas automáticos de estoque mínimo evitam que a ruptura seja descoberta apenas quando o cliente já está no caixa. Integração direta com o PDV garante que a baixa aconteça no instante da venda, sem lançamento manual posterior. Rastreabilidade por lote é indispensável para empresas que trabalham com produtos perecíveis ou com controle de validade, e relatórios de giro mostram quais produtos realmente merecem espaço no estoque e capital investido.",
          "Nenhum desses recursos resolve o problema isoladamente. É a combinação deles, operando de forma integrada, que transforma o estoque de uma fonte de incerteza em uma ferramenta de decisão.",
        ],
      },
      {
        heading: "O impacto direto no caixa da empresa",
        paragraphs: [
          "Estoque parado é dinheiro parado. Toda unidade comprada além do necessário representa capital de giro imobilizado em uma prateleira, enquanto toda ruptura representa uma venda que não aconteceu e, em muitos casos, um cliente que procura o concorrente na próxima compra. Empresas que corrigem esse ponto costumam notar o efeito primeiro no caixa, antes mesmo de perceberem a mudança na rotina operacional.",
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
      "Sistemas prontos resolvem a maioria dos casos. O problema começa quando o processo que diferencia sua empresa da concorrência é justamente o que nenhum sistema pronto foi feito para suportar.",
    publishedAt: "2026-04-05",
    readingTime: "8 min de leitura",
    seoTitle: "Quando vale a pena um sistema sob medida | ASM Technologia",
    seoDescription:
      "Descubra os sinais concretos de que sua empresa precisa de um sistema sob medida em vez de um produto pronto, e como a ASM Technologia estrutura esse tipo de projeto do zero.",
    content: [
      {
        paragraphs: [
          "A maioria das empresas encontra em sistemas prontos, sejam eles de gestão, de vendas ou de atendimento, uma solução suficiente para operar. Isso não é uma limitação do software, é reflexo de que a maior parte dos processos empresariais, de fato, se repete de negócio para negócio, e por isso pode ser resolvida por um produto genérico bem construído.",
          "O problema aparece em um ponto específico: quando o processo que a empresa quer digitalizar não é um processo comum, é justamente o que a diferencia dos concorrentes. Nesse cenário, adaptar um sistema pronto para caber em uma operação que ele não foi desenhado para suportar costuma sair mais caro, em tempo e em retrabalho, do que projetar uma solução sob medida desde o início.",
        ],
      },
      {
        heading: "Sinais de que você precisa de tecnologia sob medida",
        paragraphs: [
          "O primeiro sinal costuma aparecer na forma de planilhas paralelas: quando a equipe usa o sistema principal para uma parte do processo, mas recorre a planilhas auxiliares para preencher o que o sistema não cobre, é sinal de que a operação já superou os limites da ferramenta.",
          "O segundo sinal é a ausência de integração. Quando um processo depende de exportar dados de um sistema, tratar manualmente em uma planilha e importar em outro sistema, a empresa está pagando com tempo de equipe o que uma integração via API resolveria automaticamente. O terceiro sinal, mais estrutural, é um fluxo de trabalho que é próprio do setor ou até da empresa, e que nenhum produto genérico do mercado contempla porque foi desenhado para atender a maioria, não a exceção.",
        ],
      },
      {
        heading: "Como a ASM conduz esse tipo de projeto",
        paragraphs: [
          "O primeiro passo nunca é técnico. Antes de discutir arquitetura, linguagem ou infraestrutura, a ASM investe tempo entendendo o problema de negócio: o que trava hoje, quanto isso custa em tempo e em erro, e o que precisa ser verdadeiro no dia em que o sistema estiver no ar.",
          "Só depois desse entendimento a equipe projeta a arquitetura da solução, seja um sistema web, um aplicativo, uma integração via API entre plataformas já existentes ou uma combinação dos três. Esse cuidado inicial é o que evita o erro mais comum em projetos sob medida: construir rápido uma solução tecnicamente correta, mas que não resolve o problema real da empresa que a encomendou.",
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
      "Tentar automatizar tudo ao mesmo tempo é a forma mais rápida de nenhum projeto de automação dar certo. O ponto de partida certo costuma ser mais óbvio, e mais restrito, do que parece.",
    publishedAt: "2026-04-20",
    readingTime: "7 min de leitura",
    seoTitle: "Automação de processos: por onde começar",
    seoDescription:
      "Aprenda a priorizar quais processos automatizar primeiro, entenda os erros mais comuns de projetos de automação e veja como reduzir erros manuais e liberar tempo da equipe.",
    content: [
      {
        paragraphs: [
          "O erro mais frequente em projetos de automação não é técnico, é de escopo: a empresa decide automatizar tudo de uma vez, em um único projeto, e acaba não entregando nenhuma automação de fato, porque a complexidade de coordenar múltiplos processos simultaneamente supera a capacidade da equipe de acompanhar a mudança.",
          "O ponto de partida eficaz é sempre mais restrito do que parece necessário. Automação não é sobre eliminar trabalho humano de uma vez, é sobre remover, processo por processo, a parte repetitiva e mais sujeita a erro manual, começando por onde o retorno aparece mais rápido e é mais fácil de medir.",
        ],
      },
      {
        heading: "Como priorizar sem se perder",
        paragraphs: [
          "O critério mais confiável cruza duas variáveis: volume e impacto do erro. Processos de alto volume, executados dezenas ou centenas de vezes por mês, concentram o maior potencial de economia de tempo quando automatizados. Processos de alto impacto de erro, aqueles em que uma falha gera retrabalho, multa ou perda financeira direta, concentram o maior potencial de redução de risco.",
          "Conciliação financeira e emissão de notas fiscais costumam aparecer nas duas categorias ao mesmo tempo: são repetitivos, consomem horas de trabalho manual todo mês e, quando saem errados, geram consequências que vão além do retrabalho, incluindo multas e problemas com clientes ou com o fisco. Por isso, tendem a ser o ponto de partida mais eficaz para a maioria das empresas.",
        ],
      },
      {
        heading: "Erros comuns ao automatizar",
        paragraphs: [
          "Automatizar um processo mal desenhado é um erro recorrente: se o processo manual já tem falhas estruturais, a automação apenas executa esse erro mais rápido e em maior escala. Antes de automatizar, vale revisar se o processo, na forma como existe hoje, é de fato o processo certo.",
          "Outro erro comum é tratar a automação como um projeto de tecnologia isolado, sem envolver quem executa o processo manualmente todos os dias. Quem está na operação sabe onde estão as exceções, os casos de borda e os atalhos informais que fazem o processo funcionar na prática, informação que raramente aparece documentada e que é essencial para que a automação não quebre no primeiro caso fora do padrão.",
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
