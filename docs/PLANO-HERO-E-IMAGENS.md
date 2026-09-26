# Plano: hero com foto + imagens reais no site

Replica o que foi feito no `infinityfy-site`, adaptado à estrutura deste projeto.
Duas frentes independentes: **(A) imagens de conteúdo** (trocar os placeholders por fotos que casam com cada página ou post) e **(B) refactor do hero**.

---

## 0. Diferenças deste projeto (ler antes)

| infinityfy-site | asmtechnologia | Consequência |
|---|---|---|
| Posts em MDX (`content/blog`, velite) com campo `cover` | Posts em `data/blogPosts.ts` (8) e certificados em `data/certificates.ts`, **sem campo de imagem** | Adicionar `cover?: string` nos tipos `BlogPost` e `Certificate` |
| Cada componente tinha seu próprio slot de imagem | **Todo slot usa `components/ui/ImagePlaceholder.tsx`**, com default `/images/cover.jpeg` | Os slots são os usos de `ImagePlaceholder`: passar `src` em cada um |
| `lucide-react` e `motion` instalados | Não tem nenhum dos dois; ícones próprios em `components/ui/icons.tsx` | Usar os ícones de `icons.tsx` (ou criar SVGs no mesmo padrão); animação em CSS |
| Sem dark mode real | Dark mode por classe `.dark` no `<html>` (`ThemeToggle`), tokens `brand-*` | Todo elemento novo precisa da variante `dark:`; testar com `.dark` |
| `HeroSplit` em 5 páginas | `components/blocks/Hero.tsx` só na home (foto de fundo em tela cheia, 2 CTAs); as outras páginas usam um `<section>` com `SectionHeading` + CTA | O novo hero substitui essas seções de topo |
| CTA = link `/pricing` | CTA = `WhatsAppCTA` com `message` | O hero recebe o CTA como `ReactNode` |
| Next 16.2 | Next **16.3.0** | Confirmar em `node_modules/next/dist/docs/01-app/03-api-reference/02-components/image.md` se `priority` → `preload` continua valendo (o Hero atual usa `priority`) |

Tokens da marca: `brand-blue #1557c0`, `brand-blue-dark`, `brand-black #1f2328`, `brand-white`, `--radius-card: 12px`, `rounded-control`.

---

## A. Estratégia de captura de imagens

### A1. Regras de escolha
- Fonte: **Unsplash, só licença gratuita** (uso comercial livre, sem atribuição obrigatória). Filtrar sempre com `license=free`, porque as fotos do Unsplash+ são pagas e aparecem misturadas na busca.
- Ler o **título e o contexto** da página ou post e traduzir num tema visual concreto (ex.: "Crediário" → "cliente e atendente no balcão").
- Hero e fundadores: **sempre pessoas**, com rosto ou ação legível.
- Evitar: logos e marcas em destaque, texto estrangeiro em evidência (formulário de imposto americano, etiquetas em russo), ilustrações/3D, a mesma foto repetida e fotos da mesma sessão em blocos vizinhos.
- Baixar as imagens para `public/images/...` (nada de hotlink: `next.config.ts` não libera domínios remotos).

### A2. Fluxo (o que funcionou e o que não funcionou)
1. **Buscar** com WebFetch (curl é bloqueado pelo Unsplash):
   `https://unsplash.com/s/photos/<termo-em-ingles>?license=free&orientation=landscape|portrait`
   Prompt: *"List the first 12 photos: alt text and images.unsplash.com/photo-... src (no query string). Exclude plus/premium."*
   - Termos em inglês e específicos funcionam melhor (`shop-assistant-customer`, `mechanic-customer`, `qr-code-table`).
   - Não funcionam: a API `unsplash.com/napi` (exige autorização), `unsplash.com/photos/<id>/download` (403) e scraping via curl (307/403). O WebFetch às vezes falha de forma intermitente; basta repetir.
