"use client";

import { useEffect, useState } from "react";

const SECTION_IDS = [
  "track",
  "understand",
  "plan",
  "intelligence",
  "privacy",
  "faq",
] as const;

type SectionId = (typeof SECTION_IDS)[number];

export function useActiveSection() {
  const [active, setActive] = useState<SectionId | null>(null);

  useEffect(() => {
    const elements = SECTION_IDS.map((id) =>
      document.getElementById(id)
    ).filter((element): element is HTMLElement => Boolean(element));

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActive(visible[0].target.id as SectionId);
        }
      },
      {
        rootMargin: "-32% 0px -58% 0px",
        threshold: 0,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return active;
}
