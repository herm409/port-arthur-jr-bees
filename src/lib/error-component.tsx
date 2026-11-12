import type { ErrorComponentProps } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";

const FALLBACK_MESSAGE = "Something went wrong. Try reloading the page.";

function errorMessage(error: unknown): string {
  if (error instanceof Error && error.message) return error.message;
  if (typeof error === "string" && error) return error;
  return FALLBACK_MESSAGE;
}

export function AppErrorComponent({ error }: ErrorComponentProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-cream px-6 text-center text-ink">
      <h1 className="font-display text-4xl font-extrabold uppercase">Something went wrong</h1>
      <p className="max-w-md text-stone">{errorMessage(error)}</p>
      <Link
        to="/"
        className="inline-flex min-h-11 items-center bg-gold px-5 font-display text-lg font-extrabold uppercase text-ink"
      >
        Back home
      </Link>
    </main>
  );
}
