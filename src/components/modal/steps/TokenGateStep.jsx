export default function TokenGateStep({ token }) {
  return (
    <div className="token-gate">
      <div className="lock">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      </div>
      <h4>Confirme o uso do seu token</h4>
      <p>
        Este token é exclusivo desta sessão e será marcado como utilizado após
        o envio. Você poderá responder a pesquisa <strong>uma única vez</strong>.
      </p>
      <div className="tk-display">{token}</div>
      <div className="id-note gate">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
        <span>
          Ao clicar em <strong>Iniciar pesquisa</strong> você confirma estar
          ciente de que os dados serão tratados de forma agregada e anônima,
          conforme a política institucional da SEFIN.
        </span>
      </div>
    </div>
  );
}
