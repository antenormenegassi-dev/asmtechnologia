import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const ROWS: [string, string, string][] = [
  ["Armazenamento", "Arquivo digital", "Token, cartão ou dispositivo compatível"],
  ["Validade comum", "1 ano", "1 a 3 anos, conforme o certificado"],
  ["Instalação", "Computador/servidor", "Dispositivo físico ou mídia compatível"],
  ["Facilidade de uso", "★★★★★", "★★★"],
  ["Uso em sistemas automáticos", "Excelente", "Mais limitado"],
  ["Necessita conectar dispositivo", "Não", "Geralmente sim"],
  ["Backup", "Pode ser realizado", "Mais restrito"],
];

const A1_ADVANTAGES = [
  "Fácil instalação e utilização",
  "Pode ser utilizado em sistemas automatizados",
  "Permite backup do arquivo",
  "Não depende de token ou cartão",
  "Ótimo para empresas que emitem muitas notas fiscais",
];

const A3_ADVANTAGES = [
  "O certificado não fica armazenado diretamente no computador",
  "Pode oferecer maior controle físico sobre o acesso",
  "É interessante para quem utiliza o certificado com menor frequência",
];

export function A1A3ComparisonSection() {
  return (
    <section className="border-b border-brand-black/10 dark:border-brand-white/10 py-24">
      <Container>
        <SectionHeading
          eyebrow="A1 x A3"
          title="Qual a diferença entre os certificados A1 e A3?"
          description="A principal diferença entre os certificados digitais A1 e A3 está na forma de armazenamento e utilização."
          className="max-w-2xl"
        />

        <div className="mt-14 overflow-x-auto rounded-card border border-brand-black/10 dark:border-brand-white/10">
          <table className="w-full min-w-[560px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-brand-black/10 dark:border-brand-white/10 bg-brand-blue/5 text-left">
                <th className="px-6 py-4 font-semibold text-brand-black dark:text-brand-white">Característica</th>
                <th className="px-6 py-4 font-semibold text-brand-black dark:text-brand-white">A1</th>
                <th className="px-6 py-4 font-semibold text-brand-black dark:text-brand-white">A3</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map(([feature, a1, a3], index) => (
                <tr
                  key={feature}
                  className={index < ROWS.length - 1 ? "border-b border-brand-black/10 dark:border-brand-white/10" : ""}
                >
                  <td className="px-6 py-4 text-brand-black/70 dark:text-brand-white/70">{feature}</td>
                  <td className="px-6 py-4 font-medium text-brand-black dark:text-brand-white">{a1}</td>
                  <td className="px-6 py-4 font-medium text-brand-black dark:text-brand-white">{a3}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="rounded-card border border-brand-black/10 dark:border-brand-white/10 p-8">
            <span className="text-xs font-semibold uppercase tracking-wide text-brand-blue">
              Certificado A1
            </span>
            <p className="mt-4 text-sm leading-relaxed text-brand-black/70 dark:text-brand-white/70">
              O A1 é um arquivo digital instalado no computador ou servidor. É muito utilizado por
              empresas porque oferece praticidade e facilidade de integração com sistemas de
              emissão de notas fiscais e softwares contábeis.
            </p>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-brand-black/70 dark:text-brand-white/70">
              {A1_ADVANTAGES.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-card border border-brand-black/10 dark:border-brand-white/10 p-8">
            <span className="text-xs font-semibold uppercase tracking-wide text-brand-blue">
              Certificado A3
            </span>
            <p className="mt-4 text-sm leading-relaxed text-brand-black/70 dark:text-brand-white/70">
              O A3 fica armazenado em um dispositivo físico, como token ou cartão, e normalmente
              precisa estar conectado ao computador durante a utilização.
            </p>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-brand-black/70 dark:text-brand-white/70">
              {A3_ADVANTAGES.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-16 max-w-2xl text-base leading-relaxed text-brand-black/70 dark:text-brand-white/70">
          <strong className="text-brand-black dark:text-brand-white">Qual escolher?</strong> Para empresas que utilizam
          certificado diariamente, emitem notas fiscais ou precisam integrar o certificado a
          sistemas, o A1 geralmente é mais prático. Para quem busca um certificado para uso mais
          pontual e prefere manter a credencial em um dispositivo físico, o A3 pode ser uma boa
          opção.
        </p>
      </Container>
    </section>
  );
}
