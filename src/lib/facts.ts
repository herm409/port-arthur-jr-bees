import { isPreview } from "@/lib/site-context";

export type PendingEntry = {
  id: string;
  pending: boolean;
};

export const asgCityDate = {
  id: "asg-city-date",
  pending: true,
} as const satisfies PendingEntry;

export const practice = {
  id: "practice",
  pending: true,
  when: "Monday, Wednesday, and Thursday",
  hours: "6:00 to 8:00 pm",
  where: "Old Franklin Campus",
  streets: "Thomas Boulevard and Mobile Avenue",
  city: "Port Arthur",
  map: "https://maps.google.com/?q=Thomas+Boulevard+and+Mobile+Avenue,+Port+Arthur,+TX",
} as const satisfies PendingEntry & Record<string, unknown>;

export const sponsorTiers: null | Array<{
  name: string;
  amount: number;
  paysFor: string;
}> = null; // [SPONSOR_TIERS]

export const sponsorList: null | Array<{ name: string; href?: string }> = null; // [SPONSOR_LIST]

/** Preview-only framing for Herman. Hidden in production until confirmed. */
export const sponsorTierSuggestions = [
  { name: "Metal building", amount: 14132.0, paysFor: "The 30 ft x 30 ft building itself" },
  { name: "Installation", amount: 1347.2, paysFor: "Putting the building up" },
  { name: "Concrete", amount: 1200.0, paysFor: "Slab and footings" },
  { name: "Delivery", amount: 800.0, paysFor: "Delivery and setup" },
];

export const sponsorCandidates = [
  "Houston Texans",
  "Town and Country Ford",
  "Port Arthur LNG",
  "J.K. Chevrolet",
  "Port Iron",
];

export const placeholders = {
  lamarTripPhoto: null as string | null, // [LAMAR_TRIP_PHOTO]
  tsuTripPhoto: null as string | null, // [TSU_TRIP_PHOTO]
  coachBradPortrait: null as string | null, // [COACH_BRAD_PORTRAIT]
  heroAction: null as string | null, // [HERO_ACTION_PHOTO_OR_LOOP]
  buildingSitePhoto: null as string | null, // [BUILDING_SITE_PHOTO]
  logoVector: null as string | null, // [LOGO_VECTOR]
  photoConsent: null as string | null, // [PHOTO_CONSENT]
  rayyaPermission: true, // published from the association's own site; [RAYYA_PERMISSION]
};

export function revealPending(entry: PendingEntry): boolean {
  if (!entry.pending) return true;
  return isPreview;
}

export function pendingTagVisible(entry: PendingEntry): boolean {
  return entry.pending && isPreview;
}

export function practiceLabel(now: Date): { status: string; detail: string } {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Chicago",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(now);
  const weekday = parts.find((p) => p.type === "weekday")?.value ?? "Mon";
  const hour = Number(parts.find((p) => p.type === "hour")?.value ?? "0");
  const minute = Number(parts.find((p) => p.type === "minute")?.value ?? "0");
  const mins = hour * 60 + minute;
  const days = ["Mon", "Wed", "Thu"];
  const start = 18 * 60;
  const end = 20 * 60;

  if (days.includes(weekday) && mins >= start && mins < end) {
    return { status: "On the field now", detail: "Old Franklin Campus until 8:00 pm" };
  }
  if (days.includes(weekday) && mins < start) {
    return { status: "Practice tonight", detail: "6:00 to 8:00 pm at Old Franklin Campus" };
  }

  const seq = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const names: Record<string, string> = {
    Mon: "Monday",
    Wed: "Wednesday",
    Thu: "Thursday",
  };
  let i = seq.indexOf(weekday);
  if (i < 0) i = 0;
  for (let step = 1; step <= 7; step++) {
    const name = seq[(i + step) % 7] ?? "Mon";
    if (days.includes(name)) {
      const when = step === 1 ? "tomorrow" : (names[name] ?? name);
      return { status: `Next practice ${when}`, detail: "6:00 to 8:00 pm at Old Franklin Campus" };
    }
  }
  return { status: "Next practice Monday", detail: "6:00 to 8:00 pm at Old Franklin Campus" };
}
