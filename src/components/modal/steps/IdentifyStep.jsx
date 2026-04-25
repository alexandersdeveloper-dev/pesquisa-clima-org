import { SETORES, TEMPOS_SERVICO, VINCULOS } from "../../../data/survey.js";

export default function IdentifyStep({ identify, setIdentify }) {
  const update = (field) => (e) =>
    setIdentify((i) => ({ ...i, [field]: e.target.value }));

  return (
    <div>
      <div className="qheader">
        <div className="qmeta">Caracterização anônima</div>
        <h3 className="qtxt">
          Conte-nos um pouco sobre seu vínculo institucional.
        </h3>
        <p className="qsub">
          Estes dados são utilizados apenas para análise por grupos. Setores
          com menos de 5 participantes serão consolidados na categoria geral.
        </p>
      </div>
      <div className="id-form">
        <div className="id-field">
          <label>Setor / Departamento</label>
          <select value={identify.setor} onChange={update("setor")}>
            <option value="">Selecione...</option>
            {SETORES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
        <div className="id-field">
          <label>Tempo de serviço</label>
          <select value={identify.tempo} onChange={update("tempo")}>
            <option value="">Selecione...</option>
            {TEMPOS_SERVICO.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
        <div className="id-field full">
          <label>Tipo de vínculo</label>
          <select value={identify.vinculo} onChange={update("vinculo")}>
            <option value="">Selecione...</option>
            {VINCULOS.map((v) => (
              <option key={v} value={v}>{v}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="id-note">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2 4 5v6c0 5 3.5 9.7 8 11 4.5-1.3 8-6 8-11V5l-8-3z" />
        </svg>
        <span>
          Estas informações <strong>não identificam</strong> você
          individualmente. São utilizadas apenas para cruzamento estatístico.
        </span>
      </div>
    </div>
  );
}
