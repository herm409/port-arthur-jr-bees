import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { org } from "@/lib/org";
import { fallbackSrc, sizeOf, srcset } from "@/lib/photos";

const PHONE = "25-i836be40" as const;
const DESKTOP = "08-i5fa4d54" as const;

export function Hero() {
  const desktop = sizeOf(DESKTOP);
  return (
    <section
      id="home-hero"
      className="relative flex min-h-[34rem] flex-col justify-end overflow-hidden bg-ink md:min-h-[calc(100svh-4.5rem)]"
    >
      <div className="absolute inset-0">
        <picture>
          <source media="(max-width: 767px)" type="image/avif" srcSet={srcset(PHONE, "avif")} sizes="100vw" />
          <source media="(max-width: 767px)" type="image/webp" srcSet={srcset(PHONE, "webp")} sizes="100vw" />
          <source media="(min-width: 768px)" type="image/avif" srcSet={srcset(DESKTOP, "avif")} sizes="100vw" />
          <source media="(min-width: 768px)" type="image/webp" srcSet={srcset(DESKTOP, "webp")} sizes="100vw" />
          <img
            src={fallbackSrc(DESKTOP, 1200)}
            alt="Coach Brad and Jr Bees in honeycomb jerseys under stadium lights at a night game."
            width={desktop.width}
            height={desktop.height}
            className="hero-photo h-full w-full object-cover"
            fetchPriority="high"
            decoding="async"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/25" />
        <div className="hero-glow pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_18%,rgba(255,233,168,0.28),transparent_58%)]" />
      </div>
      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-10 pt-16 md:px-8 md:pb-14">
        <p className="font-display text-[14px] font-extrabold uppercase tracking-[0.18em] text-lamp">
          {org.association}, a nonprofit
        </p>
        <h1 className="mt-4 max-w-4xl font-display text-hero font-extrabold uppercase text-cream">
          Port Arthur youth football and dance since 1985.
        </h1>
        <p className="mt-4 max-w-xl text-[1.0625rem] leading-[1.55] text-cream/90 md:text-lg">
          Jr Bees football and the Honeybees dance team. A Gulf Coast Pop Warner program led by Coach Brad Coleman.
        </p>
        <div className="mt-7 flex max-w-xl flex-col gap-3 sm:flex-row">
          <Button asChild tone="gold" className="w-full whitespace-nowrap sm:w-auto">
            <Link to="/donate">Donate to 30x30</Link>
          </Button>
          <Button asChild tone="outline" className="w-full whitespace-nowrap sm:w-auto">
            <Link to="/register">Sign up</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
