import { cn } from "@/lib/utils";

interface SegmentedProps {
  options: string[];
  active: string;
  className?: string;
  label?: string;
}

/**
 * Static visual mirror of the app's pill segmented control.
 * The landing uses it inside product mocks, so it is presentational.
 */
export function Segmented({
  options,
  active,
  className,
  label,
}: SegmentedProps) {
  return (
    <div
      role="img"
      aria-label={label ?? `Segmented control with ${active} selected`}
      className={cn("bg-muted grid w-full gap-1 rounded-full p-1", className)}
      style={{
        gridTemplateColumns: `repeat(${options.length}, minmax(0, 1fr))`,
      }}
    >
      {options.map((option) => {
        const isActive = option === active;
        return (
          <div
            key={option}
            className={cn(
              "flex items-center justify-center rounded-full px-1.5 py-2.5 text-xs font-medium sm:text-sm",
              isActive ? "bg-surface text-ink shadow-sm" : "text-ink-mute"
            )}
          >
            {option}
          </div>
        );
      })}
    </div>
  );
}
