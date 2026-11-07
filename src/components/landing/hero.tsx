import Image from "next/image";
import type { CSSProperties } from "react";
import {
  ArrowDown,
  ArrowRight,
  BriefcaseBusiness,
  CarFront,
  CreditCard,
  House,
  Landmark,
  ReceiptText,
  Smartphone,
  UtensilsCrossed,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { appLink, siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

type FloatCard = {
  category: string;
  amount: string;
  method: string;
  icon: LucideIcon;
  methodIcon: LucideIcon;
  color: string;
  className: string;
  delay: string;
  tilt: { rx: string; ry: string; rz: string; tz: string };
  income?: boolean;
};

const floatCards: FloatCard[] = [
  {
    category: "Food",
    amount: "Rs. 320",
    method: "UPI",
    icon: UtensilsCrossed,
    methodIcon: Smartphone,
    color: "#E8590C",
    className:
      "left-2 top-2 z-20 w-[150px] sm:left-[1%] sm:top-0 sm:w-[168px] lg:left-[8%] lg:top-[22%] lg:w-[200px] xl:left-[13%] xl:top-[17%] xl:w-[208px]",
    delay: "300ms",
    tilt: { rx: "3deg", ry: "-8deg", rz: "-5deg", tz: "12px" },
  },
  {
    category: "Freelance",
    amount: "+Rs. 24,000",
    method: "Bank transfer",
    icon: BriefcaseBusiness,
    methodIcon: Landmark,
    color: "#7C3AED",
    className:
      "right-2 top-5 z-20 hidden w-[156px] min-[380px]:block sm:right-[1%] sm:top-3 sm:w-[176px] lg:right-[8%] lg:top-[8%] lg:w-[208px] xl:right-[13%] xl:top-[10%] xl:w-[216px]",
    delay: "380ms",
    tilt: { rx: "-3deg", ry: "7deg", rz: "4deg", tz: "18px" },
    income: true,
  },
  {
    category: "Rent",
    amount: "Rs. 25,000",
    method: "Bank transfer",
    icon: House,
    methodIcon: Landmark,
    color: "#B02586",
    className:
      "left-[22%] top-0 z-0 hidden w-[190px] lg:block xl:left-[25%] xl:w-[196px]",
    delay: "460ms",
    tilt: { rx: "2deg", ry: "5deg", rz: "-3deg", tz: "-30px" },
  },
  {
    category: "Transport",
    amount: "Rs. 180",
    method: "Wallet",
    icon: CarFront,
    methodIcon: Wallet,
    color: "#1971C2",
    className:
      "bottom-[18%] left-[2%] z-30 hidden w-[170px] md:block lg:left-[10%] lg:bottom-[20%] lg:w-[196px] xl:left-[15%] xl:bottom-[22%] xl:w-[204px]",
    delay: "540ms",
    tilt: { rx: "4deg", ry: "-6deg", rz: "3deg", tz: "28px" },
  },
  {
    category: "Bills",
    amount: "Rs. 2,450",
    method: "Card",
    icon: ReceiptText,
    methodIcon: CreditCard,
    color: "#D97706",
    className:
      "bottom-[12%] right-[2%] z-30 hidden w-[180px] md:block lg:right-[9%] lg:bottom-[14%] lg:w-[200px] xl:right-[14%] xl:bottom-[16%] xl:w-[208px]",
    delay: "620ms",
    tilt: { rx: "-4deg", ry: "8deg", rz: "-4deg", tz: "32px" },
  },
];

function FloatingCard({ card }: { card: FloatCard }) {
  const Icon = card.icon;
  const MethodIcon = card.methodIcon;

  return (
    <div
      aria-hidden
      className={cn("hero-float p-3 text-left", card.className)}
      style={
        {
          "--rx": card.tilt.rx,
          "--ry": card.tilt.ry,
          "--rz": card.tilt.rz,
          "--tz": card.tilt.tz,
          "--glow": `${card.color}3d`,
          "--delay": card.delay,
        } as CSSProperties
      }
    >
      <div className="flex items-center gap-2.5">
        <span
          className="grid size-9 shrink-0 place-items-center rounded-[0.7rem]"
          style={{
            backgroundColor: `${card.color}1f`,
            color: card.color,
          }}
        >
          <Icon className="size-4.5" strokeWidth={1.9} />
        </span>
        <div className="min-w-0">
          <p className="text-ink-soft truncate text-[10.5px] font-medium">
            {card.category}
          </p>
          <p
            className={cn(
              "text-[14px] leading-tight font-bold tracking-[-0.02em] whitespace-nowrap tabular-nums lg:text-[15px]",
              card.income ? "text-success" : "text-ink"
            )}
          >
            {card.amount}
          </p>
        </div>
      </div>

      <div className="border-line/80 text-ink-mute mt-2.5 flex items-center gap-1.5 border-t pt-2 text-[10px]">
        <MethodIcon className="size-3 shrink-0" strokeWidth={1.8} />
        <span className="truncate">{card.method}</span>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative pt-3 sm:pt-5"
    >
      <div className="container-page">
        <div className="relative isolate overflow-hidden">
          <div className="relative z-10 px-5 pt-12 text-center sm:px-10 sm:pt-16 lg:pt-20">
            <h1
              id="hero-title"
              className="hero-rise font-heading text-ink mx-auto max-w-[17ch] text-[2.25rem] leading-[0.96] font-semibold tracking-[-0.055em] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[4.6rem]"
              style={{ animationDelay: "60ms" }}
            >
              <span className="block">Track spending</span>{" "}
              <span className="block">
                in under{" "}
                <span className="text-brand-strong">five seconds.</span>
              </span>
            </h1>

            <p
              className="hero-rise text-ink-soft mx-auto mt-5 max-w-[46ch] text-[15px] leading-relaxed sm:mt-6 sm:text-lg"
              style={{ animationDelay: "140ms" }}
            >
              Ledg is a calm home for income, expenses, budgets, shared spaces,
              and dues. Log it in seconds, then see the whole month clearly.
            </p>

            <div
              className="hero-rise mt-8 flex flex-wrap items-center justify-center gap-3"
              style={{ animationDelay: "220ms" }}
            >
              <Button asChild size="lg">
                <a {...appLink}>
                  {siteConfig.appLabel}
                  <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button asChild variant="secondaryLight" size="lg">
                <a href="#track">
                  See how it works
                  <ArrowDown className="size-4" />
                </a>
              </Button>
            </div>

            <p
              className="hero-rise text-ink-mute mt-4 text-xs"
              style={{ animationDelay: "280ms" }}
            >
              Sign in or sign up. No card required.
            </p>
          </div>

          <div className="relative mt-8 h-[540px] w-full sm:mt-10 sm:h-[540px] md:h-[580px] lg:h-[600px] xl:h-[640px]">
            {floatCards.map((card) => (
              <FloatingCard key={card.category} card={card} />
            ))}

            <div className="absolute top-[76px] left-1/2 z-10 w-[300px] -translate-x-1/2 sm:w-[330px] md:top-6 md:w-[380px] lg:w-[430px] xl:w-[480px]">
              <div className="hero-rise" style={{ animationDelay: "180ms" }}>
                <Image
                  src="/app/hand-phone-hero.webp"
                  alt="The Ledg dashboard on a phone held in one hand, showing net saved, dues, and spending by category."
                  width={750}
                  height={1260}
                  priority
                  sizes="(max-width: 640px) 300px, (max-width: 768px) 330px, (max-width: 1024px) 380px, (max-width: 1280px) 430px, 480px"
                  className="hero-phone h-auto w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
