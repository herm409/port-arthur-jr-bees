import { useEffect, useState } from "react";
import { medicalForm } from "@/lib/org";
import { isPreview } from "@/lib/site-context";
import { Button } from "@/components/ui/button";
import { PendingTag } from "@/components/pending-flag";

export function MedicalFormBlock() {
  const [desktop, setDesktop] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 768px)");
    const update = () => setDesktop(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return (
    <section id="medical" className="mt-10">
      <h2 className="font-display text-4xl font-extrabold uppercase text-plum">Medical history form</h2>
      <p className="mt-3 max-w-2xl text-ink">
        A parent or guardian fills this out before the season. The form opens in a new tab.
      </p>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button asChild tone="gold" className="w-full sm:w-auto">
          <a href={medicalForm.url} target="_blank" rel="noreferrer">
            Open the medical form
          </a>
        </Button>
        {isPreview && medicalForm.seasonPending ? (
          <PendingTag>Season label to confirm with Coach Brad</PendingTag>
        ) : null}
      </div>
      {desktop ? (
        <div className="mt-6 overflow-hidden border border-ink/10 bg-white">
          <iframe
            id={`JotFormIFrame-${medicalForm.jotformId}`}
            title="2025-2026 Youth Participant Medical History Form"
            src={medicalForm.url}
            className="h-[900px] w-full max-w-full border-0"
          />
        </div>
      ) : null}
    </section>
  );
}
