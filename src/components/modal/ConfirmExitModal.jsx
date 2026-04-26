import { useEffect, useRef } from "react";

export default function ConfirmExitModal({ onCancel, onConfirm }) {
  const cancelRef = useRef(null);

  useEffect(() => {
    cancelRef.current?.focus();
  }, []);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onCancel();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onCancel]);

  function handleOverlayClick(e) {
    if (e.target.classList.contains("confirm-overlay")) onCancel();
  }

  return (
    <div
      className="confirm-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="confirm-exit-title"
      aria-describedby="confirm-exit-desc"
      onClick={handleOverlayClick}
    >
      <div className="confirm-modal">
        <h4 id="confirm-exit-title" className="confirm-title">
          Deseja sair da pesquisa?
        </h4>
        <p id="confirm-exit-desc" className="confirm-text">
          Suas respostas ainda não foram enviadas e serão perdidas se você sair agora.
        </p>
        <div className="confirm-actions">
          <button
            ref={cancelRef}
            type="button"
            className="confirm-btn confirm-btn-secondary"
            onClick={onCancel}
          >
            Continuar respondendo
          </button>
          <button
            type="button"
            className="confirm-btn confirm-btn-danger"
            onClick={onConfirm}
          >
            Sair da pesquisa
          </button>
        </div>
      </div>
    </div>
  );
}
