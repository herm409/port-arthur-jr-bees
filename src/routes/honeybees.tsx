import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { fees } from "@/lib/campaign";
import { org, pageHead, phones } from "@/lib/org";

export const Route = createFileRoute("/honeybees")({
  head: () =>
    pageHead({
      title: "Honeybees Dance | Port Arthur Jr Bees",
      description:
        "The Port Arthur Honeybees dance team was founded in 2012 and practices year round. The fee is $90. Call Coach Rayya to join.",
      path: "/honeybees",
    }),
  component: HoneyPage,
});

function HoneyPage() {
  return (
    <article>
      <header className="hex-field">
        <div className="mx-auto grid max-w-6xl items-end gap-8 px-5 py-14 md:px-8 lg:grid-cols-2 lg:py-20">
          <div>
            <p className="font-display text-sm uppercase tracking-[0.2em] text-gold">Honeybees</p>
            <h1 className="mt-3 font-display text-[clamp(2.6rem,8vw,5.5rem)] uppercase leading-[0.88]">
              Year-round dance, founded in 2012.
            </h1>
            <p className="mt-6 max-w-md text-xl text-cream/90">
              The Honeybees dance all year and perform at Lamar and Port Arthur basketball games. The fee is {fees.dance}.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild tone="gold">
                <Link to="/register">Sign up</Link>
              </Button>
              <Button asChild tone="line">
                <a href={`tel:${phones.rayya.tel}`}>Call {phones.rayya.display}</a>
              </Button>
            </div>
          </div>
          <img
            src="/media/jimdo/01-ia5b3999.jpg"
            alt="Port Arthur Honeybees dancers with a regional champion banner and trophies."
            width={1400}
            height={1050}
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
        <h2 className="font-display text-5xl uppercase">What they have won</h2>
        <ul className="mt-6 max-w-2xl space-y-3 text-lg">
          <li>A San Antonio tournament, three years in a row.</li>
          <li>POP 1 nationals in Florida, several times.</li>
          <li>A POP 1 regional in Colorado.</li>
        </ul>
        <p className="mt-6 max-w-2xl text-lg text-ink">{fees.reason}</p>
        <div className="mt-10 grid gap-6 border border-ink/10 p-6 sm:grid-cols-[1.2fr_0.8fr] sm:items-center">
          <div>
            <p className="font-display text-sm uppercase tracking-widest text-plum">Call the floor</p>
            <p className="mt-3 font-display text-4xl uppercase">{phones.rayya.name}</p>
            <a href={`tel:${phones.rayya.tel}`} className="mt-2 inline-flex min-h-11 items-center font-display text-3xl text-plum">
              {phones.rayya.display}
            </a>
            <a
              href={org.honeybeesFacebook}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex min-h-11 items-center underline decoration-plum underline-offset-4"
            >
              Honeybees on Facebook
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <Button asChild tone="plum">
              <a href={`sms:${phones.rayya.tel}`}>Text Coach Rayya</a>
            </Button>
            <Button asChild tone="quiet">
              <Link to="/donate">Support the 30x30 fund</Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
