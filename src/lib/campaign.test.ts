import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { campaign, campaignGoalCents, campaignItemsSumCents } from "./campaign.ts";

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
    assert.equal(campaign.cashAppQr, null);
  });
});
