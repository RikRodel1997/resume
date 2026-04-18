import type { Style } from "@react-pdf/types";

export type IconProps = {
  style?: Style;
};

export type ResumeLink = {
  label: string;
  url: string;
}

export type Skill = {
  name: string;
  level: string;
}

export type Language = {
  name: string;
  level: string;
}

export type Experience = {
  jobTitle: string;
  company: string;
  summary: string;
  startDate: string;
  endDate: string | null;
}

export type Education = {
  degree: string;
}

export type Personal = {
  name: string;
  title: string;
  phone: string;
  email: string;
  links: ResumeLink[];
}
