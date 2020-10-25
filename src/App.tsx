import React from 'react';
import { Page, PDFViewer, Text, View, Document, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#fff'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
})

const Resume = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
    </Page>
  </Document>
)

function App() {
  return (
    <div className="App">
        <PDFViewer>
          <Resume />
        </PDFViewer>
    </div>
  );
}

export default App;
