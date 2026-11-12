import { createFileRoute, Link } from "@tanstack/react-router";
import { BuildingScoreboard } from "@/components/building-scoreboard";
import { CashAppGive } from "@/components/cash-app-give";
import { PlaceholderTile } from "@/components/placeholder-tile";
import { campaign } from "@/lib/campaign";
import { formatUsd } from "@/lib/money";
import { placeholders } from "@/lib/facts";
import { isPreview } from "@/lib/site-context";
import { org } from "@/lib/org";
import { pageHead, titles } from "@/lib/seo";

export const Route = createFileRoute("/donate")({
  head: () =>
    pageHead({
      title: titles.donate,
      description:
        "Give a dollar. Build a dream. Donate to the Port Arthur Jr Bees 30x30 Building Fund on Cash App $PAJrBees.",
      path: "/donate",
      ogImage: "/og-donate.jpg",
    }),
  component: DonatePage,
});

function DonatePage() {
  return (
    <article>
      <BuildingScoreboard variant="full" />
      <div className="mx-auto max-w-3xl px-5 py-12 md:px-8">
        <h2 className="font-display text-4xl font-extrabold uppercase text-plum">{campaign.name}</h2>
        <p className="mt-4 text-xl text-ink">
          The building costs {formatUsd(campaign.goal)}. Every dollar goes to the 30x30 Building Fund.
        </p>
        <p className="mt-4 text-ink">
          Coach Brad's family are educators, so tutoring and after-school help are part of the plan from day one.
        </p>
        <div className="mt-10">
          <CashAppGive />
        </div>
        {placeholders.buildingSitePhoto ? null : isPreview ? (
          <div className="mt-10">
            <PlaceholderTile token="[BUILDING_SITE_PHOTO]" subject="The 30x30 site" />
          </div>
        ) : null}
        <section className="mt-12 border-t border-ink/10 pt-10">
          <h2 className="font-display text-3xl font-extrabold uppercase text-plum">Other ways to help</h2>
          <ul className="mt-4 space-y-3 text-ink">
            <li>
              <Link to="/sponsor" className="inline-flex min-h-11 items-center underline decoration-plum underline-offset-4">
                Sponsor a season
              </Link>
            </li>
            <li>Give gear. Call Coach Brad and he will tell you what the closet needs.</li>
            <li>
              Call Coach Brad at{" "}
              <a className="inline-flex min-h-11 items-center underline decoration-plum underline-offset-4" href="tel:+14094983375">
                409-498-3375
              </a>
              .
            </li>
          </ul>
          <p className="mt-8 text-stone">{org.name} is a nonprofit.</p>
        </section>
      </div>
    </article>
  );
}
