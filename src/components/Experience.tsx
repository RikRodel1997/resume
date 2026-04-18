import { Text, View } from "@react-pdf/renderer";
import { useTranslation } from "react-i18next";

export type ExperienceProps = {
  jobTitle: string;
  company: string;
  summary: string;
  startDate: string;
  endDate?: string;
};

export default function Experience({
  jobTitle,
  company,
  summary,
  startDate,
  endDate,
}: ExperienceProps) {
  const { t } = useTranslation();

  return (
    <View style={{ marginBottom: 10 }}>
      <View style={{ flexDirection: "row", alignContent: "center" }}>
        <Text style={{ fontSize: 9, fontWeight: "bold" }}>
          {company} | {jobTitle}
        </Text>
      </View>
      <Text style={{ fontSize: 9 }}>{summary}</Text>
      <Text style={{ fontSize: 9 }}>
        {startDate} - {endDate ? endDate : t("experience.current")}
      </Text>
    </View>
  );
}
