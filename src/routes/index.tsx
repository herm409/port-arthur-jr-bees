import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { FundMeter } from "@/components/fund-meter";
import { JoinCard } from "@/components/join-card";
import { PendingTag } from "@/components/pending-tag";
import { AsgNominate, AsgSpotlight } from "@/components/asg-block";
import { org, pageHead } from "@/lib/org";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead({
      title: "Port Arthur Jr Bees | Youth Football and Dance Since 1985",
      description:
        "Port Arthur Jr Bees is a nonprofit youth football and Honeybees dance program in Port Arthur, Texas. Sign a child up or give to the 30x30 Building Fund.",
      path: "/",
    }),
  component: Home,
});

function Home() {
  return (
    <>
      <section id="hero" className="relative isolate min-h-[calc(100svh-11rem)] overflow-hidden bg-ink text-cream md:min-h-[36rem]">
        <picture>
          <source media="(max-width: 767px)" srcSet="/media/jimdo/25-i836be40.jpg" />
          <img
            src="/media/jimdo/08-i5fa4d54.jpg"
            alt="Coach Brad and Jr Bees players in purple and gold honeycomb jerseys at a night game."
            width={1400}
            height={1050}
            className="hero-lights absolute inset-0 size-full object-cover"
            fetchPriority="high"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/25" aria-hidden="true" />
        <div className="relative mx-auto flex min-h-[calc(100svh-11rem)] max-w-6xl flex-col justify-end px-5 py-8 md:min-h-[36rem] md:justify-center md:px-8 md:py-20">
          <p className="font-display text-sm uppercase tracking-[0.2em] text-lamp">
            {org.association}, a nonprofit
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-[clamp(2.4rem,9vw,5.4rem)] uppercase leading-[0.88] text-cream">
            Port Arthur youth football and dance since 1985.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-cream/90 sm:text-xl">
            Jr Bees football and the Honeybees dance team. A Gulf Coast Pop Warner program led by Coach Brad Coleman.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild tone="gold" className="min-h-12 whitespace-nowrap">
              <Link to="/donate">Donate to 30x30</Link>
            </Button>
            <Button asChild tone="line" className="min-h-12 whitespace-nowrap">
              <Link to="/register">Sign up</Link>
            </Button>
          </div>
        </div>
      </section>

      <FundMeter />
      <JoinCard />

      <section className="bg-ink text-cream">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-2 md:items-center md:px-8 md:py-16">
          <div>
            <p className="font-display text-sm uppercase tracking-[0.2em] text-gold">Game days off the field</p>
            <h2 className="mt-3 font-display text-5xl uppercase">Where the kids go</h2>
            <p className="mt-4 text-lg text-cream/90">
              Coach Brad takes the kids to Lamar University football games, Houston Texans training camp, and Texas Southern games. When the team van broke down, Town and Country Ford covered more than $3,000 in repairs to keep the trips going.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <img
              src="/media/jimdo/25-i836be40.jpg"
              alt="Jr Bees and coaches in McNeese Cowboy Stadium at night, with the lights on."
              width={600}
              height={450}
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <img
              src="/media/jimdo/36-i9966db5.jpg"
              alt="Jr Bees outside AT&T Stadium at the 2018 NFL Draft."
              width={478}
              height={540}
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <img
              src="/media/jimdo/47-i656619a.jpg"
              alt="Jr Bees with professional players at Houston Texans training camp."
              width={593}
              height={395}
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:items-center md:px-8 md:py-16">
        <figure>
          <img
            src="/media/jimdo/11-i67d9681.jpg"
            alt="Coach Brad Coleman on the field with another coach."
            width={720}
            height={1316}
            className="aspect-[3/4] w-full object-cover object-top"
            loading="lazy"
            decoding="async"
          />
          <figcaption className="mt-2 text-sm text-stone">
            <PendingTag label="Coach Lovie name in this photo to confirm with Herman" />
          </figcaption>
        </figure>
        <div>
          <p className="font-display text-sm uppercase tracking-[0.2em] text-plum">Coach Brad</p>
          <p className="mt-3 font-display text-7xl uppercase leading-none text-plum tabular-nums">41</p>
          <p className="font-display text-2xl uppercase text-ink">years coaching</p>
          <h2 className="mt-4 font-display text-5xl uppercase">Bradford Coleman</h2>
          <p className="mt-4 text-lg text-ink">
            Coach Brad has been president since 2007 and was inducted into the Hall of Fame in 2023. Former Jr Bees players have been in the NFL draft, and some now coach in college, high school, and the XFL.
          </p>
          <AsgSpotlight />
          <div className="mt-8 border-t border-ink/10 pt-6">
            <AsgNominate />
          </div>
          <div className="mt-6">
            <Button asChild tone="plum">
              <Link to="/donate">Donate to 30x30</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="hex-field">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-12 md:grid-cols-2 md:px-8 md:py-16">
          <div>
            <p className="font-display text-sm uppercase tracking-[0.2em] text-gold">Honeybees</p>
            <h2 className="mt-3 font-display text-5xl uppercase">Year-round dance, founded in 2012</h2>
            <p className="mt-4 text-lg text-cream/90">
              The Honeybees dance year round and perform at Lamar and Port Arthur basketball games. They have won a San Antonio tournament three years in a row, gone to POP 1 nationals in Florida several times, and won a POP 1 regional in Colorado.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild tone="gold">
                <Link to="/honeybees">Meet the Honeybees</Link>
              </Button>
              <Button asChild tone="line">
                <Link to="/register">Sign up for dance</Link>
              </Button>
            </div>
          </div>
          <img
            src="/media/jimdo/01-ia5b3999.jpg"
            alt="Port Arthur Honeybees dancers with a regional champion banner and trophies."
            width={1400}
            height={1050}
            className="aspect-[4/3] w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>
    </>
  );
}
