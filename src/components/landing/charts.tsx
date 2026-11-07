import { cn } from "@/lib/utils";

export function TrendChart({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 520 160"
      fill="none"
      role="img"
      aria-label="Line chart showing income staying consistently above expenses through the month."
      className={cn("h-auto w-full overflow-visible", className)}
    >
      <defs>
        <linearGradient id="trend-income-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--chart-green)" stopOpacity="0.2" />
          <stop offset="100%" stopColor="var(--chart-green)" stopOpacity="0" />
        </linearGradient>
      </defs>

      <g className="text-line" stroke="currentColor" strokeWidth="1">
        {[30, 70, 110, 150].map((y) => (
          <line key={y} x1="0" y1={y} x2="520" y2={y} strokeDasharray="3 7" />
        ))}
      </g>

      <path
        d="M0 118C40 114 58 100 92 104C126 108 148 92 178 98C208 104 236 70 268 78C300 86 322 58 354 66C386 74 410 38 442 46C474 54 492 26 520 20V160H0Z"
        fill="url(#trend-income-fill)"
      />
      <path
        d="M0 118C40 114 58 100 92 104C126 108 148 92 178 98C208 104 236 70 268 78C300 86 322 58 354 66C386 74 410 38 442 46C474 54 492 26 520 20"
        stroke="var(--chart-green)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M0 132C40 128 60 136 92 124C124 112 150 134 180 118C210 102 238 126 268 112C298 98 322 120 354 104C386 88 410 112 442 96C474 80 494 104 520 88"
        stroke="var(--chart-rose)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="5 7"
      />

      <circle cx="442" cy="46" r="4" fill="var(--chart-green)" />
      <circle
        cx="442"
        cy="46"
        r="8"
        fill="var(--chart-green)"
        fillOpacity="0.16"
      />
      <circle cx="442" cy="96" r="3.5" fill="var(--chart-rose)" />
    </svg>
  );
}

export function BudgetBar({
  spent,
  budget,
  className,
}: {
  spent: number;
  budget: number;
  className?: string;
}) {
  const percent = budget > 0 ? (spent / budget) * 100 : 0;
  const isOver = spent > budget;
  const budgetWidth = isOver ? (budget / spent) * 100 : Math.min(100, percent);
  const overWidth = isOver ? ((spent - budget) / spent) * 100 : 0;

  if (isOver) {
    return (
      <div
        className={cn(
          "bg-muted/60 flex h-2 w-full gap-0.5 overflow-hidden rounded-full p-0.5",
          className
        )}
      >
        <div
          className="bg-brand-strong/70 h-full rounded-l-full"
          style={{ width: `${budgetWidth}%` }}
        />
        <div
          className="bg-destructive h-full rounded-r-full"
          style={{ width: `${overWidth}%` }}
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "bg-muted/60 h-2 w-full overflow-hidden rounded-full",
        className
      )}
    >
      <div
        className={cn(
          "h-full rounded-full",
          percent >= 75 ? "bg-chart-amber" : "bg-brand-strong"
        )}
        style={{ width: `${Math.min(100, percent)}%` }}
      />
    </div>
  );
}

export function SavingsRing({
  saved,
  spent,
  className,
  trackClassName,
  children,
}: {
  saved: number;
  spent: number;
  className?: string;
  trackClassName?: string;
  children?: React.ReactNode;
}) {
  const total = saved + spent;
  const savedShare = total > 0 ? saved / total : 0;
  const radius = 34;
  const circumference = 2 * Math.PI * radius;
  const spendingArc = ((total - saved) / (total || 1)) * circumference;
  const savedArc = savedShare * circumference;

  return (
    <div className={cn("relative size-20 shrink-0", className)}>
      <svg viewBox="0 0 80 80" className="size-full -rotate-90" aria-hidden>
        <circle
          cx="40"
          cy="40"
          r={radius}
          fill="none"
          strokeWidth="8"
          className={cn("stroke-muted/40", trackClassName)}
        />
        <circle
          cx="40"
          cy="40"
          r={radius}
          fill="none"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={`${spendingArc} ${circumference}`}
          className="stroke-destructive"
        />
        <circle
          cx="40"
          cy="40"
          r={radius}
          fill="none"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={`${savedArc} ${circumference}`}
          strokeDashoffset={-spendingArc}
          className="stroke-success"
        />
      </svg>
      <div className="absolute inset-0 grid place-items-center">
        {children ?? (
          <span className="text-ink-mute text-[10px] font-bold">
            {Math.round(savedShare * 100)}%
          </span>
        )}
      </div>
    </div>
  );
}
