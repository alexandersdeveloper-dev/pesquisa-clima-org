import { describe, it, expect } from "vitest";
import { genToken } from "./token.js";

describe("genToken", () => {
  it("returns the XXXX-XXXX-XXXX shape", () => {
    expect(genToken()).toMatch(/^[A-Z2-9]{4}-[A-Z2-9]{4}-[A-Z2-9]{4}$/);
  });

  it("never emits the ambiguous Crockford glyphs (I, O, 0, 1)", () => {
    for (let i = 0; i < 200; i++) {
      expect(genToken()).not.toMatch(/[IO01]/);
    }
  });

  it("produces different tokens across consecutive calls", () => {
    const set = new Set();
    for (let i = 0; i < 50; i++) set.add(genToken());
    // 32^12 ≈ 1.15e18 — collisions in 50 draws are statistically impossible
    expect(set.size).toBe(50);
  });
});
