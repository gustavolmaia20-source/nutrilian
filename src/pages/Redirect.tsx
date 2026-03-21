import { useEffect } from "react";

const WA_LINK = "https://wa.me/5547999385118";

export default function Redirect() {
  useEffect(() => {
    // Fire Meta Pixel ViewContent event
    window.fbq?.("track", "ViewContent");
    // Redirect after a tiny delay to ensure pixel fires
    const timer = setTimeout(() => {
      window.location.href = WA_LINK;
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <p className="text-muted-foreground text-lg animate-pulse">Redirecionando para o WhatsApp…</p>
    </div>
  );
}
