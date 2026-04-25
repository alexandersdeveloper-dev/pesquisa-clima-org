import { useEffect, useRef } from "react";
import ProgressBar from "./ProgressBar.jsx";

export default function ModalShell({
  label,
  title,
  scrollResetKey,
  progress,
  stepInfo,
  showBack,
  onBack,
  nextLabel,
  nextIcon,
  nextDisabled,
  onNext,
  onClose,
  children,
}) {
  const bodyRef = useRef(null);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = 0;
  }, [scrollResetKey]);

  function handleOverlayClick(e) {
    if (e.target.classList.contains("overlay")) onClose();
  }

  return (
    <div className="overlay" role="dialog" aria-modal="true" onClick={handleOverlayClick}>
      <div className="modal">
        <div className="modal-head">
          <div>
            <div className="lbl">{label}</div>
            <h3>{title}</h3>
          </div>
          <button className="modal-close" onClick={onClose} aria-label="Fechar">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <ProgressBar percent={progress} />
        <div className="modal-body" ref={bodyRef}>
          {children}
        </div>
        <div className="modal-foot">
          <div className="step-info">{stepInfo}</div>
          <div className="actions">
            {showBack && (
              <button className="btn-back" onClick={onBack}>Voltar</button>
            )}
            <button className="btn-next" onClick={onNext} disabled={nextDisabled}>
              {nextLabel}
              {nextIcon}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
