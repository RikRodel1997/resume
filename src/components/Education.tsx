import { useTranslation } from "react-i18next";

export type EducationProps = {
  study: string;
  location: string;
  summary: string;
  startDate: string;
  endDate?: string;
};

export default function Education({
  study,
  location,
  summary,
  startDate,
  endDate,
}: EducationProps) {
  const { t } = useTranslation();

  return (
    <div style={{ marginBottom: 10 }}>
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <p style={{ fontSize: 9, fontWeight: "bold", margin: 0 }}>
          {study} | {location}
        </p>
      </div>
      <p style={{ fontSize: 9, margin: 0 }}>{summary}</p>
      <p style={{ fontSize: 9, margin: 0 }}>
        {startDate} - {endDate ? endDate : t("education.current")}
      </p>
    </div>
  );
}
