export type Fact = {
  id: string;
  text: string;
  pending: boolean;
  where: string;
};

export const facts = {
  years41: {
    id: "years41",
    text: "Coach Brad has coached for 41 years.",
    pending: false,
    where: "Home, Football, Our story",
  },
  president2007: {
    id: "president2007",
    text: "He has been president of the organization since 2007.",
    pending: false,
    where: "Home",
  },
  hall2023: {
    id: "hall2023",
    text: "He was inducted into the Hall of Fame in 2023.",
    pending: false,
    where: "Home",
  },
  tsuTrips: {
    id: "tsuTrips",
    text: "The kids have gone to Texas Southern games.",
    pending: false,
    where: "Home",
  },
  email: {
    id: "email",
    text: "jrbees814@gmail.com",
    pending: false,
    where: "Footer, Contact, Donate",
  },
  practice: {
    id: "practice",
    text: "Practice is Monday, Wednesday, and Thursday from 6:00 to 8:00 pm at the Old Franklin Campus, Thomas Boulevard and Mobile Avenue.",
    pending: true,
    where: "Header, Footer, Join, Football",
  },
  medicalSeason: {
    id: "medicalSeason",
    text: "Season label to confirm with Coach Brad.",
    pending: true,
    where: "Join",
  },
  officialScout: {
    id: "officialScout",
    text: "Official scout title to confirm.",
    pending: true,
    where: "Home, Football",
  },
  asgWhenWhere: {
    id: "asgWhenWhere",
    text: "Game city and date to confirm.",
    pending: true,
    where: "Home, Football",
  },
  ein: {
    id: "ein",
    text: "EIN and tax-deductible status.",
    pending: true,
    where: "Donate, Footer (hidden until confirmed)",
  },
} as const satisfies Record<string, Fact>;

export function showPendingTags() {
  return import.meta.env.VITE_SITE_CONTEXT !== "production";
}
