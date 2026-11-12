import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function NotFoundPage() {
  return (
    <article className="mx-auto flex min-h-[70vh] max-w-3xl flex-col justify-center px-5 py-16 md:px-8">
      <p className="font-display text-[14px] font-extrabold uppercase tracking-[0.18em] text-plum">404</p>
      <h1 className="mt-3 font-display text-5xl font-extrabold uppercase text-ink md:text-7xl">
        That page is not on the roster.
      </h1>
      <p className="mt-5 max-w-xl text-lg text-stone">
        Head back to the Jr Bees, give to the 30x30 Building Fund, or sign a child up.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button asChild tone="gold">
          <Link to="/donate">Donate</Link>
        </Button>
        <Button asChild tone="quiet">
          <Link to="/register">Join</Link>
        </Button>
        <Button asChild tone="quiet">
          <Link to="/">Home</Link>
        </Button>
      </div>
    </article>
  );
}
