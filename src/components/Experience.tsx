import { useTranslation } from "react-i18next";
import { BulletList } from "./BulletList";

export type ExperienceProps = {
  jobTitle: string;
  company: string;
  summary: string;
  achievements: {
    summary: string;
    details: string;
  }[];
  startDate: string;
  endDate?: string;
};

export default function Experience({
  jobTitle,
  company,
  summary,
  achievements,
  startDate,
  endDate,
}: ExperienceProps) {
  const { t } = useTranslation();

  return (
    <div style={{ marginBottom: 10 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <p style={{ fontSize: 9, fontWeight: "bold", margin: 0 }}>{jobTitle}</p>
        <p style={{ fontSize: 8, margin: 0 }}>
          {startDate} - {endDate ? endDate : t("experience.current")}
        </p>
      </div>
      <p style={{ fontSize: 8, lineHeight: 1.7, fontStyle: "italic", margin: 0 }}>{company}</p>
      <p style={{ fontSize: 8, lineHeight: 1.6, margin: 0 }}>{summary}</p>
      {achievements ? (
        <BulletList
          items={achievements}
          keyExtractor={(achievement) => achievement.summary}
          renderItem={(achievement) => (
            <>
              {achievement.summary}
              <br />
              {achievement.details}
            </>
          )}
        />
      ) : undefined}
    </div>
  );
}
