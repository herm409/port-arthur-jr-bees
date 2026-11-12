import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { phones } from "@/lib/org";

export const Route = createFileRoute("/honeybees")({
  head: () => ({
    meta: [
      { title: "Floor — Port Arthur Honey Bees" },
      {
        name: "description",
        content:
          "Port Arthur Honey Bees dance and cheer with the Jr Bees. Competition teams, etiquette, and a long run of titles.",
      },
    ],
  }),
  component: HoneyPage,
});

function HoneyPage() {
  return (
    <article>
      <header className="hex-field">
        <div className="mx-auto grid max-w-6xl items-end gap-8 px-5 py-14 md:px-8 lg:grid-cols-2 lg:py-20">
          <div>
            <p className="font-display text-sm uppercase tracking-[0.28em] text-gold">The floor</p>
            <h1 className="mt-3 text-hero uppercase">
              Keeping the
              <span className="block">legacy alive.</span>
            </h1>
            <p className="mt-6 max-w-md text-xl text-cream/90">
              Brooke Coleman’s line. She was a Honey Bee before she directed them. The girls cheer Jr Bees football, then they compete.
            </p>
          </div>
          <img
            src="/media/honeybees.jpg"
            alt="Honey Bees and coaches with trophies and medals on a wooden gym floor, wearing purple."
            className="aspect-[4/3] w-full object-cover outline -outline-offset-1 outline-cream/20"
          />
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <section className="sideline">
          <p className="font-display text-2xl text-plum">01</p>
          <div className="max-w-3xl">
            <h2 className="font-display text-5xl uppercase">Sports is the window</h2>
            <p className="mt-4 text-xl">
              “We use sports as the window, but we try to educate the girls. We have etiquette classes and other things we use to enhance them.” That’s Brooke, to the Port Arthur News — not a brochure rewrite.
            </p>
            <p className="mt-4 text-lg text-stone">
              In 2026 the Honey Bees were back at Memorial High School’s Black History program, learning what sisterhood, loyalty, and family have meant in Divine Nine history. The floor is a classroom that happens to hit a formation.
            </p>
          </div>
        </section>

        <section className="sideline">
          <p className="font-display text-2xl text-plum">02</p>
          <div>
            <h2 className="font-display text-5xl uppercase">How the teams have split</h2>
            <div className="mt-8 grid gap-px bg-ink/10 sm:grid-cols-3">
              {[
                ["Tiny Mite", "The youngest dancers. The News had them starting around five."],
                ["Junior Peewee", "Mid ladder. They have been the ones packing for nationals."],
                ["Varsity", "The older line, up toward 16. Sharper routines, same purple."],
              ].map(([name, body]) => (
                <div key={name} className="bg-cream p-5">
                  <h3 className="font-display text-3xl uppercase text-plum">{name}</h3>
                  <p className="mt-3 text-ink">{body}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-stone">
              Those names are the 2021 competition split. Coach Rayya places this year’s girls. Don’t treat a four-year-old article as a roster.
            </p>
          </div>
        </section>

        <section className="sideline">
          <p className="font-display text-2xl text-plum">03</p>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="font-display text-5xl uppercase">The hardware is real. So is the bill.</h2>
              <p className="mt-4 text-lg">
                By late 2021 the Honey Bees were regional champions headed to Universal Studios, their ninth nationals trip. The Enterprise, a year later, counted eight straight state titles and seven Disney trips. Championships the News described as a nine-year run. The numbers vary by who is counting state versus regional. The pattern doesn’t: they keep qualifying, and the trip costs more than a candy sale.
              </p>
              <p className="mt-4 text-lg">
                $7,000 was the Orlando number with $2,000 left in the account. Disney weekends have run near $8,000 for four days. Sponsors and the credit union have closed gaps. Parents should still hear the current number from a coach.
              </p>
            </div>
            <div className="border border-ink/10 p-6">
              <p className="font-display text-sm uppercase tracking-widest text-stone">Call the floor</p>
              <p className="mt-3 font-display text-4xl uppercase">{phones.rayya.name}</p>
              <p className="text-stone">{phones.rayya.role}</p>
              <a href={`tel:${phones.rayya.tel}`} className="mt-4 block font-display text-3xl text-plum">
                {phones.rayya.display}
              </a>
              <p className="mt-6 text-sm text-stone">
                The 2021 staff in the News also included Madonna Green, Jimmera Hyder, and Bradja Coleman, with Rayya Ruffin coaching. The number on the association’s own page is Coach Rayya’s.
              </p>
              <div className="mt-6">
                <Button asChild tone="plum">
                  <Link to="/support">Help them travel</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}
