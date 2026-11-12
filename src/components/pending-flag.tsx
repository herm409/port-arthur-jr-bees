export function PendingTag({ children = "PENDING" }: { children?: string }) {
  return (
    <span className="inline-flex min-h-7 items-center bg-ink px-2 font-display text-[14px] font-extrabold uppercase tracking-wide text-lamp">
      {children}
    </span>
  );
}
