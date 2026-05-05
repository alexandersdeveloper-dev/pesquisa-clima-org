// Decorative cell pattern: 7 columns × 4 rows = 28 cells.
const PATTERN = [
  "b", "muted", "muted", "o", "muted", "y", "muted",
  "muted", "r", "muted", "muted", "b", "muted", "muted",
  "y", "muted", "b", "muted", "muted", "muted", "r",
  "muted", "muted", "muted", "y", "o", "muted", "muted",
];

export default function Trust() {
  return (
    <section className="trust">
      <div className="trust-card">
        <h3>Por que sua participação é importante?</h3>
        <p>
          Os resultados desta pesquisa são consolidados em um relatório técnico
          apresentado às lideranças institucionais, e tornam-se base para o
          Plano de Ação de Clima Organizacional do exercício seguinte.
        </p>
        <ul className="checks">
          <li>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Os resultados são tratados de forma agregada — nunca individual.
          </li>
          <li>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Relatório consolidado divulgado a todos os servidores ao final do ciclo.
          </li>
          <li>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Plano de ação publicado no portal institucional após análise.
          </li>
        </ul>
      </div>
      <div className="trust-vis">
        <div className="trust-vis-head">
          <div>
            <div className="k">Cobertura prevista</div>
            <div className="v">100% dos servidores convidados</div>
          </div>
          <div className="meta">Parintins · 2026</div>
        </div>
        <div className="vis-grid">
          {PATTERN.map((c, i) => (
            <div key={i} className={"cell " + c}></div>
          ))}
        </div>
        <div className="vis-cap">
          <span>Cobertura institucional</span>
          <span>· · ·</span>
          <span>Anônimo</span>
        </div>
      </div>
    </section>
  );
}
