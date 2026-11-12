import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { campaign, campaignGoalCents, campaignItemsSumCents } from "./campaign.ts";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");

describe("campaign", () => {
  it("goal equals the sum of items", () => {
    assert.equal(campaignGoalCents(), campaignItemsSumCents());
  });

  it("keeps the raised figure off the scoreboard", () => {
    assert.equal(campaign.showRaised, false);
    assert.equal(campaign.raised, 25);
  });

  it("names Cash App as the only give path", () => {
    assert.equal(campaign.cashtag, "$PAJrBees");
    assert.equal(campaign.cashAppUrl, "https://cash.app/$PAJrBees");
    assert.equal(campaign.cashAppQr, "/images/cashapp-qr-pajrbees.jpg");
    assert.equal(campaign.cashAppQrWebp, "/images/cashapp-qr-pajrbees.webp");
    assert.equal(campaign.cashAppQrAlt, "Cash App QR code for Port Arthur Jr. Bees, $PAJrBees");
    assert.equal(existsSync(path.join(root, "public/images/cashapp-qr-pajrbees.jpg")), true);
    assert.equal(existsSync(path.join(root, "public/images/cashapp-qr-pajrbees.webp")), true);
  });
});
