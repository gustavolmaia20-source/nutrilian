import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden p-4 glass border-t border-subtle">
      <Button variant="hero" size="lg" className="w-full" asChild>
        <a href="https://wa.me/5547996182395?text=Ol%C3%A1%2C%20vim%20de%20um%20anuncio%20e%20quero%20come%C3%A7ar%20a%20evoluir%20de%20verdade" target="_blank" rel="noopener noreferrer">
          Quero começar agora <ArrowRight size={16} />
        </a>
      </Button>
    </div>
  );
}
