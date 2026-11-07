import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Bell,
  ChevronRight,
  Database,
  Download,
  FileSpreadsheet,
  Monitor,
  Smartphone,
  SunMoon,
  Upload,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { PhoneFrame } from "./phone-frame";
import { SectionLabel } from "./section-label";
import { FeatureColumn, SectionHeading } from "./section-heading";

const preferences = [
  {
    icon: Monitor,
    title: "Appearance",
    subtitle: "System Default",
  },
  {
    icon: Activity,
    title: "Motion",
    subtitle: "Full Motion",
  },
  {
    icon: Bell,
    title: "Notifications",
    subtitle: "Invite alerts on",
  },
];

const dataRows = [
  {
    icon: Download,
    title: "Export Transactions (CSV)",
    subtitle: "Download spreadsheet with all transaction records",
  },
  {
    icon: Database,
    title: "Full Data Backup (JSON)",
    subtitle: "Export spaces and transactions for backup",
  },
  {
    icon: Upload,
    title: "Import Transactions",
    subtitle: "Restore a backup or load a CSV spreadsheet",
  },
];

function SettingsGroup({
  label,
  rows,
}: {
  label: string;
  rows: { icon: LucideIcon; title: string; subtitle: string }[];
}) {
  return (
    <div>
      <p className="text-ink-mute px-1 text-xs font-semibold tracking-wider uppercase">
        {label}
      </p>
      <Card padded={false} className="mt-2 p-1.5">
        {rows.map((row, index) => (
          <div key={row.title}>
            {index > 0 ? <div className="bg-line/60 mx-4 my-1 h-px" /> : null}
            <div className="flex items-center gap-3 rounded-3xl px-4 py-3.5">
              <span className="bg-brand-soft text-brand-strong grid size-10 shrink-0 place-items-center rounded-2xl">
                <row.icon className="size-5" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-ink text-sm leading-snug font-semibold">
                  {row.title}
                </p>
                <p className="text-ink-mute text-xs leading-snug font-medium">
                  {row.subtitle}
                </p>
              </div>
              <ChevronRight className="text-ink-mute size-4 shrink-0" />
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
}

export function PrivacySection() {
  return (
    <section id="privacy" className="section-space pt-0 sm:pt-0 lg:pt-0">
      <div className="container-page">
        <div className="max-w-2xl">
          <SectionLabel number="05">More</SectionLabel>
          <SectionHeading>The small things, handled.</SectionHeading>
          <p className="text-ink-soft mt-5 max-w-[52ch] text-base leading-relaxed sm:text-lg">
            Ledg is a web app for the phone in your hand. Take your data with
            you, choose how the app looks and moves, and keep shared-space
            invites in one place.
          </p>
        </div>

        <div className="bg-stage mt-12 rounded-[2rem] p-5 sm:rounded-[2.5rem] sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="flex justify-center lg:col-span-5">
              <PhoneFrame
                src="/app/settings.webp"
                alt="Ledg settings screen showing appearance, motion, notifications, export, and import"
                className="w-[240px] sm:w-[280px]"
                sizes="(max-width: 640px) 240px, 280px"
              />
            </div>

            <div className="min-w-0 space-y-6 lg:col-span-7">
              <SettingsGroup label="Preferences" rows={preferences} />
              <SettingsGroup label="Data & Backup" rows={dataRows} />
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          <FeatureColumn icon={FileSpreadsheet} title="CSV in, CSV out">
            Export every transaction, take a full JSON backup of spaces and
            transactions, or bring a spreadsheet in.
          </FeatureColumn>
          <FeatureColumn icon={SunMoon} title="Looks and moves your way">
            Light, dark, or system appearance. Full, reduced, or system motion.
            The choice is yours in both cases.
          </FeatureColumn>
          <FeatureColumn icon={Smartphone} title="Phone first, rupees first">
            Built for a phone browser and just as happy on desktop, with rupee
            amounts and Indian formatting throughout.
          </FeatureColumn>
        </div>
      </div>
    </section>
  );
}
