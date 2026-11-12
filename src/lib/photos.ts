import { photoSizes } from "@/lib/photo-sizes";

export type PhotoId = keyof typeof photoSizes;

export type Photo = {
  id: PhotoId;
  alt: string;
  caption?: string;
  album: "football" | "honeybees" | "trips";
};

export const photos = {
  "08-i5fa4d54": {
    id: "08-i5fa4d54",
    alt: "Coach Brad and five Jr Bees in honeycomb jerseys with a pro player at a night XFL game in Houston.",
    caption: "Night game in Houston",
    album: "trips",
  },
  "25-i836be40": {
    id: "25-i836be40",
    alt: "Jr Bees and adults at night in McNeese's Cowboy Stadium, purple and gold end zone, lights on.",
    caption: "McNeese Cowboy Stadium",
    album: "trips",
  },
  "47-i656619a": {
    id: "47-i656619a",
    alt: "Jr Bees with pro players at Houston Texans camp, practice bubble behind.",
    caption: "Houston Texans camp",
    album: "trips",
  },
  "10-i13eb85c": {
    id: "10-i13eb85c",
    alt: "Jr Bees with a pro player at Houston Texans camp.",
    caption: "Houston Texans camp",
    album: "trips",
  },
  "36-i9966db5": {
    id: "36-i9966db5",
    alt: "Jr Bees outside AT&T Stadium at the 2018 NFL Draft.",
    caption: "NFL Draft 2018",
    album: "trips",
  },
  "12-i1c3ce66": {
    id: "12-i1c3ce66",
    alt: "Jr Bees in the stands at NRG Stadium.",
    caption: "NRG Stadium",
    album: "trips",
  },
  "40-i79f5e68": {
    id: "40-i79f5e68",
    alt: "Jr Bees in honeycomb jerseys in the stands at NRG Stadium.",
    caption: "NRG Stadium",
    album: "trips",
  },
  "19-ifbf0224": {
    id: "19-ifbf0224",
    alt: "Jr Bees on turf at a Texans clinic in the bubble.",
    caption: "Texans clinic",
    album: "trips",
  },
  "28-ib3e9f37": {
    id: "28-ib3e9f37",
    alt: "Jr Bees seated in a VIP tent at Houston Texans camp.",
    caption: "Texans camp VIP tent",
    album: "trips",
  },
  "04-i4de506d": {
    id: "04-i4de506d",
    alt: "Honeybees on stage at MCDA Cheer and Dance Championships with Division Champion banners.",
    caption: "MCDA Division Champion",
    album: "honeybees",
  },
  "01-ia5b3999": {
    id: "01-ia5b3999",
    alt: "Honeybees with a Regional Champion banner and trophies.",
    caption: "Regional Champion",
    album: "honeybees",
  },
  "06-i870d26c": {
    id: "06-i870d26c",
    alt: "Honeybees team photo with trophies.",
    album: "honeybees",
  },
  "07-ie88ee0f": {
    id: "07-ie88ee0f",
    alt: "Honeybees on a trip to Orlando, Florida.",
    caption: "Orlando, Florida",
    album: "honeybees",
  },
  "51-i068564f": {
    id: "51-i068564f",
    alt: "Honeybees on a trip to Orlando, Florida.",
    caption: "Orlando, Florida",
    album: "honeybees",
  },
  "56-ie745ad9": {
    id: "56-ie745ad9",
    alt: "Honeybees on a trip to Orlando, Florida.",
    caption: "Orlando, Florida",
    album: "honeybees",
  },
  "11-i67d9681": {
    id: "11-i67d9681",
    alt: "Coach Brad on a field with another coach.",
    album: "football",
  },
  "31-id3f8948": {
    id: "31-id3f8948",
    alt: "Jr Bees team and supporters with a dealership sponsor banner.",
    album: "football",
  },
  "26-ia5dde76": {
    id: "26-ia5dde76",
    alt: "Jr Bees in honeycomb jerseys on game day.",
    caption: "Game day",
    album: "football",
  },
  "27-ibd07c4f": {
    id: "27-ibd07c4f",
    alt: "Jr Bees in honeycomb jerseys on game day.",
    caption: "Game day",
    album: "football",
  },
  "05-iaea8777": {
    id: "05-iaea8777",
    alt: "Jr Bees football squad and adults posing on an NFL stadium field.",
    album: "trips",
  },
  "09-ife8558d": {
    id: "09-ife8558d",
    alt: "Jr Bees on a turf field with coaches.",
    album: "football",
  },
  "16-i46d146c": {
    id: "16-i46d146c",
    alt: "Jr Bees and coaches standing outside a glass building.",
    album: "football",
  },
  "17-ic8465bf": {
    id: "17-ic8465bf",
    alt: "Jr Bees in navy shirts with adults at a stadium event.",
    album: "trips",
  },
  "18-ibe54073": {
    id: "18-ibe54073",
    alt: "Coach Brad with two adults at a stadium rail.",
    album: "trips",
  },
  "23-id372713": {
    id: "23-id372713",
    alt: "Youth clinic crowd seated on indoor turf.",
    album: "trips",
  },
  "29-i9104952": {
    id: "29-i9104952",
    alt: "Jr Bees eating in a covered VIP area at a stadium.",
    album: "trips",
  },
  "35-ic0550fb": {
    id: "35-ic0550fb",
    alt: "Kids in a Houston Texans indoor practice facility.",
    album: "trips",
  },
  "41-if692410": {
    id: "41-if692410",
    alt: "Jr Bees families walking toward the NRG Stadium entrance.",
    caption: "NRG Stadium",
    album: "trips",
  },
  "42-i6140072": {
    id: "42-i6140072",
    alt: "Honeybees with medals on a basketball court.",
    album: "honeybees",
  },
  "43-i5de09f0": {
    id: "43-i5de09f0",
    alt: "Three young Honeybees with medals and a trophy on a court.",
    album: "honeybees",
  },
  "45-i6914361": {
    id: "45-i6914361",
    alt: "Honeybees with a Regional Champion banner in an arena.",
    caption: "Regional Champion",
    album: "honeybees",
  },
  "48-i021e383": {
    id: "48-i021e383",
    alt: "Jr Bees indoors on a Texans star logo.",
    album: "trips",
  },
  "50-i25161ad": {
    id: "50-i25161ad",
    alt: "Honeybees standing outside a building.",
    album: "honeybees",
  },
  "52-iac91983": {
    id: "52-iac91983",
    alt: "Honeybees beside a tour bus.",
    album: "honeybees",
  },
  "55-ia563dda": {
    id: "55-ia563dda",
    alt: "Three Honeybees coaches in black Honeybees shirts.",
    album: "honeybees",
  },
} as const satisfies Record<PhotoId, Photo>;

