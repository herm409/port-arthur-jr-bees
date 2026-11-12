export const org = {
  name: "Port Arthur Jr Bees",
  association: "Port Arthur Jr Bees Association",
  tag: "#jrbeesareeverywhere",
  facebook: "https://www.facebook.com/PAJrBees",
  affiliation: "Gulf Coast Pop Warner",
  place: "Port Arthur, Texas",
  practice: {
    when: "Monday, Wednesday, and Thursday",
    hours: "6:00–8:00 pm",
    where: "Old Franklin campus",
    streets: "Thomas Boulevard & Mobile Avenue",
    map: "https://maps.google.com/?q=Thomas+Boulevard+and+Mobile+Avenue,+Port+Arthur,+TX",
  },
} as const;

export const phones = {
  brad: {
    name: "Coach Brad Coleman",
    role: "Football and the association",
    tel: "+14094983375",
    display: "409-498-3375",
  },
  rayya: {
    name: "Coach Rayya",
    role: "Honey Bees",
    tel: "+14094541462",
    display: "409-454-1462",
  },
} as const;

export const frames = [
  {
    src: "/media/bees-enterprise.jpg",
    alt: "Port Arthur Jr Bees players in purple and gold honeycomb jerseys pose on the field at a Houston Texans practice, the white bubble behind them.",
    place: "Texans camp",
    line: "JR. BEES across the chest. Hex in the fabric.",
    credit: "Beaumont Enterprise / Jr Bees",
  },
  {
    src: "/media/honeybees.jpg",
    alt: "Port Arthur Honey Bees dancers and coaches in purple shirts with medals and trophies on a gym floor.",
    place: "Honey Bees",
    line: "Regional champions. The floor, not a backdrop.",
    credit: "Brooke Coleman / Port Arthur News, 2021",
  },
  {
    src: "/media/practice-2016.jpg",
    alt: "A coach watches Jr Bees players in gold helmets and purple mesh jerseys practice a tackle drill.",
    place: "Practice",
    line: "Gold helmets. Purple mesh. The actual work.",
    credit: "Port Arthur News, 2016",
  },
  {
    src: "/media/jr-bees-texans.jpg",
    alt: "Jr Bees players in honeycomb jerseys sit together in a shaded VIP tent at Texans training camp.",
    place: "VIP tent",
    line: "Up close, on a pro sideline, still kids.",
    credit: "Port Arthur News, 2022",
  },
] as const;

export type Side = "football" | "dance" | "either";

export type Placement = {
  title: string;
  football: string;
  dance: string;
  call: "brad" | "rayya" | "both";
};

export function placeAthlete(age: number, side: Side): Placement {
  if (age <= 6) {
    return {
      title: "Early squad",
      football:
        "Flag has lived on this ladder. Coach Brad will say if a flag group is forming this season — don’t guess from an old flyer.",
      dance:
        "Honey Bees have started dancers as young as five, in a Tiny Mite group. Coach Rayya places them.",
      call: side === "football" ? "brad" : side === "dance" ? "rayya" : "both",
    };
  }
  if (age <= 8) {
    return {
      title: "8U window",
      football:
        "The association has carried an 8-and-under team. Call Coach Brad before you buy cleats — rosters open and close with the kids in hand.",
      dance:
        "This is still Tiny Mite country on the floor: cheer the games, then learn the routine.",
      call: side === "dance" ? "rayya" : side === "football" ? "brad" : "both",
    };
  }
  if (age <= 10) {
    return {
      title: "10U · inside the open window",
      football:
        "Ages 9 through 12 are who the Facebook page said they are still placing. 10U is the squad. Practice is Mon, Wed, Thu, 6 to 8.",
      dance:
        "Girls this age have competed as Junior Peewee after they cheer the football season. Coach Rayya makes the cut, not a form.",
      call: side === "dance" ? "rayya" : side === "football" ? "brad" : "both",
    };
  }
  if (age <= 12) {
    return {
      title: "12U · inside the open window",
      football:
        "This is the top of the Pop Warner ladder here, and the ages Coach Brad has been signing. Bring the child. Call first so he expects you.",
      dance:
        "Junior Peewee moving toward Varsity. The floor gets sharper here — etiquette and routine, not only the sideline.",
      call: side === "dance" ? "rayya" : side === "football" ? "brad" : "both",
    };
  }
  return {
    title: "Older than the football ladder",
    football:
      "Jr Bees football has centered on 12U and under. A teenager who wants to coach-in-training or just be around the work should still call Coach Brad.",
    dance:
      "Honey Bees have included dancers up to about 16, including Varsity. If she wants the floor, call Coach Rayya.",
    call: side === "football" ? "brad" : "rayya",
  };
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
    return { status: "On the field now", detail: "Old Franklin campus · until 8 pm" };
  }
  if (days.includes(weekday) && mins < start) {
    return { status: "Practice tonight", detail: "6 to 8 pm · Thomas & Mobile" };
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
      return { status: `Next practice ${when}`, detail: "6 to 8 pm · old Franklin campus" };
    }
  }
  return { status: "Next practice Monday", detail: "6 to 8 pm · old Franklin campus" };
}

