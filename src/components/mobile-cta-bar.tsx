import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";

export function MobileCtaBar({ menuOpen }: { menuOpen: boolean }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [heroGone, setHeroGone] = useState(pathname !== "/");
  const [footerVisible, setFooterVisible] = useState(false);
  const [keyboardOpen, setKeyboardOpen] = useState(false);

  useEffect(() => {
    setHeroGone(pathname !== "/");
  }, [pathname]);

  useEffect(() => {
    const hero = document.getElementById("home-hero");
    if (!hero || pathname !== "/") {
      setHeroGone(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        setHeroGone(!entry?.isIntersecting);
      },
      { threshold: 0.15 },
    );
    io.observe(hero);
    return () => io.disconnect();
  }, [pathname]);

  useEffect(() => {
    const footer = document.getElementById("site-footer");
    if (!footer) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        setFooterVisible(Boolean(entry?.isIntersecting));
      },
      { threshold: 0.08 },
    );
    io.observe(footer);
    return () => io.disconnect();
  }, [pathname]);

  useEffect(() => {
    const viewport = window.visualViewport;
    if (!viewport) return;
    const onResize = () => {
      setKeyboardOpen(window.innerHeight - viewport.height > 120);
    };
    viewport.addEventListener("resize", onResize);
    return () => viewport.removeEventListener("resize", onResize);
  }, []);

  const show = heroGone && !footerVisible && !keyboardOpen && !menuOpen;
  if (!show) return null;

  return (
    <div className="cta-bar fixed inset-x-0 bottom-0 z-40 border-t border-cream/10 bg-ink pb-[env(safe-area-inset-bottom)] md:hidden">
      <div className="grid grid-cols-2 gap-3 p-3">
        <Link
          to="/donate"
          className="inline-flex min-h-11 items-center justify-center bg-gold px-3 font-display text-lg font-extrabold uppercase text-ink"
        >
          Donate
        </Link>
        <Link
          to="/register"
          className="inline-flex min-h-11 items-center justify-center border-2 border-cream px-3 font-display text-lg font-extrabold uppercase text-cream"
        >
          Join
        </Link>
      </div>
    </div>
  );
}
