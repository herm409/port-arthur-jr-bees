import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PhotoPicture } from "@/components/photo-picture";
import { photoOf, type CatalogId } from "@/lib/photos";
import { cn } from "@/lib/cn";

export function PhotoStrip({
  ids,
  reveal = false,
}: {
  ids: CatalogId[];
  reveal?: boolean;
}) {
  const scroller = useRef<HTMLDivElement>(null);

  function scroll(dir: number) {
    const node = scroller.current;
    if (!node) return;
    node.scrollBy({ left: dir * (node.clientWidth * 0.8), behavior: "smooth" });
  }

  return (
    <div>
      <div
        ref={scroller}
        tabIndex={0}
        className={cn(
          "flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold",
          reveal && "strip-reveal",
        )}
        aria-label="Photo strip"
      >
        {ids.map((id) => {
          const photo = photoOf(id);
          return (
            <figure key={id} className="w-[78%] shrink-0 snap-start sm:w-[46%] lg:w-[32%]">
              <div className="aspect-[4/3] overflow-hidden bg-ink">
                <PhotoPicture id={id} sizes="(min-width: 1024px) 32vw, (min-width: 640px) 46vw, 78vw" />
              </div>
              {photo.caption ? (
                <figcaption className="mt-2 text-[14px] text-stone">{photo.caption}</figcaption>
              ) : null}
            </figure>
          );
        })}
      </div>
      <div className="mt-3 hidden gap-2 md:flex">
        <button
          type="button"
          className="inline-flex size-11 items-center justify-center border border-ink/20 text-ink"
          onClick={() => scroll(-1)}
          aria-label="Previous photos"
        >
          <ArrowLeft aria-hidden="true" />
        </button>
        <button
          type="button"
          className="inline-flex size-11 items-center justify-center border border-ink/20 text-ink"
          onClick={() => scroll(1)}
          aria-label="Next photos"
        >
          <ArrowRight aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
