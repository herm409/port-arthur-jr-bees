export const SITE_ORIGIN = "https://port-arthur-jr-bees.netlify.app";

export const org = {
  name: "Port Arthur Jr Bees",
  association: "Port Arthur Jr Bees Association",
  tag: "#jrbeesareeverywhere",
  facebook: "https://www.facebook.com/PAJrBees",
  honeybeesFacebook: "https://www.facebook.com/pahoneybees",
  affiliation: "Gulf Coast Pop Warner",
  place: "Port Arthur, Texas",
  email: "jrbees814@gmail.com",
  founded: 1985,
  nonprofit: true,
} as const;

export const phones = {
  brad: {
    name: "Coach Brad Coleman",
    short: "Coach Brad",
    role: "Football and the association",
    tel: "+14094983375",
    display: "409-498-3375",
  },
  rayya: {
    name: "Coach Rayya",
    short: "Coach Rayya",
    role: "Honeybees",
    tel: "+14094541462",
    display: "409-454-1462",
  },
} as const;

export const practice = {
  when: "Monday, Wednesday, and Thursday",
  hours: "6:00 to 8:00 pm",
  where: "Old Franklin Campus",
  streets: "Thomas Boulevard and Mobile Avenue",
  map: "https://maps.google.com/?q=Thomas+Boulevard+and+Mobile+Avenue,+Port+Arthur,+TX",
  pending: true,
} as const;

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
    return { status: "On the field now", detail: "Old Franklin Campus, until 8 pm" };
  }
  if (days.includes(weekday) && mins < start) {
    return { status: "Practice tonight", detail: "6 to 8 pm, Thomas and Mobile" };
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
      return { status: `Next practice ${when}`, detail: "6 to 8 pm, Old Franklin Campus" };
    }
  }
  return { status: "Next practice Monday", detail: "6 to 8 pm, Old Franklin Campus" };
}

export function pageHead({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  const url = `${SITE_ORIGIN}${path}`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: `${SITE_ORIGIN}/og.jpg` },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
