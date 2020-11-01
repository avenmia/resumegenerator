import React from 'react';
import { Page, View, Document, StyleSheet } from '@react-pdf/renderer'
import resumeData from "../assets/resumeData.json"
import { ResumeData, Skill } from "../types/ResumeData";
import { HeaderSection } from "./styledcontent/Header";
import { ContentSection } from "./styledcontent/Content";
import { SkillSection } from "./sections/Skill";
import { WorkExperienceSection } from "./sections/WorkExperience";
import { EducationSection } from "./sections/Education";
import { Header } from "./sections/Header";

const resume = resumeData as ResumeData 

const styles = StyleSheet.create({
  pageHeader:{
    padding: 10,
    textAlign: 'center'
  },
  jobTitle: {
    fontSize: 12,
    textAlign: 'center'
  },
  contact:{
    flexDirection: 'row',
    fontSize: 11,
  },
  header1:{

  },
  header2:{

  },
  page: {
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
})

export const Resume = () => (
  <Document>
    <Page size="LETTER" style={styles.page}>
      <View>
        <Header />
        <View>
          {HeaderSection("Skills")}
          <View>
            {Object.values(Skill).map(s => SkillSection("Skills", s))}
          </View>
          <View>
            {resume.Content["Work Experience"].map(we => WorkExperienceSection(we))}
          </View>
          <View>
            {resume.Content["Education"].map(ee => EducationSection(ee))}
          </View>
          <View>
            {HeaderSection("Professional Associations, Activities, Achievements")}
            {resume.Content["Professional Associations, Activities, Achievements"].map(p => ContentSection(p))}
          </View>
        </View>
      </View>
    </Page>
  </Document>
  )

