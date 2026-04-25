export default function DoneStep({ protocol }) {
  return (
    <div className="done">
      <div className="check">
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      <h4>Pesquisa enviada com sucesso.</h4>
      <p>
        Sua contribuição foi registrada de forma{" "}
        <strong>totalmente anônima</strong>. Obrigado por dedicar seu tempo à
        melhoria da Secretaria de Finanças.
      </p>
      <p>
        O relatório consolidado será divulgado no portal institucional após o
        encerramento do ciclo.
      </p>
      <div className="protocol">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
        </svg>
        Protocolo {protocol}
      </div>
    </div>
  );
}
