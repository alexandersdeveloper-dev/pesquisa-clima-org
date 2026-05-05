import { LIKERT, SECTIONS } from "../../../data/survey.js";

export default function ReviewStep({ identify, answers, flatQuestions, onEdit, submitError }) {
  const likertLabel = (v) => {
    const item = LIKERT.find((l) => l.v === v);
    return item ? item.lbl : "—";
  };

  const renderAnswer = (q) => {
    const a = answers[q.id];
    if (q.type === "likert") {
      return a != null ? <span>{likertLabel(a)}</span> : <span className="empty">—</span>;
    }
    if (q.type === "multi") {
      return Array.isArray(a) && a.length > 0
        ? <span>{a.join(" · ")}</span>
        : <span className="empty">—</span>;
    }
    if (q.type === "text") {
      return a && a.trim()
        ? <span className="text-ans">“{a}”</span>
        : <em className="empty">Sem comentário</em>;
    }
    return null;
  };

  return (
    <div className="review-step">
      <div className="qheader">
        <div className="qmeta">Antes de enviar</div>
        <h3 className="qtxt">Confira suas respostas.</h3>
        <p className="qsub">
          Você pode editar qualquer item. Após o envio, as respostas não podem
          ser alteradas.
        </p>
      </div>

      {submitError && (
        <div className="review-error" role="alert">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <span>{submitError}</span>
        </div>
      )}

      <div className="review-block">
        <div className="review-head">
          <h4>Identificação</h4>
          <button type="button" className="review-edit" onClick={() => onEdit(1)}>
            Editar
          </button>
        </div>
        <dl className="review-fields">
          <div>
            <dt>Secretaria</dt>
            <dd>{identify.setor || <span className="empty">—</span>}</dd>
          </div>
          <div>
            <dt>Tempo de serviço</dt>
            <dd>{identify.tempo || <span className="empty">—</span>}</dd>
          </div>
          <div>
            <dt>Tipo de vínculo</dt>
            <dd>{identify.vinculo || <span className="empty">—</span>}</dd>
          </div>
        </dl>
      </div>

      {SECTIONS.map((sec) => {
        const secQs = flatQuestions
          .map((q, i) => ({ q, i }))
          .filter(({ q }) => q.sectionId === sec.id);
        if (secQs.length === 0) return null;
        return (
          <div className="review-block" key={sec.id}>
            <div className="review-head">
              <h4>{sec.label}</h4>
            </div>
            <ul className="review-list">
              {secQs.map(({ q, i }) => (
                <li key={q.id}>
                  <div className="review-q">{q.text}</div>
                  <div className="review-a">{renderAnswer(q)}</div>
                  <button
                    type="button"
                    className="review-edit"
                    onClick={() => onEdit(i + 2)}
                    aria-label={`Editar resposta da pergunta: ${q.text}`}
                  >
                    Editar
                  </button>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
