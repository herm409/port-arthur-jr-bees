import { Link } from "@tanstack/react-router";
import { Mail, MessageSquare, Phone } from "lucide-react";
import { ages, feeBridge, fees, medicalForm, org, phones } from "@/lib/org";
import { pendingTagVisible, practice, revealPending } from "@/lib/facts";
import { isPreview } from "@/lib/site-context";
import { Button } from "@/components/ui/button";
import { PendingTag } from "@/components/pending-flag";

export function JoinCard({
  showBridge = true,
  compact = false,
}: {
  showBridge?: boolean;
  compact?: boolean;
}) {
  return (
    <section className={compact ? "border border-ink/10 bg-cream px-5 py-6 md:px-6" : "border border-ink/10 bg-cream px-5 py-8 md:px-8 md:py-10"}>
      <h2 className="font-display text-4xl font-extrabold uppercase text-plum md:text-5xl">How to join</h2>
      <p className="mt-3 text-lg text-ink">Football sign-ups start in January.</p>
      <ul className="mt-4 space-y-1 text-ink">
        <li>
          Football ages {ages.football.min} to {ages.football.max}.
        </li>
        <li>
          Honeybees dance ages {ages.honeybees.min} to {ages.honeybees.max}. Honeybees dance runs year round.
        </li>
        <li>
          Basketball ages {ages.basketball.min} to {ages.basketball.max}.
        </li>
      </ul>
      <p className="mt-6 text-ink">
        Football sign-up is ${fees.football}. Honeybees sign-up is ${fees.honeybees}.
      </p>

      {revealPending(practice) ? (
        <div className="mt-4">
          {pendingTagVisible(practice) ? <PendingTag /> : null}
          <p className="mt-2 text-ink">
            Practice is {practice.when}, {practice.hours}, at {practice.where}, {practice.streets}, {practice.city}.
          </p>
        </div>
      ) : null}

      <ol className={compact ? "mt-5 space-y-5" : "mt-8 space-y-8"}>
        <li>
          <p className="font-display text-2xl font-extrabold uppercase text-plum">Step 1</p>
          <p className="mt-2 text-ink">Call or text the coach.</p>
          <div className={compact ? "mt-3 space-y-2" : "mt-4 grid gap-4 sm:grid-cols-2"}>
            <CoachContact
              compact={compact}
              name={phones.brad.shortName}
              role="Football and basketball"
              tel={phones.brad.tel}
              display={phones.brad.display}
            />
            <CoachContact
              compact={compact}
              name={phones.rayya.shortName}
              role="Honeybees"
              tel={phones.rayya.tel}
              display={phones.rayya.display}
            />
          </div>
        </li>
        <li>
          <p className="font-display text-2xl font-extrabold uppercase text-plum">Step 2</p>
          <p className="mt-2 text-ink">Medical history form for this season.</p>
          <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild tone="gold" className="w-full sm:w-auto">
              <a href={medicalForm.url} target="_blank" rel="noreferrer">
                Open the medical form
              </a>
            </Button>
            {isPreview && medicalForm.seasonPending ? (
              <PendingTag>Season label to confirm with Coach Brad</PendingTag>
            ) : null}
          </div>
        </li>
      </ol>

      {showBridge ? (
        <div className={compact ? "mt-6 border-t border-ink/10 pt-5" : "mt-10 border-t border-ink/10 pt-8"}>
          <p className="max-w-2xl text-ink">{feeBridge}</p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <Button asChild tone="quiet">
              <Link to="/sponsor">Sponsor a season</Link>
            </Button>
            <Button asChild tone="gold">
              <Link to="/donate">Give to 30x30</Link>
            </Button>
          </div>
        </div>
      ) : null}

      <p className="mt-5 flex flex-wrap items-center gap-x-2 text-stone">
        <Mail aria-hidden="true" className="size-4" />
        <a className="inline-flex min-h-11 items-center underline decoration-plum underline-offset-4" href={`mailto:${org.email}`}>
          {org.email}
        </a>
      </p>
    </section>
  );
}

function CoachContact({
  name,
  role,
  tel,
  display,
  compact = false,
}: {
  name: string;
  role: string;
  tel: string;
  display: string;
  compact?: boolean;
}) {
  if (compact) {
    return (
      <div className="flex flex-wrap items-center gap-2">
        <p className="min-w-[7rem] font-display text-lg font-extrabold uppercase">{name}</p>
        <a
          href={`tel:${tel}`}
          className="inline-flex min-h-11 items-center gap-2 bg-plum px-3 font-display text-base font-extrabold uppercase text-cream"
        >
          <Phone aria-hidden="true" className="size-4" />
          Call {display}
        </a>
        <a
          href={`sms:${tel}`}
          className="inline-flex min-h-11 items-center gap-2 border-2 border-ink/20 px-3 font-display text-base font-extrabold uppercase text-ink"
        >
          <MessageSquare aria-hidden="true" className="size-4" />
          Text
        </a>
      </div>
    );
  }
  return (
    <div className="border border-ink/10 p-4">
      <p className="font-display text-2xl font-extrabold uppercase">{name}</p>
      <p className="text-[14px] text-stone">{role}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        <a
          href={`tel:${tel}`}
          className="inline-flex min-h-11 items-center gap-2 bg-plum px-4 font-display text-lg font-extrabold uppercase text-cream"
        >
          <Phone aria-hidden="true" className="size-4" />
          Call {display}
        </a>
        <a
          href={`sms:${tel}`}
          className="inline-flex min-h-11 items-center gap-2 border-2 border-ink/20 px-4 font-display text-lg font-extrabold uppercase text-ink"
        >
          <MessageSquare aria-hidden="true" className="size-4" />
          Text
        </a>
      </div>
    </div>
  );
}
