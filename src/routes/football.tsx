import { createFileRoute, Link } from "@tanstack/react-router";
import { GetNominatedBlock } from "@/components/asg-block";
import { JoinCard } from "@/components/join-card";
import { PhotoStrip } from "@/components/photo-strip";
import { ages, org, phones, values } from "@/lib/org";
import { footballFeatured } from "@/lib/photos";
import { pageHead, titles } from "@/lib/seo";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/football")({
  head: () =>
    pageHead({
      title: titles.football,
      description:
        "Jr Bees football in Port Arthur. Ages 5 to 12. Football sign-ups start in January. A Gulf Coast Pop Warner program.",
      path: "/football",
    }),
  component: FootballPage,
});

function FootballPage() {
  return (
    <article>
      <header className="bg-plum px-5 py-12 text-cream md:px-8 md:py-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-display text-6xl font-extrabold uppercase md:text-7xl">Football</h1>
          <p className="mt-4 text-xl text-cream/90">
            Jr Bees football is for ages {ages.football.min} to {ages.football.max}. Football sign-ups start in
            January.
          </p>
        </div>
      </header>
      <div className="mx-auto max-w-3xl px-5 py-10 md:px-8">
        <p className="text-lg text-ink">
          Coach Brad wants a better athlete and a better student. {values.players}
        </p>
        <p className="mt-4 text-ink">
          Coach Brad takes the kids to college games at Lamar University and Texas Southern (TSU), and to Houston
          Texans training camp.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button asChild tone="gold">
            <a href={`tel:${phones.brad.tel}`}>Call {phones.brad.display}</a>
          </Button>
          <Button asChild tone="quiet">
            <a href={org.facebook}>Jr Bees on Facebook</a>
          </Button>
        </div>
        <div className="mt-10">
          <GetNominatedBlock surface="cream" />
        </div>
      </div>
      <div className="px-5 pb-10 md:px-8">
        <div className="mx-auto max-w-6xl">
          <PhotoStrip ids={footballFeatured} />
        </div>
      </div>
      <div className="mx-auto max-w-3xl px-5 pb-16 md:px-8">
        <JoinCard />
        <p className="mt-8">
          <Link to="/donate" className="inline-flex min-h-11 items-center font-display uppercase text-plum underline underline-offset-4">
            Donate to 30x30
          </Link>
        </p>
      </div>
    </article>
  );
}
