import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { campaign } from "@/lib/campaign";
import { formatUsd } from "@/lib/money";
import { CashAppGive } from "@/components/cash-app-give";
import { cn } from "@/lib/cn";

export function BuildingScoreboard({ variant }: { variant: "compact" | "full" }) {
  return (
    <section
      id={variant === "full" ? "cost" : "building-scoreboard"}
      className={
        variant === "compact"
          ? "scoreboard-hex px-5 py-7 md:px-8 md:py-10"
          : "scoreboard-hex px-5 py-10 md:px-8 md:py-14"
      }
    >
      <div className={cn("mx-auto", variant === "full" ? "max-w-4xl" : "max-w-6xl")}>
        <p
          className={
            variant === "compact"
              ? "digits font-display text-[clamp(3.5rem,14vw,6.5rem)] font-extrabold leading-none text-gold"
              : "digits font-display text-[clamp(4.75rem,18vw,8rem)] font-extrabold leading-none text-gold"
          }
        >
          30x30
        </p>
        <p className="mt-2 font-display text-[14px] font-extrabold uppercase tracking-[0.2em] text-lamp">
          30 FT x 30 FT METAL BUILDING
        </p>
        {variant === "full" ? (
          <h1 className="mt-5 font-display text-4xl font-extrabold uppercase text-cream md:text-5xl">
            {campaign.headline}
          </h1>
        ) : (
          <h2 className="mt-4 font-display text-3xl font-extrabold uppercase text-cream md:text-5xl">
            {campaign.headline}
          </h2>
        )}
        <p className="mt-3 text-xl text-cream/90">{campaign.line}</p>
        <p className="mt-8 font-display text-[14px] font-extrabold uppercase tracking-[0.2em] text-lamp">
          Goal
        </p>
        <p
          className={
            variant === "compact"
              ? "digits font-display text-[clamp(2rem,7vw,3.5rem)] font-extrabold leading-none text-gold"
              : "digits font-display text-[clamp(2.4rem,8vw,4.5rem)] font-extrabold leading-none text-gold"
          }
        >
          {formatUsd(campaign.goal)}
        </p>
        {campaign.showRaised ? (
          <p className="mt-3 text-[14px] text-cream/80">
            Raised so far: {formatUsd(campaign.raised)} as of {campaign.updated}
          </p>
        ) : null}

        {variant === "compact" ? (
          <p className="mt-6 max-w-3xl text-cream/90">{campaign.uses.join(" · ")}</p>
        ) : (
          <ul className="mt-8 max-w-xl space-y-2 text-cream">
            {campaign.uses.map((use) => (
              <li key={use}>{use}</li>
            ))}
          </ul>
        )}

        {variant === "full" ? <CostTable /> : null}

        {variant === "compact" ? (
          <div className="mt-8">
            <CashAppGive compact onInk lazy />
            <p className="mt-5">
              <Link
                to="/donate"
                hash="cost"
                className="inline-flex min-h-11 items-center font-display text-lg font-extrabold uppercase text-gold underline decoration-gold/70 underline-offset-4"
              >
                See what it costs
              </Link>
            </p>
          </div>
        ) : (
          <p className="mt-8 text-[14px] text-cream/70">Cost from the {campaign.quoteSource} quote.</p>
        )}
      </div>
    </section>
  );
}

function CostTable() {
  const ref = useRef<HTMLTableElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setShown(true);
      return;
    }
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <table ref={ref} className="mt-10 w-full text-left text-cream">
      <caption className="mb-4 text-left font-display text-2xl font-extrabold uppercase text-cream">
        What the 30x30 building costs
      </caption>
      <tbody>
        {campaign.items.map((item, index) => (
          <tr
            key={item.label}
            className={cn("cost-row border-b border-cream/15", shown && "is-in")}
            style={shown ? { animationDelay: `${index * 60}ms` } : undefined}
          >
            <th scope="row" className="py-3 pr-4 font-medium">
              {item.label}
            </th>
            <td className="digits py-3 text-right font-display text-2xl font-extrabold text-gold">
              {formatUsd(item.amount)}
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr
          className={cn("cost-row", shown && "is-in")}
          style={shown ? { animationDelay: `${campaign.items.length * 60}ms` } : undefined}
        >
          <th scope="row" className="cost-total py-4 pr-4 font-display text-2xl font-extrabold uppercase">
            Total goal
          </th>
          <td className="cost-total digits py-4 text-right font-display text-3xl font-extrabold text-gold">
            {formatUsd(campaign.goal)}
          </td>
        </tr>
      </tfoot>
    </table>
  );
}
