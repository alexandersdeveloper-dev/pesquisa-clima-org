// Single facade consumed by the UI. Today it forwards to the localStorage
// implementation. To migrate to Supabase, switch the imports below — no
// component or hook needs to change.
//
// Contract:
//   issueToken(): string
//   getSubmissionStatus(): { submitted: boolean, protocol: string | null }
//   submitSurvey(payload): { protocol: string }
//     payload = { token, identify: { setor, tempo, vinculo }, answers }

export {
  issueToken,
  getSubmissionStatus,
  submitSurvey,
} from "./localSurveyClient.js";
