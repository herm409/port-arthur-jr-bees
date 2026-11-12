import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function ScoreboardPlate({
  photo,
  reverse = false,
  figure,
  figureLabel,
  children,
  action,
}: {
  photo: ReactNode;
  reverse?: boolean;
  figure: string;
  figureLabel: string;
  children: ReactNode;
  action: ReactNode;
}) {
  return (
    <section
      className={cn(
        "grid md:grid-cols-12",
        reverse && "md:[&>.plate-photo]:order-2 md:[&>.plate-panel]:order-1",
      )}
    >
      <div className="plate-photo aspect-[4/3] overflow-hidden bg-ink md:col-span-7 md:aspect-auto md:min-h-[24rem]">
        {photo}
      </div>
      <div className="plate-panel scoreboard-hex flex flex-col justify-center px-5 py-6 md:col-span-5 md:px-8 md:py-10">
        <p className="digits font-display text-[clamp(3.75rem,14vw,6.5rem)] font-extrabold leading-none text-gold">
          {figure}
        </p>
        <p className="mt-2 font-display text-[14px] font-extrabold uppercase tracking-[0.18em] text-lamp">
          {figureLabel}
        </p>
        <div className="mt-5 max-w-md text-[1.0625rem] leading-[1.55] text-cream">{children}</div>
        <div className="mt-6">{action}</div>
      </div>
    </section>
  );
}
