import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  wordmarkClassName,
}: {
  className?: string;
  wordmarkClassName?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span className="bg-brand-deep relative grid size-8 shrink-0 place-items-center overflow-hidden rounded-[10px] ring-1 ring-black/10 dark:ring-white/10">
        <Image
          src="/ledg-mark.png"
          alt=""
          width={748}
          height={1024}
          className="h-[22px] w-auto"
          priority
        />
      </span>
      <span
        className={cn(
          "font-heading text-ink text-[23px] leading-none font-semibold tracking-[-0.05em]",
          wordmarkClassName
        )}
      >
        ledg
      </span>
    </span>
  );
}
