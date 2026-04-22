/**
 * Meta Pixel helper.
 * O código base do Pixel é injetado em `index.html` e expõe `window.fbq`.
 * Estas funções disparam eventos de forma segura (no-op em dev/SSR).
 */

type FbqArgs = unknown[];

function fbqSafe(...args: FbqArgs) {
  if (typeof window === "undefined") return;
  const fbq = window.fbq;
  if (typeof fbq !== "function") return;
  try {
    fbq(...args);
  } catch (err) {
    // Silencioso — não quebra a navegação por erro do Pixel.
    console.warn("[pixel] erro ao disparar evento", err);
  }
}

export function trackPageView() {
  fbqSafe("track", "PageView");
}

export function trackContact(contentName?: string) {
  fbqSafe("track", "Contact", contentName ? { content_name: contentName } : {});
}
