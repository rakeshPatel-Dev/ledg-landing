import { SiteHeader } from "@/components/landing/site-header";
import { Hero } from "@/components/landing/hero";
import { UseCasesSection } from "@/components/landing/use-cases-section";
import { TrackSection } from "@/components/landing/track-section";
import { UnderstandSection } from "@/components/landing/understand-section";
import { PlanSection } from "@/components/landing/plan-section";
import { IntelligenceSection } from "@/components/landing/intelligence-section";
import { PrivacySection } from "@/components/landing/privacy-section";
import { FaqSection } from "@/components/landing/faq-section";
import { SiteFooter } from "@/components/landing/site-footer";
import { siteConfig } from "@/config/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: siteConfig.name,
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  url: siteConfig.appUrl,
  description:
    "A calm, mobile-first personal finance tracker for income, expenses, monthly budgets, shared spaces, dues, and analytics.",
  featureList: [
    "Income and expense tracking",
    "Five-second transaction entry",
    "Shared spaces with owner and member roles",
    "Monthly budget per space",
    "Dues and loans",
    "Savings rate and category analytics",
    "Recurring charge detection",
    "CSV export and import",
    "Light, dark, and system themes",
  ],
};

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" tabIndex={-1}>
        <Hero />
        <UseCasesSection />
        <TrackSection />
        <UnderstandSection />
        <PlanSection />
        <IntelligenceSection />
        <PrivacySection />
        <FaqSection />
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
