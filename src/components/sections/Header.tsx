import React from "react";
import { View, Text } from "@react-pdf/renderer";
import resumeData from "../../assets/resumeData.json"
import { ResumeData } from "../../types/ResumeData";
import { headerStyles } from "../styles/styles"

const resume = resumeData as ResumeData 

export const Header = () => (
  <View>
    <Text style={headerStyles.pageHeader}>
      {resume.Header.Name}
    </Text>
    <Text style={headerStyles.jobTitle}>
      {resume.Header["Job Title"]}
    </Text>
    <View style={headerStyles.contact}>
      {resume.Header.Contact.map(c => {return (<Text style={headerStyles.contact}>{c}</Text>)})} 
    </View>
  </View>
)