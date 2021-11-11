export type Resume = {
  name: Name;
  objective: Name;
  contacts: Contact[];
  links: Link[];
  skills: Skill[];
  accomplishments: Accomplishment[];
  education: School[];
  experience: Experience[];
  projects: Project[];
}

export type Name = string;
export type Objective = string;

export type Contact = {
  title: string;
  icon: string;
  link: string;
}

export type Link = {
  title: string;
  link: string;
}

export type Skill = {
  title: string;
  items: string[];
}

export type School = {
  title: string;
  degree: string;
  desc: string[];
}

export type Accomplishment = string;

export type Experience = {
  company: string;
  location: string;
  position: string;
  start: string;
  end: string;
  desc: string[];
}

export type Project = {
  title: string;
  desc: string;
}
