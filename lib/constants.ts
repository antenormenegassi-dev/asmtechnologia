export const SITE_NAME = "ASM Technologia";

export const SITE_TAGLINE = "Tecnologia que protege, organiza e impulsiona empresas.";

export const SITE_DESCRIPTION =
  "Certificados digitais, sistemas de gestão e soluções tecnológicas desenvolvidas para as necessidades do seu negócio.";

export const SITE_URL = "https://www.asmtechnologia.com.br";

// TODO: replace with the real ASM Technologia contact channels before launch.
export const CONTACT_EMAIL = "contato@asmtechnologia.com.br";
export const CONTACT_PHONE_DISPLAY = "(00) 0000-0000";

export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Certificados Digitais", href: "/certificados-digitais" },
  { label: "Soluções Empresariais", href: "/solucoes-empresariais" },
  { label: "Sobre", href: "/sobre" },
  { label: "Conteúdos", href: "/blog" },
];

export const FOOTER_LINKS = {
  certificados: [
    { label: "e-CNPJ", href: "/certificados-digitais/e-cnpj" },
    { label: "e-CPF", href: "/certificados-digitais/e-cpf" },
    { label: "NF-e", href: "/certificados-digitais/nf-e" },
    { label: "NF-C", href: "/certificados-digitais/nf-c" },
    { label: "Ver todos", href: "/certificados-digitais" },
  ],
  empresa: [
    { label: "Sobre a ASM", href: "/sobre" },
    { label: "Soluções Empresariais", href: "/solucoes-empresariais" },
    { label: "InfinityFy", href: "/solucoes-empresariais/infinityfy" },
    { label: "Tecnologia Sob Medida", href: "/tecnologia-sob-medida" },
    { label: "Seja Parceiro", href: "/parceiros" },
  ],
  conteudo: [
    { label: "Blog", href: "/blog" },
    { label: "Certificados Digitais", href: "/blog/certificados-digitais" },
    { label: "Gestão Empresarial", href: "/blog/gestao-empresarial" },
    { label: "Tecnologia", href: "/blog/tecnologia" },
  ],
  legal: [
    { label: "Política de Privacidade", href: "/politica-de-privacidade" },
    { label: "Termos de Uso", href: "/termos-de-uso" },
    { label: "Contato", href: "/contato" },
  ],
};
