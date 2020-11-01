import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";
import resumeData from "../../assets/resumeData.json"
import { ResumeData } from "../../types/ResumeData";
import { ContentSection } from "../styledcontent/Content";
const resume = resumeData as ResumeData 

const styles = StyleSheet.create({
  pageHeader:{
    margin: 5,
    textAlign: 'center',
    fontSize: 28
  },
  jobTitle: {
    fontSize: 12,
    textAlign: 'center',
    color: '#787878',
    fontWeight: "bold"
  },
  contact:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    fontSize: 11,
    color: '#0000EE',
    textDecoration: 'underline'    
  }
})

export const Header = () => (
  <View>
    <Text style={styles.pageHeader}>
      {resume.Header.Name}
    </Text>
    <Text style={styles.jobTitle}>
      {resume.Header["Job Title"]}
    </Text>
    <View style={styles.contact}>
      {resume.Header.Contact.map(c => ContentSection(c))} 
    </View>
  </View>
)