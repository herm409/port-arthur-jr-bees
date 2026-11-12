import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageSquare, Phone } from "lucide-react";
import { org, phones } from "@/lib/org";
import { pendingTagVisible, practice, revealPending } from "@/lib/facts";
import { pageHead, titles } from "@/lib/seo";
import { PendingTag } from "@/components/pending-flag";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead({
      title: titles.contact,
      description:
        "Call or text Coach Brad at 409-498-3375, Coach Rayya at 409-454-1462, or email jrbees814@gmail.com.",
      path: "/contact",
    }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-12 md:px-8 md:py-16">
      <h1 className="font-display text-6xl font-extrabold uppercase text-ink">Contact</h1>
      <p className="mt-4 text-xl text-stone">Call, text, or email. Facebook is where the teams post.</p>

      <section className="mt-10 border-t border-ink/10 pt-8">
        <h2 className="font-display text-3xl font-extrabold uppercase text-plum">{phones.brad.name}</h2>
        <p className="text-stone">{phones.brad.role}</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href={`tel:${phones.brad.tel}`}
            className="inline-flex min-h-11 items-center gap-2 bg-gold px-4 font-display text-lg font-extrabold uppercase text-ink"
          >
            <Phone aria-hidden="true" className="size-4" />
            Call {phones.brad.display}
          </a>
          <a
            href={`sms:${phones.brad.tel}`}
            className="inline-flex min-h-11 items-center gap-2 border-2 border-ink/20 px-4 font-display text-lg font-extrabold uppercase"
          >
            <MessageSquare aria-hidden="true" className="size-4" />
            Text
          </a>
        </div>
      </section>

      <section className="mt-10 border-t border-ink/10 pt-8">
        <h2 className="font-display text-3xl font-extrabold uppercase text-plum">{phones.rayya.name}</h2>
        <p className="text-stone">{phones.rayya.role}</p>
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
      </section>

      <section className="mt-10 border-t border-ink/10 pt-8">
        <h2 className="font-display text-3xl font-extrabold uppercase text-plum">Email</h2>
        <a className="mt-3 inline-flex min-h-11 items-center gap-2 underline decoration-plum underline-offset-4" href={`mailto:${org.email}`}>
          <Mail aria-hidden="true" className="size-4" />
          {org.email}
        </a>
      </section>

      <section className="mt-10 border-t border-ink/10 pt-8">
        <h2 className="font-display text-3xl font-extrabold uppercase text-plum">Facebook</h2>
        <a className="mt-3 flex min-h-11 items-center underline decoration-plum underline-offset-4" href={org.facebook}>
          Jr Bees on Facebook
        </a>
        <a className="flex min-h-11 items-center underline decoration-plum underline-offset-4" href={org.honeybeesFacebook}>
          Honeybees on Facebook
        </a>
      </section>

      {revealPending(practice) ? (
        <section className="mt-10 border-t border-ink/10 pt-8">
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="font-display text-3xl font-extrabold uppercase text-plum">Practice</h2>
            {pendingTagVisible(practice) ? <PendingTag /> : null}
          </div>
          <p className="mt-3 text-ink">
            {practice.when}, {practice.hours}
          </p>
          <a className="mt-3 inline-flex min-h-11 items-start gap-2 underline decoration-plum underline-offset-4" href={practice.map}>
            <MapPin aria-hidden="true" className="mt-3 size-4 shrink-0" />
            <span>
              {practice.where}
              <span className="block">
                {practice.streets}, {practice.city}
              </span>
            </span>
          </a>
        </section>
      ) : null}
    </article>
  );
}
