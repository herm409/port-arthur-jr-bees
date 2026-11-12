import { createFileRoute, Link } from "@tanstack/react-router";
import { FundMeter } from "@/components/fund-meter";
import { Button } from "@/components/ui/button";
import { org, pageHead, phones } from "@/lib/org";

export const Route = createFileRoute("/donate")({
  head: () =>
    pageHead({
      title: "Donate to the 30x30 Building Fund | Port Arthur Jr Bees",
      description:
        "Give to the Port Arthur Jr Bees 30x30 Building Fund on Cash App at $PAJrBees. The goal is $17,479.20 for a 30 by 30 metal building.",
      path: "/donate",
    }),
  component: DonatePage,
});

function DonatePage() {
  return (
    <article>
      <header className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
        <p className="font-display text-sm uppercase tracking-[0.2em] text-plum">Give</p>
        <h1 className="mt-3 max-w-3xl font-display text-6xl uppercase sm:text-7xl">30x30 Building Fund</h1>
        <p className="mt-5 max-w-2xl text-xl text-stone">
          Port Arthur Jr Bees is a nonprofit. Your gift helps build one facility the football team and the Honeybees can use for practice, tutoring, meetings, and banquets.
        </p>
      </header>
      <FundMeter priorityQr />
      <section className="mx-auto max-w-6xl px-5 py-12 md:px-8">
        <h2 className="font-display text-4xl uppercase">Other ways to help</h2>
        <p className="mt-4 max-w-2xl text-lg text-ink">
          If you want to sponsor a season, or if Cash App is not the right path for your gift, email or call Coach Brad.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild tone="plum">
            <a href={`mailto:${org.email}?subject=Sponsoring%20the%20Jr%20Bees`}>Email {org.email}</a>
          </Button>
          <Button asChild tone="quiet">
            <a href={`tel:${phones.brad.tel}`}>Call {phones.brad.display}</a>
          </Button>
          <Button asChild tone="quiet">
            <Link to="/register">Sign a child up</Link>
          </Button>
        </div>
      </section>
    </article>
  );
}
