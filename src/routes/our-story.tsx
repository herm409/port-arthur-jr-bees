import { createFileRoute, Link } from "@tanstack/react-router";
import { PhotoPicture } from "@/components/photo-picture";
import { PlaceholderTile } from "@/components/placeholder-tile";
import { ScoreboardPlate } from "@/components/scoreboard-plate";
import { Button } from "@/components/ui/button";
import { org, values } from "@/lib/org";
import { placeholders } from "@/lib/facts";
import { isPreview } from "@/lib/site-context";
import { pageHead, titles } from "@/lib/seo";

export const Route = createFileRoute("/our-story")({
  head: () =>
    pageHead({
      title: titles.story,
      description:
        "Port Arthur Jr Bees since 1985. Coach Brad Coleman, the Honeybees dance team, and trips to Lamar, TSU, and Texans camp.",
      path: "/our-story",
    }),
  component: StoryPage,
});

const timeline = [
  {
    year: "1985",
    title: "The Jr Bees begin",
    body: "Port Arthur Jr Bees has been here since 1985. The association is one of the oldest Little League organizations in Southeast Texas.",
  },
  {
    year: "2007",
    title: "Coach Brad takes the presidency",
    body: "Coach Brad Coleman has coached youth sports for 41 years and has led the Jr Bees as president since 2007.",
  },
  {
    year: "2012",
    title: "Honeybees dance team",
    body: "The Honeybees dance team was founded in 2012. The team runs year round, performs at Lamar and Port Arthur basketball games, and has won in San Antonio, Colorado, and Florida.",
  },
  {
    year: "2018",
    title: "NFL Draft",
    body: "Coach Brad takes Jr Bees to rooms most youth teams never see, including the 2018 NFL Draft at AT&T Stadium.",
  },
  {
    year: "2023",
    title: "Hall of Fame",
    body: "Coach Brad was inducted into the Prairie View Interscholastic League Coaches Association Hall of Fame.",
  },
  {
    year: "2024",
    title: "The van, and the beach",
    body: "When the team van broke down, Town and Country Ford covered more than $3,000 in repairs to keep the trips going. Port Arthur LNG's Environmental Champions grant backed a McFaddin Beach cleanup.",
  },
];

function StoryPage() {
  return (
    <article>
      <header className="mx-auto max-w-3xl px-5 py-12 md:px-8 md:py-16">
        <h1 className="font-display text-6xl font-extrabold uppercase text-ink md:text-7xl">Our story</h1>
        <p className="mt-5 text-xl text-ink">
          A Gulf Coast Pop Warner program in Port Arthur, Texas, led by Coach Brad Coleman.
        </p>
      </header>

      <ScoreboardPlate
        figure="41"
        figureLabel="Years coaching"
        photo={
          placeholders.coachBradPortrait ? (
            <img src={placeholders.coachBradPortrait} alt="Coach Brad Coleman" className="h-full w-full object-cover" />
          ) : (
            <PhotoPicture id="11-i67d9681" sizes="(min-width: 768px) 58vw, 100vw" className="h-full w-full" />
          )
        }
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
      </ScoreboardPlate>

      <div className="mx-auto max-w-3xl px-5 py-12 md:px-8">
        <ol>
          {timeline.map((item) => (
            <li key={item.year} className="border-t border-ink/10 py-6">
              <p className="font-display text-[14px] font-extrabold uppercase tracking-[0.18em] text-plum">{item.year}</p>
              <h2 className="mt-2 font-display text-3xl font-extrabold uppercase">{item.title}</h2>
              <p className="mt-3 text-ink">{item.body}</p>
            </li>
          ))}
        </ol>
      </div>

      <section id="trips" className="bg-cream px-5 py-12 md:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-5xl font-extrabold uppercase text-plum">The trips</h2>
          <p className="mt-4 text-lg text-ink">
            Coach Brad takes the kids to college games at Lamar University and Texas Southern (TSU), and to Houston
            Texans training camp. Houston Texans equipment grants have included $2,000. When the team van broke down,
            Town and Country Ford covered more than $3,000 in repairs to keep the trips going.
          </p>
        </div>
        <div className="mx-auto mt-8 grid max-w-6xl gap-4 md:grid-cols-3">
          {placeholders.lamarTripPhoto ? (
            <img src={placeholders.lamarTripPhoto} alt="Jr Bees at a Lamar University game." className="aspect-[4/3] w-full object-cover" />
          ) : isPreview ? (
            <PlaceholderTile token="[LAMAR_TRIP_PHOTO]" subject="Lamar University" />
          ) : null}
          {placeholders.tsuTripPhoto ? (
            <img src={placeholders.tsuTripPhoto} alt="Jr Bees at a Texas Southern game." className="aspect-[4/3] w-full object-cover" />
          ) : isPreview ? (
            <PlaceholderTile token="[TSU_TRIP_PHOTO]" subject="Texas Southern" />
          ) : null}
          <figure>
            <PhotoPicture id="47-i656619a" sizes="(min-width: 768px) 30vw, 100vw" className="aspect-[4/3]" />
            <figcaption className="mt-2 text-[14px] text-stone">Houston Texans camp</figcaption>
          </figure>
          <figure>
            <PhotoPicture id="36-i9966db5" sizes="(min-width: 768px) 30vw, 100vw" className="aspect-[4/3]" />
            <figcaption className="mt-2 text-[14px] text-stone">NFL Draft 2018</figcaption>
          </figure>
          <figure>
            <PhotoPicture id="25-i836be40" sizes="(min-width: 768px) 30vw, 100vw" className="aspect-[4/3]" />
            <figcaption className="mt-2 text-[14px] text-stone">McNeese Cowboy Stadium</figcaption>
          </figure>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-5 py-12 md:px-8">
        <blockquote className="font-display text-3xl font-extrabold uppercase leading-snug text-plum">
          {values.village}
        </blockquote>
        <p className="mt-3 text-[14px] text-stone">{org.association}</p>
        <p className="mt-8 text-ink">
          The mission is {values.mission}
        </p>
        <p className="mt-4 text-ink">{values.respect}</p>
        <div className="mt-8">
          <Button asChild tone="quiet">
            <Link to="/register">Join</Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
