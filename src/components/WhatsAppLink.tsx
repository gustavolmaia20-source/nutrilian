import * as React from "react";
import { trackContact } from "@/lib/pixel";

const WHATSAPP_URL = "https://wa.me/5547999385118";

export interface WhatsAppLinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "target" | "rel"> {
  contentName?: string;
}

const WhatsAppLink = React.forwardRef<HTMLAnchorElement, WhatsAppLinkProps>(
  ({ contentName, onClick, children, ...props }, ref) => {
    const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
      trackContact(contentName);
      onClick?.(e);
    };

    return (
      <a
        ref={ref}
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        {...props}
      >
        {children}
      </a>
    );
  },
);
WhatsAppLink.displayName = "WhatsAppLink";

export default WhatsAppLink;
