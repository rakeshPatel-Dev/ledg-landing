import {
  HandCoins,
  Laptop,
  Plane,
  Plus,
  Search,
  Users,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { BudgetBar } from "./charts";

type Space = {
  icon: LucideIcon;
  name: string;
  meta: string;
  net: string;
  color: string;
  positive: boolean;
  budget?: {
    spent: number;
    budget: number;
    spentLabel: string;
    budgetLabel: string;
    over: boolean;
    leftLabel: string;
    rightLabel: string;
  };
};

const spaces: Space[] = [
  {
    icon: Wallet,
    name: "Personal",
    meta: "Personal · 12 txns",
    net: "Rs. 48,050",
    color: "#0B8A60",
    positive: true,
  },
  {
    icon: Laptop,
    name: "Side Hustle",
    meta: "Business · 6 txns",
    net: "Rs. 24,000",
    color: "#7C3AED",
    positive: true,
  },
  {
    icon: Plane,
    name: "Goa Trip",
    meta: "Trip · 5 txns",
    net: "−Rs. 19,450",
    color: "#0EA5E9",
    positive: false,
    budget: {
      spent: 18_500,
      budget: 40_000,
      spentLabel: "Rs. 18,500",
      budgetLabel: "Rs. 40,000",
      over: false,
      leftLabel: "46% spent",
      rightLabel: "Rs. 21,500 remaining",
    },
  },
  {
    icon: Users,
    name: "Household",
    meta: "Family · 54 txns",
    net: "Rs. 122,350",
    color: "#E03131",
    positive: true,
    budget: {
      spent: 62_850,
      budget: 60_000,
      spentLabel: "Rs. 62,850",
      budgetLabel: "Rs. 60,000",
      over: true,
      leftLabel: "105% used",
      rightLabel: "+Rs. 2,850 over",
    },
  },
];

const members = [
  { initials: "AG", name: "Anita Gurung", role: "Owner" },
  { initials: "BT", name: "Bikash Thapa", role: "Member" },
  { initials: "SS", name: "Suman Shrestha", role: "Member" },
];

type Due = {
  initials: string;
  name: string;
  meta: string;
  status?: { label: string; tone: "warning" | "danger" };
  amount: string;
  positive: boolean;
  avatarClass: string;
};

const dues: Due[] = [
  {
    initials: "BT",
    name: "Bikash Thapa",
    meta: "You owe",
    amount: "−Rs. 8,000",
    positive: false,
    avatarClass: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400",
  },
  {
    initials: "AG",
    name: "Anita Gurung",
    meta: "Owes you",
    status: { label: "partial", tone: "warning" },
    amount: "+Rs. 7,000",
    positive: true,
    avatarClass: "bg-sky-500/15 text-sky-700 dark:text-sky-400",
  },
  {
    initials: "SS",
    name: "Suman Shrestha",
    meta: "Owes you",
    amount: "+Rs. 5,000",
    positive: true,
    avatarClass: "bg-brand-soft text-brand-strong",
  },
  {
    initials: "PA",
    name: "Prakash Adhikari",
    meta: "Owes you",
    status: { label: "7d late", tone: "danger" },
    amount: "+Rs. 2,500",
    positive: true,
    avatarClass: "bg-amber-500/15 text-amber-700 dark:text-amber-400",
  },
];

function SpacesPanel() {
  return (
    <Card
      padded={false}
      className="bg-surface shadow-soft flex flex-col overflow-hidden md:col-span-2 lg:col-span-7 lg:row-span-2"
    >
      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-heading text-ink text-lg font-semibold tracking-[-0.02em] sm:text-xl">
              Spaces
            </h3>
            <p className="text-ink-mute mt-1 text-xs">
              Organise money by purpose
            </p>
          </div>
          <span
            aria-hidden
            className="bg-primary text-primary-foreground grid size-10 shrink-0 place-items-center rounded-full shadow-sm"
          >
            <Plus className="size-4.5" strokeWidth={2.2} />
          </span>
        </div>

        <div className="bg-stage text-ink-mute mt-4 flex h-10 items-center gap-2.5 rounded-full px-4 text-xs">
          <Search className="size-4 shrink-0" aria-hidden />
          Search spaces…
        </div>
      </div>

      <ul className="divide-line/60 border-line/60 divide-y border-t">
        {spaces.map((space) => (
          <li key={space.name} className="px-5 py-3.5 sm:px-6">
            <div className="flex items-center gap-3">
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
                <p className="text-ink-mute mt-0.5 truncate text-[11px]">
                  {space.meta}
                </p>
              </div>

              <div className="shrink-0 text-right">
                <p
                  className={cn(
                    "text-sm font-bold tabular-nums",
                    space.positive ? "text-success" : "text-destructive"
                  )}
                >
                  {space.net}
                </p>
                <p className="text-ink-mute text-[10px] tracking-wide uppercase">
                  Net saved
                </p>
              </div>
            </div>

            {space.budget ? (
              <div className="mt-3 sm:pl-[52px]">
                <div className="flex items-center justify-between gap-3 text-[10px]">
                  <span className="text-ink-soft font-medium whitespace-nowrap">
                    Monthly budget
                  </span>
                  <span className="text-ink-mute shrink-0 whitespace-nowrap tabular-nums">
                    <span
                      className={cn(
                        "font-semibold",
                        space.budget.over ? "text-destructive" : "text-ink"
                      )}
                    >
                      {space.budget.spentLabel}
                    </span>{" "}
                    / {space.budget.budgetLabel}
                  </span>
                </div>

                <BudgetBar
                  spent={space.budget.spent}
                  budget={space.budget.budget}
                  className="mt-1.5"
                />

                <div className="mt-1 flex items-center justify-between gap-3 text-[10px]">
                  <span className="text-ink-mute whitespace-nowrap">
                    {space.budget.leftLabel}
                  </span>
                  <span
                    className={cn(
                      "font-semibold whitespace-nowrap",
                      space.budget.over ? "text-destructive" : "text-ink-mute"
                    )}
                  >
                    {space.budget.rightLabel}
                  </span>
                </div>
              </div>
            ) : null}
          </li>
        ))}
      </ul>

      <div className="border-line/60 text-ink-mute mt-auto flex items-center justify-between gap-3 border-t px-5 py-3 text-[10px] sm:px-6">
        <span>4 spaces</span>
        <span>77 transactions</span>
      </div>
    </Card>
  );
}

function HouseholdTile() {
  return (
    <Card className="bg-surface shadow-soft flex flex-col p-5 sm:p-6 lg:col-span-5">
      <div className="flex items-start gap-3">
        <span
          className="grid size-10 shrink-0 place-items-center rounded-2xl"
          style={{
            backgroundColor: "#E031311f",
            color: "#E03131",
          }}
        >
          <Users className="size-4.5" strokeWidth={2.1} />
        </span>

        <div className="min-w-0 flex-1">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="text-ink truncate text-sm font-semibold">
              Household
            </h3>
            <span className="text-ink-mute shrink-0 text-[10px]">
              3 members
            </span>
          </div>
          <p className="text-ink-mute mt-0.5 text-[11px]">Family · 54 txns</p>
        </div>
      </div>

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
            <span className="text-ink-mute shrink-0 text-[10px]">
              {member.role}
            </span>
          </li>
        ))}
      </ul>

      <div className="border-line/60 text-ink-mute mt-auto flex items-center justify-between gap-3 border-t pt-3 text-[10px]">
        <span>Owner sets the budget</span>
        <span className="text-ink-soft font-medium">Rs. 60,000 / month</span>
      </div>
    </Card>
  );
}

