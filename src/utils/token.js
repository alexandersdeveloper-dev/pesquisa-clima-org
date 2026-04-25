// Crockford-style alphabet (no I, O, 0, 1) — same as original HTML.
const ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

function segment(n) {
  let out = "";
  for (let i = 0; i < n; i++) {
    out += ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
  }
  return out;
}

export function genToken() {
  return `${segment(4)}-${segment(4)}-${segment(4)}`;
}
