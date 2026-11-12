import { fallbackSrc, photoOf, sizeOf, srcset, type CatalogId } from "@/lib/photos";
import { cn } from "@/lib/cn";

type PhotoPictureProps = {
  id: CatalogId;
  sizes: string;
  className?: string;
  imgClassName?: string;
  loading?: "lazy" | "eager";
  fetchPriority?: "high" | "low" | "auto";
  alt?: string;
};

export function PhotoPicture({
  id,
  sizes,
  className,
  imgClassName,
  loading = "lazy",
  fetchPriority,
  alt,
}: PhotoPictureProps) {
  const photo = photoOf(id);
  const { width, height } = sizeOf(id);
  return (
    <picture className={className}>
      <source type="image/avif" srcSet={srcset(id, "avif")} sizes={sizes} />
      <source type="image/webp" srcSet={srcset(id, "webp")} sizes={sizes} />
      <img
        src={fallbackSrc(id)}
        srcSet={srcset(id, "jpg")}
        sizes={sizes}
        alt={alt ?? photo.alt}
        width={width}
        height={height}
        loading={loading}
        decoding="async"
        fetchPriority={fetchPriority}
        className={cn("h-full w-full object-cover", imgClassName)}
      />
    </picture>
  );
}
