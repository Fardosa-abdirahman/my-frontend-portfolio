import { describe, expect, it } from "vitest";
import { cardAccents, getCardAccent } from "./sectionThemes";

describe("getCardAccent", () => {
  it("returns the accent for the given index", () => {
    expect(getCardAccent(0)).toEqual(cardAccents[0]);
  });

  it("wraps around when the index is past the last accent", () => {
    expect(getCardAccent(cardAccents.length)).toEqual(cardAccents[0]);
  });
});
