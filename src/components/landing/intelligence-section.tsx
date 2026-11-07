import {
  ArrowDownLeft,
  ArrowRight,
  ArrowUpRight,
  HeartPulse,
  House,
  Lightbulb,
  Receipt,
  RefreshCw,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { appLink, siteConfig } from "@/config/site";
import { SavingsRing, TrendChart } from "./charts";
import { SectionLabel } from "./section-label";
import { SectionHeading } from "./section-heading";

const recurring = [
  {
    icon: House,
    name: "Rent",
    category: "Rent",
    count: 3,
    amount: "Rs. 8,200",
    color: "#B02586",
  },
  {
    icon: Receipt,
    name: "Internet",
    category: "Bills",
    count: 3,
    amount: "Rs. 1,199",
    color: "#D97706",
  },
  {
    icon: HeartPulse,
    name: "Gym",
    category: "Health",
    count: 3,
    amount: "Rs. 2,000",
    color: "#E03131",
  },
];

export function IntelligenceSection() {
  return (
    <section id="intelligence" className="section-space pt-0 sm:pt-0 lg:pt-0">
      <div className="container-page">
        <div className="bg-night relative overflow-hidden rounded-[2rem] px-5 py-12 text-white sm:rounded-[2.5rem] sm:px-8 sm:py-16 lg:px-14">
          <div
            aria-hidden
            className="bg-brand/15 absolute -top-28 -right-24 size-96 rounded-full blur-[110px]"
          />
          <div
            aria-hidden
            className="absolute -bottom-32 left-1/4 size-80 rounded-full bg-emerald-300/[0.06] blur-[110px]"
          />

          <div className="relative max-w-2xl">
            <SectionLabel number="04" tone="dark">
              Insights
            </SectionLabel>
            <SectionHeading className="text-white">
              The month, explained.
            </SectionHeading>
            <p className="mt-5 max-w-[52ch] text-base leading-relaxed text-white/60 sm:text-lg">
              Savings rate, category breakdown, quick observations, and
              recurring charges. Insights reads income and expenses together, so
              the picture is complete. Loans stay out of it.
            </p>
            <Button asChild variant="whiteOnDark" className="mt-7">
              <a {...appLink}>
                {siteConfig.appLabel}
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>

          <div className="relative mt-12 grid gap-4 lg:grid-cols-12">
            <div className="min-w-0 space-y-4 lg:col-span-5">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <Card variant="dark" className="p-3 sm:p-4">
                  <span className="grid size-10 place-items-center rounded-2xl bg-emerald-400/15 text-emerald-300">
                    <ArrowDownLeft className="size-5" />
                  </span>
                  <p className="mt-3 text-xs text-white/55">Income</p>
                  <p className="text-base font-bold text-white tabular-nums sm:text-lg">
                    Rs. 130,900
                  </p>
                  <div className="mt-1 flex flex-wrap items-center gap-1.5">
                    <span className="inline-flex items-center gap-0.5 rounded-full bg-emerald-400/15 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-300">
                      <TrendingUp className="size-2.5" />
                      31%
                    </span>
                    <span className="text-[10px] text-white/40">
                      vs last month
                    </span>
                  </div>
                </Card>

                <Card variant="dark" className="p-3 sm:p-4">
                  <span className="grid size-10 place-items-center rounded-2xl bg-rose-400/15 text-rose-300">
                    <ArrowUpRight className="size-5" />
                  </span>
                  <p className="mt-3 text-xs text-white/55">Expenses</p>
                  <p className="text-base font-bold text-white tabular-nums sm:text-lg">
                    Rs. 82,850
                  </p>
                  <div className="mt-1 flex flex-wrap items-center gap-1.5">
                    <span className="inline-flex items-center gap-0.5 rounded-full bg-rose-400/15 px-1.5 py-0.5 text-[10px] font-semibold text-rose-300">
                      <TrendingDown className="size-2.5" />
                      78%
                    </span>
                    <span className="text-[10px] text-white/40">
                      vs last month
                    </span>
                  </div>
                </Card>
              </div>

              <Card variant="dark" className="p-5">
                <div className="flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-xs font-semibold tracking-wider text-white/45 uppercase">
                      Savings rate
                    </p>
                    <p className="mt-1 text-3xl font-extrabold text-white tabular-nums">
                      37%
                    </p>
                    <p className="mt-1 text-xs text-white/50">
                      of income saved this month
                    </p>
                  </div>
                  <SavingsRing
                    saved={48_050}
                    spent={82_850}
                    className="size-16 sm:size-20"
                    trackClassName="stroke-white/15"
                  >
                    <span className="text-[10px] font-bold text-white/60">
                      37%
                    </span>
                  </SavingsRing>
                </div>

                <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 border-t border-white/10 pt-3">
                  <span className="flex items-center gap-1.5 text-[10px] text-white/50">
                    <span className="bg-success size-2.5 rounded-full" />
                    Saved Rs. 48,050
                  </span>
                  <span className="flex items-center gap-1.5 text-[10px] text-white/50">
                    <span className="bg-destructive size-2.5 rounded-full" />
                    Spent Rs. 82,850
                  </span>
                </div>
              </Card>

              <Card variant="dark" className="p-5">
                <div className="flex items-center gap-2">
                  <span className="bg-brand/15 text-brand grid size-8 place-items-center rounded-xl">
                    <Lightbulb className="size-4" />
                  </span>
                  <p className="text-xs font-semibold tracking-wider text-white/45 uppercase">
                    Quick Insights
                  </p>
                </div>
                <div className="mt-3 space-y-2.5">
                  <p className="text-sm leading-snug text-white/80">
                    Food is 26% of spending this month, up from 21% last month.
                  </p>
                  <p className="text-sm leading-snug text-white/80">
                    Rent is your largest category at Rs. 28,170.
                  </p>
                </div>
                <p className="mt-3 text-[11px] leading-relaxed text-white/35">
                  Built from your own transactions. Loans excluded.
                </p>
              </Card>
            </div>

            <div className="min-w-0 space-y-4 lg:col-span-7">
              <Card variant="dark" className="p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span className="grid size-9 place-items-center rounded-2xl bg-emerald-400/15 text-emerald-300">
                      <TrendingUp className="size-4" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        Income vs expense
                      </p>
                      <p className="text-[11px] text-white/40">
                        Peak Rs. 88.5K
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-[10px] text-white/45">
                    <span className="flex items-center gap-1">
                      <span className="bg-success size-2 rounded-full" />
                      Income
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="bg-destructive size-2 rounded-full" />
                      Expense
                    </span>
                  </div>
                </div>
                <TrendChart className="mt-4" />
              </Card>

              <Card variant="dark" padded={false} className="overflow-hidden">
                <div className="flex items-center gap-2 px-5 pt-5 pb-3">
                  <RefreshCw className="size-4 text-white/45" />
                  <p className="text-xs font-semibold tracking-wider text-white/45 uppercase">
                    Recurring
                  </p>
                </div>

                <div className="flex flex-col gap-1 border-y border-white/10 px-5 py-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs text-white/50">
                    3 recurring patterns detected
                  </p>
                  <p className="text-sm font-semibold text-white tabular-nums">
                    ~Rs. 11,399/avg
                  </p>
                </div>

                <div className="divide-y divide-white/10">
                  {recurring.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center gap-3 px-5 py-3"
                    >
                      <span
                        className="grid size-9 shrink-0 place-items-center rounded-2xl"
                        style={{
                          backgroundColor: `${item.color}22`,
                          color: item.color,
                        }}
                      >
                        <item.icon className="size-4" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-white">
                          {item.name}
                        </p>
                        <p className="truncate text-xs text-white/40">
                          {item.count}× · {item.category}
                        </p>
                      </div>
                      <div className="shrink-0 text-right">
                        <p className="text-xs font-semibold text-white tabular-nums sm:text-sm">
                          {item.amount}
                        </p>
                        <p className="text-[10px] text-white/40">avg/time</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
