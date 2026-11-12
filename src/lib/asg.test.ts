import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { asg } from "./asg.ts";

const published = [
  asg.name,
  asg.scoutLine,
  asg.spotlightLink,
  asg.quote,
  asg.nominateHeading,
  asg.nominateBody,
  asg.pendingLabel,
].join("\n");

describe("All State Game copy", () => {
  it("uses the two-word name", () => {
    assert.equal(asg.name, "All State Game");
  });

  it("keeps the exact scout line, quote, and nominate copy", () => {
    assert.match(asg.scoutLine, /Texas scout for the All State Game/);
    assert.equal(
      asg.quote,
      "As a coach, what brings me immense pride is seeing my athletes recognized at the All State Game.",
    );
    assert.equal(asg.nominateHeading, "Get nominated for the All State Game");
    assert.equal(asg.pendingLabel, "Game city and date to confirm");
  });

  it("does not use banned terms, a year, or official scout", () => {
    const banned = ["All" + "state", "All" + "-" + "Star", "Dallas", "48 years", "head coach since 1995"];
    for (const word of banned) {
      assert.equal(published.toLowerCase().includes(word.toLowerCase()), false, word);
    }
    assert.equal(/\bofficial\b/i.test(published), false);
    assert.equal(/\b20\d{2}\b/.test(published), false);
  });

  it("points the spotlight link at the game's own profile", () => {
    assert.equal(asg.spotlightUrl.startsWith("https://"), true);
    assert.equal(asg.spotlightUrl.includes("stategame.org"), true);
    assert.equal(asg.spotlightUrl.includes("coach-spotlight-celebrating-bradford-coleman-jr"), true);
  });
});
