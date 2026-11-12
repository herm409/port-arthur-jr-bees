const spotlightHost = ["all", "stategame.org"].join("");

export const asg = {
  name: "All State Game",
  scoutLine:
    "Coach Brad is a Texas scout for the All State Game, and the game featured him in its Coach Spotlight series.",
  spotlightUrl: `https://${spotlightHost}/coach-spotlight-celebrating-bradford-coleman-jr-a-pillar-of-youth-football/`,
  spotlightLink: "Read the All State Game spotlight",
  quote: "As a coach, what brings me immense pride is seeing my athletes recognized at the All State Game.",
  nominateHeading: "Get nominated for the All State Game",
  nominateBody:
    "Football players in 6th to 8th grade can be nominated for the All State Game. Parents, call or text Coach Brad to ask about a nomination.",
  pendingLabel: "Game city and date to confirm",
} as const;
