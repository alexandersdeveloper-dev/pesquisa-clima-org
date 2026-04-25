import { useState } from "react";
import { issueToken } from "../services/surveyClient.js";

export function useSurveyToken() {
  const [token] = useState(() => issueToken());
  return token;
}
