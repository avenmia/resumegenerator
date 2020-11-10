import React from 'react';
import { PDFViewer} from '@react-pdf/renderer'
import './App.css';
import { Resume } from "./components/Resume";

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
