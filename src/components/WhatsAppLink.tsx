import { forwardRef, type AnchorHTMLAttributes, type MouseEvent } from "react";
import { trackContact } from "@/lib/pixel";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  /** Optional label sent as content_name on the Contact event */
  contactLabel?: string;
};

/**
 * Anchor wrapper that fires the Meta Pixel "Contact" standard event
 * before navigating to WhatsApp (or any external contact link).
 */
const WhatsAppLink = forwardRef<HTMLAnchorElement, Props>(
  ({ onClick, contactLabel, target = "_blank", rel = "noopener noreferrer", ...rest }, ref) => {
    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
      trackContact(contactLabel ? { content_name: contactLabel } : undefined);
      onClick?.(e);
    };

    return <a ref={ref} target={target} rel={rel} onClick={handleClick} {...rest} />;
  }
);

WhatsAppLink.displayName = "WhatsAppLink";

export default WhatsAppLink;
