

# Corrigir tela branca em produção `/ofertawhats/`

## Causa-raiz identificada

Apesar do que foi informado, **`src/App.tsx` NÃO tem `basename="/ofertawhats"`** no `BrowserRouter`. Verifiquei o arquivo e fiz `search_files` por `basename` em todo `src/` — zero ocorrências.

Resultado em produção:
- Nginx serve `/ofertawhats/index.html`
- Vite injeta assets com `base: /ofertawhats/` → JS carrega ✅
- React monta, mas `BrowserRouter` lê `window.location.pathname = "/ofertawhats/"`
- A única rota definida é `path="/"` → não casa → renderiza `NotFound`
- `NotFound` usa `bg-muted` (cinza claro) sobre tema dark → visualmente parece "tela branca"

Isso explica 100% o sintoma sem nenhum componente quebrado. Não há erro de runtime nos componentes da landing — todos foram revisados e estão íntegros (sem `import.meta.env`, sem código que dependa de SSR ou de assets em path absoluto).

## Correção (1 arquivo)

### `src/App.tsx`
Adicionar `basename` ao `BrowserRouter`, lendo de `import.meta.env.BASE_URL` para funcionar tanto em dev (`/`) quanto em produção (`/ofertawhats/`) — e ficar imune a futuras mudanças do path:

```tsx
<BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, "") || "/"}>
```

Por que `import.meta.env.BASE_URL`:
- É exatamente o `base` configurado em `vite.config.ts`
- Evita acoplar o nome `/ofertawhats` em dois lugares
- Em dev vira `/`, em produção vira `/ofertawhats/` → strip do trailing slash final

## Verificação pós-deploy

1. Build + deploy normalmente
2. Acessar `https://lianfit.com.br/ofertawhats/` → landing renderiza
3. Console limpo (sem 404 de assets)
4. Botões CTA continuam apontando para WhatsApp

## Plano B (somente se ainda houver tela branca após a correção acima)

Se após o fix do basename a tela continuar branca, então sim existe um componente quebrando. Nesse caso, segundo passo:

1. Substituir temporariamente `src/pages/Index.tsx` por uma versão mínima (`<h1>OK</h1>`) para confirmar que o app monta
2. Reintroduzir os 14 componentes da landing em 2 lotes (estrutura primeiro: Navbar/Hero/Footer; depois o resto) até identificar o culpado
3. Corrigir e restaurar `Index.tsx` original

Esse plano B só será executado se o usuário confirmar que a correção do basename não resolveu — não vale alterar `Index.tsx` agora porque o problema mais provável é puramente de roteamento.

## Arquivos alterados

- **`src/App.tsx`** — adicionar `basename={import.meta.env.BASE_URL.replace(/\/$/, "") || "/"}` no `BrowserRouter`. Motivo: sem basename, em `/ofertawhats/` o Router não casa nenhuma rota e renderiza `NotFound`, dando aparência de tela branca.

Nada mais é tocado. `vite.config.ts`, `nginx.conf`, `index.html` e os componentes da landing permanecem como estão.

