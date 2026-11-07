import {
  ArrowDownLeft,
  ArrowLeftRight,
  ArrowRight,
  ArrowUpRight,
  Bus,
  ChartPie,
  Coins,
  House,
  Utensils,
  Wallet,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { appLink, siteConfig } from "@/config/site";
import { PhoneFrame } from "./phone-frame";
import { SectionLabel } from "./section-label";
import { FeatureColumn, SectionHeading } from "./section-heading";

const categories = [
  {
    icon: House,
    label: "Rent",
    amount: "Rs. 28,170",
    value: 34,
    count: 1,
    color: "#B02586",
  },
  {
    icon: Utensils,
    label: "Food",
    amount: "Rs. 21,540",
    value: 26,
    count: 12,
    color: "#E8590C",
  },
  {
    icon: Bus,
    label: "Transport",
    amount: "Rs. 16,570",
    value: 20,
    count: 8,
    color: "#1971C2",
  },
  {
    icon: Coins,
    label: "Other",
    amount: "Rs. 16,570",
    value: 20,
    count: 6,
    color: "#868E96",
  },
];

export function UnderstandSection() {
  return (
    <section id="understand" className="section-space pt-0 sm:pt-0 lg:pt-0">
      <div className="container-page">
        <div className="max-w-2xl">
          <SectionLabel number="02">Understand</SectionLabel>
          <SectionHeading>
            See the month, not just the transactions.
          </SectionHeading>
          <p className="text-ink-soft mt-5 max-w-[52ch] text-base leading-relaxed sm:text-lg">
            Income and expenses sit side by side, with net saved, category
            breakdown, and a clear read on what changed. No spreadsheet
            archaeology.
          </p>
          <Button asChild variant="secondaryLight" className="mt-6">
            <a {...appLink}>
              {siteConfig.appLabel}
              <ArrowRight className="size-4" />
            </a>
          </Button>
        </div>

        <div className="bg-stage mt-12 rounded-[2rem] p-5 sm:rounded-[2.5rem] sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="order-2 min-w-0 space-y-4 lg:order-1 lg:col-span-7">
              <div className="bg-brand-strong shadow-brand-strong/20 rounded-[2rem] p-5 text-white shadow-lg sm:p-6 dark:bg-emerald-600">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold tracking-wider text-white/80 uppercase">
                      Net saved
                    </p>
                    <p className="mt-1.5 text-3xl font-black tracking-tight tabular-nums sm:text-4xl">
                      Rs. 48,050
                    </p>
                    <p className="mt-1 text-[0.7rem] font-medium text-white/70">
                      This month · loans excluded
                    </p>
                  </div>
                  <span className="hidden size-10 shrink-0 place-items-center rounded-2xl bg-white/15 text-white min-[360px]:grid">
                    <Wallet className="size-5" />
                  </span>
                </div>

                <div className="mt-5 grid grid-cols-1 gap-3 min-[360px]:grid-cols-2">
                  <div className="rounded-3xl bg-white/10 p-3.5 backdrop-blur-md">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-white/85">
                      <span className="grid size-6 place-items-center rounded-full bg-emerald-400/25 text-emerald-200">
                        <ArrowDownLeft className="size-3.5" />
                      </span>
                      Income
                    </div>
                    <p className="mt-2 text-lg font-extrabold tabular-nums">
                      Rs. 130,900
                    </p>
                    <p className="text-[0.65rem] font-medium text-white/70">
                      this month
                    </p>
                  </div>

                  <div className="rounded-3xl bg-white/10 p-3.5 backdrop-blur-md">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-white/85">
                      <span className="grid size-6 place-items-center rounded-full bg-rose-400/25 text-rose-200">
                        <ArrowUpRight className="size-3.5" />
                      </span>
                      Spent
                    </div>
                    <p className="mt-2 text-lg font-extrabold tabular-nums">
                      Rs. 82,850
                    </p>
                    <p className="text-[0.65rem] font-medium text-white/70">
                      this month
                    </p>
                  </div>
                </div>
              </div>

              <Card className="p-5 sm:p-6">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-ink-mute text-xs font-semibold tracking-wider uppercase">
                    Spending by category
                  </p>
                  <ChartPie className="text-ink-mute size-4" />
                </div>

                <div className="mt-4 space-y-4">
                  {categories.map((category) => (
                    <div
                      key={category.label}
                      className="flex items-center gap-3"
                    >
                      <span
                        className="grid size-10 shrink-0 place-items-center rounded-2xl"
                        style={{
                          backgroundColor: `${category.color}1f`,
                          color: category.color,
                        }}
                      >
                        <category.icon className="size-4.5" strokeWidth={2.2} />
                      </span>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-baseline justify-between gap-2">
                          <p className="text-ink truncate text-sm font-medium">
                            {category.label}
                          </p>
                          <p className="text-ink shrink-0 text-sm font-semibold tabular-nums">
                            {category.amount}
                          </p>
                        </div>
                        <div className="mt-1 flex items-center gap-2">
                          <div className="bg-muted/60 h-1.5 flex-1 overflow-hidden rounded-full">
                            <div
                              className="h-full rounded-full"
                              style={{
                                width: `${category.value}%`,
                                backgroundColor: category.color,
                              }}
                            />
                          </div>
                          <span className="text-ink-mute w-8 shrink-0 text-right text-[10px] font-medium tabular-nums">
                            {category.value}%
                          </span>
                        </div>
                        <p className="text-ink-mute mt-0.5 text-xs">
                          {category.count}{" "}
                          {category.count === 1
                            ? "transaction"
                            : "transactions"}{" "}
                          · tap to explore
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            <div className="order-1 flex justify-center lg:order-2 lg:col-span-5">
              <PhoneFrame
                src="/app/transactions-list.webp"
                alt="Ledg activity screen showing search, filters, and transactions grouped by day"
                className="w-[240px] sm:w-[280px]"
                sizes="(max-width: 640px) 240px, 280px"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          <FeatureColumn icon={ArrowLeftRight} title="Income + expenses">
            Both are first-class, so the balance tells the truth about your
            month.
          </FeatureColumn>
          <FeatureColumn icon={Wallet} title="Net saved">
            See what is left after spending, before loans muddy the picture.
          </FeatureColumn>
          <FeatureColumn icon={ChartPie} title="Category breakdown">
            Tap any category to see the transactions behind it.
          </FeatureColumn>
        </div>
      </div>
    </section>
  );
}
