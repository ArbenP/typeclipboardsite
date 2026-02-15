import ExternalLinkButton from "@/components/landing/external-link-button";
import SiteNav from "@/components/landing/site-nav";
import {
  CheckCircle2,
  ClipboardCopy,
  Keyboard,
  Settings,
  ShieldCheck,
  Terminal,
  Timer,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://typeclipboard.com";
const releaseUrl = "https://github.com/ArbenP/TypeClipboard/releases";
const repositoryUrl = "https://github.com/ArbenP/TypeClipboard";

const softwareApplicationJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "TypeClipboard",
  applicationCategory: "UtilityApplication",
  operatingSystem: "macOS",
  description:
    "TypeClipboard replays your clipboard as keyboard input so you can enter text in VNC, RDP, Citrix, and secure fields where paste is blocked.",
  url: siteUrl,
  downloadUrl: releaseUrl,
  codeRepository: repositoryUrl,
  softwareHelp: `${siteUrl}#faq`,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

const useCases = [
  {
    title: "Remote desktops",
    description:
      "Fill forms and commands in VNC, RDP, and Citrix sessions that block clipboard paste.",
  },
  {
    title: "Virtual machine consoles",
    description:
      "Send long credentials to BIOS, hypervisor, and console prompts where right-click paste is unavailable.",
  },
  {
    title: "Secure prompts",
    description:
      "Reliably enter one-time codes and long secrets into fields that only accept real keystrokes.",
  },
  {
    title: "Kiosk and legacy apps",
    description:
      "Work with software that disables paste or has inconsistent clipboard support.",
  },
];

const faqs = [
  {
    question: "Does TypeClipboard work in every secure field?",
    answer:
      "Most fields that accept normal typing will work. Some hardened prompts block all synthetic input, including accessibility APIs.",
  },
  {
    question: "How do I avoid typing into the wrong window?",
    answer:
      "Use the countdown before typing. It gives you time to focus the correct target window before keystrokes start.",
  },
  {
    question: "Can I tune typing speed for slow remote sessions?",
    answer:
      "Yes. Increase per-character delay for high-latency connections and lower it when target applications can keep up.",
  },
  {
    question: "Can I stop typing once it starts?",
    answer:
      "Yes. Press Escape or click Cancel Typing during countdown or active typing.",
  },
];

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex min-h-screen flex-col">
      <SiteNav />
      <main id="main-content" className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-40">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-3">
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary">
                    macOS Utility
                  </p>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Paste where you can&apos;t paste.
                  </h1>
                  <p className="max-w-[640px] text-gray-500 md:text-xl dark:text-gray-400">
                    TypeClipboard replays your clipboard as live keyboard input so
                    text works in VNC, RDP, Citrix, virtual consoles, and secure
                    fields.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <ExternalLinkButton
                    href={releaseUrl}
                    label="hero_download_macos"
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Download for macOS
                  </ExternalLinkButton>
                  <ExternalLinkButton
                    href={repositoryUrl}
                    label="hero_view_github"
                    size="lg"
                    variant="outline"
                  >
                    View on GitHub
                  </ExternalLinkButton>
                </div>
                <ul className="grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                  <li className="inline-flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" aria-hidden="true" />
                    Open source on GitHub
                  </li>
                  <li className="inline-flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" aria-hidden="true" />
                    MIT licensed
                  </li>
                  <li className="inline-flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" aria-hidden="true" />
                    No account required
                  </li>
                  <li className="inline-flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" aria-hidden="true" />
                    No app telemetry
                  </li>
                </ul>
              </div>
              <div className="hero-float mx-auto w-full lg:order-last motion-reduce:transform-none">
                <div className="relative aspect-video w-full">
                  <Image
                    src="/screenshot.png"
                    alt="TypeClipboard screenshot showing clipboard text controls and typing settings"
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="scroll-mt-24 w-full bg-gray-100 py-12 dark:bg-gray-800 md:py-24 lg:py-28"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm dark:bg-gray-700">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Designed for Remote Workflows
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                  Everything you need to input text into stubborn applications.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <FeatureCard
                icon={<ClipboardCopy className="h-10 w-10" />}
                title="Clipboard Capture"
                description="Capture clipboard content instantly into an editable buffer."
              />
              <FeatureCard
                icon={<Timer className="h-10 w-10" />}
                title="Adjustable Delay"
                description="Control typing speed and countdown to match target latency."
              />
              <FeatureCard
                icon={<Keyboard className="h-10 w-10" />}
                title="Live Typing"
                description="Simulate real keystrokes to bypass paste restrictions."
              />
              <FeatureCard
                icon={<ShieldCheck className="h-10 w-10" />}
                title="Secure Input"
                description="Uses macOS Accessibility permissions for reliable input delivery."
              />
              <FeatureCard
                icon={<Terminal className="h-10 w-10" />}
                title="Remote Ready"
                description="Built for VNC, RDP, Citrix, and virtual machine consoles."
              />
              <FeatureCard
                icon={<Settings className="h-10 w-10" />}
                title="Customizable"
                description="Toggle auto-capture, trailing Return key, and timing controls."
              />
            </div>
          </div>
        </section>

        <section id="use-cases" className="scroll-mt-24 w-full py-12 md:py-20 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Use Cases
              </h2>
              <p className="mt-3 text-gray-500 md:text-lg dark:text-gray-400">
                TypeClipboard is built for workflows where clipboard paste is blocked,
                unreliable, or missing entirely.
              </p>
            </div>
            <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-2">
              {useCases.map((useCase) => (
                <div
                  key={useCase.title}
                  className="rounded-lg border bg-card p-5 text-card-foreground"
                >
                  <h3 className="text-lg font-semibold">{useCase.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="scroll-mt-24 w-full py-12 md:py-20 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  How it Works
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                  Three quick steps to type anywhere.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 lg:grid-cols-3">
              <StepCard
                number="1"
                title="Capture"
                description="Copy text to your clipboard and click Capture in TypeClipboard."
              />
              <StepCard
                number="2"
                title="Prepare"
                description="Set delay and countdown, then focus the destination window."
              />
              <StepCard
                number="3"
                title="Type"
                description="Click Type Now and let the app send your text as real keystrokes."
              />
            </div>
          </div>
        </section>

        <section
          id="permissions"
          className="scroll-mt-24 w-full border-y bg-gray-50 py-12 dark:bg-gray-900/50 md:py-20 lg:py-24"
        >
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1.1fr,1fr]">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Permissions and First Run
                </h2>
                <p className="mt-3 text-gray-500 md:text-lg dark:text-gray-400">
                  TypeClipboard uses macOS Accessibility APIs to generate keystrokes.
                  On first run, you need to grant one permission.
                </p>
                <ol className="mt-6 space-y-3 text-sm text-muted-foreground md:text-base">
                  <li>1. Launch the app and click Open Settings in the permission banner.</li>
                  <li>
                    2. In Privacy &amp; Security &gt; Accessibility, enable TypeClipboard.
                  </li>
                  <li>3. Restart the app so macOS applies the permission.</li>
                </ol>
              </div>
              <div className="rounded-lg border bg-background p-6">
                <h3 className="text-xl font-semibold">What to Expect</h3>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground md:text-base">
                  <li className="inline-flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" aria-hidden="true" />
                    Manual capture and auto-capture options
                  </li>
                  <li className="inline-flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" aria-hidden="true" />
                    Countdown and per-character delay controls
                  </li>
                  <li className="inline-flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" aria-hidden="true" />
                    Escape-to-cancel and optional trailing Return key
                  </li>
                </ul>
                <p className="mt-5 text-sm text-muted-foreground">
                  Looking for setup details? See the full usage guide in the
                  repository README.
                </p>
                <Link
                  href={`${repositoryUrl}#first-run--permissions`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm font-medium text-primary underline-offset-4 hover:underline"
                >
                  Open setup guide
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="requirements" className="scroll-mt-24 w-full py-12 md:py-20 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl rounded-xl border bg-card p-6 md:p-8">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Requirements
              </h2>
              <p className="mt-3 text-muted-foreground">
                TypeClipboard runs locally on macOS and does not require a cloud
                account. Make sure your environment meets these baseline
                requirements before first use.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <RequirementCard
                  title="Operating System"
                  value="macOS 13 Ventura or newer"
                />
                <RequirementCard
                  title="Permissions"
                  value="Accessibility permission enabled for TypeClipboard"
                />
                <RequirementCard
                  title="Distribution"
                  value="Downloadable prebuilt .app from GitHub Releases"
                />
                <RequirementCard
                  title="Best Fit"
                  value="Targets that accept standard keyboard input events"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="scroll-mt-24 w-full py-12 md:py-20 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="mx-auto mt-10 grid max-w-3xl gap-4">
              {faqs.map((faq) => (
                <details key={faq.question} className="rounded-lg border bg-card p-5">
                  <summary className="cursor-pointer text-base font-semibold marker:text-primary">
                    {faq.question}
                  </summary>
                  <p className="mt-3 text-sm text-muted-foreground md:text-base">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationJsonLd) }}
        />
      </main>
      <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 md:px-6 sm:flex-row">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © {currentYear} TypeClipboard. Licensed under MIT License.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a
            className="text-xs underline-offset-4 hover:underline"
            href={repositoryUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </a>
          <a
            className="text-xs underline-offset-4 hover:underline"
            href={`${repositoryUrl}/blob/main/LICENSE`}
            rel="noopener noreferrer"
            target="_blank"
          >
            MIT License
          </a>
        </nav>
      </footer>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm">
      <div className="rounded-full bg-primary/10 p-2 text-primary">{icon}</div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-center text-sm text-gray-500 dark:text-gray-400">
        {description}
      </p>
    </div>
  );
}

function StepCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
        {number}
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-center text-gray-500 dark:text-gray-400">{description}</p>
    </div>
  );
}

function RequirementCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-lg border bg-background p-4">
      <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-muted-foreground">
        {title}
      </h3>
      <p className="mt-2 text-base font-medium">{value}</p>
    </div>
  );
}
