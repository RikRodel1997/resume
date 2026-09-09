import type { CSSProperties } from "react";
import { useTranslation } from "react-i18next";
import Contact from "./components/Contact";
import Experience, { type ExperienceProps } from "./components/Experience";
import Language, { type LanguageProps } from "./components/Language";
import Skill, { type SkillProps } from "./components/Skill";

const styles: Record<string, CSSProperties> = {
  page: {
    display: "flex",
    flexDirection: "row",
    fontFamily: "Helvetica, Arial, sans-serif",
    fontSize: 10,
    lineHeight: 1.5,
    color: "#000",
    backgroundColor: "#fff",
  },
  sidebar: {
    width: "30%",
    backgroundColor: "#F0F0F0",
    padding: 15,
    display: "flex",
    flexDirection: "column",
  },
  sidebarHeader: { fontSize: 12, fontWeight: "bold", marginTop: 20, marginBottom: 5 },
  main: {
    paddingTop: 20,
    width: "70%",
    backgroundColor: "#FFFFFF",
    padding: 15,
    display: "flex",
    flexDirection: "column",
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 0,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    borderBottom: "1px solid #000",
    paddingBottom: 4,
  },
};

export default function Resume() {
  const { t } = useTranslation();
  const skills = t("skills", { returnObjects: true }) as SkillProps[];
  const languages = t("languages", { returnObjects: true }) as LanguageProps[];
  const experiences = t("experiences", { returnObjects: true }) as ExperienceProps[];

  return (
    <div className="resume-page" style={styles.page}>
      <div style={styles.sidebar}>
        <Contact sidebarHeader={styles.sidebarHeader} />
        <h3 style={styles.sidebarHeader}>{t("skills.title")}</h3>
        <div style={{ display: "flex", flexDirection: "column", flexWrap: "wrap", gap: 4 }}>
          {skills.map(({ name, level }) => (
            <Skill key={name} name={name} level={level} />
          ))}
        </div>

        <h3 style={styles.sidebarHeader}>{t("languages.title")}</h3>
        <div style={{ display: "flex", flexDirection: "column", flexWrap: "wrap", gap: 4 }}>
          {languages.map(({ name, level }) => (
            <Language key={name} name={name} level={level} />
          ))}
        </div>
      </div>

      <div style={styles.main}>
        <h1 style={styles.name}>{t("personal.name")}</h1>
        <p style={{ fontSize: 14, color: "#444", margin: 0 }}>{t("personal.title")}</p>

        <h2 style={styles.sectionTitle}>{t("experience.title")}</h2>
        {experiences.map(({ jobTitle, company, summary, achievements, startDate, endDate }) => (
          <Experience
            key={`${jobTitle}${company}`}
            jobTitle={jobTitle}
            company={company}
            summary={summary}
            achievements={achievements}
            startDate={startDate}
            endDate={endDate}
          />
        ))}

        <h2 style={styles.sectionTitle}>{t("education.title")}</h2>
      </div>
    </div>
  );
}
