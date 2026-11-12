import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PhotoPicture } from "@/components/photo-picture";
import { albums, allGalleryPhotos, largestSrc, photoOf, sizeOf, srcset, type CatalogId } from "@/lib/photos";
import { pageHead } from "@/lib/org";
import { PendingTag } from "@/components/pending-tag";

/** Photo 11 has "Coach Brad and Coach Lovie" printed in the image; the name is not confirmed yet. */
const LOVIE_PHOTO = "11-i67d9681";
const LOVIE_PENDING = "Coach Lovie name in this photo to confirm with Herman";

export const Route = createFileRoute("/photos")({
  head: () =>
    pageHead({
      title: "Photos | Port Arthur Jr Bees",
      description: "Photos of Port Arthur Jr Bees football and the Honeybees dance team, from the association's own archive.",
      path: "/photos",
    }),
  component: PhotosPage,
});

function PhotosPage() {
  const list = allGalleryPhotos();
  const [open, setOpen] = useState<number | null>(null);
  const eagerIds = new Set(list.slice(0, 6).map((photo) => photo.id));

  useEffect(() => {
    if (open === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(null);
      if (event.key === "ArrowRight") setOpen((i) => (i === null ? i : (i + 1) % list.length));
      if (event.key === "ArrowLeft") setOpen((i) => (i === null ? i : (i - 1 + list.length) % list.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, list.length]);

  return (
    <article className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
      <h1 className="font-display text-6xl font-extrabold uppercase sm:text-7xl">Photos</h1>
      <p className="mt-4 max-w-2xl text-xl text-stone">Jr Bees football and the Honeybees dance team.</p>

      {albums.map((album) => (
        <section key={album.title} className="mt-12">
          <h2 className="font-display text-4xl font-extrabold uppercase text-plum">{album.title}</h2>
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {album.ids.map((id) => {
              const photo = photoOf(id);
              const index = list.findIndex((item) => item.id === id);
              const eager = eagerIds.has(id);
              return (
                <figure key={id}>
                  <button
                    type="button"
                    className="block min-h-11 w-full overflow-hidden bg-ink"
                    onClick={() => setOpen(index)}
                  >
                    <div className="aspect-[4/3]">
                      <PhotoPicture
                        id={id}
                        sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                        loading={eager ? "eager" : "lazy"}
                      />
                    </div>
                  </button>
                  {photo.caption || id === LOVIE_PHOTO ? (
                    <figcaption className="mt-2 text-[14px] text-stone">
                      {photo.caption}
                      {id === LOVIE_PHOTO ? <PendingTag label={LOVIE_PENDING} /> : null}
                    </figcaption>
                  ) : null}
                </figure>
              );
            })}
          </div>
        </section>
      ))}

      {open !== null ? (
        <Viewer
          id={list[open]!.id}
          caption={list[open]!.caption}
          alt={list[open]!.alt}
          onClose={() => setOpen(null)}
          onPrev={() => setOpen((i) => (i === null ? i : (i - 1 + list.length) % list.length))}
          onNext={() => setOpen((i) => (i === null ? i : (i + 1) % list.length))}
        />
      ) : null}
    </article>
  );
}

function Viewer({
  id,
  caption,
  alt,
  onClose,
  onPrev,
  onNext,
}: {
  id: CatalogId;
  caption?: string;
  alt: string;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const { width, height } = sizeOf(id);
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/92 p-4"
      role="dialog"
      aria-modal="true"
      aria-label={caption ?? alt}
    >
      <button type="button" className="absolute inset-0" aria-label="Close photo" onClick={onClose} />
      <div className="relative z-10 max-h-[90vh] max-w-5xl">
        <picture>
          <source type="image/avif" srcSet={srcset(id, "avif")} sizes="90vw" />
          <source type="image/webp" srcSet={srcset(id, "webp")} sizes="90vw" />
          <img
            src={largestSrc(id, "jpg")}
            srcSet={srcset(id, "jpg")}
            sizes="90vw"
            alt={alt}
            width={width}
            height={height}
            className="max-h-[80vh] w-auto max-w-full"
          />
        </picture>
        <div className="mt-3 flex items-center justify-between gap-4 text-cream">
          <p>{caption ?? alt}</p>
          <div className="flex gap-2">
            <button type="button" className="min-h-11 px-3 font-display uppercase" onClick={onPrev}>
              Prev
            </button>
            <button type="button" className="min-h-11 px-3 font-display uppercase" onClick={onNext}>
              Next
            </button>
            <button type="button" className="min-h-11 px-3 font-display uppercase" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