2. **Pré-visualizar** 2 a 4 candidatas por slot: baixar miniaturas direto da CDN (funciona com curl):
   `curl -sL -o X.jpg "https://images.unsplash.com/<photo-id>?w=480&h=360&q=70&fm=jpg&fit=crop&crop=entropy"`
   e montar uma **folha de contato** com `sharp` (já está em `node_modules`), com rótulo em cada miniatura. Olhar a folha com Read e escolher visualmente.
3. **Baixar a final** no tamanho certo, recortada pela CDN:
   `https://images.unsplash.com/<photo-id>?w=<W>&h=<H>&q=75&fm=jpg&fit=crop&crop=<entropy|faces>`
   (`crop=faces` para pessoas e retratos). Conferir com `file *.jpg` que saiu nas dimensões pedidas.
4. **Registrar** um `CREDITS.md` em cada pasta de imagens (arquivo → id da foto).

| Uso | Tamanho | Proporção |
|---|---|---|
| Capa de post/certificado (`aspect-video`) | 1600×900 | 16:9 |
| Imagem de feature/seção (`aspect-4/3`) | 1200×900 | 4:3 |
| Foto do hero | 1200×1500 | 4:5 retrato |
| Fundador/retrato | 900×1125 | 4:5 retrato |

### A3. Pegadinhas do shell (zsh)
- **Nunca** usar `path` como variável de loop no zsh: ela está ligada ao `PATH` e o `curl` some ("command not found"). Use `dest`.
- Downloads em paralelo: `while read dest id; do curl ... & done <<'EOF' ... EOF; wait`.

### A4. Aplicação neste projeto
1. `data/blogPosts.ts`: adicionar `cover?: string` em `BlogPost` e preencher `cover: "/images/blog/<slug>.jpg"` nos 8 posts.
2. `data/certificates.ts`: adicionar `cover?: string` em `Certificate` e preencher `"/images/certificados/<slug>.jpg"`.
3. Passar `src={post.cover}` / `src={certificate.cover}` onde o `ImagePlaceholder` já é usado:
   `BlogPostCard`, `BlogListing`, `ContentTeaser`, `BlogPostTemplate`, `CertificateCard`, `CertificatePageTemplate`.
   Manter `/images/cover.jpeg` como fallback do `ImagePlaceholder`.
4. Slots avulsos com tema próprio (`BenefitsGrid`, `PartnerTeaser`, `app/blog/page.tsx`, `app/certificados-digitais/page.tsx`): uma foto por contexto em `public/images/secoes/<nome>.jpg`.
5. Quando o slot tem foto real, tirar a borda tracejada de placeholder (`border-dashed`). Sugestão: aplicar o estilo tracejado só quando `src` não for passado.

---

## B. Refactor do hero

### B1. Decisões de design (as mesmas do infinityfy)
- Layout **split**: texto de um lado, **foto de pessoas** do outro, com **até 2 cards flutuantes** de "produto" sobre a foto.
- **Só 1 CTA**. **Sem eyebrow e sem proof points**. Mantém título e descrição.
- **Mobile: foto em cima**, texto embaixo (`order-first lg:order-last` na foto).
- Foto com **só o canto inferior direito** bem arredondado: `rounded-br-[4rem] sm:rounded-br-[6rem] lg:rounded-br-[8rem]`, os outros cantos retos.
- Profundidade: um bloco `bg-brand-blue/10` atrás da foto, deslocado (`translate-x-3 translate-y-3 sm:translate-x-5 sm:translate-y-5`) e com o mesmo canto arredondado, mais um blob `blur-3xl` de `bg-brand-blue/20`.

### B2. API sugerida (`components/blocks/Hero.tsx`)
```ts
interface HeroHighlight { icon: (p: { className?: string }) => React.ReactNode; label: string; value: string }
interface HeroProps {
  title: string;
  description: string;
  cta: React.ReactNode;                 // ex.: <WhatsAppCTA message="...">Comprar certificado</WhatsAppCTA>
  image: { src: string; alt: string };
  highlights?: [] | [HeroHighlight] | [HeroHighlight, HeroHighlight];
}
```
Use a tupla `[] | [A] | [A, B]` com default `= []`. Com `[A] | [A, B]` e default vazio, o TypeScript reclama.

