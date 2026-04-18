import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { useTranslation } from "react-i18next";
import ResumePreview from "./ResumeViewer";
import "./i18n";

export const App = () => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    setLang(newLang);
    i18n.changeLanguage(newLang);
  };

  return (
    <>
      <select value={lang} onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="nl">Nederlands</option>
      </select>
      <ResumePreview />
    </>
  );
};

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
