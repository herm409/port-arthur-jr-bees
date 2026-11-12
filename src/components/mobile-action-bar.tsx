import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

export function MobileActionBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const footer = document.querySelector("footer");
    const hero = document.getElementById("hero");

    const update = () => {
      if (window.matchMedia("(min-width: 768px)").matches) {
        setShow(false);
        return;
      }
      const heroGone = hero ? hero.getBoundingClientRect().bottom < 0 : true;
      const footerVisible = footer ? footer.getBoundingClientRect().top < window.innerHeight : false;
      setShow(heroGone && !footerVisible);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-cream/15 bg-ink p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden">
      <div className="grid grid-cols-2 gap-3">
        <Link
          to="/donate"
          className="inline-flex min-h-12 items-center justify-center bg-gold px-4 font-display text-lg font-bold uppercase tracking-wide text-ink"
        >
          Donate
        </Link>
        <Link
          to="/register"
          className="inline-flex min-h-12 items-center justify-center border border-cream px-4 font-display text-lg font-bold uppercase tracking-wide text-cream"
        >
          Join
        </Link>
      </div>
    </div>
  );
}
