export const SITE_ORIGIN = "https://port-arthur-jr-bees.netlify.app";

export const domain: string | null = null; // [DOMAIN]

export function absoluteUrl(path: string): string {
  const origin = domain ?? SITE_ORIGIN;
  if (path === "/") return origin + "/";
  return origin + path;
}

export const routes = [
  "/",
  "/donate",
  "/register",
  "/football",
  "/honeybees",
  "/photos",
  "/our-story",
  "/sponsor",
  "/contact",
] as const;
