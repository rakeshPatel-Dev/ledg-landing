import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function SectionHeading({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "font-heading text-ink mt-5 text-[clamp(2rem,3vw,2.625rem)] leading-[1.04] font-semibold tracking-[-0.045em]",
        className
      )}
    >
      {children}
    </h2>
  );
}

export function FeatureColumn({
  icon: Icon,
  title,
  children,
  tone = "light",
}: {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <div>
      <Icon
        className={cn(
          "size-5",
          tone === "dark" ? "text-brand" : "text-brand-strong"
        )}
        strokeWidth={1.8}
        aria-hidden
      />
      <h3
        className={cn(
          "mt-4 text-base font-medium",
          tone === "dark" ? "text-white" : "text-ink"
        )}
      >
        {title}
      </h3>
      <p
        className={cn(
          "mt-2 max-w-[34ch] text-sm leading-relaxed",
          tone === "dark" ? "text-white/55" : "text-ink-soft"
        )}
      >
        {children}
      </p>
    </div>
  );
}
