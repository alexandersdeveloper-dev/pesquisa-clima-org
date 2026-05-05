import { describe, it, expect } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useSurveyMachine } from "./useSurveyMachine.js";

const TOKEN = "ABCD-EFGH-JKLM";

describe("useSurveyMachine.canAdvance", () => {
  it("allows advance from the token gate (step 0)", () => {
    const { result } = renderHook(() => useSurveyMachine({ token: TOKEN }));
    expect(result.current.step).toBe(0);
    expect(result.current.canAdvance()).toBe(true);
  });

  it("blocks advance from identify until setor, tempo and vinculo are all filled", () => {
    const { result } = renderHook(() => useSurveyMachine({ token: TOKEN }));

    act(() => result.current.goToStep(1));
    expect(result.current.canAdvance()).toBe(false);

    act(() =>
      result.current.setIdentify({ setor: "Secretaria de Finanças", tempo: "", vinculo: "" })
    );
    expect(result.current.canAdvance()).toBe(false);

    act(() =>
      result.current.setIdentify({
        setor: "Secretaria de Finanças",
        tempo: "1 a 3 anos",
        vinculo: "",
      })
    );
    expect(result.current.canAdvance()).toBe(false);

    act(() =>
      result.current.setIdentify({
        setor: "Secretaria de Finanças",
        tempo: "1 a 3 anos",
        vinculo: "Servidor efetivo",
      })
    );
    expect(result.current.canAdvance()).toBe(true);
  });

  it("blocks advance from a likert question until an answer is set", () => {
    const { result } = renderHook(() => useSurveyMachine({ token: TOKEN }));
    const likertIdx = result.current.flatQuestions.findIndex((q) => q.type === "likert");
    expect(likertIdx).toBeGreaterThanOrEqual(0);

    act(() => result.current.goToStep(2 + likertIdx));
    expect(result.current.currentQuestion.type).toBe("likert");
    expect(result.current.canAdvance()).toBe(false);

    const qid = result.current.currentQuestion.id;
    act(() => result.current.setAns(qid, 4));
    expect(result.current.canAdvance()).toBe(true);
  });

  it("blocks advance from a multi question until at least one option is selected", () => {
    const { result } = renderHook(() => useSurveyMachine({ token: TOKEN }));
    const multiIdx = result.current.flatQuestions.findIndex((q) => q.type === "multi");
    expect(multiIdx).toBeGreaterThanOrEqual(0);

    act(() => result.current.goToStep(2 + multiIdx));
    const q = result.current.currentQuestion;
    expect(q.type).toBe("multi");
    expect(result.current.canAdvance()).toBe(false);

    act(() => result.current.toggleMulti(q.id, q.options[0], q.max));
    expect(result.current.canAdvance()).toBe(true);
  });

  it("allows advance from a text question even when empty (optional)", () => {
    const { result } = renderHook(() => useSurveyMachine({ token: TOKEN }));
    const textIdx = result.current.flatQuestions.findIndex((q) => q.type === "text");
    expect(textIdx).toBeGreaterThanOrEqual(0);

    act(() => result.current.goToStep(2 + textIdx));
    expect(result.current.currentQuestion.type).toBe("text");
    expect(result.current.canAdvance()).toBe(true);
  });

  it("allows advance from the review step (no validation gate)", () => {
    const { result } = renderHook(() => useSurveyMachine({ token: TOKEN }));
    const reviewIdx = result.current.totalSteps - 1;

    act(() => result.current.goToStep(reviewIdx));
    expect(result.current.isReviewStep).toBe(true);
    expect(result.current.canAdvance()).toBe(true);
  });
});
