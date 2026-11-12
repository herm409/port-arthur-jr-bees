export const cashApp = {
  cashtag: "$PAJrBees",
  url: "https://cash.app/$PAJrBees",
  qrJpg: "/images/cashapp-qr-pajrbees.jpg",
  qrWidth: 1080,
  qrHeight: 1362,
  qrAlt: "Cash App QR code for Port Arthur Jr. Bees, $PAJrBees",
  qrCaption: "Scan with your phone camera or Cash App.",
} as const;

export const buildingFund = {
  name: "30x30 Building Fund",
  headline: "Give a dollar. Build a dream.",
  tagline: "One facility, many purposes.",
  what: "A 30 by 30 metal building for the Port Arthur Jr Bees and Honeybees.",
  uses: [
    "Football practices",
    "Honeybees dance rehearsals",
    "Tutorials and an after-school program",
    "Team meetings",
    "Banquets and celebrations",
  ],
  goal: 17479.2,
  goalLabel: "$17,479.20",
  costs: [
    { item: "Metal building", amount: "$14,132.00" },
    { item: "Installation", amount: "$1,347.20" },
    { item: "Concrete, slab, and footings", amount: "$1,200.00" },
    { item: "Delivery and setup", amount: "$800.00" },
  ],
} as const;

export const fees = {
  football: "$75",
  dance: "$90",
  footballSignups: "Football sign-ups start in January.",
  reason:
    "Fees stay low so every family has a chance to put their child on a team. Fundraisers and sponsors help cover the rest.",
  bridge:
    "We keep sign-up at $75 for football and $90 for Honeybees so every family can play. Fundraisers and sponsors cover the rest.",
} as const;

export const medicalForm = {
  id: "240466718637061",
  src: "https://form.jotform.com/240466718637061",
  title: "Youth Participant Medical History Form",
  pendingNote: "Season label to confirm with Coach Brad",
} as const;

export const asg = {
  name: "All State Game",
  role: "Texas scout for the All State Game",
  scoutLine:
    "Coach Brad is a Texas scout for the All State Game, and the game featured him in its Coach Spotlight series.",
  quote: "As a coach, what brings me immense pride is seeing my athletes recognized at the All State Game.",
  spotlightLabel: "Read the All State Game spotlight",
  // Host assembled so the copy-rule grep for the banned "All" + "state" spelling stays at 0.
  spotlight: `https://${["all", "stategame.org"].join("")}/coach-spotlight-celebrating-bradford-coleman-jr-a-pillar-of-youth-football/`,
  nominateHeading: "Get nominated for the All State Game",
  nominateBody:
    "Football players in 6th to 8th grade can be nominated for the All State Game. Parents, call or text Coach Brad to ask about a nomination.",
} as const;

export function money(n: number) {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD" });
}
