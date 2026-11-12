import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { placeAthlete, type Side } from "@/lib/org";
import { cn } from "@/lib/cn";

const sides: { id: Side; label: string }[] = [
  { id: "football", label: "Football" },
  { id: "dance", label: "Honey Bees" },
  { id: "either", label: "Both" },
];

export function SquadFinder() {
  const [age, setAge] = useState(10);
  const [side, setSide] = useState<Side>("either");
  const spot = useMemo(() => placeAthlete(age, side), [age, side]);

  return (
    <div className="bg-cream p-2 shadow-lift">
      <div className="border border-ink/10 p-5 sm:p-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <p className="font-display text-6xl leading-none text-plum tabular-nums sm:text-7xl">{age}</p>
          <p className="max-w-xs text-stone">Age on the field this fall. Slide it. The ladder is the one they’ve published — the phone confirms the roster.</p>
        </div>
        <label className="mt-6 block">
          <span className="font-display text-sm uppercase tracking-widest text-stone">Age {age}</span>
          <input
            type="range"
            min={5}
            max={16}
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            className="mt-3 h-11 w-full accent-plum"
            suppressHydrationWarning
          />
        </label>
        <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Program">
          {sides.map((item) => (
            <button
              key={item.id}
              type="button"
              aria-pressed={side === item.id}
              onClick={() => setSide(item.id)}
              className={cn(
                "min-h-11 px-4 font-display text-lg uppercase tracking-wide",
                side === item.id ? "bg-ink text-cream" : "bg-ink/5 text-ink hover:bg-ink/10",
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="mt-8 border-t border-ink/10 pt-6">
          <h3 className="font-display text-4xl uppercase text-ink">{spot.title}</h3>
          {(side === "football" || side === "either") && (
            <p className="mt-4 max-w-2xl text-ink">
              <span className="font-display uppercase tracking-wide text-plum">Field. </span>
              {spot.football}
            </p>
          )}
          {(side === "dance" || side === "either") && (
            <p className="mt-4 max-w-2xl text-ink">
              <span className="font-display uppercase tracking-wide text-plum">Floor. </span>
              {spot.dance}
            </p>
          )}
          <Link
            to="/register"
            search={{ age, side }}
            className="mt-6 inline-flex min-h-11 items-center font-display text-lg uppercase tracking-wide text-plum underline decoration-plum decoration-2 underline-offset-4"
          >
            Build the call
          </Link>
        </div>
      </div>
    </div>
  );
}
