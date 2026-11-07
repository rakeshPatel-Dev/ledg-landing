import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { siteConfig } from "@/config/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Ledg — Track spending in under five seconds",
    template: "%s · Ledg",
  },
  description:
    "A calm, mobile-first home for income, expenses, monthly budgets, shared spaces, and dues. Open Ledg in your browser, sign in or sign up, and see the whole month clearly.",
  applicationName: siteConfig.name,
  category: "finance",
  keywords: [
    "expense tracker",
    "income tracker",
    "personal finance",
    "shared expenses",
    "monthly budget",
    "dues tracker",
    "INR",
    "web app",
  ],
  authors: [{ name: "Ledg" }],
  creator: "Ledg",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: "Ledg",
    title: "Ledg — Track spending in under five seconds",
    description:
      "Income, expenses, monthly budgets, shared spaces, and dues. Open Ledg in your browser and see the whole month clearly.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ledg — Track spending in under five seconds",
    description:
      "Income, expenses, monthly budgets, shared spaces, and dues. Open Ledg in your browser and see the whole month clearly.",
  },
  alternates: {
    canonical: siteConfig.url,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b100d" },
  ],
  colorScheme: "light dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${bricolage.variable}`}
    >
      <body className="bg-canvas text-ink min-h-dvh font-sans antialiased">
        <ThemeProvider>
          <div className="flex min-h-dvh flex-col">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
