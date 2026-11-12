import { asg } from "@/lib/asg";
import { asgCityDate, pendingTagVisible } from "@/lib/facts";
import { phones } from "@/lib/org";
import { Button } from "@/components/ui/button";
import { PendingTag } from "@/components/pending-flag";
import { cn } from "@/lib/cn";

export function SpotlightProof() {
  return (
    <>
      <p className="mt-4">{asg.scoutLine}</p>
      <p>
        <a
          href={asg.spotlightUrl}
          target="_blank"
          rel="noopener"
          className="inline-flex min-h-11 items-center font-display uppercase text-gold underline decoration-gold/70 underline-offset-4"
        >
          {asg.spotlightLink}
        </a>
      </p>
      <blockquote className="mt-4 border-l-2 border-gold pl-4 text-cream">
        "{asg.quote}"
      </blockquote>
    </>
  );
}

export function GetNominatedBlock({ surface = "cream" }: { surface?: "cream" | "ink" }) {
  const onInk = surface === "ink";
  return (
    <div className={onInk ? "mt-6" : "border border-ink/10 bg-cream px-5 py-8 md:px-8"}>
      <h2
        className={cn(
          "font-display font-extrabold uppercase",
          onInk ? "text-2xl text-gold" : "text-3xl text-plum",
        )}
      >
        {asg.nominateHeading}
      </h2>
      {pendingTagVisible(asgCityDate) ? (
        <div className="mt-3">
          <PendingTag>{asg.pendingLabel}</PendingTag>
        </div>
      ) : null}
      <p className={cn("mt-4", onInk ? "text-cream" : "text-ink")}>{asg.nominateBody}</p>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <Button asChild tone="gold" className="min-h-11">
          <a href={`tel:${phones.brad.tel}`}>Call Coach Brad</a>
        </Button>
        <Button asChild tone={onInk ? "outline" : "quiet"} className="min-h-11">
          <a href={`sms:${phones.brad.tel}`}>Text Coach Brad</a>
        </Button>
      </div>
    </div>
  );
}
