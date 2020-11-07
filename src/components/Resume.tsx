import React from 'react';
import { Page, View, Document, StyleSheet, Font } from '@react-pdf/renderer'
import resumeData from "../assets/resumeData.json"
import { ResumeData, Skill } from "../types/ResumeData";
import { HeaderSection } from "./styledcontent/Header";
import { SkillSection } from "./sections/Skill";
import { WorkExperienceSection } from "./sections/WorkExperience";
import { EducationSection } from "./sections/Education";
import { Header } from "./sections/Header";
import { Associations } from "./sections/Associations";
import { resumeStyles } from "./styles/styles";

const resume = resumeData as ResumeData

export const Resume = () => (
  <Document>
    <Page size="LETTER" style={resumeStyles.page}>
      <View style={resumeStyles.header}>
        <Header />
        <View>
          {HeaderSection("Skills")}
          <View>
            {Object.values(Skill).map(s => SkillSection("Skills", s))}
          </View>
          {HeaderSection("Work Experience")}
          <View>
            {resume.Content["Work Experience"].map(we => WorkExperienceSection(we))}
          </View>
          {HeaderSection("Education")}
          <View>
            {resume.Content["Education"].map(ee => EducationSection(ee))}
          </View>
          <Associations />
        </View>
      </View>
    </Page>
  </Document>
  )

