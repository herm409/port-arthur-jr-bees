import { useEffect, useState, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Mail, MapPin, Menu, MessageSquare, Phone, X } from "lucide-react";
import { org, phones } from "@/lib/org";
import { pendingTagVisible, practice, revealPending } from "@/lib/facts";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/button";
import { Wordmark } from "@/components/wordmark";
import { MobileCtaBar } from "@/components/mobile-cta-bar";
import { PendingTag } from "@/components/pending-flag";

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
    <div className="relative min-h-screen pb-20 md:pb-0">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-gold focus:px-4 focus:py-2 focus:font-display focus:text-lg focus:font-extrabold focus:uppercase"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-40 border-b border-ink/10 bg-cream">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-8">
          <Wordmark compact />
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {links.map((link) => {
              const active = pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={cn(
                    "inline-flex min-h-11 items-center px-3 font-display text-lg font-extrabold uppercase tracking-wide",
                    active ? "text-plum" : "text-ink hover:text-plum",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <Button asChild tone="gold" className="ml-3">
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
              onClick={() => setOpen((value) => !value)}
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
                className="flex min-h-12 items-center border-b border-ink/10 font-display text-3xl font-extrabold uppercase"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/donate"
              className="mt-3 flex min-h-12 items-center justify-center bg-gold font-display text-2xl font-extrabold uppercase text-ink"
            >
              Donate
            </Link>
          </nav>
        ) : null}
      </header>
      <main id="content">{children}</main>
      <SiteFooter />
      <MobileCtaBar menuOpen={open} />
    </div>
  );
}

function SiteFooter() {
  return (
    <footer id="site-footer" className="bg-ink text-cream">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-4 gap-y-8 px-5 py-8 md:grid-cols-[1.3fr_1fr_1fr] md:px-8 md:py-12">
        <div className="col-span-2 md:col-span-1">
          <p className="font-display text-4xl font-extrabold uppercase leading-none">Port Arthur Jr Bees</p>
          <p className="mt-4 max-w-sm text-cream/85">
            A Gulf Coast Pop Warner affiliate. Port Arthur Jr Bees is a nonprofit.
          </p>
          <nav className="mt-4 flex flex-col" aria-label="Footer">
            <Link to="/our-story" className="inline-flex min-h-11 items-center font-display uppercase tracking-wide">
              Our story
            </Link>
            <Link to="/sponsor" className="inline-flex min-h-11 items-center font-display uppercase tracking-wide">
              Sponsor
            </Link>
            <Link to="/contact" className="inline-flex min-h-11 items-center font-display uppercase tracking-wide">
              Contact
            </Link>
          </nav>
        </div>
        <div>
          <p className="font-display text-[14px] font-extrabold uppercase tracking-[0.18em] text-gold">Call, text, email</p>
          <a className="mt-3 flex min-h-11 items-center gap-2 font-display text-xl uppercase" href={`tel:${phones.brad.tel}`}>
            <Phone aria-hidden="true" className="size-4 text-gold" />
            {phones.brad.display}
          </a>
          <a className="flex min-h-11 items-center gap-2 font-display text-xl uppercase" href={`sms:${phones.brad.tel}`}>
            <MessageSquare aria-hidden="true" className="size-4 text-gold" />
            Text Coach Brad
          </a>
          <a className="flex min-h-11 items-center gap-2 font-display text-xl uppercase" href={`tel:${phones.rayya.tel}`}>
            <Phone aria-hidden="true" className="size-4 text-gold" />
            {phones.rayya.display}
          </a>
          <a className="flex min-h-11 items-center gap-2 font-display text-xl uppercase" href={`sms:${phones.rayya.tel}`}>
            <MessageSquare aria-hidden="true" className="size-4 text-gold" />
            Text Coach Rayya
          </a>
          <a className="flex min-h-11 items-center gap-2" href={`mailto:${org.email}`}>
            <Mail aria-hidden="true" className="size-4 text-gold" />
            {org.email}
          </a>
        </div>
        <div>
          <p className="font-display text-[14px] font-extrabold uppercase tracking-[0.18em] text-gold">Find them</p>
          <a
            className="mt-3 flex min-h-11 items-center underline decoration-gold/70 underline-offset-4"
            href={org.facebook}
          >
            Jr Bees on Facebook
          </a>
          <a
            className="flex min-h-11 items-center underline decoration-gold/70 underline-offset-4"
            href={org.honeybeesFacebook}
          >
            Honeybees on Facebook
          </a>
          {revealPending(practice) ? (
            <div className="mt-4">
              {pendingTagVisible(practice) ? <PendingTag /> : null}
              <a className="mt-2 flex min-h-11 items-start gap-2" href={practice.map}>
                <MapPin aria-hidden="true" className="mt-3 size-4 shrink-0 text-gold" />
                <span>
                  {practice.where}
                  <span className="mt-1 block text-cream/75">
                    {practice.streets}, {practice.city}
                  </span>
                </span>
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </footer>
  );
}