export type CatalogId = PhotoId;

export function photoOf(id: CatalogId): Photo {
  return photos[id] as Photo;
}

export const homeStrip: CatalogId[] = ["25-i836be40", "36-i9966db5", "47-i656619a"];

export const honeybeesFeatured: CatalogId[] = [
  "04-i4de506d",
  "01-ia5b3999",
  "06-i870d26c",
  "07-ie88ee0f",
  "51-i068564f",
  "56-ie745ad9",
];

export const footballFeatured: CatalogId[] = [
  "08-i5fa4d54",
  "10-i13eb85c",
  "12-i1c3ce66",
  "26-ia5dde76",
  "27-ibd07c4f",
];

export const albums: { title: string; ids: CatalogId[] }[] = [
  {
    title: "Football",
    ids: [
      "26-ia5dde76",
      "27-ibd07c4f",
      "11-i67d9681",
      "09-ife8558d",
      "16-i46d146c",
      "31-id3f8948",
    ],
  },
  {
    title: "Trips",
    ids: [
      "08-i5fa4d54",
      "25-i836be40",
      "47-i656619a",
      "10-i13eb85c",
      "19-ifbf0224",
      "28-ib3e9f37",
      "12-i1c3ce66",
      "40-i79f5e68",
      "36-i9966db5",
      "05-iaea8777",
      "41-if692410",
      "17-ic8465bf",
      "18-ibe54073",
      "29-i9104952",
      "35-ic0550fb",
      "23-id372713",
      "48-i021e383",
    ],
  },
  {
    title: "Honeybees",
    ids: [
      "01-ia5b3999",
      "04-i4de506d",
      "06-i870d26c",
      "07-ie88ee0f",
      "45-i6914361",
      "42-i6140072",
      "43-i5de09f0",
      "51-i068564f",
      "56-ie745ad9",
      "52-iac91983",
      "50-i25161ad",
      "55-ia563dda",
    ],
  },
];

export function allGalleryPhotos(): Photo[] {
  return albums.flatMap((album) => album.ids.map((id) => photos[id]));
}

export function srcset(id: PhotoId, format: "avif" | "webp" | "jpg"): string {
  return photoSizes[id].widths
    .map((width) => `/media/opt/${id}-w${width}.${format} ${width}w`)
    .join(", ");
}

export function fallbackSrc(id: PhotoId, prefer = 800): string {
  const { widths } = photoSizes[id];
  const width =
    widths.find((w) => w === prefer) ??
    [...widths].reverse().find((w) => w <= prefer) ??
    widths[widths.length - 1]!;
  return `/media/opt/${id}-w${width}.jpg`;
}

export function largestSrc(id: PhotoId, format: "avif" | "webp" | "jpg" = "jpg"): string {
  const width = photoSizes[id].widths[photoSizes[id].widths.length - 1]!;
  return `/media/opt/${id}-w${width}.${format}`;
}

export function sizeOf(id: PhotoId): { width: number; height: number } {
  const { width, height } = photoSizes[id];
  return { width, height };
}