export const milestones = [
  {
    year: "Mid-1980s",
    title: "The sideline starts",
    body: "Bradford Coleman comes into the Jr Bees, later coaches, and takes the presidency in 2007. The Port Arthur News put the span in print. He is still the number families call.",
  },
  {
    year: "The floor",
    title: "Honey Bees come back",
    body: "Brooke Coleman, a Honey Bee in high school, was asked by her father to bring the dancers back. They cheer the games, then compete. Etiquette is part of the work, not a side hobby.",
  },
  {
    year: "2021",
    title: "Nationals, again",
    body: "The News reported a ninth trip toward a national championship, regional champions on the gym floor, and a $7,000 bill with $2,000 left. The village was the rest of the math.",
  },
  {
    year: "2022",
    title: "Texans camp",
    body: "VIP tent, drills up close, a framed jersey for J.K. Chevrolet. The Houston Texans had granted equipment money, including $2,000 the year before. Port Iron had been in the work for years.",
  },
  {
    year: "The rooms",
    title: "Draft, Ellen, Levi’s, Lamar",
    body: "The Enterprise noted NFL Draft visits and The Ellen Show. Families have posted the 49ers’ stadium. At Lamar, the kids have led the Cardinals out and given the hi-five.",
  },
  {
    year: "2023",
    title: "Hall of Fame night",
    body: "Coach Brad was inducted into the PV Coaches Hall of Fame. The Facebook album is still up. The sentence on the post is plain: it is an honor.",
  },
  {
    year: "Now",
    title: "Still placing kids",
    body: "Recent posts: Texans coaches clinic at the Bubble, former Jr Bees Kamron Rivers and Kenyon Rivers, Lamar’s home opener, and a call for athletes 9 through 12. Same field. Same nights.",
  },
] as const;

export const gifts = [
  {
    id: "fee",
    amount: "$65",
    title: "One child’s way in",
    body: "In 2022 Coach Brad told the News the fee was $65, on purpose, so a family could afford to come. Ask what this season actually costs before anyone pays.",
  },
  {
    id: "pads",
    amount: "$200",
    title: "Gear, not a banner",
    body: "Helmets, jerseys, and shoulder pads are what sponsors have actually bought. J.K. Chevrolet’s years of that work are why kids show up dressed like a team.",
  },
  {
    id: "grant",
    amount: "$2,000",
    title: "A Texans-sized gift",
    body: "That is the equipment grant the Beaumont Enterprise reported from the Houston Texans. It does not buy a season. It keeps the closet from going empty.",
  },
  {
    id: "trip",
    amount: "$7–8k",
    title: "The trip",
    body: "Honey Bees nationals have run about $7,000 to Orlando and about $8,000 for four days at Disney, in the News. The girls had already fundraised half. The gap is the ask.",
  },
] as const;
