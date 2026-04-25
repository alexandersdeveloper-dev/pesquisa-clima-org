import { useCallback, useState } from "react";
import { getSubmissionStatus } from "../services/surveyClient.js";

export function useSubmissionStatus() {
  const [status, setStatus] = useState(() => getSubmissionStatus());

  const refresh = useCallback(() => {
    setStatus(getSubmissionStatus());
  }, []);

  return {
    blocked: status.submitted,
    protocol: status.protocol,
    refresh,
  };
}
