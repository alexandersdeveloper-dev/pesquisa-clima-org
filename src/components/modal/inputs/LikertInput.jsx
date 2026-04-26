import { LIKERT } from "../../../data/survey.js";

const ICON_PROPS = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

const FACE_ICONS = {
  1: (
    <svg {...ICON_PROPS}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 16.5c1.3-1.6 2.6-2.3 4-2.3s2.7.7 4 2.3" />
      <line x1="9" y1="9.5" x2="9.01" y2="9.5" />
      <line x1="15" y1="9.5" x2="15.01" y2="9.5" />
    </svg>
  ),
  2: (
    <svg {...ICON_PROPS}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 15.6c1-.9 2.1-1.3 3.5-1.3s2.5.4 3.5 1.3" />
      <line x1="9" y1="9.5" x2="9.01" y2="9.5" />
      <line x1="15" y1="9.5" x2="15.01" y2="9.5" />
    </svg>
  ),
  3: (
    <svg {...ICON_PROPS}>
      <circle cx="12" cy="12" r="9" />
      <line x1="8.5" y1="15" x2="15.5" y2="15" />
      <line x1="9" y1="9.5" x2="9.01" y2="9.5" />
      <line x1="15" y1="9.5" x2="15.01" y2="9.5" />
    </svg>
  ),
  4: (
    <svg {...ICON_PROPS}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 13.4c1 .9 2.1 1.3 3.5 1.3s2.5-.4 3.5-1.3" />
      <line x1="9" y1="9.5" x2="9.01" y2="9.5" />
      <line x1="15" y1="9.5" x2="15.01" y2="9.5" />
    </svg>
  ),
  5: (
    <svg {...ICON_PROPS}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12.7c1.3 1.6 2.6 2.3 4 2.3s2.7-.7 4-2.3" />
      <line x1="9" y1="9.5" x2="9.01" y2="9.5" />
      <line x1="15" y1="9.5" x2="15.01" y2="9.5" />
    </svg>
  ),
};

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
          <span className="face">{FACE_ICONS[l.v]}</span>
          <span className="v">0{l.v}</span>
          <span className="lbl">{l.lbl}</span>
        </button>
      ))}
    </div>
  );
}
