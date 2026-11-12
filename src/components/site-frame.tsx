import { useEffect, useState, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { org, phones, practice } from "@/lib/org";
import { cn } from "@/lib/cn";
import { PracticeBeacon } from "@/components/practice-beacon";
import { MobileActionBar } from "@/components/mobile-action-bar";
import { PendingTag } from "@/components/pending-tag";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/football", label: "Football" },
  { to: "/honeybees", label: "Honeybees" },
  { to: "/photos", label: "Photos" },
  { to: "/register", label: "Join" },
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
    <div className="relative min-h-screen pb-24 md:pb-0">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-gold focus:px-4 focus:py-2 focus:font-display focus:uppercase"
      >
        Skip to content
      </a>
      <div className="bg-plum text-cream">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-1 px-5 py-2 font-display text-sm uppercase tracking-widest md:px-8">
          <span className="text-[0.875rem]">
            {org.affiliation} · {org.place}
          </span>
          <span className="inline-flex flex-wrap items-center">
            <PracticeBeacon />
            {practice.pending ? <PendingTag label="Confirm practice this season" /> : null}
          </span>
        </div>
      </div>
      <header className="sticky top-0 z-40 border-b border-ink/10 bg-cream">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-8">
          <Link to="/" className="group block leading-none">
            <span className="block font-display text-sm uppercase tracking-[0.22em] text-stone">Port Arthur</span>
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
                    "inline-flex min-h-11 items-center px-3 font-display text-lg uppercase leading-none tracking-wide",
                    active ? "text-plum" : "text-ink hover:text-plum",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <Button asChild tone="gold" className="ml-2">
              <Link to="/donate">Donate</Link>
            </Button>
          </nav>
          <div className="flex items-center gap-2 lg:hidden">
            <Button asChild tone="gold">
              <Link to="/donate">Donate</Link>
            </Button>
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center border border-ink/15"
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
                className="flex min-h-12 items-center border-b border-ink/10 font-display text-3xl uppercase"
              >
                {link.label}
              </Link>
            ))}
            <Link to="/donate" className="mt-3 flex min-h-12 items-center font-display text-3xl uppercase text-plum">
              Donate
            </Link>
            <a href={`tel:${phones.brad.tel}`} className="flex min-h-12 items-center font-display text-xl uppercase text-plum">
              Call {phones.brad.display}
            </a>
          </nav>
        ) : null}
      </header>
      <main id="content">{children}</main>
      <footer className="mt-8 bg-ink text-cream">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr] md:px-8">
          <div>
            <p className="font-display text-5xl uppercase leading-none">Jr Bees</p>
            <p className="mt-4 max-w-sm text-cream/85">
              A Gulf Coast Pop Warner affiliate. Port Arthur Jr Bees is a nonprofit youth football and dance organization in Port Arthur, Texas.
            </p>
          </div>
          <div>
            <p className="font-display text-sm uppercase tracking-widest text-gold">Contact</p>
            <a className="mt-3 flex min-h-11 items-center font-display text-2xl uppercase" href={`tel:${phones.brad.tel}`}>
              {phones.brad.display}
              <span className="ml-2 font-body text-base normal-case tracking-normal text-cream/75">{phones.brad.short}</span>
            </a>
            <a className="flex min-h-11 items-center font-display text-2xl uppercase" href={`tel:${phones.rayya.tel}`}>
              {phones.rayya.display}
              <span className="ml-2 font-body text-base normal-case tracking-normal text-cream/75">{phones.rayya.short}</span>
            </a>
            <a className="flex min-h-11 items-center underline decoration-gold/70 underline-offset-4" href={`mailto:${org.email}`}>
              {org.email}
            </a>
          </div>
          <div>
            <p className="font-display text-sm uppercase tracking-widest text-gold">Find them</p>
            <a
              className="mt-3 flex min-h-11 items-center underline decoration-gold/70 underline-offset-4"
              href={org.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook, PA Jr Bees
            </a>
            <a
              className="flex min-h-11 items-center underline decoration-gold/70 underline-offset-4"
              href={org.honeybeesFacebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook, Honeybees
            </a>
            <Link to="/register" hash="medical" className="flex min-h-11 items-center underline decoration-gold/70 underline-offset-4">
              Medical history form
            </Link>
            <a className="flex min-h-11 items-center underline decoration-gold/70 underline-offset-4" href={practice.map}>
              {practice.where}
              <span className="ml-2 text-cream/75 no-underline">{practice.streets}</span>
            </a>
          </div>
        </div>
      </footer>
      <MobileActionBar />
    </div>
  );
}
