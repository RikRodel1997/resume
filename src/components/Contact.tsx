import { Link, StyleSheet, Text, View } from "@react-pdf/renderer";
import type { Style } from "@react-pdf/types";
import { useTranslation } from "react-i18next";
import type { ResumeLink } from "@/types";
import { Email, Link as LinkIcon, Phone } from "../icons";

const styles = StyleSheet.create({
  entry: { flexDirection: "row", marginRight: 10 },
  icon: { marginRight: 5, width: 12, height: 12 },
});

interface ContactProps {
  sidebarHeader: Style;
}

export default function Contact({ sidebarHeader }: ContactProps) {
  const { t } = useTranslation();
  const links = (t("personal.links", { returnObjects: true }) || []) as ResumeLink[];

  return (
    <>
      <Text style={sidebarHeader}>{t("contact.title")}</Text>
      <View style={styles.entry}>
        <Phone style={styles.icon} />
        <Text>{t("personal.phone")}</Text>
      </View>
      <View style={styles.entry}>
        <Email style={styles.icon} />
        <Text>{t("personal.email")}</Text>
      </View>
      {links.map((link) => (
        <View key={link.url} style={styles.entry}>
          <LinkIcon style={styles.icon} />
          <Link href={link.url}>{link.label}</Link>
        </View>
      ))}
    </>
  );
}
