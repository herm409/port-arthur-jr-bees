import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageSquare, Phone } from "lucide-react";
import { PhotoPicture } from "@/components/photo-picture";
import { PhotoStrip } from "@/components/photo-strip";
import { ages, org, phones } from "@/lib/org";
import { honeybeesFeatured } from "@/lib/photos";
import { pageHead, titles } from "@/lib/seo";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/honeybees")({
  head: () =>
    pageHead({
      title: titles.honeybees,
      description:
        "Honeybees dance in Port Arthur. Ages 3 to 15, year round. Call Coach Rayya to join the team.",
      path: "/honeybees",
    }),
  component: HoneybeesPage,
});

function HoneybeesPage() {
  return (
    <article>
      <header className="grid md:grid-cols-12">
        <div className="aspect-[4/3] overflow-hidden bg-ink md:col-span-7 md:aspect-auto md:min-h-[28rem]">
          <PhotoPicture id="04-i4de506d" sizes="(min-width: 768px) 58vw, 100vw" className="h-full w-full" loading="eager" />
        </div>
        <div className="scoreboard-hex flex flex-col justify-center px-5 py-10 md:col-span-5 md:px-8">
          <h1 className="font-display text-5xl font-extrabold uppercase text-cream md:text-6xl">Honeybees</h1>
          <p className="mt-4 text-cream/90">
            The Honeybees dance team was founded in 2012. Dance runs year round. Ages {ages.honeybees.min} to{" "}
            {ages.honeybees.max}.
          </p>
        </div>
      </header>
      <div className="mx-auto max-w-3xl px-5 py-12 md:px-8">
        <p className="text-lg text-ink">
          The Honeybees perform at Lamar and Port Arthur basketball games. They won a San Antonio tournament 3 years
          in a row, have gone to POP 1 nationals in Florida several times, and won a POP 1 regional in Colorado.
        </p>
        <p className="mt-4 text-ink">Sign-up is $90. Honeybees dance runs year round.</p>
        <div className="mt-8 border border-ink/10 p-5">
          <p className="font-display text-2xl font-extrabold uppercase">{phones.rayya.name}</p>
          <p className="text-stone">Honeybees coach</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={`tel:${phones.rayya.tel}`}
              className="inline-flex min-h-11 items-center gap-2 bg-plum px-4 font-display text-lg font-extrabold uppercase text-cream"
            >
              <Phone aria-hidden="true" className="size-4" />
              Call {phones.rayya.display}
            </a>
            <a
              href={`sms:${phones.rayya.tel}`}
              className="inline-flex min-h-11 items-center gap-2 border-2 border-ink/20 px-4 font-display text-lg font-extrabold uppercase"
            >
              <MessageSquare aria-hidden="true" className="size-4" />
              Text
            </a>
          </div>
        </div>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button asChild tone="quiet">
            <a href={org.honeybeesFacebook}>Honeybees on Facebook</a>
          </Button>
          <Button asChild tone="gold">
            <Link to="/register">Join</Link>
          </Button>
        </div>
      </div>
      <div className="px-5 pb-16 md:px-8">
        <div className="mx-auto max-w-6xl">
          <PhotoStrip ids={honeybeesFeatured} />
        </div>
      </div>
    </article>
  );
}
