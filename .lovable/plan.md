# Atualizar número do WhatsApp em todos os CTAs

Substituir o número antigo `5547999385118` pelo novo `5547996182395` em todas as 7 ocorrências encontradas no projeto.

## Arquivos a alterar

| Arquivo | Linhas |
|---|---|
| `src/components/landing/FinalCTA.tsx` | 28 |
| `src/components/landing/Hero.tsx` | 28 |
| `src/components/landing/Navbar.tsx` | 67 |
| `src/components/landing/Pricing.tsx` | 5, 55, 99 |
| `src/components/landing/StickyMobileCTA.tsx` | 8 |

Em todos os casos, troca pontual de `https://wa.me/5547999385118` para `https://wa.me/5547996182395`. Nenhuma outra lógica é tocada.

## Observação

O arquivo `Pricing.tsx` tem uma constante `WA_LINK` declarada mas não usada — os `<a>` repetem o link literal. Vou apenas atualizar o valor da constante e os literais para o novo número, sem refatorar (mantém o escopo mínimo). Se quiser depois eu centralizo todos os 7 usos numa única constante compartilhada.
