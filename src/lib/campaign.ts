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
} as const;

export const medicalForm = {
  id: "240466718637061",
  src: "https://form.jotform.com/240466718637061",
  title: "Youth Participant Medical History Form",
  pendingNote: "Confirm this is the form for this season.",
} as const;

export const allStateGame = {
  name: "All State Game",
  role: "Texas scout for the All State Game",
  grades: "Players in 6th through 8th grade can be nominated.",
  spotlight:
    "https://allstategame.org/coach-spotlight-celebrating-bradford-coleman-jr-a-pillar-of-youth-football/",
} as const;

export function money(n: number) {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD" });
}
