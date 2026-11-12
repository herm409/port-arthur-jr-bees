/**
 * Netlify sets CONTEXT to production, deploy-preview, or branch-deploy.
 * Local and CLI draft builds leave it unset. Anything other than exactly
 * "production" is preview: show placeholders and PENDING tags.
 */
export const siteContext: string = import.meta.env.VITE_SITE_CONTEXT ?? "dev";

export const isProduction = siteContext === "production";

export const isPreview = !isProduction;
