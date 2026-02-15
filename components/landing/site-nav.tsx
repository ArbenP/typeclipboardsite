"use client";

import { Github, Keyboard, MenuIcon, X } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ExternalLinkButton from "./external-link-button";
import { cn } from "@/lib/utils";

function SiteNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen((open) => !open);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="group flex items-center gap-2">
            <Keyboard className="h-6 w-6 transition-transform duration-200 group-hover:rotate-6 motion-reduce:transition-none motion-reduce:transform-none" />
            <span className="text-lg font-bold">TypeClipboard</span>
          </Link>
          <nav className="hidden gap-6 lg:flex">
            <NavLinks />
          </nav>
          <div className="flex items-center gap-2">
            <div className="hidden lg:flex items-center gap-2">
              <ExternalLinkButton
                href="https://github.com/ArbenP/TypeClipboard"
                label="nav_github"
                size="icon"
                variant="ghost"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </ExternalLinkButton>
              <ExternalLinkButton
                href="https://github.com/ArbenP/TypeClipboard/releases"
                label="nav_download"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Download
              </ExternalLinkButton>
            </div>
            <button
              className="rounded-md p-2 hover:bg-accent/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:hidden"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>
      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="fixed inset-x-0 top-16 z-50 border-b bg-background p-4 shadow-lg lg:hidden motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-top-2 motion-safe:duration-200 motion-reduce:animate-none"
        >
          <div className="flex flex-col gap-4 pb-2">
            <NavLinks variant="mobile" onNavigate={closeMenu} />
            <div className="mt-4 flex flex-col gap-2">
              <ExternalLinkButton
                href="https://github.com/ArbenP/TypeClipboard"
                label="mobile_nav_github"
                className="w-full justify-start gap-2"
                onClick={closeMenu}
                variant="outline"
              >
                <Github className="h-4 w-4" /> GitHub
              </ExternalLinkButton>
              <ExternalLinkButton
                href="https://github.com/ArbenP/TypeClipboard/releases"
                label="mobile_nav_download"
                className="w-full justify-start"
                onClick={closeMenu}
              >
                Download
              </ExternalLinkButton>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SiteNav;

function NavLinks({
  variant = "desktop",
  onNavigate,
}: {
  variant?: "desktop" | "mobile";
  onNavigate?: () => void;
}) {
  const items = [
    { href: "#features", label: "Features" },
    { href: "#use-cases", label: "Use Cases" },
    { href: "#permissions", label: "Permissions" },
    { href: "#requirements", label: "Requirements" },
    { href: "#how-it-works", label: "How it Works" },
    { href: "#faq", label: "FAQ" },
  ];

  const baseLinkClasses =
    "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground";

  return (
    <>
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={() => onNavigate?.()}
          className={cn(
            baseLinkClasses,
            variant === "mobile" &&
              "w-full rounded-md bg-muted/40 px-3 py-2 text-left text-base font-semibold hover:bg-muted"
          )}
        >
          {item.label}
        </Link>
      ))}
    </>
  );
}
