import { useEffect } from "react";
import { useSurveyMachine } from "../../hooks/useSurveyMachine.js";
import ModalShell from "./ModalShell.jsx";
import TokenGateStep from "./steps/TokenGateStep.jsx";
import IdentifyStep from "./steps/IdentifyStep.jsx";
import QuestionStep from "./steps/QuestionStep.jsx";
import DoneStep from "./steps/DoneStep.jsx";

const ARROW_ICON = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const LABEL = "Pesquisa de Clima Organizacional · SEFIN";

export default function SurveyModal({ token, onClose, onComplete }) {
  const m = useSurveyMachine({ token });

  // Lock background scroll while modal is open (mobile usability).
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, []);

  function handleClose() {
    if (m.submitted) {
      onComplete(m.protocol);
      return;
    }
    const ok = window.confirm(
      "Tem certeza que deseja fechar a pesquisa? Suas respostas até aqui serão perdidas."
    );
    if (ok) onClose();
  }

  function handleNext() {
    if (m.submitted) {
      onComplete(m.protocol);
      return;
    }
    m.next();
  }

  // ----- Per-step presentation -----
  let title;
  let stepInfo;
  let nextLabel = "Continuar";
  let nextIcon = ARROW_ICON;
  let content;

  if (m.submitted) {
    title = "Obrigado pela sua participação.";
    stepInfo = "Concluído";
    nextLabel = "Fechar";
    nextIcon = null;
    content = <DoneStep protocol={m.protocol} />;
  } else if (m.step === 0) {
    title = "Antes de começar";
    stepInfo = "Verificação de acesso";
    nextLabel = "Iniciar pesquisa";
    content = <TokenGateStep token={token} />;
  } else if (m.step === 1) {
    title = "Caracterização";
    stepInfo = `Etapa 1 de ${m.flatQuestions.length + 1}`;
    content = <IdentifyStep identify={m.identify} setIdentify={m.setIdentify} />;
  } else {
    const q = m.currentQuestion;
    const qIdx = m.step - 2;
    title = "Sua opinião conta";
    stepInfo = `Pergunta ${qIdx + 1} de ${m.flatQuestions.length} · ${q.section}`;
    if (m.isLastQuestion) nextLabel = "Enviar pesquisa";
    content = (
      <QuestionStep
        question={q}
        answer={m.answers[q.id]}
        setAns={m.setAns}
        toggleMulti={m.toggleMulti}
      />
    );
  }

  return (
    <ModalShell
      label={LABEL}
      title={title}
      scrollResetKey={m.step + (m.submitted ? "-done" : "")}
      progress={m.progress()}
      stepInfo={stepInfo}
      showBack={!m.submitted && m.step > 0}
      onBack={m.back}
      nextLabel={nextLabel}
      nextIcon={nextIcon}
      nextDisabled={!m.submitted && !m.canAdvance()}
      onNext={handleNext}
      onClose={handleClose}
    >
      {content}
    </ModalShell>
  );
}
