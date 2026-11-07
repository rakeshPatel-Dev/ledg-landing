import {
  ArrowDownLeft,
  ArrowRight,
  ArrowUpRight,
  Bus,
  Laptop,
  Layers,
  Search,
  Users,
  Utensils,
  Wallet,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Segmented } from "@/components/ui/segmented";
import { appLink, siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { PhoneFrame } from "./phone-frame";
import { SectionLabel } from "./section-label";
import { FeatureColumn, SectionHeading } from "./section-heading";

const transactions = [
  {
    icon: Utensils,
    name: "Morning coffee",
    category: "Food",
    method: "wallet",
    amount: "−Rs. 350",
    date: "Nov 6",
    color: "#E8590C",
    income: false,
  },
  {
    icon: Laptop,
    name: "Quick fix",
    category: "Freelance",
    method: "wallet",
    amount: "+Rs. 2,500",
    date: "Nov 6",
    color: "#7C3AED",
    income: true,
  },
  {
    icon: Bus,
    name: "Pathao ride",
    category: "Transport",
    method: "wallet",
    amount: "−Rs. 320",
    date: "Nov 5",
    color: "#1971C2",
    income: false,
  },
];

const spaces = [
  {
    icon: Wallet,
    name: "Personal",
    meta: "Personal · 12 txns",
    net: "Rs. 48,050",
    color: "#0B8A60",
  },
  {
    icon: Users,
    name: "Household",
    meta: "Family · 54 txns",
    net: "Rs. 122,350",
    color: "#E03131",
  },
];

export function TrackSection() {
  return (
    <section id="track" className="section-space">
      <div className="container-page">
        <div className="max-w-2xl">
          <SectionLabel number="01">Track</SectionLabel>
          <SectionHeading>Out of your head. Into Ledg.</SectionHeading>
          <p className="text-ink-soft mt-5 max-w-[52ch] text-base leading-relaxed sm:text-lg">
            A coffee, a cab, a client payment. Start with the amount, pick a
            category, and Ledg handles the rest. No forms to fight, no receipts
            to hoard.
          </p>
          <Button asChild variant="secondaryLight" className="mt-6">
            <a {...appLink}>
              {siteConfig.appLabel}
              <ArrowRight className="size-4" />
            </a>
          </Button>
        </div>

        <div className="bg-stage mt-12 rounded-[2rem] p-5 sm:rounded-[2.5rem] sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="flex justify-center lg:col-span-5">
              <PhoneFrame
                src="/app/add-form.webp"
                alt="Adding a transaction in Ledg with a number pad, categories, note, date, and space"
                width={440}
                height={954}
                className="w-[240px] sm:w-[280px]"
                sizes="(max-width: 640px) 240px, 280px"
              />
            </div>

            <div className="min-w-0 space-y-8 lg:col-span-7">
              <div>
                <div className="border-line bg-surface text-ink-mute relative flex h-12 items-center rounded-2xl border pr-4 pl-10 text-sm shadow-xs">
                  <Search className="text-ink-mute pointer-events-none absolute left-4 size-4" />
                  Search notes, categories…
                </div>
                <Segmented
                  options={["All", "Expense", "Income"]}
                  active="All"
                  className="mt-3"
                  label="Transaction filters with All selected"
                />
              </div>

              <div>
                <div className="flex items-center justify-between gap-3">
                  <p className="text-ink-mute text-xs font-semibold tracking-wider uppercase">
                    Recent activity
                  </p>
                  <span className="text-brand-strong text-sm font-medium">
                    See all
                  </span>
                </div>

                <div className="mt-3 space-y-2">
                  {transactions.map((transaction) => (
                    <div
                      key={transaction.name}
                      className="border-line/70 bg-surface/90 flex items-center gap-3.5 rounded-3xl border px-3 py-3 shadow-xs backdrop-blur-md"
                    >
                      <span
                        className="grid size-12 shrink-0 place-items-center rounded-2xl"
                        style={{
                          backgroundColor: `${transaction.color}1f`,
                          color: transaction.color,
                        }}
                      >
                        <transaction.icon
                          className="size-5"
                          strokeWidth={2.2}
                        />
                      </span>

                      <div className="min-w-0 flex-1">
                        <p className="text-ink truncate text-sm font-semibold">
                          {transaction.name}
                        </p>
                        <p className="text-ink-mute mt-0.5 truncate text-xs">
                          {transaction.category} · {transaction.method}
                        </p>
                      </div>

                      <div className="flex shrink-0 flex-col items-end gap-0.5">
                        <span
                          className={cn(
                            "text-sm font-bold tabular-nums",
                            transaction.income
                              ? "text-success"
                              : "text-destructive"
                          )}
                        >
                          {transaction.amount}
                        </span>
                        <span className="text-ink-mute flex items-center gap-1 text-[0.65rem] tracking-wide uppercase">
                          {transaction.income ? (
                            <ArrowDownLeft className="size-3" />
                          ) : (
                            <ArrowUpRight className="size-3" />
                          )}
                          {transaction.date}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-ink-mute text-xs font-semibold tracking-wider uppercase">
                  Spaces
                </p>
                <Card padded={false} className="divide-line/60 mt-3 divide-y">
                  {spaces.map((space) => (
                    <div
                      key={space.name}
                      className="flex items-center gap-3 px-4 py-3"
                    >
                      <span
                        className="grid size-10 shrink-0 place-items-center rounded-2xl"
                        style={{
                          backgroundColor: `${space.color}1f`,
                          color: space.color,
                        }}
                      >
                        <space.icon className="size-4.5" strokeWidth={2.1} />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-ink truncate text-sm font-semibold">
                          {space.name}
                        </p>
                        <p className="text-ink-mute mt-0.5 truncate text-xs">
                          {space.meta}
                        </p>
                      </div>
                      <div className="shrink-0 text-right">
                        <p className="text-success text-sm font-bold tabular-nums">
                          {space.net}
                        </p>
                        <p className="text-ink-mute text-[10px] tracking-wide uppercase">
                          Net saved
                        </p>
                      </div>
                    </div>
                  ))}
                </Card>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          <FeatureColumn icon={Zap} title="Five-second entry">
            Amount, category, done. The rest is optional, so logging never
            becomes a project.
          </FeatureColumn>
          <FeatureColumn icon={Search} title="Find anything">
            Search by note, category, type, or space. Filter the list without
            leaving it.
          </FeatureColumn>
          <FeatureColumn icon={Layers} title="Spaces for real life">
            Personal, household, trip, side hustle. Keep each ledger separate,
            or share it.
          </FeatureColumn>
        </div>
      </div>
    </section>
  );
}
