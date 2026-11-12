import { createFileRoute, Link } from "@tanstack/react-router";
import { BuildingScoreboard } from "@/components/building-scoreboard";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/hero";
import { JoinCard } from "@/components/join-card";
import { PhotoPicture } from "@/components/photo-picture";
import { PhotoStrip } from "@/components/photo-strip";
import { ScoreboardPlate } from "@/components/scoreboard-plate";
import { homeJsonLd } from "@/lib/json-ld";
import { org } from "@/lib/org";
import { isPreview } from "@/lib/site-context";
import { homeStrip } from "@/lib/photos";
import { pageHead, titles } from "@/lib/seo";
import { sponsorList } from "@/lib/facts";

export const Route = createFileRoute("/")({
  head: () => {
    const head = pageHead({
      title: titles.home,
      description:
        "Port Arthur Jr Bees: youth football and Honeybees dance since 1985. Give to the 30x30 Building Fund or sign a child up.",
      path: "/",
    });
    return {
      ...head,
      links: [
        ...head.links,
        {
          rel: "preload",
          as: "image",
          type: "image/avif",
          href: "/media/opt/25-i836be40-w600.avif",
          media: "(max-width: 767px)",
        },
        {
          rel: "preload",
          as: "image",
          type: "image/avif",
          href: "/media/opt/08-i5fa4d54-w1200.avif",
          media: "(min-width: 768px)",
        },
      ],
    };
  },
  component: Home,
});

function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd()) }} />
      <Hero />
      <BuildingScoreboard variant="compact" />
      <div className="mx-auto max-w-3xl px-5 py-6 md:px-0 md:py-8">
        <JoinCard compact />
      </div>
      <ScoreboardPlate
        figure="3K+"
        figureLabel="Town and Country Ford van repair"
        photo={<PhotoPicture id="12-i1c3ce66" sizes="(min-width: 768px) 58vw, 100vw" className="h-full w-full" />}
        action={
          <Link
            to="/our-story"
            hash="trips"
            className="inline-flex min-h-11 items-center font-display text-lg font-extrabold uppercase text-gold underline decoration-gold/70 underline-offset-4"
          >
            See the trips
          </Link>
        }
      >
        <p>
          Coach Brad takes the kids to college games at Lamar University and Texas Southern (TSU), and to Houston
          Texans training camp. When the team van broke down, Town and Country Ford covered more than $3,000 in
          repairs to keep the trips going.
        </p>
      </ScoreboardPlate>
      <div className="bg-cream px-5 py-5 md:px-8">
        <div className="mx-auto max-w-6xl">
          <PhotoStrip ids={homeStrip} reveal />
        </div>
      </div>
      <ScoreboardPlate
        reverse
        figure="41"
        figureLabel="Years coaching"
        photo={<PhotoPicture id="11-i67d9681" sizes="(min-width: 768px) 58vw, 100vw" className="h-full w-full" />}
        action={
          <Button asChild tone="gold">
            <Link to="/donate">Donate to 30x30</Link>
          </Button>
        }
      >
        <p>
          Coach Brad has coached youth sports for 41 years and has led the Jr Bees as president since 2007. In 2023
          he was inducted into the Prairie View Interscholastic League Coaches Association Hall of Fame. Former Jr
          Bees have reached the NFL draft, and some now coach in college, high school, and the XFL.
        </p>
        <p className="mt-4">
          <Link
            to="/our-story"
            className="inline-flex min-h-11 items-center font-display uppercase text-gold underline decoration-gold/70 underline-offset-4"
          >
            Our story
          </Link>
        </p>
      </ScoreboardPlate>
      <section className="mx-auto max-w-3xl px-5 py-6 md:px-8 md:py-8">
        <h2 className="font-display text-4xl font-extrabold uppercase text-plum">Sponsors</h2>
        <p className="mt-4 text-ink">
          Local businesses keep sign-up low and the trips going. If you can sponsor a season, Coach Brad wants to
          hear from you.
        </p>
        {sponsorList ? (
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
            {sponsorList.map((sponsor) => (
              <li key={sponsor.name} className="font-display text-2xl font-extrabold uppercase text-ink">
                {sponsor.name}
              </li>
            ))}
          </ul>
        ) : isPreview ? (
          <p className="mt-4 font-display text-[14px] uppercase tracking-wide text-stone">
            [SPONSOR_LIST] Sponsor wall waiting on confirmation.
          </p>
        ) : null}
        <div className="mt-6">
          <Button asChild tone="quiet">
            <Link to="/sponsor">Sponsor a season</Link>
          </Button>
        </div>
        <p className="mt-8 text-stone">{org.affiliationFull}.</p>
      </section>
    </>
  );
}
