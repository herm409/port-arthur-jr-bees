import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/cn";

export function Wordmark({
  to = "/",
  invert = false,
  compact = false,
}: {
  to?: "/";
  invert?: boolean;
  compact?: boolean;
}) {
  return (
    <Link
      to={to}
      className={cn(
        "group block min-h-11 leading-none",
        invert ? "text-cream" : "text-ink",
      )}
    >
      <span
        className={cn(
          "block font-display font-extrabold uppercase tracking-[0.18em]",
          compact ? "text-[14px]" : "text-[14px] sm:text-[15px]",
          invert ? "text-lamp" : "text-plum",
        )}
      >
        Port Arthur
      </span>
      <span
        className={cn(
          "block font-display font-extrabold uppercase tracking-tight group-hover:text-plum",
          compact ? "text-2xl" : "text-[1.85rem] sm:text-3xl",
        )}
      >
        Jr Bees
      </span>
    </Link>
  );
}
