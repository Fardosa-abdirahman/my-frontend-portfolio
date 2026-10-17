import { describe, expect, it } from "vitest";
import { cn } from "./cn";

describe("cn", () => {
  it("joins truthy class names", () => {
    expect(cn("rounded-xl", "text-white", "hover:scale-105")).toBe(
      "rounded-xl text-white hover:scale-105",
    );
  });

  it("drops false, null, and undefined values", () => {
    expect(cn("keep", false, null, undefined, "also")).toBe("keep also");
  });
});
