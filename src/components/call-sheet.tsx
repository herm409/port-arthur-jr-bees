import { useMemo, useState } from "react";
import { phones, placeAthlete, type Side } from "@/lib/org";
import { cn } from "@/lib/cn";

const sides: { id: Side; label: string }[] = [
  { id: "football", label: "Football" },
  { id: "dance", label: "Honey Bees" },
  { id: "either", label: "Both" },
];

export function CallSheet({ initialAge, initialSide }: { initialAge: number; initialSide: Side }) {
  const [parent, setParent] = useState("");
  const [child, setChild] = useState("");
  const [age, setAge] = useState(initialAge);
  const [side, setSide] = useState<Side>(initialSide);
  const spot = useMemo(() => placeAthlete(age, side), [age, side]);

  const who =
    spot.call === "brad" ? phones.brad : spot.call === "rayya" ? phones.rayya : null;
  const interest =
    side === "football" ? "Jr Bees football" : side === "dance" ? "the Honey Bees" : "football and the Honey Bees";
  const script = `Hi, this is ${parent.trim() || "[your name]"}. I’m calling about ${child.trim() || "[child’s name]"}, age ${age}. We’re interested in ${interest}. We can make practice Monday, Wednesday, and Thursday, 6 to 8, at the old Franklin campus.`;

  return (
    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
      <form
        className="border border-ink/10 bg-cream p-5 sm:p-7"
        onSubmit={(event) => event.preventDefault()}
      >
        <p className="font-display text-sm uppercase tracking-widest text-stone">Nothing is stored</p>
        <h2 className="mt-2 font-display text-4xl uppercase">Say this when they pick up</h2>
        <label className="mt-6 block">
          <span className="font-display text-sm uppercase tracking-widest text-stone">Your name</span>
          <input
            value={parent}
            onChange={(e) => setParent(e.target.value)}
            autoComplete="name"
            className="mt-2 min-h-12 w-full border border-ink/15 bg-cream px-3 text-ink"
          />
        </label>
        <label className="mt-4 block">
          <span className="font-display text-sm uppercase tracking-widest text-stone">Child’s first name</span>
          <input
            value={child}
            onChange={(e) => setChild(e.target.value)}
            className="mt-2 min-h-12 w-full border border-ink/15 bg-cream px-3 text-ink"
          />
        </label>
        <label className="mt-4 block">
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
        <div className="mt-4 flex flex-wrap gap-2">
          {sides.map((item) => (
            <button
              key={item.id}
              type="button"
              aria-pressed={side === item.id}
              onClick={() => setSide(item.id)}
              className={cn(
                "min-h-11 px-4 font-display text-lg uppercase",
                side === item.id ? "bg-ink text-cream" : "bg-ink/5 text-ink",
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      </form>
      <div className="hex-field p-5 sm:p-8">
        <p className="font-display text-sm uppercase tracking-widest text-gold">{spot.title}</p>
        <p className="mt-4 font-body text-xl leading-snug text-cream">{script}</p>
        <div className="mt-8 flex flex-col gap-3">
          {who ? (
            <a
              href={`tel:${who.tel}`}
              className="inline-flex min-h-12 items-center justify-center bg-gold px-5 font-display text-lg uppercase text-ink"
            >
              Call {who.name} · {who.display}
            </a>
          ) : (
            <>
              <a
                href={`tel:${phones.brad.tel}`}
                className="inline-flex min-h-12 items-center justify-center bg-gold px-5 font-display text-lg uppercase text-ink"
              >
                Football · {phones.brad.display}
              </a>
              <a
                href={`tel:${phones.rayya.tel}`}
                className="inline-flex min-h-12 items-center justify-center bg-cream px-5 font-display text-lg uppercase text-ink"
              >
                Honey Bees · {phones.rayya.display}
              </a>
            </>
          )}
        </div>
        <p className="mt-6 text-sm text-cream/75">
          This script never leaves this page. Have a birthdate and the school ready. Ask which paperwork this season wants — don’t trust an old QR code.
        </p>
      </div>
    </div>
  );
}
