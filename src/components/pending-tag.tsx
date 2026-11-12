import { showPendingTags } from "@/lib/facts";

export function PendingTag({ label }: { label: string }) {
  if (!showPendingTags()) return null;
  return (
    <span className="ml-2 inline-block align-middle bg-ink px-2 py-0.5 font-display text-sm uppercase tracking-wide text-lamp">
      PENDING: {label}
    </span>
  );
}
