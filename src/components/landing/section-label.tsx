import { cn } from "@/lib/utils";

export function SectionLabel({
  number,
  children,
  tone = "light",
  className,
}: {
  number: string;
  children: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-xs leading-none font-medium tracking-[0.08em]",
        tone === "dark" ? "text-white/50" : "text-ink-mute",
        className
      )}
    >
      <span
        className={cn(
          "tabular-nums",
          tone === "dark" ? "text-brand" : "text-brand-strong"
        )}
      >
        {number}
      </span>
      <span aria-hidden>_</span>
      <span>{children}</span>
    </p>
  );
}
