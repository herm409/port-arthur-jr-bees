import { useId, useState } from "react";
import { Check, Copy } from "lucide-react";
import { campaign } from "@/lib/campaign";
import { org, phones } from "@/lib/org";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";

export function CashAppGive({
  compact = false,
  onInk = false,
  lazy = true,
}: {
  compact?: boolean;
  onInk?: boolean;
  lazy?: boolean;
}) {
  const [copied, setCopied] = useState(false);
  const cashtagId = useId();

  async function copyTag() {
    try {
      await navigator.clipboard.writeText(campaign.cashtag);
    } catch {
      const node = document.getElementById(cashtagId);
      if (node) {
        const range = document.createRange();
        range.selectNodeContents(node);
        const selection = window.getSelection();
        selection?.removeAllRanges();
        selection?.addRange(range);
      }
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div>
      <div className="flex flex-col gap-5 md:flex-row md:items-start md:gap-8">
        <div className="order-2 md:order-1">
          <figure>
            <div className="inline-block bg-white p-3">
              <picture>
                <source type="image/webp" srcSet={campaign.cashAppQrWebp} />
                <img
                  src={campaign.cashAppQr}
                  alt={campaign.cashAppQrAlt}
                  width={campaign.cashAppQrWidth}
                  height={campaign.cashAppQrHeight}
                  loading={lazy ? "lazy" : "eager"}
                  decoding="async"
                  className="block h-auto w-[250px] bg-white md:w-[280px]"
                />
              </picture>
            </div>
            <figcaption className={cn("mt-3 max-w-[280px] text-[14px]", onInk ? "text-cream/80" : "text-stone")}>
              {campaign.cashAppQrCaption}
            </figcaption>
          </figure>
        </div>

        <div className="order-1 flex flex-col items-stretch gap-4 md:order-2 md:items-start">
          <Button asChild tone="gold" className="w-full min-h-11 md:w-auto">
            <a href={campaign.cashAppUrl} target="_blank" rel="noopener">
              Give with Cash App
            </a>
          </Button>
          <div className="flex flex-wrap items-center gap-3">
            <p
              id={cashtagId}
              className={cn(
                "digits font-display font-extrabold",
                compact ? "text-3xl" : "text-5xl",
                onInk ? "text-gold" : "text-ink",
              )}
            >
              {campaign.cashtag}
            </p>
            <CopyButton copied={copied} onCopy={copyTag} onInk={onInk} label={`Copy ${campaign.cashtag}`} />
          </div>
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        {copied ? `${campaign.cashtag} copied` : ""}
      </p>

      {compact ? null : (
        <>
          <p className="mt-8 max-w-xl text-ink">
            Questions about giving? Call {phones.brad.shortName} at{" "}
            <a
              className="inline-flex min-h-11 items-center underline decoration-plum underline-offset-4"
              href={`tel:${phones.brad.tel}`}
            >
              {phones.brad.display}
            </a>{" "}
            or email{" "}
            <a
              className="inline-flex min-h-11 items-center underline decoration-plum underline-offset-4"
              href={`mailto:${org.email}`}
            >
              {org.email}
            </a>
            .
          </p>
          <p className="mt-4 text-stone">{org.name} is a nonprofit.</p>
        </>
      )}
    </div>
  );
}

function CopyButton({
  copied,
  onCopy,
  onInk = false,
  label = "Copy",
}: {
  copied: boolean;
  onCopy: () => void;
  onInk?: boolean;
  label?: string;
}) {
  return (
    <button
      type="button"
      onClick={onCopy}
      className={cn(
        "btn-press inline-flex min-h-11 items-center gap-2 border-2 px-4 font-display text-lg font-extrabold uppercase",
        onInk ? "border-cream/40 text-cream" : "border-ink/20 text-ink",
      )}
    >
      {copied ? <Check aria-hidden="true" className="size-5" /> : <Copy aria-hidden="true" className="size-5" />}
      {copied ? "Copied" : label}
    </button>
  );
}
