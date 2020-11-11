import React from 'react';
import {PDFDownloadLink, PDFViewer} from '@react-pdf/renderer'
import './App.css';
import { Resume } from "./components/Resume";

function App() {
  return (
    <div className="App">
      <div>
        <PDFDownloadLink document={<Resume />} fileName="resume.pdf">
          {
            ({ blob, url, loading, error }) => {
              if(!loading)
              {
                var pdfURL = window.URL.createObjectURL(blob);
                var tempLink = document.createElement('a');
                tempLink.href = pdfURL;
                tempLink.setAttribute('download', 'resume.pdf');
                tempLink.click();
              }
              return (loading ? 'Loading document...' :  'Download pdf')
            }
          }
        </PDFDownloadLink>
        <PDFViewer className="PDFViewer">
          <Resume />
        </PDFViewer>
      </div>
    </div>
  );
}

export default App;
