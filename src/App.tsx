import React from 'react';
import { Page, PDFViewer, Text, View, Document, StyleSheet } from '@react-pdf/renderer'
import './App.css';
import ResumeData from "./assets/resumeData.json"

const styles = StyleSheet.create({
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
  <Text>{section}</Text>
)

const Resume = () => (
  <Document>
    <Page size="LETTER" style={styles.page}>
      <View style={styles.section}>
        {console.log(ResumeData)}
        {Object.keys(ResumeData).map(rd => ResumeSections(rd))}
      </View>
    </Page>
  </Document>
)

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
