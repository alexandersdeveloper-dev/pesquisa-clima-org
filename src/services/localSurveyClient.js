// localStorage-backed implementation of the survey client interface.
// Mirrors exactly the behavior of the original HTML.

import { genToken } from "../utils/token.js";
import { genProtocol } from "../utils/protocol.js";

const KEY_TOKEN     = "pco_token";
const KEY_SUBMITTED = "pco_submitted";
const KEY_PROTOCOL  = "pco_protocol";
const KEY_USED      = "pco_token_used";
const KEY_PAYLOAD   = "pco_payload";

function safeGet(key) {
  try { return localStorage.getItem(key); } catch { return null; }
}
function safeSet(key, value) {
  try { localStorage.setItem(key, value); } catch { /* noop */ }
}

export function issueToken() {
  const existing = safeGet(KEY_TOKEN);
  if (existing) return existing;
  const token = genToken();
  safeSet(KEY_TOKEN, token);
  return token;
}

export function getSubmissionStatus() {
  const submitted = safeGet(KEY_SUBMITTED) === "1";
  const protocol  = safeGet(KEY_PROTOCOL) || null;
  return { submitted, protocol };
}

export function submitSurvey(payload) {
  // payload: { token, identify, answers }
  const protocol = genProtocol();
  safeSet(KEY_SUBMITTED, "1");
  safeSet(KEY_PROTOCOL, protocol);
  safeSet(KEY_USED, payload.token);
  safeSet(KEY_PAYLOAD, JSON.stringify({ ...payload, protocol, submittedAt: new Date().toISOString() }));
  return { protocol };
}
