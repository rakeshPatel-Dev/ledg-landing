import {
  ArrowDownLeft,
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  HandCoins,
  Target,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { appLink, siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { BudgetBar } from "./charts";
import { PhoneFrame } from "./phone-frame";
import { SectionLabel } from "./section-label";
import { FeatureColumn, SectionHeading } from "./section-heading";

const budgets = [
  {
    label: "Household",
    color: "#E03131",
    spent: 62_850,
    budget: 60_000,
    spentLabel: "Rs. 62,850",
    budgetLabel: "Rs. 60,000",
    percent: 105,
    over: true,
  },
  {
    label: "Goa Trip",
    color: "#0EA5E9",
    spent: 18_500,
    budget: 40_000,
    spentLabel: "Rs. 18,500",
    budgetLabel: "Rs. 40,000",
    percent: 46,
    over: false,
  },
];

const members = [
  { initials: "AG", name: "Anita Gurung", role: "Owner" },
  { initials: "BT", name: "Bikash Thapa", role: "Member" },
  { initials: "SS", name: "Suman Shrestha", role: "Member" },
];

export function PlanSection() {
  return (
    <section id="plan" className="section-space pt-0 sm:pt-0 lg:pt-0">
      <div className="container-page">
        <div className="max-w-2xl">
          <SectionLabel number="03">Plan</SectionLabel>
          <SectionHeading>Give every rupee a job.</SectionHeading>
          <p className="text-ink-soft mt-5 max-w-[52ch] text-base leading-relaxed sm:text-lg">
            Set a monthly budget for each space, track what you lend and borrow,
            and share a ledger with the people who spend alongside you. No
            spreadsheet, no guessing.
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
            <div className="order-2 min-w-0 space-y-4 lg:order-1 lg:col-span-5">
              <Card className="p-5">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-ink-mute text-xs font-semibold tracking-wider uppercase">
                    Monthly budget
                  </p>
                  <span className="text-ink-mute text-[11px]">Per space</span>
                </div>

                <div className="mt-4 space-y-5">
                  {budgets.map((budget) => (
                    <div key={budget.label}>
                      <div className="flex items-center justify-between gap-3 text-xs">
                        <span className="text-ink flex min-w-0 items-center gap-2 font-semibold">
                          <span
                            className="size-2.5 shrink-0 rounded-full"
                            style={{ backgroundColor: budget.color }}
                          />
                          <span className="truncate">{budget.label}</span>
                        </span>
                        <span className="shrink-0 tabular-nums">
                          <span
                            className={cn(
                              "font-bold",
                              budget.over ? "text-destructive" : "text-ink"
                            )}
                          >
                            {budget.spentLabel}
                          </span>
                          <span className="text-ink-mute">
                            {" "}
                            / {budget.budgetLabel}
                          </span>
                        </span>
                      </div>

                      <BudgetBar
                        spent={budget.spent}
                        budget={budget.budget}
                        className="mt-2"
                      />

                      <div className="mt-1 flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-[10px]">
                        {budget.over ? (
                          <>
                            <span className="text-ink-mute">
                              Budget: {budget.budgetLabel}
                            </span>
                            <span className="text-destructive font-semibold">
                              +Rs. 2,850 over ({budget.percent}%)
                            </span>
                          </>
                        ) : (
                          <>
                            <span className="text-ink-mute">
                              {budget.percent}% spent
                            </span>
                            <span className="text-ink-mute font-medium">
                              Rs. 21,500 remaining
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-5">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span className="bg-brand-soft text-brand-strong grid size-8 place-items-center rounded-full">
                      <HandCoins className="size-4" />
                    </span>
                    <div>
                      <p className="text-ink text-xs font-bold tracking-wider uppercase">
                        Dues
                      </p>
                      <p className="text-ink-mute text-[0.6rem] leading-tight">
                        3 active dues
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="text-ink-mute size-4" />
                </div>

                <div className="mt-3 grid grid-cols-1 gap-2 min-[360px]:grid-cols-2">
                  <div className="rounded-3xl border border-emerald-500/15 bg-emerald-500/[0.08] p-3">
                    <div className="mb-1.5 flex items-center gap-1.5">
                      <span className="grid size-5 place-items-center rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                        <ArrowUpRight className="size-3" />
                      </span>
                      <span className="text-[0.6rem] font-bold tracking-wider text-emerald-600 uppercase dark:text-emerald-400">
                        Receivable
                      </span>
                    </div>
                    <p className="text-ink text-base font-black tabular-nums">
                      Rs. 12,500
                    </p>
                  </div>

                  <div className="rounded-3xl border border-amber-500/15 bg-amber-500/[0.08] p-3">
                    <div className="mb-1.5 flex items-center gap-1.5">
                      <span className="grid size-5 place-items-center rounded-full bg-amber-500/15 text-amber-600 dark:text-amber-400">
                        <ArrowDownLeft className="size-3" />
                      </span>
                      <span className="text-[0.6rem] font-bold tracking-wider text-amber-600 uppercase dark:text-amber-400">
                        Payable
                      </span>
                    </div>
                    <p className="text-ink text-base font-black tabular-nums">
                      Rs. 4,200
                    </p>
                  </div>
                </div>

                <div className="border-line/60 bg-stage-soft mt-3 flex items-center justify-between gap-3 rounded-3xl border px-3 py-2">
                  <span className="text-ink-mute text-[0.65rem] font-semibold">
                    Net dues position
                  </span>
                  <span className="text-success text-sm font-black tabular-nums">
                    +Rs. 8,300
                  </span>
                </div>
              </Card>

              <Card className="p-5">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-ink-mute text-xs font-semibold tracking-wider uppercase">
                    Shared spaces
                  </p>
                  <Users className="text-brand-strong size-4" />
                </div>
                <p className="text-ink-soft mt-2 text-xs leading-relaxed">
                  Invite by email or @username. Owners manage the space and its
                  budget; members add their own transactions.
                </p>

                <ul className="divide-line/60 mt-4 divide-y">
                  {members.map((member) => (
                    <li
                      key={member.name}
                      className="flex items-center gap-3 py-2.5 first:pt-0 last:pb-0"
                    >
                      <span className="bg-brand-soft text-brand-strong grid size-8 shrink-0 place-items-center rounded-full text-[10px] font-semibold">
                        {member.initials}
                      </span>
                      <span className="text-ink min-w-0 flex-1 truncate text-xs font-medium">
                        {member.name}
                      </span>
                      <span className="text-ink-mute shrink-0 text-[11px]">
                        {member.role}
                      </span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

            <div className="order-1 flex items-start justify-center gap-3 sm:gap-6 lg:order-2 lg:col-span-7">
              <PhoneFrame
                src="/app/spaces-mobile.webp"
                alt="Ledg spaces list showing personal, side hustle, trip, and household ledgers with monthly budgets"
                className="w-[calc(50%-6px)] sm:w-[220px] lg:w-[236px]"
                sizes="(max-width: 640px) 45vw, 236px"
              />
              <PhoneFrame
                src="/app/dues-top.webp"
                alt="Ledg dues screen showing money owed to you, money you owe, and partial payments"
                className="mt-10 w-[calc(50%-6px)] sm:mt-14 sm:w-[220px] lg:w-[236px]"
                sizes="(max-width: 640px) 45vw, 236px"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          <FeatureColumn icon={Target} title="A budget per space">
            Set one monthly number for personal, family, trip, or business. The
            bar tells you where you stand without a lecture.
          </FeatureColumn>
          <FeatureColumn icon={HandCoins} title="Dues and loans">
            Track what you lent and borrowed, record partial payments, and see a
            single net position. Loans stay out of Insights.
          </FeatureColumn>
          <FeatureColumn icon={Users} title="Spaces with people">
            Invite by email or @username. Owners keep control of the space and
            its budget; members add their own transactions.
          </FeatureColumn>
        </div>
      </div>
    </section>
  );
}
