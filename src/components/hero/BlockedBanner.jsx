export default function BlockedBanner() {
  return (
    <div className="blocked-banner">
      <div className="ico">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      </div>
      <div className="tx">
        <strong>Esta pesquisa já foi respondida neste dispositivo.</strong>
        <span>Cada servidor pode participar uma única vez. Agradecemos sua contribuição.</span>
      </div>
    </div>
  );
}
