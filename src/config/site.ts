/**
 * Single source of truth for links and launch copy.
 * Change the app URL here and every CTA follows.
 */
const defaultSiteUrl = "https://ledg.rakeshpatel.me";

function resolveSiteUrl(value: string | undefined) {
  const raw = value?.trim();
  if (!raw) return defaultSiteUrl;

  try {
    const url = new URL(/^https?:\/\//i.test(raw) ? raw : `https://${raw}`);
    return url.origin;
  } catch {
    return defaultSiteUrl;
  }
}

export const siteConfig = {
  name: "Ledg",
  url: resolveSiteUrl(process.env.NEXT_PUBLIC_SITE_URL),
  appUrl: "https://app.ledg.rakeshpatel.me",
  appLabel: "Sign up",
  contactEmail: "ledg@rakeshpatel.me",
} as const;

export const appLink = {
  href: siteConfig.appUrl,
} as const;

export const appRoutes = {
  signIn: `${siteConfig.appUrl}/sign-in`,
  privacy: `${siteConfig.appUrl}/privacy`,
  terms: `${siteConfig.appUrl}/terms`,
} as const;
