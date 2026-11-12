export const org = {
  name: "Port Arthur Jr Bees",
  association: "Port Arthur Jr Bees Association",
  legalName: null as string | null, // [ORG_LEGAL_NAME]
  ein: null as string | null, // [EIN]
  tag: "#jrbeesareeverywhere",
  email: "jrbees814@gmail.com",
  facebook: "https://www.facebook.com/PAJrBees",
  honeybeesFacebook: "https://www.facebook.com/pahoneybees",
  affiliation: "Gulf Coast Pop Warner",
  affiliationFull: "Gulf Coast Pop Warner Football and Cheer/Dance",
  place: "Port Arthur, Texas",
  founded: "1985",
  presidentSince: "2007",
  coachingYears: 41,
  hallOfFameYear: "2023",
  hallOfFame:
    "Prairie View Interscholastic League Coaches Association Hall of Fame",
  honeybeesFounded: "2012",
};

export const phones = {
  brad: {
    name: "Coach Brad Coleman",
    shortName: "Coach Brad",
    role: "Football, basketball, and the association",
    tel: "+14094983375",
    display: "409-498-3375",
  },
  rayya: {
    name: "Coach Rayya",
    shortName: "Coach Rayya",
    role: "Honeybees",
    tel: "+14094541462",
    display: "409-454-1462",
  },
} as const;

export const fees = {
  football: 75,
  honeybees: 90,
} as const;

export const ages = {
  football: { min: 5, max: 12 },
  honeybees: { min: 3, max: 15 },
  basketball: { min: 5, max: 13 },
} as const;

export const medicalForm = {
  url: "https://form.jotform.com/240466718637061",
  jotformId: "240466718637061",
  seasonLabel: "2025-2026",
  seasonPending: true,
};

export const values = {
  village: "It takes a village to raise a child. Our organization is that village.",
  players: "Our program will always be about the players and cheerleaders, not the plays.",
  respect:
    "We will treat each child, parent, and community volunteer with courtesy, dignity, and respect.",
  mission:
    "to inspire the youth regardless of race, creed, or national origin, to practice the ideals of sportsmanship, scholastic improvement, and physical fitness.",
};

export const feeBridge =
  "We keep sign-up at $75 for football and $90 for Honeybees so every family can play. Fundraisers and sponsors cover the rest.";
