
## Objetivo

Garantir que o Pixel `4529677620612420` envie corretamente:
- **PageView** — automaticamente em todas as páginas (já está funcionando via código base no `index.html`).
- **Contact** — disparado quando o usuário clica em qualquer botão que abre o WhatsApp (link externo). Esse é o evento padrão da Meta recomendado para "iniciar conversa / entrar em contato".

Os demais botões internos (ex: "Ver como funciona", links âncora) continuam apenas com PageView, sem evento extra — conforme solicitado.

## O que será criado

**1. `src/lib/pixel.ts`** — helper central com tipagem para `window.fbq`:
- `trackPageView()` — utilitário (não usado agora, mas pronto para futuras SPAs/rotas).
- `trackContact(contentName?: string)` — dispara `fbq('track', 'Contact', { content_name })` de forma segura (verifica se `fbq` existe, não quebra em dev/SSR).

**2. `src/components/WhatsAppLink.tsx`** — componente reutilizável:
- Aceita `children`, `contentName` (rótulo do botão de origem, ex: "hero_cta", "pricing_mensal"), e demais props de `<a>`.
- `href` fixo no número oficial `https://wa.me/5547999385118`, `target="_blank"`, `rel="noopener noreferrer"`.
- No `onClick`: chama `trackContact(contentName)` antes de seguir o link, sem bloquear a navegação.

## O que será alterado

Substituir todos os `<a href="https://wa.me/...">` brutos por `<WhatsAppLink>` nos componentes:

- `src/components/landing/Hero.tsx` — CTA "Começar agora" → `contentName="hero_cta"`.
- `src/components/landing/Navbar.tsx` — CTA mobile "Começar agora" → `contentName="navbar_mobile_cta"`.
- `src/components/landing/Pricing.tsx` — 2 CTAs "Conversar com o Nutri Lian" → `contentName="pricing_mensal"` e `pricing_semestral`.
- `src/components/landing/FinalCTA.tsx` — CTA "Quero começar agora" → `contentName="final_cta"`.
- `src/components/landing/StickyMobileCTA.tsx` — CTA fixo mobile → `contentName="sticky_mobile"`.

Em cada caso, o `<Button asChild>` continua envolvendo o link — apenas o `<a>` interno vira `<WhatsAppLink>`. Estilo, ícones, texto e comportamento visual ficam idênticos.

## O que NÃO muda

- `index.html`: o Pixel base e o PageView automático permanecem como estão.
- Botões internos (âncoras `#como-funciona`, `#precos`, `#faq`, etc.) continuam como links comuns — sem evento adicional.
- Número de WhatsApp, textos dos botões, layout e animações: inalterados.

## Resultado esperado no Pixel Helper

- Em qualquer página: 1 evento **PageView**.
- Ao clicar em qualquer botão de WhatsApp: 1 evento **Contact** com `content_name` identificando a origem do clique (útil para otimização de campanha e relatórios).

## Atualização de memória

Após aplicar, atualizar `mem://analytics/meta-pixel` para refletir a implementação real (criação de `pixel.ts` + `WhatsAppLink` e mapeamento dos `content_name`).
