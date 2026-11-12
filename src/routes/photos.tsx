import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { albums, type AlbumPhoto } from "@/lib/photos";
import { pageHead } from "@/lib/org";

export const Route = createFileRoute("/photos")({
  head: () =>
    pageHead({
      title: "Photos | Port Arthur Jr Bees",
      description: "Photos of Port Arthur Jr Bees football and the Honeybees dance team, from the association's earlier site.",
      path: "/photos",
    }),
  component: PhotosPage,
});

function PhotosPage() {
  const photos = albums.flatMap((album) => album.photos);
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    if (open === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(null);
      if (event.key === "ArrowRight") setOpen((i) => (i === null ? i : (i + 1) % photos.length));
      if (event.key === "ArrowLeft") setOpen((i) => (i === null ? i : (i - 1 + photos.length) % photos.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, photos.length]);

  let seen = 0;

  return (
    <article className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
      <h1 className="font-display text-6xl uppercase sm:text-7xl">Photos</h1>
      <p className="mt-4 max-w-2xl text-xl text-stone">Football and Honeybees, from the program's own pictures.</p>

      {albums.map((album) => (
        <section key={album.title} className="mt-12">
          <h2 className="font-display text-4xl uppercase">{album.title}</h2>
          <div className="mt-5 columns-1 gap-4 sm:columns-2 lg:columns-3">
            {album.photos.map((photo) => {
              const index = photos.findIndex((item) => item.src === photo.src);
              const eager = seen < 6;
              seen += 1;
              return (
                <figure key={photo.src} className="mb-4 break-inside-avoid">
                  <button type="button" className="block min-h-11 w-full" onClick={() => setOpen(index)}>
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full"
                      loading={eager ? "eager" : "lazy"}
                      decoding="async"
                    />
                  </button>
                  {photo.caption ? <figcaption className="mt-1 text-sm text-stone">{photo.caption}</figcaption> : null}
                </figure>
              );
            })}
          </div>
        </section>
      ))}

      {open !== null ? (
        <Viewer
          photo={photos[open]!}
          onClose={() => setOpen(null)}
          onPrev={() => setOpen((i) => (i === null ? i : (i - 1 + photos.length) % photos.length))}
          onNext={() => setOpen((i) => (i === null ? i : (i + 1) % photos.length))}
        />
      ) : null}
    </article>
  );
}

function Viewer({
  photo,
  onClose,
  onPrev,
  onNext,
}: {
  photo: AlbumPhoto;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4" role="dialog" aria-modal="true" aria-label={photo.caption || photo.alt}>
      <button type="button" className="absolute inset-0" aria-label="Close photo" onClick={onClose} />
      <div className="relative z-10 max-h-[90vh] max-w-5xl">
        <img src={photo.src} alt={photo.alt} className="max-h-[80vh] w-auto max-w-full" />
        <div className="mt-3 flex items-center justify-between gap-4 text-cream">
          <p>{photo.caption}</p>
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
