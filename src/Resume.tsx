import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import { useTranslation } from "react-i18next";
import Contact from "./components/Contact";
import Experience, { type ExperienceProps } from "./components/Experience";
import Language, { type LanguageProps } from "./components/Language";
import Skill, { type SkillProps } from "./components/Skill";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    padding: 0,
    fontFamily: "Helvetica",
    fontSize: 10,
    lineHeight: 1.5,
  },
  sidebar: {
    width: "30%",
    backgroundColor: "#F0F0F0",
    padding: 15,
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  sidebarHeader: { fontWeight: "bold", marginTop: 20, marginBottom: 5 },
  main: {
    marginTop: 20,
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
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    borderBottomStyle: "solid",
  },
});

export default function Resume() {
  const { t } = useTranslation();
  const skills = t("skills", { returnObjects: true }) as SkillProps[];
  const languages = t("languages", { returnObjects: true }) as LanguageProps[];
  const experiences = t("experiences", { returnObjects: true }) as ExperienceProps[];

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.sidebar}>
          <Contact sidebarHeader={styles.sidebarHeader} />
          <Text style={styles.sidebarHeader}>{t("skills.title")}</Text>
          <View style={{ flexDirection: "column", flexWrap: "wrap", gap: 4 }}>
            {skills.map(({ name, level }) => (
              <Skill key={name} name={name} level={level} />
            ))}
          </View>

          <Text style={styles.sidebarHeader}>{t("languages.title")}</Text>
          <View style={{ flexDirection: "column", flexWrap: "wrap", gap: 4 }}>
            {languages.map(({ name, level }) => (
              <Language key={name} name={name} level={level} />
            ))}
          </View>
        </View>

        <View style={styles.main}>
          <Text style={styles.name}>{t("personal.name")}</Text>
          <Text style={{ fontSize: 14, color: "#444" }}>{t("personal.title")}</Text>

          <Text style={styles.sectionTitle}>{t("experience.title")}</Text>
          {experiences.map(({ jobTitle, company, summary, startDate, endDate }) => (
            <Experience
              key={`${jobTitle}${company}`}
              jobTitle={jobTitle}
              company={company}
              summary={summary}
              startDate={startDate}
              endDate={endDate}
            />
          ))}

          <Text style={styles.sectionTitle}>{t("education.title")}</Text>
        </View>
      </Page>
    </Document>
  );
}
