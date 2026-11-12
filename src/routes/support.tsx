import { createFileRoute } from "@tanstack/react-router";
import { GiftLadder } from "@/components/gift-ladder";
import { phones } from "@/lib/org";

export const Route = createFileRoute("/support")({
  head: () => ({
    meta: [
      { title: "Village — Support the Jr Bees" },
      {
        name: "description",
        content:
          "Back the Port Arthur Jr Bees and Honey Bees with gear, travel, or your time. Confirm any gift with Coach Brad.",
      },
    ],
  }),
  component: SupportPage,
});

function SupportPage() {
  return (
    <article className="mx-auto max-w-6xl px-5 md:px-8">
      <header className="sideline">
        <p className="font-display text-2xl text-plum">01</p>
        <div className="max-w-3xl">
          <p className="font-display text-sm uppercase tracking-[0.28em] text-plum">The village</p>
          <h1 className="mt-3 text-hero uppercase">
            Stand where
            <span className="block text-plum">they can see you.</span>
          </h1>
          <p className="mt-6 text-xl">
            This is not a donate button that pretends to be a bank. It is the honest menu: gear, travel, or your actual presence. Money moves through Coach Brad, not through this page.
          </p>
        </div>
      </header>

      <section className="sideline">
        <p className="font-display text-2xl text-plum">02</p>
        <div>
          <h2 className="font-display text-5xl uppercase">Pick the size of the help</h2>
          <div className="mt-8">
            <GiftLadder />
          </div>
        </div>
      </section>

      <section className="sideline">
        <p className="font-display text-2xl text-plum">03</p>
        <div className="grid gap-10 lg:grid-cols-3">
          <div>
            <h2 className="font-display text-3xl uppercase">Gear</h2>
            <p className="mt-3">
              J.K. Chevrolet — Mr. Turner — spent years on helmets, jerseys, and shoulder pads. The thank-you was in person: a framed Jr Bees jersey, and before that a Nick Saban football from a camp Coach Brad works. Port Iron has carried the league across seasons too. A business that wants in should call, not mail a logo and hope.
            </p>
          </div>
          <div>
            <h2 className="font-display text-3xl uppercase">Travel</h2>
            <p className="mt-3">
              Nationals are the expensive proof that the Honey Bees are good. The 2021 published path was Port Arthur Community Federal Credit Union, 3100 Central Mall Drive, account 9766, name Jr. Bees. That notice is old. Use it only after Coach Brad says the account is still the one.
            </p>
          </div>
          <div>
            <h2 className="font-display text-3xl uppercase">Time</h2>
            <p className="mt-3">
              Practice is the volunteer job that matters: Mondays, Wednesdays, Thursdays, 6 to 8, old Franklin campus. Chain-gang, snacks, a ride, a parent who stays. Joseph Guillory once put it plain — the program needs the community in the relationship, not only the kids dropped at the curb.
            </p>
          </div>
        </div>
      </section>

      <section className="sideline">
        <p className="font-display text-2xl text-plum">04</p>
        <div className="hex-field px-6 py-10 sm:px-10">
          <h2 className="font-display text-5xl uppercase">Call before you give</h2>
          <p className="mt-4 max-w-xl text-cream/85">
            Say what you can do. Gear, a trip, a Friday at Lamar, a business that can cover pads. He will tell you where it should go.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={`tel:${phones.brad.tel}`} className="inline-flex min-h-12 items-center justify-center bg-gold px-5 font-display text-lg uppercase text-ink">
              Coach Brad · {phones.brad.display}
            </a>
            <a href={`tel:${phones.rayya.tel}`} className="inline-flex min-h-12 items-center justify-center bg-cream px-5 font-display text-lg uppercase text-ink">
              Honey Bees · {phones.rayya.display}
            </a>
          </div>
        </div>
      </section>
    </article>
  );
}
