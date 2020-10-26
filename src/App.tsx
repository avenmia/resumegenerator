import React from 'react';
import { Page, PDFViewer, Text, View, Document, StyleSheet } from '@react-pdf/renderer'
import './App.css';

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

const Resume = () => (
  <Document>
    <Page size="LETTER" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
    <Page size="LETTER" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
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
