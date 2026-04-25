export default function MultiChoiceInput({ qid, options, max, value, onToggle }) {
  const selected = value || [];
  return (
    <div className="choice-list">
      {options.map((opt) => {
        const isSel = selected.includes(opt);
        const disabled = !isSel && max && selected.length >= max;
        const className =
          "choice" + (isSel ? " sel" : "") + (disabled ? " disabled" : "");
        return (
          <div
            key={opt}
            className={className}
            onClick={() => !disabled && onToggle(qid, opt, max)}
          >
            <div className="box">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <div className="lbl">{opt}</div>
          </div>
        );
      })}
    </div>
  );
}
