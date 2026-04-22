import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import WhatsAppLink from "@/components/WhatsAppLink";

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden p-4 glass border-t border-subtle">
      <Button variant="hero" size="lg" className="w-full" asChild>
        <WhatsAppLink contentName="sticky_mobile">
          Quero começar agora <ArrowRight size={16} />
        </WhatsAppLink>
      </Button>
    </div>
  );
}
