# Placeholders

Tokens the site still needs from Coach Brad or Herman. Preview builds (anything other than Netlify CONTEXT=production) show the token. Production hides the slot or uses the fallback below.

| Token | Where it renders | Preview look | Production fallback |
| --- | --- | --- | --- |
| Sign-up fee | How to Join card on Home and /register | Confirmed: $75 football, $90 Honeybees. Shown as copy. | Same. No $65 figure. |
| [MEDICAL_FORM_CURRENT_URL] | How to Join card step 2, /register | Button opens JotForm 240466718637061. PENDING tag: "Season label to confirm with Coach Brad". Desktop may embed the form. | Button only. No season label. Form title stays 2025-2026. |
| All State Game city and date | Home Coach Brad block, /football Get nominated block | PENDING tag: "Game city and date to confirm". Do not print Dallas or a year. | Hide the tag. Keep the scout line, quote, spotlight link, and Get nominated copy. |
| [LAMAR_TRIP_PHOTO] | /our-story#trips | Ink tile: "Lamar University" / "Photo coming" | Hide the tile. Do not use another venue's photo. |
| [TSU_TRIP_PHOTO] | /our-story#trips | Ink tile: "Texas Southern" / "Photo coming" | Hide the tile. |
| [COACH_BRAD_PORTRAIT] | Home Coach Brad plate, /our-story | Uses photo 11 (Coach Brad on the field) until a portrait lands | Same fallback photo 11 |
| [HERO_ACTION_PHOTO_OR_LOOP] | Home hero | Phone uses photo 25 (McNeese at night). Desktop uses photo 08 (night game in Houston). | Same photos until a muted looping clip under 2 MB is supplied |
| [BUILDING_SITE_PHOTO] | /donate | Ink tile: "The 30x30 site" / "Photo coming" | Hide the tile |
| [LOGO_VECTOR] | Header wordmark, footer | Type wordmark "PORT ARTHUR JR BEES" in Big Shoulders 800 plus public/favicon.svg | Same |
| [DOMAIN] | Canonical URLs, sitemap, robots, JSON-LD | https://port-arthur-jr-bees.netlify.app | Swap origin in src/lib/site.ts when the custom domain exists |
| [ORG_LEGAL_NAME] | src/lib/org.ts legalName | Stays null. Site says "nonprofit" only. | Same until supplied. No tax-deductible claim. |
| [EIN] | src/lib/org.ts ein | Stays null. Not published. | Same until supplied. |
| [SPONSOR_TIERS] | /sponsor | Dashed placeholder with suggested 30x30 line-item framing | Hide the tier block |
| [SPONSOR_LIST] | Home sponsors, /sponsor wall | Dashed list of candidates waiting on confirmation | Hide the wall |
| [RAYYA_PERMISSION] | Honeybees call and text links | Number is live (from the association's own site). Token stays in code. | Same unless Herman pulls it |
| [PHOTO_CONSENT] | All photos of kids | Photos from the public Jimdo archive. No child is named in copy, captions, or alt text. | Same |
| Practice schedule | How to Join card, footer, /contact | Shown with a PENDING tag. Monday, Wednesday, and Thursday, 6:00 to 8:00 pm, Old Franklin Campus. | Hidden until pending is false in src/lib/facts.ts |

Cash App QR: live at public/images/cashapp-qr-pajrbees.jpg (and a scaled WebP). Shown on the Home 30x30 block and at the top of /donate in preview and production.

Raised figure: campaign.raised is $25 and campaign.showRaised is false. Do not turn it on until Coach Brad will keep it current.
