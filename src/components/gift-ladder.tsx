import { useState } from "react";
import { gifts } from "@/lib/org";
import { cn } from "@/lib/cn";

export function GiftLadder() {
  const [id, setId] = useState<(typeof gifts)[number]["id"]>("pads");
  const current = gifts.find((gift) => gift.id === id) ?? gifts[1];

  return (
    <div>
      <div className="grid gap-px bg-ink/15 sm:grid-cols-4" role="tablist" aria-label="What a gift has meant">
        {gifts.map((gift) => {
          const selected = gift.id === id;
          return (
            <button
              key={gift.id}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setId(gift.id)}
              className={cn(
                "min-h-24 px-4 py-4 text-left transition-colors duration-150",
                selected ? "bg-gold text-ink" : "bg-cream text-ink hover:bg-gold/25",
              )}
            >
              <span className="block font-display text-3xl leading-none">{gift.amount}</span>
              <span className="mt-2 block text-sm">{gift.title}</span>
            </button>
          );
        })}
      </div>
      <p className="mt-5 max-w-2xl text-lg text-ink">{current.body}</p>
    </div>
  );
}
