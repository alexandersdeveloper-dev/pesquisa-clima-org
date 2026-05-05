import { describe, it, expect } from "vitest";
import { genProtocol } from "./protocol.js";

describe("genProtocol", () => {
  it("returns the PCO-NNNNNN shape with exactly 6 digits", () => {
    expect(genProtocol()).toMatch(/^PCO-\d{6}$/);
  });

  it("keeps the numeric part within 100000-999999", () => {
    for (let i = 0; i < 200; i++) {
      const n = Number(genProtocol().split("-")[1]);
      expect(n).toBeGreaterThanOrEqual(100000);
      expect(n).toBeLessThanOrEqual(999999);
    }
  });

  it("produces mostly distinct protocols across calls (sanity check)", () => {
    const set = new Set();
    for (let i = 0; i < 50; i++) set.add(genProtocol());
    // 900k space, 50 draws — at least 47 distinct in practice
    expect(set.size).toBeGreaterThanOrEqual(47);
  });
});
