import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { campaign } from "@/lib/campaign";
import { org, phones } from "@/lib/org";
import { isPreview } from "@/lib/site-context";
import { Button } from "@/components/ui/button";

export function CashAppGive() {
  const [copied, setCopied] = useState(false);

  async function copyTag() {
    try {
      await navigator.clipboard.writeText(campaign.cashtag);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      const node = document.getElementById("cashtag");
      if (!node) return;
      const range = document.createRange();
      range.selectNodeContents(node);
      const selection = window.getSelection();
      selection?.removeAllRanges();
      selection?.addRange(range);
    }
  }

  const qr = campaign.cashAppQr;
  const showQrImage = typeof qr === "string" && qr.length > 0;
  const showQrPlaceholder = qr === null && isPreview;

  return (
    <div>
      <div className="give-phone">
        <Button asChild tone="gold" className="w-full">
          <a href={campaign.cashAppUrl}>Give with Cash App</a>
        </Button>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <p id="cashtag-phone" className="font-display text-2xl font-extrabold text-ink">
            Cash App: {campaign.cashtag}
          </p>
          <CopyButton copied={copied} onCopy={copyTag} />
        </div>
      </div>

      <div className="give-desktop">
        <div className="flex flex-col items-start gap-6 md:flex-row">
          {showQrImage ? (
            <div className="flex size-56 items-center justify-center bg-cream p-4">
              <img src={qr} alt={`Cash App QR code for ${campaign.cashtag}`} width={192} height={192} />
            </div>
          ) : null}
          {showQrPlaceholder ? (
            <div className="flex size-56 items-center justify-center border-2 border-dashed border-ink/30 bg-cream p-4 text-center">
              <p className="font-display text-[14px] font-extrabold uppercase tracking-wide text-stone">
                [CASHAPP_QR_IMAGE]
                <span className="mt-2 block font-body text-base font-normal normal-case tracking-normal">
                  QR code coming soon
                </span>
              </p>
            </div>
          ) : null}
          <div>
            <p id="cashtag" className="digits font-display text-5xl font-extrabold text-ink">
              {campaign.cashtag}
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <CopyButton copied={copied} onCopy={copyTag} label={`Copy ${campaign.cashtag}`} />
              <Button asChild tone="quiet">
                <a href={campaign.cashAppUrl}>Open Cash App</a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        {copied ? `${campaign.cashtag} copied` : ""}
      </p>

      <p className="mt-8 max-w-xl text-ink">
        Questions about giving? Call {phones.brad.shortName} at{" "}
        <a className="inline-flex min-h-11 items-center underline decoration-plum underline-offset-4" href={`tel:${phones.brad.tel}`}>
          {phones.brad.display}
        </a>{" "}
        or email{" "}
        <a className="inline-flex min-h-11 items-center underline decoration-plum underline-offset-4" href={`mailto:${org.email}`}>
          {org.email}
        </a>
        .
      </p>
      <p className="mt-4 text-stone">{org.name} is a nonprofit.</p>
    </div>
  );
}

function CopyButton({
  copied,
  onCopy,
  label = "Copy",
}: {
  copied: boolean;
  onCopy: () => void;
  label?: string;
}) {
  return (
    <button
      type="button"
      onClick={onCopy}
      className="btn-press inline-flex min-h-11 items-center gap-2 border-2 border-ink/20 px-4 font-display text-lg font-extrabold uppercase text-ink"
    >
      {copied ? <Check aria-hidden="true" className="size-5" /> : <Copy aria-hidden="true" className="size-5" />}
      {copied ? "Copied" : label}
    </button>
  );
}