function DuesTile() {
  return (
    <Card className="bg-surface shadow-soft flex flex-col p-5 sm:p-6 lg:col-span-5">
      <div className="flex items-start gap-3">
        <span className="bg-brand-soft text-brand-strong grid size-10 shrink-0 place-items-center rounded-2xl">
          <HandCoins className="size-4.5" strokeWidth={2.1} />
        </span>

        <div className="min-w-0 flex-1">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="text-ink truncate text-sm font-semibold">Dues</h3>
            <span className="text-ink-mute shrink-0 text-[10px]">4 active</span>
          </div>
          <p className="text-ink-mute mt-0.5 text-[11px]">Who owes whom</p>
        </div>
      </div>

      <ul className="divide-line/60 mt-4 divide-y">
        {dues.map((due) => (
          <li
            key={due.name}
            className="flex items-center gap-3 py-2 first:pt-0 last:pb-0"
          >
            <span
              className={cn(
                "grid size-8 shrink-0 place-items-center rounded-full text-[10px] font-semibold",
                due.avatarClass
              )}
            >
              {due.initials}
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-ink truncate text-xs font-medium">
                {due.name}
              </p>
              <p className="text-ink-mute truncate text-[10px]">
                {due.meta}
                {due.status ? (
                  <>
                    {" · "}
                    <span
                      className={
                        due.status.tone === "danger"
                          ? "text-destructive"
                          : "text-warning"
                      }
                    >
                      {due.status.label}
                    </span>
                  </>
                ) : null}
              </p>
            </div>
            <span
              className={cn(
                "shrink-0 text-xs font-bold tabular-nums",
                due.positive ? "text-success" : "text-warning"
              )}
            >
              {due.amount}
            </span>
          </li>
        ))}
      </ul>

      <div className="border-line/60 mt-auto flex items-center justify-between gap-3 border-t pt-3 text-[10px]">
        <span className="text-ink-mute">Net receivable</span>
        <span className="text-success text-sm font-bold tabular-nums">
          +Rs. 6,500
        </span>
      </div>
    </Card>
  );
}

export function UseCasesSection() {
  return (
    <section
      aria-labelledby="use-cases-title"
      className="border-line bg-stage border-y py-14 sm:py-16 lg:py-20"
    >
      <div className="container-page">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
          <div>
            <p className="text-ink-mute text-xs font-medium tracking-[0.08em]">
              One app, a few kinds of money
            </p>
            <h2
              id="use-cases-title"
              className="font-heading text-ink mt-3 max-w-[22ch] text-2xl leading-[1.08] font-semibold tracking-[-0.04em] sm:text-3xl"
            >
              Personal, shared, or somewhere in between.
            </h2>
          </div>
          <p className="text-ink-soft max-w-sm text-sm leading-relaxed">
            Each space keeps its own ledger, budget, and people. Start with one;
            add another when life does.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:mt-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-5">
          <SpacesPanel />
          <HouseholdTile />
          <DuesTile />
        </div>
      </div>
    </section>
  );
}
