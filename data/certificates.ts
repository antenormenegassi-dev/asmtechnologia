export type CertificateCategory = "e-cnpj" | "e-cpf" | "nf-e" | "nf-c" | "outros";

export interface CertificateFAQ {
  question: string;
  answer: string;
}

export interface Certificate {
  slug: string;
  category: CertificateCategory;
  name: string;
  shortDescription: string;
  whoItsFor: string[];
  validity: string;
  mediaType: string;
  useCases: string[];
  acquisitionSteps: string[];
  faq: CertificateFAQ[];
  whatsappMessage: string;
  relatedSlugs: string[];
  seoTitle: string;
  seoDescription: string;
}

export const certificates: Certificate[] = [
  {
    slug: "e-cnpj",
    category: "e-cnpj",
    name: "e-CNPJ",
    shortDescription:
      "Certificado digital que comprova a identidade jurídica da sua empresa em ambientes eletrônicos.",
    whoItsFor: [
      "Empresas de qualquer porte que precisam emitir notas fiscais eletrônicas",
      "Empresas que assinam contratos e documentos digitalmente",
      "Empresas que acessam o eSocial, e-Financeira e outros sistemas do governo",
    ],
    validity: "Disponível nos modelos A1 (12 meses) e A3 (até 3 anos)",
    mediaType: "A1 (arquivo digital) ou A3 (cartão/token)",
    useCases: [
      "Emissão de nota fiscal eletrônica (NF-e)",
      "Assinatura de contratos e documentos com validade jurídica",
      "Acesso a sistemas do governo (eSocial, Receita Federal, e-Financeira)",
      "Participação em licitações eletrônicas",
    ],
    acquisitionSteps: [
      "Fale com a ASM e informe o modelo (A1 ou A3) desejado",
      "Envie os documentos da empresa para validação",
      "Realize a videoconferência de validação de identidade",
      "Receba orientação para instalação e primeiro uso",
    ],
    faq: [
      {
        question: "Qual a diferença entre e-CNPJ A1 e A3?",
        answer:
          "O A1 é instalado como arquivo digital no computador e tem validade de 12 meses. O A3 fica armazenado em um cartão ou token físico e tem validade de até 3 anos.",
      },
      {
        question: "O e-CNPJ substitui a assinatura física?",
        answer:
          "Sim. O e-CNPJ tem validade jurídica equivalente à assinatura de próprio punho, reconhecida pela legislação brasileira (ICP-Brasil).",
      },
      {
        question: "Posso emitir NF-e com qualquer modelo?",
        answer:
          "Sim, tanto o A1 quanto o A3 emitem NF-e. A escolha entre eles depende do volume de emissões e da preferência por automação (A1) ou portabilidade física (A3).",
      },
    ],
    whatsappMessage: "Olá! Gostaria de saber mais sobre o certificado e-CNPJ.",
    relatedSlugs: ["e-cnpj-a1", "e-cnpj-a3", "nf-e"],
    seoTitle: "e-CNPJ — Certificado Digital para Empresas",
    seoDescription:
      "Emita seu e-CNPJ com a ASM Tecnologia. Certificado digital para empresas, disponível em A1 e A3, com atendimento especializado.",
  },
  {
    slug: "e-cnpj-a1",
    category: "e-cnpj",
    name: "e-CNPJ A1",
    shortDescription:
      "Certificado digital em arquivo, ideal para empresas que emitem notas fiscais com frequência e usam sistemas integrados.",
    whoItsFor: [
      "Empresas com alto volume de emissão de notas fiscais",
      "Empresas que integram o certificado a sistemas de gestão e ERPs",
      "Contadores que emitem documentos em nome de diversos clientes",
    ],
    validity: "12 meses",
    mediaType: "A1 (arquivo digital, instalado no computador ou servidor)",
    useCases: [
      "Emissão automatizada de NF-e integrada a sistemas de gestão",
      "Assinatura de documentos em lote",
      "Acesso a sistemas do governo sem necessidade de dispositivo físico",
    ],
    acquisitionSteps: [
      "Solicite o e-CNPJ A1 pelo WhatsApp",
      "Envie os documentos da empresa",
      "Realize a validação de identidade por videoconferência",
      "Receba o arquivo digital e o passo a passo de instalação",
    ],
    faq: [
      {
        question: "Preciso de um dispositivo físico para usar o A1?",
        answer:
          "Não. O e-CNPJ A1 é um arquivo digital instalado diretamente no computador ou servidor, sem necessidade de cartão ou token.",
      },
      {
        question: "O que acontece quando o certificado A1 vence?",
        answer:
          "Como a validade é de 12 meses, é necessário renovar anualmente. A ASM avisa seus clientes com antecedência para evitar interrupções.",
      },
    ],
    whatsappMessage: "Olá! Gostaria de comprar o certificado e-CNPJ A1.",
    relatedSlugs: ["e-cnpj", "e-cnpj-a3", "nf-e"],
    seoTitle: "e-CNPJ A1 — Certificado Digital em Arquivo",
    seoDescription:
      "Compre o e-CNPJ A1: certificado digital em arquivo, validade de 12 meses, ideal para emissão de notas fiscais e integração com sistemas.",
  },
  {
    slug: "e-cnpj-a3",
    category: "e-cnpj",
    name: "e-CNPJ A3",
    shortDescription:
      "Certificado digital em cartão ou token, com maior validade e portabilidade física para a sua empresa.",
    whoItsFor: [
      "Empresas que priorizam segurança física do certificado",
      "Empresas que preferem menor frequência de renovação",
      "Sócios e representantes legais que assinam documentos presencialmente",
    ],
    validity: "Até 3 anos",
    mediaType: "A3 (cartão inteligente ou token USB)",
    useCases: [
      "Assinatura de documentos em cartório e ambientes presenciais",
      "Emissão de NF-e com maior segurança física",
      "Acesso a sistemas do governo em múltiplos dispositivos, com o cartão/token em mãos",
    ],
    acquisitionSteps: [
      "Solicite o e-CNPJ A3 pelo WhatsApp",
      "Envie os documentos da empresa",
      "Realize a validação de identidade por videoconferência",
      "Retire ou receba o cartão/token e a leitora, se necessário",
    ],
    faq: [
      {
        question: "Preciso de uma leitora para usar o cartão A3?",
        answer:
          "Sim, quando o certificado é emitido em cartão inteligente é necessária uma leitora conectada ao computador. Quando emitido em token USB, a leitora já vem integrada.",
      },
      {
        question: "O que acontece se eu perder o cartão ou token?",
        answer:
          "É necessário revogar o certificado imediatamente e emitir um novo. Entre em contato com a ASM assim que perceber a perda.",
      },
    ],
    whatsappMessage: "Olá! Gostaria de comprar o certificado e-CNPJ A3.",
    relatedSlugs: ["e-cnpj", "e-cnpj-a1", "nf-e"],
    seoTitle: "e-CNPJ A3 — Certificado Digital em Cartão ou Token",
    seoDescription:
      "Compre o e-CNPJ A3: certificado digital em cartão ou token, validade de até 3 anos, com segurança física para sua empresa.",
  },
  {
    slug: "e-cpf",
    category: "e-cpf",
    name: "e-CPF",
    shortDescription:
      "Certificado digital que comprova sua identidade pessoal em documentos e sistemas eletrônicos.",
    whoItsFor: [
      "Profissionais liberais e autônomos",
      "Sócios e representantes legais de empresas",
      "Pessoas físicas que assinam contratos e declarações digitalmente",
    ],
    validity: "Disponível nos modelos A1 (12 meses) e A3 (até 3 anos)",
    mediaType: "A1 (arquivo digital) ou A3 (cartão/token)",
    useCases: [
      "Assinatura de contratos e procurações com validade jurídica",
      "Declaração de Imposto de Renda",
      "Acesso ao portal e-CAC e outros serviços do governo",
      "Assinatura de documentos como representante legal de empresa",
    ],
    acquisitionSteps: [
      "Fale com a ASM e informe o modelo (A1 ou A3) desejado",
      "Envie seus documentos pessoais para validação",
      "Realize a videoconferência de validação de identidade",
      "Receba orientação para instalação e primeiro uso",
    ],
    faq: [
      {
        question: "Qual a diferença entre e-CPF e e-CNPJ?",
        answer:
          "O e-CPF identifica uma pessoa física, enquanto o e-CNPJ identifica uma empresa. Sócios e representantes legais costumam ter os dois.",
      },
      {
        question: "Posso usar o e-CPF para assinar como representante da empresa?",
        answer:
          "Sim, desde que você seja o representante legal cadastrado e o documento exija sua assinatura pessoal.",
      },
    ],
    whatsappMessage: "Olá! Gostaria de saber mais sobre o certificado e-CPF.",
    relatedSlugs: ["e-cpf-a1", "e-cpf-a3", "e-cnpj"],
    seoTitle: "e-CPF — Certificado Digital para Pessoa Física",
    seoDescription:
      "Emita seu e-CPF com a ASM Tecnologia. Certificado digital para pessoa física, disponível em A1 e A3, com atendimento especializado.",
  },
  {
    slug: "e-cpf-a1",
    category: "e-cpf",
    name: "e-CPF A1",
    shortDescription:
      "Certificado digital pessoal em arquivo, prático para quem assina documentos com frequência no próprio computador.",
    whoItsFor: [
      "Profissionais que assinam documentos diariamente",
      "Representantes legais que utilizam sempre o mesmo computador",
      "Quem prioriza praticidade sobre portabilidade física",
    ],
    validity: "12 meses",
    mediaType: "A1 (arquivo digital, instalado no computador)",
    useCases: [
      "Assinatura digital de contratos e procurações",
      "Declaração de Imposto de Renda",
      "Acesso a portais do governo sem dispositivo físico",
    ],
    acquisitionSteps: [
      "Solicite o e-CPF A1 pelo WhatsApp",
      "Envie seus documentos pessoais",
      "Realize a validação de identidade por videoconferência",
      "Receba o arquivo digital e o passo a passo de instalação",
    ],
    faq: [
      {
        question: "O e-CPF A1 funciona em qualquer computador?",
        answer:
          "O arquivo pode ser instalado em mais de um dispositivo, mas recomendamos manter o controle de onde ele está instalado por segurança.",
      },
    ],
    whatsappMessage: "Olá! Gostaria de comprar o certificado e-CPF A1.",
    relatedSlugs: ["e-cpf", "e-cpf-a3", "e-cnpj-a1"],
    seoTitle: "e-CPF A1 — Certificado Digital Pessoal em Arquivo",
    seoDescription:
      "Compre o e-CPF A1: certificado digital pessoal em arquivo, validade de 12 meses, prático para assinaturas frequentes.",
  },
  {
    slug: "e-cpf-a3",
    category: "e-cpf",
    name: "e-CPF A3",
    shortDescription:
      "Certificado digital pessoal em cartão ou token, com maior validade e segurança física.",
    whoItsFor: [
      "Profissionais que assinam documentos em diferentes locais",
      "Quem prioriza segurança física do certificado",
      "Quem prefere renovar com menor frequência",
    ],
    validity: "Até 3 anos",
    mediaType: "A3 (cartão inteligente ou token USB)",
    useCases: [
      "Assinatura de documentos em cartório e ambientes presenciais",
      "Declaração de Imposto de Renda em qualquer computador com o dispositivo",
      "Acesso a portais do governo com maior segurança física",
    ],
    acquisitionSteps: [
      "Solicite o e-CPF A3 pelo WhatsApp",
      "Envie seus documentos pessoais",
      "Realize a validação de identidade por videoconferência",
      "Retire ou receba o cartão/token",
    ],
    faq: [
      {
        question: "O cartão A3 funciona em qualquer computador?",
        answer:
          "Sim, desde que o computador tenha uma leitora de cartão compatível ou você utilize o modelo token USB, que já é autocontido.",
      },
    ],
    whatsappMessage: "Olá! Gostaria de comprar o certificado e-CPF A3.",
    relatedSlugs: ["e-cpf", "e-cpf-a1", "e-cnpj-a3"],
    seoTitle: "e-CPF A3 — Certificado Digital Pessoal em Cartão ou Token",
    seoDescription:
      "Compre o e-CPF A3: certificado digital pessoal em cartão ou token, validade de até 3 anos, com segurança física.",
  },
  {
    slug: "nf-e",
    category: "nf-e",
    name: "Certificado para NF-e",
    shortDescription:
      "Orientação especializada para escolher o certificado correto para emissão de Nota Fiscal Eletrônica.",
    whoItsFor: [
      "Empresas que vendem produtos e precisam emitir NF-e",
      "Indústrias e distribuidoras com operações interestaduais",
      "Empresas que estão iniciando a emissão eletrônica de notas",
    ],
    validity: "Conforme o modelo escolhido (A1: 12 meses / A3: até 3 anos)",
    mediaType: "e-CNPJ A1 ou A3, conforme o volume de emissões",
    useCases: [
      "Emissão de Nota Fiscal Eletrônica (NF-e, modelo 55)",
      "Integração com sistemas de gestão e emissores fiscais",
      "Operações de venda para outras empresas (B2B)",
    ],
    acquisitionSteps: [
      "Converse com a ASM sobre seu volume de emissões",
      "Escolha entre e-CNPJ A1 ou A3 com orientação especializada",
      "Realize a validação de identidade",
      "Configure o certificado no seu sistema emissor de notas",
    ],
    faq: [
      {
        question: "Preciso de um e-CNPJ específico para NF-e?",
        answer:
          "Não existe um certificado exclusivo para NF-e — o próprio e-CNPJ (A1 ou A3) é utilizado para a emissão. A escolha do modelo depende do seu volume e forma de operação.",
      },
      {
        question: "A ASM ajuda a configurar o certificado no meu sistema?",
        answer:
          "Sim, nossa equipe orienta a instalação e configuração para que a emissão de notas funcione corretamente desde o primeiro uso.",
      },
    ],
    whatsappMessage: "Olá! Gostaria de saber qual certificado preciso para emitir NF-e.",
    relatedSlugs: ["e-cnpj-a1", "e-cnpj-a3", "nf-c"],
    seoTitle: "Certificado Digital para Emissão de NF-e",
    seoDescription:
      "Descubra qual certificado digital sua empresa precisa para emitir Nota Fiscal Eletrônica (NF-e) e conte com orientação especializada da ASM.",
  },
  {
    slug: "nf-c",
    category: "nf-c",
    name: "Certificado para NFC-e",
    shortDescription:
      "Orientação especializada para escolher o certificado correto para emissão de Nota Fiscal de Consumidor Eletrônica.",
    whoItsFor: [
      "Comércios e varejo com venda direta ao consumidor final",
      "Empresas que utilizam PDV (Ponto de Venda)",
      "Negócios que estão migrando do cupom fiscal para a NFC-e",
    ],
    validity: "Conforme o modelo escolhido (A1: 12 meses / A3: até 3 anos)",
    mediaType: "e-CNPJ A1 ou A3, conforme o volume de emissões",
    useCases: [
      "Emissão de Nota Fiscal de Consumidor Eletrônica (NFC-e, modelo 65)",
      "Integração com sistemas de PDV e frente de caixa",
      "Substituição do cupom fiscal em vendas ao consumidor final",
    ],
    acquisitionSteps: [
      "Converse com a ASM sobre seu volume de vendas",
      "Escolha entre e-CNPJ A1 ou A3 com orientação especializada",
      "Realize a validação de identidade",
      "Configure o certificado no seu sistema de PDV",
    ],
    faq: [
      {
        question: "Qual a diferença entre NF-e e NFC-e?",
        answer:
          "A NF-e (modelo 55) é usada em operações entre empresas, enquanto a NFC-e (modelo 65) é usada na venda direta ao consumidor final, geralmente no PDV.",
      },
      {
        question: "O InfinityFy já emite NFC-e integrada ao PDV?",
        answer:
          "Sim, o InfinityFy possui módulo de PDV com emissão integrada de NFC-e, usando o certificado digital configurado na sua empresa.",
      },
    ],
    whatsappMessage: "Olá! Gostaria de saber qual certificado preciso para emitir NFC-e.",
    relatedSlugs: ["e-cnpj-a1", "e-cnpj-a3", "nf-e"],
    seoTitle: "Certificado Digital para Emissão de NFC-e",
    seoDescription:
      "Descubra qual certificado digital sua empresa precisa para emitir NFC-e no PDV e conte com orientação especializada da ASM.",
  },
  {
    slug: "outros",
    category: "outros",
    name: "Outros Certificados",
    shortDescription:
      "Certificados digitais para necessidades específicas, como e-CPF para MEI, certificados para carimbo do tempo e SSL.",
    whoItsFor: [
      "MEIs que precisam de certificado digital simplificado",
      "Empresas que precisam de carimbo de tempo para documentos",
      "Empresas que precisam de certificados SSL para seus sites e sistemas",
    ],
    validity: "Varia conforme o tipo de certificado",
    mediaType: "Varia conforme o tipo de certificado (A1, A3 ou outro)",
    useCases: [
      "Certificação digital para MEI",
      "Carimbo do tempo para validação de data/hora em documentos",
      "Certificados SSL para segurança de sites e sistemas",
    ],
    acquisitionSteps: [
      "Fale com a ASM e descreva sua necessidade",
      "Receba orientação sobre o certificado mais adequado",
      "Envie a documentação necessária",
      "Conclua a emissão com o suporte da nossa equipe",
    ],
    faq: [
      {
        question: "Não encontrei o certificado que preciso. E agora?",
        answer:
          "Fale com a nossa equipe pelo WhatsApp — atendemos necessidades específicas que não estão listadas no catálogo padrão.",
      },
    ],
    whatsappMessage: "Olá! Preciso de orientação sobre um certificado digital específico.",
    relatedSlugs: ["e-cnpj", "e-cpf"],
    seoTitle: "Outros Certificados Digitais — ASM Tecnologia",
    seoDescription:
      "Certificados digitais para necessidades específicas: MEI, carimbo do tempo, SSL e mais. Fale com a ASM Tecnologia.",
  },
];

export function getCertificateBySlug(slug: string): Certificate | undefined {
  return certificates.find((cert) => cert.slug === slug);
}

export function getRelatedCertificates(cert: Certificate): Certificate[] {
  return cert.relatedSlugs
    .map((slug) => getCertificateBySlug(slug))
    .filter((c): c is Certificate => Boolean(c));
}

export function getCertificatesByCategory(category: CertificateCategory): Certificate[] {
  return certificates.filter((cert) => cert.category === category);
}
