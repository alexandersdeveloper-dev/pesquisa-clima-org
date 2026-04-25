export default function SectionHead({ eyebrow, title, aside }) {
  return (
    <div className="section-head">
      <div className="left">
        <div className="eyebrow">{eyebrow}</div>
        <h2>{title}</h2>
      </div>
      {aside && <div className="right">{aside}</div>}
    </div>
  );
}
