import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Styles — order matters: tokens first, then base, then features.
import "./styles/tokens.css";
import "./styles/base.css";
import "./styles/header.css";
import "./styles/footer.css";
import "./styles/hero.css";
import "./styles/pillars.css";
import "./styles/how.css";
import "./styles/trust.css";
import "./styles/faq.css";
import "./styles/modal.css";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
