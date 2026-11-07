import { ArrowRight, ArrowUp, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { appLink, appRoutes, siteConfig } from "@/config/site";
import { Logo } from "./logo";

const index = [
  { number: "01", label: "Track", href: "#track" },
  { number: "02", label: "Understand", href: "#understand" },
  { number: "03", label: "Plan", href: "#plan" },
  { number: "04", label: "Insights", href: "#intelligence" },
  { number: "05", label: "More", href: "#privacy" },
  { number: "06", label: "Get started", href: "#faq" },
  { number: "07", label: "Questions", href: "#questions" },
];

export function SiteFooter() {
  return (
    <footer className="border-line bg-stage-soft text-ink dark:bg-surface border-t">
      <div className="container-page py-14 sm:py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <Logo />
            <p className="font-heading text-ink mt-8 max-w-[13ch] text-[clamp(2.4rem,4vw,3.5rem)] leading-[0.98] font-semibold tracking-[-0.05em]">
              Your month,
              <br />
              in one place.
            </p>
            <p className="text-ink-soft mt-5 max-w-[38ch] text-sm leading-relaxed sm:text-base">
              Income, expenses, budgets, shared spaces, and dues. One calm
              ledger for all of it.
            </p>
            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Button asChild size="lg">
                <a {...appLink}>
                  {siteConfig.appLabel}
                  <ArrowRight className="size-4" />
                </a>
              </Button>
              <p className="text-ink-soft text-sm">
                Already have an account?{" "}
                <a
                  href={appRoutes.signIn}
                  className="text-ink decoration-ink/25 hover:text-brand-strong hover:decoration-brand-strong focus-visible:ring-brand font-medium underline underline-offset-4 transition-colors focus-visible:ring-2 focus-visible:outline-none"
                >
                  Sign in
                </a>
              </p>
            </div>
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="text-ink-soft hover:text-ink focus-visible:ring-brand mt-6 inline-flex items-center gap-2 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:outline-none"
            >
              <Mail className="size-4" />
              {siteConfig.contactEmail}
            </a>
          </div>

          <nav aria-label="Page index" className="lg:col-span-5 lg:col-start-8">
            <p className="text-ink-soft text-xs font-medium tracking-[0.08em]">
              On this page
            </p>
            <ul className="lg:border-line mt-5 grid grid-cols-2 gap-x-6 gap-y-1 lg:grid-cols-1 lg:gap-y-0 lg:border-t">
              {index.map((item) => (
                <li key={item.number} className="lg:border-line lg:border-b">
                  <a
                    href={item.href}
                    aria-label={`${item.number} ${item.label}`}
                    className="group focus-visible:ring-brand flex items-baseline gap-3 py-3 focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-inset sm:gap-4 sm:py-3.5"
                  >
                    <span className="text-brand-strong dark:text-brand w-5 shrink-0 text-[11px] font-medium tabular-nums sm:w-6">
                      {item.number}
                    </span>
                    <span className="font-heading text-ink group-hover:text-brand-strong group-focus-visible:text-brand-strong text-base font-medium tracking-[-0.02em] transition-colors sm:text-lg lg:text-xl">
                      {item.label}
                    </span>
                    <ArrowRight className="text-ink-soft group-hover:text-brand-strong group-focus-visible:text-brand-strong ml-auto hidden size-4 shrink-0 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 sm:block" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="border-line mt-14 flex flex-col gap-5 border-t pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-ink-soft text-xs">
            © 2026 Ledg. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a
              href={appRoutes.privacy}
              className="text-ink-soft hover:text-ink focus-visible:ring-brand text-xs font-medium transition-colors focus-visible:ring-2 focus-visible:outline-none"
            >
              Privacy
            </a>
            <a
              href={appRoutes.terms}
              className="text-ink-soft hover:text-ink focus-visible:ring-brand text-xs font-medium transition-colors focus-visible:ring-2 focus-visible:outline-none"
            >
              Terms
            </a>
            <a
              href="#top"
              className="text-ink-soft hover:text-ink focus-visible:ring-brand inline-flex items-center gap-1.5 text-xs font-medium transition-colors focus-visible:ring-2 focus-visible:outline-none"
            >
              Back to top
              <ArrowUp className="size-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
