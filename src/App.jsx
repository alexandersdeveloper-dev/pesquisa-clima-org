import { useState } from "react";
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import Hero from "./components/hero/Hero.jsx";
import Pillars from "./components/sections/Pillars.jsx";
import How from "./components/sections/How.jsx";
import Trust from "./components/sections/Trust.jsx";
import Faq from "./components/sections/Faq.jsx";
import SurveyModal from "./components/modal/SurveyModal.jsx";
import { useSurveyToken } from "./hooks/useSurveyToken.js";
import { useSubmissionStatus } from "./hooks/useSubmissionStatus.js";

export default function App() {
  const token = useSurveyToken();
  const { blocked, refresh } = useSubmissionStatus();
  const [showSurvey, setShowSurvey] = useState(false);

  function start() {
    if (blocked) return;
    setShowSurvey(true);
  }

  function complete() {
    setShowSurvey(false);
    refresh();
  }

  return (
    <>
      <Header />
      <main>
        <Hero token={token} blocked={blocked} onStart={start} />
        <Pillars />
        <How />
        <Trust />
        <Faq />
      </main>
      <Footer />
      {showSurvey && (
        <SurveyModal
          token={token}
          onClose={() => setShowSurvey(false)}
          onComplete={complete}
        />
      )}
    </>
  );
}
