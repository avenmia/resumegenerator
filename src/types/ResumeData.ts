export interface WorkExperience
{
  Title: string;
  Employer: string;
  "Start Date": string;
  "End Date": string;
  Description: string[];
}

export interface EducationExperience
{
  School: string;
  Degree: string;
  Major: string;
  "Start Date": string;
  "End Date": string;
  "Major GPA"?: string;
  "Overall GPA"?: string
}



export enum Skill {
  "Languages" = "Languages",
  "Technologies" = "Technologies",
  "Coding Styles" = "Coding Styles",
  "Soft Skills" = "Soft Skills"
}

export type Skills = { [k in Skill] : string[]}

export interface Content
{
  Skills: Skills,
  "Work Experience": WorkExperience[],
  Education: EducationExperience[],
  "Professional Associations, Activities, Achievements": string[] 
}

export interface ResumeData
{
  Header: {
    Name : string;
    "Job Title": string;
    Contact: Contact[];
  },
  Content: Content;

}

interface Contact
{
  name: string;
  src: string;
}
