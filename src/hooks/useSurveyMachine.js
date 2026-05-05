import { useCallback, useMemo, useState } from "react";
import { SECTIONS } from "../data/survey.js";
import { submitSurvey } from "../services/surveyClient.js";

// Minimum time between opening the modal and clicking "Enviar pesquisa".
// Real respondents always take much longer; bots try to submit instantly.
const MIN_DURATION_MS = 30_000;
const SUSPECT_MESSAGE = "Aguarde alguns instantes antes de enviar.";

// Step index map:
//   0           -> token gate
//   1           -> identification
//   2..N+1      -> one question per step (N = total questions)
//   N+2         -> review (read-only summary with edit)
//   submitted   -> done screen
export function useSurveyMachine({ token, onSubmitted }) {
  const flatQuestions = useMemo(() => {
    const arr = [];
    SECTIONS.forEach((sec) =>
      sec.questions.forEach((q) =>
        arr.push({ ...q, section: sec.label, sectionId: sec.id })
      )
    );
    return arr;
  }, []);

  const totalSteps = 1 + 1 + flatQuestions.length + 1; // gate + identify + questions + review
  const reviewStepIdx = totalSteps - 1;

  const [step, setStep]       = useState(0);
  const [identify, setIdentify] = useState({ setor: "", tempo: "", vinculo: "" });
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [protocol, setProtocol]   = useState("");
  const [editingFromReview, setEditingFromReview] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [submitError, setSubmitError] = useState(null);
  const [startedAt] = useState(() => Date.now());

  const isReviewStep = step === reviewStepIdx && !submitted;

  const progress = useCallback(() => {
    if (submitted) return 100;
    if (step === 0) return 4;
    if (step === 1) return 10;
    if (step === reviewStepIdx) return 98;
    const idx = step - 2;
    return Math.min(95, 10 + Math.round(((idx + 1) / flatQuestions.length) * 85));
  }, [step, submitted, flatQuestions.length, reviewStepIdx]);

  const canAdvance = useCallback(() => {
    if (step === 0) return true;
    if (step === 1) return !!(identify.setor && identify.tempo && identify.vinculo);
    if (step === reviewStepIdx) return true;
    const q = flatQuestions[step - 2];
    if (!q) return true;
    if (q.type === "likert") return answers[q.id] != null;
    if (q.type === "multi")  return Array.isArray(answers[q.id]) && answers[q.id].length > 0;
    if (q.type === "text")   return true;
    return true;
  }, [step, identify, answers, flatQuestions, reviewStepIdx]);

  const setAns = useCallback((qid, v) => {
    setAnswers((a) => ({ ...a, [qid]: v }));
  }, []);

  const toggleMulti = useCallback((qid, opt, max) => {
    setAnswers((a) => {
      const cur = Array.isArray(a[qid]) ? [...a[qid]] : [];
      const i = cur.indexOf(opt);
      if (i > -1) cur.splice(i, 1);
      else if (!max || cur.length < max) cur.push(opt);
      return { ...a, [qid]: cur };
    });
  }, []);

  const next = useCallback(() => {
    setSubmitError(null);
    // Submit when leaving the review step
    if (step === reviewStepIdx) {
      // Client-side filter against naive bots and instant-submit automation.
      // Server-side enforcement comes with the Supabase Edge Function.
      const tooFast = Date.now() - startedAt < MIN_DURATION_MS;
      const honeypotTripped = honeypot.trim() !== "";
      if (tooFast || honeypotTripped) {
        setSubmitError(SUSPECT_MESSAGE);
        return;
      }
      const result = submitSurvey({ token, identify, answers });
      setProtocol(result.protocol);
      setSubmitted(true);
      if (onSubmitted) onSubmitted(result.protocol);
      return;
    }
    // Edit excursion: after the user adjusts a single step coming from review,
    // bounce them straight back instead of forcing a full re-traversal.
    if (editingFromReview) {
      setEditingFromReview(false);
      setStep(reviewStepIdx);
      return;
    }
    setStep((s) => s + 1);
  }, [step, reviewStepIdx, token, identify, answers, onSubmitted, editingFromReview, honeypot, startedAt]);

  const back = useCallback(() => {
    setSubmitError(null);
    // Same idea on Back: cancelling an edit returns to review.
    if (editingFromReview) {
      setEditingFromReview(false);
      setStep(reviewStepIdx);
      return;
    }
    setStep((s) => (s > 0 ? s - 1 : s));
  }, [editingFromReview, reviewStepIdx]);

  const goToStep = useCallback((idx) => {
    if (idx < 0 || idx >= totalSteps) return;
    setSubmitError(null);
    setEditingFromReview(true);
    setStep(idx);
  }, [totalSteps]);

  const currentQuestion = step >= 2 && step < 2 + flatQuestions.length ? flatQuestions[step - 2] : null;
  const isLastQuestion  = step === 2 + flatQuestions.length - 1;

  return {
    // state
    step,
    identify,
    answers,
    submitted,
    protocol,
    flatQuestions,
    totalSteps,
    currentQuestion,
    isLastQuestion,
    isReviewStep,
    editingFromReview,
    honeypot,
    submitError,
    // derived
    progress,
    canAdvance,
    // actions
    setIdentify,
    setAns,
    toggleMulti,
    setHoneypot,
    next,
    back,
    goToStep,
  };
}
