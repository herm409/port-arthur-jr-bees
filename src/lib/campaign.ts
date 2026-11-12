export const campaign = {
  name: "30x30 Building Fund",
  headline: "One facility, many purposes.",
  line: "Give a dollar. Build a dream.",
  building: "30 ft x 30 ft metal building",
  uses: [
    "Football practices",
    "Honeybees dance rehearsals",
    "Tutorials and an after-school program for students",
    "Team meetings",
    "Mini banquets and celebrations",
  ],
  items: [
    { label: "Metal building", amount: 14132.0 },
    { label: "Installation", amount: 1347.2 },
    { label: "Concrete, slab, and footings", amount: 1200.0 },
    { label: "Delivery and setup", amount: 800.0 },
  ],
  goal: 17479.2, // must equal the sum of items
  quoteSource: "Metal Carports",
  raised: 25,
  showRaised: false,
  updated: "2026-11-12",
  cashtag: "$PAJrBees",
  cashAppUrl: "https://cash.app/$PAJrBees",
  cashAppQr: "/images/cashapp-qr-pajrbees.jpg",
  cashAppQrWebp: "/images/cashapp-qr-pajrbees.webp",
  cashAppQrWidth: 1080,
  cashAppQrHeight: 1362,
  cashAppQrAlt: "Cash App QR code for Port Arthur Jr. Bees, $PAJrBees",
  cashAppQrCaption: "Scan with your phone camera or Cash App.",
};

export function campaignGoalCents(): number {
  return Math.round(campaign.goal * 100);
}

export function campaignItemsSumCents(): number {
  return campaign.items.reduce((sum, item) => sum + Math.round(item.amount * 100), 0);
}
