import type { HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cardVariants = cva(
  "rounded-[2rem] border text-ink shadow-xs backdrop-blur-xl backdrop-saturate-150 transition-all",
  {
    variants: {
      variant: {
        default: "border-line/80 bg-surface/85 shadow-sm",
        dark: "border-white/10 bg-white/[0.06] text-white shadow-none",
      },
      padded: {
        true: "p-5",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      padded: true,
    },
  }
);

function Card({
  className,
  variant,
  padded,
  ...props
}: HTMLAttributes<HTMLDivElement> & VariantProps<typeof cardVariants>) {
  return (
    <div
      data-slot="card"
      className={cn(cardVariants({ variant, padded }), className)}
      {...props}
    />
  );
}

export { Card };
