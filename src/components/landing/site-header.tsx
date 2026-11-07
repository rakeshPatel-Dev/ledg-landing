"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useActiveSection } from "@/hooks/use-active-section";
import { appLink, siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
  { id: "track", label: "Features" },
  { id: "plan", label: "Plan" },
  { id: "intelligence", label: "Insights" },
  { id: "privacy", label: "More" },
  { id: "faq", label: "FAQ" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [inFooter, setInFooter] = useState(false);
  const active = useActiveSection();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInFooter(entry.isIntersecting),
      { rootMargin: "-76px 0px -80% 0px" }
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <header
      inert={inFooter}
      className={cn(
        "sticky top-0 z-50 border-b transition-[background-color,border-color,transform] duration-300",
        inFooter && "-translate-y-full",
        scrolled
          ? "border-line bg-canvas/85 backdrop-blur-xl"
          : "border-transparent bg-transparent"
      )}
    >
      <div className="container-page grid h-[68px] grid-cols-[1fr_auto_1fr] items-center gap-4 sm:h-[76px]">
        <Link
          href="/"
          className="focus-visible:ring-ring focus-visible:ring-offset-canvas justify-self-start rounded-lg focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
          aria-label="Ledg home"
        >
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navItems.map((item) => {
            const isActive =
              active === item.id ||
              (item.id === "track" && active === "understand");
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "focus-visible:ring-ring relative rounded-full px-3.5 py-2 text-sm transition-colors focus-visible:ring-2 focus-visible:outline-none",
                  isActive ? "text-ink" : "text-ink-soft hover:text-ink"
                )}
              >
                {item.label}
                <span
                  aria-hidden
                  className={cn(
                    "bg-brand absolute bottom-1 left-1/2 size-1 -translate-x-1/2 rounded-full transition-opacity",
                    isActive ? "opacity-100" : "opacity-0"
                  )}
                />
              </a>
            );
          })}
        </nav>

        <div className="col-start-3 flex items-center gap-1.5 justify-self-end">
          <ThemeToggle />
          <Button asChild className="hidden h-10 px-4 text-sm sm:inline-flex">
            <a {...appLink}>
              {siteConfig.appLabel}
              <ArrowRight className="size-4" />
            </a>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-ink-soft hover:text-ink size-10 lg:hidden"
                aria-label="Open menu"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="border-line bg-canvas w-[88%] gap-0 p-0 sm:max-w-sm"
            >
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <SheetDescription className="sr-only">
                Navigate the Ledg website
              </SheetDescription>

              <SheetHeader className="p-5 pb-0">
                <Logo />
              </SheetHeader>

              <nav className="mt-8 flex flex-col px-5" aria-label="Mobile">
                {navItems.map((item, index) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className="group border-line focus-visible:ring-ring flex items-center justify-between border-b py-5 focus-visible:ring-2 focus-visible:outline-none"
                  >
                    <span className="font-heading text-ink text-2xl font-medium tracking-[-0.04em]">
                      {item.label}
                    </span>
                    <span className="text-ink-mute text-xs tabular-nums">
                      0{index + 1}
                    </span>
                  </a>
                ))}
              </nav>

              <div className="mt-auto space-y-5 p-5">
                <div className="border-line flex items-center justify-between border-b pb-4">
                  <span className="text-ink-soft text-sm">Appearance</span>
                  <ThemeToggle />
                </div>
                <Button asChild size="lg" className="w-full">
                  <a {...appLink} onClick={() => setOpen(false)}>
                    {siteConfig.appLabel}
                    <ArrowRight className="size-4" />
                  </a>
                </Button>
                <p className="text-ink-mute text-xs leading-relaxed">
                  Sign in or sign up to get started.
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
