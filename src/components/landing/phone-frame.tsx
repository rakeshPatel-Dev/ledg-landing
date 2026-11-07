import Image from "next/image";
import { cn } from "@/lib/utils";

export function PhoneFrame({
  src,
  alt,
  width = 440,
  height = 880,
  className,
  priority = false,
  loading,
  sizes = "(max-width: 640px) 60vw, 280px",
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  loading?: "eager" | "lazy";
  sizes?: string;
}) {
  return (
    <div
      className={cn(
        "bg-night relative rounded-[2.65rem] border border-white/15 p-[6px] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.65)]",
        className
      )}
    >
      <div className="bg-canvas overflow-hidden rounded-[2.2rem]">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          loading={loading}
          sizes={sizes}
          className="h-auto w-full"
        />
      </div>
      <span
        aria-hidden
        className="pointer-events-none absolute top-28 -right-px h-12 w-[2px] rounded-full bg-white/20"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[2.65rem] bg-gradient-to-tr from-transparent via-transparent to-white/[0.07]"
      />
    </div>
  );
}
