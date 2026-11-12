import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { JoinCard } from "@/components/join-card";
import { PendingTag } from "@/components/pending-tag";
import { medicalForm } from "@/lib/campaign";
import { org, pageHead, phones } from "@/lib/org";

export const Route = createFileRoute("/register")({
  head: () =>
    pageHead({
      title: "Join | Port Arthur Jr Bees",
      description:
        "Sign up for Port Arthur Jr Bees football for $75 or Honeybees dance for $90. Football sign-ups start in January. Call Coach Brad or Coach Rayya, then fill out the medical form.",
      path: "/register",
    }),
  component: RegisterPage,
});

function RegisterPage() {
  return (
    <article>
      <header className="mx-auto max-w-6xl px-5 pt-12 md:px-8 md:pt-16">
        <p className="font-display text-sm uppercase tracking-[0.2em] text-plum">Join</p>
        <h1 className="mt-3 max-w-3xl font-display text-6xl uppercase sm:text-7xl">Sign up</h1>
        <p className="mt-5 max-w-2xl text-xl text-stone">
          Call or text first so a coach knows you are coming. Then fill out the medical history form.
        </p>
      </header>
      <JoinCard />
      <section id="medical" className="mx-auto max-w-6xl px-5 pb-16 md:px-8">
        <h2 className="font-display text-4xl uppercase sm:text-5xl">Medical history form</h2>
        <p className="mt-3 max-w-2xl text-lg text-ink">
          A parent or guardian fills this out for each child.
          <PendingTag label={medicalForm.pendingNote} />
        </p>
        <div className="mt-6">
          <Button asChild tone="plum">
            <a href={medicalForm.src} target="_blank" rel="noopener noreferrer">
              Fill out the medical form
            </a>
          </Button>
        </div>
        <div className="mt-8 hidden border border-ink/10 bg-white md:block">
          <iframe
            id={`JotFormIFrame-${medicalForm.id}`}
            title={medicalForm.title}
            allow="geolocation; microphone; camera; fullscreen"
            src={medicalForm.src}
            className="min-h-[900px] w-full border-0"
          />
        </div>
        <p className="mt-6 text-stone">
          Questions? Call {phones.brad.name} at {phones.brad.display} or {phones.rayya.name} at {phones.rayya.display}, or email{" "}
          <a className="underline decoration-plum underline-offset-4" href={`mailto:${org.email}`}>
            {org.email}
          </a>
          .
        </p>
      </section>
    </article>
  );
}
