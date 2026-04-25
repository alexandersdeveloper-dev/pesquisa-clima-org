const MAX_LEN = 1000;

export default function TextInput({ qid, value, onChange }) {
  const v = value || "";
  return (
    <div>
      <textarea
        className="tx"
        maxLength={MAX_LEN}
        value={v}
        onChange={(e) => onChange(qid, e.target.value)}
        placeholder="Compartilhe sua opinião livremente. Sua resposta é anônima."
      />
      <div className="char-count">{v.length} / {MAX_LEN}</div>
    </div>
  );
}
