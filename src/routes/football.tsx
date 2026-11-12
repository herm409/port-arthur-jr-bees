import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PendingTag } from "@/components/pending-tag";
import { fees } from "@/lib/campaign";
import { AsgNominate, AsgSpotlight } from "@/components/asg-block";
import { pageHead, phones, practice } from "@/lib/org";

export const Route = createFileRoute("/football")({
  head: () =>
    pageHead({
      title: "Football | Port Arthur Jr Bees",
      description:
        "Port Arthur Jr Bees football is a Gulf Coast Pop Warner program led by Coach Brad Coleman. Sign-ups start in January. The fee is $75.",
      path: "/football",
    }),
  component: FootballPage,
});

function FootballPage() {
  return (
    <article>
      <header className="relative isolate overflow-hidden bg-ink text-cream">
        <img
          src="/media/jimdo/08-i5fa4d54.jpg"
          alt="Coach Brad and Jr Bees players in purple and gold honeycomb jerseys at a night game."
          width={1400}
          height={1050}
          className="absolute inset-0 size-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-ink/70" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <p className="font-display text-sm uppercase tracking-[0.2em] text-gold">Jr Bees football</p>
          <h1 className="mt-3 max-w-3xl font-display text-[clamp(2.6rem,8vw,5.5rem)] uppercase leading-[0.88]">
            Fundamentals, school, and Friday night lights.
          </h1>
          <p className="mt-6 max-w-xl text-xl text-cream/90">
            Jr Bees football is Gulf Coast Pop Warner, led by Coach Brad Coleman. The fee is {fees.football}. {fees.footballSignups}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild tone="gold">
              <Link to="/register">Sign up</Link>
            </Button>
            <Button asChild tone="line">
              <a href={`tel:${phones.brad.tel}`}>Call {phones.brad.display}</a>
            </Button>
          </div>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-2 md:px-8 md:py-16">
        <div>
          <h2 className="font-display text-5xl uppercase">What the nights are for</h2>
          <ul className="mt-6 space-y-4 text-lg">
            <li>Football fundamentals, taught until they stick.</li>
            <li>Sportsmanship, and a chance to walk onto college and pro fields.</li>
            <li>School stays part of the conversation.</li>
            <li>{fees.reason}</li>
          </ul>
          <p className="mt-6 text-stone">
            {practice.when}, {practice.hours}, at the {practice.where}, {practice.streets}.
            {practice.pending ? <PendingTag label="Confirm this season's practice times and place" /> : null}
          </p>
        </div>
        <img
          src="/media/jimdo/26-ia5dde76.jpg"
          alt="Jr Bees players in purple and gold jerseys on game day."
          className="aspect-[4/5] w-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </section>

      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
          <AsgNominate onInk headingLevel={2} />
          <AsgSpotlight onInk />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
        <h2 className="font-display text-5xl uppercase">Players who came through here</h2>
        <p className="mt-4 max-w-3xl text-lg">
          Former Jr Bees players have been in the NFL draft, and some now coach in college, high school, and the XFL. The kids also go to Lamar University games, Texas Southern games, and Houston Texans training camp.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild tone="gold">
            <a href={`tel:${phones.brad.tel}`}>Call {phones.brad.display}</a>
          </Button>
          <Button asChild tone="quiet">
            <Link to="/register">Sign up</Link>
          </Button>
        </div>
      </section>
    </article>
  );
}
