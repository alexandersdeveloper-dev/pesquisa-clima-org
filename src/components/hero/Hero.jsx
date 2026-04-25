import Breadcrumbs from "./Breadcrumbs.jsx";
import HeroStats from "./HeroStats.jsx";
import BlockedBanner from "./BlockedBanner.jsx";
import TokenCard from "./TokenCard.jsx";

export default function Hero({ token, blocked, onStart }) {
  return (
    <section className="hero">
      <div>
        <Breadcrumbs />
        <div className="h-eyebrow">
          <span className="pulse"></span>
          Pesquisa em andamento · Ciclo 2026
        </div>
        <h1 className="hero-title">
          Sua voz constrói um ambiente de <span className="accent">trabalho</span> melhor para todos.
        </h1>
        <p className="hero-lead">
          A Secretaria Municipal de Finanças realiza a Pesquisa de Clima
          Organizacional 2026 para ouvir cada servidor de forma{" "}
          <strong>totalmente anônima</strong>. Suas respostas alimentam
          diretamente nosso plano de melhorias institucionais — desde
          infraestrutura até políticas de gestão de pessoas.
        </p>

        {blocked ? (
          <BlockedBanner />
        ) : (
          <div className="hero-actions">
            <button className="btn-primary" onClick={onStart}>
              Iniciar pesquisa
              <svg className="arr" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
            <a href="#como" className="btn-ghost">Como funciona</a>
          </div>
        )}

        <HeroStats />
      </div>
      <TokenCard token={token} blocked={blocked} />
    </section>
  );
}
