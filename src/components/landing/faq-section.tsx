import Image from "next/image";
import { ArrowRight, ArrowUpRight, Mail, Plus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { appLink, siteConfig } from "@/config/site";
import { SectionLabel } from "./section-label";
import { SectionHeading } from "./section-heading";

const faqs = [
  {
    question: "What is Ledg?",
    answer:
      "A personal finance tracker for income and expenses. It covers day-to-day transactions, monthly budgets, shared spaces, dues and loans, and analytics, all in one web app.",
  },
  {
    question: "Do I need to install anything?",
    answer:
      "No. Ledg runs in your browser. Open the link, sign in or sign up, and use it on your phone or desktop.",
  },
  {
    question: "Does Ledg connect to my bank?",
    answer:
      "No. Ledg is built around manual entry, which keeps bank credentials out of the app and keeps you close to what you spend. There is no bank sync.",
  },
  {
    question: "Can I track income as well as expenses?",
    answer:
      "Yes. Income and expenses are both first-class. Insights reports them together, including a savings rate, while loans are excluded from the totals.",
  },
  {
    question: "Can I share a ledger with someone?",
    answer:
      "Yes. Shared spaces support owner and member roles. Invite people by email or @username. Owners manage the space and its monthly budget; members can add transactions and edit their own.",
  },
  {
    question: "Can I get my data out?",
    answer:
      "Yes. Export every transaction as CSV, or take a full JSON backup of spaces and transactions. You can also import a CSV or JSON file; imports need at least Date, Type, Category and Amount.",
  },
  {
    question: "Which currency does Ledg use?",
    answer:
      "Ledg is INR-first: amounts are in rupees and use Indian formatting. Multi-currency is not supported.",
  },
  {
    question: "Does Ledg work offline?",
    answer:
      "No. Ledg is a web app and needs a connection. There is no offline mode yet.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="bg-night text-white">
      <div className="container-page py-20 sm:py-28 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionLabel number="06" tone="dark">
              Get started
            </SectionLabel>
            <h2 className="font-heading mt-5 max-w-[16ch] text-[clamp(2.6rem,4.4vw,3.75rem)] leading-[0.98] font-semibold tracking-[-0.05em] text-white">
              Your money, in five seconds.
            </h2>
            <p className="mt-5 max-w-[46ch] text-base leading-relaxed text-white/60 sm:text-lg">
              Open Ledg, sign in or sign up, and log the next thing you spend.
              The whole month follows.
            </p>
            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Button asChild variant="brandOnDark" size="lg">
                <a {...appLink}>
                  {siteConfig.appLabel}
                  <ArrowRight className="size-4" />
                </a>
              </Button>
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="focus-visible:ring-brand inline-flex items-center gap-2 text-sm text-white/55 transition-colors hover:text-white focus-visible:ring-2 focus-visible:outline-none"
              >
                <Mail className="size-4" />
                {siteConfig.contactEmail}
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 lg:justify-self-end">
            <div className="flex items-center gap-4 rounded-3xl bg-white/[0.06] p-4 ring-1 ring-white/10 sm:gap-5 sm:p-5">
              <div className="shrink-0 rounded-2xl bg-white p-2">
                <Image
                  src="/app-qr.png"
                  alt="QR code to open Ledg"
                  width={240}
                  height={240}
                  className="size-28 rounded-lg sm:size-32"
                />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium text-white">
                  Scan to open Ledg
                </p>
                <p className="mt-1 text-xs leading-relaxed text-white/50">
                  Point your camera at the code, or use the button.
                </p>
                <p className="mt-3 text-[11px] break-all text-white/35">
                  ledg.rakeshpatel.me
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          id="questions"
          className="mt-20 grid scroll-mt-28 gap-12 border-t border-white/10 pt-16 lg:grid-cols-12 lg:gap-16"
        >
          <div className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
            <SectionLabel number="07" tone="dark">
              Questions
            </SectionLabel>
            <SectionHeading className="text-white">
              Good questions, straight answers.
            </SectionHeading>
            <p className="mt-5 max-w-[32ch] text-sm leading-relaxed text-white/55">
              Everything you might want to know before you open the app.
            </p>
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="focus-visible:ring-brand mt-6 inline-flex items-center gap-2 text-sm font-medium text-white/60 transition-colors hover:text-white focus-visible:ring-2 focus-visible:outline-none"
            >
              Still curious? {siteConfig.contactEmail}
              <ArrowUpRight className="size-4" />
            </a>
          </div>

          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={faq.question}
                  value={`faq-${index}`}
                  className="border-white/10"
                >
                  <AccordionTrigger className="group/faq focus-visible:ring-brand py-5 text-white hover:no-underline focus-visible:ring-2 **:data-[slot=accordion-trigger-icon]:hidden sm:py-6">
                    <span className="flex flex-1 items-start gap-4 pr-4">
                      <span className="mt-1 text-[11px] text-white/30 tabular-nums">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-heading text-left text-base font-medium tracking-[-0.02em] text-white sm:text-lg">
                        {faq.question}
                      </span>
                    </span>
                    <span className="group-aria-expanded/faq:border-brand group-aria-expanded/faq:text-brand grid size-8 shrink-0 place-items-center rounded-full border border-white/15 text-white/60 transition-transform duration-200 group-aria-expanded/faq:rotate-45">
                      <Plus className="size-4" />
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="max-w-[62ch] pb-6 pl-0 text-sm leading-relaxed text-white/55 sm:pl-8 sm:text-[15px]">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
