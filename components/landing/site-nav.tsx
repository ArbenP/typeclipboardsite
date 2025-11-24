"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Keyboard, MenuIcon, Github } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";

function SiteNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2" prefetch={false}>
            <motion.div
              whileHover={{ rotate: 10 }}
              transition={{ duration: 0.2 }}
            >
              <Keyboard className="h-6 w-6" />
            </motion.div>
            <span className="text-lg font-bold">TypeClipboard</span>
          </Link>
          <nav className="hidden gap-6 md:flex">
            <NavLinks />
          </nav>
          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-2">
              <Link href="https://github.com/ArbenP/TypeClipboard" target="_blank">
                <Button variant="ghost" size="icon">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://github.com/ArbenP/TypeClipboard/releases" target="_blank">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Download
                </Button>
              </Link>
            </div>
            <button className="md:hidden" onClick={toggleMenu}>
              <MenuIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed inset-x-0 top-16 z-50 bg-background border-b p-4 shadow-lg"
          >
            <div className="flex flex-col gap-4">
              <NavLinks />
              <div className="flex flex-col gap-2 mt-4">
                 <Link href="https://github.com/ArbenP/TypeClipboard" target="_blank" className="w-full">
                    <Button variant="outline" className="w-full justify-start gap-2">
                        <Github className="h-4 w-4" /> GitHub
                    </Button>
                 </Link>
                 <Link href="https://github.com/ArbenP/TypeClipboard/releases" target="_blank" className="w-full">
                    <Button className="w-full">Download</Button>
                 </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default SiteNav;

function NavLinks() {
  return (
    <>
      <Link
        href="#features"
        className="text-sm font-medium hover:text-primary transition-colors"
      >
        Features
      </Link>
      <Link
        href="#how-it-works"
        className="text-sm font-medium hover:text-primary transition-colors"
      >
        How it Works
      </Link>
    </>
  );
}
