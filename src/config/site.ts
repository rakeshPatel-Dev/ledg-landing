/**
 * Single source of truth for links and launch copy.
 * Change the app URL here and every CTA follows.
 */
export const siteConfig = {
  name: "Ledg",
  url: "https://ledg.app",
  appUrl: "https://ledg.rakeshpatel.me",
  appLabel: "Sign up",
  contactEmail: "hello@ledg.app",
} as const;

export const appLink = {
  href: siteConfig.appUrl,
} as const;

export const appRoutes = {
  signIn: `${siteConfig.appUrl}/sign-in`,
  privacy: `${siteConfig.appUrl}/privacy`,
  terms: `${siteConfig.appUrl}/terms`,
} as const;
