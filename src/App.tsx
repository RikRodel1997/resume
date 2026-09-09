import { useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { useTranslation } from "react-i18next";
import { useReactToPrint } from "react-to-print";
import "./i18n";
import "./resume.css";
import Resume from "./Resume";

export const App = () => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);
  const contentRef = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useReactToPrint({ contentRef });

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    setLang(newLang);
    i18n.changeLanguage(newLang);
  };

  return (
    <div>
      <div className="no-print">
        <select value={lang} onChange={handleLanguageChange}>
          <option value="en">English</option>
          <option value="nl">Nederlands</option>
        </select>
        <button type="button" onClick={reactToPrintFn}>
          Print
        </button>
      </div>
      <div ref={contentRef}>
        <Resume />
      </div>
    </div>
  );
};

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
