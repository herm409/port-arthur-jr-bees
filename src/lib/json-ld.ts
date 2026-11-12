import { org, phones } from "@/lib/org";
import { absoluteUrl } from "@/lib/site";

export function homeJsonLd(): Record<string, unknown> {
  const orgId = absoluteUrl("/#organization");
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["SportsOrganization", "NGO"],
        "@id": orgId,
        name: org.name,
        alternateName: org.association,
        sport: ["American football", "Dance", "Basketball"],
        foundingDate: org.founded,
        memberOf: {
          "@type": "SportsOrganization",
          name: "Gulf Coast Pop Warner",
        },
        areaServed: org.place,
        telephone: phones.brad.tel,
        email: org.email,
        sameAs: [org.facebook, org.honeybeesFacebook],
        url: absoluteUrl("/"),
      },
      {
        "@type": "SportsTeam",
        name: "Honeybees",
        foundingDate: org.honeybeesFounded,
        sport: "Dance",
        parentOrganization: { "@id": orgId },
      },
    ],
  };
}
