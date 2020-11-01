import React from 'react';
import { Page, PDFViewer, Text, View, Document, StyleSheet } from '@react-pdf/renderer'
import './App.css';
import resumeData from "./assets/resumeData.json"
import { EducationExperience, ResumeData, Skill, WorkExperience } from "./types/ResumeData";

const resume = resumeData as ResumeData 

const styles = StyleSheet.create({
  pageHeader:{
    margin: 10,
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

const HeaderSection = (header: string) => (
  <Text>{header}</Text>
)

const ContentSection = (section:string) => (
  <Text>{section}</Text>
)

const SkillSection = (category: "Skills", subcategory: Skill) => {
  return(
    <View>
      {resume.Content[category][subcategory].map(x => ContentSection(x))}
    </View>
)}

const WorkExperienceSection = (workExperience: WorkExperience) => 
{
  return (
    <View>
      <Text>Title: {workExperience["Title"]}</Text>
      <Text>Employer: {workExperience["Employer"]}</Text>
      <Text>Start Date: {workExperience["Start Date"]}</Text>
      <Text>End Date: {workExperience["End Date"]}</Text>
      <Text>Description: {workExperience["Description"]}</Text>
    </View>
  )
}

const EducationSection = (educationExperience: EducationExperience) =>
{
  return (
    <View>
      <Text>School: {educationExperience["School"]}</Text>
      <Text>Degree: {educationExperience["Degree"]}</Text>
      <Text>Major: {educationExperience["Major"]}</Text>
      <Text>Start Date: {educationExperience["Start Date"]}</Text>
      <Text>End Date: {educationExperience["End Date"]}</Text>
    </View>
  )
}

const Resume = () => {
  return (
  <Document>
    <Page size="LETTER" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.pageHeader}>
          {resume.Header.Name}
        </Text>
        <Text style={styles.jobTitle}>
          {resume.Header["Job Title"]}
        </Text>
        <View style={styles.contact}>
            {resume.Header.Contact.map(c => ContentSection(c))} 
        </View>
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
            {resume.Content["Professional Associations, Activities, Achievements"].map(p => ContentSection(p))}
          </View>
        </View>
      </View>
    </Page>
  </Document>
  )
}

function App() {
  return (
    <div className="App">
        <PDFViewer className="PDFViewer">
          <Resume />
        </PDFViewer>
    </div>
  );
}

export default App;
