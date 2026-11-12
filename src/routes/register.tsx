import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { CallSheet } from "@/components/call-sheet";
import { org, phones, type Side } from "@/lib/org";

const FORM_ID = "240466718637061";
const FORM_SRC = `https://form.jotform.com/${FORM_ID}`;

type RegisterSearch = { age: number; side: Side };

export const Route = createFileRoute("/register")({
  validateSearch: (search: Record<string, unknown>): RegisterSearch => {
    const age = Number(search.age);
    const side = search.side;
    return {
      age: Number.isFinite(age) && age >= 5 && age <= 16 ? Math.round(age) : 10,
      side: side === "football" || side === "dance" || side === "either" ? side : "either",
    };
  },
  head: () => ({
    meta: [
      { title: "Register — Port Arthur Jr Bees" },
      {
        name: "description",
        content:
          "Call Coach Brad or Coach Rayya, then complete the 2025–2026 Pop Warner youth medical history form.",
      },
    ],
  }),
  component: RegisterPage,
});

function RegisterPage() {
  const { age, side } = Route.useSearch();
  return (
    <article className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
      <h1 className="max-w-3xl font-display text-6xl uppercase sm:text-7xl">Sign up</h1>
      <p className="mt-5 max-w-2xl text-xl text-stone">
        Call first. Practice is {org.practice.when.toLowerCase()}, {org.practice.hours}, at the {org.practice.where.toLowerCase()}.
      </p>
      <div className="mt-10">
        <CallSheet key={`${age}-${side}`} initialAge={age} initialSide={side} />
      </div>
      <dl className="mt-12 grid gap-6 border-t border-ink/10 pt-8 sm:grid-cols-3">
        <div>
          <dt className="font-display uppercase tracking-wide text-plum">Have ready</dt>
          <dd className="mt-2">Child’s age, school, and a parent who can answer the phone twice.</dd>
        </div>
        <div>
          <dt className="font-display uppercase tracking-wide text-plum">Football</dt>
          <dd className="mt-2">
            {phones.brad.name}
            <a className="mt-1 block text-xl" href={`tel:${phones.brad.tel}`}>
              {phones.brad.display}
            </a>
          </dd>
        </div>
        <div>
          <dt className="font-display uppercase tracking-wide text-plum">Honey Bees</dt>
          <dd className="mt-2">
            {phones.rayya.name}
            <a className="mt-1 block text-xl" href={`tel:${phones.rayya.tel}`}>
              {phones.rayya.display}
            </a>
          </dd>
        </div>
      </dl>

      <section id="medical" className="mt-16 border-t border-ink/10 pt-10">
        <h2 className="font-display text-4xl uppercase sm:text-5xl">Medical history form</h2>
        <p className="mt-3 max-w-2xl text-lg">
          This is the Pop Warner form for the 2025–2026 season. A parent or guardian fills it out. It goes to Jotform, the same form that was on the old site.
        </p>
        <div className="mt-6 border border-ink/10 bg-white">
          <MedicalForm />
        </div>
      </section>
    </article>
  );
}

function MedicalForm() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://form.jotform.com/s/umd/latest/for-form-embed-handler.js";
    script.async = true;
    script.onload = () => {
      const handler = (window as Window & { jotformEmbedHandler?: (selector: string, origin: string) => void })
        .jotformEmbedHandler;
      handler?.(`iframe[id=JotFormIFrame-${FORM_ID}]`, "https://form.jotform.com/");
    };
    document.body.appendChild(script);
    return () => {
      script.remove();
    };
  }, []);

  return (
    <iframe
      id={`JotFormIFrame-${FORM_ID}`}
      title="2025-2026 Youth Participant Medical History Form"
      allow="geolocation; microphone; camera; fullscreen"
      src={FORM_SRC}
      className="min-h-[900px] w-full border-0"
    />
  );
}
