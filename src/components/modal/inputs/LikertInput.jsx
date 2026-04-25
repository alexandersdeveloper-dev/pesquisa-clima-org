import { LIKERT } from "../../../data/survey.js";

export default function LikertInput({ qid, value, onChange }) {
  return (
    <div className="likert">
      {LIKERT.map((l) => (
        <button
          key={l.v}
          type="button"
          className={"lik" + (value === l.v ? " sel" : "")}
          onClick={() => onChange(qid, l.v)}
        >
          <span className="face">{l.face}</span>
          <span className="v">0{l.v}</span>
          <span className="lbl">{l.lbl}</span>
        </button>
      ))}
    </div>
  );
}
