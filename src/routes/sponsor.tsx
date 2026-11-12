import { createFileRoute, Link } from "@tanstack/react-router";
import { org, phones } from "@/lib/org";
import { isPreview } from "@/lib/site-context";
import { sponsorCandidates, sponsorList, sponsorTierSuggestions, sponsorTiers } from "@/lib/facts";
import { formatUsd } from "@/lib/money";
import { pageHead, titles } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { PendingTag } from "@/components/pending-flag";

export const Route = createFileRoute("/sponsor")({
  head: () =>
    pageHead({
      title: titles.sponsor,
      description:
        "Sponsor a Port Arthur Jr Bees season. Email jrbees814@gmail.com or call Coach Brad about football, Honeybees, and the 30x30 Building Fund.",
      path: "/sponsor",
    }),
  component: SponsorPage,
});

function SponsorPage() {
  const showTiers = sponsorTiers !== null || isPreview;
  const showWall = sponsorList !== null || isPreview;

  return (
    <article className="mx-auto max-w-3xl px-5 py-12 md:px-8 md:py-16">
      <h1 className="font-display text-6xl font-extrabold uppercase text-ink">Sponsor a season</h1>
      <p className="mt-5 text-xl text-ink">
        We keep sign-up at $75 for football and $90 for Honeybees so every family can play. Fundraisers and sponsors
        cover the rest.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button asChild tone="gold">
          <a href={`mailto:${org.email}?subject=${encodeURIComponent("Sponsoring the Jr Bees")}`}>
            Email about sponsoring
          </a>
        </Button>
        <Button asChild tone="quiet">
          <a href={`tel:${phones.brad.tel}`}>Call {phones.brad.display}</a>
        </Button>
      </div>

      {showTiers ? (
        <section className="mt-12">
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="font-display text-4xl font-extrabold uppercase text-plum">Tiers</h2>
            {sponsorTiers === null && isPreview ? <PendingTag /> : null}
          </div>
          {sponsorTiers ? (
            <ul className="mt-6 divide-y divide-ink/10 border-y border-ink/10">
              {sponsorTiers.map((tier) => (
                <li key={tier.name} className="flex items-baseline justify-between gap-4 py-4">
                  <div>
                    <p className="font-display text-2xl font-extrabold uppercase">{tier.name}</p>
                    <p className="text-stone">{tier.paysFor}</p>
                  </div>
                  <p className="digits font-display text-2xl font-extrabold text-plum">{formatUsd(tier.amount)}</p>
                </li>
              ))}
            </ul>
          ) : (
            <div className="mt-6 border border-dashed border-ink/20 p-5">
              <p className="font-display text-[14px] uppercase tracking-wide text-stone">[SPONSOR_TIERS]</p>
              <p className="mt-2 text-ink">
                A natural framing, waiting on Coach Brad: tie tiers to the 30x30 line items. These amounts are not
                published as official packages until confirmed.
              </p>
              <ul className="mt-4 space-y-2 text-stone">
                {sponsorTierSuggestions.map((tier) => (
                  <li key={tier.name} className="flex justify-between gap-4">
                    <span>{tier.name}</span>
                    <span className="digits font-display">{formatUsd(tier.amount)}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      ) : null}

      {showWall ? (
        <section className="mt-12">
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="font-display text-4xl font-extrabold uppercase text-plum">Sponsor wall</h2>
            {sponsorList === null && isPreview ? <PendingTag /> : null}
          </div>
          {sponsorList ? (
            <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-4">
              {sponsorList.map((sponsor) => (
                <li key={sponsor.name} className="font-display text-3xl font-extrabold uppercase">
                  {sponsor.name}
                </li>
              ))}
            </ul>
          ) : (
            <div className="mt-6 border border-dashed border-ink/20 p-5">
              <p className="font-display text-[14px] uppercase tracking-wide text-stone">[SPONSOR_LIST]</p>
              <p className="mt-2 text-ink">Candidates for Herman to confirm. Not shown as current sponsors.</p>
              <ul className="mt-4 space-y-1 text-stone">
                {sponsorCandidates.map((name) => (
                  <li key={name}>{name}</li>
                ))}
              </ul>
            </div>
          )}
        </section>
      ) : null}

      <p className="mt-12">
        <Link to="/donate" className="inline-flex min-h-11 items-center font-display uppercase text-plum underline underline-offset-4">
          Give to the 30x30 Building Fund
        </Link>
      </p>
    </article>
  );
}
