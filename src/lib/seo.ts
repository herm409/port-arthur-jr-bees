import { absoluteUrl } from "@/lib/site";

type PageHeadInput = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  noindex?: boolean;
};

export function pageHead({
  title,
  description,
  path,
  ogImage = "/og.jpg",
  noindex = false,
}: PageHeadInput) {
  const url = absoluteUrl(path);
  const image = ogImage.startsWith("http") ? ogImage : absoluteUrl(ogImage);
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: image },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Port Arthur Jr Bees" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
      ...(noindex ? [{ name: "robots", content: "noindex, nofollow" }] : []),
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export const titles = {
  home: "Port Arthur Jr Bees | Youth Football and Dance Since 1985",
  donate: "Donate to the 30x30 Building Fund | Port Arthur Jr Bees",
  join: "Join | Port Arthur Jr Bees",
  football: "Football | Port Arthur Jr Bees",
  honeybees: "Honeybees Dance | Port Arthur Jr Bees",
  photos: "Photos | Port Arthur Jr Bees",
  story: "Our Story | Port Arthur Jr Bees",
  sponsor: "Sponsor | Port Arthur Jr Bees",
  contact: "Contact | Port Arthur Jr Bees",
  notFound: "Page not found | Port Arthur Jr Bees",
} as const;
