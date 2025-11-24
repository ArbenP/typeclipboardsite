"use client";

import SiteNav from "@/components/landing/site-nav";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ClipboardCopy, Keyboard, Timer, ShieldCheck, Terminal, Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteNav />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Paste where you can&apos;t paste.
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    TypeClipboard replays your clipboard as live keyboard input. Perfect for VNC, RDP, virtual consoles, and secure fields.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="https://github.com/ArbenP/TypeClipboard/releases" target="_blank">
                    <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                      Download for macOS
                    </Button>
                  </Link>
                  <Link href="https://github.com/ArbenP/TypeClipboard" target="_blank">
                    <Button size="lg" variant="outline">
                      View on GitHub
                    </Button>
                  </Link>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: [0, -15, 0] }}
                transition={{ 
                  opacity: { duration: 0.5 },
                  y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                }}
                className="mx-auto w-full lg:order-last"
              >
                <div className="relative aspect-video w-full">
                    <Image
                      src="/screenshot.png"
                      alt="TypeClipboard Screenshot"
                      fill
                      className="object-contain drop-shadow-2xl"
                      priority
                    />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm dark:bg-gray-700">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Designed for Remote Workflows
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Everything you need to input text into stubborn applications.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <FeatureCard
                icon={<ClipboardCopy className="h-10 w-10" />}
                title="Clipboard Capture"
                description="Instantly capture your clipboard content into an editable buffer."
              />
              <FeatureCard
                icon={<Timer className="h-10 w-10" />}
                title="Adjustable Delay"
                description="Control typing speed and countdown to match target latency."
              />
              <FeatureCard
                icon={<Keyboard className="h-10 w-10" />}
                title="Live Typing"
                description="Simulates real keystrokes to bypass paste restrictions."
              />
              <FeatureCard
                icon={<ShieldCheck className="h-10 w-10" />}
                title="Secure Input"
                description="Works with macOS Accessibility permissions to ensure reliable input."
              />
              <FeatureCard
                icon={<Terminal className="h-10 w-10" />}
                title="Remote Ready"
                description="Ideal for VNC, RDP, Citrix, and virtual machine consoles."
              />
              <FeatureCard
                icon={<Settings className="h-10 w-10" />}
                title="Customizable"
                description="Toggle auto-capture, trailing Return key, and more."
              />
            </div>
          </div>
        </section>

        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  How it Works
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Three simple steps to type anywhere.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 lg:grid-cols-3">
                <StepCard number="1" title="Capture" description="Copy text to your clipboard and click Capture in TypeClipboard." />
                <StepCard number="2" title="Prepare" description="Set your delay and countdown. Focus the target window." />
                <StepCard number="3" title="Type" description="Click Type Now. The app will type your text automatically." />
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2025 TypeClipboard. Licensed under MIT License.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="https://github.com/ArbenP/TypeClipboard">
            GitHub
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="https://github.com/ArbenP/TypeClipboard/blob/main/LICENSE">
            MIT License
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex flex-col items-center space-y-2 border p-6 rounded-lg shadow-sm bg-background">
      <div className="p-2 bg-primary/10 rounded-full text-primary">
        {icon}
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
        {description}
      </p>
    </div>
  );
}

function StepCard({ number, title, description }: { number: string; title: string; description: string }) {
    return (
        <div className="flex flex-col items-center space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white text-xl font-bold">
                {number}
            </div>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-center text-gray-500 dark:text-gray-400">
                {description}
            </p>
        </div>
    )
}
