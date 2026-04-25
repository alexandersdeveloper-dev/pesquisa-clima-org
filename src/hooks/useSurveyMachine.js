import { useCallback, useMemo, useState } from "react";
import { SECTIONS } from "../data/survey.js";
import { submitSurvey } from "../services/surveyClient.js";

// Step index map (mirrors the original SurveyModal):
//   0           -> token gate
//   1           -> identification
//   2..N+1      -> one question per step (N = total questions)
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

  const totalSteps = 1 + 1 + flatQuestions.length; // gate + identify + questions

  const [step, setStep]       = useState(0);
  const [identify, setIdentify] = useState({ setor: "", tempo: "", vinculo: "" });
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [protocol, setProtocol]   = useState("");

  const progress = useCallback(() => {
    if (submitted) return 100;
    if (step === 0) return 4;
    if (step === 1) return 10;
    const idx = step - 2;
    return Math.min(95, 10 + Math.round(((idx + 1) / flatQuestions.length) * 85));
  }, [step, submitted, flatQuestions.length]);

  const canAdvance = useCallback(() => {
    if (step === 0) return true;
    if (step === 1) return !!(identify.setor && identify.tempo && identify.vinculo);
    const q = flatQuestions[step - 2];
    if (!q) return true;
    if (q.type === "likert") return answers[q.id] != null;
    if (q.type === "multi")  return Array.isArray(answers[q.id]) && answers[q.id].length > 0;
    if (q.type === "text")   return true;
    return true;
  }, [step, identify, answers, flatQuestions]);

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
    if (step >= totalSteps - 1) {
      const result = submitSurvey({ token, identify, answers });
      setProtocol(result.protocol);
      setSubmitted(true);
      if (onSubmitted) onSubmitted(result.protocol);
      return;
    }
    setStep((s) => s + 1);
  }, [step, totalSteps, token, identify, answers, onSubmitted]);

  const back = useCallback(() => {
    setStep((s) => (s > 0 ? s - 1 : s));
  }, []);

  const currentQuestion = step >= 2 ? flatQuestions[step - 2] : null;
  const isLastQuestion  = step === totalSteps - 1;

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
    // derived
    progress,
    canAdvance,
    // actions
    setIdentify,
    setAns,
    toggleMulti,
    next,
    back,
  };
}
