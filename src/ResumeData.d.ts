interface WorkExperience
{
  Title: string;
  Employer: string;
  "Start Date": string;
  "End Date": string;
  Description: string[];
}

interface EducationExperience
{
  School: string;
  Degree: string;
  Major: string;
  "Start Date": string;
  "End Date": string;
  "Major GPA"?: string;
  "Overall GPA"?: string
}

export interface ResumeData
{
  Header: {
    Name : string;
    "Job Title": string;
    Contact: string[];
  },
  Skills: {
    Languages: string[];
    Technologies: string[];
    "Coding Styles": string[];
    "Version Control": string[];
    "Soft Skills": string[];
  },
  "Work Experience": WorkExperience[],
  Education: EducationExperience[],
  "Professional Associations, Activities, Achievements": string[]

}