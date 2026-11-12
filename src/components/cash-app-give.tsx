import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cashApp } from "@/lib/campaign";

export function CashAppGive({ priority = false }: { priority?: boolean }) {
  const [copied, setCopied] = useState(false);

  async function copyTag() {
    try {
      await navigator.clipboard.writeText(cashApp.cashtag);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-8">
      <div className="order-1 flex flex-1 flex-col gap-3 sm:order-2">
        <Button asChild tone="gold" className="w-full min-h-12 sm:w-auto">
          <a href={cashApp.url} target="_blank" rel="noopener noreferrer">
            Give with Cash App
          </a>
        </Button>
        <div className="flex flex-wrap items-center gap-3">
          <p className="font-display text-3xl uppercase tracking-wide text-gold">{cashApp.cashtag}</p>
          <button
            type="button"
            onClick={copyTag}
            className="inline-flex min-h-11 items-center bg-cream px-4 font-display text-base uppercase tracking-wide text-ink"
          >
            {copied ? "Copied" : "Copy cashtag"}
          </button>
        </div>
        <p className="text-cream/80">{cashApp.qrCaption}</p>
      </div>
      <div className="order-2 w-full max-w-[280px] bg-white p-3 sm:order-1 sm:w-[268px] sm:max-w-none sm:shrink-0">
        <img
          src={cashApp.qrJpg}
          alt={cashApp.qrAlt}
          width={cashApp.qrWidth}
          height={cashApp.qrHeight}
          className="block h-auto w-full min-w-[200px]"
          loading={priority ? "eager" : "lazy"}
          decoding="async"
        />
      </div>
    </div>
  );
}