### B3. Receita de layout (validada em 390 / 768 / 1440 px)
- Grid: `grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-16`; seção `pt-6 sm:pt-12 lg:pt-16`.
- Foto: `next/image` com `fill`, `preload` (ou `priority`, conforme a doc do 16.3), `sizes="(min-width: 1024px) 50vw, 100vw"` e `object-cover`.
  Moldura: `relative aspect-5/4 sm:aspect-16/10 lg:aspect-4/5 overflow-hidden`. O wrapper fica `relative w-full`, sem `mx-auto max-w-*`, para a foto alinhar com o texto no tablet.
- Cards: `absolute z-10`, `rounded-card border bg-background/90 backdrop-blur-md shadow-lg p-2.5 sm:p-3.5`, ícone num quadrado `bg-brand-blue/10 text-brand-blue`, label `text-[11px] sm:text-xs` + valor em semibold.
  - Card 1: `top-3 left-3 sm:top-8 sm:-left-6 lg:-left-10`
  - Card 2: `-bottom-6 left-3 sm:left-10 lg:-left-6 lg:bottom-16`
  - **Offsets horizontais negativos só a partir de `sm`**, senão estoura a largura no mobile. Offset vertical negativo pode.
- Dark mode: todo `border-brand-black/10` precisa do par `dark:border-brand-white/15`, e o card usa `bg-background/90` (o token troca sozinho com `.dark`).
- Animação sem `motion`: keyframe CSS `fade-up` no `globals.css`, aplicado com `motion-safe:animate-[fade-up_...]` e atraso escalonado nos cards. Evitar decidir a animação por JS no render (no infinityfy, o `useReducedMotion` causou erro de hidratação #418).

### B4. Onde aplicar
| Página | Foto (pessoas) | CTA | Cards (exemplos) |
|---|---|---|---|
| Home (`app/page.tsx`) | atendente entregando/validando certificado com cliente | WhatsApp "Comprar certificado" | Certificado A1 · Emitido hoje / Validação · Por videoconferência |
| `sobre` | equipe da ASM trabalhando junta | WhatsApp "Falar com a ASM" | — |
| `solucoes-empresariais` | lojista usando sistema de gestão no balcão | link "Conhecer o InfinityFy" | Estoque · Sincronizado / Venda · Caixa atualizado |
| `tecnologia-sob-medida` | dev e cliente discutindo projeto em frente à tela | WhatsApp "Solicitar projeto" | Projeto · Em desenvolvimento / Entrega · Por etapas |
| `parceiros` | contador(a) atendendo cliente no escritório | WhatsApp "Quero ser parceiro" | Indicação · Aprovada / Comissão · Paga |

Os valores dos cards são ilustrativos; validar os textos com o time antes de publicar.
Depois de trocar, remover `/images/hero.png` se ficar sem uso. `contato` tem layout próprio e fica de fora.

---

## C. Verificação
1. `npx eslint app components` + `npx tsc --noEmit` + `npm run build` (ler a saída **inteira** do build; "Compiled" sozinho não basta).
2. Subir `next start -p <porta>` e checar no HTML que cada página referencia as imagens novas.
3. Screenshots com Playwright **instalado só no scratchpad**:
   `npm i playwright@1` numa pasta temporária + `PLAYWRIGHT_BROWSERS_PATH=<tmp>/browsers npx playwright install chromium-headless-shell`.
   Capturar 390, 768 e 1440 px, no tema claro e no escuro (`document.documentElement.classList.add('dark')`), e medir `document.documentElement.scrollWidth > innerWidth` para achar scroll horizontal. Se houver, listar os elementos com `getBoundingClientRect().right > innerWidth` para descobrir se o culpado é o hero ou algo que já existia.
4. Pegadinhas de servidor:
   - Depois de um novo `npm run build`, **reiniciar** o `next start`. O servidor antigo continua servindo o HTML velho, que aponta para chunks que não existem mais (sintoma: "This page couldn't load" e chunks com 404).
   - Parar só o próprio servidor com `fuser -k <porta>/tcp`. **Nunca** `pkill -f next-server`: isso derruba também o `npm run dev` do usuário.
