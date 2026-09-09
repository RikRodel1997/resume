import type { CSSProperties } from "react";
import { useTranslation } from "react-i18next";
import type { ResumeLink } from "@/types";
import { Email, Link as LinkIcon, Phone } from "../icons";

const styles: Record<string, CSSProperties> = {
  entry: { display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 4 },
  icon: { marginRight: 5, width: 12, height: 12, flexShrink: 0 },
  link: { color: "inherit" },
};

interface ContactProps {
  sidebarHeader: CSSProperties;
}

export default function Contact({ sidebarHeader }: ContactProps) {
  const { t } = useTranslation();
  const links = (t("personal.links", { returnObjects: true }) || []) as ResumeLink[];

  return (
    <>
      <h3 style={sidebarHeader}>{t("contact.title")}</h3>
      <div style={styles.entry}>
        <Phone style={styles.icon} />
        <span>{t("personal.phone")}</span>
      </div>
      <div style={styles.entry}>
        <Email style={styles.icon} />
        <span>{t("personal.email")}</span>
      </div>
      {links.map((link) => (
        <div key={link.url} style={styles.entry}>
          <LinkIcon style={styles.icon} />
          <a href={link.url} style={styles.link} target="_blank" rel="noreferrer">
            {link.label}
          </a>
        </div>
      ))}
    </>
  );
}
