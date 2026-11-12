import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PendingTag } from "@/components/pending-tag";
import { fees } from "@/lib/campaign";
import { phones, practice } from "@/lib/org";

export function JoinCard() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16" id="join">
      <p className="font-display text-sm uppercase tracking-[0.2em] text-plum">How to join</p>
      <h2 className="mt-3 font-display text-5xl uppercase sm:text-6xl">Put your child on a team</h2>
      <p className="mt-4 max-w-2xl text-lg text-stone">{fees.reason}</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="border border-ink/10 bg-white p-5">
          <p className="font-display text-sm uppercase tracking-widest text-plum">Football</p>
          <p className="mt-2 font-display text-5xl uppercase text-ink">{fees.football}</p>
          <p className="mt-2 text-ink">{fees.footballSignups}</p>
          <p className="mt-4 text-stone">Call or text {phones.brad.name}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Button asChild tone="plum">
              <a href={`tel:${phones.brad.tel}`}>Call {phones.brad.display}</a>
            </Button>
            <Button asChild tone="quiet">
              <a href={`sms:${phones.brad.tel}`}>Text Coach Brad</a>
            </Button>
          </div>
        </div>
        <div className="border border-ink/10 bg-white p-5">
          <p className="font-display text-sm uppercase tracking-widest text-plum">Honeybees dance</p>
          <p className="mt-2 font-display text-5xl uppercase text-ink">{fees.dance}</p>
          <p className="mt-2 text-ink">The dance team practices year round.</p>
          <p className="mt-4 text-stone">Call or text {phones.rayya.name}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Button asChild tone="plum">
              <a href={`tel:${phones.rayya.tel}`}>Call {phones.rayya.display}</a>
            </Button>
            <Button asChild tone="quiet">
              <a href={`sms:${phones.rayya.tel}`}>Text Coach Rayya</a>
            </Button>
          </div>
        </div>
      </div>
      <p className="mt-6 text-ink">
        {practice.when}, {practice.hours}, at the {practice.where}, {practice.streets}.
        {practice.pending ? <PendingTag label="Confirm this season's practice times and place" /> : null}
      </p>
      <div className="mt-6">
        <Button asChild tone="ink">
          <Link to="/register" hash="medical">
            Medical form
          </Link>
        </Button>
      </div>
    </section>
  );
}
