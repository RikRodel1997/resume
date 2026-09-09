import "i18next";
import type { Personal, Skill } from "./types";

declare module "i18next" {
  interface CustomType {
    translation: {
      "contact.title": string;
      "skills.title": string;
      "languages.title": string;
      "experience.title": string;
      "education.title": string;
      "experience.current": string;
      "education.current": string;
      "personal": Personal;
      "skills": Skill;
    };
  }
}