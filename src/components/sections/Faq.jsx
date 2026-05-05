const ITEMS = [
  {
    q: "Minhas respostas podem ser identificadas?",
    a: "Não. O sistema não coleta nome, matrícula, e-mail, IP ou qualquer outro identificador pessoal. Os dados de Secretaria e tempo de serviço são armazenados em conjunto com as respostas, mas analisados apenas em grupos com volume estatístico mínimo para preservar o anonimato.",
  },
  {
    q: "Posso responder pelo celular?",
    a: "Sim. O portal foi desenhado para funcionar em qualquer dispositivo — computador, tablet ou celular —, dentro ou fora da rede da Prefeitura.",
  },
  {
    q: "Posso pausar e voltar mais tarde?",
    a: "As respostas são mantidas no seu navegador enquanto você não fecha a aba. Recomendamos concluir em uma única sessão para garantir que sua participação seja registrada.",
  },
  {
    q: "Como recebo o resultado?",
    a: "O relatório consolidado será publicado no portal institucional e enviado por comunicado interno a todos os servidores ao final do ciclo.",
  },
  {
    q: "E se eu encontrar algum problema técnico?",
    a: "Entre em contato com o suporte técnico oficial da Prefeitura pelos canais institucionais. Você não precisa se identificar como participante da pesquisa.",
  },
];

export default function Faq() {
  return (
    <section className="faq">
      <div className="faq-grid">
        <div className="faq-intro">
          <div className="eyebrow">Perguntas frequentes</div>
          <h2>Tudo o que você precisa saber antes de começar.</h2>
          <p>
            Transparência também faz parte da escuta. Esclarecemos abaixo as
            principais dúvidas sobre confidencialidade, participação e uso dos
            resultados.
          </p>
        </div>
        <div className="faq-list">
          {ITEMS.map((it, i) => (
            <details className="q" key={i} open={i === 0}>
              <summary>
                <span>{it.q}</span>
                <span className="plus">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </span>
              </summary>
              <div className="ans">{it.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
