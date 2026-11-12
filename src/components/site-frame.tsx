import { useEffect, useState, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { org, phones } from "@/lib/org";
import { cn } from "@/lib/cn";
import { PracticeBeacon } from "@/components/practice-beacon";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/football", label: "Field", note: "Football" },
  { to: "/honeybees", label: "Floor", note: "Honey Bees" },
  { to: "/photos", label: "Photos", note: "Pictures" },
  { to: "/support", label: "Village", note: "Support" },
  { to: "/register", label: "Register", note: "Sign up" },
] as const;

export function SiteFrame({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="relative min-h-screen">
      <div className="grain" aria-hidden="true" />
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-gold focus:px-4 focus:py-2 focus:font-display focus:uppercase"
      >
        Skip to content
      </a>
      <div className="hex-field">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-1 px-5 py-2 font-display text-sm uppercase tracking-widest md:px-8">
          <span>
            {org.affiliation} · {org.place}
          </span>
          <PracticeBeacon />
        </div>
      </div>
      <header className="sticky top-0 z-40 border-b border-ink/10 bg-cream">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-8">
          <Link to="/" className="group block leading-none">
            <span className="block font-display text-xs uppercase tracking-[0.22em] text-stone">Port Arthur</span>
            <span className="block font-display text-3xl font-extrabold uppercase tracking-tight text-ink group-hover:text-plum">
              Jr Bees
            </span>
          </Link>
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {links.map((link) => {
              const active = pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={cn(
                    "min-h-11 px-3 inline-flex flex-col justify-center",
                    active ? "text-plum" : "text-ink hover:text-plum",
                  )}
                >
                  <span className="font-display text-lg uppercase leading-none tracking-wide">{link.label}</span>
                  <span className="text-xs text-stone">{link.note}</span>
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild tone="gold" className="hidden sm:inline-flex">
              <a href={`tel:${phones.brad.tel}`}>Call Coach Brad</a>
            </Button>
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center border border-ink/15 lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            </button>
          </div>
        </div>
        {open ? (
          <nav id="mobile-nav" className="border-t border-ink/10 px-5 py-3 lg:hidden" aria-label="Mobile">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="flex min-h-12 items-baseline justify-between border-b border-ink/10 py-2"
              >
                <span className="font-display text-3xl uppercase">{link.label}</span>
                <span className="text-stone">{link.note}</span>
              </Link>
            ))}
            <a href={`tel:${phones.brad.tel}`} className="mt-3 flex min-h-12 items-center font-display text-xl uppercase text-plum">
              Call {phones.brad.display}
            </a>
          </nav>
        ) : null}
      </header>
      <div className="overflow-hidden border-b border-ink/10 bg-ink text-cream">
        <div className="marquee-track flex w-max">
          {[0, 1].map((copy) => (
            <p key={copy} className="flex shrink-0 gap-8 px-4 py-2 font-display text-sm uppercase tracking-[0.28em]" aria-hidden={copy === 1}>
              {Array.from({ length: 6 }).map((_, i) => (
                <span key={i}>{org.tag}</span>
              ))}
            </p>
          ))}
        </div>
      </div>
      <main id="content">{children}</main>
      <footer className="hex-field mt-8">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr] md:px-8">
          <div>
            <p className="font-display text-5xl uppercase leading-none">Jr Bees</p>
            <p className="mt-4 max-w-sm text-cream/85">
              It takes a village to raise a child. This organization is that village.
            </p>
          </div>
          <div>
            <p className="font-display text-sm uppercase tracking-widest text-gold">Call</p>
            <a className="mt-3 block min-h-11 font-display text-2xl uppercase" href={`tel:${phones.brad.tel}`}>
              {phones.brad.display}
              <span className="mt-1 block font-body text-base normal-case tracking-normal text-cream/75">{phones.brad.name}</span>
            </a>
            <a className="mt-4 block min-h-11 font-display text-2xl uppercase" href={`tel:${phones.rayya.tel}`}>
              {phones.rayya.display}
              <span className="mt-1 block font-body text-base normal-case tracking-normal text-cream/75">{phones.rayya.name}</span>
            </a>
          </div>
          <div>
            <p className="font-display text-sm uppercase tracking-widest text-gold">Find them</p>
            <a className="mt-3 block underline decoration-gold/70 underline-offset-4" href={org.facebook}>
              Facebook · PA Jr Bees
            </a>
            <Link to="/register" hash="medical" className="mt-3 block underline decoration-gold/70 underline-offset-4">
              Medical history form
            </Link>
            <a className="mt-3 block underline decoration-gold/70 underline-offset-4" href={org.practice.map}>
              {org.practice.where}
              <span className="mt-1 block text-cream/75 no-underline">{org.practice.streets}</span>
            </a>
            <p className="mt-6 text-sm text-cream/70">
              Facts here come from the association’s own words, public Facebook posts, the Port Arthur News, and the Beaumont Enterprise. Confirm fees and where to send money with Coach Brad before you give.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
