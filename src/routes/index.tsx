import { createFileRoute, Link } from "@tanstack/react-router";
import { HeroStage } from "@/components/hero-stage";
import { SquadFinder } from "@/components/squad-finder";
import { GiftLadder } from "@/components/gift-ladder";
import { Button } from "@/components/ui/button";
import { milestones, org } from "@/lib/org";
import { photoTeasers } from "@/lib/photos";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Port Arthur Jr Bees — The village on the sideline" },
      {
        name: "description",
        content:
          "Gulf Coast Pop Warner football and Honey Bees dance in Port Arthur. Purple, gold, and a sideline since the mid-1980s.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl items-end gap-10 px-5 py-12 md:px-8 lg:grid-cols-12 lg:py-16">
        <div className="lg:col-span-5">
          <p className="font-display text-sm uppercase tracking-[0.28em] text-plum">Port Arthur Jr Bees Association</p>
          <h1 className="mt-4 text-hero uppercase text-ink">
            The village
            <span className="block text-plum">is the roster.</span>
          </h1>
          <p className="mt-6 max-w-md text-xl text-ink">
            Football and Honey Bees in Port Arthur. {org.affiliation}. The program has been here since the mid-1980s.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild tone="plum">
              <Link to="/register" search={{ age: 10, side: "either" }}>Put a child in</Link>
            </Button>
            <Button asChild tone="quiet">
              <Link to="/support">Back the village</Link>
            </Button>
            <Button asChild tone="quiet">
              <Link to="/register" hash="medical">Medical form</Link>
            </Button>
          </div>
        </div>
        <div className="lg:col-span-7">
          <HeroStage />
        </div>
      </section>

      <section className="border-y border-ink/10">
        <div className="mx-auto grid max-w-6xl sm:grid-cols-3">
          {[
            ["Since the mid-80s", "Coach Brad has been with the Jr Bees since then, and president since 2007."],
            ["The kids", "Hard work, a decent attitude, and a little fun."],
            ["Football and dance", "Jr Bees play. Honey Bees cheer and compete."],
          ].map(([title, body]) => (
            <div key={title} className="border-b border-ink/10 px-5 py-6 sm:border-b-0 sm:border-r sm:last:border-r-0 md:px-8">
              <p className="font-display text-2xl uppercase">{title}</p>
              <p className="mt-2 text-stone">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <section className="sideline">
          <p className="font-display text-2xl text-plum">01</p>
          <div className="grid items-stretch gap-6 lg:grid-cols-12">
            <Link to="/football" className="group relative min-h-80 overflow-hidden bg-ink lg:col-span-7">
              <img
                src="/media/practice-2016.jpg"
                alt="Jr Bees in gold helmets and purple mesh at practice."
                className="h-full min-h-80 w-full object-cover opacity-90 outline -outline-offset-1 outline-cream/10 transition-transform duration-300 ease-out group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              />
              <div className="absolute inset-x-0 bottom-0 bg-ink/80 p-5 text-cream">
                <p className="font-display text-sm uppercase tracking-widest text-gold">Field</p>
                <p className="font-display text-4xl uppercase">Football</p>
                <p className="mt-1 max-w-md text-cream/80">Flag through 12U. Fundamentals, school, and a ride to rooms most Pop Warner teams never see.</p>
              </div>
            </Link>
            <Link to="/honeybees" className="group relative min-h-80 overflow-hidden hex-field lg:col-span-5">
              <img
                src="/media/honeybees.jpg"
                alt="Honey Bees with medals on the gym floor."
                className="h-64 w-full object-cover object-top outline -outline-offset-1 outline-cream/10 transition-transform duration-300 ease-out group-hover:scale-[1.02] motion-reduce:transition-none"
              />
              <div className="p-5">
                <p className="font-display text-sm uppercase tracking-widest text-gold">Floor</p>
                <p className="font-display text-4xl uppercase">Honey Bees</p>
                <p className="mt-2 text-cream/85">Cheer the season. Compete after it. Etiquette, sisterhood, and a stack of regional hardware.</p>
              </div>
            </Link>
          </div>
        </section>

        <section className="sideline">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="font-display text-5xl uppercase">Photos</h2>
            <Link to="/photos" className="font-display text-lg uppercase underline decoration-plum decoration-2 underline-offset-4">
              All of them
            </Link>
          </div>
          <div className="mt-5 flex gap-3 overflow-x-auto pb-2">
            {photoTeasers.map((photo) => (
              <Link key={photo.src} to="/photos" className="w-56 shrink-0 sm:w-64">
                <img src={photo.src} alt={photo.alt} className="aspect-[4/3] w-full object-cover" />
                <p className="mt-1 text-sm text-stone">{photo.caption}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="sideline">
          <p className="font-display text-2xl text-plum">02</p>
          <div className="max-w-3xl">
            <h2 className="font-display text-5xl uppercase sm:text-6xl">Our program will always be about the players and cheerleaders, not the plays.</h2>
            <p className="mt-6 text-xl italic text-stone">
              “It takes a village to raise a child. Our organization is that village.” Success, to them, is a kid knowing they did the best they were capable of.
            </p>
            <p className="mt-4 text-ink">
              The door is open regardless of race, creed, or national origin. The work is sportsmanship, school, and the fundamentals — football on the field, dance and cheer on the floor.
            </p>
          </div>
        </section>

        <section className="sideline">
          <p className="font-display text-2xl text-plum">03</p>
          <div>
            <h2 className="font-display text-5xl uppercase">Where the kids have stood</h2>
            <p className="mt-3 max-w-xl text-stone">From the Port Arthur News, the Beaumont Enterprise, and the association’s Facebook page.</p>
            <ol className="mt-8 border-l-2 border-gold">
              {milestones.map((item) => (
                <li key={item.title} className="py-5 pl-6">
                  <p className="font-display text-sm uppercase tracking-widest text-plum">{item.year}</p>
                  <h3 className="mt-1 font-display text-3xl uppercase">{item.title}</h3>
                  <p className="mt-2 max-w-2xl text-ink">{item.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="sideline" id="place">
          <p className="font-display text-2xl text-plum">04</p>
          <div>
            <h2 className="font-display text-5xl uppercase">Place a child</h2>
            <p className="mt-3 max-w-xl text-stone">
              Latest public note: they are still signing athletes 9 through 12. Younger and dance spots have existed for years. The slider tells you who to call. It does not enroll anyone.
            </p>
            <div className="mt-8">
              <SquadFinder />
            </div>
          </div>
        </section>

        <section className="sideline">
          <p className="font-display text-2xl text-plum">05</p>
          <div>
            <h2 className="font-display text-5xl uppercase">What support has actually bought</h2>
            <p className="mt-3 max-w-xl text-stone">These amounts were in the newspaper. Call Coach Brad before you send anything.</p>
            <div className="mt-8">
              <GiftLadder />
            </div>
            <div className="mt-6">
              <Button asChild tone="ink">
                <Link to="/support">How to stand with them</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="sideline">
          <p className="font-display text-2xl text-plum">06</p>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <h2 className="font-display text-5xl uppercase">Come to the field</h2>
              <p className="mt-4 text-xl">
                {org.practice.when}
                <span className="block font-display text-4xl uppercase text-plum">{org.practice.hours}</span>
              </p>
              <p className="mt-4 text-ink">
                {org.practice.where}
                <span className="block text-stone">{org.practice.streets}, {org.place}</span>
              </p>
              <a
                href={org.practice.map}
                className="mt-5 inline-flex min-h-11 items-center font-display text-lg uppercase underline decoration-plum decoration-2 underline-offset-4"
              >
                Map the campus
              </a>
            </div>
            <img
              src="/media/jr-bees-texans.jpg"
              alt="Jr Bees players together under the tent at Texans camp."
              className="aspect-[4/3] w-full object-cover shadow-lift outline -outline-offset-1 outline-ink/10"
            />
          </div>
        </section>
      </div>
    </>
  );
}
