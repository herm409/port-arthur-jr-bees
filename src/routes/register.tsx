import { createFileRoute } from "@tanstack/react-router";
import { CallSheet } from "@/components/call-sheet";
import { org, phones, type Side } from "@/lib/org";

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
      { title: "Register — Call the Jr Bees" },
      {
        name: "description",
        content:
          "Figure out which Jr Bees or Honey Bees squad fits, then call Coach Brad or Coach Rayya. No account. No payment on this page.",
      },
    ],
  }),
  component: RegisterPage,
});

function RegisterPage() {
  const { age, side } = Route.useSearch();
  return (
    <article className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
      <p className="font-display text-sm uppercase tracking-[0.28em] text-plum">Register</p>
      <h1 className="mt-3 max-w-3xl font-display text-6xl uppercase sm:text-7xl">
        The signup is a phone call.
      </h1>
      <p className="mt-5 max-w-2xl text-xl text-stone">
        There is no cart and no account. Build the sentence, then call. Practice is {org.practice.when.toLowerCase()}, {org.practice.hours}, at the {org.practice.where.toLowerCase()}.
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
    </article>
  );
}
