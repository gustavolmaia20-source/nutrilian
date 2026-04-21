// Meta Pixel helper utilities.
// PageView is fired globally in index.html on every page load.
// Use trackContact() on WhatsApp / external contact buttons to fire the
// standard "Contact" event (https://www.facebook.com/business/help/402791146561655).

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackContact(params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  try {
    window.fbq?.("track", "Contact", params);
  } catch {
    // no-op: never break UX for analytics
  }
}
