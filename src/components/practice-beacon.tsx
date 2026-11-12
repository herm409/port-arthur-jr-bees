import { useEffect, useState } from "react";
import { practiceLabel } from "@/lib/org";

export function PracticeBeacon() {
  const [label, setLabel] = useState(() => practiceLabel(new Date()));

  useEffect(() => {
    const update = () => setLabel(practiceLabel(new Date()));
    update();
    const id = window.setInterval(update, 60_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <span className="inline-flex flex-wrap items-baseline gap-x-2" suppressHydrationWarning>
      <span className="text-gold">{label.status}</span>
      <span className="text-cream/80">{label.detail}</span>
    </span>
  );
}
