import { useState } from "react";
import { frames } from "@/lib/org";
import { cn } from "@/lib/cn";

export function HeroStage() {
  const [index, setIndex] = useState(0);
  const frame = frames[index] ?? frames[0];

  return (
    <figure className="bg-cream p-2 shadow-lift lg:rounded-3xl">
      <div className="relative overflow-hidden rounded-2xl bg-ink">
        <img
          key={frame.src}
          src={frame.src}
          alt={frame.alt}
          className="frame-in aspect-[4/3] w-full object-cover outline -outline-offset-1 outline-cream/15 sm:aspect-[5/4]"
        />
      </div>
      <figcaption className="flex flex-col gap-3 px-2 pt-3 pb-2">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-display text-xl uppercase tracking-wide text-ink">{frame.place}</p>
            <p className="mt-1 text-base text-stone">{frame.line}</p>
          </div>
          <p className="hidden max-w-40 text-right text-sm text-stone sm:block">{frame.credit}</p>
        </div>
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Program photographs">
          {frames.map((item, i) => {
            const selected = i === index;
            return (
              <button
                key={item.src}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setIndex(i)}
                className={cn(
                  "min-h-11 px-3 font-display text-base uppercase tracking-wide",
                  selected ? "text-ink underline decoration-plum decoration-2 underline-offset-4" : "text-stone hover:text-ink",
                )}
              >
                {item.place}
              </button>
            );
          })}
        </div>
        <p className="text-sm text-stone sm:hidden">{frame.credit}</p>
      </figcaption>
    </figure>
  );
}
