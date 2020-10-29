import React from 'react';
import { Page, PDFViewer, Text, View, Document, StyleSheet } from '@react-pdf/renderer'
import './App.css';
import resumeData from "./assets/resumeData.json"
import { ResumeData } from "./ResumeData";

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

const ResumeSections = (section:string ) => (
  <Text>{section} </Text>
)

const Resume = () => {
  const resume = resumeData as ResumeData  
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
            {resume.Header.Contact.map(c => ResumeSections(c))} 
        </View>
        {Object.keys(resumeData).map(rd => ResumeSections(rd))}
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
