// Placeholder for the future Supabase-backed implementation.
// The UI never imports this directly — it goes through surveyClient.js.
//
// Expected schema (reference for the migration):
//
//   table tokens (
//     token_hash   text primary key,         -- sha256 of the token, never the raw token
//     used         boolean not null default false,
//     issued_at    timestamptz not null default now(),
//     used_at      timestamptz
//   )
//
//   table responses (
//     id            uuid primary key default gen_random_uuid(),
//     token_hash    text not null references tokens(token_hash),
//     identify      jsonb not null,           -- { setor, tempo, vinculo }
//     answers       jsonb not null,           -- { qid: value | string[] | string }
//     protocol      text not null unique,     -- PCO-NNNNNN issued server-side
//     submitted_at  timestamptz not null default now()
//   )
//
// Server-side rules (RLS / trigger):
//   - INSERT into responses must atomically check tokens.used = false,
//     mark tokens.used = true, set used_at = now().
//   - If the check fails, the insert is rejected and the client receives
//     an "already submitted" error — frontend then flips into blocked state.
//
// To switch implementations later, swap the export in surveyClient.js
// (e.g. via a VITE_SURVEY_BACKEND env var) — the UI contract stays identical.

function notImplemented() {
  throw new Error("supabaseSurveyClient: not implemented yet — using localSurveyClient.");
}

export function issueToken()           { return notImplemented(); }
export function getSubmissionStatus()  { return notImplemented(); }
export function submitSurvey(/* payload */) { return notImplemented(); }
