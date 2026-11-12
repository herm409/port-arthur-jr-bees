import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function NotFoundPage() {
  return (
    <article className="mx-auto max-w-6xl px-5 py-20 md:px-8">
      <h1 className="font-display text-6xl uppercase">Page not found</h1>
      <p className="mt-4 max-w-xl text-xl text-stone">That page is not on the Jr Bees site. You can give to the 30x30 fund or sign a child up from here.</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button asChild tone="gold">
          <Link to="/donate">Donate</Link>
        </Button>
        <Button asChild tone="quiet">
          <Link to="/register">Join</Link>
        </Button>
      </div>
    </article>
  );
}
