"use client";

import type { ButtonProps } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import { trackCtaClick } from "@/lib/analytics";

type ExternalLinkButtonProps = {
  children: React.ReactNode;
  className?: string;
  href: string;
  label: string;
  onClick?: () => void;
  size?: ButtonProps["size"];
  variant?: ButtonProps["variant"];
};

export default function ExternalLinkButton({
  children,
  className,
  href,
  label,
  onClick,
  size = "default",
  variant = "default",
}: ExternalLinkButtonProps) {
  return (
    <Button size={size} variant={variant} className={className} asChild>
      <a
        href={href}
        rel="noopener noreferrer"
        target="_blank"
        onClick={() => {
          onClick?.();
          trackCtaClick("cta_click", {
            destination: href,
            label,
          });
        }}
      >
        {children}
      </a>
    </Button>
  );
}
