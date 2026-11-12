import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { org, phones } from "@/lib/org";

export const Route = createFileRoute("/football")({
  head: () => ({
    meta: [
      { title: "Field — Jr Bees football" },
      {
        name: "description",
        content:
          "Port Arthur Jr Bees football. Gulf Coast Pop Warner. Practice Monday, Wednesday, and Thursday at the Old Franklin Campus.",
      },
    ],
  }),
  component: FootballPage,
});

const ladder = [
  ["Flag", "The young door. It has been on the program. Ask if it’s open this year."],
  ["8U", "Eight and under. A full team when the numbers are there."],
  ["10U", "Inside the ages the page is actively placing."],
  ["12U", "Top of this ladder. Still the call Coach Brad is making."],
];

function FootballPage() {
  return (
    <article className="mx-auto max-w-6xl px-5 md:px-8">
      <header className="sideline">
        <p className="font-display text-2xl text-plum">01</p>
        <div className="grid items-end gap-8 lg:grid-cols-2">
          <div>
            <p className="font-display text-sm uppercase tracking-[0.28em] text-plum">The field</p>
            <h1 className="mt-3 text-hero uppercase">
              Go to
              <span className="block text-plum">work.</span>
            </h1>
            <p className="mt-6 max-w-md text-xl">
              Jr Bees football is Gulf Coast Pop Warner. Coach Brad wants a better athlete and a better student.
            </p>
          </div>
          <img
            src="/media/bees-enterprise.jpg"
            alt="The Jr Bees in purple and gold honeycomb jerseys at Houston Texans practice."
            className="aspect-[16/10] w-full object-cover shadow-lift outline -outline-offset-1 outline-ink/10"
          />
        </div>
      </header>

      <section className="sideline">
        <p className="font-display text-2xl text-plum">02</p>
        <div>
          <h2 className="font-display text-5xl uppercase">The ladder</h2>
          <p className="mt-3 max-w-xl text-stone">
            Published over the years as flag, 8U, 10U, and 12U — earlier stories also say Mighty Mite, Junior Pee Wee, and Pee Wee. Same idea: age groups, not an academy menu. Recent posts are signing 9 through 12.
          </p>
          <ol className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
            {ladder.map(([name, body], index) => (
              <li key={name} className="grid gap-2 py-5 sm:grid-cols-[8rem_1fr] sm:items-baseline">
                <p className="font-display text-4xl uppercase text-plum">
                  <span className="mr-3 text-plum">{index + 1}</span>
                  {name}
                </p>
                <p>{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="sideline">
        <p className="font-display text-2xl text-plum">03</p>
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-5xl uppercase">What the nights are for</h2>
            <ul className="mt-6 space-y-4 text-lg">
              <li>Fundamentals of football, repeated until they’re boring and then right.</li>
              <li>Sportsmanship loud enough that a college sideline will let them lead the tunnel.</li>
              <li>School in the conversation. The mission names scholastic improvement on purpose.</li>
              <li>A fee kept low so the trip, not the buy-in, is the hard part.</li>
            </ul>
            <p className="mt-6 text-stone">
              {org.practice.when}, {org.practice.hours}, {org.practice.where}, {org.practice.streets}.
            </p>
          </div>
          <img
            src="/media/practice-2016.jpg"
            alt="Practice drill in gold helmets and purple jerseys."
            className="aspect-[4/5] w-full object-cover shadow-lift outline -outline-offset-1 outline-ink/10"
          />
        </div>
      </section>

      <section className="sideline">
        <p className="font-display text-2xl text-plum">04</p>
        <div className="max-w-3xl">
          <h2 className="font-display text-5xl uppercase">Alumni don’t vanish</h2>
          <p className="mt-4 text-lg">
            The association has said former players reached the NFL draft, and some now coach in college, high school, or the XFL. In public posts, quarterback Kamron Rivers and receiver Kenyon Rivers — both former Jr Bees — were at the Houston Texans coaches clinic in the Bubble on June 14, 2025. Coach Brad called it his 13th year at that clinic.
          </p>
          <p className="mt-4 text-lg">
            Families have taken the kids to Lamar games, Texans camp, and a 49ers stadium visit. Home colors are purple and gold.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild tone="gold">
              <a href={`tel:${phones.brad.tel}`}>Call {phones.brad.display}</a>
            </Button>
            <Button asChild tone="quiet">
              <Link to="/register" search={{ age: 10, side: "football" }}>Sign up</Link>
            </Button>
          </div>
        </div>
      </section>
    </article>
  );
}
