import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CheckIcon } from "@/components/ui/icons";
import { WhatsAppCTA } from "@/components/whatsapp/WhatsAppCTA";
import { CertificateCard } from "@/components/blocks/CertificateCard";
import { FAQList } from "@/components/blocks/FAQList";
import { getRelatedCertificates, type Certificate } from "@/data/certificates";

export function CertificatePageTemplate({ certificate }: { certificate: Certificate }) {
  const related = getRelatedCertificates(certificate);

  return (
    <>
      <section className="border-b border-brand-black/10 py-16">
        <Container>
          <p className="text-sm text-brand-black/50">
            <Link href="/certificados-digitais" className="hover:text-brand-blue">
              Certificados Digitais
            </Link>{" "}
            / {certificate.name}
          </p>
          <div className="mt-6 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-start">
            <div>
              <h1 className="text-4xl font-semibold tracking-tight text-brand-black">
                {certificate.name}
              </h1>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-brand-black/70">
                {certificate.shortDescription}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <WhatsAppCTA message={certificate.whatsappMessage}>
                  Comprar {certificate.name}
                </WhatsAppCTA>
                <Link
                  href="/contato"
                  className="inline-flex items-center justify-center rounded-control border border-brand-black/15 px-5 py-3 text-sm font-medium text-brand-black transition-colors hover:border-brand-blue hover:text-brand-blue"
                >
                  Falar com atendimento
                </Link>
              </div>
            </div>

            <dl className="rounded-card border border-brand-black/10 p-6">
              <div className="flex justify-between gap-4 border-b border-brand-black/10 py-3 first:pt-0">
                <dt className="text-sm text-brand-black/50">Validade</dt>
                <dd className="text-right text-sm font-medium text-brand-black">
                  {certificate.validity}
                </dd>
              </div>
              <div className="flex justify-between gap-4 py-3 last:border-0 last:pb-0">
                <dt className="text-sm text-brand-black/50">Mídia</dt>
                <dd className="text-right text-sm font-medium text-brand-black">
                  {certificate.mediaType}
                </dd>
              </div>
            </dl>
          </div>
        </Container>
      </section>

      <section className="border-b border-brand-black/10 py-16">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading title="Para quem é indicado" />
            <ul className="mt-6 space-y-3">
              {certificate.whoItsFor.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-brand-black/70">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading title="Onde é utilizado" />
            <ul className="mt-6 space-y-3">
              {certificate.useCases.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-brand-black/70">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="border-b border-brand-black/10 py-16">
        <Container>
          <SectionHeading eyebrow="Processo" title="Como funciona a aquisição" />
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {certificate.acquisitionSteps.map((step, index) => (
              <li key={step} className="rounded-card border border-brand-black/10 p-6">
                <span className="flex h-8 w-8 items-center justify-center rounded-control bg-brand-blue text-sm font-semibold text-brand-white">
                  {index + 1}
                </span>
                <p className="mt-4 text-sm leading-relaxed text-brand-black/70">{step}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-b border-brand-black/10 py-16">
        <Container className="max-w-3xl">
          <FAQList items={certificate.faq} />
        </Container>
      </section>

      {related.length > 0 && (
        <section className="py-16">
          <Container>
            <SectionHeading eyebrow="Continue explorando" title="Certificados relacionados" />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <CertificateCard key={item.slug} certificate={item} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <section className="bg-brand-blue py-16">
        <Container className="flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-xl text-2xl font-semibold tracking-tight text-brand-white sm:text-3xl">
            Pronto para adquirir seu {certificate.name}?
          </h2>
          <WhatsAppCTA
            message={certificate.whatsappMessage}
            className="bg-brand-white text-brand-blue hover:bg-brand-white/90"
          >
            Comprar {certificate.name} pelo WhatsApp
          </WhatsAppCTA>
        </Container>
      </section>
    </>
  );
}
