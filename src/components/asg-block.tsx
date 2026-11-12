import { Button } from "@/components/ui/button";
import { PendingTag } from "@/components/pending-tag";
import { asg } from "@/lib/campaign";
import { phones } from "@/lib/org";

/** Coach Brad's All State Game line, exact quote, and spotlight link (Addendum v3.2). */
export function AsgSpotlight({ onInk = false }: { onInk?: boolean }) {
  return (
    <div className="mt-4">
      <p className={onInk ? "text-lg text-cream/90" : "text-lg text-ink"}>{asg.scoutLine}</p>
      <blockquote
        className={
          onInk
            ? "mt-4 border-l-0 font-display text-2xl uppercase leading-tight text-gold"
            : "mt-4 border-l-0 font-display text-2xl uppercase leading-tight text-plum"
        }
      >
        <p>&ldquo;{asg.quote}&rdquo;</p>
        <footer className={onInk ? "mt-1 font-sans text-base normal-case text-cream/80" : "mt-1 font-sans text-base normal-case text-stone"}>
          Coach Brad, in the All State Game Coach Spotlight
        </footer>
      </blockquote>
      <p className="mt-3">
        <a
          className={
            onInk
              ? "inline-flex min-h-11 items-center text-cream underline decoration-gold underline-offset-4"
              : "inline-flex min-h-11 items-center text-ink underline decoration-plum underline-offset-4"
          }
          href={asg.spotlight}
          target="_blank"
          rel="noopener noreferrer"
        >
          {asg.spotlightLabel}
        </a>
      </p>
    </div>
  );
}

/** "Get nominated for the All State Game" block with Call and Text Coach Brad (Addendum v3.2). */
export function AsgNominate({ onInk = false, headingLevel = 3 }: { onInk?: boolean; headingLevel?: 2 | 3 }) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  return (
    <div>
      <Heading
        className={
          headingLevel === 2
            ? "font-display text-5xl uppercase"
            : onInk
              ? "font-display text-3xl uppercase text-cream"
              : "font-display text-3xl uppercase text-ink"
        }
      >
        {asg.nominateHeading}
      </Heading>
      <p className={onInk ? "mt-3 max-w-2xl text-lg text-cream/90" : "mt-3 max-w-2xl text-lg text-ink"}>
        {asg.nominateBody}
        <PendingTag label="Game city and date to confirm" />
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        <Button asChild tone="gold" className="min-h-11">
          <a href={`tel:${phones.brad.tel}`}>Call Coach Brad</a>
        </Button>
        <Button asChild tone={onInk ? "line" : "quiet"} className="min-h-11">
          <a href={`sms:${phones.brad.tel}`}>Text Coach Brad</a>
        </Button>
      </div>
    </div>
  );
}
